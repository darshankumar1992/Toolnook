import type { MetadataRoute } from "next";
import { categories, tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";
import { languageAlternates, localePath, locales } from "@/i18n/config";

export const dynamic = "force-static";

/** Every page in every language, each listing its translations (hreflang) for Google. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const absolute = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;

  const translated = (path: string, priority: number): MetadataRoute.Sitemap => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absolute(href)]),
    );
    return locales.map((locale) => ({
      url: absolute(localePath(locale, path)),
      lastModified: now,
      priority,
      alternates: { languages },
    }));
  };

  return [
    ...translated("/", 1),
    ...tools.flatMap((t) => translated(`/${t.slug}`, 0.9)),
    ...categories.flatMap((c) => translated(`/category/${c.slug}`, 0.7)),
    // English-only pages
    ...["/about", "/contact", "/privacy-policy", "/terms"].map((p) => ({
      url: absolute(p),
      lastModified: now,
      priority: 0.3,
    })),
  ];
}
