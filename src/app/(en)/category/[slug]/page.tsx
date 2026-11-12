import CategoryView from "@/views/CategoryView";
import { categoryMetadata } from "@/views/metadata";
import { categories } from "@/lib/tools";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return categoryMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryView locale="en" slug={slug} />;
}
