"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * A responsive in-content AdSense unit.
 * - Before AdSense is configured: shows a dashed placeholder in development, nothing in production.
 * - With only NEXT_PUBLIC_ADSENSE_CLIENT set: renders nothing (Auto ads places ads for you).
 * - With NEXT_PUBLIC_ADSENSE_SLOT also set: renders a manual ad unit here.
 */
export default function AdSlot({ className = "", size = "banner" }: { className?: string; size?: "banner" | "box" }) {
  const pushed = useRef(false);
  const { adsenseClient, adsenseSlot } = siteConfig;
  const enabled = Boolean(adsenseClient && adsenseSlot);

  useEffect(() => {
    if (!enabled || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a slow script load can make this fail; the page should keep working.
    }
  }, [enabled]);

  if (!enabled) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-border text-center text-xs font-medium uppercase tracking-wider text-muted ${size === "box" ? "h-62.5" : "h-24"} ${className}`}
      >
        Ad space (visible in development only)
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
