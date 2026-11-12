"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// The current theme lives on <html data-theme>, so every toggle on the page stays in sync.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerTheme = (): Theme => "light";

export default function ThemeToggle({ label }: { label: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  // Keep the mobile browser's address bar colour in step with the theme.
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Switch every colour in one frame instead of letting each element fade separately.
    root.classList.add("no-transitions");
    if (next === "dark") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    void root.offsetHeight; // apply the new colours now, while transitions are off
    requestAnimationFrame(() => root.classList.remove("no-transitions"));
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing can block storage; the theme still changes for this page.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted shadow-sm transition hover:border-brand/40 hover:text-brand-text"
    >
      {/* Icons switch with CSS, so the right one shows immediately, even before JavaScript loads. */}
      <Moon className="size-4.5 dark:hidden" aria-hidden />
      <Sun className="hidden size-4.5 dark:block" aria-hidden />
    </button>
  );
}
