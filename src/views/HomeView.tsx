import Link from "next/link";
import { ArrowRight, Gift, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import ToolSearch, { type SearchItem } from "@/components/ToolSearch";
import { categories, tools, toolsInCategory, type ToolSlug } from "@/lib/tools";
import { categoryStyles } from "@/lib/category-style";
import { siteConfig } from "@/lib/site";
import { container } from "@/lib/ui";
import { fmt, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

const benefitStyles = [
  { icon: Gift, color: "bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300" },
  { icon: ShieldCheck, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300" },
  { icon: Zap, color: "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300" },
  { icon: Smartphone, color: "bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300" },
];

const quickLinks: ToolSlug[] = ["image-compressor", "merge-pdf", "emi-calculator", "word-counter", "keyword-generator"];

function SectionHeading({ id, eyebrow, title, text }: { id?: string; eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">{eyebrow}</p>
        <h2 id={id} className="mt-1 text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
      </div>
      {text && <p className="max-w-md text-sm text-muted sm:text-right">{text}</p>}
    </div>
  );
}

export default function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const en = getDictionary("en");
  const h = dict.home;

  // Search matches the page language and English, so "pdf" or "compress" always work.
  const searchItems: SearchItem[] = tools.map((t) => {
    const text = dict.tools[t.slug];
    return {
      href: localePath(locale, `/${t.slug}`),
      name: text.name,
      summary: text.summary,
      category: t.category,
      haystack: [
        text.name,
        text.summary,
        dict.categories[t.category].name,
        ...text.keywords,
        en.tools[t.slug].name,
        ...en.tools[t.slug].keywords,
      ]
        .join(" ")
        .toLocaleLowerCase(),
    };
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url + localePath(locale, "/"),
          inLanguage: locale,
          description: dict.meta.siteDescription,
        }}
      />

      {/* Hero. z-10 keeps the search results dropdown above the sections below. */}
      <section className="relative isolate z-10 border-b border-border">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-brand-soft/60 to-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(var(--dot)_1px,transparent_1px)] bg-size-[22px_22px] mask-[radial-gradient(ellipse_70%_70%_at_50%_0%,#000_30%,transparent_100%)]" />
          <div className="absolute -top-40 left-[5%] size-112 rounded-full bg-[radial-gradient(closest-side,#c4b5fd,transparent)] opacity-50 dark:bg-[radial-gradient(closest-side,#7c3aed,transparent)] dark:opacity-30" />
          <div className="absolute -top-24 right-[5%] size-96 rounded-full bg-[radial-gradient(closest-side,#7dd3fc,transparent)] opacity-45 dark:bg-[radial-gradient(closest-side,#0284c7,transparent)] dark:opacity-25" />
          <div className="absolute top-48 left-1/2 size-80 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#fbcfe8,transparent)] opacity-60 dark:bg-[radial-gradient(closest-side,#c026d3,transparent)] dark:opacity-20" />
        </div>

        <div className={`${container} pt-14 pb-16 text-center sm:pt-20 sm:pb-20`}>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-surface/80 px-4 py-1.5 text-sm font-medium text-brand-text shadow-sm backdrop-blur">
            <Sparkles className="size-4 shrink-0" aria-hidden />
            {fmt(h.badge, { count: tools.length })}
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl">
            {h.titleStart}{" "}
            <span className="bg-linear-to-r from-brand via-violet-500 to-fuchsia-500 bg-clip-text pb-1 text-transparent sm:block">
              {h.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">{h.intro}</p>
          <div className="mt-9">
            <ToolSearch items={searchItems} t={dict.search} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted">{h.popular}</span>
            {quickLinks.map((slug) => (
              <Link
                key={slug}
                href={localePath(locale, `/${slug}`)}
                className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-text shadow-sm transition hover:border-brand/40 hover:text-brand-text"
              >
                {dict.tools[slug].name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} pt-14 pb-12`} aria-labelledby="categories-heading">
        <SectionHeading
          id="categories-heading"
          eyebrow={h.categoriesEyebrow}
          title={h.categoriesTitle}
          text={h.categoriesText}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const count = toolsInCategory(c.slug).length;
            const s = categoryStyles[c.slug];
            const text = dict.categories[c.slug];
            return (
              <Link
                key={c.slug}
                href={localePath(locale, `/category/${c.slug}`)}
                className={`card group flex flex-col items-start p-5 shadow-sm transition duration-150 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] ${s.hover}`}
              >
                <span className={`grid size-12 place-items-center rounded-2xl ${s.tile} transition group-hover:scale-110`}>
                  <c.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold text-text">{text.name}</h3>
                <p className="mt-1 text-sm text-muted">{text.tagline}</p>
                <p className={`mt-3 text-xs font-semibold ${s.text}`}>
                  {fmt(count === 1 ? dict.toolCard.countOne : dict.toolCard.countOther, { n: count })} →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className={container}>
        <AdSlot />
      </div>

      <section className={`${container} py-12`} aria-labelledby="tools-heading">
        <SectionHeading id="tools-heading" eyebrow={h.toolsEyebrow} title={h.toolsTitle} text={h.toolsText} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <ToolCard key={t.slug} slug={t.slug} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <section className={`${container} py-12`} aria-labelledby="why-heading">
        <div className="rounded-3xl border border-border bg-linear-to-br from-surface-2 via-surface to-brand-soft/60 p-8 sm:p-12">
          <SectionHeading id="why-heading" eyebrow={h.whyEyebrow} title={fmt(h.whyTitle, { site: siteConfig.name })} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.benefits.map((b, i) => {
              const { icon: Icon, color } = benefitStyles[i % benefitStyles.length];
              return (
                <div key={b.title} className="rounded-2xl bg-surface/80 p-5 shadow-sm ring-1 ring-border">
                  <span className={`grid size-11 place-items-center rounded-xl ${color}`}>
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold text-text">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} pt-4`}>
        <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-r from-brand via-violet-600 to-fuchsia-600 px-8 py-10 text-white shadow-xl shadow-brand/20 sm:px-12 sm:py-12">
          <div aria-hidden className="absolute -top-16 -right-10 -z-10 size-64 rounded-full bg-white/10" />
          <div aria-hidden className="absolute -bottom-20 left-1/3 -z-10 size-56 rounded-full bg-white/10" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{h.ctaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/85">{h.ctaText}</p>
            </div>
            <Link
              href="/contact"
              className="btn shrink-0 rounded-full bg-white px-6 py-3 text-indigo-700 shadow-lg hover:bg-indigo-50"
            >
              {h.ctaButton}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
