import { useEffect } from "react";

/** Scroll to the first matching element id after a hash-route navigation. */
export function useSectionScroll(rest: string | undefined) {
  useEffect(() => {
    if (!rest) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" } as ScrollToOptions);
      return;
    }
    const hyphen = rest.replaceAll("/", "-");
    const last = rest.split("/").pop() || rest;
    const aliases: Record<string, string> = {
      "federation-cross-domain": "federated",
      federation: "federated",
      "zero-trust-information-controls": "information-controls",
      "information-controls": "information-controls",
      "human-machine": "sovereign-ai",
      integrations: "integrations",
    };
    const candidates = [aliases[hyphen], aliases[last], hyphen, last, rest].filter(
      (x, i, a): x is string => Boolean(x) && a.indexOf(x) === i,
    );
    const go = () => {
      for (const id of candidates) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
    };
    const t = window.setTimeout(go, 80);
    return () => window.clearTimeout(t);
  }, [rest]);
}