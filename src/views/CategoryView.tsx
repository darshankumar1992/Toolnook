import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ToolCard from "@/components/ToolCard";
import { categories, getCategoryDef, toolsInCategory } from "@/lib/tools";
import { categoryStyles } from "@/lib/category-style";
import { container } from "@/lib/ui";
import { fmt, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function CategoryView({ locale, slug }: { locale: Locale; slug: string }) {
  const def = getCategoryDef(slug);
  if (!def) notFound();
  const dict = getDictionary(locale);
  const text = dict.categories[def.slug];
  const style = categoryStyles[def.slug];
  const others = categories.filter((c) => c.slug !== def.slug);

  return (
    <>
      <PageHero
        breadcrumbLabel={dict.nav.breadcrumb}
        crumbs={[{ href: localePath(locale, "/"), label: dict.toolPage.home }, { label: text.name }]}
        title={fmt(dict.category.title, { category: text.name })}
        description={text.description}
        icon={
          <span
            className={`hidden size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${style.gradient} text-white shadow-lg sm:grid`}
          >
            <def.icon className="size-7" aria-hidden />
          </span>
        }
      />

      <div className={`${container} py-10`}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolsInCategory(def.slug).map((t) => (
            <ToolCard key={t.slug} slug={t.slug} locale={locale} dict={dict} />
          ))}
          <Link
            href="/contact"
            className="group flex flex-col items-start justify-center rounded-2xl border-2 border-dashed border-border p-6 transition hover:border-brand/40 hover:bg-brand-soft/40"
          >
            <p className="font-semibold text-text">{dict.category.comingSoon}</p>
            <p className="mt-1 text-sm text-muted">{dict.category.comingSoonText}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-text">
              {dict.category.suggest}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </div>

        <h2 className="mt-14 mb-5 text-xl font-bold tracking-tight text-text">{dict.category.others}</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={localePath(locale, `/category/${c.slug}`)}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pr-4 pl-1.5 text-sm font-medium text-text shadow-sm transition hover:shadow-md"
            >
              <span className={`grid size-7 place-items-center rounded-full ${categoryStyles[c.slug].tile}`}>
                <c.icon className="size-4" aria-hidden />
              </span>
              {dict.categories[c.slug].name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
