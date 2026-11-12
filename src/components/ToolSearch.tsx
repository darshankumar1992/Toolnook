"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getCategoryDef, type CategorySlug } from "@/lib/tools";
import { categoryStyles } from "@/lib/category-style";
import { fmt } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

export interface SearchItem {
  href: string;
  name: string;
  summary: string;
  category: CategorySlug;
  /** Everything the search should match: name, summary, category and keywords (in the page language and English). */
  haystack: string;
}

export default function ToolSearch({ items, t }: { items: SearchItem[]; t: CommonDictionary["search"] }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = useMemo(() => {
    const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return [];
    return items.filter((item) => words.every((w) => item.haystack.includes(w)));
  }, [query, items]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) router.push(results[0].href);
        }}
      >
        <label htmlFor="tool-search" className="sr-only">
          {t.label}
        </label>
        <Search
          className="pointer-events-none absolute top-7 left-4 size-5 -translate-y-1/2 text-muted"
          aria-hidden
        />
        <input
          id="tool-search"
          type="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.placeholder}
          className="input h-14 rounded-2xl pl-12 text-base shadow-lg shadow-brand/10"
        />
      </form>

      {query.trim() && (
        <div className="card absolute inset-x-0 top-full z-20 mt-2 overflow-hidden text-left shadow-xl">
          {results.length > 0 ? (
            <ul>
              {results.map((item) => {
                const Icon = getCategoryDef(item.category)!.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-2">
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-lg ${categoryStyles[item.category].tile}`}
                      >
                        <Icon className="size-4.5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-text">{item.name}</span>
                        <span className="block truncate text-sm text-muted">{item.summary}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-muted">
              {fmt(t.noResults, { query })}{" "}
              <Link href="/contact" className="font-medium text-brand-text underline">
                {t.suggest}
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
