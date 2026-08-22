import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CountryFlag } from "./country-flag";
import { CONTACT_SALES } from "@/nav-config";
import { cn } from "@/lib/utils";
import {
  PARTNERS,
  PARTNER_REGIONS,
  PARTNER_TYPES,
  type PartnerRegion,
  type PartnerType,
} from "@/data/partners";

const base = import.meta.env.BASE_URL;

export function PartnersPage() {
  const [region, setRegion] = useState<PartnerRegion | "All">("All");
  const [type, setType] = useState<PartnerType | "All">("All");

  const filtered = useMemo(() => {
    return PARTNERS.filter((p) => {
      if (region !== "All" && p.region !== region) return false;
      if (type !== "All" && !p.types.includes(type)) return false;
      return true;
    });
  }, [region, type]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
        <div className="container-page relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              Ecosystem
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Regional partners
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Find an approved reseller, deployment partner, or systems integrator to help you
              implement Mattermost today.
            </p>
            <p className="mt-4 text-sm font-semibold text-white/70">
              {PARTNERS.length} listings · filter by region or partner type
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-6">
        <div className="container-page flex flex-col gap-4">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
              Region
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Region filter">
              {(["All", ...PARTNER_REGIONS] as const).map((f) => {
                const active = f === region;
                return (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setRegion(f)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[13px] font-semibold transition-colors",
                      active
                        ? "bg-[var(--color-denim)] text-white"
                        : "bg-white text-[var(--color-denim)] ring-1 ring-[color-mix(in_oklab,#1e325c_16%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-marigold)_28%,white)]",
                    )}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
              Partner type
            </p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Partner type filter">
              {(["All", ...PARTNER_TYPES] as const).map((f) => {
                const active = f === type;
                return (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setType(f)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[13px] font-semibold transition-colors",
                      active
                        ? "bg-[var(--color-denim)] text-white"
                        : "bg-white text-[var(--color-denim)] ring-1 ring-[color-mix(in_oklab,#1e325c_16%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-marigold)_28%,white)]",
                    )}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-[var(--color-fg-muted)]">
            Showing {filtered.length} of {PARTNERS.length}
          </p>
        </div>
      </section>

      <section className="container-page py-10 md:py-14">
        {filtered.length === 0 ? (
          <p className="text-center text-[var(--color-fg-muted)]">No partners match those filters.</p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#/partners/${p.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_8px_24px_rgba(30,50,92,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--color-denim)]/30 hover:shadow-[0_12px_32px_rgba(30,50,92,0.1)]"
                >
                  <div className="flex h-16 items-center justify-center rounded-lg bg-[var(--color-bg-subtle)] px-4">
                    <img
                      src={`${base}${p.logo}`}
                      alt=""
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.country.code !== "un" ? <CountryFlag country={p.country} /> : null}
                    <span className="text-[12px] text-[var(--color-fg-muted)]">{p.location}</span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-bold text-[var(--color-denim)]">
                    {p.name}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.types.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[color-mix(in_oklab,var(--color-ice)_70%,white)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-denim)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 line-clamp-4 flex-1 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--color-cta)]">
                    Learn more
                    <ArrowRight className="size-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-denim)] py-12 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Partner with Mattermost</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Looking for a strategic alliance, or want to join the regional partner program? Talk
              with us.
            </p>
          </div>
          <a
            href={CONTACT_SALES}
            className="inline-flex h-11 items-center rounded-md bg-[var(--color-marigold)] px-5 text-[14px] font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
          >
            Talk to an expert
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
