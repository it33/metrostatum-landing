import { useState } from "react";
import {
  Cloud,
  Server,
  Shield,
  Radio,
  Building2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;
const DOCS_ARCH =
  "https://docs.mattermost.com/administration-guide/scale/server-architecture.html";
const DOCS_SCALE =
  "https://docs.mattermost.com/administration-guide/scale/scaling-for-enterprise.html";

type ArchId = "oracle" | "aws" | "azure";

type Architecture = {
  id: ArchId;
  title: string;
  subtitle: string;
  scale: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  cloud: string;
};

const ARCHITECTURES: Architecture[] = [
  {
    id: "oracle",
    title: "Oracle Cloud Infrastructure",
    subtitle: "Compact high-availability footprint",
    scale: "Small deployment · ~500–5,000 users",
    image: "https://docs.mattermost.com/_images/MattermostDeployment5kOracle.png",
    imageAlt: "Oracle Cloud small Mattermost deployment architecture diagram",
    highlights: [
      "OCI load balancer + VPN gateway",
      "HA application nodes behind proxy",
      "PostgreSQL + object storage layers",
      "Ideal for sovereign / regional OCI tenancies",
    ],
    cloud: "Oracle",
  },
  {
    id: "aws",
    title: "AWS (incl. GovCloud)",
    subtitle: "Hyperscale reference for national deployments",
    scale: "Scaled architecture · up to 50,000 concurrent users",
    image: "https://docs.mattermost.com/_images/MattermostDeployment50kaws.png",
    imageAlt: "AWS scaled Mattermost deployment architecture to 50,000 users",
    highlights: [
      "Elastic Load Balancing + multi-AZ app tier",
      "RDS PostgreSQL writer + read replicas",
      "S3 file store · OpenSearch · HPNS",
      "Maps cleanly to AWS GovCloud (US) regions",
    ],
    cloud: "AWS",
  },
  {
    id: "azure",
    title: "Microsoft Azure (incl. Government)",
    subtitle: "AKS-native pattern for defense & critical infra",
    scale: "Scaled architecture · up to 50,000 concurrent users",
    image: "https://docs.mattermost.com/_images/MattermostDeployment50kAzure.png",
    imageAlt: "Azure scaled Mattermost deployment architecture to 50,000 users",
    highlights: [
      "Azure Load Balancer + Virtual Network Gateways",
      "AKS application layer (MM-APP nodes)",
      "Azure Database for PostgreSQL · Blob Storage",
      "Aligned with Azure Government / IL environments",
    ],
    cloud: "Azure",
  },
];

const DEPLOYMENT_MODELS = [
  {
    icon: Cloud,
    title: "Private cloud & GovCloud hyperscalers",
    body: "Run on AWS GovCloud, Azure Government, Oracle sovereign regions, or commercial hyperscalers with customer-managed VPCs—full data residency and operational control without shared tenancy risk.",
  },
  {
    icon: Server,
    title: "On-premises data centers",
    body: "Deploy on customer hardware or virtualization stacks in corporate and government data centers. Same HA topology as cloud reference architectures, with local PostgreSQL and object storage.",
  },
  {
    icon: Shield,
    title: "Air-gapped & classified networks",
    body: "Fully disconnected installs for IL4/IL5/IL6 and equivalent environments. Offline package delivery, offline license activation, and zero outbound dependencies for continuous operations.",
  },
  {
    icon: Radio,
    title: "Tactical edge to theater",
    body: "Ruggedized and constrained-footprint deployments for expeditionary and denied/disrupted/intermittent/limited (DDIL) environments—paired with reach-back to regional or sovereign cloud when connectivity returns.",
  },
];

export function DeploymentArchitectures() {
  const [active, setActive] = useState<ArchId>("azure");
  const current = ARCHITECTURES.find((a) => a.id === active)!;

  return (
    <section
      id="deployment-architectures"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-labelledby="deploy-arch-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Proven at scale
          </p>
          <h2
            id="deploy-arch-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            Deployment architectures on hyperscaler sovereign &amp; Gov clouds
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Reference topologies from{" "}
            <a
              href={DOCS_ARCH}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--color-denim)] underline-offset-2 hover:underline"
            >
              docs.mattermost.com
            </a>{" "}
            for private cloud, on-prem, and air-gapped operations—from compact
            sovereign regions to 50,000-user national deployments.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEPLOYMENT_MODELS.map((m) => (
            <article
              key={m.title}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
            >
              <m.icon
                className="size-5 text-[var(--color-marigold)]"
                strokeWidth={1.75}
              />
              <h3 className="mt-3 text-sm font-semibold text-[var(--color-denim)]">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Cloud architecture"
          >
            {ARCHITECTURES.map((a) => {
              const selected = a.id === active;
              return (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(a.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition",
                    selected
                      ? "bg-[var(--color-denim)] text-white shadow-sm"
                      : "border border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:border-[var(--color-denim)]/40 hover:text-[var(--color-denim)]",
                  )}
                >
                  {a.cloud}
                </button>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <div className="grid lg:grid-cols-[1fr_minmax(0,1.35fr)]">
              <div className="flex flex-col justify-center border-b border-[var(--color-border)] p-6 lg:border-b-0 lg:border-r lg:p-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-marigold)]">
                  <Building2 className="size-3.5" />
                  {current.cloud}
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--color-denim)] md:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-fg-muted)]">
                  {current.subtitle}
                </p>
                <p className="mt-3 inline-flex w-fit rounded-full bg-[var(--color-denim)]/8 px-3 py-1 text-xs font-semibold text-[var(--color-denim)]">
                  {current.scale}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {current.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]"
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={DOCS_ARCH}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] transition-colors hover:text-[var(--color-marigold)]"
                >
                  View full architecture guide
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              <div className="relative bg-[var(--color-bg-elevated)] p-4 sm:p-6">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="mx-auto h-auto w-full max-w-full rounded-lg border border-[var(--color-border)] bg-white object-contain shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-denim)] px-6 py-8 text-white md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                Data center → tactical edge
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
                One platform across the continuum
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                The same Mattermost software stack runs from hyperscale GovCloud
                regions and enterprise data centers down to constrained, ruggedized
                hardware at the tactical edge—so operators keep familiar workflows
                whether connected, contested, or fully air-gapped.
              </p>
            </div>
            <a
              href={DOCS_SCALE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-marigold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-denim)] transition hover:brightness-105"
            >
              Scaling for enterprise
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
