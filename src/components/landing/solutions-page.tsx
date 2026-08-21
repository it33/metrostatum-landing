import { SectionPage, type SectionPageContent } from "./section-page";

const CONTENT: SectionPageContent = {
  route: "solutions",
  eyebrow: "Solutions",
  title: "Mission outcomes for national security, cyber, and DevSecOps",
  subtitle:
    "Give operators a sovereign workspace for planning, execution, and after-action — deployable from enterprise networks to air-gapped and DDIL environments. National Security, Cyber, and DevSecOps live here, not in the top bar.",
  sections: [
    {
      id: "national-security",
      navLabel: "National Security",
      eyebrow: "National security",
      title: "National security collaboration for mission outcomes",
      lead: "Intelligence, operations, and cyber teams get a self-hosted environment for mission traffic with auditability and deployment flexibility aligned to Zero Trust and sovereign hosting.",
      cards: [
        {
          id: "intelligence",
          title: "Intelligence",
          body: "Speed analytic coordination with controlled channels, structured workflows, and integrations — keeping sensitive products inside the authorized boundary.",
          bullets: [
            "Segmented teams and channels for community-of-interest isolation",
            "Playbooks for production and crisis rhythms",
            "Searchable history across shifts",
          ],
          image: "/images/product/playbooks.png",
          imageAlt: "Playbooks",
        },
        {
          id: "mission-operations",
          title: "Mission operations",
          body: "Coordinate joint and allied activity with assured messaging, playbooks, and federation — whether connected to the enterprise WAN or operating through constrained links.",
          bullets: [
            "Channels and playbooks as a common workspace",
            "Deploy close to the operator for DDIL conditions",
            "Federation for coalition coordination without a shared consumer tenant",
          ],
          image: "/images/product/messaging-new-hero.png",
          imageAlt: "Mission channels",
        },
        {
          id: "cyber-comms",
          title: "Cyber communications",
          body: "Provide secure, attributable collaboration for cyber mission forces — integrated with operational workflows and defensive tooling.",
          bullets: [
            "Dedicated instances for cyber mission forces",
            "Playbook-driven response",
            "Integrations to security tooling",
          ],
          image: "/images/product/cyber-comms.jpg",
          imageAlt: "Cyber defense playbook — malware incident response in Mattermost",
          imageCaption:
            "From Mattermost’s Transforming Cyber Defense Operations walkthrough: SOC channels and playbooks for attributable cyber mission communications.",
      ],
    },
    {
      id: "cyber",
      navLabel: "Cyber",
      eyebrow: "Cyber defense",
      title: "Cyber defense operations on a sovereign collaboration plane",
      lead: "Keep security teams operational when other tools go dark. Mattermost supports out-of-band incident response, SOC coordination, and playbook-driven defense.",
      cards: [
        {
          id: "out-of-band-ir",
          title: "Out-of-band incident response",
          body: "Pre-position a collaboration environment that does not depend on the production identity or SaaS plane under attack.",
          bullets: [
            "Independent hosting and identity from production suites",
            "Playbooks for severity-based response checklists",
            "Channel structures for technical, comms, and leadership cells",
          ],
          image: "/images/product/playbooks.png",
          imageAlt: "IR playbooks",
        },
        {
          id: "soc-operations",
          title: "SOC operations",
          body: "Centralize alert triage discussion, escalation, and shift handoff in channels connected to your detection stack.",
          bullets: [
            "Webhooks and bots post high-signal alerts into channels",
            "Analysts claim work, attach context, and escalate in one place",
            "Shift handoff with searchable history",
          ],
        },
        {
          id: "agentic-soc",
          title: "Agentic SOC",
          body: "Apply Mattermost Agents to SOC workflows — summaries, draft updates, and playbook assistance — using models hosted inside your security boundary.",
          bullets: [
            "Summarize long threads and draft stakeholder updates",
            "Guide analysts through playbook steps",
            "Bring-your-own-model so inference stays on approved endpoints",
          ],
          image: "/images/product/agents-meeting-summary.png",
          imageAlt: "AI assistance",
        },
      ],
    },
    {
      id: "devsecops",
      navLabel: "DevSecOps",
      eyebrow: "Secure delivery",
      title: "DevSecOps collaboration for secure delivery",
      lead: "Unify engineering, security, and operations signals in a controlled workspace — GitHub, GitLab, Jira, and pipeline events beside human decision-making.",
      cards: [
        {
          id: "shared-command-line",
          title: "Shared command line",
          body: "Drive approved operational commands and bot-driven workflows from channels so routine actions are visible and attributable.",
          bullets: [
            "Slash commands, bots, and integrations from the channel",
            "Conversation record of who did what",
            "ChatOps with auditability",
          ],
          image: "/images/product/github-integration.png",
          imageAlt: "DevSecOps integrations",
        },
        {
          id: "cyber-defense-integration",
          title: "Cyber-defense integration",
          body: "Connect delivery pipelines to defensive operations so vulnerability findings and deployment events reach the people who must act.",
          bullets: [
            "Channels subscribed to pipeline and scanner events",
            "AppSec and platform teams coordinate mitigations with developers",
          ],
        },
        {
          id: "agile-secure-workflows",
          title: "Agile secure workflows",
          body: "Use Playbooks and boards to standardize secure delivery rituals — threat reviews, release checklists, and incident-ready communication plans.",
          bullets: [
            "Playbooks encode security review gates",
            "Communications templates and owner assignments",
            "Evidence of execution next to engineering conversation",
          ],
          image: "/images/product/playbooks.png",
          imageAlt: "Playbooks",
        },
      ],
    },
  ],
};

export function SolutionsPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
