import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContentPage from "@/components/ContentPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} to report a problem, suggest a new tool or ask a question.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact us"
      intro="Questions, feedback or ideas for new tools are always welcome. We read every message."
    >
      <div className="not-prose card my-6 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-text">
          <Mail className="size-6" aria-hidden />
        </span>
        <div className="flex-1">
          <p className="text-sm text-muted">Email us at</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-lg font-semibold text-text">
            {siteConfig.contactEmail}
          </a>
        </div>
        <a href={`mailto:${siteConfig.contactEmail}`} className="btn-primary">
          Send an email
        </a>
      </div>

      <h2>What you can contact us about</h2>
      <ul>
        <li>
          <strong>Suggest a tool:</strong> tell us what you need and how you would use it.
        </li>
        <li>
          <strong>Report a problem:</strong> include the tool name, your browser and device, and what happened.
        </li>
        <li>
          <strong>Feedback:</strong> anything that would make the site more useful.
        </li>
        <li>
          <strong>Business and advertising enquiries.</strong>
        </li>
      </ul>
      <p>We usually reply within two working days.</p>
      <p>
        Please don&apos;t email us your files. Our tools process everything in your browser, so we never need to see
        your documents.
      </p>
    </ContentPage>
  );
}
