import { PartnerPage, type PartnerPageContent } from "./partner-page";

const CONTENT: PartnerPageContent = {
  partner: "Microsoft",
  eyebrow: "Strategic Partner · Microsoft",
  title: "Microsoft and Mattermost for critical infrastructure and national security",
  subtitle:
    "Unlock Microsoft Teams, Microsoft 365, and Entra ID without compromising data sovereignty or control — including sovereign, private, classified, and disconnected environments where standard cloud collaboration cannot follow.",
  heroImage: `${import.meta.env.BASE_URL}images/deploy/azure.png`,
  heroImageAlt: "Mattermost deployed on Microsoft Azure",
  capabilities: [
    {
      title: "Enterprise collaboration to the edge",
      body: "Retain full on-prem or private cloud control of messages, files, voice, and screen share inside Mattermost deployed on Azure Arc, bringing collaboration to the tactical edge.",
    },
    {
      title: "Mattermost inside Teams and Outlook",
      body: "Embed Mattermost in Microsoft Teams and Outlook so operators keep a familiar interface while running mission workflows — playbooks, ChatOps, and specialized tools — without a swivel-chair between environments.",
    },
    {
      title: "Human-machine teaming under enterprise control",
      body: "Use Azure AI models in channels, direct messages, and playbooks. Run cloud models or on-premises inference with Foundry Local so prompts and outputs stay inside the boundary.",
    },
    {
      title: "Out-of-band resilience for Microsoft-centric estates",
      body: "Keep a dedicated Mattermost instance independent of the production M365 plane for incident response, DDIL, and global infrastructure events — with one-way sync so sensitive data does not exit the high-side.",
    },
    {
      title: "Identity that reaches IL5 and IL6",
      body: "SSO with SAML and OpenID Connect, including Entra ID / Office 365 SSO. Federate identities and attributes into Mattermost and drive attribute-based access in classified environments.",
    },
    {
      title: "Classified Azure, including Secret and Top Secret",
      body: "Mattermost announced AI-powered collaboration for Azure Secret and Top Secret environments, aligned to ICD 503, covering messaging, files, automation, calling, screen share, and interoperability with Teams across security domains.",
    },
  ],
  environments: [
    {
      title: "Azure commercial & government",
      body: "Customer-managed Mattermost on Azure, listed on Azure Marketplace, including Azure Government patterns.",
    },
    {
      title: "Azure Local (formerly Azure Stack HCI)",
      body: "On-premises hybrid cloud for STIG, FedRAMP, and NIST 800-53 aligned deployments. Mattermost Professional Services is recommended for Azure Local.",
    },
    {
      title: "Azure Arc at the tactical edge",
      body: "Extend the same collaboration plane to disconnected and air-gapped sites without a mandatory public SaaS dependency.",
    },
    {
      title: "IL5 / IL6 and classified clouds",
      body: "Extend Microsoft investments into environments where standard Teams cannot follow. Secret and Top Secret Azure guidance is covered in the January 2025 announcement.",
    },
    {
      title: "Foundry Local / Azure OpenAI",
      body: "Local inference for high-side workflows, or Azure OpenAI Service for Azure Government, depending on classification.",
    },
    {
      title: "Skype for Business replacement",
      body: "Self-hosted 1:1 calls, screen sharing, and threaded messaging integrated with Outlook, Teams, and Entra ID for sovereign Skype replacement.",
    },
  ],
  stack: [
    {
      title: "Microsoft 365 & Teams",
      items: [
        "Mattermost Mission Collaboration for Microsoft 365, Teams, and Outlook (embed + Entra SSO)",
        "Teams Sync for notifications into Mattermost",
        "Teams Meetings start/join from Mattermost channels",
        "One-way sync of less-sensitive Teams data into the high-side",
      ],
    },
    {
      title: "Identity & files",
      items: [
        "Entra ID group sync to Mattermost roles",
        "Attribute-based access from Entra user attributes",
        "OneDrive file notifications, upload, and in-channel Office editing via Collabora",
      ],
    },
    {
      title: "Security, DevOps & AI",
      items: [
        "Microsoft Security Suite signals into Playbooks",
        "GitHub, Azure DevOps, and Microsoft Defender in the SDLC workspace",
        "Azure AI Services and Foundry Local for in-boundary agents",
      ],
    },
  ],
  quotes: [
    {
      quote:
        "Partners are key to Microsoft’s ability to scale innovation. Mattermost and Mobius Logic are great examples of defense-ready partners building on Microsoft’s secure Azure and AI platforms to deliver game changing AI-enabled collaboration solutions to national security customers.",
      name: "Wes Anderson",
      title: "Vice President for Defense, Microsoft Federal",
    },
    {
      quote:
        "The material rise in geopolitical instability and the dramatic increase in global cyber threats, including adversarial use of AI and digital attack vectors, requires rapid augmentation of capabilities within air-gapped environments to more rapidly detect, analyze, and defend against new categories of threats.",
      name: "Corey Hulen",
      title: "CEO, Mattermost Federal Inc.",
    },
  ],
  briefs: [
    {
      date: "January 29, 2025",
      title: "AI-powered collaboration for Azure Secret and Top Secret environments",
      source: "Mattermost press release",
      href: "https://mattermost.com/newsroom/press-releases/mattermost-to-deliver-ai-powered-collaboration-for-azure-secret-and-top-secret-environments/",
      summary:
        "Announced secure collaboration and workflow in air-gapped Azure classified clouds, ICD 503 alignment, Teams interoperability across domains, and Azure AI including models authorized for Azure Government Top Secret.",
    },
    {
      date: "October 24, 2024",
      title: "Mattermost available on the Azure Marketplace",
      source: "Mattermost blog",
      href: "https://mattermost.com/blog/mattermost-on-azure/",
      summary:
        "Microsoft Partner listing of the Mattermost operator on Azure Marketplace for defense, government, and critical infrastructure customers deploying on Azure.",
    },
    {
      date: "October 24, 2023",
      title: "AI-driven collaboration hub with Microsoft Azure and Mobius Logic",
      source: "Mattermost press release",
      href: "https://mattermost.com/newsroom/press-releases/mattermost-integrates-with-microsoft-azure-and-mobius-logic-to-create-ai-driven-collaboration-hub-for-mission-critical-work/",
      summary:
        "Joint stack connecting Mattermost OpenOps to Azure AI Services, Entra ID, and Teams for public-sector ChatOps, incident response, and DevSecOps, including air-gapped networks.",
    },
    {
      date: "March 9, 2023",
      title: "Mattermost for Microsoft Teams announced",
      source: "Mattermost press release",
      href: "https://mattermost.com/newsroom/press-releases/mattermost-announces-mattermost-for-microsoft-teams-to-accelerate-technical-workflows-on-the-microsoft-365-platform/",
      summary:
        "Shared channels, voice/video/screen share and calendar across Teams and Mattermost, Azure AD / ADFS SSO, private communications mode with customer-controlled storage, and business-continuity mode independent of Azure during an M365 outage.",
    },
    {
      date: "Documentation",
      title: "Maximize your Microsoft investments",
      source: "docs.mattermost.com",
      href: "https://docs.mattermost.com/use-case-guide/maximize-microsoft-investments.html",
      summary:
        "Use-case guide covering sovereign communication in Teams, Skype for Business replacement, out-of-band IR, enterprise-to-edge, external collaboration, and Azure Marketplace / Azure Local deployment.",
    },
  ],
  resources: [
    { label: "Mattermost for Microsoft Teams", href: "https://mattermost.com/mattermost-for-microsoft-teams/" },
    { label: "Azure Marketplace listing", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mattermost.mattermost-operator?tab=overview" },
    { label: "M365 / Teams / Outlook integration", href: "https://docs.mattermost.com/integrations-guide/mattermost-mission-collaboration-for-m365.html" },
    { label: "Teams Meetings docs", href: "https://docs.mattermost.com/integrations-guide/microsoft-teams-meetings.html" },
    { label: "Teams Sync docs", href: "https://docs.mattermost.com/integrations-guide/microsoft-teams-sync.html" },
  ],
};

export function PartnerMicrosoftPage() {
  return <PartnerPage content={CONTENT} />;
}
