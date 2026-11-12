"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Check, CheckCircle2, Copy, Download, Minimize2, Sparkles, Trash2, WandSparkles } from "lucide-react";
import { downloadBlob, formatBytes } from "@/lib/files";
import { findJsonError, lineColumn } from "@/lib/json-error";
import { fmt } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["json"];
type CommonText = CommonDictionary["ui"]["common"];
type Indent = "2" | "4" | "tab";

const SAMPLE = `{"name":"ToolNook","version":2,"free":true,"tools":[{"slug":"json-formatter","category":"developer-tools","tags":["json","format","validate"]},{"slug":"word-counter","category":"text-tools","tags":["words","characters"]}],"owner":null}`;

function sortKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeysDeep);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    return Object.fromEntries(
      Object.keys(obj)
        .sort()
        .map((k) => [k, sortKeysDeep(obj[k])]),
    );
  }
  return value;
}

type Parsed =
  | { ok: true; value: unknown }
  | { ok: false; message: string; location: { line: number; column: number } | null };

function parse(text: string, t: Text): Parsed | null {
  if (!text.trim()) return null;
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (err) {
    // Our own scanner gives a precise location and a clearer (translated) message than the browser.
    const found = findJsonError(text);
    if (found) {
      return {
        ok: false,
        message: fmt(t.errors[found.code], { char: found.char ?? "" }),
        location: lineColumn(text, found.index),
      };
    }
    const message = err instanceof Error ? err.message : t.invalid;
    return { ok: false, message: message.replace(/^JSON\.parse: /, ""), location: null };
  }
}

export default function JsonFormatter({ t, c }: { t: Text; c: CommonText }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState<Indent>("2");
  const [sortKeys, setSortKeys] = useState(false);
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => parse(input, t), [input, t]);

  function transform(minify: boolean) {
    if (!parsed?.ok) return;
    const value = sortKeys ? sortKeysDeep(parsed.value) : parsed.value;
    const space = minify ? undefined : indent === "tab" ? "\t" : Number(indent);
    setOutput(JSON.stringify(value, null, space));
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be blocked by browser settings.
    }
  }

  const errorLine =
    parsed && !parsed.ok && parsed.location ? input.split("\n")[parsed.location.line - 1] ?? "" : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => transform(false)} disabled={!parsed?.ok} className="btn-primary">
          <WandSparkles className="size-4" aria-hidden />
          {t.format}
        </button>
        <button type="button" onClick={() => transform(true)} disabled={!parsed?.ok} className="btn-secondary">
          <Minimize2 className="size-4" aria-hidden />
          {t.minify}
        </button>
        <label className="flex items-center gap-2 text-sm text-text">
          <span className="text-muted">{t.indent}</span>
          <select
            value={indent}
            onChange={(e) => setIndent(e.target.value as Indent)}
            className="rounded-lg border border-border bg-surface px-2 py-1.5 text-sm"
          >
            <option value="2">{t.spaces2}</option>
            <option value="4">{t.spaces4}</option>
            <option value="tab">{t.tab}</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={sortKeys}
            onChange={(e) => setSortKeys(e.target.checked)}
            className="size-4 accent-brand"
          />
          {t.sortKeys}
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="json-input" className="text-sm font-medium text-text">
              {t.input}
            </label>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setInput(SAMPLE)}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-brand-text hover:bg-brand-soft"
              >
                <Sparkles className="size-3.5" aria-hidden />
                {t.sample}
              </button>
              <button
                type="button"
                onClick={() => {
                  setInput("");
                  setOutput("");
                }}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-muted hover:bg-surface-2"
              >
                <Trash2 className="size-3.5" aria-hidden />
                {c.clear}
              </button>
            </div>
          </div>
          <textarea
            id="json-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder={t.inputPlaceholder}
            className="input h-80 resize-y font-mono text-sm leading-6"
          />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="json-output" className="text-sm font-medium text-text">
              {t.output}
            </label>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={copy}
                disabled={!output}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-brand-text hover:bg-brand-soft disabled:opacity-40"
              >
                {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
                {copied ? c.copied : c.copy}
              </button>
              <button
                type="button"
                onClick={() => downloadBlob(new Blob([output], { type: "application/json" }), "formatted.json")}
                disabled={!output}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-brand-text hover:bg-brand-soft disabled:opacity-40"
              >
                <Download className="size-3.5" aria-hidden />
                {c.download}
              </button>
            </div>
          </div>
          <textarea
            id="json-output"
            value={output}
            readOnly
            spellCheck={false}
            placeholder={t.outputPlaceholder}
            className="input h-80 resize-y bg-surface-2/60 font-mono text-sm leading-6"
          />
        </div>
      </div>

      <div aria-live="polite">
        {parsed?.ok && (
          <p className="flex items-center gap-2 rounded-xl bg-success-soft px-4 py-3 text-sm font-medium text-success">
            <CheckCircle2 className="size-4 shrink-0" aria-hidden />
            {t.valid} · {formatBytes(new Blob([input]).size)}
            {output && ` → ${formatBytes(new Blob([output]).size)}`}
          </p>
        )}
        {parsed && !parsed.ok && (
          <div className="rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger">
            <p className="flex items-center gap-2 font-semibold">
              <AlertCircle className="size-4 shrink-0" aria-hidden />
              {t.invalid}
              {parsed.location && ` ${fmt(t.location, parsed.location)}`}
            </p>
            <p className="mt-1">{parsed.message}</p>
            {errorLine !== null && parsed.location && (
              <pre className="mt-2 overflow-x-auto rounded-lg bg-surface p-2 font-mono text-xs text-text">
                {errorLine}
                {"\n"}
                {/* Keep tabs as tabs so the caret lines up under the error */}
                <span className="text-danger">
                  {errorLine.slice(0, parsed.location.column - 1).replace(/[^\t]/g, " ")}^
                </span>
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
