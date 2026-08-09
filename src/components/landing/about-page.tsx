import { useState, useEffect } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { RESOURCE_CARD_IMAGES } from "./resource-card-images";

const CONTACT = "https://mattermost.com/contact-sales/";
const base = import.meta.env.BASE_URL;

type Leader = {
  name: string;
  title: string;
  bio: string;
  vanity?: string;
  photo?: string;
  initials: string;
};

function linkedInUrl(vanity: string) {
  return `https://www.linkedin.com/in/${vanity}`;
}

let linkedInScriptPromise: Promise<void> | null = null;
function ensureLinkedInBadgeScript() {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as unknown as { LIRenderAll?: () => void };
  if (w.LIRenderAll) return Promise.resolve();
  if (!linkedInScriptPromise) {
    linkedInScriptPromise = new Promise((resolve) => {
      const existing = document.querySelector("script[data-linkedin-badge]");
      if (existing) {
        existing.addEventListener("load", () => resolve());
        if (w.LIRenderAll) resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = "https://platform.linkedin.com/badges/js/profile.js";
      s.async = true;
      s.defer = true;
      s.dataset.linkedinBadge = "1";
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.body.appendChild(s);
    });
  }
  return linkedInScriptPromise;
}

const PRINCIPLES = [
  {
    title: "Customer obsession",
    body: "We exist to make customers successful. In everything we do, we start with the customer's perspective and work backwards.",
    variant: "denim" as const,
  },
  {
    title: "Ownership",
    body: "We own the outcomes of our activities. When we see a vacuum on something important, we jump in.",
    variant: "marigold" as const,
  },
  {
    title: "Self awareness",
    body: "We seek to understand our strengths and growth opportunities. We are open to feedback and share our ideas constructively and respectfully.",
    variant: "surface" as const,
  },
  {
    title: "High impact",
    body: "We align our work to our shared vision and stay focused on top priorities.",
    variant: "outline" as const,
  },
  {
    title: "Earn trust",
    body: "We make to maximize the trust of others in our judgments. We are open, self-critical, and factual.",
    variant: "slate" as const,
  },
] as const;
