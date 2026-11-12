# ToolNook

Free online tools that run entirely in the browser, built to earn from Google AdSense.

**Live tools (7):** Image Compressor · Merge PDF · EMI / Loan Calculator · Word Counter · JSON Formatter · Meta Title & Description Checker · Keyword Generator

**Languages (7):** English (`/`), German (`/de`), French (`/fr`), Spanish (`/es`), Portuguese (`/pt`), Italian (`/it`), Dutch (`/nl`). Each language has fully translated pages with its own SEO title, description and keywords, plus hreflang tags and a multilingual sitemap. About, Contact, Privacy and Terms are English only.

**Stack:** Next.js 16 (static export) · React 19 · Tailwind CSS 4 · TypeScript · pdf-lib · lucide-react

There is no backend or database. Every tool runs on the visitor's device, so:

- Hosting is free (any static host works).
- There are no server costs as traffic grows.
- Files are never uploaded, which is a real selling point ("your files never leave your device").

Add FastAPI or a database later, and only for a tool that truly needs a server.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000, with live reload while you edit
npm run build      # builds the static site into out/
npm start          # previews the built out/ folder
npm run lint
```

In development you will see dashed **"Ad space"** boxes where ads will appear. They are hidden in production.

## Project structure

```
src/
  lib/tools.ts                 ← which categories and tools exist (structure only)
  lib/site.ts                  ← brand name, domain, contact email, AdSense IDs
  i18n/config.ts               ← the list of languages and URL helpers
  i18n/dictionaries/en/        ← ALL English text: common.ts (interface) and content.ts (tool pages, FAQs, keyword templates)
  i18n/dictionaries/<lang>/    ← the same files translated (de, fr, es, pt, it, nl)
  components/tools/            ← the interactive tools (one file per tool)
  views/                       ← page layouts shared by every language (home, tool, category)
  app/(en)/                    ← English pages (no URL prefix) + English-only About/Contact/Privacy/Terms
  app/(intl)/[lang]/           ← the same pages for every other language
  app/sitemap.ts, robots.ts    ← generated automatically, with hreflang alternates
scripts/fix-export-prefetch.mjs ← post-build workaround for a Next.js 16.4 export bug (see file)
```

### Changing text

Edit `src/i18n/dictionaries/en/*.ts` for English, or the same file in another language's folder. TypeScript checks that every language has exactly the same keys as English, so `npm run build` fails if a translation is missing.

### Adding a new tool

1. Add its slug to `ToolSlug` and to `tools` in `src/lib/tools.ts`.
2. Add its text to `src/i18n/dictionaries/en/content.ts` (name, SEO title, how-to, content, FAQs) and any interface strings to `en/common.ts`.
3. Add the same keys, translated, to the six other languages (the build tells you what's missing).
4. Build the UI in `src/components/tools/YourTool.tsx` (start the file with `"use client"`) and register it in `src/views/ToolView.tsx`.
5. Copy `src/app/(en)/word-counter/page.tsx` to `src/app/(en)/<slug>/page.tsx` and change the slug. The other languages pick it up automatically.

The homepage, search, category pages, footer and sitemap update automatically, in every language.

### Adding a language

Add the code to `locales` and `localeInfo` in `src/i18n/config.ts`, create `src/i18n/dictionaries/<code>/` (copy another language's three files and translate them), and register it in `src/i18n/index.ts`.

---

## Launch checklist

### 1. Before deploying

- [ ] Choose the final brand and buy a domain. Check that the name isn't already used by an established site.
- [ ] Update `src/lib/site.ts`: `name`, and `contactEmail` (use an address on your own domain).
- [ ] Rewrite `src/app/about/page.tsx` in your own words: who you are and why you built it. AdSense reviewers look for a real person behind the site.
- [ ] Re-read the Privacy Policy and Terms (`src/app/privacy-policy`, `src/app/terms`) and adjust them to your situation.

### 2. Deploy to Vercel (free)

**Option A: GitHub + Vercel (recommended).** Every `git push` then redeploys automatically.

1. Create an empty repository at github.com/new (private is fine; don't add a README).
2. From this folder:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/toolnook.git
   git push -u origin main
   ```
3. Go to vercel.com → **Add New… → Project** → import the repository → **Deploy**. Vercel detects Next.js automatically; no settings need changing.

**Option B: straight from your computer** (no GitHub):
```bash
npx vercel        # first time: log in in the browser and answer the questions (defaults are fine)
npx vercel --prod # publish to your production URL
```

**Domain:** the site works at `your-project.vercel.app` straight away. To use your own domain, open the project on Vercel → **Settings → Domains**, add it, and follow the DNS instructions. Canonical URLs, hreflang tags and the sitemap pick up the production domain automatically after the next deploy. To be explicit, set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` under **Settings → Environment Variables** and redeploy.

**Other hosts** (Cloudflare Pages, Netlify): build command `npm run build`, output directory `out`, and set `NEXT_PUBLIC_SITE_URL`.

### 3. Google Search Console

1. Add your domain at search.google.com/search-console and verify it.
2. Submit `https://www.yourdomain.com/sitemap.xml`.
3. Use "URL inspection" → "Request indexing" for the homepage and each tool page.

### 4. Google AdSense (when the site has content and some organic traffic)

1. Apply at adsense.google.com with your domain.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX` in your host's environment variables and redeploy. This adds the AdSense script to every page.
3. Create `public/ads.txt` containing the line AdSense shows you, e.g.
   `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
4. In AdSense, turn on **Auto ads**. Optionally create a display ad unit and set `NEXT_PUBLIC_ADSENSE_SLOT` to fill the in-content ad blocks.
5. In AdSense → **Privacy & messaging**, publish a consent message for EEA/UK/Switzerland visitors. Google requires this to serve ads in those regions.

**Never** click your own ads or buy traffic. It is the fastest way to get banned.

---

## Ideas for the next tools

These have obvious search demand, but **check volume and competition in a keyword tool before building**:

- Image: compress image to a specific size (20 KB / 50 KB / 100 KB, a common need on exam and job forms), resize image, passport photo maker, JPG ↔ PNG converter
- PDF: JPG to PDF, PDF to JPG, split PDF, compress PDF
- Calculators: age, percentage, GST, SIP, BMI
- Text: case converter, remove extra spaces, lorem ipsum generator
- Developer: Base64 encode/decode, URL encode/decode, UUID generator
