import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, Gift, ShieldCheck, UserX, Zap } from "lucide-react";
import { getCategoryDef, getToolDef, relatedTools, tools, type ToolSlug } from "@/lib/tools";
import { categoryStyles } from "@/lib/category-style";
import { siteConfig } from "@/lib/site";
import { container } from "@/lib/ui";
import { fmt, localePath, type Locale } from "@/i18n/config";
import type { ContentBlock, Dictionary } from "@/i18n/types";
import AdSlot from "./AdSlot";
import JsonLd from "./JsonLd";
import PageHero from "./PageHero";
import RichText from "./RichText";
import ToolCard from "./ToolCard";

interface Props {
  slug: ToolSlug;
  locale: Locale;
  dict: Dictionary;
  /** The interactive tool itself. */
  children: ReactNode;
}

function Block({ block }: { block: ContentBlock }) {
  if ("h2" in block) return <h2>{block.h2}</h2>;
  if ("p" in block)
    return (
      <p>
        <RichText text={block.p} />
      </p>
    );
  const items = "ul" in block ? block.ul : block.ol;
  const List = "ul" in block ? "ul" : "ol";
  return (
    <List>
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </List>
  );
}

export default function ToolPageLayout({ slug, locale, dict, children }: Props) {
  const def = getToolDef(slug);
  const text = dict.tools[slug];
  const categoryText = dict.categories[def.category];
  const style = categoryStyles[def.category];
  const Icon = getCategoryDef(def.category)!.icon;
  const t = dict.toolPage;
  const pageUrl = siteConfig.url + localePath(locale, `/${slug}`);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: text.name,
        url: pageUrl,
        description: text.seoDescription,
        inLanguage: locale,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any (runs in a web browser)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.home, item: siteConfig.url + localePath(locale, "/") },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryText.name,
            item: siteConfig.url + localePath(locale, `/category/${def.category}`),
          },
          { "@type": "ListItem", position: 3, name: text.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: text.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const badges = [
    { icon: ShieldCheck, label: t.badgeLocal, color: "text-success" },
    { icon: Gift, label: t.badgeFree, color: "text-pink-600 dark:text-pink-400" },
    { icon: UserX, label: t.badgeNoSignup, color: "text-sky-600 dark:text-sky-400" },
    { icon: Zap, label: t.badgeInstant, color: "text-amber-500" },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        breadcrumbLabel={dict.nav.breadcrumb}
        crumbs={[
          { href: localePath(locale, "/"), label: t.home },
          { href: localePath(locale, `/category/${def.category}`), label: categoryText.name },
          { label: text.name },
        ]}
        title={text.name}
        description={text.seoDescription}
        icon={
          <span
            className={`hidden size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${style.gradient} text-white shadow-lg sm:grid`}
          >
            <Icon className="size-7" aria-hidden />
          </span>
        }
      >
        <ul className="mt-5 flex flex-wrap gap-2">
          {badges.map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-text shadow-sm"
            >
              <b.icon className={`size-4 ${b.color}`} aria-hidden />
              {b.label}
            </li>
          ))}
        </ul>
      </PageHero>

      <div className={`${container} grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10`}>
        <div className="min-w-0">
          <section
            aria-label={text.name}
            className="card p-4 shadow-[0_10px_40px_-12px_rgba(79,70,229,0.18)] sm:p-6"
          >
            {children}
          </section>

          <AdSlot className="my-8" />

          <article className="prose-tool">
            <h2>{fmt(t.howToTitle, { tool: text.name })}</h2>
            <ol>
              {text.howTo.map((step) => (
                <li key={step}>
                  <RichText text={step} />
                </li>
              ))}
            </ol>
            {text.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
            <h2>{t.faqTitle}</h2>
          </article>
          <div className="space-y-3">
            {text.faqs.map((f) => (
              <details key={f.q} className="card group p-4 transition open:border-brand/30 open:shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-text [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <ChevronRight
                      className="size-4 shrink-0 text-muted transition-transform group-open:rotate-90"
                      aria-hidden
                    />
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="mb-5 text-xl font-bold tracking-tight text-text">{t.relatedTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {relatedTools(slug).map((r) => (
                <ToolCard key={r.slug} slug={r.slug} locale={locale} dict={dict} />
              ))}
            </div>
          </section>
        </div>

        {/* Desktop sidebar: uses the extra width for navigation and an ad unit */}
        <aside className="hidden lg:block">
          <AdSlot size="box" />
          <div className="sticky top-24 mt-6 space-y-6">
            <div className="card p-5 shadow-sm">
              <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">{t.moreTools}</h2>
              <ul className="mt-3 space-y-1">
                {tools
                  .filter((other) => other.slug !== slug)
                  .map((other) => {
                    const OtherIcon = getCategoryDef(other.category)!.icon;
                    return (
                      <li key={other.slug}>
                        <Link
                          href={localePath(locale, `/${other.slug}`)}
                          className="flex items-center gap-3 rounded-xl p-2 text-sm font-medium text-text transition hover:bg-surface-2 active:scale-[0.98]"
                        >
                          <span
                            className={`grid size-8 shrink-0 place-items-center rounded-lg ${categoryStyles[other.category].tile}`}
                          >
                            <OtherIcon className="size-4" aria-hidden />
                          </span>
                          {dict.tools[other.slug].name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand to-violet-600 p-5 text-white shadow-lg shadow-brand/20">
              <div aria-hidden className="absolute -right-8 -bottom-8 size-28 rounded-full bg-white/10" />
              <ShieldCheck className="size-7" aria-hidden />
              <p className="mt-3 font-semibold">{t.privateTitle}</p>
              <p className="mt-1 text-sm leading-6 text-white/85">{t.privateText}</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
