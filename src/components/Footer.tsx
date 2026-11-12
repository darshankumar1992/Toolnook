import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { categories, tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";
import { container } from "@/lib/ui";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import Logo from "./Logo";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.footer;
  // About, Contact and the legal pages are available in English only.
  const companyLinks = [
    { href: "/about", label: f.about },
    { href: "/contact", label: f.contact },
    { href: "/privacy-policy", label: f.privacy },
    { href: "/terms", label: f.terms },
  ];

  return (
    <footer className="mt-16 border-t border-border bg-surface-2/70">
      <div className={`${container} grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]`}>
        <div className="max-w-xs">
          <Logo locale={locale} />
          <p className="mt-4 text-sm leading-6 text-muted">
            {dict.meta.tagline} {f.text}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-success-soft px-3 py-1 text-xs font-medium text-success">
            <ShieldCheck className="size-3.5" aria-hidden />
            {f.privacyBadge}
          </p>
        </div>
        <FooterColumn
          title={f.categories}
          links={categories.map((c) => ({
            href: localePath(locale, `/category/${c.slug}`),
            label: dict.categories[c.slug].name,
          }))}
        />
        <FooterColumn
          title={f.popularTools}
          links={tools.map((t) => ({ href: localePath(locale, `/${t.slug}`), label: dict.tools[t.slug].name }))}
        />
        <FooterColumn title={f.company} links={companyLinks} />
      </div>
      <div className="border-t border-border">
        <p className={`${container} py-5 text-center text-sm text-muted sm:text-left`}>
          © {new Date().getFullYear()} {siteConfig.name}. {f.rights}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-text">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-muted transition-colors hover:text-brand-text">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
