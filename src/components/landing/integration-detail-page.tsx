import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CONTACT_SALES } from "@/nav-config";
import { getIntegration, lastUpdatedLabel, relatedIntegrations } from "@/data/marketplace";

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
              {item.version ? (
                <span className="rounded-full bg-[var(--color-marigold)] px-2.5 py-0.5 font-bold text-[var(--color-denim)]">
                  {item.version}
                </span>
              ) : null}
              <span className="font-medium text-white/80">{lastUpdatedLabel(item)}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_18rem] md:py-16">
        <div>
          <h2 className="text-xl font-bold text-[var(--color-denim)]">Overview</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{item.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-denim)] px-5 text-sm font-semibold text-white hover:bg-[var(--color-denim-mid)]"
              >
                <Github className="size-4" />
                Source on GitHub
              </a>
            ) : null}
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
            >
              Marketplace listing
              <ExternalLink className="size-3.5" />
            </a>
          </div>

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
                <dt className="font-semibold text-[var(--color-fg)]">Publisher</dt>
                <dd>{item.author}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Last update</dt>
                <dd>{lastUpdatedLabel(item)}</dd>
              </div>
              {item.version ? (
                <div>
                  <dt className="font-semibold text-[var(--color-fg)]">Version</dt>
                  <dd>{item.version}</dd>
                </div>
              ) : null}
              <div>
                <dt className="font-semibold text-[var(--color-fg)]">Categories</dt>
                <dd>{item.categories.join(", ")}</dd>
              </div>
            </dl>
            {item.releaseNotes ? (
              <a
                href={item.releaseNotes}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-denim)]"
              >
                Release notes
                <ExternalLink className="size-3.5" />
              </a>
            ) : null}
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
