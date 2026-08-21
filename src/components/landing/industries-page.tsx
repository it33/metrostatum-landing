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
          image: "/images/industries/defense.jpg",
          imageAlt: "Night launch in navy and gold — defense and mission operations",
          imageCaption:
            "Defense and mission operations: classified networks, edge deployments, and DDIL collaboration under operational control.",
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
          image: "/images/industries/government.jpg",
          imageAlt: "Government building at night in navy and gold",
          imageCaption:
            "Public-sector collaboration with residency, auditability, and sovereign deployment choices.",
        },
        {
          id: "law-enforcement",
          title: "Law enforcement",
          body: "Coordinate investigations and operations with controlled access, auditable history, and integrations to systems agencies already trust.",
          bullets: [
            "Channels and permissions for case and event collaboration",
            "Administrative oversight and audit trails",
          ],
          image: "/images/industries/law-enforcement.jpg",
          imageAlt: "Controlled-access security imagery in navy and gold",
          imageCaption:
            "Law-enforcement collaboration with controlled access, auditable history, and oversight.",
        },
        {
          id: "energy-utilities",
          title: "Energy & utilities",
          body: "Keep grid, generation, and field operations coordinated with a collaboration system that can run in OT-adjacent and regulated environments.",
          bullets: [
            "Incident response and field coordination",
            "Utility security constraints and continuity requirements",
          ],
          image: "/images/industries/energy.jpg",
          imageAlt: "High-voltage pylons at night in navy and gold",
          imageCaption:
            "Energy and utilities: incident response and field coordination that can run in OT-adjacent, regulated environments.",
        },
        {
          id: "manufacturing",
          title: "Manufacturing",
          body: "Connect plant, engineering, and security teams with controlled collaboration — especially where IP protection and OT security matter.",
          bullets: [
            "Self-hosted channels and industrial IT integrations",
            "Keep intellectual property off consumer collaboration clouds",
          ],
          image: "/images/industries/manufacturing.jpg",
          imageAlt: "Industrial manufacturing floor with gold weld light",
          imageCaption:
            "Manufacturing: plant, engineering, and security teams collaborating without putting IP on a consumer cloud.",
        },
        {
          id: "financial-services",
          title: "Financial services",
          body: "Meet collaboration needs for trading, risk, and security teams with deployment and control options compatible with financial regulatory expectations.",
          bullets: [
            "Retention, eDiscovery, and audit",
            "Customer-managed hosting and identity",
          ],
          image: "/images/industries/financial-services.jpg",
          imageAlt: "Financial-district skyline in navy with gold window light",
          imageCaption:
            "Financial services: retention, eDiscovery, and customer-managed hosting for regulated collaboration.",
        },
        {
          id: "technology",
          title: "Technology",
          body: "Give product, security, and platform teams a ChatOps workspace that stays under enterprise control — GitHub, GitLab, Jira, and pipeline events beside the people who ship.",
          bullets: [
            "DevSecOps integrations in a controlled tenant",
            "Playbooks for release and incident rituals",
          ],
          image: "/images/industries/technology.jpg",
          imageAlt: "Data-center corridor in navy with gold rack lights",
          imageCaption:
            "Technology and DevSecOps: GitHub, GitLab, Jira, and pipeline events in a workspace the enterprise controls.",
        },
      ],
    },
  ],
};

export function IndustriesPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
