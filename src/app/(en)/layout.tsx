import type { ReactNode } from "react";
import SiteShell from "@/views/SiteShell";
import { rootMetadata } from "@/views/metadata";

export { viewport } from "@/views/metadata";
export const metadata = rootMetadata("en");

/** Root layout for English pages (served without a language prefix). */
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
