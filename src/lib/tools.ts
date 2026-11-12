import type { LucideIcon } from "lucide-react";
import { Calculator, Code2, FileText, ImageIcon, Search, Type } from "lucide-react";

/**
 * Structure of the site: which categories and tools exist.
 * All visible text (names, descriptions, page content) lives in src/i18n/dictionaries/<language>/.
 *
 * To add a tool:
 *   1. Add its slug to ToolSlug and an entry to `tools` below.
 *   2. Add its text to src/i18n/dictionaries/en/content.ts (and the other languages).
 *   3. Build the UI in src/components/tools/ and register it in src/views/ToolView.tsx.
 *   4. Add src/app/(en)/<slug>/page.tsx (copy an existing one). Other languages pick it up automatically.
 */

export type CategorySlug =
  | "image-tools"
  | "pdf-tools"
  | "calculators"
  | "text-tools"
  | "developer-tools"
  | "seo-tools";

export type ToolSlug =
  | "image-compressor"
  | "merge-pdf"
  | "emi-calculator"
  | "word-counter"
  | "json-formatter"
  | "meta-tag-checker"
  | "keyword-generator";

export const categories: { slug: CategorySlug; icon: LucideIcon }[] = [
  { slug: "image-tools", icon: ImageIcon },
  { slug: "pdf-tools", icon: FileText },
  { slug: "calculators", icon: Calculator },
  { slug: "text-tools", icon: Type },
  { slug: "developer-tools", icon: Code2 },
  { slug: "seo-tools", icon: Search },
];

export const tools: { slug: ToolSlug; category: CategorySlug }[] = [
  { slug: "image-compressor", category: "image-tools" },
  { slug: "merge-pdf", category: "pdf-tools" },
  { slug: "emi-calculator", category: "calculators" },
  { slug: "word-counter", category: "text-tools" },
  { slug: "json-formatter", category: "developer-tools" },
  { slug: "keyword-generator", category: "seo-tools" },
  { slug: "meta-tag-checker", category: "seo-tools" },
];

export const toolSlugs = tools.map((t) => t.slug);

export function isToolSlug(value: string): value is ToolSlug {
  return (toolSlugs as string[]).includes(value);
}

export function getToolDef(slug: ToolSlug) {
  return tools.find((t) => t.slug === slug)!;
}

export function getCategoryDef(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function toolsInCategory(slug: CategorySlug) {
  return tools.filter((t) => t.category === slug);
}

/** Tools from the same category first, then others, so every tool page links onward. */
export function relatedTools(slug: ToolSlug, limit = 3) {
  const tool = getToolDef(slug);
  const same = tools.filter((t) => t.category === tool.category && t.slug !== slug);
  const others = tools.filter((t) => t.category !== tool.category);
  return [...same, ...others].slice(0, limit);
}
