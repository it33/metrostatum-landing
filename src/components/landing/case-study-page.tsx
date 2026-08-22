import { ArrowRight, Quote } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CountryFlag } from "./country-flag";
import { CONTACT_SALES } from "@/nav-config";
import { CUSTOMER_STORIES } from "@/data/customer-stories";
import { getCaseStudyCopy } from "@/data/case-study-pages";

export function CaseStudyPage({
  slug,
  hashRoutes = false,
}: {
  slug: string;
  hashRoutes?: boolean;
}) {
  const meta = CUSTOMER_STORIES.find((s) => s.slug === slug);
  const copy = getCaseStudyCopy(slug);
  const customersHref = hashRoutes ? "#/customers" : "/customers";

  if (!meta) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
        <SiteHeader />
        <section className="container-page py-24 text-center">
          <h1 className="text-2xl font-bold">Case study not found</h1>
          <a href={customersHref} className="mt-4 inline-flex items-center gap-1.5 text-[var(--color-denim)]">
            Back to customers
            <ArrowRight className="size-4" />
          </a>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const title = copy?.title || meta.title;

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
        <div className="container-page relative grid items-center gap-8 py-12 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] md:gap-12 md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              Customer story
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.35rem] md:leading-[1.12]">
              {title}
            </h1>
            <div className="mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
              <span className="font-semibold">{meta.name}</span>
              <span className="inline-flex items-center gap-1.5">
                <CountryFlag country={meta.country} />
                {meta.country.name}
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                {meta.industry}
              </span>
              {meta.metric ? <span className="font-semibold text-[var(--color-marigold)]">{meta.metric}</span> : null}
            </div>
          </div>
          {meta.image ? (
            <figure className="overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
              <img
                src={meta.image}
                alt=""
                className="aspect-[16/10] w-full object-cover object-center"
              />
            </figure>
          ) : null}
        </div>
      </section>

      <article className="container-page grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_18rem] md:py-16 lg:gap-14">
        <div className="min-w-0">
          {copy?.quote ? (
            <blockquote className="mb-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8">
              <Quote className="size-6 text-[var(--color-marigold)]" aria-hidden />
              <p className="mt-3 text-lg font-medium leading-relaxed text-[var(--color-denim)]">
                “{copy.quote}”
              </p>
              {(copy.quoteName || copy.quoteRole) && (
                <footer className="mt-4 text-sm text-[var(--color-fg-muted)]">
                  {copy.quoteName ? <span className="font-semibold text-[var(--color-fg)]">{copy.quoteName}</span> : null}
                  {copy.quoteName && copy.quoteRole ? " · " : null}
                  {copy.quoteRole}
                </footer>
              )}
            </blockquote>
          ) : null}

          {copy?.sections.map((sec) => (
            <section key={sec.heading} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--color-denim)]">{sec.heading}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT_SALES}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
            >
              Talk to an expert
              <ArrowRight className="size-4" />
            </a>
            <a
              href={customersHref}
              className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
            >
              All customer stories
            </a>
          </div>
        </div>

        <aside className="space-y-6 md:sticky md:top-40 md:self-start">
          {copy?.highlights?.length ? (
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
                Highlights
              </h3>
              <ul className="mt-3 space-y-2.5">
                {copy.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-snug text-[var(--color-fg-muted)]">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 text-sm text-[var(--color-fg-muted)]">
            <p className="font-semibold text-[var(--color-denim)]">{meta.name}</p>
            <p className="mt-1">
              {meta.industry} · {meta.country.name}
            </p>
            <a
              href={meta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
            >
              Original version
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </aside>
      </article>

      <SiteFooter />
    </div>
  );
}
