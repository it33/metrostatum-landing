import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Server, Shield } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

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

export function ContactSalesPage() {
  const [sent, setSent] = useState(false);
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [sent]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
  }

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
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--color-denim)]">
                  Talk to an Expert
                </h2>
                <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                  For technical issues, please{" "}
                  <a href={SUPPORT} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-denim)] hover:underline">
                    contact support
                  </a>
                  .
                </p>
                <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    Regional Specialist*
                    <select name="regional_specialist" required defaultValue="" className={field}>
                      <option value="" disabled>
                        Pick your specialist
                      </option>
                      {SPECIALISTS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-xs font-semibold text-[var(--color-denim)]">
                    First Name*
                    <input name="first_name" required placeholder="Your First Name" className={field} />
                  </label>
                  <label className="text-xs font-semibold text-[var(--color-denim)]">
                    Last Name*
                    <input name="last_name" required placeholder="Your Last Name" className={field} />
                  </label>
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    Business Email*
                    <input name="email" type="email" required placeholder="Business Email" className={field} />
                  </label>
                  <label className="text-xs font-semibold text-[var(--color-denim)]">
                    Company Name*
                    <input name="company" required placeholder="Company Name" className={field} />
                  </label>
                  <label className="text-xs font-semibold text-[var(--color-denim)]">
                    Company Size*
                    <select
                      name="company_size"
                      required
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className={field}
                    >
                      <option value="" disabled>
                        Company Size
                      </option>
                      {COMPANY_SIZES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  {size === "1-250" ? (
                    <p className="sm:col-span-2 rounded-md bg-[var(--color-bg-elevated)] px-3 py-2 text-xs leading-relaxed text-[var(--color-fg-muted)]">
                      Based on the size of your company, we encourage you to explore our{" "}
                      <a href={OPEN_SOURCE} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-denim)]">
                        open source solution
                      </a>
                      . You will be able to find detailed instructions on how to deploy Mattermost at that link.
                    </p>
                  ) : null}
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    Country/Region*
                    <select
                      name="country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={field}
                    >
                      <option value="" disabled>
                        Country/Region
                      </option>
                      {COUNTRIES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  {country === "United States" ? (
                    <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                      State*
                      <select name="state" required defaultValue="" className={field}>
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
                    <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                      Province*
                      <select name="province" required defaultValue="" className={field}>
                        <option value="" disabled>
                          Province/Territory
                        </option>
                        {CA_PROVINCES.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    What is your use case?*
                    <select name="use_case" required defaultValue="" className={field}>
                      <option value="" disabled>
                        What is your use case?
                      </option>
                      {USE_CASES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    How can we help you?*
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className={`${field} h-auto py-2.5`}
                    />
                  </label>
                  <label className="sm:col-span-2 text-xs font-semibold text-[var(--color-denim)]">
                    Phone (Optional)
                    <input name="phone" type="tel" placeholder="Phone number (Optional)" className={field} />
                  </label>
                  <fieldset className="sm:col-span-2 space-y-2">
                    <legend className="text-xs font-semibold text-[var(--color-denim)]">Qualifying questions</legend>
                    {[
                      "I need to self-host at least a portion of my data.",
                      "The impact of a break or outage would cost more than $1M.",
                      "Automation is vital for my needs.",
                    ].map((q) => (
                      <label key={q} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                        <input type="checkbox" name="qualifying_questions" value={q} className="mt-1" />
                        <span>{q}</span>
                      </label>
                    ))}
                  </fieldset>
                  <label className="sm:col-span-2 flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                    <input type="checkbox" name="consent" required className="mt-1" />
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
                  <button
                    type="submit"
                    className="sm:col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-marigold-hover)]"
                  >
                    Contact Sales
                    <ArrowRight className="size-4" />
                  </button>
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
