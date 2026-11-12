import type { CategorySlug } from "./tools";

/** Each category has its own accent colour, so the site feels lively and tools are easy to tell apart. */
export interface CategoryStyle {
  /** Soft icon tile, e.g. on category cards */
  tile: string;
  /** Gradient stops for solid icon tiles (use with bg-linear-to-br) */
  gradient: string;
  /** Card hover border and glow */
  hover: string;
  /** Accent text colour */
  text: string;
  /** Small label chip */
  chip: string;
}

export const categoryStyles: Record<CategorySlug, CategoryStyle> = {
  "image-tools": {
    tile: "bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300",
    gradient: "from-pink-500 to-rose-500",
    hover: "hover:border-pink-200 hover:shadow-pink-500/10 dark:hover:border-pink-500/40",
    text: "text-pink-600 dark:text-pink-300",
    chip: "bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
  },
  "pdf-tools": {
    tile: "bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300",
    gradient: "from-orange-500 to-red-500",
    hover: "hover:border-orange-200 hover:shadow-orange-500/10 dark:hover:border-orange-500/40",
    text: "text-orange-600 dark:text-orange-300",
    chip: "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
  },
  calculators: {
    tile: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
    gradient: "from-emerald-500 to-teal-500",
    hover: "hover:border-emerald-200 hover:shadow-emerald-500/10 dark:hover:border-emerald-500/40",
    text: "text-emerald-600 dark:text-emerald-300",
    chip: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  },
  "text-tools": {
    tile: "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
    gradient: "from-amber-400 to-orange-500",
    hover: "hover:border-amber-200 hover:shadow-amber-500/10 dark:hover:border-amber-500/40",
    text: "text-amber-600 dark:text-amber-300",
    chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  },
  "developer-tools": {
    tile: "bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300",
    gradient: "from-sky-500 to-blue-600",
    hover: "hover:border-sky-200 hover:shadow-sky-500/10 dark:hover:border-sky-500/40",
    text: "text-sky-600 dark:text-sky-300",
    chip: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  },
  "seo-tools": {
    tile: "bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
    gradient: "from-violet-500 to-purple-600",
    hover: "hover:border-violet-200 hover:shadow-violet-500/10 dark:hover:border-violet-500/40",
    text: "text-violet-600 dark:text-violet-300",
    chip: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  },
};
