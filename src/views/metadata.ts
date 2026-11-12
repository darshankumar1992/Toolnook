import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { getCategoryDef, type ToolSlug } from "@/lib/tools";
import { fmt, languageAlternates, localeInfo, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

function openGraph(locale: Locale, title: string, description: string, url: string): Metadata["openGraph"] {
  return { type: "website", siteName: siteConfig.name, locale: localeInfo[locale].og, title, description, url };
}

/** Defaults for every page in a language (used by the root layouts). */
export function rootMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  const title = `${siteConfig.name} – ${d.meta.siteTitle}`;
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description: d.meta.siteDescription,
    applicationName: siteConfig.name,
    openGraph: openGraph(locale, title, d.meta.siteDescription, localePath(locale, "/")),
    twitter: { card: "summary" },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  const title = `${siteConfig.name} – ${d.meta.siteTitle}`;
  const url = localePath(locale, "/");
  return {
    title: { absolute: title },
    description: d.meta.siteDescription,
    alternates: { canonical: url, languages: languageAlternates("/") },
    openGraph: openGraph(locale, title, d.meta.siteDescription, url),
  };
}

export function toolMetadata(locale: Locale, slug: ToolSlug): Metadata {
  const t = getDictionary(locale).tools[slug];
  const path = `/${slug}`;
  const url = localePath(locale, path);
  return {
    title: { absolute: t.seoTitle },
    description: t.seoDescription,
    keywords: t.keywords,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: openGraph(locale, t.seoTitle, t.seoDescription, url),
  };
}

export function categoryMetadata(locale: Locale, slug: string): Metadata {
  if (!getCategoryDef(slug)) return {};
  const d = getDictionary(locale);
  const c = d.categories[slug as keyof typeof d.categories];
  const path = `/category/${slug}`;
  const url = localePath(locale, path);
  const title = fmt(d.category.metaTitle, { category: c.name });
  return {
    title,
    description: c.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: openGraph(locale, title, c.description, url),
  };
}
