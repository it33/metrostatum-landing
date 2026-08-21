import { ArrowRight } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useSectionScroll } from "./use-section-scroll";
import { CONTACT } from "@/nav-config";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

export type SectionCard = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  link?: { label: string; href: string };
};

export type PageSection = {
  id: string;
  navLabel: string;
  eyebrow?: string;
  title: string;
  lead: string;
  cards: SectionCard[];
};

export type SectionPageContent = {
  route: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: PageSection[];
  jumpLinks?: { id: string; label: string }[];
};

function img(src?: string) {
  if (!src) return src;
  if (src.startsWith("http") || src.startsWith(base)) return src;
  return `${base}${src.replace(/^\//, "")}`;
}

function SectionNav({
  route,
  items,
}: {
  route: string;
  items: { id: string; label: string }[];
}) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[72px] z-30 hidden border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md lg:block"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-2 text-[13px] font-medium">
          {items.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#/${route}/${s.id}`}
                className="inline-flex rounded-full px-3 py-1.5 text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Card({ card }: { card: SectionCard }) {
  return (
    <article
      id={card.id}
      className="scroll-mt-28 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      {card.image ? (
        <div className="relative aspect-[16/9] bg-[var(--color-bg-subtle)]">
          <img
            src={img(card.image)}
            alt={card.imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold tracking-tight text-[var(--color-denim)]">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{card.body}</p>
        {card.bullets && card.bullets.length > 0 ? (
          <ul className="mt-3 space-y-1.5">
            {card.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {card.link ? (
          <a
            href={card.link.href}
            target={card.link.href.startsWith("http") ? "_blank" : undefined}
            rel={card.link.href.startsWith("http") ? "noreferrer" : undefined}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
          >
            {card.link.label}
            <ArrowRight className="size-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function SectionPage({
  content,
  rest,
}: {
  content: SectionPageContent;
  rest?: string;
}) {
  useSectionScroll(rest);
  const jump =
    content.jumpLinks ?? content.sections.map((s) => ({ id: s.id, label: s.navLabel }));

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
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.12]">
              {content.title}
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-marigold-hover)]"
              >
                Talk to an expert
                <ArrowRight className="size-4" />
              </a>
              {content.sections[0] ? (
                <a
                  href={`#/${content.route}/${content.sections[0].id}`}
                  className="inline-flex h-11 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore {content.eyebrow.toLowerCase()}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <SectionNav route={content.route} items={jump} />

      {content.sections.map((sec, idx) => (
        <section
          key={sec.id}
          id={sec.id}
          className={cn(
            "scroll-mt-28 border-b border-[var(--color-border)] py-16 md:py-24",
            idx % 2 === 1 ? "bg-[var(--color-bg-elevated)]" : "bg-[var(--color-bg)]",
          )}
        >
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              {sec.eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                  {sec.eyebrow}
                </p>
              ) : null}
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{sec.title}</h2>
              <p className="mt-4 text-[var(--color-fg-muted)]">{sec.lead}</p>
            </div>
            <div
              className={cn(
                "mt-12 grid gap-6",
                sec.cards.length === 1
                  ? "mx-auto max-w-3xl"
                  : sec.cards.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {sec.cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-denim)] px-6 py-12 text-center text-white md:px-12 md:py-16">
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Talk through your environment
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Deploy Zero-Trust collaboration, automation, and AI on infrastructure you control —
                from national scale to the tactical edge.
              </p>
              <a
                href={CONTACT}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-marigold-hover)]"
              >
                Talk to an expert
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
