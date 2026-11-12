import Link from "next/link";
import { Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { localePath, type Locale } from "@/i18n/config";

// "ToolNook" -> "Tool" + "Nook": the second word is shown in the brand colour.
const [, first = siteConfig.name, second = ""] = siteConfig.name.match(/^(.+?)([A-Z].*)$/) ?? [];

export default function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={localePath(locale, "/")} className="group flex items-center gap-2.5 font-bold tracking-tight text-text">
      <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-brand to-violet-500 text-white shadow-md shadow-brand/30 transition group-hover:rotate-6">
        <Zap className="size-5" strokeWidth={2.5} fill="currentColor" aria-hidden />
      </span>
      <span className="text-xl">
        {first}
        <span className="text-brand">{second}</span>
      </span>
    </Link>
  );
}
