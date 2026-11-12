import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategoryDef, getToolDef, type ToolSlug } from "@/lib/tools";
import { categoryStyles } from "@/lib/category-style";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function ToolCard({ slug, locale, dict }: { slug: ToolSlug; locale: Locale; dict: Dictionary }) {
  const def = getToolDef(slug);
  const Icon = getCategoryDef(def.category)!.icon;
  const style = categoryStyles[def.category];
  const text = dict.tools[slug];
  return (
    <Link
      href={localePath(locale, `/${slug}`)}
      className={`card group flex flex-col p-6 shadow-sm transition duration-150 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] ${style.hover}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${style.gradient} text-white shadow-md transition group-hover:scale-105`}
        >
          <Icon className="size-6" aria-hidden />
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style.chip}`}>
          {dict.categories[def.category].shortName}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-text">{text.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{text.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-text">
        {dict.toolCard.open}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
