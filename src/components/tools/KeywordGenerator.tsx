"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Download, ExternalLink, Lightbulb, Search, Sparkles } from "lucide-react";
import { downloadBlob } from "@/lib/files";
import { fmt, localeInfo, locales, type Locale } from "@/i18n/config";
import type { CommonDictionary, KeywordTemplates } from "@/i18n/types";

type Text = CommonDictionary["ui"]["keywordGenerator"];
type CommonText = CommonDictionary["ui"]["common"];
type Group = keyof KeywordTemplates;
type Intent = keyof Text["intents"];

const GROUPS: { key: Group; intent: Intent }[] = [
  { key: "questions", intent: "informational" },
  { key: "modifiers", intent: "commercial" },
  { key: "longTail", intent: "informational" },
  { key: "commercial", intent: "transactional" },
  { key: "comparisons", intent: "commercial" },
];

const intentStyle: Record<Intent, string> = {
  informational: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  commercial: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  transactional: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
};

/** Builds keyword ideas for each seed from the language's templates, without duplicates. */
export function generateKeywords(seeds: string[], templates: KeywordTemplates, lang: string, year: number) {
  const seen = new Set<string>();
  const result = {} as Record<Group, string[]>;
  for (const { key } of GROUPS) {
    result[key] = [];
    for (const seed of seeds) {
      for (const template of templates[key]) {
        const keyword = template
          .replaceAll("{k}", seed)
          .replaceAll("{year}", String(year))
          .toLocaleLowerCase(lang)
          .replace(/\s+/g, " ")
          .replace(/\b(\p{L}+) \1\b/gu, "$1") // "free free pdf" -> "free pdf"
          .trim();
        if (keyword && keyword !== seed && !seen.has(keyword)) {
          seen.add(keyword);
          result[key].push(keyword);
        }
      }
    }
  }
  return result;
}

function csvCell(value: string | number) {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export default function KeywordGenerator({
  t,
  c,
  locale,
  templates,
}: {
  t: Text;
  c: CommonText;
  locale: Locale;
  templates: Record<Locale, KeywordTemplates>;
}) {
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<Locale>(locale);
  const [seeds, setSeeds] = useState<string[]>([]);
  const [filter, setFilter] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const ideas = useMemo(() => {
    if (seeds.length === 0) return null;
    return generateKeywords(seeds, templates[lang], localeInfo[lang].intl, new Date().getFullYear());
  }, [seeds, templates, lang]);

  const visible = useMemo(() => {
    if (!ideas) return null;
    const f = filter.trim().toLocaleLowerCase();
    const out = {} as Record<Group, string[]>;
    for (const { key } of GROUPS) out[key] = f ? ideas[key].filter((k) => k.includes(f)) : ideas[key];
    return out;
  }, [ideas, filter]);

  const total = visible ? GROUPS.reduce((sum, g) => sum + visible[g.key].length, 0) : 0;

  function submit() {
    const list = input
      .split(/[,\n]/)
      .map((s) => s.trim().toLocaleLowerCase(localeInfo[lang].intl))
      .filter(Boolean);
    setSeeds([...new Set(list)].slice(0, 10));
    setFilter("");
  }

  async function copy(id: string, lines: string[]) {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // Clipboard may be blocked by browser settings.
    }
  }

  function downloadCsv() {
    if (!visible) return;
    const rows = [t.csvHeader];
    for (const g of GROUPS) {
      for (const k of visible[g.key]) {
        rows.push(
          [k, t.groups[g.key], t.intents[g.intent], k.split(" ").length, k.length].map(csvCell).join(","),
        );
      }
    }
    // The BOM lets Excel open accented characters correctly.
    downloadBlob(new Blob(["﻿" + rows.join("\n")], { type: "text/csv;charset=utf-8" }), "keywords.csv");
  }

  const allVisible = visible ? GROUPS.flatMap((g) => visible[g.key]) : [];

  return (
    <div className="space-y-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="grid gap-4 sm:grid-cols-[1fr_auto]"
      >
        <div>
          <label htmlFor="seed" className="label">
            {t.seedLabel}
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-muted" aria-hidden />
            <input
              id="seed"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.seedPlaceholder}
              className="input h-12 pl-10 text-base"
              autoComplete="off"
            />
          </div>
          <p className="mt-1.5 text-xs text-muted">{t.seedHint}</p>
        </div>
        <div>
          <label htmlFor="kw-lang" className="label">
            {t.language}
          </label>
          <select
            id="kw-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value as Locale)}
            className="input h-12 sm:w-44"
          >
            {locales.map((l) => (
              <option key={l} value={l}>
                {localeInfo[l].native}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!input.trim()} className="btn-primary h-12 text-base sm:col-span-2">
          <Sparkles className="size-4.5" aria-hidden />
          {t.generate}
        </button>
      </form>

      {!visible ? (
        <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-border px-6 py-12 text-center">
          <span className="grid size-14 place-items-center rounded-full bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
            <Lightbulb className="size-7" aria-hidden />
          </span>
          <p className="mt-4 font-semibold text-text">{t.emptyTitle}</p>
          <p className="mt-1 max-w-md text-sm text-muted">{t.emptyText}</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 rounded-2xl bg-surface-2 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-text" aria-live="polite">
              {fmt(t.resultCount, { n: total })}
            </p>
            <div className="flex flex-wrap gap-2">
              <label htmlFor="kw-filter" className="sr-only">
                {t.filter}
              </label>
              <input
                id="kw-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder={t.filterPlaceholder}
                className="input h-10 w-full py-2 text-sm sm:w-56"
              />
              <button
                type="button"
                onClick={() => copy("all", allVisible)}
                disabled={total === 0}
                className="btn-secondary py-2"
              >
                {copied === "all" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                {copied === "all" ? c.copied : t.copyAll}
              </button>
              <button type="button" onClick={downloadCsv} disabled={total === 0} className="btn-primary py-2">
                <Download className="size-4" aria-hidden />
                {t.downloadCsv}
              </button>
            </div>
          </div>

          {total === 0 ? (
            <p className="py-6 text-center text-sm text-muted">{t.noMatches}</p>
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {GROUPS.filter((g) => visible[g.key].length > 0).map((g) => (
                <section key={g.key} className="rounded-2xl border border-border" aria-label={t.groups[g.key]}>
                  <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-text">{t.groups[g.key]}</h3>
                      <span className="text-sm text-muted">{visible[g.key].length}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${intentStyle[g.intent]}`}>
                        {t.intents[g.intent]}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy(g.key, visible[g.key])}
                      className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-brand-text hover:bg-brand-soft"
                    >
                      {copied === g.key ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
                      {copied === g.key ? c.copied : c.copy}
                    </button>
                  </header>
                  <ul className="max-h-80 divide-y divide-border overflow-y-auto">
                    {visible[g.key].map((k) => (
                      <li key={k} className="group flex items-center justify-between gap-3 px-4 py-2 text-sm">
                        <span className="min-w-0 text-text">{k}</span>
                        <span className="flex shrink-0 items-center gap-2">
                          <span className="text-xs text-muted">{fmt(t.words, { n: k.split(" ").length })}</span>
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(k)}`}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="rounded p-1 text-muted opacity-60 transition hover:bg-surface-2 hover:text-brand-text group-hover:opacity-100"
                            aria-label={`Google: ${k}`}
                          >
                            <ExternalLink className="size-3.5" aria-hidden />
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}

          <p className="rounded-xl bg-warning-soft px-4 py-3 text-sm text-warning">{t.disclaimer}</p>
        </>
      )}
    </div>
  );
}
