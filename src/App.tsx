import { useEffect, useState } from "react";
import { LandingPage } from "@/components/landing/landing-page";
import { AboutPage } from "@/components/landing/about-page";

/**
 * Hash-based routing for reliable GitHub Pages support (no 404 SPA hacks).
 * Routes: #/  or #  → landing
 *         #/about   → about page
 */
function getRoute(): string {
  const raw = (window.location.hash || "#/").replace(/^#\/?/, "").toLowerCase();
  return raw.split("?")[0]?.split("/")[0] || "";
}

export function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "about") return <AboutPage />;
  return <LandingPage />;
}
