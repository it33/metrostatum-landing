import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Server, Shield } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { intentFromPath, readInboundPath, specialistFor } from "@/lib/contact-intent";

const SUPPORT = "https://mattermost.com/support/";
const LICENSE = "https://mattermost.com/se/software-services-license-agreement/";
const PRIVACY = "https://mattermost.com/privacy-policy/";
const OPEN_SOURCE = "https://docs.mattermost.com/guides/deployment.html";

const SPECIALISTS = [
  "Global Enterprise & Commercial",
  "U.S. Defense & National Security",
  "Five Eyes",
  "NATO & Défense européenne",
  "Bundeswehr & NATO",
  "日本の防衛・セキュリティ専門家に相談",
  "Canadian Government & Defence specialist",
  "(Other) Allied Government specialist",
];

const COMPANY_SIZES = ["1-250", "251-2,500", "2,501-5,000", "5,001-10,000", "10,000+"];

const USE_CASES = [
  "Security Operations",
  "Out-of-Band Communications",
  "Data Sovereignty",
  "DevSecOps Collaboration",
  "Playbooks / Automations",
  "Mission Critical ChatOps",
  "Reaching Limits on Free Version",
];

const COUNTRIES = [
  "United States",
  "Canada",
  "Germany",
  "India",
  "Japan",
  "China",
  "France",
  "United Kingdom",
  "Switzerland",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "Israel",
  "Italy",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "Singapore",
  "South Korea",
  "Spain",
  "Sweden",
  "Taiwan",
  "United Arab Emirates",
  "Other",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
  "Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
  "Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

const CA_PROVINCES = [
  "Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
  "Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec",
  "Saskatchewan","Yukon",
];

const ISO_TO_COUNTRY: Record<string, string> = {
  US: "United States",
  CA: "Canada",
  DE: "Germany",
  IN: "India",
  JP: "Japan",
  CN: "China",
  FR: "France",
  GB: "United Kingdom",
  UK: "United Kingdom",
  CH: "Switzerland",
  AU: "Australia",
  AT: "Austria",
  BE: "Belgium",
  BR: "Brazil",
  CZ: "Czechia",
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  IL: "Israel",
  IT: "Italy",
  NL: "Netherlands",
  NZ: "New Zealand",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  SG: "Singapore",
  KR: "South Korea",
  ES: "Spain",
  SE: "Sweden",
  TW: "Taiwan",
  AE: "United Arab Emirates",
};

const CA_TIMEZONES = new Set([
  "America/Toronto",
  "America/Vancouver",
  "America/Edmonton",
  "America/Winnipeg",
  "America/Halifax",
  "America/St_Johns",
  "America/Whitehorse",
  "America/Yellowknife",
  "America/Iqaluit",
  "America/Moncton",
  "America/Glace_Bay",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Rainy_River",
  "America/Regina",
  "America/Swift_Current",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Creston",
  "America/Cambridge_Bay",
  "America/Inuvik",
  "America/Rankin_Inlet",
  "America/Resolute",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Coral_Harbour",
  "America/Nipigon",
  "America/Thunder_Bay",
]);

function countryFromTimezone(tz: string): string | "" {
  if (CA_TIMEZONES.has(tz)) return "Canada";
  if (tz.startsWith("America/")) {
    if (tz.includes("Sao_Paulo") || tz.includes("Fortaleza") || tz.includes("Recife") || tz.includes("Manaus") || tz.includes("Belem")) {
      return "Brazil";
    }
    if (tz.includes("Mexico") || tz.includes("Tijuana") || tz.includes("Cancun") || tz.includes("Merida") || tz.includes("Monterrey") || tz.includes("Chihuahua") || tz.includes("Hermosillo") || tz.includes("Mazatlan") || tz.includes("Matamoros") || tz.includes("Bahia_Banderas") || tz.includes("Ciudad_Juarez")) {
      return "Other";
    }
    return "United States";
  }
  if (tz === "Pacific/Honolulu" || tz === "Pacific/Guam" || tz === "Pacific/Pago_Pago") return "United States";
  if (tz === "Europe/Berlin" || tz === "Europe/Busingen") return "Germany";
  if (tz === "Europe/London") return "United Kingdom";
  if (tz === "Europe/Paris") return "France";
  if (tz === "Asia/Tokyo") return "Japan";
  if (tz.startsWith("Australia/")) return "Australia";
  if (tz === "Pacific/Auckland") return "New Zealand";
  if (tz === "Asia/Seoul") return "South Korea";
  if (tz === "Asia/Singapore") return "Singapore";
  if (tz === "Asia/Taipei") return "Taiwan";
  if (tz === "Europe/Zurich") return "Switzerland";
  if (tz === "Europe/Rome") return "Italy";
  if (tz === "Europe/Madrid") return "Spain";
  if (tz === "Europe/Amsterdam") return "Netherlands";
  if (tz === "Europe/Brussels") return "Belgium";
  if (tz === "Europe/Stockholm") return "Sweden";
  if (tz === "Europe/Oslo") return "Norway";
  if (tz === "Europe/Copenhagen") return "Denmark";
  if (tz === "Europe/Helsinki") return "Finland";
  if (tz === "Europe/Warsaw") return "Poland";
  if (tz === "Europe/Prague") return "Czechia";
  if (tz === "Europe/Vienna") return "Austria";
  if (tz === "Europe/Lisbon") return "Portugal";
  if (tz === "Europe/Tallinn") return "Estonia";
  if (tz === "Asia/Dubai") return "United Arab Emirates";
  if (tz === "Asia/Jerusalem") return "Israel";
  if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "India";
  if (tz === "Asia/Shanghai" || tz === "Asia/Hong_Kong") return "China";
  return "";
}

async function detectCountry(): Promise<string> {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const fromTz = countryFromTimezone(tz);
    const ctrl = new AbortController();
    const t = window.setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { signal: ctrl.signal });
    window.clearTimeout(t);
    if (res.ok) {
      const data = (await res.json()) as { country_code?: string; country?: string };
      const iso = (data.country_code || "").toUpperCase();
      if (iso && ISO_TO_COUNTRY[iso]) return ISO_TO_COUNTRY[iso];
      if (data.country && COUNTRIES.includes(data.country)) return data.country;
    }
    return fromTz;
  } catch {
    try {
      return countryFromTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
    } catch {
      return "";
    }
  }
}

const base = import.meta.env.BASE_URL;

const LOGOS = [
  { name: "U.S. Air Force", src: `${base}images/logos/usaf.svg` },
  { name: "NASA", src: `${base}images/logos/nasa.svg` },
  { name: "Nasdaq", src: `${base}images/logos/nasdaq.svg` },
  { name: "Qualcomm", src: `${base}images/logos/qualcomm.svg` },
  { name: "Bosch", src: `${base}images/logos/bosch.svg` },
  { name: "Canonical", src: `${base}images/logos/canonical.svg` },
  { name: "Fastly", src: `${base}images/logos/fastly.svg` },
  { name: "Blue Origin", src: `${base}images/logos/blueorigin.svg` },
];

const FEATURES = [
  {
    icon: Server,
    title: "Customize your systems and workflows while deploying anywhere",
    body: "Complex environments require customized solutions. Layer extensibility or support custom monitoring, access, security, and compliance. Deploy to self-hosted, single-tenant cloud and air-gapped environments to ensure your data stays in your control.",
  },
  {
    icon: Shield,
    title: "Auto-healing, auto-scaling enterprise software",
    body: "Mission-critical processes with high stakes require a resilient platform. Mattermost offers transparent and scalable high availability architecture allowing you to maintain data control and custody while having complete system sovereignty.",
  },
  {
    icon: MessageSquare,
    title: "Focus on your mission-critical work with collaborative workflows and integrations",
    body: "Eliminate context switching and accelerate your processes by integrating legacy and SaaS systems. Drive decision-making by aligning teams through cross-organizational and federated communications.",
  },
];

const field =
  "mt-1.5 h-11 w-full rounded-md border border-[var(--color-border-strong)] bg-white px-3 text-sm text-[var(--color-fg)] outline-none transition focus:border-[var(--color-denim)] focus:ring-2 focus:ring-[var(--color-denim)]/15";

const CONTEXT_QUESTIONS = [
  {
    key: "self_host",
    label: "Will at least some of this data need to stay self-hosted?",
  },
  {
    key: "outage_impact",
    label: "Would an outage cost more than $1M in operational impact?",
  },
  {
    key: "automation",
    label: "Is workflow automation essential for this deployment?",
  },
] as const;

const STEPS = [
  "country",
  "specialist",
  "use_case",
  "help",
  "context",
  "email",
  "company",
  "size",
  "phone",
  "terms",
] as const;

type Step = (typeof STEPS)[number];

function YesNo({
  value,
  onChange,
}: {
  value: "" | "yes" | "no";
  onChange: (v: "yes" | "no") => void;
}) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      {(["yes", "no"] as const).map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`h-11 rounded-md text-sm font-semibold capitalize transition ${
            value === v
              ? "bg-[var(--color-denim)] text-white"
              : "border border-[var(--color-border-strong)] bg-white text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

export function ContactSalesPage() {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState<Step>("country");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [size, setSize] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [specialistLocked, setSpecialistLocked] = useState(false);
  const [regionHint, setRegionHint] = useState("");
  const [useCase, setUseCase] = useState("");
  const [help, setHelp] = useState("");
  const [context, setContext] = useState<Record<string, "yes" | "no" | "">>({
    self_host: "",
    outage_impact: "",
    automation: "",
  });
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const inbound = readInboundPath();
  const intent = intentFromPath(inbound);
  const stepIndex = STEPS.indexOf(step);
  const needsRegion = country === "United States" || country === "Canada";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [sent]);

  useEffect(() => {
    let cancelled = false;
    const tzCountry = countryFromTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
    if (tzCountry) setCountry((prev) => prev || tzCountry);
    detectCountry().then((found) => {
      if (cancelled || !found) return;
      setCountry(found);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (specialistLocked || !country) return;
    const next = specialistFor(country, intent);
    if (!next) {
      setRegionHint("");
      return;
    }
    setSpecialist(next);
    const topic =
      intent === "national-security"
        ? "a national security page"
        : intent === "enterprise"
          ? "a commercial / critical-infrastructure page"
          : "this site";
    setRegionHint(`Suggested from ${country} + ${topic}. Change if this isn’t the right team.`);
  }, [country, intent, specialistLocked]);

  function back() {
    if (stepIndex <= 0) return;
    setStep(STEPS[stepIndex - 1]);
  }
  function next() {
    if (stepIndex >= STEPS.length - 1) return;
    setStep(STEPS[stepIndex + 1]);
  }

  function canContinue(): boolean {
    if (step === "country") return Boolean(country) && (!needsRegion || Boolean(region));
    if (step === "specialist") return Boolean(specialist);
    if (step === "use_case") return Boolean(useCase);
    if (step === "help") return help.trim().length > 3;
    if (step === "context") return CONTEXT_QUESTIONS.every((q) => context[q.key]);
    if (step === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (step === "company") return company.trim().length > 1;
    if (step === "size") return Boolean(size);
    if (step === "phone") return true;
    if (step === "terms") return consent;
    return false;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step !== "terms" || !consent) {
      if (canContinue()) next();
      return;
    }
    setSent(true);
  }

  const continueLabel = step === "terms" ? "Contact Sales" : "Continue";

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <img
          src="https://mattermost.com/wp-content/uploads/2025/02/r2024-denim-bg-pattern.webp"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-page relative grid items-start gap-12 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
              Contact sales
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              Connect with Your Regional Team
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
              You’ll be connected with a Mattermost specialist based in your region who understands
              your local security, compliance, and operational requirements.
            </p>
            <p className="mt-4 text-sm text-white/75">
              For technical issues and product questions, please{" "}
              <a href={SUPPORT} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-marigold)] hover:underline">
                contact support
              </a>
              .
            </p>
          </div>

          <div className="rounded-[var(--radius-2xl)] border border-white/15 bg-white p-5 text-[var(--color-fg)] shadow-[0_24px_80px_rgba(8,12,20,0.28)] sm:p-7">
            {sent ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto size-12 text-[var(--color-denim)]" strokeWidth={1.6} />
                <h2 className="mt-4 text-2xl font-bold text-[var(--color-denim)]">Request Received</h2>
                <p className="mt-2 text-[var(--color-fg-muted)]">
                  One of our experts will reach out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setStep("country");
                  }}
                  className="mt-6 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold tracking-tight text-[var(--color-denim)]">
                    Talk to an Expert
                  </h2>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                    {stepIndex + 1} / {STEPS.length}
                  </p>
                </div>
                <div className="mt-4 flex gap-1" aria-hidden>
                  {STEPS.map((s, i) => (
                    <span
                      key={s}
                      className={`h-1 flex-1 rounded-full ${i <= stepIndex ? "bg-[var(--color-marigold)]" : "bg-[var(--color-border)]"}`}
                    />
                  ))}
                </div>
                <form className="mt-6" onSubmit={onSubmit} noValidate>
                  {step === "country" ? (
                    <div className="grid gap-4">
                      <label className="text-xs font-semibold text-[var(--color-denim)]">
                        Country / Region*
                        <select
                          name="country"
                          required
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                            setRegion("");
                            if (!specialistLocked) {
                              const guess = specialistFor(e.target.value, intent);
                              if (guess) setSpecialist(guess);
                            }
                          }}
                          className={field}
                        >
                          <option value="" disabled>
                            Select your country
                          </option>
                          {COUNTRIES.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>
                      {country === "United States" ? (
                        <label className="text-xs font-semibold text-[var(--color-denim)]">
                          State*
                          <select name="state" required value={region} onChange={(e) => setRegion(e.target.value)} className={field}>
                            <option value="" disabled>
                              State
                            </option>
                            {US_STATES.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </label>
                      ) : null}
                      {country === "Canada" ? (
                        <label className="text-xs font-semibold text-[var(--color-denim)]">
                          Province / Territory*
                          <select name="province" required value={region} onChange={(e) => setRegion(e.target.value)} className={field}>
                            <option value="" disabled>
                              Province or territory
                            </option>
                            {CA_PROVINCES.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </label>
                      ) : null}
                    </div>
                  ) : null}

                  {step === "specialist" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      Regional specialist*
                      <select
                        name="regional_specialist"
                        required
                        value={specialist}
                        onChange={(e) => {
                          setSpecialistLocked(true);
                          setSpecialist(e.target.value);
                        }}
                        className={field}
                      >
                        <option value="" disabled>
                          Pick your specialist
                        </option>
                        {SPECIALISTS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {regionHint ? (
                        <span className="mt-1 block text-[11px] font-normal text-[var(--color-fg-subtle)]">
                          {regionHint}
                        </span>
                      ) : null}
                    </label>
                  ) : null}

                  {step === "use_case" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      What is your use case?*
                      <select name="use_case" required value={useCase} onChange={(e) => setUseCase(e.target.value)} className={field}>
                        <option value="" disabled>
                          Select a use case
                        </option>
                        {USE_CASES.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}

                  {step === "help" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      How can we help?*
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={help}
                        onChange={(e) => setHelp(e.target.value)}
                        placeholder="Tell us about the mission, environment, and what you need."
                        className={`${field} h-auto py-2.5`}
                      />
                    </label>
                  ) : null}

                  {step === "context" ? (
                    <div className="space-y-5">
                      <p className="text-sm font-semibold text-[var(--color-denim)]">
                        A few details so we route you to the right team
                      </p>
                      {CONTEXT_QUESTIONS.map((q) => (
                        <fieldset key={q.key}>
                          <legend className="text-sm text-[var(--color-fg)]">{q.label}</legend>
                          <YesNo
                            value={context[q.key] || ""}
                            onChange={(v) => setContext((prev) => ({ ...prev, [q.key]: v }))}
                          />
                        </fieldset>
                      ))}
                    </div>
                  ) : null}

                  {step === "email" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      Business email*
                      <input
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organization.com"
                        className={field}
                      />
                    </label>
                  ) : null}

                  {step === "company" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      Company name*
                      <input
                        name="company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization"
                        className={field}
                      />
                    </label>
                  ) : null}

                  {step === "size" ? (
                    <div>
                      <label className="text-xs font-semibold text-[var(--color-denim)]">
                        Company size*
                        <select name="company_size" required value={size} onChange={(e) => setSize(e.target.value)} className={field}>
                          <option value="" disabled>
                            Select company size
                          </option>
                          {COMPANY_SIZES.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>
                      {size === "1-250" ? (
                        <p className="mt-3 rounded-md bg-[var(--color-bg-elevated)] px-3 py-2 text-xs leading-relaxed text-[var(--color-fg-muted)]">
                          Based on the size of your company, we encourage you to explore our{" "}
                          <a href={OPEN_SOURCE} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-denim)]">
                            open source solution
                          </a>
                          .
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {step === "phone" ? (
                    <label className="text-xs font-semibold text-[var(--color-denim)]">
                      Phone number
                      <input
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Optional"
                        className={field}
                      />
                    </label>
                  ) : null}

                  {step === "terms" ? (
                    <label className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1"
                      />
                      <span>
                        I have read and agree to the{" "}
                        <a href={LICENSE} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-denim)]">
                          Mattermost Software and Services License Agreement
                        </a>{" "}
                        and{" "}
                        <a href={PRIVACY} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-denim)]">
                          Privacy Policy
                        </a>
                        .*
                      </span>
                    </label>
                  ) : null}

                  <div className="mt-6 flex items-center justify-between gap-3">
                    {stepIndex > 0 ? (
                      <button
                        type="button"
                        onClick={back}
                        className="text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                      >
                        Back
                      </button>
                    ) : (
                      <span />
                    )}
                    <button
                      type="submit"
                      disabled={!canContinue()}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-marigold-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {continueLabel}
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <f.icon className="size-8 text-[var(--color-marigold)]" strokeWidth={1.6} />
              <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--color-denim)]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-14">
        <div className="container-page">
          <h2 className="text-center text-xl font-bold tracking-tight md:text-2xl">
            Leading Organizations use Mattermost for their Mission-Critical Work
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {LOGOS.map((l) => (
              <li key={l.name}>
                <img src={l.src} alt={l.name} className="h-8 w-auto max-w-[120px] object-contain opacity-80" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
