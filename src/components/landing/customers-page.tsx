import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { LogoMarquee } from "./logo-marquee";
import { CountryFlag } from "./country-flag";
import { CONTACT } from "@/nav-config";
import { useHashScroll } from "./use-hash-scroll";
import { cn } from "@/lib/utils";
import {
  CUSTOMER_STORIES,
  GEOGRAPHY_FILTERS,
  INDUSTRY_FILTERS,
  type Industry,
} from "@/data/customer-stories";
import { getCustomerLogoSrc } from "./customer-logos";

export function CustomersPage() {
  useHashScroll();
  const [industry, setIndustry] = useState<Industry>("All");
  const [geo, setGeo] = useState<string>("all");

  const filtered = useMemo(() => {
    return CUSTOMER_STORIES.filter((s) => {
      if (industry !== "All" && s.industry !== industry) return false;
      if (geo !== "all" && s.country.code !== geo) return false;
      return true;
    });
  }, [industry, geo]);

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
              Customers
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.12]">
              Trusted by the world's most demanding operators
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              From allied air mobility and national power grids to global research and payments —
              teams choose Mattermost when operational control, data sovereignty, and speed are
              vital.
            </p>
            <p className="mt-4 text-sm font-semibold text-white/70">
              {CUSTOMER_STORIES.length} published case studies · filter by industry or geography
            </p>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-6">
        <div className="container-page flex flex-col gap-4">
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
                Industry
              </p>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Industry filter">
                {INDUSTRY_FILTERS.map((f) => {
                  const active = f === industry;
                  return (
                    <button
                      key={f}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setIndustry(f)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition",
                        active
                          ? "bg-[var(--color-denim)] text-white"
                          : "border border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:border-[var(--color-denim)]/40 hover:text-[var(--color-denim)]",
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
                Geography
              </p>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Geography filter">
                <button
                  type="button"
                  role="tab"
                  aria-selected={geo === "all"}
                  onClick={() => setGeo("all")}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition",
                    geo === "all"
                      ? "bg-[var(--color-denim)] text-white"
                      : "border border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:border-[var(--color-denim)]/40 hover:text-[var(--color-denim)]",
                  )}
                >
                  All
                </button>
                {GEOGRAPHY_FILTERS.map((c) => {
                  const active = geo === c.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setGeo(c.code)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition",
                        active
                          ? "bg-[var(--color-denim)] text-white"
                          : "border border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:border-[var(--color-denim)]/40 hover:text-[var(--color-denim)]",
                      )}
                    >
                      <CountryFlag country={c} className={active ? "ring-white/40" : undefined} />
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-xs text-[var(--color-fg-muted)]">
            Showing {filtered.length} of {CUSTOMER_STORIES.length} stories
            {industry !== "All" ? ` · ${industry}` : ""}
            {geo !== "all" ? ` · ${GEOGRAPHY_FILTERS.find((c) => c.code === geo)?.name}` : ""}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-[var(--color-fg-muted)]">
              No customer stories match those filters.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => {
                const logoSrc = getCustomerLogoSrc(s.slug);
                return (
                  <a
                    key={s.slug}
                    href={`#/customers/${s.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--color-denim)]/30 hover:shadow-lg"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-[var(--color-bg-elevated)]">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <div className="flex items-start justify-between gap-3">
                        {logoSrc ? (
                          <div className="flex h-8 max-w-[8.5rem] items-center">
                            <img
                              src={logoSrc}
                              alt={s.name}
                              loading="lazy"
                              className="max-h-7 max-w-[8.5rem] object-contain object-left"
                              onError={(e) => {
                                e.currentTarget.style.visibility = "hidden";
                              }}
                            />
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-[var(--color-denim)]">
                            {s.name}
                          </span>
                        )}
                        <span className="shrink-0 rounded-full bg-[var(--color-denim)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-denim)]">
                          {s.industry}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-fg-muted)]">
                        <CountryFlag country={s.country} />
                        <span>{s.country.name}</span>
                      </div>
                      {logoSrc && (
                        <span className="text-sm font-semibold text-[var(--color-denim)]">{s.name}</span>
                      )}
                      {s.metric && (
                        <p className="text-sm font-bold tracking-tight text-[var(--color-fg)]">
                          {s.metric}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{s.title}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-[var(--color-denim)] transition-colors group-hover:text-[var(--color-marigold)]">
                        Read case study
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="https://mattermost.com/customers/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
            >
              View all customer stories on mattermost.com
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-denim)] px-6 py-12 text-center text-white md:px-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight">Ready to operate on your terms?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Talk with our team about sovereign collaboration for your mission.
            </p>
            <a
              href={CONTACT}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)]"
            >
              Talk to an expert
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
