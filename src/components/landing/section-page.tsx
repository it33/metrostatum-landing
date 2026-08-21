import { useEffect, useId, useState } from "react";
import { ArrowRight, Expand, X } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useSectionScroll } from "./use-section-scroll";
import { CONTACT } from "@/nav-config";
import { cn } from "@/lib/utils";

export type SectionCard = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  link?: { label: string; href: string };
};

export type PageSection = {
  id: string;
  navLabel: string;
  eyebrow?: string;
  title: string;
  lead: string;
  cards: SectionCard[];
  /** Default: 3-col on large screens. `2x2` keeps four cards in two rows. */
  layout?: "default" | "2x2";
};

export type SectionPageContent = {
  route: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: PageSection[];
  jumpLinks?: { id: string; label: string }[];
};

function imgSrc(src?: string) {
  if (!src) return src;
  const base = import.meta.env.BASE_URL as string;
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

function DiagramLightbox({
  card,
  onClose,
}: {
  card: SectionCard;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(8,12,20,0.78)] backdrop-blur-[2px]"
        aria-label="Close diagram"
        onClick={onClose}
      />
      <div className="relative z-[1] flex max-h-[min(96vh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-white shadow-[0_24px_80px_rgba(8,12,20,0.35)]">
        <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
              Architecture
            </p>
            <h3 id={titleId} className="truncate text-base font-bold text-[var(--color-denim)] sm:text-lg">
              {card.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-denim)] hover:bg-[var(--color-bg-subtle)]"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-[var(--color-bg-elevated)] p-3 sm:p-5">
          <img
            src={imgSrc(card.image)}
            alt={card.imageAlt || card.title}
            className="mx-auto h-auto max-h-[min(70vh,720px)] w-full object-contain"
          />
          {card.imageCaption ? (
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {card.imageCaption}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--color-border)] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          {card.link ? (
            <a
              href={card.link.href}
              target={card.link.href.startsWith("http") ? "_blank" : undefined}
              rel={card.link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
            >
              {card.link.label}
              <ArrowRight className="size-3.5" />
            </a>
          ) : (
            <span />
          )}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--color-border-strong)] px-4 text-sm font-semibold text-[var(--color-denim)] hover:bg-[var(--color-bg-subtle)]"
            >
              Close
            </button>
            <a
              href={CONTACT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--color-marigold)] px-4 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-marigold-hover)]"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  card,
  onOpenDiagram,
}: {
  card: SectionCard;
  onOpenDiagram: (card: SectionCard) => void;
}) {
  return (
    <article
      id={card.id}
      className="scroll-mt-28 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      {card.image ? (
        <button
          type="button"
          onClick={() => onOpenDiagram(card)}
          className="group relative block aspect-[16/9] w-full bg-[var(--color-bg-subtle)] text-left"
          aria-label={`View full ${card.title} diagram`}
        >
          <img
            src={imgSrc(card.image)}
            alt={card.imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-denim)]/90 px-2.5 py-1 text-[11px] font-semibold text-white opacity-90 shadow-sm group-hover:bg-[var(--color-denim)]">
            <Expand className="size-3.5" />
            Full size
          </span>
        </button>
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

function gridClass(sec: PageSection) {
  if (sec.layout === "2x2") return "md:grid-cols-2";
  if (sec.cards.length === 1) return "mx-auto max-w-3xl";
  if (sec.cards.length === 2) return "md:grid-cols-2";
  if (sec.cards.length === 4) return "md:grid-cols-2";
  return "md:grid-cols-2 lg:grid-cols-3";
}

export function SectionPage({ content, rest }: { content: SectionPageContent; rest?: string }) {
  useSectionScroll(rest);
  const [openCard, setOpenCard] = useState<SectionCard | null>(null);
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
            <div className={cn("mt-12 grid gap-6", gridClass(sec))}>
              {sec.cards.map((card) => (
                <Card key={card.id} card={card} onOpenDiagram={setOpenCard} />
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

      {openCard?.image ? <DiagramLightbox card={openCard} onClose={() => setOpenCard(null)} /> : null}

      <SiteFooter />
    </div>
  );
}
