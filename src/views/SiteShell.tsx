import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import { siteConfig } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import "@/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const speculationRules = {
  prefetch: [{ source: "document", where: { selector_matches: "a[data-lang-link]" }, eagerness: "eager" }],
  prerender: [{ source: "document", where: { selector_matches: "a[data-lang-link]" }, eagerness: "moderate" }],
};

/** The <html> document used by every root layout (English and the other languages). */
export default function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);
  return (
    // suppressHydrationWarning: the theme script below may set data-theme="dark" before React loads.
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        {/* First in <body>: runs before any content is shown, so a saved dark theme never flashes white. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Chrome/Edge: as soon as the language menu opens, download every language version of this page,
            and fully prepare the one being hovered or tapped, so switching language feels instant. */}
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }} />
        <NavigationProgress />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        {siteConfig.adsenseClient && (
          <Script
            id="adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`}
          />
        )}
      </body>
    </html>
  );
}
