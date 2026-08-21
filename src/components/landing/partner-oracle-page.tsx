import { PartnerPage, type PartnerPageContent } from "./partner-page";

const CONTENT: PartnerPageContent = {
  partner: "Oracle",
  eyebrow: "Strategic Partner · Oracle",
  title: "Sovereign collaboration on Oracle Cloud Infrastructure",
  subtitle:
    "The Mattermost Collaboration Suite on OCI gives defense, government, and critical infrastructure teams secure messaging, ChatOps, and workflow automation — from accredited cloud regions to air-gapped National Security Regions, Compute Cloud at Customer, and Roving Edge.",
  heroImage: `${import.meta.env.BASE_URL}images/deploy/oracle.png`,
  heroImageAlt: "Mattermost deployed on Oracle Cloud Infrastructure",
  capabilities: [
    {
      title: "Sovereignty and choice",
      body: "Deploy in Oracle’s public cloud or in government and isolated regions designed for sensitive and classified workloads — including air-gapped Oracle National Security Regions.",
    },
    {
      title: "Hardened security to the tactical edge",
      body: "Run Mattermost in private cloud, enclave, and air-gapped modes, including Oracle Roving Edge Infrastructure, with centralized access controls through Oracle Identity and Access Management.",
    },
    {
      title: "Elastic scale on OKE",
      body: "Grow or contract with automated orchestration on OCI, including Kubernetes-based deployments on Oracle Kubernetes Engine, automated scaling, load balancing, and secure patching of control plane and worker nodes.",
    },
    {
      title: "Mission-ready sovereign AI",
      body: "Use in-boundary agents for alert summary, SOP response, briefing generation, playbooks, call transcription, and translation — keeping inference and operational data under customer control on OCI.",
    },
    {
      title: "Continuity across DDIL",
      body: "Provide command-and-control collaboration from the enterprise WAN to denied, disrupted, intermittent, and limited links, including Compute Cloud at Customer when the workload must stay on-premises.",
    },
    {
      title: "Oracle Defense Ecosystem",
      body: "Mattermost joined the inaugural cohort of the Oracle Defense Ecosystem (launched June 2025), a collection of defense-oriented technology innovators for U.S. and allied national security.",
    },
  ],
  environments: [
    {
      title: "OCI commercial regions",
      body: "Marketplace-deployed Collaboration Suite with consistent global pricing and end-to-end SLAs.",
    },
    {
      title: "US Government Cloud",
      body: "OCI regions authorized at FedRAMP High for civilian government workloads.",
    },
    {
      title: "US Defense Cloud",
      body: "OCI Defense Cloud authorized at DISA Impact Level 2, IL4, and IL5.",
    },
    {
      title: "Air-gapped National Security Regions",
      body: "Oracle NSRs authorized at IL6 and Intelligence Community Directive (ICD) 503.",
    },
    {
      title: "Compute Cloud at Customer",
      body: "Same OCI control plane on customer premises for sovereignty and disconnected patterns.",
    },
    {
      title: "Roving Edge Infrastructure",
      body: "Ruggedized edge compute so Mattermost can run close to the operator when reach-back is limited.",
    },
  ],
  stack: [
    {
      title: "Identity & operations",
      items: [
        "Native integration with OCI Identity and Access Management",
        "Zero Trust patterns with enhanced OCI security features",
        "End-to-end encryption and air-gapped deployment options",
      ],
    },
    {
      title: "Platform services",
      items: [
        "Oracle Kubernetes Engine (OKE) guided stacks",
        "Managed OCI Database with PostgreSQL in the Kubernetes deploy path",
        "Automatic upgrades and secure patching of cluster nodes",
      ],
    },
    {
      title: "Sovereign AI on OCI",
      items: [
        "Real-time intel alerts and SOP-guided response in channels",
        "Rank-targeted briefing documents and persistent call summaries",
        "Playbooks that pull required personnel into one mission channel",
      ],
    },
  ],
  quotes: [
    {
      quote:
        "The Mattermost Collaboration Suite delivers a secure and modular collaboration solution to help customers command, control, and maintain operational agility for their government and classified workloads. Our presence on the Oracle Cloud Marketplace reinforces our commitment to the government and defense community.",
      name: "Ian Tien",
      title: "CEO, Mattermost",
    },
    {
      quote:
        "Mattermost delivers a secure and modular solution for our OCI customers, helping them maintain command, control, and operational tempo for today’s complex governments.",
      name: "Rand Waldron",
      title: "Vice President, Oracle",
    },
  ],
  briefs: [
    {
      date: "March 30, 2026",
      title: "Mission-ready sovereign AI with Oracle and Mattermost",
      source: "Oracle Cloud Infrastructure blog",
      href: "https://blogs.oracle.com/cloud-infrastructure/sovereign-ai-oracle-mattermost",
      summary:
        "Oracle describes Mattermost on OCI — including air-gapped regions, Compute Cloud at Customer, and Roving Edge — plus inaugural membership in the Oracle Defense Ecosystem and in-boundary AI for intel, playbooks, and briefings.",
    },
    {
      date: "June 17, 2025",
      title: "Oracle Defense Ecosystem inaugural cohort",
      source: "Oracle announcement (via OCI blog)",
      href: "https://www.oracle.com/news/announcement/oracle-launches-first-of-its-kind-defense-ecosystem-to-redefine-national-security-innovation-2025-06-17/",
      summary:
        "Oracle launched the Defense Ecosystem for U.S. and allied national security. Mattermost is named in the inaugural cohort of defense-oriented technology members.",
    },
    {
      date: "March 19, 2025",
      title: "Mattermost Collaboration Suite on Oracle Cloud Marketplace",
      source: "Oracle newsroom",
      href: "https://www.oracle.com/news/announcement/mattermost-collaborations-suite-now-available-on-the-oracle-cloud-marketplace-2025-03-19/",
      summary:
        "Joint Oracle–Mattermost announcement of Marketplace availability for secure collaboration, ChatOps, and workflow on OCI, with quotes from Ian Tien and Oracle VP Rand Waldron.",
    },
    {
      date: "March 19, 2025",
      title: "Mattermost Collaboration Suite now on Oracle Cloud Marketplace",
      source: "Mattermost press release",
      href: "https://mattermost.com/newsroom/press-releases/mattermost-collaboration-suite-now-available-on-the-oracle-cloud-marketplace/",
      summary:
        "Mattermost’s matching release covering rapid deployment, OCI orchestration, encryption, air-gapped options, OCI IAM, and classified/unclassified workloads.",
    },
    {
      date: "March 19, 2025",
      title: "Intelligent Mission Environment available on Oracle Cloud Marketplace",
      source: "Mattermost blog (Ian Tien)",
      href: "https://mattermost.com/blog/mattermost-now-available-on-oracle-cloud-marketplace/",
      summary:
        "CEO announcement of IME on OCI including sovereign cloud regions, air-gapped and classified environments, and AI-enhanced collaboration.",
    },
    {
      date: "Documentation",
      title: "Deploy Mattermost on Oracle Kubernetes Engine",
      source: "docs.mattermost.com",
      href: "https://docs.mattermost.com/deployment-guide/server/kubernetes/deploy-k8s-oke.html",
      summary:
        "Guided stack to provision an OKE cluster, managed OCI Database with PostgreSQL, and a Mattermost environment on OCI.",
    },
  ],
  resources: [
    {
      label: "Sovereign collaboration on OCI",
      href: "https://mattermost.com/solutions/mattermost-sovereign-collaboration-on-oracle-cloud-infrastructure/",
    },
    {
      label: "Oracle Marketplace announcement",
      href: "https://www.oracle.com/news/announcement/mattermost-collaborations-suite-now-available-on-the-oracle-cloud-marketplace-2025-03-19/",
    },
    {
      label: "Oracle Defense Cloud alliances",
      href: "https://www.oracle.com/government/govcloud/defense-alliances/",
    },
    { label: "OKE deployment docs", href: "https://docs.mattermost.com/deployment-guide/server/kubernetes/deploy-k8s-oke.html" },
  ],
};

export function PartnerOraclePage() {
  return <PartnerPage content={CONTENT} />;
}
