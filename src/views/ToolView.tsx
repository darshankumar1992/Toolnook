import ToolPageLayout from "@/components/ToolPageLayout";
import EmiCalculator from "@/components/tools/EmiCalculator";
import ImageCompressor from "@/components/tools/ImageCompressor";
import JsonFormatter from "@/components/tools/JsonFormatter";
import KeywordGenerator from "@/components/tools/KeywordGenerator";
import MergePdf from "@/components/tools/MergePdf";
import MetaTagChecker from "@/components/tools/MetaTagChecker";
import WordCounter from "@/components/tools/WordCounter";
import type { ToolSlug } from "@/lib/tools";
import { locales, type Locale } from "@/i18n/config";
import { dictionaries, getDictionary } from "@/i18n";
import type { Dictionary, KeywordTemplates } from "@/i18n/types";

/** Picks the interactive tool for a slug and hands it only the text it needs. */
function Tool({ slug, locale, dict }: { slug: ToolSlug; locale: Locale; dict: Dictionary }) {
  const ui = dict.ui;
  switch (slug) {
    case "image-compressor":
      return <ImageCompressor t={ui.imageCompressor} c={ui.common} />;
    case "merge-pdf":
      return <MergePdf t={ui.mergePdf} c={ui.common} />;
    case "emi-calculator":
      return <EmiCalculator t={ui.emi} locale={locale} />;
    case "word-counter":
      return <WordCounter t={ui.wordCounter} c={ui.common} locale={locale} />;
    case "json-formatter":
      return <JsonFormatter t={ui.json} c={ui.common} />;
    case "meta-tag-checker":
      return <MetaTagChecker t={ui.meta} c={ui.common} />;
    case "keyword-generator": {
      // Every language's templates, so visitors can generate keywords in any language.
      const templates = Object.fromEntries(
        locales.map((l) => [l, dictionaries[l].keywordTemplates]),
      ) as Record<Locale, KeywordTemplates>;
      return <KeywordGenerator t={ui.keywordGenerator} c={ui.common} locale={locale} templates={templates} />;
    }
  }
}

export default function ToolView({ locale, slug }: { locale: Locale; slug: ToolSlug }) {
  const dict = getDictionary(locale);
  return (
    <ToolPageLayout slug={slug} locale={locale} dict={dict}>
      <Tool slug={slug} locale={locale} dict={dict} />
    </ToolPageLayout>
  );
}
