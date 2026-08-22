import { useEffect, useState } from "react";
import { LandingPage } from "@/components/landing/landing-page";
import { AboutPage } from "@/components/landing/about-page";
import { CustomersPage } from "@/components/landing/customers-page";
import { PlatformPage } from "@/components/landing/platform-page";
import { EcosystemPage } from "@/components/landing/ecosystem-page";
import { SolutionsPage } from "@/components/landing/solutions-page";
import { IndustriesPage } from "@/components/landing/industries-page";
import { PartnerMicrosoftPage } from "@/components/landing/partner-microsoft-page";
import { PartnerOraclePage } from "@/components/landing/partner-oracle-page";
import { CaseStudyPage } from "@/components/landing/case-study-page";
import { IntegrationsPage } from "@/components/landing/integrations-page";
import { IntegrationDetailPage } from "@/components/landing/integration-detail-page";
import { ContactSalesPage } from "@/components/landing/contact-sales-page";
import { NationalSecurityPage } from "@/components/landing/national-security-page";
import { PartnersPage } from "@/components/landing/partners-page";
import { PartnerDetailPage } from "@/components/landing/partner-detail-page";
import { rememberSourcePage } from "@/lib/contact-intent";

/**
 * Hash-based routing for GitHub Pages.
 *   #/                         → home
 *   #/about                    → about
 *   #/customers | #/success-stories → customers
 *   #/platform[/section]       → platform page, scroll to section
 *   #/ecosystem[/…]            → ecosystem page
 *   #/solutions[/…]            → solutions page
 *   #/industries[/…]           → industries page
 */
function getRoutePath(): string {
  const raw = (window.location.hash || "#/").replace(/^#\/?/, "").toLowerCase();
  return (raw.split("?")[0] || "").replace(/\/+$/, "");
}

function splitRoute(path: string): { root: string; rest?: string } {
  const i = path.indexOf("/");
  if (i === -1) return { root: path };
  return { root: path.slice(0, i), rest: path.slice(i + 1) };
}

export function App() {
  const [path, setPath] = useState(getRoutePath);

  useEffect(() => {
    const onHash = () => {
      const next = getRoutePath();
      setPath((prev) => {
        if (prev !== next) {
          window.scrollTo(0, 0);
        }
        rememberSourcePage(next);
        return next;
      });
    };
    window.addEventListener("hashchange", onHash);
    rememberSourcePage(getRoutePath());
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const { root, rest } = splitRoute(path);

  if (!root) return <LandingPage />;
  if (root === "about") return <AboutPage />;
  if ((root === "customers" || root === "success-stories") && rest) {
    return <CaseStudyPage slug={rest} hashRoutes />;
  }
  if (root === "customers" || root === "success-stories") return <CustomersPage />;
  if (root === "platform") return <PlatformPage rest={rest} />;
  if (root === "ecosystem" && rest?.startsWith("partners/microsoft")) return <PartnerMicrosoftPage />;
  if (root === "ecosystem" && rest?.startsWith("partners/oracle")) return <PartnerOraclePage />;
  if (root === "ecosystem") return <EcosystemPage rest={rest} />;
  if (root === "solutions" && rest?.startsWith("national-security")) {
    const sub = rest.split("/").slice(1)[0];
    return <NationalSecurityPage hashRoutes initialSection={sub} />;
  }
  if (root === "solutions") return <SolutionsPage rest={rest} />;
  if (root === "industries") return <IndustriesPage rest={rest} />;
  if (root === "integrations" && rest) return <IntegrationDetailPage slug={rest} hashRoutes />;
  if (root === "integrations") return <IntegrationsPage hashRoutes />;
  if (root === "partners" && rest) return <PartnerDetailPage slug={rest} />;
  if (root === "partners") return <PartnersPage />;
  if (root === "contact-sales" || root === "contact") return <ContactSalesPage />;

  return <LandingPage />;
}
