"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { fmt } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["meta"];
type CommonText = CommonDictionary["ui"]["common"];

// Approximate desktop limits used by search engines before a snippet is cut off.
const TITLE_MAX_PX = 580;
const DESC_MAX_PX = 920;
const TITLE_FONT = "20px Arial, sans-serif";
const DESC_FONT = "14px Arial, sans-serif";

let measureCtx: CanvasRenderingContext2D | null = null;
function textWidth(text: string, font: string): number {
  if (!text) return 0;
  if (typeof document === "undefined") return 0;
  measureCtx ??= document.createElement("canvas").getContext("2d");
  if (!measureCtx) return 0;
  measureCtx.font = font;
  return measureCtx.measureText(text).width;
}

/** Cuts text to fit maxPx, at a word boundary, the way search snippets are truncated. */
function truncate(text: string, font: string, maxPx: number): string {
  if (textWidth(text, font) <= maxPx) return text;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (textWidth(text.slice(0, mid) + " ...", font) <= maxPx) lo = mid;
    else hi = mid - 1;
  }
  let cut = text.slice(0, lo);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > lo - 20 && lastSpace > 0) cut = cut.slice(0, lastSpace);
  return cut.replace(/[\s,;:–-]+$/, "") + " ...";
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

type Verdict = { tone: "success" | "warning" | "danger" | "muted"; text: string };

const toneClass: Record<Verdict["tone"], string> = {
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  muted: "bg-surface-2 text-muted",
};

function displayUrl(raw: string) {
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    const parts = url.pathname.split("/").filter(Boolean);
    return { host: url.hostname.replace(/^www\./, ""), crumbs: [url.origin, ...parts].join(" › ") };
  } catch {
    return { host: "example.com", crumbs: "https://example.com" };
  }
}

export default function MetaTagChecker({ t, c }: { t: Text; c: CommonText }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const titlePx = Math.round(textWidth(title, TITLE_FONT));
  const descPx = Math.round(textWidth(description, DESC_FONT));

  const titleVerdict: Verdict =
    title.length === 0
      ? { tone: "muted", text: t.enterTitle }
      : titlePx > TITLE_MAX_PX
        ? { tone: "danger", text: t.tooLong }
        : title.length < 30
          ? { tone: "warning", text: t.titleShort }
          : { tone: "success", text: t.good };

  const descVerdict: Verdict =
    description.length === 0
      ? { tone: "muted", text: t.enterDescription }
      : descPx > DESC_MAX_PX || description.length > 160
        ? { tone: "danger", text: t.tooLong }
        : description.length < 70
          ? { tone: "warning", text: t.descriptionShort }
          : { tone: "success", text: t.good };

  const shown = displayUrl(url.trim() || "https://www.example.com/your-page");
  const html = `<title>${escapeHtml(title)}</title>\n<meta name="description" content="${escapeHtml(description)}">`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be blocked by browser settings.
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Field
          id="meta-title"
          label={t.metaTitle}
          value={title}
          onChange={setTitle}
          placeholder={t.titlePlaceholder}
          stats={fmt(t.stats, { chars: title.length, px: titlePx, max: TITLE_MAX_PX })}
          verdict={titleVerdict}
        />
        <Field
          id="meta-description"
          label={t.metaDescription}
          value={description}
          onChange={setDescription}
          placeholder={t.descriptionPlaceholder}
          stats={fmt(t.stats, { chars: description.length, px: descPx, max: DESC_MAX_PX })}
          verdict={descVerdict}
          multiline
        />
        <div>
          <label htmlFor="meta-url" className="label">
            {t.pageUrl} <span className="font-normal text-muted">{t.optional}</span>
          </label>
          <input
            id="meta-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t.urlPlaceholder}
            className="input"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-text">{t.previewTitle}</h3>
        <div className="overflow-hidden rounded-2xl border border-border bg-white p-5 dark:bg-[#1f1f1f]">
          <div className="flex items-center gap-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f1f3f4] text-xs font-bold text-[#4d5156] dark:bg-[#303134] dark:text-[#bdc1c6]">
              {shown.host.charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm text-[#202124] dark:text-[#dadce0]">{shown.host}</p>
              <p className="truncate text-xs text-[#4d5156] dark:text-[#bdc1c6]">{shown.crumbs}</p>
            </div>
          </div>
          <p className="mt-2 truncate text-xl leading-snug text-[#1a0dab] dark:text-[#99c3ff]" style={{ fontFamily: "Arial, sans-serif" }}>
            {title ? truncate(title, TITLE_FONT, TITLE_MAX_PX) : t.previewTitlePlaceholder}
          </p>
          <p className="mt-1 text-sm leading-[1.58] text-[#4d5156] dark:text-[#bdc1c6]" style={{ fontFamily: "Arial, sans-serif" }}>
            {description ? truncate(description, DESC_FONT, DESC_MAX_PX) : t.previewDescriptionPlaceholder}
          </p>
        </div>
        <p className="mt-2 text-xs text-muted">{t.previewNote}</p>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-text">{t.htmlCode}</h3>
          <button type="button" onClick={copy} className="btn-secondary px-3 py-1.5 text-xs">
            {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
            {copied ? c.copied : t.copyCode}
          </button>
        </div>
        <pre className="overflow-x-auto rounded-xl bg-surface-2 p-4 font-mono text-xs leading-6 text-text">{html}</pre>
      </div>
    </div>
  );
}

function Field(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  stats: string;
  verdict: Verdict;
  multiline?: boolean;
}) {
  const { id, label, value, onChange, placeholder, stats, verdict, multiline } = props;
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="input resize-y"
        />
      ) : (
        <input id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="input" />
      )}
      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-muted tabular-nums">{stats}</span>
        <span className={`rounded-full px-2.5 py-0.5 font-medium ${toneClass[verdict.tone]}`}>{verdict.text}</span>
      </div>
    </div>
  );
}
