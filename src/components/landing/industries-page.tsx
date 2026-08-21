import { SectionPage, type SectionPageContent } from "./section-page";

const CONTENT: SectionPageContent = {
  route: "industries",
  eyebrow: "Industries",
  title: "High-assurance operations across regulated industries",
  subtitle:
    "Mattermost serves organizations that cannot compromise on security, compliance, or continuity — self-hosted collaboration that adapts to industry constraints without a public SaaS backbone.",
  jumpLinks: [
    { id: "defense", label: "Defense" },
    { id: "government", label: "Government" },
    { id: "law-enforcement", label: "Law enforcement" },
    { id: "energy-utilities", label: "Energy" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "financial-services", label: "Financial services" },
    { id: "technology", label: "Technology" },
  ],
  sections: [
    {
      id: "overview",
      navLabel: "Overview",
      eyebrow: "One platform",
      title: "Industry solutions for high-assurance operations",
      lead: "Defense, government, law enforcement, energy, manufacturing, financial services, and technology teams use Mattermost where operational control and data sovereignty are non-negotiable.",
      cards: [
        {
          id: "defense",
          title: "Defense",
          body: "Support force collaboration, cyber operations, and coalition coordination with a platform designed for sovereignty, Zero Trust patterns, and degraded connectivity.",
          bullets: [
            "Classified networks and edge deployments",
            "Self-hosted collaboration, playbooks, and federation",
            "Air-gapped and DDIL operating realities",
          ],
          image: "/images/hero-camo.webp",
          imageAlt: "Defense operations",
        },
        {
          id: "government",
          title: "Government",
          body: "Deliver interagency collaboration with data residency, auditability, and deployment choices that match public-sector security standards.",
          bullets: [
            "Agency-controlled messaging and workflows",
            "Enterprise identity and compliance exports",
            "Sovereign cloud and on-prem options",
          ],
        },
        {
          id: "law-enforcement",
          title: "Law enforcement",
          body: "Coordinate investigations and operations with controlled access, auditable history, and integrations to systems agencies already trust.",
          bullets: [
            "Channels and permissions for case and event collaboration",
            "Administrative oversight and audit trails",
          ],
        },
        {
          id: "energy-utilities",
          title: "Energy & utilities",
          body: "Keep grid, generation, and field operations coordinated with a collaboration system that can run in OT-adjacent and regulated environments.",
          bullets: [
            "Incident response and field coordination",
            "Utility security constraints and continuity requirements",
          ],
        },
        {
          id: "manufacturing",
          title: "Manufacturing",
          body: "Connect plant, engineering, and security teams with controlled collaboration — especially where IP protection and OT security matter.",
          bullets: [
            "Self-hosted channels and industrial IT integrations",
            "Keep intellectual property off consumer collaboration clouds",
          ],
        },
        {
          id: "financial-services",
          title: "Financial services",
          body: "Meet collaboration needs for trading, risk, and security teams with deployment and control options compatible with financial regulatory expectations.",
          bullets: [
            "Retention, eDiscovery, and audit",
            "Customer-managed hosting and identity",
          ],
        },
        {
          id: "technology",
          title: "Technology",
          body: "Give product, security, and platform teams a ChatOps workspace that stays under enterprise control — GitHub, GitLab, Jira, and pipeline events beside the people who ship.",
          bullets: [
            "DevSecOps integrations in a controlled tenant",
            "Playbooks for release and incident rituals",
          ],
          image: "/images/product/github-integration.png",
          imageAlt: "Technology toolchain",
        },
      ],
    },
  ],
};

export function IndustriesPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
