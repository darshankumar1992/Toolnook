"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { localeInfo, localePath, locales, splitLocale, type Locale } from "@/i18n/config";
import { isToolSlug } from "@/lib/tools";

/** Pages that exist in every language. Others (About, Privacy…) are English-only, so we go to that language's homepage. */
function isTranslatedPath(path: string) {
  return path === "/" || path.startsWith("/category/") || isToolSlug(path.slice(1));
}

const prefetched = new Set<string>();

/**
 * Fallback for browsers without speculation rules (see SiteShell): starts downloading the other
 * language versions in the background. Chrome and Edge use the faster speculation rules instead.
 */
function prefetchPages(hrefs: string[]) {
  if (typeof HTMLScriptElement !== "undefined" && HTMLScriptElement.supports?.("speculationrules")) return;
  for (const href of hrefs) {
    if (prefetched.has(href)) continue;
    prefetched.add(href);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "document";
    link.href = href;
    document.head.appendChild(link);
  }
}

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { path } = splitLocale(pathname);
  const targets = locales
    .filter((l) => l !== locale)
    .map((l) => localePath(l, isTranslatedPath(path) ? path : "/"));
  // Called when the visitor shows interest (hover, focus, tap), before they pick a language.
  const warmUp = () => prefetchPages(targets);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => {
          warmUp();
          setOpen((o) => !o);
        }}
        onPointerEnter={warmUp}
        onFocus={warmUp}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${localeInfo[locale].native}`}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-text shadow-sm transition hover:border-brand/40"
      >
        <Globe className="size-4 text-brand" aria-hidden />
        {localeInfo[locale].code}
        <ChevronDown className={`size-3.5 text-muted transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 z-40 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-xl shadow-brand/10"
        >
          {locales.map((l) => {
            const active = l === locale;
            const href = localePath(l, isTranslatedPath(path) ? path : "/");
            return (
              <li key={l} role="option" aria-selected={active}>
                {/* A full page load is intended: each language has its own root layout. */}
                <a
                  href={href}
                  data-lang-link=""
                  hrefLang={l}
                  lang={l}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    active ? "bg-brand-soft font-semibold text-brand-text" : "text-text hover:bg-surface-2"
                  }`}
                >
                  <span className="w-6 text-xs font-bold tracking-wide text-muted">{localeInfo[l].code}</span>
                  <span className="flex-1">{localeInfo[l].native}</span>
                  {active && <Check className="size-4" aria-hidden />}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
