/**
 * Site-wide settings. Change the brand name, domain and contact email here.
 */

/**
 * The live address, used for canonical URLs, hreflang tags and the sitemap. In order of priority:
 * 1. NEXT_PUBLIC_SITE_URL, if you set it (recommended once you have your own domain).
 * 2. On Vercel: the project's production domain, detected automatically
 *    (your-project.vercel.app, or your custom domain once you add one).
 * 3. A placeholder for local development.
 */
function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://www.example.com";
}

export const siteConfig = {
  name: "ToolNook",
  tagline: "Free tools. Simple solutions.",
  description:
    "Free online tools that run right in your browser. Compress images, merge PDFs, count words, format JSON, calculate loan EMI and more. No sign-up, no uploads.",
  url: siteUrl().replace(/\/$/, ""),
  // TODO: replace with an email address you own before going live.
  contactEmail: "hello@example.com",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
  adsenseSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT || "",
};
