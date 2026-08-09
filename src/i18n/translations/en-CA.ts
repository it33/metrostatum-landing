import type { TranslationDict } from "../types";
import { enUS } from "./en-US";

/**
 * Canadian English
 * Inherits US English with preferred Canadian spellings (Defence).
 * For a tech marketing page the differences are intentionally minimal.
 */
export const enCA: TranslationDict = {
  ...enUS,
  nav: {
    ...(enUS.nav as TranslationDict),
    defense: "Defence",
  },
};
