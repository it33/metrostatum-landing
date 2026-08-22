import { useCallback, useRef } from "react";
import {
  ArrowRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Cloud,
  FileStack,
  GitBranch,
  Globe2,
  Kanban,
  Lock,
  MessageSquare,
  Network,
  Phone,
  Radar,
  Radio,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useSectionScroll } from "./use-section-scroll";
import { cn } from "@/lib/utils";

const CONTACT = "#/contact-sales";
const base = import.meta.env.BASE_URL;

export const PLATFORM_SECTIONS = [
  { id: "zero-trust-suite", label: "Zero Trust Application Suite" },
  { id: "sovereign-deployment", label: "Sovereign Deployment" },
  { id: "integrations", label: "Integrations & Automations" },
  { id: "sovereign-ai", label: "Sovereign AI" },
  { id: "information-controls", label: "Advanced Information Controls" },
  { id: "federated", label: "Federated Communications" },
  { id: "cross-domain", label: "Cross Domain Operations" },
  { id: "ddil", label: "DDIL" },
] as const;

const OVERVIEW_CARDS = [
  {
    id: "zero-trust-suite",
    icon: ShieldCheck,
    title: "Zero Trust Application Suite",
    body: "Messaging, files, playbooks, boards, and sovereign calling — one suite for air-gapped, on-prem, and private cloud.",
  },
  {
    id: "sovereign-deployment",
    icon: Cloud,
    title: "Sovereign Deployment",
    body: "Private cloud, on-prem data centers, GovCloud hyperscalers, and fully air-gapped networks from core to edge.",
  },
  {
    id: "integrations",
    icon: Workflow,
    title: "Integrations & Automations",
    body: "Connectors, webhooks, plugins, and playbook-driven automation that keep data and control inside your boundary.",
  },
  {
    id: "sovereign-ai",
    icon: Bot,
    title: "Sovereign AI",
    body: "Multi-agent, multi-LLM assistance on first-party infrastructure — prompts, embeddings, and outputs stay yours.",
  },
  {
    id: "information-controls",
    icon: Lock,
    title: "Advanced Information Controls",
    body: "Classification banners, least-privilege access, retention, export controls, and audit for need-to-know work.",
  },
  {
    id: "federated",
    icon: Globe2,
    title: "Federated Communications",
    body: "Connect trusted partners and allies without collapsing security domains or sharing a consumer tenant.",
  },
  {
    id: "cross-domain",
    icon: Share2,
    title: "Cross Domain Operations",
    body: "Land, air, sea, cyber, and space collaboration that respects domain boundaries and transfer rules.",
  },
  {
    id: "ddil",
    icon: Radio,
    title: "DDIL",
    body: "Disconnected, denied, intermittent, and limited-bandwidth operations from reach-back to the tactical edge.",
  },
] as const;

const SUITE_CAPABILITIES = [
  {
    icon: MessageSquare,
    title: "Messaging Collaboration",
    body: "Secure real-time and asynchronous channels, direct messages, and threads across web, desktop, and mobile — with offline resilience and full audit trails.",
    image: `${base}images/product/messaging-new-hero.png`,
  },
  {
    icon: FileStack,
    title: "File Sharing",
    body: "Share operational artifacts inside your boundary — controlled file stores, retention policies, and classification-aware access without consumer SaaS egress.",
    image: `${base}images/product/github-integration.png`,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Playbooks and runbooks for incident response, shift change, and SOP execution — structured checklists, owners, due dates, and measurable outcomes.",
    image: `${base}images/product/playbooks.png`,
  },
  {
    icon: Kanban,
    title: "Project Management",
    body: "Kanban boards and task views tied to mission channels so prioritization, accountability, and operational context stay in one workspace.",
    image: `${base}images/product/boards-kanban.png`,
  },
  {
    icon: Phone,
    title: "Audio Calling & Screenshare",
    body: "Sovereign voice and screen sharing inside channels you already control — live captions, transcription, and no external consumer calling stack.",
    image: `${base}images/product/call-window.png`,
  },
] as const;

const DEEP_SECTIONS = [
  {
    id: "sovereign-deployment",
    eyebrow: "Deploy anywhere",
    title: "Sovereign Deployment",
    lead: "Run Mattermost on your terms — private cloud, on-premises data centers, GovCloud hyperscalers, or fully air-gapped networks from the enterprise core to the tactical edge.",
    points: [
      {
        icon: Cloud,
        title: "Private cloud & GovCloud",
        body: "AWS GovCloud, Azure Government, OCI sovereign regions, and customer-managed VPCs with full data residency.",
      },
      {
        icon: Server,
        title: "On-premises data centers",
        body: "HA topologies on your hardware or virtualization stacks — same scale patterns as hyperscaler reference architectures.",
      },
      {
        icon: Lock,
        title: "Air-gapped & classified",
        body: "Disconnected installs for IL-aligned environments with offline package delivery and zero outbound dependencies.",
      },
      {
        icon: Radar,
        title: "Data center → tactical edge",
        body: "Constrained and ruggedized footprints for DDIL environments with reach-back when connectivity returns.",
      },
    ],
  },
  {
    id: "integrations",
    eyebrow: "Connect the mission stack",
    title: "Integrations & Automations",
    lead: "Layered extensibility for mission-critical systems — connectors, webhooks, plugins, and automation that keep data and control inside your boundary.",
    points: [
      {
        icon: Share2,
        title: "Pre-built connectors",
        body: "GitHub, security tooling, ITSM, and DevOps integrations that land context where operators already work.",
      },
      {
        icon: Zap,
        title: "Webhooks & slash commands",
        body: "Trigger workflows, post structured alerts, and drive ChatOps without leaving the mission channel.",
      },
      {
        icon: GitBranch,
        title: "Open APIs & plugins",
        body: "Extend the platform with open-core plugins and APIs for custom human–machine teaming pipelines.",
      },
      {
        icon: Workflow,
        title: "Playbook-driven automation",
        body: "Bind automations to repeatable processes so response stays consistent under pressure.",
      },
    ],
    cta: { label: "Explore the marketplace", href: "#/integrations" },
  },
  {
    id: "sovereign-ai",
    eyebrow: "AI under your control",
    title: "Sovereign AI & Human-Machine Teaming",
    lead: "Accelerate decisions with AI-driven assistance that stays fully controllable within sovereign infrastructure — multi-agent, multi-LLM, first-party data only.",
    points: [
      {
        icon: Bot,
        title: "Agents in context",
        body: "Summarize threads, extract action items, and answer questions using operational history — not public model training leaks.",
      },
      {
        icon: ShieldCheck,
        title: "Sovereign model control",
        body: "Choose and host models on first-party infrastructure; keep prompts, embeddings, and outputs inside your perimeter.",
      },
      {
        icon: MessageSquare,
        title: "Meeting & call intelligence",
        body: "Live captions, transcription, and AI summaries for secure knowledge transfer in time-sensitive scenarios.",
      },
      {
        icon: Network,
        title: "Multi-agent orchestration",
        body: "Coordinate specialized agents across security, logistics, and mission ops with human approval gates.",
      },
    ],
  },
  {
    id: "information-controls",
    eyebrow: "Need-to-know by design",
    title: "Advanced Information Controls",
    lead: "Classification banners, granular permissions, retention, export controls, and audit — so sensitive collaboration stays policy-aligned.",
    points: [
      {
        icon: Shield,
        title: "Classification & banners",
        body: "Visual and policy-enforced classification so users always know the sensitivity of the workspace they are in.",
      },
      {
        icon: Lock,
        title: "Least-privilege access",
        body: "Channel, team, and system roles with advanced permissions for regulated and defense environments.",
      },
      {
        icon: FileStack,
        title: "Retention & eDiscovery",
        body: "Data retention policies, compliance exports, and audit logs for legal and mission accountability.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Trust alignment",
        body: "Architecture patterns that support continuous verification, segmentation, and controlled egress.",
      },
    ],
  },
  {
    id: "federated",
    eyebrow: "Collaborate beyond the enclave",
    title: "Federated Communications",
    lead: "Connect trusted partners, allies, and agencies without collapsing security domains — federated workspaces for multi-organization missions.",
    points: [
      {
        icon: Globe2,
        title: "Federated workspaces",
        body: "Share selected channels and contexts with external partners while retaining administrative sovereignty.",
      },
      {
        icon: Network,
        title: "Partner coordination",
        body: "Joint incident rooms and mission threads that span organizations without a shared consumer tenant.",
      },
      {
        icon: Share2,
        title: "Controlled sharing",
        body: "Define what crosses the boundary — messages, files, and bots — under policy and audit.",
      },
      {
        icon: Lock,
        title: "Identity & trust",
        body: "Integrate with enterprise identity while keeping federation relationships explicit and revocable.",
      },
    ],
  },
  {
    id: "cross-domain",
    eyebrow: "Operate across domains",
    title: "Cross Domain Operations",
    lead: "Support multi-domain mission operations — land, air, sea, cyber, space — with collaboration patterns that respect domain boundaries and transfer rules.",
    points: [
      {
        icon: Radar,
        title: "Multi-domain mission rooms",
        body: "Bring operators from different domains into structured collaboration without flattening classification or control.",
      },
      {
        icon: GitBranch,
        title: "Guarded transfer patterns",
        body: "Align with cross-domain solutions and data diodes so information flows only where policy allows.",
      },
      {
        icon: Server,
        title: "Domain-specific deployments",
        body: "Deploy instances per domain or enclave and interconnect only through approved bridges.",
      },
      {
        icon: Shield,
        title: "Operational continuity",
        body: "Keep collaboration available when domains are contested, segmented, or intermittently connected.",
      },
    ],
  },
  {
    id: "ddil",
    eyebrow: "Disconnected, denied, intermittent, limited",
    title: "DDIL operations",
    lead: "Keep collaboration available when bandwidth is scarce, links drop, or the network is contested — from reach-back at the core to a hardened footprint at the tactical edge.",
    points: [
      {
        icon: Radio,
        title: "Operate through disruption",
        body: "Offline-capable clients and deferred sync so teams keep working when connectivity is intermittent or denied.",
      },
      {
        icon: Radar,
        title: "Tactical edge footprints",
        body: "Constrained and ruggedized deployments that run close to the operator and reconnect when the path returns.",
      },
      {
        icon: Network,
        title: "Reach-back when available",
        body: "Synchronize mission history with the enterprise instance over constrained links without requiring a public SaaS plane.",
      },
      {
        icon: Lock,
        title: "No mandatory cloud dependency",
        body: "Core messaging, files, and playbooks continue inside the enclave with zero outbound requirements.",
      },
    ],
  },
] as const;

function PlatformOverviewCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section aria-label="Platform capabilities" className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-10 md:py-12">
      <div className="container-page">
        <div className="relative md:px-14">
          <button
            type="button"
            aria-label="Previous capability"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white text-[var(--color-denim)] shadow-sm hover:bg-[var(--color-bg-elevated)] md:inline-flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {OVERVIEW_CARDS.map((card) => (
              <article
                key={card.id}
                className="flex w-[min(18.5rem,80vw)] shrink-0 snap-start flex-col rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--color-denim)_8%,white)] text-[var(--color-denim)]">
                  <card.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight text-[var(--color-denim)]">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-fg-muted)]">{card.body}</p>
                <a
                  href={`#/platform/${card.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                >
                  Learn more
                  <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next capability"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white text-[var(--color-denim)] shadow-sm hover:bg-[var(--color-bg-elevated)] md:inline-flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function PlatformPage({ rest }: { rest?: string }) {
  useSectionScroll(rest);
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
              Platform
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.12]">
              Sovereign Collaboration and Automation for the AI Era
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-[var(--color-marigold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Zero-Trust application suite, sovereign deployment, integrations, human–machine teaming,
              advanced information controls, federation, and cross-domain operations — one platform for
              mission-critical work.
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
              <a
                href="#/platform/zero-trust-suite"
                className="inline-flex h-11 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the suite
              </a>
            </div>
          </div>
        </div>
      </section>

      <PlatformOverviewCarousel />

      <section
        id="zero-trust-suite"
        className="scroll-mt-40 border-b border-[var(--color-border)] py-16 md:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
              Core product
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Zero Trust Application Suite
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Messaging Collaboration, File Sharing, Workflow Automation, Project Management, Audio
              Calling & Screenshare — purpose-built for air-gapped, on-prem, and private cloud
              environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUITE_CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/10] bg-[var(--color-bg-subtle)]">
                  <img
                    src={cap.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--color-denim)_8%,white)] text-[var(--color-denim)]">
                    <cap.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--color-denim)]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{cap.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {DEEP_SECTIONS.map((sec, idx) => {
        const reverse = idx % 2 === 1;
        return (
          <section
            key={sec.id}
            id={sec.id}
            className={cn(
              "scroll-mt-40 border-b border-[var(--color-border)] py-16 md:py-24",
              reverse ? "bg-[var(--color-bg-elevated)]" : "bg-[var(--color-bg)]",
            )}
          >
            {sec.id === "sovereign-ai" ? <span id="human-machine" className="sr-only" /> : null}
            <div className="container-page">
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
                <div className={cn(reverse && "lg:order-2")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                    {sec.eyebrow}
                  </p>
                  <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                    {sec.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)]">{sec.lead}</p>
                  <div className="mt-6 flex flex-col items-start gap-3">
                    {"cta" in sec && sec.cta ? (
                      <a
                        href={sec.cta.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                      >
                        {sec.cta.label}
                        <ArrowRight className="size-4" />
                      </a>
                    ) : null}
                    <a
                      href={CONTACT}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                    >
                      Discuss this capability
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
                <div className={cn("grid gap-4 sm:grid-cols-2", reverse && "lg:order-1")}>
                  {sec.points.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                    >
                      <p.icon className="size-5 text-[var(--color-marigold)]" strokeWidth={1.75} />
                      <h3 className="mt-3 text-sm font-semibold text-[var(--color-denim)]">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-denim)] px-6 py-12 text-center text-white md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Ready for sovereign operations?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Deploy Zero-Trust collaboration and automation on infrastructure you control — from
                national scale to the tactical edge.
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
                <a
                  href="#/"
                  className="inline-flex h-11 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
