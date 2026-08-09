import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Fingerprint,
  GitBranch,
  Headphones,
  Lock,
  Network,
  Radio,
  Server,
  Shield,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductPreview } from "./product-preview";
import { SiteHeader } from "./site-header";

const pillars = [
  {
    icon: Network,
    title: "Adaptable",
    body: "Integrate and extend collaboration across tools, teams, and domains without ceding control of your data plane.",
  },
  {
    icon: Zap,
    title: "Focused",
    body: "Deep integrations, automated playbooks, and sovereign audio keep operators on the mission — not the tools.",
  },
  {
    icon: Shield,
    title: "Secure",
    body: "Zero-trust controls, classification banners, attribute-based access, and full audit trails by design.",
  },
  {
    icon: Server,
    title: "Resilient",
    body: "Self-hosted, private cloud, hybrid, or fully air-gapped — high availability where failure is not an option.",
  },
];

const useCases = [
  {
    title: "Self-sovereign collaboration",
    challenge: "Meet evolving data control and residency mandates.",
    benefit: "Faster decisions with GDPR-aligned self-hosting and accelerated secure collaboration.",
  },
  {
    title: "Integrated security operations",
    challenge: "Fragmented tools slow detection and response.",
    benefit: "Unify chat, playbooks, and AI triage in one audited mission workspace.",
  },
  {
    title: "Command and control",
    challenge: "Distributed teams need a single operational picture.",
    benefit: "Channels, boards, and voice that stay inside your sovereignty boundary.",
  },
  {
    title: "Out-of-band incident response",
    challenge: "Primary systems fail when you need them most.",
    benefit: "Standalone collaboration that remains available under degraded conditions.",
  },
  {
    title: "Real-time DevSecOps",
    challenge: "Security and engineering work in disconnected loops.",
    benefit: "Ship with shared context, automated checks, and continuous audit.",
  },
  {
    title: "Purpose-built collaboration",
    challenge: "Consumer chat apps expose mission data.",
    benefit: "Enterprise controls without the consumer product tradeoffs.",
  },
];

const features = [
  {
    icon: Radio,
    title: "Secure messaging & channels",
    body: "Persistent, encrypted team communication with classification banners, spillage prevention, and full audit trails.",
  },
  {
    icon: Workflow,
    title: "Workflow & playbook automation",
    body: "Codify operational procedures into repeatable, automated workflows your teams can run under pressure.",
  },
  {
    icon: Headphones,
    title: "Audio & screenshare",
    body: "Sovereign real-time calls with transcription and AI summarization — no external SaaS dependency.",
  },
  {
    icon: GitBranch,
    title: "Project & task boards",
    body: "Kanban and cross-functional coordination for mission planning, sprints, and compliance tracking.",
  },
  {
    icon: Bot,
    title: "Human–machine teaming",
    body: "Sovereign AI agents that enrich, triage, and brief — integrated into channels you already trust.",
  },
  {
    icon: Fingerprint,
    title: "Advanced information controls",
    body: "ABAC, burn-on-read, data spillage mitigation, and granular admin for the most stringent environments.",
  },
];

const deployOptions = [
  { icon: Cloud, title: "Sovereign cloud", body: "Azure, Oracle, Google, AWS — in regions and tenancies you control." },
  { icon: Server, title: "On-prem / private cloud", body: "Deploy on infrastructure your operators already trust." },
  { icon: Lock, title: "Air-gapped / classified", body: "Fully disconnected environments with no third-party dependency." },
  { icon: Network, title: "Hybrid / multi-region", body: "Span sites and classifications without losing a single control plane." },
];

const securityItems = [
  {
    title: "Data control & governance",
    items: ["Identity and access controls", "Granular admin policies", "Data residency you define"],
  },
  {
    title: "Compliance & scale",
    items: ["Auditing and reporting", "Enterprise scalability", "Continuous compliance evidence"],
  },
  {
    title: "Deployment flexibility",
    items: ["On-prem and secure cloud", "Cloud-neutral self-host", "Air-gapped and BYOD-ready"],
  },
];

const specialists = [
  "Global enterprise & commercial",
  "U.S. defense & national security",
  "Five Eyes partners",
  "NATO & European defence",
  "Canadian government & defence",
  "Allied government specialist",
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      {/* Hero */}
      <section className="hero-wash relative overflow-hidden">
        <div className="grid-noise pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-page relative pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1.5 text-xs text-[var(--color-fg-muted)] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              Introducing Metrostatum Enterprise Advanced
              <span className="hidden text-[var(--color-fg-subtle)] sm:inline">· Multi-domain secure ops</span>
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold tracking-[-0.03em] text-[var(--color-fg)] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Operational sovereignty for mission-critical work
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
              Collaboration, automation, and sovereign AI for air-gapped, on-prem, and private cloud
              environments. Trusted where control of data and operations is non-negotiable.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">
                  Talk to an expert
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#platform">Explore the platform</a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-[var(--color-fg-subtle)]">
              Deploy anywhere. Control everything.
            </p>
          </div>

          <div className="mt-14 md:mt-20">
            <ProductPreview />
          </div>
        </div>
      </section>

      {/* Control */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Control in a connected world
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-fg)] md:text-4xl">
              Fragmented tools. Exposed data. Manual workflows.
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
              Enterprises and mission organizations struggle with uncontrolled data exposure and
              slow handoffs across chat, tickets, and SIEM. Metrostatum unifies sovereign
              collaboration, adaptive security, and AI-accelerated workflows in one environment you
              own end to end.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Sovereign collaboration that never leaves your boundary",
              "Adaptive security with continuous auditability",
              "AI that accelerates ops without shipping data to public models",
            ].map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section id="platform" className="scroll-mt-24 border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Built for real-world mission success
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Adaptable. Focused. Secure. Resilient.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-primary)]">
                  <p.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-fg)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section
        id="use-cases"
        className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Purpose-built use cases
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Critical infrastructure. National security. Enterprise scale.
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Proven patterns for teams that cannot afford consumer collaboration platforms.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <article
                key={uc.title}
                className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="text-base font-semibold text-[var(--color-fg)]">{uc.title}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
                      Challenge
                    </p>
                    <p className="mt-1 text-[var(--color-fg-muted)]">{uc.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                      Metrostatum benefit
                    </p>
                    <p className="mt-1 text-[var(--color-fg-muted)]">{uc.benefit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent mission environment */}
      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              The intelligent mission environment
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Zero trust. Workflow automation. Sovereign AI.
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Everything mission teams need to coordinate, decide, and act — without leaking context
              to the public internet.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-[var(--color-primary)]">
                  <f.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy */}
      <section
        id="deploy"
        className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Deploy anywhere
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Control everything
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              From sovereign public cloud to fully disconnected classified networks.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deployOptions.map((d) => (
              <article
                key={d.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <d.icon className="size-5 text-[var(--color-accent)]" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="scroll-mt-24 border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
                <ShieldCheck className="size-6" strokeWidth={1.75} />
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Designed for stringent security & privacy
              </h2>
              <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
                Metrostatum is built for teams that treat collaboration as critical infrastructure —
                not a chat app bolted onto productivity suites.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {securityItems.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                >
                  <h3 className="text-sm font-semibold text-[var(--color-fg)]">{s.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[var(--color-fg-muted)]">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[var(--color-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-20">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Talk to a specialist in your region
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {specialists.map((s) => (
              <a
                key={s}
                href="#contact"
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-12 text-center md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(43,124,255,0.18), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Take command of your operations
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--color-fg-muted)]">
                See secure messaging, automated playbooks, sovereign AI, and air-gapped deployment
                options with a Metrostatum specialist.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="mailto:hello@metrostatum.example">
                    Talk to an expert
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#platform">See the platform</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-12">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path
                    d="M8 22V10l5.5 7.5L19 10v12"
                    stroke="var(--color-primary)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M22 10v12" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm font-semibold">Metrostatum</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-fg-subtle)]">
              Collaboration platform for mission-critical work. An updated vision inspired by the
              Mattermost category — sovereign by default.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-medium text-[var(--color-fg)]">Product</p>
              <ul className="mt-3 space-y-2 text-[var(--color-fg-subtle)]">
                <li>
                  <a href="#platform" className="hover:text-[var(--color-fg)]">
                    Platform
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="hover:text-[var(--color-fg)]">
                    Use cases
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-[var(--color-fg)]">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[var(--color-fg)]">Company</p>
              <ul className="mt-3 space-y-2 text-[var(--color-fg-subtle)]">
                <li>
                  <a href="#contact" className="hover:text-[var(--color-fg)]">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/it33/metrostatum-landing"
                    className="hover:text-[var(--color-fg)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[var(--color-fg)]">Legal</p>
              <ul className="mt-3 space-y-2 text-[var(--color-fg-subtle)]">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-page mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-fg-subtle)]">
          © {new Date().getFullYear()} Metrostatum. Landing page concept — not affiliated with
          Mattermost, Inc.
        </div>
      </footer>
    </div>
  );
}
