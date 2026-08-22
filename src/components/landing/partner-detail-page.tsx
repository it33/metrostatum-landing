import { useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CountryFlag } from "./country-flag";
import { CONTACT_SALES } from "@/nav-config";
import { getPartner, PARTNERS } from "@/data/partners";

const base = import.meta.env.BASE_URL;
const ORIGINAL = "https://mattermost.com/partners/";

export function PartnerDetailPage({ slug }: { slug: string }) {
  const partner = getPartner(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!partner) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
        <SiteHeader />
        <section className="container-page py-24 text-center">
          <h1 className="text-2xl font-bold">Partner not found</h1>
          <a href="#/partners" className="mt-4 inline-flex items-center gap-1.5 text-[var(--color-denim)]">
            Back to regional partners
            <ArrowRight className="size-4" />
          </a>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const related = PARTNERS.filter(
    (p) => p.slug !== partner.slug && (p.region === partner.region || p.types.some((t) => partner.types.includes(t))),
  ).slice(0, 3);

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
        <div className="container-page relative grid items-center gap-8 py-14 md:grid-cols-[auto_1fr] md:py-20">
          <div className="flex h-24 w-40 items-center justify-center rounded-2xl border border-white/20 bg-white p-4">
            <img src={`${base}${partner.logo}`} alt="" className="max-h-16 max-w-full object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              Regional partner
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{partner.name}</h1>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/80">
              {partner.country.code !== "un" ? <CountryFlag country={partner.country} /> : null}
              <span>{partner.location}</span>
              <span className="text-white/40">·</span>
              <span>{partner.region}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {partner.types.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_16rem] md:py-16">
        <div>
          <h2 className="font-display text-xl font-bold text-[var(--color-denim)]">About this partner</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-fg-muted)]">{partner.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={partner.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-cta)] px-5 text-[14px] font-semibold text-white hover:bg-[var(--color-denim-mid)]"
            >
              Visit site
              <ExternalLink className="size-4" />
            </a>
            <a
              href={CONTACT_SALES}
              className="inline-flex h-11 items-center rounded-md border border-[var(--color-border-strong)] bg-white px-5 text-[14px] font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-subtle)]"
            >
              Talk to an expert
            </a>
          </div>
          <p className="mt-6 text-sm">
            <a
              href={ORIGINAL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--color-denim)] underline-offset-2 hover:underline"
            >
              Original version
            </a>
            <span className="text-[var(--color-fg-subtle)]"> on mattermost.com/partners</span>
          </p>
        </div>
        <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
            At a glance
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-[var(--color-fg-subtle)]">Type</dt>
              <dd className="font-semibold text-[var(--color-fg)]">{partner.types.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-fg-subtle)]">Region</dt>
              <dd className="font-semibold text-[var(--color-fg)]">{partner.region}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-fg-subtle)]">Location</dt>
              <dd className="font-semibold text-[var(--color-fg)]">{partner.location}</dd>
            </div>
          </dl>
        </aside>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] py-12">
          <div className="container-page">
            <h2 className="font-display text-xl font-bold text-[var(--color-denim)]">More partners</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`#/partners/${p.slug}`}
                    className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-denim)]/30"
                  >
                    <div className="flex h-12 items-center">
                      <img src={`${base}${p.logo}`} alt="" className="max-h-10 max-w-[9rem] object-contain" />
                    </div>
                    <p className="mt-3 font-semibold text-[var(--color-denim)]">{p.name}</p>
                    <p className="mt-1 text-xs text-[var(--color-fg-muted)]">{p.types[0]} · {p.region}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </div>
  );
}
