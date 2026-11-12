import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a collection of free, private online tools that run in your browser.`,
  alternates: { canonical: "/about" },
};

// TODO: Make this page personal. Add who you are, where you are based and why you built the site.
// AdSense reviewers and visitors trust sites that clearly show a real person or team behind them.
export default function AboutPage() {
  return (
    <ContentPage
      title={`About ${siteConfig.name}`}
      intro={`${siteConfig.name} is a growing collection of free online tools that help you get everyday tasks done in seconds, without installing software or creating an account.`}
    >
      <h2>Why we built this</h2>
      <p>
        Simple tasks like shrinking a photo for a form, combining a few PDFs or checking a loan EMI often send people to
        websites full of pop-ups, sign-up walls and upload queues. Many of those sites also upload your private files
        to their servers. We think simple tasks deserve simple, trustworthy tools.
      </p>

      <h2>Our principles</h2>
      <ul>
        <li>
          <strong>Free for everyone.</strong> The site is supported by advertising, so every tool stays free with no
          paid tiers or daily limits.
        </li>
        <li>
          <strong>Private by design.</strong> Wherever possible, tools run entirely in your browser. Your images, PDFs
          and text are processed on your own device and never uploaded.
        </li>
        <li>
          <strong>Fast and focused.</strong> Each tool does one job well, with clear explanations so you understand
          the result.
        </li>
        <li>
          <strong>Accurate.</strong> Calculators show the formula behind every result, and we test each tool before
          it goes live.
        </li>
      </ul>

      <h2>Get in touch</h2>
      <p>
        Found a bug, or want a tool we don&apos;t have yet? We&apos;d love to hear from you. Visit our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
