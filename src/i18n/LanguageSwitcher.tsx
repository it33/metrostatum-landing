import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/types";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, locales, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-[13px] font-medium text-[var(--color-black)]/80 hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]"
        aria-label={t("lang.label", "Language")}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="size-3.5 opacity-70" />
        <span className="hidden sm:inline">{current.short}</span>
        <ChevronDown className={cn("size-3.5 opacity-60 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-1 min-w-[160px] overflow-hidden rounded-lg border border-[color-mix(in_oklab,#1e325c_12%,transparent)] bg-white py-1 shadow-[0_12px_32px_rgba(30,50,92,0.12)]"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === locale}
              onClick={() => {
                setLocale(l.code as Locale);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between px-3 py-2 text-left text-[13px] font-medium transition-colors",
                l.code === locale
                  ? "bg-[var(--color-bg-elevated)] text-[var(--color-denim)]"
                  : "text-[var(--color-black)]/90 hover:bg-[var(--color-bg-subtle)]",
              )}
            >
              <span>{l.label}</span>
              <span className="text-[11px] opacity-60">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
