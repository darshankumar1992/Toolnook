"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Check, Copy, Trash2 } from "lucide-react";
import { fmt, localeInfo, type Locale } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["wordCounter"];
type CommonText = CommonDictionary["ui"]["common"];

const READING_WPM = 238; // average adult silent reading speed
const SPEAKING_WPM = 140; // comfortable presentation pace

// English stop words are always ignored too, since mixed-language text is common.
const ENGLISH_STOP_WORDS =
  "the and for are but not you all any can had her was one our out has have his how its may new now old see two who did get him let say she too use that with this from they will would there their what about which when your into than then them these some could other more also been were just like only over such very where while after before because being does each here most much should those through under until why";

function segment(text: string, granularity: "word" | "sentence" | "grapheme", locale?: string) {
  return new Intl.Segmenter(locale, { granularity }).segment(text);
}

export function analyzeText(text: string, stopWords: Set<string>, locale?: string) {
  let words: string[] = [];
  let sentences = 0;
  let characters = 0;
  let charactersNoSpaces = 0;

  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    // Language-aware counting: handles Hindi, Kannada, Chinese, Japanese and more correctly.
    for (const s of segment(text, "word", locale)) if (s.isWordLike) words.push(s.segment);
    for (const s of segment(text, "sentence", locale)) if (s.segment.trim()) sentences++;
    for (const s of segment(text, "grapheme", locale)) {
      characters++;
      if (!/^\s+$/.test(s.segment)) charactersNoSpaces++;
    }
  } else {
    words = text.match(/\S+/g) ?? [];
    sentences = (text.match(/[^.!?]+[.!?]*/g) ?? []).filter((s) => s.trim()).length;
    characters = Array.from(text).length;
    charactersNoSpaces = Array.from(text.replace(/\s/g, "")).length;
  }

  const paragraphs = text.split(/\n+/).filter((line) => line.trim()).length;

  const counts = new Map<string, number>();
  for (const w of words) {
    const key = w.toLocaleLowerCase(locale);
    if (key.length < 3 || stopWords.has(key) || /^\d+$/.test(key)) continue;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  const keywords = [...counts.entries()]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return { words: words.length, characters, charactersNoSpaces, sentences, paragraphs, keywords };
}

export default function WordCounter({ t, c, locale }: { t: Text; c: CommonText; locale: Locale }) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const deferred = useDeferredValue(text);
  const intl = localeInfo[locale].intl;
  const stopWords = useMemo(() => new Set(`${t.stopWords} ${ENGLISH_STOP_WORDS}`.split(/\s+/)), [t.stopWords]);
  const stats = useMemo(() => analyzeText(deferred, stopWords, intl), [deferred, stopWords, intl]);
  const nf = new Intl.NumberFormat(intl);

  function duration(words: number, wpm: number) {
    if (words === 0) return fmt(t.seconds, { n: 0 });
    const totalSeconds = Math.max(1, Math.round((words / wpm) * 60));
    if (totalSeconds < 60) return fmt(t.seconds, { n: totalSeconds });
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return s ? fmt(t.minutesSeconds, { m, s }) : fmt(t.minutes, { n: m });
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked by browser settings; nothing else to do.
    }
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">
        <Stat label={t.words} value={nf.format(stats.words)} highlight />
        <Stat label={t.characters} value={nf.format(stats.characters)} highlight />
        <Stat label={t.sentences} value={nf.format(stats.sentences)} />
        <Stat label={t.paragraphs} value={nf.format(stats.paragraphs)} />
      </div>

      <div>
        <label htmlFor="text" className="sr-only">
          {t.textLabel}
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.placeholder}
          rows={12}
          className="input min-h-64 resize-y text-base leading-7"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button type="button" onClick={copy} disabled={!text} className="btn-secondary">
              {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
              {copied ? c.copied : t.copyText}
            </button>
            <button type="button" onClick={() => setText("")} disabled={!text} className="btn-secondary">
              <Trash2 className="size-4" aria-hidden />
              {c.clear}
            </button>
          </div>
          <p className="text-sm text-muted">{fmt(t.noSpaces, { n: nf.format(stats.charactersNoSpaces) })}</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Stat label={t.readingTime} value={duration(stats.words, READING_WPM)} />
        <Stat label={t.speakingTime} value={duration(stats.words, SPEAKING_WPM)} />
      </div>

      <div className="rounded-2xl border border-border p-4">
        <h3 className="font-semibold text-text">{t.topKeywords}</h3>
        {stats.keywords.length === 0 ? (
          <p className="mt-2 text-sm text-muted">{t.keywordsEmpty}</p>
        ) : (
          <ul className="mt-3 flex flex-wrap gap-2">
            {stats.keywords.map(([word, count]) => (
              <li key={word} className="rounded-full bg-surface-2 px-3 py-1 text-sm text-text">
                {word} <span className="text-muted">× {count}</span>{" "}
                <span className="text-muted">
                  ({new Intl.NumberFormat(intl, { maximumFractionDigits: 1 }).format((count / stats.words) * 100)}%)
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${highlight ? "bg-brand-soft" : "border border-border"}`}>
      <p className={`text-2xl font-bold tracking-tight tabular-nums ${highlight ? "text-brand-text" : "text-text"}`}>
        {value}
      </p>
      <p className="mt-0.5 text-sm text-muted">{label}</p>
    </div>
  );
}
