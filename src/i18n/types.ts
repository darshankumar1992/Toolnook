import type common from "./dictionaries/en/common";
import type { CategorySlug, ToolSlug } from "@/lib/tools";

/**
 * Shape of every translation. English (dictionaries/en) is the source of truth;
 * each other language must provide exactly the same keys, or the build fails.
 */
export type CommonDictionary = typeof common;

/**
 * A block of page content. Text supports **bold** and `code`.
 */
export type ContentBlock = { h2: string } | { p: string } | { ul: string[] } | { ol: string[] };

export interface Faq {
  q: string;
  a: string;
}

export interface CategoryText {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
}

export interface ToolText {
  /** Visible tool name. Use the words people search for in this language. */
  name: string;
  /** One line for cards and search results (max ~70 characters). */
  summary: string;
  /** The <title> tag (aim for 50–60 characters). */
  seoTitle: string;
  /** The meta description (aim for 120–160 characters). */
  seoDescription: string;
  /** Search phrases in this language: used for <meta name="keywords"> and the site search. */
  keywords: string[];
  howTo: string[];
  content: ContentBlock[];
  faqs: Faq[];
}

/**
 * Templates for the Keyword Generator, written naturally in each language.
 * {k} is replaced by the user's keyword and {year} by the current year.
 */
export interface KeywordTemplates {
  questions: string[];
  modifiers: string[];
  longTail: string[];
  commercial: string[];
  comparisons: string[];
}

export interface ContentDictionary {
  categories: Record<CategorySlug, CategoryText>;
  tools: Record<ToolSlug, ToolText>;
  keywordTemplates: KeywordTemplates;
}

export type Dictionary = CommonDictionary & ContentDictionary;
