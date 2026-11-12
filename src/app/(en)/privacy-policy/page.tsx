import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data, cookies and advertising.`,
  alternates: { canonical: "/privacy-policy" },
};

// Review this policy whenever you add analytics, a contact form, accounts or anything else that collects data.
export default function PrivacyPolicyPage() {
  const { name, url, contactEmail } = siteConfig;
  return (
    <ContentPage title="Privacy Policy" updated="November 12, 2026">
      <p>
        This Privacy Policy explains how {name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) at <a href={url}>{url}</a>{" "}
        handles information when you use our website. By using the site, you agree to the practices described here.
      </p>

      <h2>Files and text you use with our tools</h2>
      <p>
        Our tools are designed to run entirely in your web browser. Images, PDF files, text and other data you use with
        a tool are processed on your own device and are <strong>not uploaded to our servers</strong>. We cannot see,
        store or share that content.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        Like most websites, our hosting provider may automatically record standard technical information when you
        visit, such as your IP address, browser type, device type, referring page and the pages you visit, along with
        the date and time. This information is used to keep the site secure and working properly.
      </p>

      <h2>Cookies and advertising</h2>
      <p>
        We use Google AdSense to show advertisements, which keeps our tools free. Third-party vendors, including
        Google, use cookies to serve ads based on your previous visits to this website or other websites.
      </p>
      <ul>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits
          to this site and/or other sites on the internet.
        </li>
        <li>
          You can opt out of personalized advertising by visiting{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">
            Google Ads Settings
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">
            www.aboutads.info
          </a>
          .
        </li>
        <li>
          To learn more, see{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            rel="noopener noreferrer"
            target="_blank"
          >
            how Google uses information from sites that use its services
          </a>
          .
        </li>
      </ul>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, you will be asked for your consent
        before cookies are used for personalized advertising, and you can change your choice at any time.
      </p>
      <p>
        You can also block or delete cookies in your browser settings. Our tools will continue to work without
        cookies.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Our site is not directed at children under 13, and we do not knowingly collect personal information from
        children.
      </p>

      <h2>Links to other websites</h2>
      <p>
        Our site and the ads on it may link to other websites. We are not responsible for the privacy practices of
        those sites, so please review their policies.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes take effect when they are posted on this page, and the
        &ldquo;Last updated&rdquo; date above will change.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or visit our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
