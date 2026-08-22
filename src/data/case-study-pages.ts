/** Full case-study copy extracted from published mattermost.com/customers pages. */
export type CaseStudySection = { heading: string; paragraphs: string[] };
export type CaseStudyCopy = {
  slug: string;
  title: string;
  hero?: string;
  quote?: string;
  quoteName?: string;
  quoteRole?: string;
  highlights: string[];
  sections: CaseStudySection[];
};

export const CASE_STUDY_PAGES: CaseStudyCopy[] = [
  {
    slug: "access-now",
    title: "Access Now increases focus & security with self-hosted Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2026/01/Access-Now-Hero.jpg",
    quote: "We needed a space where we could collaborate but keep tight control of our data, and we turned to Mattermost.",
    quoteName: "Thomas Kaye Chief Security Officer",
    quoteRole: "Access Now",
    highlights: ["Moved to self-hosted Mattermost for data sovereignty", "Integrated with GitLab, ticketing systems & monitoring systems", "Reduced reliance on email with centralized alerts"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Access Now is an international human rights organization dedicated to defending and extending the digital rights of people and communities at risk. Founded in 2009, the global organization has team members operating across five continents, including presences in New York, San José (Costa Rica), Brussels, Berlin, Nairobi, and Manila, to name a few.",
          "By combining direct technical support, strategic advocacy, grassroots grantmaking, and events like RightsCon , Access Now fights for human rights in the digital age.",
        ],
      },
      {
        heading: "Needing a secure collaboration platform with data sovereignty",
        paragraphs: [
          "As an organization with a global footprint, Access Now collaborates across time zones in pursuit of its mission.",
          "“One of the ways Access Now helps build resilience and ensure online safety and security is through a 24/7, 365 Digital Security Helpline, which provides rapid-response support to activists, journalists, and other civil society actors at risk,” says Thomas Kaye, Chief Security Officer at Access Now. “The Helpline knows that when you’re in crisis, time is of the essence. The team strives to respond to all requests within two hours and offers support in multiple languages.”",
          "Such support is both reactive (e.g., a journalist is abducted and their social media accounts need to be locked) and preventative (e.g., digital security training and assessments).",
          "Each year, Access Now receives roughly 4,000 requests through the Helpline. “By the very nature of the Helpline’s work, these requests can be deeply sensitive — for example, a human rights defender targeted, a journalist in detention, a pro-democracy activist being doxxed,” Kaye continues.",
          "The organization had been using IRC to coordinate Helpline response but outgrew the platform over time and started looking for a more versatile yet secure replacement.",
          "“First and foremost, Access Now places a high value on privacy and the security of the communities we support, while using tools that remain reliable, usable, and accessible,” Kaye explains. “We wanted a place that allowed for both synchronous and asynchronous collaboration — one where we had control over our data.”",
        ],
      },
      {
        heading: "Choosing self-hosted Mattermost, a ‘tried-and-tested’ option",
        paragraphs: [
          "Currently, the organization’s team members are using a popular third-party cloud-based commercial messaging platform as a “front of house” communication solution. But given the sensitive nature of the Helpline, Access Now needed more control over its data along with the ability to tightly limit and regulate platform access. As a result, that commercial messaging platform was ruled out.",
          "“We started asking the team and the community what tools they use for secure communication and looked at recommendations from trusted sources,” Kaye continues. “We briefly reviewed some other options but didn’t feel they had reached the maturity level we needed. We required a space where we could collaborate but keep tight control of our data, and this is when we turned to Mattermost.”",
          "Ultimately, the Helpline team chose Mattermost because they could self-host the solution on their own infrastructure — and because like-minded nonprofits were using it for secure collaboration and spoke highly of it.",
          "“It’s a tried-and-tested product that peers in the sector use,” Kaye continues, adding that initial setup took about a month. “Mattermost provides excellent functionality and has facilitated increased collaboration within the team.”",
        ],
      },
      {
        heading: "Increasing focus with a centralized collaboration space",
        paragraphs: [
          "Access Now’s Helpline team is impressed by Mattermost’s flexibility and has used it to integrate different systems, Kaye explained.",
          "“We’re making use of webhooks to get notifications coming from our monitoring systems — from our internal GitLab and the main ticketing system we use,” Kaye says. “We also have single sign-on configured, which has been very useful.”",
          "With Mattermost, Access Now has been able to reduce reliance on emails, keep inboxes empty, and increase focus by centralizing alert notifications in a dedicated channel.",
          "“In the past, if there was a request for support, it would get emailed across the team,” Kaye says, adding that — if the 25-person Helpline team received 80 support requests in a day — that’s 2,000 emails clogging up internal networks and inboxes. “Naturally, this approach doesn’t scale well when you start to receive dozens of requests a day. Using Mattermost, we created an alert channel and removed the email alerts, providing a single place for information while reducing pressure on our infrastructure.”",
          "Looking ahead, Access Now has a project underway to move the entire organization over to another Mattermost instance; both Mattermost instances will be connected via shared channels to keep everyone aligned (e.g., by broadcasting organization-wide announcements) while ensuring only authorized users have access to the Helpline instance.",
          "“We’re starting to explore Boards,” Kaye concludes. “I see this being a very popular feature within the team once we have the Mattermost ‘front of house’ instance up and running.”",
        ],
      },
    ],
  },
  {
    slug: "air-mobility-command",
    title: "Air Mobility Command uses ChatOps to support largest-ever readiness exercise",
    hero: "https://mattermost.com/wp-content/uploads/2023/10/Air_Mobility_v2.webp",
    highlights: ["Relied on Mattermost-powered ChatOps during Mobility Guardian 23, its most extensive readiness exercise to date", "Leveraged ChatOps to provide instant updates to key leaders and quickly addressed operational challenges as they arose", "Protected sensitive data with on-premises deployment, secure communication channels, and complete audit trails", "Integrated with Puckboard, the open-source flight crew scheduling solution"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "To stay perpetually prepared to execute its vital missions, the Air Mobility Command (AMC) of the U.S. Air Force carries out comprehensive, recurring readiness exercises called Mobility Guardian.",
          "Mobility Guardian 2023 (MG23) deployed 3,000 U.S. and Allied Forces personnel, with detachments from the United States, United Kingdom, Canada, Australia, New Zealand, France, and Japan. The effort enabled more than 15,000 U.S. and global forces to take part in extensive simultaneous exercises across the Indo-Pacific region.",
          "The goal of MG23 was to demonstrate that AMC could seamlessly integrate with Allied Forces to provide airlift, aerial refueling, aeromedical evacuation, and humanitarian and disaster assistance. It also enabled AMC and its mission partners to hone their interoperability and collaboration at maximum sustained tempo and under multiple levels of isolation.",
          "By design, Mobility Guardian exercises are largely unscripted. That requires troops to think on their feet, quickly establish communication and other services, and dynamically adapt when operations don’t go as planned. AMC airmen can test out command-and-control (C2) applications, communications capabilities, and collaboration tools in contested, degraded, and operationally limited environments.",
          "To that end, MG23 relied on ChatOps for certain aspects of communication and collaboration throughout the exercise. ChatOps enabled teams to leverage tools such as asynchronous communication channels and collaboration platforms to support mission activities. When AMC employed ChatOps for MG23, it utilized Mattermost.",
        ],
      },
      {
        heading: "A secure, centralized ChatOps platform",
        paragraphs: [
          "AMC is a major Air Force command, headquartered at Scott Air Force Base in Illinois. Its 110,000 personnel provide airlift and aerial refueling for all U.S. armed forces, as well as global air mobility for humanitarian support across the globe. AMC’s ability to deliver Rapid Global Mobility sets the U.S. military apart from other national forces.",
          "AMC relies on purpose-built communication platforms such as its Global Decision Support System 2 (GDSS2). GDSS2 provides unit- and force-level mission planning, scheduling, and tracking of all mobility airlift and air refueling missions.",
          "AMC also depends on Mattermost collaboration capabilities through the Platform One government-to-government software and hardware factory for rapid application development, delivery, and deployment. In fact, AMC is among the DoD’s most active users of Mattermost. For instance, the solution enables flight crews to securely access critical documents from mobile devices anywhere in the world. Mattermost is built on open standards, allowing for seamless integration with open source applications like Puckboard, AMC’s flight crew scheduling application.",
          "Platform One runs Mattermost in a secure, on-premises deployment that ensures data integrity and digital sovereignty. Its deployment of ChatOps provides secure access to communication channels, data, and technology tools in a centralized collaboration environment. Those capabilities are what enabled the solution to act as a lowest common denominator for ChatOps across joint forces during MG23. By implementing ChatOps in this way, operators at the 618th Air Operations Center (AOC) and at the tactical edge were able to provide instant updates to key leaders and quickly address operational challenges as they arose.",
        ],
      },
      {
        heading: "Managing pertinent mission data",
        paragraphs: [
          "Mobility Airmen operate 24 hours a day, seven days a week, 365 days a year to provide unrivaled global mobility. Every day, Air Mobility Command plans, tasks, and executes missions around the world. ChatOps allows for the use of flexible, scalable command-and-control communication tools to maintain a constant connection among mission teams and decision-makers.",
          "ChatOps enables AMC to manage pertinent mission data in context-relevant communication channels to ensure the right personnel have secure access to the right information at the right time. For instance, this approach enables messaging, file sharing, and collaboration on computers and mobile devices across Mobility Air Forces (MAF) field forces and the Air Forces Transportation (AFTRANS) C2 enterprise.",
          "Platform One is leveraging the Mattermost application framework to develop new functionality and integrations that will scale its adoption across the DoD.",
          "For its part, AMC is using context-relevant ChatOps channels to streamline operational and tactical communication to improve situational awareness and accelerate decision-making. It also uses automated playbooks and digitized checklists within the ChatOps solution to enhance analysis and after-action reporting.",
          "Readiness exercises like MG23 enable AMC to understand and overcome the “tyranny of distance” when operating in vast theaters as it delivers the Rapid Global Mobility the Joint Force and allied partners depend on.",
        ],
      },
    ],
  },
  {
    slug: "almalinux",
    title: "AlmaLinux builds a global digital community with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/AlmaLinux.webp",
    quote: "Mattermost proved to be as welcoming as we wanted our own community to be.",
    quoteName: "benny Vasquez chair",
    quoteRole: "AlmaLinuxOS Foundation",
    highlights: ["Built a global community of over 2,000 users on Mattermost", "Reduced reliance on email by organizing conversations by projects, topics, and teams in channels", "Extended Mattermost with webhooks to automate notifications from monitoring services and other tools, such as Grafana"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The AlmaLinux OS Foundation is an open source foundation and community that builds and maintains AlmaLinux OS, a free enterprise Linux distribution that mirrors Red Hat Enterprise Linux. The organization, which was founded in 2020, doesn’t have any employees. Instead, the team is made up of a community of over 2,000 people spread out across the world, with about 30 regular contributors from places like Azerbaijan, Moldova, Poland, Belgium, Japan, and the United States.",
        ],
      },
      {
        heading: "A gathering spot for a global open source community",
        paragraphs: [
          "When the AlmaLinux project was starting off, the foundation needed to create a digital gathering spot for its global community. There are tons of collaboration tools to choose from, and AlmaLinux was particularly interested in finding one that spoke to the values of its open source community and had a vibrant community of its own.",
          "“To me, it has never made sense for people who produce open source not to use open source, whenever they can,” says benny Vasquez, chair of the board of directors at the AlmaLinux OS Foundation.",
          "Since the team knew that the community they were building would grow to include thousands of contributors, the right platform would also be highly performant at scale . It would also be modern, user-friendly, and offer a more mature feature set.",
          "“We could have used IRC , but it’s not very user-friendly; you can’t send pictures, exchange files, and things like that,” explains Jack Aboutboul, community manager at AlmaLinux. “We wanted to be inclusive, especially for newer people who would be turned off by older technology.”",
          "After comparing several open source options, the AlmaLinux team agreed that Mattermost was the ideal solution for their use case.",
          "“We looked at all the different options out there, and Mattermost stuck out as the most mature,” Aboutboul continues. “Some of the others we were looking at were either just getting started or early; each option had something missing from it.”",
        ],
      },
      {
        heading: "Bringing a globally distributed team together asynchronously and in real-time",
        paragraphs: [
          "After a smooth and straightforward Mattermost implementation, the AlmaLinux team hasn’t looked back. Today, their community has more than 2,000 active users who’ve shared over 100,000 posts across 30 channels since 2021. Those channels cater to different topics, different projects, and different teams.",
          "“It helps you find information faster and it helps you focus your discussions,” Aboutboul explains, adding that AlmaLinux enjoys being able to configure permissions across channels and use private channels to create safe spaces to discuss certain topics or issues in smaller groups. “Not everyone needs to know every detail on every little task. That can be overwhelming.”",
          "At the highest level, AlmaLinux is particularly excited by how the community is able to communicate with members around the world in real-time and also asynchronously.",
          "“It gets us out of our email,” Vasquez says. “When something’s more urgent, we use chat to add priority. Mattermost also makes it easier for us to interact with our community while showing folks who are not typically attached to open source projects what the open source process looks like.”",
          "Instead of requiring everyone in their community to use Mattermost, AlmaLinux uses Matterbridge to link Mattermost with other platforms.",
          "“We chose the open source solution we like the most to be our home, but we also meet our community where they are,” Vasquez says.",
        ],
      },
      {
        heading: "Extending Mattermost with webhooks",
        paragraphs: [
          "The AlmaLinux team has also extended Mattermost using webhooks. For example, when systems go down, the team receives automatic notifications from tools like Grafana and other services.",
          "“That way, people know we’re updating something or there’s an issue with something that someone needs to look at,” Aboutboul says.",
          "Both Vasquez and Aboutboul would recommend Mattermost to anyone looking to create a central communication and collaboration hub.",
          "“From a business perspective, the alternatives have gotten really, really expensive for not many more features,” Vasquez says. “I don’t know what else you’re paying for there, but it’s not more features.”",
          "For Aboutboul, Mattermost is the linchpin that supports the entire community.",
          "“It’s the glue that holds us together,” he says. “It should be the first thing you look at if you’re serious about putting together a collaborative space for your community or your employees.”",
        ],
      },
    ],
  },
  {
    slug: "cern",
    title: "CERN integrates 100+ tools into Mattermost for more effective global collaboration",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Cern.webp",
    quote: "Mattermost provided a great way for people to communicate while working remotely without having to fall back to things like phone calls or video conferences for anything that could be handled using text.",
    quoteName: "Adrian Mönnich Lead Developer for Collaboration Tools",
    quoteRole: "CERN",
    highlights: ["Centralized collaboration space from 5+ tools to 1 platform for cross-department collaboration across 1500 teams", "Integrated 100+ tools used by CERN team into one platform", "Transitioned to fully remote operations easily during COVID pandemic"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "CERN , the European Organization for Nuclear Research, is a research institute straddling the border between Switzerland and France that studies the fundamental structure of the universe by examining the behavior of subatomic particles using highly complex scientific instruments, including the world’s largest and most powerful particle accelerator. In 2015, CERN rolled Mattermost out across the organization, streamlining collaboration while meeting user expectations and ensuring full data ownership with an on-premises solution.",
        ],
      },
      {
        heading: "Bringing messaging to one place securely",
        paragraphs: [
          "In 2015, CERN found itself facing an all-too-familiar problem: everyone ended up using the platforms they preferred. Over time, the research institute began to rely on several different chat systems—some professional, some personal—which was not an optimal situation.",
          "Seeking a better way forward, the team at CERN began searching for a new secure messaging solution that would meet user expectations. After doing their due diligence, they decided to deploy Mattermost because it delivered a modern messaging experience and could be hosted on-premises, enabling CERN to maintain full control over all of its data.",
          "“We didn’t want to use another service that locked in our data,” explains Adrian Mönnich, a lead developer for collaboration tools at CERN, who manages the research institute’s Mattermost instance. Due to the platform’s open source nature, the team at CERN was also able to load data from existing chat systems into Mattermost, preventing data loss.",
        ],
      },
      {
        heading: "Speeding up collaboration—during COVID-19 and beyond",
        paragraphs: [
          "After deploying Mattermost, adoption was swift and organic. “Really most of it was word-of-mouth, like colleagues mentioning it, then people starting their own teams and own channels,” Adrian explains. “We have a user community very happy with Mattermost.”",
          "Now, Mattermost is primarily used as a central collaboration space where CERN employees can find colleagues in other departments and fields and ask them quick questions. It’s also used to facilitate communication between shifts to keep everyone working on projects on the same page. Additionally, Mattermost accelerates the resolution of issues between dependent services, since service managers can quickly ask questions of colleagues running other services to help align and work around issues.",
          "According to Adrian, CERN’s 22,000 total users—including nearly 10,000 monthly active users spread out across 3,000 teams—were able to figure out how to use Mattermost on their own thanks to the platform’s intuitive design. “I was pleasantly surprised by how well it scales,” Adrian says. The organization’s Mattermost instance currently includes 26,000 channels and 58 million posts.",
          "When the coronavirus pandemic hit in early 2020, CERN—like many other organizations—was forced to rapidly transition to remote work. Mattermost helped make that transition seamless.",
          "“Our site access was highly restricted for a few months during the lockdown in our host states due to the COVID-19 pandemic, and a great proportion of people were teleworking,” Adrian says. “Mattermost provided a great way for people to communicate while working remotely without having to fall back to things like phone calls or video conferences for anything that could be handled using text.”",
          "CERN has taken advantage of Mattermost’s extensibility and flexibility to better embed it within their organization. To speed up workflows, CERN has also extended Mattermost by integrating it with close to 100 tools, including Jira, GitLab, and GitHub. “People can create whatever integrations they want,” Adrian says.",
        ],
      },
      {
        heading: "Building a stronger community and institution",
        paragraphs: [
          "By bringing stakeholders together in a digital space, Mattermost has also helped CERN build a stronger community. Here are four ways CERN is using Mattermost to support its community-building efforts:",
          "The decision to consolidate all messaging with Mattermost has proven to be a valuable one for CERN. As a result, they’re able to move breakthrough research forward faster while fostering a more welcoming and collaborative environment for every stakeholder—which, in turn, helps us all understand the world we live in more completely.",
        ],
      },
      {
        heading: "About CERN",
        paragraphs: [
          "CERN, the European Organization for Nuclear Research, is one of the world’s leading laboratories for particle physics. The Organization is located on the French-Swiss border, with its headquarters in Geneva. Its Member States are: Austria, Belgium, Bulgaria, Czech Republic, Denmark, Finland, France, Germany, Greece, Hungary, Israel, Italy, Netherlands, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Spain, Sweden, Switzerland and the United Kingdom. Cyprus and Slovenia are Associate Member States in the pre-stage to Membership. Croatia, India, Lithuania, Pakistan, Turkey and Ukraine are Associate Member States. The European Union, Japan, JINR, the Russian Federation, UNESCO and the United States of America currently have Observer status.",
        ],
      },
    ],
  },
  {
    slug: "classact",
    title: "Classact speeds up IT service delivery by consolidating communication, accelerating incident response by over 50%",
    hero: "https://mattermost.com/wp-content/uploads/2024/07/Classact@3x.webp",
    quote: "Mattermost has evolved beyond just a communication tool, playing a wide role in streamlining business processes, managing employee health, monitoring systems, and more.",
    quoteName: "Hidetoshi Homma CEO at Classact",
    highlights: ["Moved to Mattermost to consolidate several different communication mediums", "Chose self-hosted Mattermost for data security and Slack familiarity", "Accelerated incident response time by over 50%"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Classact is an IT consultancy that designs, builds, and maintains IT infrastructure. The company — which is headquartered in Tokyo, Japan — was founded in 2005. Classact is powered by a team of 150 employees, many of whom work at various client sites or out of home offices on a daily basis.",
        ],
      },
      {
        heading: "Messages everywhere: Needing to streamline & centralize team communication",
        paragraphs: [
          "As an IT consultancy, many Classact employees spend their days working out of client offices. With the team scattered across many different physical locations, it was difficult to coordinate internal operations and give staff the resources they needed to do their best work.",
          "To share information and keep everyone on the same page, Classact used a variety of mediums including email, phone calls, SMS, and even a custom chat tool the team developed in about two weeks. Unfortunately, this cobbled-together setup left much to be desired.",
          "“Emails required unnecessarily lengthy messages, took a lot of time to exchange, and often led to misunderstandings,” says Hidetoshi Homma, CEO at Classact. “The custom chat tool lacked a mobile app and notification features, so only certain people used it. This tool couldn’t attach files and had poor functionality and slow communication speed, which resulted in it being underutilized.”",
          "On top of this, the chat tool had a number of bugs, which required two or three hours a month to mitigate.",
          "“Phone calls depended on the recipient’s availability, which often lacked immediacy,” Hidetoshi continues. “SMS had limited information exchange capacity, making it difficult to share detailed information.”",
        ],
      },
      {
        heading: "Consolidating communication: Choosing self-hosted Mattermost for collaboration & data security",
        paragraphs: [
          "As Classact began looking for a solution to its problem, the team outlined its requirements. Most importantly, the company needed a solution with robust data security controls, since they were seeking to obtain ISO 27001 certification, which covers information security management systems. At the same time, the right solution would integrate with Active Directory for employee authentication and management.",
          "After surveying the market and considering other solutions — including Slack , Rocket.Chat , and Chatwork — Classact ultimately decided that Mattermost was the ideal solution to their problem. In particular, the Classact team was sold on the fact that they could self-host Mattermost, it had a similar look and feel as Slack, and it offered robust threading and reaction capabilities.",
          "“Mattermost meets both of our key requirements,” Hidetoshi explains. “It also offers advanced security features — like support for encryption during transfer, integrated authentication via AD/LDAP, session management functionality, periodic security updates distribution, and self-hosting capability — along with the ability to integrate with Active Directory , enabling safe and efficient user management.”",
        ],
      },
      {
        heading: "Real-time collaboration made easy: Accelerating incident response time by over 50%",
        paragraphs: [
          "With Mattermost powering secure collaboration across a distributed team, Classact has been able to accelerate communication. In fact, the company didn’t even miss a beat during the pandemic because they were already set up for remote work with Mattermost.",
          "“We were able to minimize disruptions and delays in our work while ensuring the safety of our employees and maintaining productivity,” Hidetoshi explains.",
          "Currently, about 150 employees across 30 business groups rely on Mattermost; coupled with external collaborators, their Mattermost instance has 170 monthly active users.",
          "“Compared to when we used email, the speed of communication has increased dramatically, and the efficiency of information-sharing and problem-solving has improved significantly,” Hidetoshi says. “Specifically, real-time discussions on project progress and technical issues have become easier, reducing the problem-solving time to less than half of what it used to be.”",
          "Previously, Classact had “no choice but to use phone calls, emails, or meet in person, often missing the right timing and going over a month without contact,” Hidetoshi explains. Using Mattermost notifications, the company has been able to “significantly reduce missed messages.”",
          "On top of this, Classact uses Mattermost Calls for “deeper communication.”",
        ],
      },
    ],
  },
  {
    slug: "cyberpeace-institute",
    title: "CyberPeace moves to self-hosted Mattermost for data security & user-friendly design",
    hero: "https://mattermost.com/wp-content/uploads/2024/12/CyberPeace_Institute@3x.webp",
    quote: "Without Mattermost, we couldn’t do everything we’ve done. For us, it was obvious it was the best choice.",
    quoteName: "Florent Bitschy CTO and CISO at CyberPeace Institute",
    highlights: ["Moved to Mattermost for a more intuitive user experience", "Self-hosted Mattermost on servers in Switzerland for data sovereignty and GDPR compliance", "Streamlined new user onboarding to help NGOs improve their cybersecurity faster"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The CyberPeace Institute is a nonprofit organization that protects the most vulnerable communities and organizations from cyberthreats. To do this, the organization offers free services — including cyber resilience support, threat detection and analysis, incident response support, and security awareness training — to more than 400 nonprofits and non-government organizations (NGOs) across over 120 countries, including Oxfam and AIDS Resource.",
          "Founded in 2019 and headquartered in Geneva, Switzerland, the organization has roughly 40 full-time employees and collaborates regularly with over 1,000 volunteers to fulfill its mission.",
        ],
      },
      {
        heading: "Building a community: Needing a secure, self-hosted & user-friendly platform",
        paragraphs: [
          "To protect nonprofits against cybercriminals, the CyberPeace Institute works with lots of professional volunteers whose employers donate their time to the cause. The organization — which must secure the sensitive information it uses to help victims recover from cyber incidents — had been using a SaaS-based project management platform called Stackfield to collaborate with both their volunteers and the organizations they serve.",
          "“Stackfield was very secure, but we were looking for a self-hosted solution for various reasons,” explains Florent Bitschy, CTO and CISO for CyberPeace. “Many of our users are also not digitally literate, so we also needed an API to develop our own modules and were looking for a flexible, user-friendly platform.”",
        ],
      },
      {
        heading: "Security & self-hosting: Choosing Mattermost for data sovereignty and GDPR compliance",
        paragraphs: [
          "As CyberPeace began looking for a new solution, they considered several options, including Rocket.Chat.",
          "“Rocket.Chat is a very simple, very well-done chat platform,” Bitschy explains. “But we needed more than a chat. We needed something to organize work — like kanban-style boards.”",
          "In a previous role, Bitschy used GitLab Omnibus , which ships with Mattermost.",
          "“I had a very good opinion of Mattermost,” he says, adding that he was particularly impressed by the platform’s open source nature and the fact that it could be self-hosted. “Plus, with Mattermost, you have the possibility to connect through Okta ’s single sign-on.”",
          "As they continued their search, the operations team began benchmarking different applications to determine which option best suited their needs.",
          "“We were looking for a Slack-like app where people could talk in channels, exchange data, and access a board we could use for matchmaking purposes,” Bitschy says.",
        ],
      },
      {
        heading: "Fulfilling their mission: Using Mattermost to make cyberspace safer",
        paragraphs: [
          "By moving to Mattermost, CyberPeace has equipped volunteers and the NGOs and nonprofits the organization supports with a secure collaboration space that’s intuitive to figure out.",
          "“Mattermost is super friendly for the people that we’re working with,” Alley says. “My background is not in cybersecurity, so it’s great to have a platform that is as nicely laid out as Mattermost is.”",
          "With Mattermost powering collaboration, CyberPeace has a solution that’s built for scale — the perfect fit as they work toward their growth goals.",
          "“It was the scale that really matched our needs,” Alley continues. “Mattermost stood out as the right solution at the time when we were rapidly expanding. And now we are really rapidly expanding, and Mattermost is doing a great job at serving our needs.”",
          "With Mattermost serving as a centralized communications platform that ties CyberPeace’s entire community together, it’s much easier for the team to broadcast information and updates on emerging cyber threats, training sessions, volunteer assignments, and ongoing incident responses, keeping all stakeholders informed and engaged.",
          "“With a community of over a thousand volunteers and over 400 organizations that we’re protecting, it’s hard to get a message out,” Alley says. “Mattermost is a way to keep our community together, engaged, and informed. It’s really gotten the job done.”",
        ],
      },
    ],
  },
  {
    slug: "enelyst",
    title: "How Enelyst powers a global energy intelligence community with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2026/03/Enelyst-Case-study-Hero.webp",
    quote: "We found Mattermost to be the most stable, flexible, and competitively priced platform available.",
    quoteName: "John Sodergreen Founder",
    quoteRole: "Enelyst",
    highlights: ["Built a global community hub for the energy sector", "Upgraded to Mattermost Professional for security and compliance", "Streamed real-time intelligence and data feeds into Mattermost"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "In energy trading, information moves markets. Yet too often, crucial data is scattered across tons of apps and buried in noise. Journalist and publisher John Sodergreen, along with natural gas market analyst Het Shah, saw an opportunity to solve this fragmentation. In 2018, they launched Enelyst , a market intelligence hub that combines streaming intel, live trade briefings, and public chat into a single collaboration space. Powered by Mattermost, the platform quickly grew to serve over 1,000 daily users.",
        ],
      },
      {
        heading: "Searching for a sustainable business model",
        paragraphs: [
          "As Enelyst’s community grew, Sodergreen and Shah began exploring monetization strategies. Initially funded through ad sales and offered free to users, Enelyst soon faced the need for a sustainable revenue model. When Shah left to pursue new endeavors, Sodergreen realized that the platform would need to shift to a paid subscription model to continue its growth.",
          "To make that work, Sodergreen needed to upgrade the Enelyst platform, originally built on open source code, to something enterprise-grade.",
        ],
      },
      {
        heading: "Choosing Mattermost Professional for security and compliance",
        paragraphs: [
          "After evaluating several platforms, including Slack, Sodergreen chose to deepen his relationship with Mattermost by upgrading to self-hosted Mattermost Professional, enabling Enelyst to maintain complete control over its data infrastructure. “We are publishers after all,” Sodergreen says. “Ownership is everything.”",
          "In addition to data sovereignty, the decision was also driven by Mattermost’s stability, flexibility, and competitive pricing.",
          "“We determined that Mattermost had the best possible platform to support our growing needs,” Sodergreen says. “Scale has not been an issue with Mattermost.”",
          "To support an industry that runs on real-time data, Sodergreen was drawn to Mattermost’s ability to easily stream content and integrate diverse data sources. “We have managed to deploy content from dozens of intel, data, and analytics providers directly to our various sector channels. Enelyst provides traders and analysts with original content covering natural gas, crude, power, LNG, weather, policy and risk, and economics.” He was particularly interested in Mattermost guest accounts , which allow view-only members to read content and observe live briefs while meeting compliance requirements.",
          "“Our customers include many regulated commodity traders from some of the biggest funds and energy companies in the world,” he continues. “They have very specific compliance criteria.”",
          "Enelyst also offers all-access memberships, which enable users to post content, comment, and otherwise contribute to the conversation.",
        ],
      },
      {
        heading: "Creating a global community for the energy sector",
        paragraphs: [
          "For Sodergreen, the biggest benefit of choosing Mattermost has been building a truly unique global community for the energy sector.",
          "“It’s a one-of-a-kind community hub for folks from diverse companies and locations to share ideas, news, and intel,” he says. “Our community members are big fans of Mattermost.”",
          "Enelyst has customized the Mattermost UI to reflect its branding and has created custom icons for channels to improve organization and visual identification. The company is also using incoming webhooks to post messages and alerts directly in specific channels and outgoing webhooks to forward specific channel messages, enabling real-time automated processing and workflow execution, Sodergreen says.",
          "“We also use Zapier to manage several RSS feeds that continuously post updates into different channels within the Enelyst platform,” he continues.",
          "Looking ahead, Sodergreen plans to explore using AI inside Mattermost for tasks like automating end-of-day reports, polling, and other content creation. He also hopes to expand Enelyst into other competitive markets beyond energy — such as equities, metals, agriculture, and foreign exchange — and is confident Mattermost will support that mission at scale.",
          "“I would absolutely recommend Mattermost to anyone in the energy sector and beyond,” he adds.",
        ],
      },
    ],
  },
  {
    slug: "european-public-agency",
    title: "European public agency chooses Mattermost & Pexip for secure collaboration, replacing Skype for Business",
    hero: "https://mattermost.com/wp-content/uploads/2025/09/Swedish-Pension-Fund-Hero.webp",
    quote: "These are modern tools that not only support effective communication but also new, more asynchronous and sustainable ways of working.",
    quoteName: "Project Lead European Government Agency",
    highlights: ["Replaced S4B with Mattermost, Pexip, and Collaboard", "Modernized infrastructure by moving away from legacy systems", "Achieved greater cyber resilience and full data sovereignty"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This European government agency distributes retirement pensions, ensuring residents receive steady incomes when they leave the workforce. The agency has over 1,400 employees across headquarters, regional offices, and remote locations.",
        ],
      },
      {
        heading: "Searching for Skype for Business Replacement",
        paragraphs: [
          "Since its inception, the agency has relied on collaboration technologies to support its distributed team and fulfill its mission of ensuring financial security for the country’s retirees.",
          "The agency used Skype for Business for over a decade to keep teams aligned and boost organizational productivity.",
          "When Microsoft announced that they’d be replacing Skype for Business with Microsoft Teams — and that Skype for Business would be retired in July 2021 and reach end of support in October 2025 — the agency began looking for a new collaboration solution to avoid the risks of continuing to use the unsupported platform.",
        ],
      },
      {
        heading: "Moving away from legacy systems & increasing cyber resilience",
        paragraphs: [
          "The agency opted to use Skype’s deprecation as an opportunity to accelerate its digital transformation efforts, moving away from legacy systems and deploying next-generation collaboration tools that are more conducive to the modern world.",
          "“We knew the right solution had to be easy to use and support efficient, secure, and compliant work, which matters more than ever in today’s fast-changing legal and technical landscape,” says the migration project lead.",
          "As the agency narrowed down its criteria for a Skype for Business replacement , it settled on three key features: interoperability, future-proof architecture, and data sovereignty, which would enable it to protect sensitive financial data.",
          "After surveying the market and studying their options, the agency ultimately chose to replace Skype with three tools:",
          "In May 2025, the agency officially launched its new collaboration suite, creating a strong foundation on which they can continue building as digital needs evolve. Together, the three tools have helped the agency increase cyber resilience by giving it more control over its infrastructure and letting it choose where mission-critical collaboration data lives.",
          "“These are modern tools that not only support effective communication but also new, more asynchronous and sustainable ways of working,” the project lead continues.",
        ],
      },
      {
        heading: "Preparing for the future with a modern & adaptable collaboration stack",
        paragraphs: [
          "By moving away from an outdated collaboration platform — one built initially before the first iPhone was released — the agency has been able to future-proof its collaboration stack with a highly adaptable solution that can grow alongside the organization.",
          "“What makes this solution powerful is how it brings the whole organization together into a shared learning process,” the project lead says. “It’s not a static tool — it adapts and improves with us, unlike the legacy systems we used before.”",
          "With a centralized collaboration space serving as the glue that holds the organization together, the agency intends to continue its digital transformation journey by replacing other legacy systems with modern alternatives, putting it in an even stronger, more secure position to fulfill its mission.",
          "“This is a milestone in the agency’s digital development,” the project lead concludes. “But it is only the beginning.”",
        ],
      },
    ],
  },
  {
    slug: "fairphone",
    title: "Fairphone eliminates \"reply all\" threads with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Fairphone.webp",
    quote: "The greatest benefit of Mattermost is that it unclutters our communication.",
    quoteName: "Leo Makkinje Site Reliability Engineer",
    highlights: ["Centralized collaboration for a globally distributed team", "Chose Mattermost for alignment with open source philosophy and usability", "Integrated with Nagios for streamlined infrastructure monitoring communication"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Fairphone is an Amsterdam-based social enterprise company that aims to develop smartphones designed and produced with a lower environmental impact. The team is distributed across Europe, Asia, and Africa.",
          "Previously, two separate teams at Fairphone had created Slack environments to collaborate on projects. While this worked well enough for team communication, it created information siloes, as the rest of the company used email to communicate. “Information quickly got scattered among different environments,” says Leo Makkinje, Site Reliability Engineer for Fairphone.",
          "Fairphone wanted to extend Slack to the rest of the organization. However, when employees started asking questions about Slack’s privacy and data retention policies, the IT team decided to look for alternatives.",
        ],
      },
      {
        heading: "A User-Friendly, Open Source Alternative for Collaboration",
        paragraphs: [
          "The most important selection criterion for Fairphone was that a new collaboration tool should be user-friendly for all employees, both on desktop and mobile.",
          "As part of their mission to create fairer phones, Fairphone also strives to bring more fairness to software. This mission includes embracing open source software wherever possible. In addition to usability, Fairphone wanted to use an open source collaboration tool and to have the option of self-hosting to meet their data privacy needs.",
          "The IT team evaluated several open source collaboration alternatives, including Matrix, Rocket.Chat, Zulip, and Mattermost. “After testing various alternative chat tools, we concluded that there was one clear winner: Mattermost,” says Leo. “The look and feel of Mattermost are user-friendly (which makes our employees happy), and deployment in our cloud environment was a breeze (which makes IT happy). The other collaboration tools we tested either had a user interface that was unfamiliar or were a nightmare to install and maintain.”",
        ],
      },
      {
        heading: "Cloud Collaboration that Keeps Everyone — and Everything — Connected",
        paragraphs: [
          "Fairphone deployed Mattermost as a self-hosted solution on their private cloud. Mattermost has become part of the Fairphone team’s daily workflow, along with Basecamp, GitLab, and Google Workspace.",
          "Fairphone also has Guest Access enabled to allow external partners to join specific channels while maintaining control over the privacy of public channels.",
        ],
      },
      {
        heading: "Seamless Transition to Secure Remote Communication",
        paragraphs: [
          "During the COVID-19 pandemic and subsequent lockdowns, Fairphone switched to a remote workforce. Since critical IT infrastructure and collaboration tools like Mattermost were already cloud-based, the transition was frictionless. “Having no more face-to-face communication meant that people started to use Mattermost more than before. This triggered the IT team to enable additional functionality, such as push notifications for the mobile app and LDAP integration for easy user onboarding,” says Leo.",
          "LDAP functionality on Mattermost has been helpful for Fairphone. “It’s often rather challenging for an IT team to switch from using local user accounts to LDAP accounts,” notes Leo. “Matching existing account names with LDAP user names can be a daunting or even impossible task. But the developers at Mattermost did an outstanding job with the way they implemented this feature. As a result, switching to LDAP-based authentication was smooth as silk, without downtime or headaches.”",
        ],
      },
      {
        heading: "Next Steps for Fairphone",
        paragraphs: [
          "To date, the Fairphone team is highly active on Mattermost, with an average of 90 users and bots posting 4,000 messages daily. Leo says that Fairphone is confident that the flexibility and extensibility of the platform will continue to meet their collaboration and workflow orchestration needs as their team grows: “Mattermost works very well for us. And we know that Mattermost has more functionality to offer if we ever need more.”",
        ],
      },
    ],
  },
  {
    slug: "fujitsu",
    title: "Fujitsu Customers with Biodrug Design Accelerator (BDA) use Mattermost to power secure collaboration",
    hero: "https://mattermost.com/wp-content/uploads/2024/03/Fujitsu@3x.webp",
    quote: "One of the advantages is that being able to manage Mattermost ourselves makes it easier to investigate when a problem occurs.",
    quoteName: "The Fujitsu Development Team",
    highlights: ["Chose Mattermost as the secure collaboration solution for its Biodrug Design Accelerator", "Increased operational efficiency with drug design information and messaging data available on a single screen", "Self-hosted Mattermost to control the instance and investigate issues internally should they occur"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Fujitsu is an information and communications technology equipment and services corporation that’s one of the world’s largest IT service providers. Founded in 1935 and headquartered in Tokyo, Fujitsu has 124,000 employees working out of offices across the globe. (This information is current as of March 2024.)",
        ],
      },
      {
        heading: "Helping clients accelerate drug discovery and bring new products to market faster & more cost-effectively",
        paragraphs: [
          "As one area of focus, Fujitsu aims to be a key partner for pharmaceutical companies, “supporting them in total from research and development, clinical development, to quality control until market launch,” says Fujitsu’s development team.",
          "Effective peptide drug discovery requires expertise and contribution from a diverse team of skilled professionals, including chemists, biologists, and computer scientists — making collaboration a cornerstone of success.",
          "“However, effective collaboration across diverse and highly specialized groups remains a difficult task,” the development team continues. “Drug designers are often forced to manage data across disparate software environments, trying to corroborate a hypothesis with laboratory results, ultimately slowing down the search for successful drug candidates.”",
          "On average, it takes anywhere between 12 and 15 years and $2 billion to bring a new drug to market . To accelerate that timeline and rein in expenses, Fujitsu recently unveiled a Biodrug Design Accelerator , a web-based design and collaboration platform that enables scientists at different stages of the drug design lifecycle to consolidate data in a single integrated solution.",
        ],
      },
      {
        heading: "Protecting sensitive R&D data with a secure collaboration solution they could host on their own servers",
        paragraphs: [
          "While designing the accelerator, the team began looking for a collaboration platform that would enable individuals to share, discuss, and exchange information across multiple researchers in real time on the same platform.",
          "“Pharmaceutical companies handle very sensitive information, such as research data, and place great importance on data security,” the team says, adding that some of the clients Fujitsu works with prefer on-premises solutions over SaaS tools because they provide more control over proprietary data and self-sovereignty.",
          "Mattermost, a secure collaboration hub for mission-critical work, satisfied this need.",
          "Since the team was already familiar with Mattermost and it offers deployment choice — they knew they could host it on servers they control, something critical for several of its clients — they ultimately decided that it was the ideal messaging solution for the Biodrug Design Accelerator and connected the two platforms via Mattermost’s API.",
          "What might’ve happened if the company hadn’t been able to use Mattermost for its accelerator?",
          "“We would have either built our own chat system from scratch or looked for ways to implement it with the limitations of less customizable chat systems,” the development team explains.",
        ],
      },
      {
        heading: "Cross-team secure collaboration made easy with Mattermost, speeding up drug discovery",
        paragraphs: [
          "With Mattermost powering the accelerator’s communication, all drug discovery stakeholders can present, share, discuss, and exchange information in real time.",
          "By being able to see drug design information alongside messaging data on a single screen, operational efficiency has increased, according to the development team. Plus, whenever new team members join a project, they’re able to get up to speed by reading conversation history, accelerating the onboarding process.",
          "Looking ahead, the development team plans to investigate Playbooks to see if they can use it to streamline repetitive workflows, increasing efficiency even more.",
          "“I think it would be beneficial to use Playbooks to easily define workflows for approval processes in drug discovery and record discussions related to it,” the development team continues.",
          "Due to its open source nature and its self-hosting capabilities, Fujitsu has complete control over Mattermost and can remedy any issues rapidly as they arise.",
          "“One of the advantages is that being able to manage Mattermost ourselves makes it easier to investigate when a problem occurs,” the development team says, adding that team members refer to the platform’s robust documentation when they run into issues. “Whenever we have any questions, we’ve reached out to the Mattermost support team and received prompt responses.”",
        ],
      },
    ],
  },
  {
    slug: "galois",
    title: "Galois stays in control of company data without compromising on collaboration with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Galois.webp",
    quote: "Email is one of those things people read when they get around to it. Since we’ve moved to Mattermost, we have real-time chats taking place.",
    quoteName: "Dan West IT Systems Administrator",
    quoteRole: "Galois",
    highlights: ["Uses custom-built client Matterhorn to provide developers with command line access within Mattermost Channels", "Highly secure platform offers confidence to work with remote clients, including government agencies", "Integrates with GitLab and Jenkins"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Galois’ distributed team, which serves leading government agencies including NASA and the Department of Defense, switched from Jabber to Mattermost for modern, self-hosted communication. The feature-rich messaging platform makes it faster and easier for staff to stay connected and to solve complex problems, while IT enjoys the benefit of staying in control of company data.",
        ],
      },
      {
        heading: "Company",
        paragraphs: [
          "Galois is a technology company that helps customers solve difficult computer science and cybersecurity problems through advanced research and development. The company, which was founded in 1999, is headquartered in Portland, Oregon.",
          "Galois works with a number of government agencies, including NASA and the Department of Defense. Since the bulk of its clients are headquartered in Washington, D.C., Galois has a satellite office in Arlington, Virginia and has opened its third location in Dayton, Ohio.",
        ],
      },
      {
        heading: "Challenge",
        paragraphs: [
          "After opening an office on the other side of the country, Galois realized that the business messaging tool it was using, Jabber, no longer met its needs.",
          "“We didn’t have an easy way to collaborate back and forth because we had a continent between us,” says Dan West, an IT systems administrator.",
          "Galois employs 70 people. The company doesn’t have a traditional management structure; it relies on project leads to keep teams moving forward together.",
          "Employees need to be able to collaborate effectively to solve complex problems without managers. Galois needed a modern messaging solution with an intuitive user interface that supported third-party integrations, provided web support, enabled offline notifications and allowed users to easily search conversation histories.",
          "Employees were already familiar with Slack; selecting a platform that offered a comparable experience was a priority. However, Galois needed an on-premises solution due to the sensitive nature of its work. Since Slack is only available as a hosted service, Galois either had to stick with outdated Jabber or look elsewhere.",
          "“We take security and privacy very seriously,” West explains, “so hosting off-site was not an option.”",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "Galois had recently deployed GitLab to improve its software development collaboration capabilities. At the time, GitLab had just started integrating Mattermost, an enterprise-grade messaging solution that’s built on open source code, into its software. Already familiar with the platform, Galois decided to test Mattermost after a popular March 2016 Wired article promoted it as a Slack alternative.",
          "Shortly thereafter, momentum built to adopt the tool internally. The company liked what they found and rolled Mattermost out four months later.",
          "Initial setup was easy; it only took an hour or two. While Mattermost immediately met most of the team’s expectations, Galois eventually upgraded to gain access to premium features.",
          "“We originally started by using the Mattermost version that came bundled in the GitLab Omnibus package, but we eventually migrated to Mattermost Enterprise Edition in order to get LDAP authentication and enterprise support,” West says.",
          "Galois also wanted to provide command line access to its developers. After trying other options—like MatterIRCD—engineers decided to build their own Mattermost command line client, now known as Matterhorn .",
          "“It’s the perfect example of how useful the community integrations are and how end users can develop new features to fit their workflows,” West says.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Today, Mattermost is used extensively throughout Galois by engineers, members of the finance and operations teams and even outside collaborators.",
          "Galois has already seen a lot of return on its investment. Employees no longer have to sift through never-ending email threads. Instead, they collaborate productively with their colleagues wherever they happen to be.",
          "“It engages more people because it’s easy to use and they don’t have to figure out a new client,” West says.",
          "While Mattermost is used for work purposes, employees also enjoy the social aspect of it. Most of Galois’ 40 Mattermost channels are work-related. But they also have channels dedicated to electronic gaming and other general topics of interest which help build relationships and maintain company culture.",
          "Employees enjoy that Mattermost supports offline messaging and notifications. They are also thankful they no longer have to search through endless email threads.",
          "“Email is one of those things people read when they get around to it,” West explains. “Since we’ve moved to Mattermost, we have real-time chats taking place.”",
        ],
      },
      {
        heading: "About Galois",
        paragraphs: [
          "Galois conducts research and development in advanced computer science, with a focus on ensuring that critical systems are secure and trustworthy. Founded in 1999, the company is headquartered in Portland, OR, with offices in Arlington, VA and Dayton, OH.",
        ],
      },
      {
        heading: "About Mattermost",
        paragraphs: [
          "Mattermost provides enterprise-grade collaboration solutions for the world’s leading organizations on a vibrant open source platform. Our private, hybrid and public cloud solutions offer secure, configurable, highly scalable messaging across web, mobile and PC with archiving, search, and deep integration across in-house systems.",
        ],
      },
    ],
  },
  {
    slug: "german-informatics-society",
    title: "German Informatics uses Mattermost to accelerate research timelines 6x & ensure GDPR compliance",
    hero: "https://mattermost.com/wp-content/uploads/2025/05/German_Informatics_Society@3x.webp",
    quote: "We decided on the high-performance option, and that was Mattermost. The loading time is fast. The reaction time is fast. Search is fast. It’s amazingly efficient. If we didn’t have Mattermost, I wouldn’t even know what to do.",
    quoteName: "Stefan Hildebrand Executive Board Member",
    quoteRole: "German Informatics Society",
    highlights: ["Moved from email to Mattermost to streamline communications", "Self-hosted Mattermost for data sovereignty and GDPR compliance", "Future-proofed collaboration with a highly performant, highly scalable platform"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The German Informatics Society (GI) is Germany’s largest professional association of computer scientists and IT professionals. A nonprofit organization, GI aims to promote the exchange of technological ideas, raise public awareness on relevant topics, and encourage women and young folks to enter technical fields. The society consists of 20,000 German-speaking computer scientists, professors, and students as well as representatives from 250 corporations, including critical infrastructure enterprises like Bayer, IBM, and SAP.",
          "“We want to be the voice for computer science in Germany and the German-speaking region,” says Stefan Hildebrand, an executive board member at GI who leads the organization’s Junior Fellows program and is also a research associate at TU Berlin.",
          "Founded in Bonn, Germany in 1969, GI focuses on the evolution of informatics, pursuing several diverse fields of study, including artificial intelligence, bioinformatics, human-computer interaction, and computer security. The organization — which writes position papers to influence public policy and connects students with prospective employers — is active throughout Germany, with roughly 30 chapters spread out across the country.",
        ],
      },
      {
        heading: "Increasing focus: Reducing email overload with more flexible communication",
        paragraphs: [
          "As a distributed organization committed to advancing the field of informatics, GI requires tight-knit collaboration to fulfill its mission. Hildebrand had been using mailing lists to coordinate with the students in the Junior Fellows program but felt as though the organization had outgrown email as the primary method of communication.",
          "“It works, but it doesn’t work always for everything, and it’s not the fastest option,” Hildebrand says. “Mailing lists don’t allow flexibility. Inboxes are also overloaded these days. We don’t want to get on people’s nerves by sending unsolicited emails that aren’t of interest.”",
          "Since GI covers a broad range of topics, inboxes can become cluttered quickly when conversations occur over email. To solve this problem, the organization needed a new communication solution that enabled members to instantly connect and collaborate with each other whenever they decided to explore new issues.",
          "At the same time, the right solution would also support the creation of multiple teams; ideally, GI would be able to connect its communication platform to the German Chapter of the ACM to enable cross-organizational collaboration between the two organizations.",
        ],
      },
      {
        heading: "Centralizing collaboration & protecting personal data: Using Mattermost to engage a community",
        paragraphs: [
          "During the pandemic, Hildebrand was working for a previous employer and was tasked with finding a collaboration solution his team could use to stay connected while everyone worked from home.",
          "“When COVID-19 hit us in 2020, we needed a new communication tool,” Hildebrand says. “At the time, we didn’t have any experience with internal chat. We started researching the market, and we were bound by very strict data protection rules. So, our solution needed to be very safe and very secure, and ideally self-hosted. That ruled out all options like Slack, which are hosted on other companies’ servers. But Slack’s user interface is less appealing and less quick anyway.”",
          "As part of the process, Hildebrand also investigated Discord and encrypted chat solutions like Riot and Matrix.",
          "“It turned out that there were performance bottlenecks because the encryption would consume a lot of CPU capacity,” he continues. “So, we decided on the high-performance option, and that was Mattermost. We could host it ourselves on-premises, the connection is encrypted with SSL in the web app, and the UI was perfect for our use cases. Mattermost can be hosted on very, very little hardware; it’s very, very efficient and does not need a lot of IT administration.”",
          "Unlike other self-hosted solutions that require heavy IT resources, Mattermost delivers enterprise-grade security and compliance with minimal overhead — a critical advantage for organizations looking to scale securely.",
          "In Hildebrand’s experience, Mattermost was faster and more versatile than other options. Even better, Mattermost was open source — the type of software computer scientists prefer — making it the clear winner.",
        ],
      },
      {
        heading: "Fulfilling their mission: Moving researching forward faster & helping students find jobs",
        paragraphs: [
          "Mattermost enables GI to fulfill its mission of accelerating groundbreaking informatics research, raising awareness about computer science and IT, and influencing public policy. The platform also helps student members communicate with teachers and business professionals from companies like IBM, SAP, Rohde & Schwarz, and Bayer, forming relationships through digital networking.",
          "“Professors and students can meet, chat, and connect via our Mattermost platform,” Hildebrand says. “Students use Mattermost for networking and connections for reference letters, to help with thesis projects, and for informal counseling — like on which courses to take. This is a growing, lived practice.”",
          "Mattermost has already had a tremendous impact on the Junior Fellows students. Looking ahead, Hildebrand plans to roll out the solution across the entire organization, introducing Mattermost Professional Edition to support collaboration at scale with thousands of concurrent users.",
          "“Our experience with Mattermost is so great that we want to also offer it to the whole member group of the German Informatics Society,” Hildebrand explains. “It scales like a charm. Whatever project size you have, you can do it in Mattermost. We can create groups for each topic for discussion and use it as the primary digital networking tool. Once all members have access to Mattermost, we can use it to organize more events with employers — like connected workshops and our annual conference.”",
          "Looking ahead, the organization is planning to begin collaborating with the German Chapter of ACM on their Mattermost instance.",
          "“The question is: How can I engage the users in Mattermost for everything? Because it’s such a great tool that you shouldn’t even use anything else,” he says.",
        ],
      },
    ],
  },
  {
    slug: "heidelberg-university",
    title: "Heidelberg University keeps research teams moving forward with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Heidelberg_University.webp",
    quote: "When you’re [reviewing alerts] manually, at some point, you’ll drown in errors or otherwise won’t be able to find the needle in the haystack to figure out what’s wrong.",
    quoteName: "Sebastian Schmitt Particle Physicist",
    quoteRole: "Electronic Vision(s)",
    highlights: ["Integrates CI/CD, code review, and hardware monitoring systems to make Mattermost a central hub for all information", "Open source availability allows the team to adapt the platform to fit their workflow needs"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "As part of Heidelberg University, the Kirchhoff-Institute for Physics conducts groundbreaking research across a number of different fields, including biophysics, quantum systems, and neuromorphic computing.",
          "Currently, the Electronic Vision(s) group — a team consisting of roughly 40 postdocs, PhDs, graduate students, and technicians — is studying computational neuroscience and neuromorphic computing to build BrainScaleS: a neuromorphic system that tries to replicate what is currently known about information processing in the mammalian brain. BrainScaleS is part of EBRAINS , the research infrastructure developed within the Human Brain Project .",
        ],
      },
      {
        heading: "Helping Researchers Stay Connected and Aligned",
        paragraphs: [
          "Keeping a research group full of scientists who are studying complex problems on the same page is no easy feat. “This is custom hardware, custom software, custom everything,” says Sebastian Schmitt, a particle physicist who’s now focusing on neuromorphic computing. “It requires a lot of communication between members of different teams.”",
          "To speed up communication, the research group had been using Jabber clients and an IRC server to chat in real-time. Over time, they realized those solutions didn’t offer all features, e.g., inline images, files, and other attachments. After reviewing Slack , Gitter, and Rocket.Chat, the group switched to Mattermost, which they host on the university’s infrastructure for added data control and independence.",
          "“Mattermost is by far the best solution,” Schmitt says. “If I had to pick a chat tool for a new team, I would always go with Mattermost.”",
          "Fast-forward to today, and the team has 100 active users, more than 400 public and private channels, and over 550,000 posts they can search through and reference to further their mission. Their Mattermost instance has separate teams that are used for a variety of purposes, including teaching, coordinating research, and collaborating with external users, as well for conference organization and breakout rooms for conference discussion sessions.",
          "Since Mattermost was already in place before COVID-19 hit, Schmitt and his team were able to seamlessly adopt remote work . “It was a smooth transition to working fully remote,” Schmitt explains. “You couldn’t meet for lunch, but you could continue to communicate. There was no disruption. It was mostly business as usual, apart from the on-site work in the labs of course.”",
          "Additionally, the neuromorphic research group uses Mattermost for group communication during conferences. Last year, the team used the REST API to create 200 users from registration data so that they could collaborate while the conference was taking place. “Using Mattermost during the conference was highly successful and will be done again this year,” Schmitt continues.",
        ],
      },
      {
        heading: "Integrating with Monitoring and Alerting Tools and Other Automations",
        paragraphs: [
          "“It’s very nice compared to checking things manually,” Schmitt explains. “When you’re doing it manually, at some point, you’ll drown in errors or otherwise won’t be able to find the needle in the haystack to figure out what’s wrong.”",
          "Additionally, the researchers have integrated Mattermost with Jenkins to accelerate CI/CD pipelines, define using webhooks in Jenkins jobs to report, get experiment results, and receive alerts when builds fail.",
          "The group maintains bridges to other chat services like Discord and Rocket.Chat to allow for a seamless collaboration and automated forwarding of announcements.",
        ],
      },
      {
        heading: "Keeping Complete Control Over Data",
        paragraphs: [
          "For researchers like Schmitt and his team, one of the main draws of Mattermost is the fact that it gives them complete control over their messaging data. “I always feel better when I self-host,” Schmitt says. “It’s my data and I keep control over it.” In fact, this functionality is one of the main reasons the research team selected Mattermost over other alternatives, including Slack.",
          "Mattermost being open source is also an important aspect, since group members are mostly in favor of free software compared to closed-source/proprietary solutions.",
        ],
      },
      {
        heading: "Any last words?",
        paragraphs: [
          "“The documentation is very good, especially for installation and upgrade,” Schmitt concludes. “So, shout out to the documentation team. They do a great job! Also the LaTeX and Markdown syntax are important for scientific communication and work well. If there would be one thing that we would wish for improvement in the short term, it would be the flexibility of the search.”",
          "Though Mattermost already sits at the core of the research group’s workflows, they are continuing to examine additional use cases. Looking ahead, the team hopes to begin incorporating Boards for project management and are always eager to see what Mattermost will offer next.",
          "The positive experience with Mattermost spread across to other groups like Tetzlaff Research Group and the Neuro-inspired Theory, Modeling, and Applications research group and it will be used in the new European Institute for Novel Computing at Heidelberg University.",
        ],
      },
    ],
  },
  {
    slug: "max-planck-digital-library",
    title: "The Max Planck Digital Library uses Mattermost to accelerate research workflows, maintain data sovereignty & ensure compliance",
    hero: "https://mattermost.com/wp-content/uploads/2024/02/Max_Planck@3x.webp",
    quote: "Using Mattermost is completely voluntarily. We have 5,000 users today, and we’re just getting started.",
    quoteName: "Matías Hernández User Support Specialist at Max Planck Digital Library",
    highlights: ["Chose Mattermost for data sovereignty & to ensure compliance with Germany’s strict privacy laws", "Onboarded 5,000 users, with a 3% monthly organic growth rate", "Saved 30% of time previously spent searching for information", "Facilitated seamless knowledge transfer when researchers leave and teams change"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The Max Planck Digital Library (MPDL) — a central institution of the Max Planck Society , one of the world’s premier research institutions — ensures that the more than 25,000 scientists, postdoctoral researchers, and Ph.D. students have the tools they need to accelerate their work.",
          "Headquartered in Germany, the society is a collection of more than 80 institutes spread across the country, each focusing on a different field of study — like high particle physics, biology, solid-state chemistry, and international law. Over the years, researchers from the Max Planck Society have collectively earned 31 Nobel prizes.",
        ],
      },
      {
        heading: "Continuing to move research forward while rapidly transitioning to remote work",
        paragraphs: [
          "The first encounter with Mattermost happened in 2019 when MPDL began hearing from researchers that a communication platform with an emphasis on collaboration was badly needed. During those early days, Mattermost was more like a pet experimental project where the MPDL team was trying to get a feel for the real demand for such a platform.",
          "When COVID-19 appeared in early 2020, many Max Planck facilities shut down to limit the spread of the virus and keep researchers and scientists safe. All of a sudden, having a tool like Mattermost became a top priority across the Max Planck Society and led to the rapid growth of the platform.",
          "“Everyone had to work remotely,” says Matías Hernández, in charge of user support for Mattermost at MPDL. “This was a huge change for everyone and created new problems. How do we stay in contact remotely? How can we keep track of conversations? How can we work as a team?”",
          "At the time, many researchers and scientists were still primarily relying on email and in-person conversations to collaborate; others were using commercial tools such as Slack. To keep research moving forward across a distributed team, MPDL knew they needed to expand the offering of a modern collaboration solution that would enable scientists and students to stay connected while everyone was working from home.",
        ],
      },
      {
        heading: "From data protection to national security: The power of secure collaboration in research",
        paragraphs: [
          "As the MPDL team began searching for a collaboration platform to focus on, they zeroed in on their requirements.",
          "“Our number-one requirement was that it was compliant and compatible with Germany’s strict privacy laws,” Hernández says, adding that they knew an open source solution would be best for their unique situation. “We tend to favor solutions that are open source because of transparency, customization, and the fact that there’s a vibrant open source community behind them.”",
          "After evaluating different solutions, the team ultimately decided that “Mattermost was the clear winner” due to its user-friendliness, ease of implementation, empowered teamwork capabilities, advanced security and compliance features, and the fact they could host it on infrastructure they controlled.",
          "“It was very important that we would be able to install Mattermost on our own servers to adhere to Germany’s privacy laws,” Hernández explains. “If researchers upload documents that can be sensitive for work purposes, those documents need to be stored on servers in Europe. Being able to deploy Mattermost on our own servers was a big selling point because it allows us to have more control over where our data is stored. If we used a proprietary solution, data would go on commercial servers we don’t control. There’s a trust issue there.”",
        ],
      },
      {
        heading: "Rolling out Mattermost across the entire Max Planck ecosystem",
        paragraphs: [
          "Over the last 15 years, Hernández has worn many different hats at Max Planck. After starting as a Ph.D. student researcher, Hernández rose through the ranks, ultimately becoming a group leader in charge of a team of students.",
          "“When I was a group leader, everything was written down by hand the same way it was done for decades,” Hernández says. “I was an early adopter of electronic lab journals and forced my students to start recording experiments digitally.”",
          "Since people often stick to what they know and what’s familiar, not every student was eager to change their approach. But Hernández kept pushing and pushing — and that persistence paid off.",
          "“After two years, a student came to me and said, ‘I would never be able to go back to pen and paper,’” he explains.",
          "Fast-forward to today and Hernández has moved from the research side of the organization to the research management side — an experience that’s given him a unique perspective. Just as he encouraged students to digitize their research workflows, he sees a similar need for teams to take a more modern approach to research and embrace Mattermost.",
          "However, while the MPDL is tasked with ensuring scientists and students have the tools they need to do their best work, none of those tools are mandatory.",
        ],
      },
      {
        heading: "Expanding their relationship with ‘mission-critical’ Mattermost",
        paragraphs: [
          "Collaboration platforms like Mattermost play a crucial role in research institutions by providing a secure and centralized communication hub. They safeguard research findings by ensuring that sensitive information is shared only among authorized individuals, facilitating data encryption and access control.",
          "Additionally, these platforms support strategic planning and adaptability by enabling real-time collaboration, efficient information sharing, and streamlined decision-making processes — all while safeguarding intellectual property through secure access and version control mechanisms.",
          "Currently, MPDL is using Mattermost Professional; MPDL has internally rebranded Mattermost with the name Minerva Messenger to highlight the customized features the team has implemented in Mattermost for its researchers (Minerva is the Roman goddess of wisdom who is represented in Max Planck’s institutional logo).",
          "With 5,000 users, Hernández believes the organization is at an inflection point and that it’s time to upgrade to Enterprise Edition to get access to advanced features like special permissions , which would enable them to create local system admins at each institute, high availability clusters , and the ability to create custom Playbooks. Hernández believes these features will bring adoption closer to 20,000 users.",
          "“We hope that we can make the move to the Enterprise license this year,” Hernández says. Until then, “we’re very happy with Mattermost. It’s mission-critical.”",
        ],
      },
    ],
  },
  {
    slug: "medincell",
    title: "MedinCell gives pharmaceutical researchers a secure collaboration workspace with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/MedinCell.webp",
    quote: "Whether it’s the IT department discussing troubleshooting steps to resolve a problem faster, or a private channel of friends organizing a birthday celebration, the usability and ease of access makes Mattermost our go-to messaging tool at MedinCell.",
    quoteName: "Kyle Kingsley IT Manager",
    quoteRole: "MedinCell",
    highlights: ["Centralized IT systems admin with integrations with tools like Jira", "Supports over 200 users on over 1000 channels", "Seamlessly transitioned their organization to remote work while keeping teams connected"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "MedinCell is a pharmaceutical company, headquartered in Montpellier, France. The company aims to make better medicine for all with its unique research and innovation combined with a business model that focuses on collaboration. MedinCell has developed a technology for long-acting injectable drugs to ensure the optimal therapeutic dose is delivered over the course of days, weeks, or months. This ensures patients comply with a treatment’s regimen, currently a major issue in many therapeutic areas.",
          "The MedinCell mission — Better Medicine for All — focuses on global availability and inclusion. Partnerships and collaboration are pillars of this mission. To ensure access, MedinCell works with both for-profit and nonprofit organizations in collaboration with other pharmaceutical companies, physicians, academic institutions, and foundations. Collaboration is central to everything they do, and Mattermost is a key component in how they accomplish their mission.",
        ],
      },
      {
        heading: "Connecting development teams",
        paragraphs: [
          "Mattermost is deployed company-wide at MedinCell for internal communications. Each project has a dedicated channel with a cross-functional team from each department. Drug development is a highly collaborative process, and teams use Mattermost to confer on results, solve problems, and provide status updates. The complete, searchable message history makes it easy for team members to track conversations and easily find information. Decisions are made more quickly, and sharing knowledge about the development of products is more efficient.",
          "MedinCell uses Mattermost to help employees stay connected socially as well. Many channels are dedicated to non-work topics so employees can discuss shared interests, hobbies, and even organize birthday celebrations.",
          "The Mattermost platform at MedinCell has nearly 200 users and over 75% of them are active daily. To date, the company has created 1,033 channels and posted over 2 million messages. Mattermost is so tightly integrated into how the team works that — when remote work became mandatory due to the pandemic — the transition was relatively easy with almost no disruption.",
        ],
      },
      {
        heading: "Effective security controls",
        paragraphs: [
          "Like others in the pharmaceutical industry, MedinCell takes security very seriously. The ability to self-host Mattermost in their own data center was a critical factor in selecting the platform. MedinCell employees can share information with complete control over their own data, giving them full confidence that sensitive data is being protected.",
        ],
      },
      {
        heading: "Keeping the infrastructure running",
        paragraphs: [
          "Mattermost is central to both IT systems administration and supporting the efficient use of R&D equipment. The MedinCell research lab supports complex equipment that is shared across teams. Sophisticated hardware and software research systems need to be available and efficiently shared. Mattermost is used to update the teams on equipment status and notify personnel to fix problems quickly when they arise.",
          "The IT department relies heavily on Mattermost to track issues, resolve incidents, and communicate status. Employees can post issues to a central channel and receive fast responses and timely updates.",
          "Integrations are an important part of the MedinCell collaboration strategy. The IT ticketing system is integrated with Jira to automatically create and start tracking every issue. Any user can also launch a Zoom video conference for everyone in a channel with a single click or slash command.",
        ],
      },
      {
        heading: "Next steps for MedinCell",
        paragraphs: [
          "As an open source product, Mattermost is highly aligned with the MedinCell philosophy of creating value and sharing it with everybody. As their usage continues to expand, the company plans to incorporate additional integrations and in the future look to incorporate Incident Collaboration and playbooks for more complex workflows . Shared Channels are also being evaluated as a way to securely increase collaboration with the many partners they work with.",
        ],
      },
    ],
  },
  {
    slug: "netfoundry",
    title: "NetFoundry uses Mattermost with OpenZiti for zero trust internal and external communications",
    hero: "https://mattermost.com/wp-content/uploads/2024/01/NetFoundry@3x.webp",
    quote: "Mattermost is great for internal communications, partner communications, and out-of-band communications.",
    quoteName: "Philip Griffiths VP & head of global business development and alliances at NetFoundry",
    highlights: ["Moved from Slack to Mattermost to align with core principles and gain complete control over sensitive messaging data", "Improved internal communications, partner communication, and out-of-band communications", "Integrated with BrowZer to bring zero trust Mattermost instances to customers for secure collaboration"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "NetFoundry is a software company committed to keeping the world secure via a free, open source zero trust overlay network called OpenZiti that’s compatible with any workload across any cloud, including AWS, Azure, and Oracle, as well as in on-premises environments. Founded in 2017 and headquartered in Charlotte, N.C., NetFoundry also offers CloudZiti, a SaaS solution built on OpenZiti that delivers a managed open source zero trust networking platform. The company has a team of about 60 employees spread out across the world.",
        ],
      },
      {
        heading: "Needing a collaboration platform that aligned with core principles",
        paragraphs: [
          "As a remote-first startup, NetFoundry requires a resilient and adaptable collaboration platform to ensure employees stay connected and keep projects moving forward.",
          "The company had been using Slack to collaborate, but the tool didn’t align with NetFoundry’s core principles of permissionless innovation, belief in open source, and security by design. Further, NetFoundry wanted to have data sovereignty over such mission-critical information. So the team began searching for a new solution that aligned with their requirements.",
          "“Robust communications solutions are critical to our ability to collaborate and ultimately serve our customers as best as possible,” says Philip Griffiths, vice president and head of global business development and alliances at NetFoundry.",
          "At the same time, NetFoundry also wanted a collaboration solution they could self-host and manage internally so they could maintain complete control over their data and also champion their own products.",
          "“We wanted to be able to test it on use cases we had control over,” Griffiths says. “Internal usage of tools is important to figure out extra functions and bugs that make our products better for our customers without them experiencing any pain.”",
        ],
      },
      {
        heading: "Choosing Mattermost as an open source Slack alternative",
        paragraphs: [
          "While researching their options, the NetFoundry team came across Mattermost, the secure collaboration hub for technical teams. After studying the platform, they agreed that Mattermost had relative parity with Slack’s features. More importantly, Mattermost aligned with the company’s core principles:",
        ],
      },
      {
        heading: "Collaborating securely with internal and external partners wherever they are",
        paragraphs: [
          "Mattermost serves as NetFoundry’s central collaboration hub that keeps its distributed team connected across 178 channels, enabling team members and external partners to work together securely and productively according to their own schedules.",
          "“We are a remote-first organization with people across North America, Europe, India, and more,” Griffiths says. “While we have clusters, great asynchronous communication is paramount to success. Mattermost is great for internal communications, partner communications, and out-of-band communications .”",
          "With an open source collaboration hub powering its operations, NetFoundry can rest comfortably knowing it has a messaging solution that can grow alongside it while accommodating its unique requirements, whatever they are.",
          "At the same time, NetFoundry is positioned to meet the growing demand for zero trust architecture. “We can integrate our various external teams over our own zero trust network so that Mattermost stays ‘invisible’ while interacting with the external world,” Griffiths explains.",
          "NetFoundry aims to help make the world safer, and both Mattermost and zero trust architecture aid them in that mission.",
          "“If you look at the current state of IT, it’s woeful — huge attacks happen all the time,” Griffiths says. “We want to make the world secure by default to stop the perennial cyberattacks and drag on the world economy as we become even more dependent on digital and interconnected systems.”",
        ],
      },
    ],
  },
  {
    slug: "nonprofit-cert",
    title: "Empowering cyber resilience: How a nonprofit CERT safeguards mission-critical infrastructure",
    hero: "https://mattermost.com/wp-content/uploads/2024/03/SektorCERT@3x.webp",
    quote: "Nothing seemed to work as well as Mattermost — Mattermost just looked like the perfect choice for what we needed to do.",
    quoteName: "Nonprofit CERT CEO",
    highlights: ["Chose Mattermost for self-hosting and complete control of data", "Migrated away from email, using Mattermost to launch discussions instead of broadcasting information", "Facilitated seamless knowledge sharing with persistent messaging history and file storage"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This nonprofit computer emergency response team (CERT) helps local organizations stay abreast of the latest developments in the realm of cyber incidents, cyberattacks, and cyber threat actors. While the nonprofit has a relatively small team, it maintains a digital community of 2,000 cyber professionals who come from hundreds of organizations across a range of different critical sectors to discuss cybersecurity tips, strategies, and best practices .",
          "For example, in the event a vendor gets compromised by a cyberattack, the community will come together to determine the best course of action for those impacted.",
        ],
      },
      {
        heading: "Looking for a secure & self-sovereign collaboration solution",
        paragraphs: [
          "When the founding team began planning to launch the CERT, they knew building a robust, highly collaborative online community was most important to mission success.",
          "“We do a lot to help collaboration between many different infrastructure providers, so getting a digital platform to facilitate this was really important for us to begin with,” the CERT’s CEO says.",
          "Since members of the founding team were familiar with Slack and had used it at previous organizations, they initially considered the cloud-based SaaS collaboration solution.",
          "“However, because we are the CERT for critical infrastructure, one of the requirements for people to feel at ease with sharing information was that it was kept within our country,” the CEO continues. “So we needed something that could be hosted locally and wasn’t being controlled by another entity and started looking for a Slack alternative.”",
        ],
      },
      {
        heading: "Selecting Mattermost, ‘the perfect choice,’ for open source nature & self-hosting capabilities",
        paragraphs: [
          "The nonprofit began asking other peer CERT groups what they were using for collaboration, and many of them recommended that the organization look into Mattermost. Based on these recommendations and their own due diligence searching for potential solutions online, the CERT ultimately decided to choose Mattermost for collaboration.",
          "“There were a few options, but nothing seemed to work as well as Mattermost — Mattermost just looked like the perfect choice for what we needed to do,” the CEO explains. “The primary reason was getting something that could be hosted locally, which left out a lot of the cloud-only providers. We also needed something that could scale not just from a technical perspective but also from a management perspective.”",
          "Additionally, the nonprofit was drawn to Mattermost’s open source nature — which is “great in itself.”",
          "“There’s also a really strong community around Mattermost, so in the event you run into certain issues, there’s a robust community to tap into to get ideas about how to solve various problems,” the CEO says. “That’s also a really strong case for Mattermost, at least for us.”",
        ],
      },
      {
        heading: "Building a collaborative community of cyber professionals working toward a common goal of protecting mission-critical infrastructure",
        paragraphs: [
          "With Mattermost as a central collaboration hub, the CERT has enabled roughly 1,000 professionals from hundreds of organizations — many of which are infrastructure providers — to build a tight-knit, supportive community built on a foundation of cybersecurity and knowledge-sharing.",
          "“Our members are companies within critical infrastructure,” the CEO says.",
          "Since a small team can only do so much, the CERT has leveraged Mattermost’s advanced permissions to make certain community members administrators.",
          "“We let other people be team admins or channel admins in some of the channels we have so that the community can help manage this with us,” the CEO continues. “That’s definitely something that works well and allows it to scale a little bit larger than what our own team could handle. A thousand people obviously know a lot more than a small team does, so when we can activate our community because of Mattermost, there’s a whole lot more value to be had from our organization than what we would be able to provide on our own.”",
          "While email is an inherent part of any business, it’s far too easy to get overwhelmed by too many messages. At the same time, while emails may be perfectly fine for disseminating information, they’re not the best medium for facilitating lively conversations.",
          "“Email is not a very secure way of communicating,” the CEO says. “Email is also communication that is broadcasted and received. When we post something on Mattermost, it’s the start of a discussion. Instead of an email just being information that we put in the hands of other people, when we take the same information and post it in Mattermost, it spawns a discussion thread where people ask questions and get answers, and they collaborate about how to deal with this new threat and what to do about it. A lot of different people can pitch in and give ideas and show others how their experience has been in dealing with a certain threat. Suddenly, instead of us pushing information, the information now triggers a whole community in terms of how to work together to overcome these challenges.”",
        ],
      },
    ],
  },
  {
    slug: "nri",
    title: "NRI gives operational efficiency a boost with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/NRI.webp",
    quote: "After migrating to Mattermost, we have reduced the number of meetings needed to collaborate or solve problems.",
    quoteName: "Hiroshi Noto Engineer",
    quoteRole: "NRI",
    highlights: ["Partners with Mattermost as System Integrator, APAC, to develop solutions for DevOps workflows", "Connects 13,000 employees in 14 countries with Mattermost", "Deployed Mattermost customer using AWS Elastic Container Services to connect to other AWS services", "Integrates with Jira, Confluence, and Zoom, as well as custom-built integrations"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "NRI (Nomura Research Institute, Ltd.) is a global consulting firm that helps organizations around the world adopt modern technologies, like Atlassian products and Mattermost, as part of a broad range of business solutions. With headquarters in Tokyo, Japan, NRI has 13,000 employees across 61 offices located in 14 countries. NRI’s journey to discovering, adopting, and championing Mattermost began with solving its own need for a secure, scalable messaging and collaboration platform.",
          "One of NRI’s technical brands is called aslead , which provides a range of engineering services that focus on DevOps, team management, and knowledge base development. Aslead’s solutions use popular developer tools and services to help customers streamline their team operations and CI/CD workflows. As part of their scope of work, the aslead team also focuses on developing internal solutions to enhance the productivity and efficiency of NRI’s globally distributed employees.",
        ],
      },
      {
        heading: "The search for a solution with compliant data handling",
        paragraphs: [
          "Prior to adopting Mattermost, NRI was using HipChat as its company-wide messaging platform. When Atlassian announced end-of-life plans for HipChat, NRI’s aslead team began looking for a replacement solution. Any new messaging platform needed to maintain compliance with J-SOX regulations and company IT policies that govern data handling.",
          "The aslead team explored a number of messaging solutions. A few team members had heard about Mattermost, so they included the platform in their evaluation process. After careful review, the team found that Mattermost was the only solution that met NRI’s enterprise requirements. The platform could give NRI’s IT team full ownership and control over their messaging data and deployment. In addition, Mattermost could scale seamlessly to thousands of concurrent users, it was easy to configure for multiple teams, and it offered an enjoyable, Slack-like user experience.",
          "“Mattermost had everything we needed in a messaging platform—security, scalability, and usability—it was the best choice for us.”",
        ],
      },
      {
        heading: "Migration to Mattermost began with a custom implementation",
        paragraphs: [
          "In two weeks, one engineer implemented and customized Mattermost to meet the needs of NRI’s unique system architecture. The engineer took an unusual approach in that he deployed a Mattermost cluster to the company’s server running on Amazon Web Services using AWS Elastic Container Services (ECS). This setup connected to other AWS services, such as Elastic File System (EFS), Aurora Relational Database Service (RDS), AWS Backup, as well as the Elasticsearch service.",
          "Initially, the team rolled out a beta trial of Mattermost to approximately 100 users in one department. After this proved successful, they migrated 1000 users off of one HipChat server to Mattermost. In a final step, the team migrated 6000 users from six HipChat servers over a two month period. Now, the majority of NRIs employees are using Mattermost to communicate with colleagues and business partners around the world.",
        ],
      },
      {
        heading: "Mattermost integrations help accelerate workflows",
        paragraphs: [
          "The aslead team was particularly interested in Mattermost’s integration with Atlassian and other DevOps tools to help them accelerate their workflows. Mattermost’s Jira plugin sends Jira ticket updates directly to collaboration channels, so team members can take immediate action. Similarly, the team can also send and configure Confluence notifications from within a channel. The Zoom plugin allows the team to start audio and video Zoom conferences directly in Mattermost. These integrations, along with the Mattermost mobile app, enable easier access to information and collaboration tools for all team members, regardless of their location.",
          "As a result of switching to Mattermost, NRI has been able to improve efficiency across the organization. The platform serves as a searchable central repository of information that gives employees self-service access to the information they need without having to ask for help. When they do need support, posting a message in a dedicated channel in Mattermost results in much faster response times than an email or phone call.",
          "“After migrating to Mattermost, we have reduced the number of meetings needed to collaborate or solve problems.”",
        ],
      },
      {
        heading: "NRI offers Mattermost-powered solutions to their own customers",
        paragraphs: [
          "With the success of Mattermost across the global NRI organization, the aslead team saw an opportunity to include the platform in their customer offerings . NRI has since become a valued systems integration partner of Mattermost, working with enterprise customers to deploy, manage, extend, and customize the platform to meet a wide range of business needs. The aslead team packages Mattermost with Atlassian’s Jira and Confluence to deliver their Team Management solution, as well as their upcoming Agile solution. No doubt NRI’s expertise with Mattermost will inspire even more ways to serve their customers in the future.",
          "Japanese speakers can learn more about NRI’s partnership with Mattermost here:",
        ],
      },
      {
        heading: "About NRI",
        paragraphs: [
          "Founded in 1965, NRI (Nomura Research Institute, Ltd.) is a leading global provider of system solutions and consulting services, including management consulting, system integration, and IT management and solutions for financial, manufacturing, retail and service industries. Clients partner with NRI to expand businesses, design corporate structures, and create new business strategies. NRI has over 13,000 employees in its offices globally, including New York, London, Tokyo, Hong Kong and Singapore.",
        ],
      },
    ],
  },
  {
    slug: "operation-allies-refuge",
    title: "Mattermost enables mission success in Operation Allies Refuge",
    hero: "https://mattermost.com/wp-content/uploads/2025/09/Mattermost-operation-allies-refuge-1.webp",
    quote: "In the largest air evacuation in U.S. history, Mattermost delivered measurable improvements to readiness, resilience, and cybersecurity — demonstrating its value as a mission-critical collaboration platform for today’s defense environment.",
    highlights: ["Faster access to Aircrew Departure Papers using Mattermost resulted in more on-time departures and 1,453 digital mission paper requests analyzed", "79.5% of USAF personnel reported Mattermost enhanced their ability to operate", "93% of Mattermost users said they would recommend the platform", "Without Mattermost, 64% of aircrew members would have used mobile device communications outside of government control to manage essential communications"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "In August 2021, Air Mobility Command (AMC) led Operation Allies Refuge (OAR) — the most complex airlift operation in U.S. history. In just 17 days, more than 124,000 American citizens, allies, and vulnerable Afghans were evacuated from Afghanistan.",
          "Mattermost’s performance during Operation Allies Refuge (OAR) highlighted how the collaboration platform contributed to increased Airmen success:",
        ],
      },
      {
        heading: "An Operation Defined by Urgency",
        paragraphs: [
          "According to research published by the Air Force Institute of Technology (AFIT) , OAR was the first known widespread instance of asynchronous communication to conduct tactical command and control (C2) within AMC.",
          "Prior to the operation, AMC communications implemented traditional reliance on telephones, radios, and physical exchange of printed mission paperwork, ultimately straining the pace of operations. Crews lacked timely access to ADPs — flight plans, weather, routing — while command posts struggled to manage overloaded phone lines. Unofficial communication tools like WhatsApp and Signal often filled the gap, raising security concerns and introducing the potential for data spillage.",
        ],
      },
      {
        heading: "Mattermost Improved Information Access in High-Stakes Environments",
        paragraphs: [
          "To close these gaps and accelerate the operation, AMC leveraged Mattermost, a secure, Government-hosted collaboration platform approved for controlled unclassified information (CUI). Built on open-source code and deployed via DoD Platform One , Mattermost enabled secure, reliable collaboration capabilities, including:",
        ],
      },
      {
        heading: "Accelerated Access to Mission Data",
        paragraphs: [
          "Airmen used Mattermost to request and receive ADPs much earlier than previous paper-based processes allowed. In nearly half of all missions (48%), aircrews accessed their ADPs more than four hours before takeoff — giving them critical time to prepare. In a small but decisive number of cases, crews requested flight plans less than an hour before takeoff, something only possible with electronic delivery.",
          "A regression analysis of 1,453 digital ADP requests made as part of OAR found a strong positive correlation between early ADP access via Mattermost and on-time departures. The optimal request window — about 4.4 hours before takeoff — aligned closely with standard crew alert timelines, unlocking efficiency without operational disruption.",
        ],
      },
      {
        heading: "Trusted by Operators at the Tactical Edge",
        paragraphs: [
          "The strongest validation of Mattermost’s impact on the OAR outcome came from the Airmen using the system under the pressure of an active operation:",
          "Additional successful performance indicators from survey feedback included:",
        ],
      },
      {
        heading: "Prepared for the Future of Mission Operations Collaboration",
        paragraphs: [
          "OAR proved that secure, asynchronous collaboration can change mission outcomes. Mattermost bridged the gap between command centers and the tactical edge, giving aircrews earlier access to critical mission data, accelerating departure timelines, and reducing reliance on insecure apps.",
          "Just as importantly, its Government-hosted deployment preserved data sovereignty and provided a foundation for future AI-enabled decision support, as structured digital text is more readily mined than voice calls.",
        ],
      },
      {
        heading: "Learn more",
        paragraphs: [
          "For a closer look at real-world applications of Mattermost across the DoD, read more about how AMC leveraged Mattermost to conduct the largest global readiness exercise in history with Mobility Guardian 2023, and how Platform One uses Mattermost to streamline cross-organization communication securely. Learn more about Mattermost Enterprise Advanced , Mattermost’s latest product designed specifically for complex, high-security multi-domain operations.",
          "For more information on Operations Allied Refuge and how Command and Control is evolving in the digital age, refer to this paper published by the Air Force Institute of Technology (AFIT) .",
          "Image: A U.S. Air Force Airman waits to taxi a C-17 Globemaster III aircraft for departure during Operation Allies Refuge at Ramstein Air Base, Germany, Aug. 27, 2021. Source.",
          "The appearance of U.S. Department of Defense (DoD) visual information does not imply or constitute DoD endorsement.",
        ],
      },
    ],
  },
  {
    slug: "osiris-rex",
    title: "Connecting OSIRIS-REx's global team for innovative research while maintaining data sovereignty",
    hero: "https://mattermost.com/wp-content/uploads/2024/03/University_AZ@3x.webp",
    quote: "Because it’s so difficult to communicate from the clean room and get information out, we are using Mattermost as our exclusive means of communication.",
    quoteName: "Carina Bennett Project manager and software manager for OSIRIS-REx",
    highlights: ["Chose Mattermost as the secure collaboration solution for the OSIRIS-REx mission", "Maintained data sovereignty to protect highly sensitive mission data", "Fostered team connection through open conversations and brainstorms"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "OSIRIS-REx is NASA’s first asteroid sample return mission that aims to help humanity learn more about the genesis of our existence. Specifically, the mission seeks to determine whether asteroids that collided with Earth billions of years ago were responsible for bringing water and other key ingredients for life to our planet.",
          "The mission involved building a spacecraft, flying it to an asteroid called Bennu, identifying a spot to extract a sample from it, and returning to Earth. The spacecraft launched in 2016, the sample was collected in 2020, and a small capsule containing part of the asteroid returned to Earth on September 24, 2023. Today, the spacecraft remains in space, continuing on to visit another asteroid named Apophis by the end of the decade.",
          "The OSIRIS-REx team of roughly 500 professionals is largely based in Tucson, Arizona at the University of Arizona, with colleagues distributed across the world.",
        ],
      },
      {
        heading: "Collaborating globally to deepen our understanding of the universe",
        paragraphs: [
          "Moving a sophisticated project like OSIRIS-REx forward requires close coordination between multiple stakeholders. At the beginning of the mission, the OSIRIS-REx team began setting up infrastructure that would guide their efforts and help them accomplish their objectives.",
          "“Our development team wanted to have a tool to communicate between themselves that wasn’t email,” says Tony Ferro, a system administrator at the University of Arizona who’s tasked with managing IT for OSIRIS-REx. “Email can be a bit random when it comes to how many email chains there are and how long they get, so they were looking at other options.”",
          "As part of a NASA mission, security is top of mind for the OSIRIS-REx team.",
          "“We do have information that is both export-controlled as well as proprietary,” Ferro continues. “The regulations being what they are, we needed to be able to control who has access to our discussions. “",
        ],
      },
      {
        heading: "Maintaining control of mission-critical data & automating processes with Mattermost",
        paragraphs: [
          "To protect sensitive data and best support researchers, Ferro and his team began looking for a collaboration solution that they could host locally on their own servers.",
          "“We had a lot of concerns about version control,” Ferro says. “We wanted to make sure we could test everything before we upgraded to a new version.”",
          "After surveying the market and exploring their options — including Slack, which the team wasn’t comfortable with due to it being a SaaS solution they had no control over — the OSIRIS-REx team ultimately decided that Mattermost was the ideal solution for their collaboration needs.",
          "“We looked at a couple of products and Mattermost won,” Ferro explains, adding that — even as a well-funded NASA project — the team is always concerned with the bottom line, and Mattermost fit the budget pretty well. “Initially, some of us older folks had trouble getting into the Mattermost scheme of things, but many of us have gotten on the bandwagon now, and as the mission has progressed, more and more people started using it.”",
          "After deploying Mattermost in 2015, one of the first things the developer team did was leverage APIs to automate recurring processes. For example, when the spacecraft would send a packet of scientific data down to Earth, the team would automatically receive a notification.",
          "“We would get data streams from the spacecraft with images,” Ferro says. “We had processes that took the data stream and broke it apart into images, spectra, telemetry, and so forth. Then the images and spectra were processed, flat-fielded, and calibrated, and the team would use Mattermost to notify each other about what the status was.”",
        ],
      },
      {
        heading: "Accelerating groundbreaking research with a secure collaboration solution",
        paragraphs: [
          "If you think that sending a spacecraft to outer space to collect a sample from an asteroid is a difficult task, you’d be correct.",
          "“We expected a big boulder, with dirt on it, and sort of a beach-like appearance on the surface,” Ferro says. “As we got close enough to Bennu, it became very clear that it wasn’t smooth; it was full of rocks.”",
          "All of a sudden, instead of wondering where they should land, it became of matter of where they could land and “take a sample that won’t destroy the spacecraft by hitting rocks.”",
          "“The spacecraft is designed with a long stick on the end of it and what looks like an old-fashioned car air filter at the end of it,” Ferro explains. “The way it works is we would hit the surface and shoot nitrogen down around the air filter, which would throw up bits of the asteroid into the filter, which would basically catch it.”",
          "Overcoming this challenge required tight-knit coordination and moving with speed.",
          "“The main mission went from what place is the most scientifically interesting to what place can we safely collect a sample,” Ferro continues. “In this massive rock field, we needed to find an area that was smooth enough that a) the spacecraft could actually get close enough to the surface without hitting a rock and b) the sample head could accurately hit the surface to collect rocks.”",
        ],
      },
    ],
  },
  {
    slug: "pramacom",
    title: "Pramacom uses Mattermost to accelerate workflows & keep Czech citizens safe",
    hero: "https://mattermost.com/wp-content/uploads/2023/07/Pramacom-hero.webp",
    quote: "If you value your data and privacy and aim for high reliability and general ease of use, then self-hosted Mattermost is by far the best option out there.",
    quoteName: "Jan Šídlo Head of IT at Pramacom",
    highlights: ["Chose Mattermost as a secure, self-hosted messaging solution to protect data and speed up incident response", "Keeps sensitive messaging data and images protected, with zero security incidents and zero major outages in five years", "Ensures GDPR compliance, as well as compliance with Czech government directives"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Pramacom is a communications company based in the Czech Republic that is tasked with operating and maintaining a digital radio network that’s part of an integrated rescue system police, firefighters, first responders, and army units use to ensure the safety of Czech citizens. The company, which was founded in 1991, aims to provide reliable, end-to-end encrypted voice and data services that can serve several organizations at the same time.",
        ],
      },
      {
        heading: "The search for a reliable and secure real-time messaging solution",
        paragraphs: [
          "The Pramacom team works out of two sites, a headquarters and an operating room, both located in Prague. Every day, Pramacom employees need to communicate with technicians who are working in different locations or out in the field.",
          "“I can send an email, but that takes a long time,” says Tomáš Zeman, and IT technician at Pramacom. “I could also use WhatsApp or Messenger, but that’s not secure. If I send sensitive messages, documents, or pictures on those services, I’m afraid where that data is ultimately going to be stored.”",
          "In the event data was hosted where it shouldn’t be or someone intercepted it, Pramacom could face penalties under the General Data Protection Regulation (GDPR) and Czech law, Zeman explains.",
          "Ahead of the May 2018 rollout of the GDPR, the Pramacom team began looking for a secure messaging solution that they could host on their own servers. “The Czech government doesn’t want us storing data in the cloud,” Zeman continues.",
          "As Pramacom searched for a solution, they considered Jabber and Zulip before ultimately deciding that Mattermost was the best option for their sensitive work.",
          "“Self-hosting is the main reason we started with Mattermost — that and the fact that Mattermost has quite a good UI design which makes it easy to understand and use,” says Jan Šídlo, an IT technician at Pramacom. “Most of the solutions out there don’t offer a self-hosted option, and the few ones that do are not really that user-friendly or reliable.”",
        ],
      },
      {
        heading: "Accelerating workflows after a smooth, seamless deployment",
        paragraphs: [
          "After choosing Mattermost as their messaging solution, Šídlo deployed it for the IT team and then quickly added more and more people to their instance.",
          "“Implementation was really easy and natural,” Šídlo continues. “The technology just works.”",
          "With Mattermost facilitating quick communications between departments and teams, the Pramacom team is able to work more productively. For example, if a technician is in a bay station and wants to show someone at headquarters a problem they’re working on, they can quickly send a picture over Mattermost; in the past, they’d have to physically move from one place to another to collaborate.",
          "“It’s much quicker to write something on Mattermost,” Zeman says.",
          "To speed up workflows, Pramacom is using bots and webhooks to integrate apps, including internal monitoring tools and GitLab . “We also recently started to use Calls and screen-sharing as a means of replacing Zoom and Teams, and I love it,” Šídlo says.",
          "Additionally, Šídlo likes Mattermost’s “hassle-free licensing, which makes it way easier to integrate company-wide as you don’t have constantly check license count and overuse.”",
        ],
      },
      {
        heading: "Speeding up incident response with integrations",
        paragraphs: [
          "Since Pramacom must ensure that critical infrastructure is operational around the clock, the team needs to respond as quickly as possible to any kind of incident, including network outages.",
          "“We use Mattermost as a frontend to our monitoring system,” Šídlo explains. “This enables us, NOC, and technicians to be alerted when something is happening almost immediately, which is perfect for keeping critical communications up and running. We can also immediately comment on these messages and synchronize across teams.”",
          "In five years, the Pramacom team hasn’t had any issues with their primary communication tool that is used for general chat and file-sharing.",
          "“Mattermost just works,” Šídlo says. “It may sound funny at first, but we deal with many systems, and Mattermost is the one that I almost never had to troubleshoot or try to fix some problem. Since the documentation is quite good, I’ve never had to contact support for Mattermost, which is impressive.”",
        ],
      },
      {
        heading: "Improving data security and keeping critical data protected",
        paragraphs: [
          "With Mattermost, Pramacom and its partners have the peace of mind that comes with knowing sensitive messaging data is safe and compliant at all times.",
          "“I’ve never had any problems with Mattermost security, which is a huge deal,” Šídlo explains. “Our Mattermost server is facing the internet, and so far, we’ve never had a single security incident. Such an achievement is nothing to scoff at, as it’s incredibly difficult to pull off.”",
          "Any advice for other companies searching for a new collaboration solution?",
          "“Mattermost is definitely the way to go,” Šídlo concludes. “If you value your data and privacy and aim for high reliability and general ease of use, then self-hosted Mattermost is by far the best option out there.”",
        ],
      },
    ],
  },
  {
    slug: "rocky-linux",
    title: "Rocky Linux gives 5,000 open source contributors a collaboration hub with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Rocky_Linux.webp",
    quote: "We liked the fact that we could host Mattermost on our own infrastructure, granting us sovereignty over our data and the flexibility to architect our infrastructure how we see fit.",
    quoteName: "Jordan Pisaniello Community Manager",
    highlights: ["Mattermost Starter Edition, with High Availability configuration", "Integrated with Matterbridge, Welcome Bot", "5,300+ active users", "Used as centralized communication and collaboration hub for a globally distributed community", "Looking to extend the platform further with CI integration and more"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Rocky Linux is a community enterprise operating system that aims to achieve one-for-one, bug-for-bug compatibility with the leading enterprise Linux distribution, Red Hat Enterprise Linux. The project is the brainchild of Gregory Kurtzer, one of the founders of CentOS, who launched Rocky Linux in response to Red Hat announcing the discontinuation of the CentOS project.",
          "The goal of the project is simple: making an enterprise-grade distribution of Linux more accessible for the community at large instead of putting it behind a paywall. The first generally available version of Rocky Linux was released on June 21, 2021.",
        ],
      },
      {
        heading: "Functionality Fit for a Growing Organization",
        paragraphs: [
          "After Red Hat announced the end of CentOS, Kurtzer encouraged anyone interested in contributing to another similar project to join a Slack channel and become part of the growing community around Rocky Linux.",
          "“We were bombarded,” explains Jordan Pisaniello, Rocky Linux’s community manager, about the sheer volume of folks interested in the project right off the bat. “We knew it wasn’t the greatest platform to scale with us.”",
          "The Rocky Linux team ultimately decided that they needed a messaging and collaboration solution that delivered a modern feature set and could connect with standard IRC and maintain an IRC presence. They chose Mattermost due to its rich feature set and Matterbridge , which connects Mattermost to other messaging platforms, including IRC.",
          "“We liked the fact that we could host Mattermost on our own infrastructure, granting us sovereignty over our data and the flexibility to architect our infrastructure how we see fit,” says Pisaniello. The Rocky Linux team currently runs Mattermost on a multi-node, high-availability configuration.",
          "“LDAP integration was another must-have since we provide Rocky Account Services for identity management across various platforms,” adds Pisaniello.",
          "Additionally, the customization functionality made Mattermost feel more in tune with the Rocky Linux brand by providing an easy mechanism for tailoring the login page.",
        ],
      },
      {
        heading: "An Extensible Platform Built by an Engaged Community",
        paragraphs: [
          "On top of scalability concerns, the Rocky Linux team felt that using a proprietary solution went against the project’s underlying philosophy and commitment to openness and transparency.",
          "“We’re working on something that is open source and community-driven. Using a proprietary platform doesn’t fit with the goals and visions that we have for the project,” Pisaniello continues.",
          "Mattermost’s extensibility and flexible integrations with a core set of third-party developer tools were crucial for Rocky Linux.",
          "“Anybody in our community can develop their own plugins to use with Mattermost—either those that are specific to our project or those that can be reused by other projects as well,” Pisaniello explains, adding that Rocky Linux has plans to put out tooling of its own. “Being able to open support tickets just like anybody else can, speak with developers, look at GitHub issues—it’s great.”",
          "“It’s helped extend our reach,” Pisaniello says. “People prefer other platforms, and we wanted to be able to include all the platforms we possibly could to have everyone communicate in one place.”",
          "Additionally, the Rocky Linux team has been early adopters of Boards , the open source alternative to project and task management solutions that helps teams achieve milestones using a familiar kanban board structure.",
        ],
      },
      {
        heading: "A Centralized Community Hub with Thousands of Users",
        paragraphs: [
          "Ahead of Rocky Linux’s first release, their Mattermost instance had 5,300 users, and that number was growing steadily. “It’s been our main community hub for collaboration,” Pisaniello says.",
        ],
      },
    ],
  },
  {
    slug: "rte",
    title: "RTE uses Mattermost to manage France's power grid and reduce outage response time",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/RTE-1.webp",
    quote: "Feedback showed that we needed to strengthen our reporting procedures with tools dedicated to the crisis.",
    quoteName: "Rémi Bayle Operations Manager",
    highlights: ["RTE uses Mattermost to collaborate in real time during electrical outages and other incidents", "Mattermost lets operational teams in the field send and receive notifications directly on their phones, streamlining communication and keeping incident information centralized", "RTE has reduced its time to manage incidents and improve responsiveness during outages by using Mattermost"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "It all started at the end of July 2018, following a fire in an electrical substation that led to a power outage for citizens and a major train station in Paris. Because of the time of year, Réseau de Transport Électrique (RTE), the manager of France’s electrical infrastructure, found itself in the middle of a controversy about its responsiveness.",
          "“Feedback showed that we needed to strengthen our reporting procedures with tools dedicated to the crisis,” says Rémi Bayle, Operations Manager for RTE. Indeed, the organization of communication by phone and email did not allow the management of situations that require a high level of reactivity from several teams. Mattermost was the solution adopted for its simplicity of use and data control . Responders are notified directly on their phone through the application, and information about the incident is sent back and centralized, reducing the use of telephony.",
          "Today, thanks to Mattermost and its collaboration system, RTE has reduced the time to manage incidents and therefore the impact on its customers. Organized into seven regions, each part of the network is managed by operational teams who pilot the power in the network in real-time.",
          "As soon as an incident occurs, all employees involved in the company’s crisis management are notified in real-time through Mattermost, in order to establish immediate collaboration with the various teams, for example:",
          "For this critical organization in France, Mattermost enables real-time collaborative management of incidents and faster response to internal and external requests. RTE continues its collaboration with Mattermost with the use of Playbook to review and improve processes and Calls to manage crisis meetings.",
        ],
      },
    ],
  },
  {
    slug: "spamhaus",
    title: "Spamhaus uses Mattermost to accelerate communication and strengthen online trust & safety",
    hero: "https://mattermost.com/wp-content/uploads/2024/10/Spamhaus@3x.webp",
    quote: "Without Mattermost, we’d have distinct teams talking amongst themselves, with minimal cross-functional conversations. Over time, Mattermost has enabled us to bridge that gap.",
    quoteName: "Natalia Duarte Product Marketing Manager at Spamhaus",
    highlights: ["Protected sensitive messaging data with a self-hosted platform", "Consolidated communications to keep globally distributed teams connected", "Removed information silos with everyone working from the same platform"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Spamhaus is an independent organization dedicated to strengthening trust and safety online. By collecting and analyzing 7 billion data signals every day, Spamhaus protects 4.5 billion mailboxes globally. This is achieved by sharing IP and domain reputation signals, which are used for cyber threat intelligence, email protection, and network security, among other things. Founded in London, Spamhaus is powered by a distributed team of 50 employees spread out across the world.",
        ],
      },
      {
        heading: "Moving away from email: Seeking a secure collaboration solution for real-time communication",
        paragraphs: [
          "As a provider of threat intelligence data on cybercriminal activity, Spamhaus operates in a challenging, sometimes threatening environment. This means keeping employees safe and sensitive data secure is a priority.",
          "The organization has no physical co-working office locations, relying predominantly on remote communication. At first, Spamhaus used email for most of its communication and collaboration, creating different email lists for specific conversation subjects. However, this approach soon revealed its own set of challenges. “People would get confused about which distribution list to send to, which led to lost communications, incorrect answers, and delays to processing and remediation,” explains Matthew Stith, industry liaison at Spamhaus, whose role is to build relationships within the industry and strengthen online trust and safety.",
          "To overcome the limitations of collaborating over email, the Spamhaus team began looking for a communication solution they could use to facilitate quick, real-time conversations. After using a combination of solutions — including Threema and Skype — the team realized they needed a single platform that could be deployed across the entire organization.",
          "“Having to use multiple programs to communicate within a team isn’t ideal,” Stith continues.",
          "But finding a single source communication solution wasn’t the only concern.",
        ],
      },
      {
        heading: "Self-hosting Mattermost: Leveraging open source for data security",
        paragraphs: [
          "While the challenges of email communication may have been the trigger, Spamhaus’ chief priority was finding a self-hosted solution that would give them complete control over the security of their sensitive data. “From day one, it was clear we required a system that could be hosted within our own infrastructure,” Stith explains. “We explored Slack, but that’s hosted, and we didn’t want our conversations stored on their servers. We wanted to have full control of our systems and data.”",
          "In addition to self-hosting capabilities, Spamhaus needed a solution with advanced security controls, like multi-factor authentication. And as an organization that uses various open source tools, the team was interested in an open source communications solution with a robust community, like Mattermost.",
          "“We wanted something with a community,” Stith says. “We provide data on behalf of Spamhaus Project, where community is a fundamental part of their ethos, subsequently making it important to Spamhaus Technology.”",
          "After evaluating their options, the team deployed Mattermost in 2017, and they haven’t looked back since.",
        ],
      },
      {
        heading: "Swift action, secure communication for mission-critical operations strengthening internet safety",
        paragraphs: [
          "As the leading authority on IP and domain reputation, data integrity is essential to Spamhaus. When an issue arises, it’s critical to identify and address the root cause swiftly. By using Mattermost, the engineering team can immediately inform the front-facing commercial team if a problem occurs. As a result, Spamhaus has significantly improved its ability to remediate issues efficiently.",
          "“The time to remediate is much quicker now because we can have these rapid discussions.” Stith continues, “With this comes constant improvement to the quality of our data provisioning. Mattermost becomes critical to collaborate and be able to work across a number of teams to get to the necessary outcome fast.” Due to data sensitivity, some conversations may need to be confined to dedicated channels. By using the self-hosted Mattermost instance, Spamhaus knows that sensitive discussions (and data) will stay protected.",
        ],
      },
      {
        heading: "Breaking down silos: Enhancing team visibility and streamlining collaboration",
        paragraphs: [
          "Spamhaus has integrated Mattermost with several tools, automatically feeding important updates to specific channels to keep the team aligned. This includes internal tools for notifications, GitLab for ticketing, monitoring systems, statistics, and their authentication system for single sign-on (SSO).",
          "“Without Mattermost, we were unable to effectively communicate beyond one-to-one conversations,” Stith says. “We needed something that we could integrate with to improve visibility and internal sharing amongst our team members.”",
          "Instead of communicating across email threads or siloed group chats — both of which lack visibility across the broader team — Mattermost has increased visibility and helps Spamhaus shatter communication barriers and geographical constraints.",
          "“Mattermost has helped us get around siloed working — the one-to-one and one-to-few communications,” says Natalia Duarte, product marketing manager at Spamhaus. “Without Mattermost, we’d have distinct teams talking amongst themselves, with minimal cross-functional conversations. Over time, Mattermost has enabled us to bridge that gap. The impact has been innumerable opportunities — more diverse perspectives contributing to a range of topics, providing much improved outcomes.”",
          "One of Mattermost’s valuable features for Spamhaus is the ability to automate information sharing from other systems via API. “An example is pushing timely data on network abuse from our internal systems into Mattermost, providing wider visibility and allowing relevant teams to take swift action — critical in our world.” Duarte explains.",
          "As a fully distributed team, Spamhaus employees are often on the go. Whether someone is conducting market research in the field, exploring a new potential partnership (or dropping the kids off at school!), the Mattermost mobile app enables them to quickly and easily communicate from any location.",
        ],
      },
    ],
  },
  {
    slug: "tulip",
    title: "Elevating retail resilience: How Tulip slashed incident response times by 50% to 60% with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2024/05/Tulip@3x.webp",
    quote: "I’ve never seen a messaging tool taking on a mission-critical level. A messaging tool is just treated as a messaging tool; if it works, fine, if it doesn’t work, fine. But for us, Mattermost has to work. We are at that stage with this tool.",
    quoteName: "Amir Jawaid Information Technology Lead at Tulip",
    highlights: ["Deployed self-hosted Mattermost for data sovereignty", "Reduced incident resolution time 50% to 60% with dedicated War Room channel", "Improved team alignment with effective communication"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Tulip is a SaaS provider that builds software that accelerates digital transformation for brick-and-mortar retailers. The company aims to become a one-stop shop for retailers, engineering a cloud-based point-of-sale (POS) system and other turnkey solutions for clienteling, fulfillment, and inventory management. Founded in 2013 and headquartered in Toronto, Tulip is a remote-first organization with 133 employees spread out across the world.",
        ],
      },
      {
        heading: "Searching for a Slack alternative: Looking for fast adoption and granular data control",
        paragraphs: [
          "In 2018, Tulip began looking for a new messaging solution for internal communication and collaboration. The company had been using Slack but the CEO decided they needed a Slack alternative due to escalating costs and a lack of control over data retention.",
          "“We wanted a record of all of our chats, all of our groups chats, and all of our individual chats,” says Amir Jawaid, information technology lead at Tulip.",
          "As Tulip began researching its options, the team narrowed down its criteria. The right solution would have a similar look and feel as Slack; the company was growing rapidly at the time, and they wanted to deploy something they could be sure employees would adopt right away. Additionally, Tulip wanted a solution that could host on their own servers so they would have more control over administering the platform and their data. On top of this, the company also wanted a system that could integrate with other critical tools they relied on.",
          "“There was the cost factor as well,” Jawaid continues. “We wanted something that was cost-effective and able to meet our needs with regards to integrations.”",
        ],
      },
      {
        heading: "Choosing Mattermost: A familiar, feature-rich, self-hosted collaboration solution that connects to mission-critical tools",
        paragraphs: [
          "As the team continued searching for a solution, they considered Skype for Business and Google Chat.",
          "“We didn’t have any major platforms running on Microsoft and we didn’t want to go that route,” Jawaid explains. “We wanted to stay Google-centric or pick something neutral. We looked at Google Chat because our email system was there. But Google Chat was very much in its infancy; we didn’t classify it as a corporate tool.”",
          "Since the company continued to scale, the team was eager to make a decision. “We wanted to bite the bullet and just have an alternate solution rather than having to live with a solution that we really didn’t want,” Jawaid says.",
          "After researching more options, Tulip came across Mattermost during a Google search. Liking what they saw — a Slack-like interface, self-hosting capabilities, and extensibility via webhooks, plugins, and integrations — the team decided to deploy Mattermost, and they haven’t looked back since.",
          "“Mattermost was a strong candidate on our shortlist,” Jawaid continues. “It checked all the boxes and the decision was almost like a no-brainer.”",
        ],
      },
      {
        heading: "Beyond messaging: Supporting mission-critical ChatOps workflows & reducing incident resolution times",
        paragraphs: [
          "Mattermost solved Tulip’s immediate need for a self-hosted collaboration solution that was easy to learn and gave them control over their messaging data.",
          "“Mattermost is really helping in effective communication flow,” Jawaid explains. “This really enables us to be on the same page at any given moment in time. Thanks to Mattermost, we rarely have communication gaps because everything is disseminated to the right people at the right time.”",
          "While the company uses Mattermost for group chats, one-on-one-chats, and general announcements, the collaboration hub has become a foundational piece of their operations over the last six-plus years.",
          "“Mattermost is heavily integrated into our environment,” Jawaid says, adding that the collaboration hub is integrated with Confluence, Jira, GitLab, Pingdom, and PagerDuty. “Mattermost has grown to be a mission-critical tool.”",
          "Tulip has a dedicated War Room channel, which is essential for managing real-time emergencies. As Jawaid points out, the channel is monitored continuously, ensuring that all incidents are met with a swift and coordinated response.",
          "“We have a War Room channel in which ongoing customer-facing emergencies are dealt with in real-time,” Jawaid explains. “It’s monitored 24/7/365. It doesn’t matter what time of day or what time of year it is. If there’s any ongoing emergency, the relevant team comes in, they collaborate, they hop on meetings. So Mattermost has become mission-critical; it’s very important for our organization right now.”",
        ],
      },
    ],
  },
  {
    slug: "turk-telekom",
    title: "How Türk Telekom's SOC Team Eliminated Tool Fragmentation and Boosted Productivity by 40% with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2026/07/Turk-Case-study-Hero.jpg",
    quote: "Having a single, shared channel for incident response and security workflows has driven productivity gains of 40% or more.",
    quoteName: "Ömer Berk SOC & Incident Response Manager",
    quoteRole: "Türk Telekom",
    highlights: ["Replaced fragmented tools with self-hosted Mattermost", "Reduced redundant email communication by 30%", "Boosted SOC productivity by 40% or more"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "As Türkiye’s largest integrated telecommunications company, Türk Telekom is at the forefront of the country’s digital transformation initiatives. Guided by the principle of “accessible communication for everyone,” the company aims to bring fiber connectivity to every city in Türkiye and already has a fiber network exceeding 550,000 kilometers.",
        ],
      },
      {
        heading: "Mitigating threats and preventing cyberattacks",
        paragraphs: [
          "At Türk Telekom, the Department of Cyber Attack & Defence performs security operations center (SOC) operations and is responsible for identifying and mitigating threats across cyberspace.",
          "“As an incident response and SOC team, our mission is to proactively detect, respond to, investigate, and prevent cyberattacks,” explains Ömer Berk, incident response specialist at Türk Telekom. “Within the MSSP [managed security service provider] environment, the SOC team provides 24/7 analysis of alerts and detects cyberthreats.”",
          "To fulfil its mission and keep internal and customer networks secure, the department requires tight-knit coordination. Since the team operates on a hybrid, shift-based model, they also need a private searchable knowledge base that enables employees to stay informed about what their colleagues did during the previous shift, keeping the team aligned.",
          "“In cybersecurity operations, tracking tasks and sharing details of each case are crucial,” Berk says. “Each team member must report on and collaborate with colleagues regarding cyber incidents. Team members must also track all tasks against SLA timeframes. Missing those windows is not an option because it directly impacts our clients and puts contracts at risk.”",
        ],
      },
      {
        heading: "Finding an enterprise-grade collaboration platform built for security",
        paragraphs: [
          "In 2021, the department was relying on WeKan for kanban-style project management and BookStack for internal wikis, but the tools weren’t built for the security and scale demands of an MSSP environment. To streamline collaboration while strengthening security, the team began evaluating enterprise-grade alternatives.",
          "“We evaluated several collaboration platforms, compared the features of each, and ultimately decided to use Mattermost,” Berk continues, adding that the team opted to self-host Mattermost in their on-premises environment.",
          "Key factors in the decision included Mattermost’s task tracking, kanban-style Boards, secure file-sharing, and extensive integration capabilities — features that mapped directly to the team’s operational requirements, Berk explains.",
          "“Every task and its severity level is documented directly in Mattermost, where colleagues share updates across Channels and Boards so that other team members can acknowledge them,” Berk says.",
          "Türk Telekom ultimately deployed two separate Mattermost servers — one for the in-house team and another for the MSSP team — to maintain clear operational boundaries between internal and client-facing operations.",
        ],
      },
      {
        heading: "Accelerating SOC workflows, increasing productivity 40%, and improving operational resilience",
        paragraphs: [
          "For the last five years, Türk Telekom has been using Mattermost to power day-to-day work. Team members use Mattermost to track tasks via Boards and Channels, securely share files and reports, collaborate with team members via real-time audio and screen sharing through Mattermost Calls, and manage projects by creating channels for related tasks.",
          "“Mattermost gives teams a single place to share important information, which saves time, accelerates business processes, and boosts workplace productivity,” Berk says.",
          "Since adopting Mattermost, the department has cut duplicate communications and redundant email threads by 30%. All operational details are stored securely in Mattermost and are instantly searchable — giving SOC professionals the full context they need at the start of every shift.",
          "“Daily tasks are easily tracked via Mattermost,” he adds. “Every day, team members add details about the actions they take on cases. It makes it much easier to communicate with colleagues.”",
          "In addition to productivity gains, Mattermost also keeps the team’s work in one place, eliminating the constant context switching between disconnected tools that fragments focus and slows response times. The company has also been able to increase control over their sensitive collaboration data while speeding up crisis management — improving operational resilience.",
          "“Mattermost has become central to how our department handles incident response and security workflows,” Berk says. “Critical reports, case details, and investigative findings all flow through Mattermost, and our department also has private conversations there, too. Having a single, shared channel for incident response and security workflows has driven productivity gains of 40% or more.”",
        ],
      },
    ],
  },
  {
    slug: "us-department-of-defense",
    title: "USAF improves mission information availability by 4x with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/USAF_PlatformOne.webp",
    quote: "Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.",
    quoteName: "- Anonymous Director",
    highlights: ["Rolled out Mattermost on Platform One to 48,000 DoD employees in one week", "Used for Controlled Unclassified Information (CUI) communications and intra-organizational collaboration", "Improved pre-flight communication for USAF and reduced fuel consumption"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Platform One is the centralized team providing DevSecOps/Software Factory Managed Services with baked-in security to the U.S. Department of Defense (DoD) programs. The program is aimed at rapid software development, delivery, and deployment for defense missions, with a strong emphasis on using open source software wherever possible . Leveraging open source allows Platform One to inspect source code, evaluate security risks, and adapt solutions to meet the DoD’s strict compliance requirements.",
          "From feature tickets to flight plans, information sharing is an essential part of daily operations across the U.S. Department of Defense. But with a highly distributed team and heavy compliance and security demands, sharing communication and documents can become a significant challenge. After using the free Community version of Mattermost for a year and receiving positive feedback from users, Platform One upgraded to Mattermost Enterprise to help support a large-scale modernization of communication and collaboration across the Department.",
        ],
      },
      {
        heading: "Enabling secure, reliable cross-organizational communication",
        paragraphs: [
          "While the Platform One team initially used the tool internally to chat and track development tasks, Mattermost’s high availability and scalability were essential. Scalability became critical during the COVID pandemic, during which the DoD had to move to a fully remote workforce almost overnight. “Our goal is to promote collaboration across organizations within the Department of Defense,” says Mitchell Moushon, Product Manager for KBR . “We chose Mattermost for its ability to scale.”",
          "Moushon also says that introducing the DoD to Mattermost on Platform One helped centralize communication on secure channels. Platform One deployed Mattermost on-premise, giving them complete data sovereignty while ensuring that no third parties could access DoD data. “Before there was an official, approved chat channel, people were sharing information on Slack, Signal, and WhatsApp. While those are all encrypted, we wouldn’t have been able to track them if there was a security leak. Now that we have an official DoD-approved chat application, we have seen a mass migration to Mattermost.”",
          "Organizations across the DoD now trust Mattermost on Platform One to share information, ask questions, and collaborate. “I’ve had conversations that include people from the Navy, Space Force, and Air Force—all talking in the same channel,” says Moushon. “We’re all working on the same problems, and Mattermost is great for getting people to collaborate across different organizations.”",
        ],
      },
      {
        heading: "Open source extensibility to scale repetitive workflows",
        paragraphs: [
          "Mattermost’s plugin infrastructure has also been essential for the Platform One team, as they wanted the ability to integrate Mattermost with other tools in the team’s workflow. Many groups within the DoD use plugins like Jira and Matterpoll as part of their day-to-day communication. Additionally, the Platform One team has built custom integrations and plugins to meet the needs of different users within the DoD.",
          "One custom plugin is designed to help onboard large groups of people to Mattermost at once. “If you’re onboarding 2,000 people because your unit just merged, it’s a hefty workload both for the people who want to get on the team and the team admin,” says Paul Qualls, a software engineer for Platform One. “This slash command allows users to request access to private team channels that are visible but private. This plugin lets the team admin approve access quickly, and we’ve gotten great reviews from that.”",
        ],
      },
      {
        heading: "Remote access for Air Mobility Command field operations",
        paragraphs: [
          "The Air Mobility Command (AMC) is among the most active users of Mattermost at the Department of Defense. Before deploying Mattermost on Platform One, flight teams for AMC didn’t have a way to access critical documents on mobile devices. Pilots and crews could only access these documents from computers at designated offices, which was sometimes impossible when they were in the field during an operation. With the introduction of Mattermost, flight crews can securely access documents from mobile devices anywhere in the world.",
          "“Often [flight crews] are disconnected from command and control. They operate in a grey area where timely information is critical but difficult to obtain,” says Major John Cockburn . “AMC, by its very nature, is a command filled with remote teams. Those teams need secure, global command and control across a resilient and distributed network that is not behind a common access guard wall.”",
          "Mattermost has also helped streamline pre-flight preparations for the AMC. Flight and mission paperwork must pass through four or five different offices for approval before every flight, which can be a slow and time-consuming process. With Mattermost, the flight manager or command can share flight plans and mission packages directly to aircrew on their electronic flight bag approximately two hours before every flight, giving flight crews additional time before the mission to study and prepare. Previously, aircrews only received this information about 30 minutes before flights.",
          "“For us, using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane,” from a Director at an Air Force Base. By using Mattermost to increase the efficiency of pre-flight activities, AMC has reduced fuel consumption and saved money.",
        ],
      },
      {
        heading: "Next steps for the Department of Defense",
        paragraphs: [
          "Moving forward, organizations across the DoD plan to expand usage to increase collaboration across teams; Space Force plans to onboard all 20,000 employees to Mattermost on Platform One, for example.",
          "The Platform One team is continuing to work on leveraging Mattermost’s app framework to develop new integrations and functionality to help scale the adoption of Mattermost across different organizations within the DoD.",
        ],
      },
    ],
  },
  {
    slug: "wikimedia-deutschland",
    title: "Wikimedia Deutschland chooses self-hosted Mattermost for secure collaboration and data sovereignty",
    hero: "https://mattermost.com/wp-content/uploads/2026/04/Wiki-Case-study-Hero.webp",
    quote: "Since implementing Mattermost as our sole internal chat tool, we’ve seen a significant improvement in cross-team communications.",
    quoteName: "Timo Göttel Head of Internal IT",
    quoteRole: "Wikimedia Deutschland",
    highlights: ["Moved to Mattermost to centralize communication", "Self-hosted Mattermost for data sovereignty and GDPR compliance", "Extended Mattermost with plugins to accelerate workflows"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "In a media landscape driven by recurring subscriptions and paywalls, the international Wikimedia movement is committed to becoming the essential infrastructure of the ecosystem of free knowledge by 2030. Wikimedia’s global strategy is built on two pillars: knowledge as a service , becoming a platform that provides knowledge in various formats and building tools for allies, and knowledge equity , focusing on knowledge and communities that have so far been excluded by structures of power and privilege.",
          "“Thousands of volunteers and nearly 200 Wikimedia chapters are working together to turn this vision into reality,” explains Timo Göttel, head of internal IT at Wikimedia Deutschland , a Wikimedia chapter founded in 2004. With over 100,000 members, the group is committed to helping achieve Wikimedia’s 2030 goals. “In doing so, we take responsibility here in Germany for ensuring that a democratically organized Wikimedia movement develops in a fair and sustainable way.”",
        ],
      },
      {
        heading: "Needing a central collaboration space to tie the community together",
        paragraphs: [
          "Wikimedia Deutschland is headquartered in Berlin, where its core team is based. The chapter also supports a global community of volunteers who contribute remotely to Wikimedia projects.",
          "As Wikimedia Deutschland grew, the limitations of email and Google Chat became increasingly apparent. While both tools had their place — email was ideal for broadcasting announcements and Google Chat was great for quick conversations — neither offered the persistence and structure that a large, distributed team requires. The chapter needed a central collaboration platform to keep its community connected and aligned.",
        ],
      },
      {
        heading: "Choosing self-hosted Mattermost for ease of use and security",
        paragraphs: [
          "In 2017, Wikimedia Deutschland began evaluating secure collaboration solutions that were both easy to use and capable of protecting sensitive data. After considering several solutions, including Rocket.Chat and XMPP services, the team decided that Mattermost was the best fit for their needs.",
          "“Mattermost stands out as the premier open source chat solution for internal communications,” Göttel continues. “Dependable, self-hosting options and a user-friendly NGO licensing model further enhance its appeal.”",
          "By self-hosting Mattermost, Wikimedia Deutschland maintains complete data sovereignty — making it easier to ensure GDPR and Schrems II compliance.",
          "Wikimedia Deutschland was also drawn to the platform’s “robust plugin system,” which allows the chapter to customize Mattermost “to meet the diverse needs” of its teams. In particular, HR uses the Remind plugin to stay on top of recurring events, developers use the GitHub plugin to track pull requests and code reviews, and staff members use Matterpoll to start quick polls without leaving the platform.",
          "The team also cited Mattermost’s well-maintained repositories as a key factor, giving them confidence that security vulnerabilities are promptly identified and resolved.",
        ],
      },
      {
        heading: "Strengthening communication and building a stronger community committed to keeping knowledge free",
        paragraphs: [
          "Mattermost has become the central hub for day-to-day communication, complementing email for chapter-wide announcements.",
          "“Since implementing Mattermost as our sole internal chat tool, we’ve seen a significant improvement in cross-team communications,” Göttel says. “We collaborate within and across teams, request assistance, conduct polls, send reminders, and share music, funny stories, and news about events, like an upcoming concert, which allows staff members to connect with like-minded colleagues over personal interests.”",
          "Looking ahead, Wikimedia Deutschland plans to deepen its use of Mattermost’s plugin ecosystem to further streamline workflows across teams.",
          "“There is still room for improvement in efficient communication patterns that can be addressed through Mattermost,” he explains, pointing to ongoing opportunities to deepen how the organization uses the platform.",
          "Göttel currently recommends Mattermost to organizations interested in increasing team productivity and keeping sensitive data safe.",
          "“We recommend self-hosting Mattermost for organizations that prioritize open source, data sovereignty, and strong usability,” he concludes.",
        ],
      },
    ],
  },
  {
    slug: "worldline",
    title: "Worldline creates a collaborative culture to a global team with Mattermost",
    hero: "https://mattermost.com/wp-content/uploads/2023/06/Worldline.webp",
    quote: "Mattermost is the easiest way possible to get people to collaborate on anything.",
    quoteName: "Antoine Neveux Software Engineer",
    quoteRole: "Worldline",
    highlights: ["Centralized fragmented communications across multiple tools onto Mattermost", "Fostered a collaborative culture for a globally distributed team", "Integrates with GitLab and other DevOps tools"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "For over 45 years, Worldline has delivered innovative payment and transactional services to merchants, banks, public transport operators, government agencies, and industrial companies around the world. In 1973, the company won the first card transaction processing contract and has stayed on the cutting edge of the payment industry ever since. Headquartered in France, Worldline has 12,000 employees working in more than 30 countries around the world. The company generated upwards of €2.4 billion in revenue in 2019.",
          "Mattermost gives Worldline a central collaboration space that its distributed team uses to find information, organize projects, and speed up development workflows using the Mattermost GitLab plugin .",
          "Antoine Neveux, a developer advocate who’s been with Worldline for a decade, was part of the initial team that started using Mattermost in 2015—before it was bundled with GitLab Omnibus . Fast-forward to today, and 3,000 Worldline employees are now on the company’s Mattermost server spread across more than 500 teams.",
        ],
      },
      {
        heading: "Solving a problem Worldline didn’t even know existed",
        paragraphs: [
          "Prior to Mattermost, Worldline was using tools like Microsoft Lync, Skype for Business, and BlueKiwi to handle internal business communications—not to mention lots of emails, too. According to Neveux, Lync and Skype are primarily used for one-to-one conversations and small group chats. And while BlueKiwi posts would occasionally get some responses, they wouldn’t spark discussions.",
          "“It was the same as a mailing list,” Neveux explains. “People would post and maybe you’d get reactions, but never a conversation.”",
          "As Worldline began to explore other messaging options, they considered using Slack. But due to the company’s strict security requirements, they couldn’t use a public SaaS service since they needed to maintain complete control over all sensitive data.",
          "So, they searched for a Slack alternative and found Mattermost.",
          "“Since Mattermost was an open source Slack alternative, we thought it would be a great product to have—even if it wasn’t part of GitLab at the time,” Neveux says. Due to its open source nature, “we saw how easy it was to integrate with other tools.”",
          "Initially, Mattermost served small development teams and was only used by developers and technical people. Over time, it’s grown to become a major collaboration space that the globally distributed company relies on every day, complementing existing communications tools with its capacity of handling large groups and teams conversations.",
        ],
      },
      {
        heading: "Creating a worldwide collaborative culture",
        paragraphs: [
          "At first, Neveux and his team were the only people using Mattermost, and they really enjoyed it because it delivered several benefits to these developers, including:",
          "Once GitLab began shipping Mattermost in GitLab Omnibus, Worldline rolled the solution out with GitLab for the entire organization.",
          "“Adoption went crazy,” Neveux explains. “Most devs switched over right away” due to the way Mattermost and GitLab make development faster .",
          "As users began moving to Mattermost, people started creating small teams and channels that had 10 or 20 people in them. Over the years, those numbers have changed significantly.",
          "“Now, it’s bigger and bigger teams,” Neveux continues. “Our biggest channel has 2,100 people in it. We went from small teams where people were talking to people they already knew to a massive instance with thousands of people, most of whom you don’t know. Mattermost has helped us bring a global company together in one place.”",
          "In the past, when Worldline workers had questions, they’d generally go to people they knew and ask them directly. That approach takes time and revolves around the other person’s availability.",
        ],
      },
    ],
  },
];

export function getCaseStudyCopy(slug: string): CaseStudyCopy | undefined {
  return CASE_STUDY_PAGES.find((s) => s.slug === slug);
}
