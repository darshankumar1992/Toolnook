import type { Metadata } from "next";
import SiteShell from "@/views/SiteShell";
import NotFoundView from "@/views/NotFoundView";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

/** Shown for any URL that doesn't match a page (the site has one root layout per language). */
export default function GlobalNotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundView locale="en" />
    </SiteShell>
  );
}
