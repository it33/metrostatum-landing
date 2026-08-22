import { ArrowRight, Quote } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useHashScroll } from "./use-hash-scroll";
import { CONTACT } from "@/nav-config";
import { cn } from "@/lib/utils";

export type PartnerBrief = {
  date: string;
  title: string;
  source: string;
  href: string;
  summary: string;
};

export type PartnerQuote = {
  quote: string;
  name: string;
  title: string;
};

export type PartnerPageContent = {
  partner: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  capabilities: { title: string; body: string }[];
  environments: { title: string; body: string }[];
  stack: { title: string; items: string[] }[];
  briefs: PartnerBrief[];
  quotes: PartnerQuote[];
  resources: { label: string; href: string }[];
};

function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SECTIONS = [
  { id: "capabilities", label: "Joint capabilities" },
  { id: "environments", label: "Environments" },
  { id: "stack", label: "Stack" },
  { id: "briefs", label: "Briefs & announcements" },
] as const;

export function PartnerPage({ content }: { content: PartnerPageContent }) {
  useHashScroll();

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
        <div className="container-page relative grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              {content.title}
            </h1>
            <div className="mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
              >
                Talk to an expert
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#briefs"
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo("briefs");
                }}
                className="inline-flex h-11 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Briefs & announcements
              </a>
            </div>
          </div>
          {content.heroImage ? (
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <img
                src={content.heroImage}
                alt={content.heroImageAlt || ""}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          ) : null}
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-[var(--site-header-h,8.5rem)] z-30 hidden border-b border-[var(--color-border)] bg-white lg:block"
      >
        <div className="container-page">
          <ul className="flex gap-1 overflow-x-auto py-2 text-[13px] font-medium">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    jumpTo(s.id);
                  }}
                  className="inline-flex rounded-full px-3 py-1.5 text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="capabilities" className="scroll-mt-28 border-b border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Joint capabilities
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            What {content.partner} and Mattermost deliver together
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {content.capabilities.map((c) => (
              <article
                key={c.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-bold tracking-tight text-[var(--color-denim)]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="environments"
        className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      >
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Environments
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Deploy where the mission already lives
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.environments.map((e) => (
              <div
                key={e.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5"
              >
                <h3 className="font-semibold text-[var(--color-denim)]">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-28 border-b border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Interoperability
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Connect the {content.partner} stack you already run
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.stack.map((s) => (
              <div
                key={s.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="text-base font-bold text-[var(--color-denim)]">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.quotes.length > 0 ? (
        <section className="border-b border-[var(--color-border)] bg-[var(--color-denim)] py-16 text-white md:py-20">
          <div className="container-page">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
              From the announcements
            </p>
            <div className={cn("mt-8 grid gap-8", content.quotes.length > 1 ? "md:grid-cols-2" : "max-w-3xl")}>
              {content.quotes.map((q) => (
                <blockquote key={q.name} className="relative">
                  <Quote className="mb-3 size-6 text-[var(--color-marigold)]" strokeWidth={1.5} />
                  <p className="text-lg leading-relaxed text-white/90">“{q.quote}”</p>
                  <footer className="mt-4 text-sm text-white/70">
                    <span className="font-semibold text-white">{q.name}</span>
                    <span className="block">{q.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="briefs" className="scroll-mt-28 py-16 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Briefs & announcements
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Public record of the partnership
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-fg-muted)]">
            Sourced from Mattermost, {content.partner}, and official documentation. No invented claims.
          </p>
          <ol className="mt-10 space-y-4">
            {content.briefs.map((b) => (
              <li key={b.href}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-elevated)]"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <time className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-denim)]">
                      {b.date}
                    </time>
                    <span className="text-xs text-[var(--color-fg-subtle)]">{b.source}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-[var(--color-denim)]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{b.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)]">
                    Read source
                    <ArrowRight className="size-4" />
                  </span>
                </a>
              </li>
            ))}
          </ol>

          {content.resources.length > 0 ? (
            <div className="mt-12 border-t border-[var(--color-border)] pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                Technical resources
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {content.resources.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-subtle)]"
                    >
                      {r.label}
                      <ArrowRight className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <div className="rounded-[var(--radius-2xl)] bg-[var(--color-denim)] px-6 py-12 text-center text-white md:px-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight">
              Talk through a {content.partner} deployment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Map joint capabilities to your classification, residency, and edge constraints.
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
