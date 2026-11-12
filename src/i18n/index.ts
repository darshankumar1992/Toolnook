/**
 * Loads translations. Server-side only: never import this from a "use client" file,
 * or every language would be shipped to the browser.
 */
import type { Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import fr from "./dictionaries/fr";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";
import it from "./dictionaries/it";
import nl from "./dictionaries/nl";

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, es, pt, it, nl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
