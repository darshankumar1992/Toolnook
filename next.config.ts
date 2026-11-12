import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is pre-rendered to plain HTML at build time (the `out/` folder).
  // All tools run in the visitor's browser, so no server is needed and the
  // site can be hosted for free on Vercel, Netlify, Cloudflare Pages, etc.
  output: "export",
  experimental: {
    // One 404 page for the whole site, needed because each language has its own root layout.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
