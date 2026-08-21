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
          image: "/images/integrations/teams-sync.png",
          imageAlt: "Mattermost MS Teams Sync plugin posting a Teams chat notification and file attachment into a Mattermost channel",
          imageCaption:
            "Official Mattermost MS Teams Sync screenshot: the msteams bot posts chat and group-chat notifications — including forwarded attachments — into Mattermost, with a link back to the Teams conversation.",
          links: [
            { label: "Teams sync documentation", href: "https://docs.mattermost.com/integrations-guide/microsoft-teams-sync.html" },
            { label: "Using Teams notifications", href: "https://docs.mattermost.com/end-user-guide/collaborate/collaborate-within-connected-microsoft-teams.html" },
            { label: "Teams Meetings plugin", href: "https://docs.mattermost.com/integrations-guide/microsoft-teams-meetings.html" },
          ],
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
          image: "/images/integrations/federation-matrix.png",
          imageAlt: "Architecture illustration of Mattermost federating with a Matrix homeserver across a policy boundary",
          imageCaption:
            "Federation pattern for the Mattermost Matrix bridge: operator workspace and partner homeserver stay distinct security domains, with signed bidirectional event sync, real-user identity, and loop prevention.",
          links: [
            { label: "Matrix bridge (source)", href: "https://github.com/mattermost/mattermost-plugin-matrix-bridge" },
            { label: "Marketplace listing", href: "https://mattermost.com/marketplace/mattermost-matrix-connector/" },
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
          image: "/images/integrations/federation-xmpp.png",
          imageAlt: "Architecture illustration of an XMPP gateway bridging a legacy domain into Mattermost",
          imageCaption:
            "XMPP gateway pattern: a policy-controlled bridge maps a legacy or tactical XMPP domain into Mattermost so operators keep a single workspace of record without a hard cutover.",
          links: [
            { label: "Matterbridge (XMPP and more)", href: "https://mattermost.com/marketplace/matterbridge/" },
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
      lead: "Pre-built Mattermost plugins for GitHub, GitLab, Jira, and Confluence — subscribe channels to the events you care about, act with slash commands, and keep the audit trail in a workspace you control. Each card links to documentation and official demos.",
      layout: "2x2",
      cards: [
        {
          id: "devsecops-github",
          title: "GitHub",
          body: "Official GitHub plugin for GitHub.com and GitHub Enterprise. Subscribe a channel to a repo or org; get personal DMs when you are mentioned, assigned, or asked to review. Create issues from Mattermost, preview permalinks, and pull a daily /github todo list — without leaving the operator channel.",
          bullets: [
            "Channel events: issues, PRs (opened/merged/created), pushes, reviews, releases, Discussions, Actions workflow_success / workflow_failure",
            "Personal GitHub bot: mentions, review requests, comments, assignments, label changes",
            "Slash commands: /github connect, subscriptions add, todo, mute, default-repo, create-issue modal",
            "GitHub Enterprise Base URL + private-repo support; lock to named organizations",
          ],
          image: "/images/product/github-integration.png",
          imageAlt: "GitHub plugin posting a pull-request notification into a Mattermost channel",
          imageCaption:
            "GitHub plugin in a Mattermost channel: pull-request and issue notifications with labels, assignees, and in-channel actions. From Mattermost product documentation screenshots.",
          links: [
            { label: "GitHub integration docs", href: "https://docs.mattermost.com/integrations-guide/github.html" },
            { label: "Marketplace listing", href: "https://mattermost.com/marketplace/github-plugin/" },
            { label: "Plugin source", href: "https://github.com/mattermost/mattermost-plugin-github" },
          ],
        },
        {
          id: "devsecops-gitlab",
          title: "GitLab",
          body: "Two-way plugin for GitLab SaaS and self-managed. Pipeline, merge-request, and issue activity lands in the channel; slash commands create issues and comments; sidebar counters show reviews, todos, and assigned MRs. Playbooks can auto-complete tasks when a pipeline notification matches a trigger.",
          bullets: [
            "Channel subscriptions: merges, issues, pushes, issue/MR comments, tags, pipelines (parent + optional child), wiki, releases, deployments",
            "Personal GitLab bot DMs for mentions, review requests, comments, assignments",
            "Slash commands: /gitlab connect, subscriptions add, issue create, issue comment, webhook add, settings",
            "Code-permalink previews; lock to a GitLab group; private-project reconnect flow",
          ],
          image: "/images/integrations/gitlab-chatops.webp",
          imageAlt: "Mattermost ChatOps channel where GitLab pipeline and merge activity is reviewed",
          imageCaption:
            "Mattermost ChatOps workspace — the destination for GitLab merge, issue, and CI/CD pipeline notifications from the official plugin.",
          links: [
            { label: "GitLab integration docs", href: "https://docs.mattermost.com/integrations-guide/gitlab.html" },
            { label: "Marketplace listing", href: "https://mattermost.com/marketplace/gitlab-plugin/" },
            { label: "CI/CD pipelines demo (video)", href: "https://www.youtube.com/watch?v=li2jaPziXTQ" },
            { label: "GitLab + Playbooks demo", href: "https://mattermost.com/video/gitlab-and-mattermost-playbooks-demo/" },
            { label: "Solutions for GitLab (brief)", href: "https://mattermost.com/blog/mattermost-solutions-for-gitlab/" },
          ],
        },
        {
          id: "devsecops-jira",
          title: "Jira",
          body: "Two-way plugin for Jira Cloud, Server, and Data Center (Jira Core / Jira Software). Create, view, transition, and assign issues from the channel; attach a Mattermost message as a Jira comment; subscribe a channel with project, issue-type, and field filters. Jira Service Management is not supported.",
          bullets: [
            "Create issues from a conversation (/jira issue create) with project, type, and fields",
            "Transition and assign without leaving Mattermost; /jira issue view for the full ticket",
            "Channel subscriptions: event type, issue type, labels, priority, epic, versions, custom fields",
            "JiraBot personal notifications for mentions and assignments; multiple Jira instances on Enterprise",
          ],
          image: "/images/integrations/jira-demo.jpg",
          imageAlt: "Jira plugin posting issue created, assigned, and commented events into a Mattermost channel",
          imageCaption:
            "Still from Mattermost’s official “How to be a Jira and Mattermost power user” demo: JiraBot posting issue created, assigned, and commented events with in-channel actions.",
          links: [
            { label: "Jira integration docs", href: "https://docs.mattermost.com/integrations-guide/jira.html" },
            { label: "Marketplace listing", href: "https://mattermost.com/marketplace/jira-plugin/" },
            { label: "Power-user demo (video)", href: "https://www.youtube.com/watch?v=W8pDtiiD9r0" },
            { label: "AI + Jira workflows demo (video)", href: "https://www.youtube.com/watch?v=kDaZoGaQjIM" },
          ],
        },
        {
          id: "devsecops-confluence",
          title: "Confluence",
          body: "Confluence Cloud, Server, and Data Center plugin. Subscribe a Mattermost channel to a space or page and receive created, updated, deleted, restored, and comment events — including multi-server estates. Knowledge stays a click from the incident or delivery channel.",
          bullets: [
            "Space events: created, updated, deleted, restored, comments added",
            "Page events: created, updated, deleted, restored; comments added, updated, deleted",
            "Slash commands: /confluence install, connect, subscribe, edit, unsubscribe, list",
            "Works with multiple Confluence servers; OAuth + webhook install from the channel",
          ],
          image: "/images/integrations/confluence-playbooks.webp",
          imageAlt: "Mattermost Playbooks checklist used as the operating view next to Confluence runbook notifications",
          imageCaption:
            "Mattermost Playbooks — the operator checklist that sits next to Confluence space/page notifications when runbooks live in Confluence and execution lives in channel.",
          links: [
            { label: "Marketplace listing", href: "https://mattermost.com/marketplace/confluence/" },
            { label: "Plugin source & README", href: "https://github.com/mattermost/mattermost-plugin-confluence" },
            { label: "Admin install guide", href: "https://github.com/mattermost/mattermost-plugin-confluence/blob/master/docs/admin-guide.md" },
          ],
        },
      ],
    },
  ],
};

export function EcosystemPage({ rest }: { rest?: string }) {
  return <SectionPage content={CONTENT} rest={rest} />;
}
