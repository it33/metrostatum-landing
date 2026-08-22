import { SectionPage, type SectionPageContent } from "./section-page";

const CONTENT: SectionPageContent = {
  route: "industries",
  eyebrow: "Industries",
  title: "High-assurance operations across regulated industries",
  subtitle:
    "Mattermost serves organizations that cannot compromise on security, compliance, or continuity — self-hosted collaboration that adapts to industry constraints without a public SaaS backbone.",
  jumpLinks: [
    { id: "defense", label: "National Security" },
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
      lead: "National security, government, law enforcement, energy, manufacturing, financial services, and technology teams use Mattermost where operational control and data sovereignty are non-negotiable.",
      cards: [
        {
          id: "defense",
          title: "National Security",
          body: "Support force collaboration, cyber operations, and coalition coordination with a platform designed for sovereignty, Zero Trust patterns, and degraded connectivity.",
          bullets: [
            "Classified networks and edge deployments",
            "Self-hosted collaboration, playbooks, and federation",
            "Air-gapped and DDIL operating realities",
          ],
          image: "/images/industries/defense.jpg",
          imageAlt: "Air Mobility Command case study — ChatOps for the largest-ever readiness exercise",
          imageCaption:
            "From the Air Mobility Command customer story: 15,000+ forces coordinated with Mattermost ChatOps.",
          link: { label: "Explore National Security", href: "#/solutions/national-security" },
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
          imageAlt: "European public agency case study — sovereign collaboration with Mattermost and Pexip",
          imageCaption:
            "From the European public agency customer story: agency-controlled messaging with data residency.",
          link: { label: "Read the agency story", href: "#/customers/european-public-agency" },
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
          imageAlt: "Pramacom case study — secure emergency communications",
          imageCaption:
            "From the Pramacom customer story: modernized secure communications for public-safety operations.",
          link: { label: "Read the Pramacom story", href: "#/customers/pramacom" },
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
          imageAlt: "RTE case study — France’s power grid operations",
          imageCaption:
            "From the RTE customer story: Mattermost for France’s transmission grid and faster outage response.",
          link: { label: "Read the RTE story", href: "#/customers/rte" },
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
          imageAlt: "Fairphone case study — manufacturing collaboration",
          imageCaption:
            "From the Fairphone customer story: plant and engineering teams collaborating without consumer-cloud IP risk.",
          link: { label: "Read the Fairphone story", href: "#/customers/fairphone" },
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
          imageAlt: "Worldline case study — global financial-services collaboration",
          imageCaption:
            "From the Worldline customer story: 3,000 employees and 500+ teams on self-hosted Mattermost.",
          link: { label: "Read the Worldline story", href: "#/customers/worldline" },
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
          imageAlt: "CERN case study — research collaboration at scale",
          imageCaption:
            "From the CERN customer story: 22,000 users and 100+ tools on self-hosted Mattermost.",
          link: { label: "Read the CERN story", href: "#/customers/cern" },
        },
      ],
    },
  ],
};

export function IndustriesPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
