import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

export type CarouselSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  learnMore?: string[];
};

/** Product screens only — IME infographic removed per request */
const SLIDES: CarouselSlide[] = [
  {
    id: "messaging",
    title: "Messaging collaboration",
    description:
      "Secure, real-time and asynchronous communication across web, desktop, and mobile. Public and private channels, direct messages, and threaded conversations for structured operational coordination.",
    image: `${base}images/product/messaging-new-hero.png`,
    alt: "Mattermost messaging collaboration with channels, direct messages, and threads",
    learnMore: [
      "Public and private channels for structured mission coordination",
      "Direct messages and threaded conversations",
      "Desktop, web, and mobile with offline-resilient delivery",
      "Classification banners and full audit trails",
    ],
  },
  {
    id: "playbooks",
    title: "Workflow automation",
    description:
      "Standardize and automate mission workflows such as incident response, shift changeovers, and operational checklists — with structured tasks, due dates, and metrics that reduce human error.",
    image: `${base}images/product/playbooks.png`,
    alt: "Mattermost Playbooks with structured checklists and operational workflows",
    learnMore: [
      "Structured checklists with owners and due dates",
      "Automate status updates and runbooks under pressure",
      "Metrics and retrospectives for continuous improvement",
      "Ideal for IR, shift change, and SOP execution",
    ],
  },
  {
    id: "calls",
    title: "Audio and screenshare",
    description:
      "Sovereign audio calling and screen sharing for secure knowledge transfer in time-sensitive scenarios — with live captions, transcription, and summarization inside channels and DMs.",
    image: `${base}images/product/call-window.png`,
    alt: "Mattermost call window with audio, screenshare, and live captions",
    learnMore: [
      "1:1 and group calls inside channels you already control",
      "Screen share for joint troubleshooting",
      "Live captions, transcription, and AI summaries",
      "No external consumer SaaS dependency",
    ],
  },
  {
    id: "boards",
    title: "Project and task management",
    description:
      "Coordinate operational work with Kanban-style boards integrated into messaging — drag-and-drop cards, customizable workflows, and real-time updates for prioritization and accountability.",
    image: `${base}images/product/boards-kanban.png`,
    alt: "Mattermost Kanban boards for visual task and project management",
    learnMore: [
      "Kanban boards with drag-and-drop cards",
      "Customizable workflows and views",
      "Tied to channels for full operational context",
      "Mission planning, sprints, and compliance tracking",
    ],
  },
  {
    id: "agents",
    title: "AI Agents and open APIs",
    description:
      "Accelerate decisions with AI-driven assistance fully controllable within sovereign infrastructure — summarize threads, extract action items, and answer questions with operational context.",
    image: `${base}images/product/agents-meeting-summary.png`,
    alt: "AI agent summarizing a meeting inside Mattermost",
    learnMore: [
      "Thread and meeting summarization",
      "Action-item extraction and Q&A in context",
      "Sovereign multi-agent / multi-LLM control plane",
      "Open APIs for custom human–machine teaming",
    ],
  },
  {
    id: "integrations",
    title: "Integrations and AI platform",
    description:
      "Layered extensibility for mission-critical systems — connect tools like GitHub, automate operations, and integrate multi-agent, multi-LLM workflows under a sovereign control plane.",
    image: `${base}images/product/github-integration.png`,
    alt: "GitHub integration notifications and pull request management in Mattermost",
    learnMore: [
      "Pre-packaged connectors and slash commands",
      "Webhooks, plugins, and open-core extensibility",
      "DevOps and security toolchain integrations",
      "Keep data and automation inside your boundary",
    ],
  },
];

export function ProductCarousel({ slides = SLIDES }: { slides?: CarouselSlide[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const titleId = useId();

  const active = activeIndex !== null ? slides[activeIndex] ?? null : null;
  const count = slides.length;

  const open = useCallback(
    (slide: CarouselSlide) => {
      const i = slides.findIndex((s) => s.id === slide.id);
      setActiveIndex(i >= 0 ? i : 0);
      setPaused(true);
    },
    [slides],
  );

  const close = useCallback(() => {
    setActiveIndex(null);
    setPaused(false);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setActiveIndex((cur) => {
        if (cur === null || count === 0) return cur;
        return ((cur + delta) % count + count) % count;
      });
    },
    [count],
  );

  const prevTitle = useMemo(() => {
    if (activeIndex === null) return "";
    return slides[((activeIndex - 1) % count + count) % count]?.title ?? "";
  }, [activeIndex, slides, count]);

  const nextTitle = useMemo(() => {
    if (activeIndex === null) return "";
    return slides[(activeIndex + 1) % count]?.title ?? "";
  }, [activeIndex, slides, count]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [activeIndex, close, go]);

  const loop = [...slides, ...slides];

  return (
    <section
      id="see-it"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-label="Platform in action"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Intelligent Mission Environment
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            See the platform in action
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Messaging, playbooks, calls, boards, agents, and integrations — one sovereign workspace.
            Click any panel to learn more.
          </p>
        </div>
      </div>

      <div
        className="product-marquee relative mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          if (activeIndex === null) setPaused(false);
        }}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null) && activeIndex === null) {
            setPaused(false);
          }
        }}
      >
        <div className="product-marquee__fade product-marquee__fade--left" aria-hidden />
        <div className="product-marquee__fade product-marquee__fade--right" aria-hidden />

        <div
          className={cn("product-marquee__track", paused && "product-marquee__track--paused")}
          style={{ ["--marquee-duration" as string]: `${Math.max(40, slides.length * 14)}s` }}
        >
          {loop.map((s, i) => (
            <article
              key={`${s.id}-${i}`}
              className="product-marquee__card group"
              aria-hidden={i >= slides.length ? true : undefined}
            >
              <button
                type="button"
                className="product-marquee__hit"
                onClick={() => open(s)}
                tabIndex={i >= slides.length ? -1 : 0}
                aria-label={`Learn more about ${s.title}`}
              >
                <div className="product-marquee__frame">
                  <img
                    src={s.image}
                    alt={i >= slides.length ? "" : s.alt}
                    className="product-marquee__img"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <div className="product-marquee__caption">
                  <div className="product-marquee__copy">
                    <p className="product-marquee__title">{s.title}</p>
                    <p className="product-marquee__desc">{s.description}</p>
                  </div>
                  <span className="product-marquee__cta">
                    Learn more
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-xl px-4 text-center text-xs text-[var(--color-fg-subtle)]">
        Scrolls continuously left → right. Hover to pause. Click a card for details.
      </p>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close details"
            onClick={close}
          />

          <button
            type="button"
            className="absolute left-2 top-1/2 z-[2] hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/75 sm:left-4 sm:inline-flex lg:left-8"
            aria-label={`Previous: ${prevTitle}`}
            onClick={() => go(-1)}
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-[2] hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/75 sm:right-4 sm:inline-flex lg:right-8"
            aria-label={`Next: ${nextTitle}`}
            onClick={() => go(1)}
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="relative z-[1] flex max-h-[min(92vh,840px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-card)] sm:rounded-[var(--radius-2xl)]">
            <div className="relative aspect-[16/10] w-full shrink-0 bg-[var(--color-black)] sm:aspect-[16/9]">
              <img
                key={active.id}
                src={active.image}
                alt={active.alt}
                className="h-full w-full object-contain object-center p-2 sm:p-4"
              />
              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>

              <div className="pointer-events-none absolute inset-y-0 left-2 right-2 flex items-center justify-between">
                <button
                  type="button"
                  className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70 sm:size-11"
                  aria-label={`Previous: ${prevTitle}`}
                  onClick={() => go(-1)}
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70 sm:size-11"
                  aria-label={`Next: ${nextTitle}`}
                  onClick={() => go(1)}
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                  Platform area
                </p>
                <p className="font-mono text-[11px] font-medium text-[var(--color-fg-subtle)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </p>
              </div>
              <h3 id={titleId} className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-fg)]">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)] sm:text-base">
                {active.description}
              </p>
              {active.learnMore && active.learnMore.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {active.learnMore.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-[var(--color-fg-muted)]">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href="https://mattermost.com/contact-sales/" target="_blank" rel="noreferrer">
                    Talk to an expert
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" onClick={close}>
                  Close
                </Button>
                <div className="ml-auto flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Previous: ${prevTitle}`}
                    onClick={() => go(-1)}
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Next: ${nextTitle}`}
                    onClick={() => go(1)}
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
