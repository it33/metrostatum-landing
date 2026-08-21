import { useEffect } from "react";

/** Scroll to the URL hash after navigation (header offset handled by scroll-mt on targets). */
export function useHashScroll() {
  useEffect(() => {
    const go = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    const t = window.setTimeout(go, 40);
    window.addEventListener("hashchange", go);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", go);
    };
  }, []);
}
