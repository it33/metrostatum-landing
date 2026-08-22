import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Button } from "@/components/ui/button";
import type { ContentPageDef, ContentSection } from "@/content/page-registry";

const CONTACT = "#/contact-sales";
const base = import.meta.env.BASE_URL;

function SectionBlock({ section }: { section: ContentSection }) {
  return (
    <section className="border-t border-[var(--color-border)] py-14 md:py-18">
      <div className="container-page">
        <div className={section.image ? "grid items-start gap-10 lg:grid-cols-2 lg:gap-14" : ""}>
          <div>
            {section.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                {section.eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-[var(--color-fg)] md:text-3xl">
              {section.title}
            </h2>
            {section.body.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)]">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.links && section.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                  >
                    {l.label}
                    {l.href.startsWith("http") ? (
                      <ExternalLink className="size-3.5" />
                    ) : (
                      <ArrowRight className="size-3.5" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
          {section.image && (
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-card)]">
              <img
                src={section.image.startsWith("http") ? section.image : `${base}${section.image.replace(/^\//, "")}`}
                alt={section.imageAlt || ""}
                className="h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ContentPage({ page }: { page: ContentPageDef }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255,188,31,0.18), transparent 55%), linear-gradient(135deg, #0c162a 0%, #152442 45%, #1e325c 100%)",
          }}
          aria-hidden
        />
        <div className="container-page relative py-16 md:py-22">
          {page.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              {page.eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {page.subtitle}
          </p>
          {page.heroBullets && page.heroBullets.length > 0 && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.heroBullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-white/85">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={CONTACT} target="_blank" rel="noreferrer">
                Talk to an expert
                <ArrowRight className="size-4" />
              </a>
            </Button>
            {page.secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a
                  href={page.secondaryCta.href}
                  {...(page.secondaryCta.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {page.secondaryCta.label}
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {page.sections.map((s, i) => (
        <SectionBlock key={`${s.title}-${i}`} section={s} />
      ))}

      {page.related && page.related.length > 0 && (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-14">
          <div className="container-page">
            <h2 className="text-xl font-bold tracking-tight">Related topics</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.related.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-denim)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-white"
                >
                  {r.label}
                  <ArrowRight className="ml-1.5 inline size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--color-border)] py-16 md:py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Ready to put operational sovereignty to work?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-fg-muted)]">
              Talk with our team about zero-trust collaboration, automation, and AI for private
              cloud, air-gapped, and on-prem environments.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <a href={CONTACT} target="_blank" rel="noreferrer">
                  Talk to an expert
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
