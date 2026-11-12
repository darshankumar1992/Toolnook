import { notFound } from "next/navigation";
import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";
import { isToolSlug, toolSlugs } from "@/lib/tools";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return toolSlugs.map((tool) => ({ tool }));
}

type Params = { params: Promise<{ lang: string; tool: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang, tool } = await params;
  return isToolSlug(tool) ? toolMetadata(lang as Locale, tool) : {};
}

export default async function Page({ params }: Params) {
  const { lang, tool } = await params;
  if (!isToolSlug(tool)) notFound();
  return <ToolView locale={lang as Locale} slug={tool} />;
}
