import { SectionPage, type SectionPageContent } from "./section-page";

const CONTENT: SectionPageContent = {
  route: "ecosystem",
  eyebrow: "Ecosystem",
  title: "Interoperate with the stack you already run",
  subtitle:
    "Mattermost deploys on sovereign cloud you control, federates with partner networks, and connects DevSecOps and video tools without sending mission data to a public collaboration tenant.",
  sections: [
    {
      id: "strategic-partners",
      navLabel: "Strategic Partners",
      eyebrow: "Strategic Partners",
      title: "Microsoft and Oracle joint capabilities",
      lead: "Dedicated landing pages for Mattermost’s strategic cloud partners — joint products, classified and sovereign deployments, and the public announcements that document them.",
      cards: [
        {
          id: "partner-microsoft",
          title: "Microsoft",
          body: "Mattermost for Microsoft Teams, Azure Marketplace, Azure Arc to the edge, Entra ID in IL5/IL6, Foundry Local, and AI-powered collaboration for Azure Secret and Top Secret environments.",
          bullets: [
            "Embed Mattermost in Teams and Outlook",
            "Azure commercial, government, Local, and classified clouds",
            "Out-of-band continuity when M365 is contested",
          ],
          image: "/images/deploy/azure.png",
          imageAlt: "Mattermost on Azure",
          link: { label: "Microsoft joint capabilities", href: "#/ecosystem/partners/microsoft" },
        },
        {
          id: "partner-oracle",
          title: "Oracle",
          body: "Mattermost Collaboration Suite on Oracle Cloud Marketplace — OCI sovereign and government regions, Compute Cloud at Customer, Roving Edge, and inaugural membership in the Oracle Defense Ecosystem.",
          bullets: [
            "Marketplace deploy on OCI including air-gapped NSRs",
            "OKE, OCI IAM, and DDIL to the tactical edge",
            "Sovereign AI for intel, playbooks, and briefings",
          ],
          image: "/images/deploy/oracle.png",
          imageAlt: "Mattermost on Oracle Cloud",
          link: { label: "Oracle joint capabilities", href: "#/ecosystem/partners/oracle" },
        },
      ],
    },
    {
      id: "cloud",
      navLabel: "Sovereign Cloud",
      eyebrow: "Deploy on your cloud",
      title: "Sovereign cloud hyperscalers",
      lead: "Run Mattermost on customer-managed infrastructure in Microsoft Azure, Oracle Cloud, Google Cloud, and AWS — including government and isolated regions — so residency and authorization stay yours.",
      layout: "2x2",
      cards: [
        {
          id: "cloud-microsoft",
          title: "Microsoft Azure",
          body: "Extend Microsoft investments into sovereign, private, and classified environments. Run Mattermost on Azure infrastructure you control and interoperate with Teams and Microsoft 365.",
          bullets: [
            "Customer-managed deploy on Azure commercial and government clouds",
            "SSO with Entra ID (SAML / OpenID)",
            "Teams Sync and Meetings integrations",
            "Out-of-band patterns for incident response and mission traffic",
          ],
          image: "/images/deploy/azure.png",
          imageAlt: "Mattermost high-availability architecture on Microsoft Azure",
          imageCaption:
            "Reference architecture for Mattermost on Microsoft Azure: customer-managed Kubernetes, identity, and object storage at the sovereign boundary. Click any diagram tile on this page to inspect the full drawing.",
          link: {
            label: "Microsoft strategic partner page",
            href: "#/ecosystem/partners/microsoft",
          },
        },
        {
          id: "cloud-oracle",
          title: "Oracle Cloud Infrastructure",
          body: "Host Mattermost on OCI — including government and isolated cloud patterns — so collaboration stays inside the boundary your security architecture requires.",
          bullets: [
            "Self-hosted on compute or Kubernetes you administer",
            "Keep messages and plugins inside your tenancy",
            "Enterprise identity via SAML, LDAP, or OpenID",
          ],
          image: "/images/deploy/oracle.png",
          imageAlt: "Mattermost architecture on Oracle Cloud Infrastructure",
          imageCaption:
            "Reference architecture for Mattermost on Oracle Cloud Infrastructure, including government and isolated-region patterns with identity and storage inside the customer tenancy.",
          link: {
            label: "Oracle strategic partner page",
            href: "#/ecosystem/partners/oracle",
          },
        },
        {
          id: "cloud-google",
          title: "Google Cloud",
          body: "Run Mattermost on Google Cloud infrastructure for private and regulated deployments where you retain control of the collaboration plane.",
          bullets: [
            "Self-hosted on compute or Kubernetes you administer",
            "Keep messages and plugins inside your project",
            "Restricted networking and limited egress designs",
          ],
          image: "/images/deploy/datacenter.png",
          imageAlt: "Mattermost private-cloud architecture applicable to Google Cloud",
          imageCaption:
            "Customer-managed Mattermost topology for Google Cloud and private cloud: clustered application tier, datastore, and object storage with restricted networking.",
        },
        {
          id: "cloud-aws",
          title: "AWS and GovCloud",
          body: "Deploy Mattermost on AWS commercial, GovCloud, and partitioned regions to meet residency and authorization requirements while retaining full application control.",
          bullets: [
            "EC2 and EKS deployment patterns",
            "GovCloud and sovereign region options",
            "Private networking and limited egress",
          ],
          image: "/images/deploy/aws.png",
          imageAlt: "Mattermost architecture on AWS and GovCloud",
          imageCaption:
            "Reference architecture for Mattermost on AWS commercial and GovCloud regions, including EKS/EC2 patterns and private networking.",
          link: {
            label: "Deployment documentation",
            href: "https://docs.mattermost.com/deployment-guide/server/deployment-overview.html",
          },
        },
      ],
    },
    {
      id: "federation",
      navLabel: "Federation",
      eyebrow: "Collaborate beyond the enclave",
      title: "Federation with partner networks",
      lead: "Connect trusted partners, allies, and mixed estates without collapsing security domains — Microsoft Teams, Matrix, and XMPP interoperability under policy and audit.",
      cards: [
        {
          id: "federation-teams",
          title: "Microsoft Teams",
          body: "Bridge Mattermost and Microsoft Teams so mixed environments stay informed — notifications and meeting links that respect where authoritative data must reside.",
          bullets: [
            "MS Teams Sync for chat notifications",
            "MS Teams Meetings launch from channels",
            "Entra ID–centric identity alignment where configured",
          ],
          link: {
            label: "Teams sync documentation",
            href: "https://docs.mattermost.com/integrations-guide/microsoft-teams-sync.html",
          },
        },
        {
          id: "federation-matrix",
          title: "Matrix",
          body: "Interoperate with Matrix-connected organizations using open-protocol federation — bidirectional sync of messages, reactions, and threads.",
          bullets: [
            "Bidirectional sync of messages, reactions, and edits",
            "Real names and avatars rather than bot placeholders",
            "Loop prevention, authentication, and namespace isolation",
          ],
        },
        {
          id: "federation-xmpp",
          title: "XMPP",
          body: "Gateway approaches allow Mattermost deployments to exchange messages with XMPP domains where policy permits — supporting modernization without a hard cutover.",
          bullets: [
            "Bridge legacy and specialized XMPP estates",
            "Keep Mattermost as the operator workspace of record",
          ],
        },
      ],
    },
    {
      id: "video",
      navLabel: "Video",
      eyebrow: "Meet from the mission channel",
      title: "Video interoperability",
      lead: "Start and join meetings from Mattermost using the video stack your security architecture already allows — native calls, Teams, Pexip, Zoom, and Cisco.",
      cards: [
        {
          id: "video-teams",
          title: "Microsoft Teams Meetings",
          body: "Start and join Microsoft Teams meetings without leaving Mattermost, so operators jump from channel context into a live session.",
          image: "/images/product/call-window.png",
          imageAlt: "Call window",
        },
        {
          id: "video-pexip",
          title: "Pexip",
          body: "Launch Pexip conferences from Mattermost for self-hosted voice, video, and meeting-room interoperability — including bridges to Teams, Zoom, Webex, and SIP.",
        },
        {
          id: "video-zoom",
          title: "Zoom",
          body: "Connect Zoom meetings into Mattermost workflows so operators can jump from channel context into a live session when Zoom is the approved conferencing plane.",
        },
        {
          id: "video-cisco",
          title: "Cisco",
          body: "Interoperate with Cisco meeting environments through gateway and partner video platforms so Webex-centric estates can still land in Mattermost channels.",
        },
      ],
    },
    {
      id: "devsecops-tools",
      navLabel: "DevSecOps",
      eyebrow: "Signals where operators already work",
      title: "DevSecOps toolchain",
      lead: "Bring GitHub, GitLab, Jira, and Confluence activity into Mattermost channels so engineering, security, and operations decide in one controlled workspace.",
      cards: [
        {
          id: "devsecops-github",
          title: "GitHub",
          body: "Subscribe channels to GitHub pull requests, issues, and commits so review and release discussion stays next to the code signal.",
          image: "/images/product/github-integration.png",
          imageAlt: "GitHub integration",
          link: {
            label: "GitHub integration docs",
            href: "https://docs.mattermost.com/integrations-guide/github.html",
          },
        },
        {
          id: "devsecops-gitlab",
          title: "GitLab",
          body: "Bring GitLab activity — merges, pipelines, and reviews — into Mattermost channels for delivery teams that already run GitLab as the source of truth.",
        },
        {
          id: "devsecops-jira",
          title: "Jira",
          body: "Create, view, and update Jira issues from Mattermost so work items and conversation stay connected without leaving the operator channel.",
        },
        {
          id: "devsecops-confluence",
          title: "Confluence",
          body: "Connect Confluence knowledge bases to Mattermost workflows so runbooks and decision records are one click from the channel that needs them.",
        },
      ],
    },
  ],
};

export function EcosystemPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
