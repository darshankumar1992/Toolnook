import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import SiteShell from "@/views/SiteShell";
import { rootMetadata } from "@/views/metadata";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export { viewport } from "@/views/metadata";

// Only the languages listed in src/i18n/config.ts exist (English lives at the root, without a prefix).
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return isLocale(lang) ? rootMetadata(lang) : {};
}

/** Root layout for /de, /fr, /es, /pt, /it and /nl. */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) notFound();
  return <SiteShell locale={lang}>{children}</SiteShell>;
}
