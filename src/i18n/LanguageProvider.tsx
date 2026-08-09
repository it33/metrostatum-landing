import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale, type TranslationDict } from "./types";
import { enUS } from "./translations/en-US";
import { enCA } from "./translations/en-CA";
import { frCA } from "./translations/fr-CA";
import { ja } from "./translations/ja";

const DICTS: Record<Locale, TranslationDict> = {
  "en-US": enUS,
  "en-CA": enCA,
  "fr-CA": frCA,
  ja,
};

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && DICTS[stored]) return stored;
  } catch {
    /* ignore */
  }

  if (typeof navigator !== "undefined") {
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("ja")) return "ja";
    if (nav.startsWith("fr")) return "fr-CA";
    if (nav === "en-ca" || nav.startsWith("en-ca")) return "en-CA";
    if (nav.startsWith("en")) return "en-US";
  }
  return DEFAULT_LOCALE;
}

function getByPath(obj: TranslationDict, path: string): string | undefined {
  const parts = path.split(".");
  let cur: string | TranslationDict | undefined = obj;
  for (const p of parts) {
    if (cur == null || typeof cur === "string") return undefined;
    cur = cur[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  locales: typeof SUPPORTED_LOCALES;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem("locale", locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    if (DICTS[next]) setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string, fallback?: string) => {
      const dict = DICTS[locale] || DICTS[DEFAULT_LOCALE];
      return getByPath(dict, key) ?? getByPath(DICTS[DEFAULT_LOCALE], key) ?? fallback ?? key;
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, locales: SUPPORTED_LOCALES }),
    [locale, setLocale, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
