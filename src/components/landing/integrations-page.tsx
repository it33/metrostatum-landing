import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useHashScroll } from "./use-hash-scroll";
import { cn } from "@/lib/utils";
import {
  MARKETPLACE,
  MARKETPLACE_CATEGORIES,
  lastUpdatedLabel,
  versionLabel,
  type MarketplaceItem,
} from "@/data/marketplace";

export function IntegrationsPage({ hashRoutes = false }: { hashRoutes?: boolean }) {
  useHashScroll();
  const [category, setCategory] = useState("All");
  const hrefFor = (slug: string) => (hashRoutes ? `#/integrations/${slug}` : `/integrations/${slug}`);

  const filtered = useMemo(() => {
    return MARKETPLACE.filter((i) => {
      if (category === "All") return true;
      if (category === "Supported") return i.supported || i.categories.includes("Mattermost Supported");
      return i.categories.includes(category);
    });
  }, [category]);

  const filters = ["All", "Supported", ...MARKETPLACE_CATEGORIES.filter((c) => c !== "Mattermost Supported")];

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
              Mattermost integrations
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Connect the tools operators already use — source control, ITSM, video, monitoring, and
              AI — without giving up data control. Catalog sourced from the Mattermost Marketplace.
            </p>
            <p className="mt-4 text-sm font-semibold text-white/70">
              {MARKETPLACE.length} listings · filter by category
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-6">
        <div className="container-page">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
            Category
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Category filter">
            {filters.map((f) => {
              const active = f === category;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(f)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                    active
                      ? "border-[var(--color-denim)] bg-[var(--color-denim)] text-white"
                      : "border-[var(--color-border)] bg-white text-[var(--color-denim)] hover:border-[var(--color-denim)]",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
            Showing {filtered.length} of {MARKETPLACE.length}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--color-fg-muted)]">No integrations in this category.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <IntegrationCard key={item.slug} item={item} href={hrefFor(item.slug)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function IntegrationCard({ item, href }: { item: MarketplaceItem; href: string }) {
  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--color-denim)]/30 hover:shadow-lg"
    >
      <div className="flex items-start gap-3 p-5">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          <img
            src={item.icon}
            alt=""
            className="size-8 object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-base font-semibold text-[var(--color-denim)]">{item.name}</h2>
            {item.supported || item.categories.includes("Mattermost Supported") ? (
              <span className="shrink-0 rounded-full bg-[var(--color-marigold)]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-denim)]">
                Supported
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 text-xs text-[var(--color-fg-muted)]">by {item.author}</p>
        </div>
      </div>
      <p className="line-clamp-3 px-5 text-sm leading-relaxed text-[var(--color-fg-muted)]">{item.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 px-5 pt-3">
        {item.categories.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-full bg-[var(--color-denim)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-denim)]"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] px-5 py-3 text-xs">
        <span className="font-medium text-[var(--color-fg-muted)]">
          {versionLabel(item)} · {lastUpdatedLabel(item)}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-denim)] group-hover:text-[var(--color-marigold)]">
          Details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
