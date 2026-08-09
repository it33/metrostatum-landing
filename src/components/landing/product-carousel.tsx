import { useCallback, useEffect, useId, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X, MessageSquare, Workflow, Phone, Kanban, Bot, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  title: string;
  description: string;
  icon: typeof MessageSquare;
  learnMore: string[];
  color: string;
};

const SLIDES: Slide[] = [
  {
    id: "messaging",
    title: "Messaging collaboration",
    description:
      "Secure, real-time and asynchronous communication across web, desktop, and mobile. Public and private channels, direct messages, and threaded conversations for structured operational coordination.",
    icon: MessageSquare,
    color: "#1E325C",
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
    icon: Workflow,
    color: "#2A4578",
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
    icon: Phone,
    color: "#1E325C",
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
    icon: Kanban,
    color: "#152442",
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
    icon: Bot,
    color: "#2A4578",
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
    icon: Puzzle,
    color: "#1E325C",
    learnMore: [
      "Pre-packaged connectors and slash commands",
      "Webhooks, plugins, and open-core extensibility",
      "DevOps and security toolchain integrations",
      "Keep data and automation inside your boundary",
    ],
  },
];

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const titleId = useId();
  const active = activeIndex !== null ? SLIDES[activeIndex] : null;
  const count = SLIDES.length;

  const open = useCallback((i: number) => {
    setActiveIndex(i);
    setPaused(true);
  }, []);
  const close = useCallback(() => {
    setActiveIndex(null);
    setPaused(false);
  }, []);
  const go = useCallback(
    (delta: number) => {
      setActiveIndex((cur) => {
        if (cur === null) return cur;
        return ((cur + delta) % count + count) % count;
      });
    },
    [count],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [activeIndex, close, go]);

  const loop = [...SLIDES, ...SLIDES];

  return (
    <section id="see-it" className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
            Capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Messaging, playbooks, calls, boards, agents & integrations
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            One sovereign workspace. Click any panel to learn more.
          </p>
        </div>
      </div>

      <div
        className="product-marquee relative mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { if (activeIndex === null) setPaused(false); }}
      >
        <div className={cn("product-marquee__track", paused && "product-marquee__track--paused")}>
          {loop.map((slide, i) => {
            const Icon = slide.icon;
            const realIndex = i % count;
            return (
              <article key={`${slide.id}-${i}`} className="product-marquee__card">
                <button type="button" className="product-marquee__hit" onClick={() => open(realIndex)}>
                  <div className="product-marquee__frame" style={{ background: `linear-gradient(145deg, ${slide.color}, #0f1a30)` }}>
                    <Icon className="size-16 text-white/90" strokeWidth={1.25} />
                  </div>
                  <div className="product-marquee__caption">
                    <div>
                      <h3 className="product-marquee__title">{slide.title}</h3>
                      <p className="product-marquee__desc">{slide.description}</p>
                    </div>
                    <span className="product-marquee__cta">
                      Learn more <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 shadow-xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-md p-1.5 text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-subtle)]"
              onClick={close}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <div className="flex items-center gap-3">
              <div
                className="flex size-12 items-center justify-center rounded-xl"
                style={{ background: `linear-gradient(145deg, ${active.color}, #0f1a30)` }}
              >
                <active.icon className="size-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 id={titleId} className="text-xl font-bold tracking-tight">{active.title}</h3>
            </div>
            <p className="mt-4 text-[var(--color-fg-muted)]">{active.description}</p>
            <ul className="mt-6 space-y-2">
              {active.learnMore.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--color-fg)]">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => go(-1)} aria-label="Previous">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => go(1)} aria-label="Next">
                  <ChevronRight className="size-4" />
                </Button>
              </div>
              <Button asChild>
                <a href="https://mattermost.com/contact-sales/" target="_blank" rel="noreferrer">
                  Talk to an expert <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
