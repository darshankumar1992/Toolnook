import type { ReactNode } from "react";
import PageHero from "./PageHero";
import { container } from "@/lib/ui";

/** Layout for text pages such as About, Contact and Privacy Policy. */
export default function ContentPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero crumbs={[{ href: "/", label: "Home" }, { label: title }]} title={title} description={intro}>
        {updated && <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>}
      </PageHero>
      {/* Text stays at a comfortable reading width, aligned with the page edge */}
      <div className={`${container} py-6`}>
        <div className="prose-tool max-w-3xl">{children}</div>
      </div>
    </>
  );
}
