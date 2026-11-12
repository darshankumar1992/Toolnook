"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * A thin bar at the top of the screen that appears the moment an internal link is clicked
 * and disappears once the new page is shown, so every click gets an instant visible response.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [shownPath, setShownPath] = useState(pathname);

  // A new page is on screen: hide the bar (state adjusted during render, as React recommends).
  if (shownPath !== pathname) {
    setShownPath(pathname);
    setLoading(false);
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // same page (e.g. #anchor)
      setLoading(true);
    }
    // Pages restored from the back/forward cache should never show a stuck bar.
    const onPageShow = () => setLoading(false);
    document.addEventListener("click", onClick, true);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  if (!loading) return null;
  return (
    <div
      role="progressbar"
      aria-label="Loading"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-linear-to-r from-brand via-violet-500 to-fuchsia-500 shadow-[0_0_8px_var(--brand)]"
      style={{ animation: "nav-progress 2.5s cubic-bezier(0.1, 0.7, 0.2, 1) forwards" }}
    />
  );
}
