import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CONTACT_SALES } from "@/nav-config";
import {
  getIntegration,
  lastUpdatedLabel,
  listingLinks,
  relatedIntegrations,
  versionLabel,
} from "@/data/marketplace";

export function IntegrationDetailPage({
  slug,
  hashRoutes = false,
}: {
  slug: string;
  hashRoutes?: boolean;
}) {
  const item = getIntegration(slug);
  const listHref = hashRoutes ? "#/integrations" : "/integrations";
  const hrefFor = (s: string) => (hashRoutes ? `#/integrations/${s}` : `/integrations/${s}`);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!item) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
        <SiteHeader />
        <section className="container-page py-24 text-center">
          <h1 className="text-2xl font-bold">Integration not found</h1>
          <a href={listHref} className="mt-4 inline-flex items-center gap-1.5 text-[var(--color-denim)]">
            Back to integrations
            <ArrowRight className="size-4" />
          </a>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const related = relatedIntegrations(item);
  const links = listingLinks(item);
  const primary = links.find((l) => /get started|source|download|github/i.test(l.label)) || links[0];
  const rest = links.filter(
    (l) => l !== primary && l.href.replace(/\/$/, "") !== item.href.replace(/\/$/, ""),
  );

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
          <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white">
            <img src={item.icon} alt="" className="size-14 object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              Integration
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{item.name}</h1>
            <p className="mt-2 text-sm text-white/75">by {item.author}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              {item.categories.map((c) => (
                <span key={c} className="rounded-full bg-white/10 px-2.5 py-0.5 font-semibold uppercase tracking-wide">
                  {c}
                </span>
              ))}
              <span className="rounded-full bg-[var(--color-marigold)] px-2.5 py-0.5 font-bold text-[var(--color-denim)]">
                {versionLabel(item)}
              </span>
              <span className="font-medium text-white/80">{lastUpdatedLabel(item)}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_18rem] md:py-16">
        <div>
          <h2 className="text-xl font-bold text-[var(--color-denim)]">Overview</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
            {item.tagline || item.description}
          </p>
          {item.tagline && item.description && item.tagline !== item.description ? (
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{item.description}</p>
          ) : null}

          {(item.sections || []).map((sec) => (
            <section key={sec.heading} className="mt-8">
              <h3 className="text-lg font-bold text-[var(--color-denim)]">{sec.heading}</h3>
              {sec.paragraphs.map((p) =>
                p.includes("\n• ") || p.startsWith("• ") ? (
                  <ul key={p.slice(0, 40)} className="mt-3 space-y-1.5">
                    {p.split("\n").map((line) => (
                      <li key={line} className="flex gap-2 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                        <span>{line.replace(/^•\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={p.slice(0, 40)} className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {p}
                  </p>
                ),
              )}
            </section>
          ))}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primary ? (
              <a
                href={primary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-denim)] px-5 text-sm font-semibold text-white hover:bg-[var(--color-denim-mid)]"
              >
                {/github/i.test(primary.href) ? <Github className="size-4" /> : <ExternalLink className="size-4" />}
                {primary.label}
              </a>
            ) : null}
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
            >
              Legacy Integrations Listing
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {rest.length > 0 ? (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[var(--color-denim)]">Links</h3>
              <ul className="mt-3 space-y-2">
                {rest.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                    >
                      {l.label}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {item.disclaimer ? (
            <aside className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
                Disclaimer
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{item.disclaimer}</p>
            </aside>
          ) : null}

          {related.length > 0 ? (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-[var(--color-denim)]">Related integrations</h2>
              <ul className="mt-4 divide-y divide-[var(--color-border)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a href={hrefFor(r.slug)} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-elevated)]">
                      <img src={r.icon} alt="" className="size-8 object-contain" />
                      <span className="flex-1 text-sm font-semibold text-[var(--color-denim)]">{r.name}</span>
                      <span className="text-xs text-[var(--color-fg-muted)]">{lastUpdatedLabel(r)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <aside className="space-y-5 md:sticky md:top-40 md:self-start">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
              Details
            </h3>
            <dl className="mt-3 space-y-2 text-sm text-[var(--color-fg-muted)]">
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Author</dt>
                <dd>{item.author}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Version</dt>
                <dd>{versionLabel(item)}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Last update</dt>
                <dd>{lastUpdatedLabel(item)}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Categories</dt>
                <dd>{item.categories.join(", ")}</dd>
              </div>
            </dl>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-denim)]"
            >
              Legacy Integrations Listing
              <ExternalLink className="size-3.5" />
            </a>
          </div>
          <a
            href={CONTACT_SALES}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
          >
            Talk to an expert
            <ArrowRight className="size-4" />
          </a>
          <a href={listHref} className="block text-center text-sm font-semibold text-[var(--color-denim)]">
            All integrations
          </a>
        </aside>
      </article>

      <SiteFooter />
    </div>
  );
}
