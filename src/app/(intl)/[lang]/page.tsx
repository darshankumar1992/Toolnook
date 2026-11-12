import HomeView from "@/views/HomeView";
import { homeMetadata } from "@/views/metadata";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return homeMetadata(lang as Locale);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <HomeView locale={lang as Locale} />;
}
