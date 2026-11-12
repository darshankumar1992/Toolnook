/** Shared theme settings (plain module: usable from server and client code). */
export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/** Browser UI colour (mobile address bar) for each theme. */
export const THEME_COLORS: Record<Theme, string> = { light: "#ffffff", dark: "#121a2e" };

/**
 * Runs in <head> before the page is painted: applies a saved dark preference so there is no white flash.
 * Light is the default for visitors who have never used the toggle.
 */
export const themeInitScript = `(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark"){document.documentElement.dataset.theme="dark"}}catch(e){}})();`;
