import { useCallback, useEffect, useState } from "react";
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  Headphones,
  Radio,
  Workflow,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

/**
 * Capabilities carousel — same modules as the capabilities grid,
 * splash art from mattermost.com platform_capabilities_carousel + product pages.
 */
type CapSlide = {
  id: string;
  title: string;
  body: string;
  image: string;
  icon: LucideIcon;
  alt: string;
};

const SLIDES: CapSlide[] = [
  {
    id: "messaging",
    title: "Secure messaging & channels",
    body: "Persistent, encrypted team communication with classification banners, spillage prevention, and full audit trails.",
    image: `${base}images/capabilities/platform-1.webp`,
    icon: Radio,
    alt: "Mattermost secure messaging and channels product splash",
  },
  {
    id: "playbooks",
    title: "Workflow & playbook automation",
    body: "Codify operational procedures into repeatable, automated workflows your teams can run under pressure.",
    image: `${base}images/capabilities/platform-2.webp`,
    icon: Workflow,
    alt: "Mattermost workflow and playbook automation splash",
  },
  {
    id: "calls",
    title: "Audio & screenshare",
    body: "Sovereign real-time calls with transcription and AI summarization — no external SaaS dependency.",
    image: `${base}images/capabilities/platform-3.webp`,
    icon: Headphones,
    alt: "Mattermost audio calls and screenshare splash",
  },
  {
    id: "boards",
    title: "Project & task boards",
    body: "Kanban and cross-functional coordination for mission planning, sprints, and compliance tracking.",
    image: `${base}images/capabilities/platform-4.webp`,
    icon: GitBranch,
    alt: "Mattermost project and task boards splash",
  },
  {
    id: "agents",
    title: "Human–machine teaming",
    body: "Sovereign AI agents that enrich, triage, and brief — integrated into channels you already trust.",
    image: `${base}images/capabilities/platform-5.webp`,
    icon: Bot,
    alt: "Mattermost human-machine teaming and AI agents splash",
  },
  {
    id: "controls",
    title: "Advanced information controls",
    body: "ABAC, burn-on-read, data spillage mitigation, and granular admin for the most stringent environments.",
    image: `${base}images/capabilities/platform-8.webp`,
    icon: Fingerprint,
    alt: "Mattermost advanced information controls splash",
  },
];

const AUTO_MS = 7000;

export function CapabilitiesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;
  const slide = SLIDES[index]!;
  const Icon = slide.icon;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, count, index]);

  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-16 md:py-24"
      aria-roledescription="carousel"
      aria-label="Platform capabilities"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] md:text-[var(--color-marigold)]" style={{ color: "var(--color-marigold)" }}>
            Capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Zero trust. Workflow automation. Sovereign AI.
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Everything mission teams need to coordinate, decide, and act — without leaking context
            to the public internet.
          </p>
        </div>

        {/* Module tab strip */}
        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Capability modules"
        >
          {SLIDES.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => go(i)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                  i === index
                    ? "border-[var(--color-marigold)] bg-[color-mix(in_oklab,var(--color-marigold)_14%,transparent)] text-[var(--color-fg)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
                )}
              >
                <TabIcon className="size-3.5 shrink-0" strokeWidth={1.75} />
                <span className="max-w-[11rem] truncate sm:max-w-none">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main stage */}
        <div className="relative mx-auto mt-6 max-w-5xl">
          <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-card)]">
            <div className="relative aspect-[16/10] w-full bg-[var(--color-black)] sm:aspect-[16/9]">
              {SLIDES.map((s, i) => (
                <div
                  key={s.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-out",
                    i === index ? "z-[1] opacity-100" : "pointer-events-none z-0 opacity-0",
                  )}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}: ${s.title}`}
                  aria-hidden={i !== index}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="h-full w-full object-cover object-center"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden
                  />
                </div>
              ))}

              {/* Overlay copy on image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-5 sm:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-denim)] text-[var(--color-sky)] shadow-lg">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-marigold)]">
                      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                      {slide.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Side arrows */}
              <button
                type="button"
                className="absolute left-3 top-1/2 z-[3] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                aria-label="Previous capability"
                onClick={() => go(index - 1)}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-[3] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                aria-label="Next capability"
                onClick={() => go(index + 1)}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-3 gap-2 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:grid-cols-6 sm:p-4">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "group relative aspect-video overflow-hidden rounded-[var(--radius-sm)] border transition-all",
                    i === index
                      ? "border-[var(--color-marigold)] ring-2 ring-[color-mix(in_oklab,var(--color-marigold)_40%,transparent)]"
                      : "border-[var(--color-border)] opacity-75 hover:opacity-100",
                  )}
                  aria-label={`Show ${s.title}`}
                >
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/55 px-1 py-0.5 text-[9px] font-medium leading-tight text-white/90 sm:text-[10px]">
                    {s.title.split("&")[0]?.trim()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
