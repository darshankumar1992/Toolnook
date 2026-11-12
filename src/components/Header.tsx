import Link from "next/link";
import { categories } from "@/lib/tools";
import { container } from "@/lib/ui";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-surface/85 backdrop-blur-lg">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <Logo locale={locale} />
        <div className="flex items-center gap-2 lg:gap-3">
          <nav aria-label={dict.nav.categories} className="hidden items-center gap-0.5 md:flex">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={localePath(locale, `/category/${c.slug}`)}
                className="rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:bg-brand-soft hover:text-brand-text"
              >
                {dict.categories[c.slug].shortName}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
          <ThemeToggle label={dict.nav.theme} />
          <Link href="/contact" className="btn-primary hidden rounded-full py-2 whitespace-nowrap xl:inline-flex">
            {dict.nav.suggestTool}
          </Link>
        </div>
      </div>
      {/* Mobile: swipeable category chips */}
      <nav aria-label={dict.nav.categories} className="border-t border-border md:hidden">
        <div className={`${container} flex gap-2 overflow-x-auto py-2 [scrollbar-width:none]`}>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={localePath(locale, `/category/${c.slug}`)}
              className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted"
            >
              {dict.categories[c.slug].shortName}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
