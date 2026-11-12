/**
 * Language settings. Safe to import from both server and client components.
 *
 * URL scheme:
 *   English (default)  /word-counter
 *   Other languages    /de/word-counter, /fr/word-counter, ...
 */
export const locales = ["en", "de", "fr", "es", "pt", "it", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeInfo: Record<
  Locale,
  {
    /** Name shown in the language switcher, in that language. */
    native: string;
    /** Short badge text. */
    code: string;
    /** Used for number formatting and text segmentation. */
    intl: string;
    /** Open Graph locale, e.g. de_DE. */
    og: string;
  }
> = {
  en: { native: "English", code: "EN", intl: "en-US", og: "en_US" },
  de: { native: "Deutsch", code: "DE", intl: "de-DE", og: "de_DE" },
  fr: { native: "Français", code: "FR", intl: "fr-FR", og: "fr_FR" },
  es: { native: "Español", code: "ES", intl: "es-ES", og: "es_ES" },
  pt: { native: "Português", code: "PT", intl: "pt-BR", og: "pt_BR" },
  it: { native: "Italiano", code: "IT", intl: "it-IT", og: "it_IT" },
  nl: { native: "Nederlands", code: "NL", intl: "nl-NL", og: "nl_NL" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Adds the language prefix to a path: ("de", "/word-counter") -> "/de/word-counter". */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Splits "/de/word-counter" into { locale: "de", path: "/word-counter" }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: "/" + rest.join("/") };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** hreflang map for a page that exists in every language (used in <head> and the sitemap). */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[l] = localePath(l, path);
  map["x-default"] = localePath(defaultLocale, path);
  return map;
}

/** Replaces {placeholders} in a translated string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
