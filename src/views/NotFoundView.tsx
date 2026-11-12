import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/lib/tools";
import { container } from "@/lib/ui";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function NotFoundView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className={`${container} py-20 text-center`}>
      <p className="bg-linear-to-r from-brand to-fuchsia-500 bg-clip-text text-7xl font-extrabold text-transparent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{dict.notFound.title}</h1>
      <p className="mt-4 text-muted">{dict.notFound.text}</p>
      <Link href={localePath(locale, "/")} className="btn-primary mt-8 rounded-full px-6">
        {dict.notFound.button}
      </Link>
      <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {tools.slice(0, 3).map((t) => (
          <ToolCard key={t.slug} slug={t.slug} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
