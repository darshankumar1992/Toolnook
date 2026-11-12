import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that apply when you use ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const { name } = siteConfig;
  return (
    <ContentPage title="Terms of Use" updated="November 12, 2026">
      <p>By using {name}, you agree to these terms. If you do not agree, please do not use the site.</p>

      <h2>Use of the tools</h2>
      <p>
        You may use our tools free of charge for personal and commercial purposes. You are responsible for the files
        and content you process, and you must have the right to use them.
      </p>

      <h2>No warranty</h2>
      <p>
        The tools are provided &ldquo;as is&rdquo; without warranties of any kind. We work hard to keep them accurate
        and reliable, but we do not guarantee that results will be error-free. Always keep a copy of your original
        files.
      </p>

      <h2>Calculators are estimates</h2>
      <p>
        Results from calculators, such as the EMI calculator, are estimates for general information only. They are
        not financial, legal or professional advice. Confirm important figures with your bank, lender or a qualified
        professional.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not attempt to disrupt, overload or misuse the site, or use it for anything unlawful. Do not interact with
        advertisements in any artificial way, such as automated or repeated clicking.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {name} is not liable for any loss or damage arising from your use of
        the site or its tools.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continuing to use the site after changes are posted means you
        accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Visit our <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
