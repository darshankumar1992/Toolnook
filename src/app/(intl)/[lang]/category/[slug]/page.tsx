import CategoryView from "@/views/CategoryView";
import { categoryMetadata } from "@/views/metadata";
import { categories } from "@/lib/tools";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

type Params = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang, slug } = await params;
  return categoryMetadata(lang as Locale, slug);
}

export default async function Page({ params }: Params) {
  const { lang, slug } = await params;
  return <CategoryView locale={lang as Locale} slug={slug} />;
}
