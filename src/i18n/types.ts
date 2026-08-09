export type Locale = "en-US" | "en-CA" | "fr-CA" | "ja";

export const SUPPORTED_LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en-US", label: "English (US)", short: "EN-US" },
  { code: "en-CA", label: "English (Canada)", short: "EN-CA" },
  { code: "fr-CA", label: "Français (Canada)", short: "FR-CA" },
  { code: "ja", label: "日本語", short: "JA" },
];

export const DEFAULT_LOCALE: Locale = "en-US";

/** Nested translation dictionary shape (string values only for simplicity) */
export type TranslationDict = {
  [key: string]: string | TranslationDict;
};
