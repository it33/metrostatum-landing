import { useEffect, useState } from "react";
import { LandingPage } from "@/components/landing/landing-page";
import { AboutPage } from "@/components/landing/about-page";
import { CustomersPage } from "@/components/landing/customers-page";
import { PlatformPage } from "@/components/landing/platform-page";
import { EcosystemPage } from "@/components/landing/ecosystem-page";
import { SolutionsPage } from "@/components/landing/solutions-page";
import { IndustriesPage } from "@/components/landing/industries-page";

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
        if (splitRoute(prev).root !== splitRoute(next).root) {
          window.scrollTo(0, 0);
        }
        return next;
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const { root, rest } = splitRoute(path);

  if (!root) return <LandingPage />;
  if (root === "about") return <AboutPage />;
  if (root === "customers" || root === "success-stories") return <CustomersPage />;
  if (root === "platform") return <PlatformPage rest={rest} />;
  if (root === "ecosystem") return <EcosystemPage rest={rest} />;
  if (root === "solutions") return <SolutionsPage rest={rest} />;
  if (root === "industries") return <IndustriesPage rest={rest} />;

  return <LandingPage />;
}
