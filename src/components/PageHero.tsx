import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { container } from "@/lib/ui";

/** The soft coloured band at the top of tool, category and info pages. */
export default function PageHero({
  crumbs,
  icon,
  title,
  description,
  breadcrumbLabel = "Breadcrumb",
  children,
}: {
  crumbs: { href?: string; label: string }[];
  icon?: ReactNode;
  title: string;
  description?: string;
  breadcrumbLabel?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative isolate border-b border-border bg-linear-to-b from-brand-soft/70 via-bg to-bg">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 right-[5%] size-96 rounded-full bg-[radial-gradient(closest-side,#ddd6fe,transparent)] opacity-70 dark:bg-[radial-gradient(closest-side,#6d28d9,transparent)] dark:opacity-25" />
        <div className="absolute -top-36 left-[15%] size-80 rounded-full bg-[radial-gradient(closest-side,#bae6fd,transparent)] opacity-60 dark:bg-[radial-gradient(closest-side,#0369a1,transparent)] dark:opacity-25" />
      </div>
      <div className={`${container} py-7 sm:py-9`}>
        <nav aria-label={breadcrumbLabel} className="flex flex-wrap items-center gap-1 text-sm text-muted">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="size-4" aria-hidden />}
              {c.href ? (
                <Link href={c.href} className="hover:text-brand-text">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-text">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-5 flex items-start gap-4">
          {icon}
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h1>
            {description && <p className="mt-2 max-w-3xl text-base leading-7 text-muted sm:text-lg">{description}</p>}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
