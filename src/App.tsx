import { useEffect, useState } from "react";
import { LandingPage } from "@/components/landing/landing-page";
import { AboutPage } from "@/components/landing/about-page";
import { CustomersPage } from "@/components/landing/customers-page";
import { ContentPage } from "@/components/landing/content-page";
import { PAGE_INDEX } from "@/content/page-registry";

/**
 * Hash-based routing for reliable GitHub Pages support.
 * Routes:
 *   #/ or #              → landing
 *   #/about              → about
 *   #/customers | #/success-stories → customers
 *   #/platform/... etc.  → content pages from PAGE_INDEX
 */
function getRoutePath(): string {
  const raw = (window.location.hash || "#/").replace(/^#\/?/, "").toLowerCase();
  return (raw.split("?")[0] || "").replace(/\/+$/, "");
}

export function App() {
  const [path, setPath] = useState(getRoutePath);

  useEffect(() => {
    const onHash = () => {
      setPath(getRoutePath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (!path) return <LandingPage />;
  if (path === "about") return <AboutPage />;
  if (path === "customers" || path === "success-stories") return <CustomersPage />;

  const page = PAGE_INDEX[path];
  if (page) return <ContentPage page={page} />;

  // Unknown route → home
  return <LandingPage />;
}
