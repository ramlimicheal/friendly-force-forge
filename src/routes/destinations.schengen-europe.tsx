import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Plane,
  FileCheck2,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Award,
  Globe2,
  GraduationCap,
  Landmark,
  Target,
  UserCheck,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/destinations/schengen-europe")({
  head: () => ({
    meta: [
      { title: "New Zealand, Germany & Europe Visas | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Official visa pathways for New Zealand (Top Priority), Germany (Chancenkarte / Blue Card), Poland, Malta, Croatia, Romania & Hungary at Damoder Immigration Services Hyderabad.",
      },
      { property: "og:title", content: "New Zealand & European Visas | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "New Zealand Skilled Migrant Category, German Opportunity Card, and European work & settlement pathways with dedicated counseling.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/destinations/schengen-europe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/destinations/schengen-europe" },
    ],
  }),
  component: EuropePage,
});

const priorityMetrics = [
  {
    value: "🇳🇿 #1",
    label: "New Zealand Priority",
    detail: "Skilled Migrant (SMC), AEWV & Green List Fast-Track PR",
  },
  {
    value: "🇩🇪 #1",
    label: "Germany Europe Priority",
    detail: "Chancenkarte Opportunity Card & EU Blue Card pathways",
  },
  {
    value: "100%",
    label: "Process Transparency",
    detail: "Direct status tracking from Hyderabad headquarters",
  },
  {
    value: "7 Pillars",
    label: "Client Assurance",
    detail: "Dedicated consultant, IELTS coaching & document filing",
  },
];

const priorityDestinations = [
  {
    code: "nz",
    flagUrl: "https://flagcdn.com/w160/nz.webp",
    country: "New Zealand",
    badge: "🇳🇿 #1 TOP FLAGSHIP PRIORITY",
    highlight: true,
    capital: "Wellington & Auckland",
    currency: "NZD ($)",
    salary: "NZD $75,000 – $145,000 / yr (₹38L – ₹74L INR)",
    permit: "Skilled Migrant Category (SMC 6-Pt) · AEWV · Green List Tier 1/2 · Study-to-PR",
    lead: "3 – 6 Months",
    desc: "Our premier flagship destination offering world-class quality of life, high wage standards, universal healthcare, and direct permanent residency pathways. We handle 6-point SMC assessments, Accredited Employer job matching, Green List Tier 1 straight-to-residence filings, and top university admissions with post-study work rights.",
    roles: [
      "Software Engineers, Cloud Architects & ICT Business Analysts",
      "Civil, Structural, Mechanical & Electrical Engineers",
      "Registered Nurses, General Practitioners & Radiologists (Tier 1 Straight to PR)",
      "Construction Project Managers, Quantity Surveyors & Certified Trades",
    ],
    pathway: "Direct Permanent Residency (SMC / Green List Tier 1) or 2-Year Work-to-Residence with citizenship eligibility after 5 years.",
    assessmentBody: "NZQA (Qualifications Authority) · Medical Council NZ · IPENZ",
  },
  {
    code: "de",
    flagUrl: "https://flagcdn.com/w160/de.webp",
    country: "Germany",
    badge: "🇩🇪 #1 TOP EUROPEAN PRIORITY",
    highlight: true,
    capital: "Berlin, Frankfurt & Munich",
    currency: "EUR (€)",
    salary: "EUR €48,000 – €88,000 / yr (₹43L – ₹79L INR)",
    permit: "Opportunity Card (Chancenkarte) · EU Blue Card · Skilled Worker Visa",
    lead: "3 – 6 Months",
    desc: "Europe's leading industrial and tech powerhouse with progressive immigration reforms. The points-based Opportunity Card (Chancenkarte) enables Indian graduates to enter Germany to find qualified work, while the EU Blue Card grants permanent settlement in 21–27 months.",
    roles: [
      "IT Specialists, DevOps Engineers & Full-Stack Developers (English track)",
      "Automotive, Mechanical, Mechatronics & Renewable Energy Engineers",
      "Registered Nurses (B.Sc / GNM with B1/B2 German language coaching)",
      "Hospitality Specialists, Chefs & Supply Chain Managers",
    ],
    pathway: "EU Blue Card leading to Permanent Settlement (Niederlassungserlaubnis) in 21–27 months.",
    assessmentBody: "ZAB (Central Office for Foreign Education) · IHK FOSA",
  },
  {
    code: "pl",
    flagUrl: "https://flagcdn.com/w160/pl.webp",
    country: "Poland",
    badge: "EU Member State",
    capital: "Warsaw & Poznań",
    currency: "PLN (zł)",
    salary: "PLN 60,000 – 95,000 / yr (₹13L – ₹21L INR)",
    permit: "Type-A Work Permit (Zezwolenie na pracę) + National D-Visa",
    lead: "4 – 6 Months",
    desc: "The primary manufacturing, automotive, and logistics engine of Central Europe. Employers provide furnished accommodation, social security (ZUS), and long-term residency (Karta Pobytu) pathways with full Schengen travel rights.",
    roles: [
      "Structural Welders (MIG/MAG/TIG) & CNC Machinists",
      "Warehouse Forklift Drivers & Logistics Handlers",
      "Food Processing Technicians & Quality Controllers",
      "Heavy Equipment Operators & Commercial Truck Drivers",
    ],
    pathway: "Karta Pobytu (Temporary Residence Card) renewable up to 3 years.",
    assessmentBody: "Voivodeship Labor Office (Urząd Wojewódzki)",
  },
  {
    code: "mt",
    flagUrl: "https://flagcdn.com/w160/mt.webp",
    country: "Malta",
    badge: "EU Member State",
    capital: "Valletta & St. Julian's",
    currency: "EUR (€)",
    salary: "EUR €22,000 – €36,000 / yr (₹20L – ₹32L INR)",
    permit: "Single Work Permit (Identità Malta Authorization)",
    lead: "4 – 6 Months",
    desc: "English-speaking Mediterranean destination with rapid growth in luxury hospitality, resort culinary management, transport, and healthcare. All permits include full Schengen Area travel mobility.",
    roles: [
      "Hotel Commis Chefs, Sous Chefs & F&B Captains",
      "Hospitality Housekeeping & Barista Professionals",
      "Building Construction Craftsmen & Plumbers",
      "Delivery Drivers & Commercial Transport Operators",
    ],
    pathway: "1-Year Single Work Permit renewable annually with employer sponsorship.",
    assessmentBody: "Identità Malta Agency · Jobsplus",
  },
  {
    code: "hr",
    flagUrl: "https://flagcdn.com/w160/hr.webp",
    country: "Croatia",
    badge: "EU Member State",
    capital: "Zagreb & Split",
    currency: "EUR (€)",
    salary: "EUR €18,000 – €30,000 / yr (₹16L – ₹27L INR)",
    permit: "Stay and Work Permit (Dozvola za boravak i rad)",
    lead: "3 – 5 Months",
    desc: "Dynamic Adriatic EU economy with high demand for tourism infrastructure, shipbuilding, and industrial craftsmen. Fast permit issuance through the Croatian Ministry of Interior (MUP).",
    roles: [
      "Resort Chefs, Waiters & Housekeeping Crews",
      "Shuttering Carpenters, Steel Fixers & Masons",
      "Shipyard Welders & Pipe Fabricators",
      "Forklift Operators & Warehouse Associates",
    ],
    pathway: "1-Year Croatian Work & Stay Permit with European health insurance.",
    assessmentBody: "Croatian Ministry of Interior (MUP) · HZZ",
  },
  {
    code: "ro",
    flagUrl: "https://flagcdn.com/w160/ro.webp",
    country: "Romania",
    badge: "EU Member State",
    capital: "Bucharest",
    currency: "RON (lei)",
    salary: "RON 40,000 – 65,000 / yr (₹8L – ₹13L INR)",
    permit: "Work Authorization (Aviz de Muncă) + Long-Stay D/AM Visa",
    lead: "4 – 6 Months",
    desc: "Fast-growing industrial market with substantial quotas for international workers in automotive assembly, civil infrastructure, and food logistics.",
    roles: [
      "Civil Construction Labor & Equipment Operators",
      "Automotive Assembly Line Technicians",
      "Agricultural & Food Processing Workers",
      "Heavy Transport & Long-Haul Drivers",
    ],
    pathway: "National Employment Visa extendable into a Temporary Residence Permit.",
    assessmentBody: "General Inspectorate for Immigration (IGI)",
  },
];

function EuropePage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Specialized Country Corridors · Damoder Immigration Services (Hyderabad)"
        title="New Zealand, Germany & European Work Permits, PR & Study Visas"
        subtitle="End-to-end guidance for New Zealand (Top Priority), Germany (Opportunity Card & Blue Card), Poland, Malta, Croatia, and Europe with dedicated consultants and complete transparency."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Check New Zealand / Germany Eligibility
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore All Visa Categories
          </Link>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {priorityMetrics.map((m) => (
              <div key={m.label} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <div className="font-display text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{m.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Flag Marquee & Destination Badges */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Official Corridors:
            </span>
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              {priorityDestinations.map((d) => (
                <div key={d.code} className="flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-1.5 shadow-2xs hover:border-brand/40 transition-colors">
                  <span className="flex size-6 shrink-0 overflow-hidden rounded-full border border-border shadow-2xs">
                    <img src={d.flagUrl} alt={d.country} className="size-full object-cover" />
                  </span>
                  <span className="text-xs font-bold text-brand-deep">{d.country}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">({d.code.toUpperCase()})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Country Dossier Cards */}
      <Section
        eyebrow="Corridor Breakdown"
        title="Flagship Immigration & Employment Destinations"
        intro="We handle country-specific immigration authorities, consular visa submissions, and local residency applications."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {priorityDestinations.map((d) => (
            <StaggerItem key={d.country}>
              <MotionCard className={`rounded-lg border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow ${
                d.highlight ? "border-ember/40 ring-1 ring-ember/20" : "border-border"
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-border/80 bg-paper">
                        <img
                          src={d.flagUrl}
                          alt={`${d.country} flag logo`}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ember">
                          {d.code.toUpperCase()} · {d.currency}
                        </span>
                        <h3 className="font-display text-xl font-bold text-brand-deep leading-tight">
                          {d.country}
                        </h3>
                      </div>
                    </div>
                    <span className={`rounded-md px-2.5 py-0.5 text-[11px] font-semibold ${
                      d.highlight ? "bg-ember/15 text-ember border border-ember/30" : "border border-brand/20 bg-brand/5 text-brand"
                    }`}>
                      {d.badge}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-brand-deep bg-paper p-2 rounded-md border border-border/80">
                    {d.permit}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-brand">
                    <span>⏱️ Lead Time: <strong>{d.lead}</strong></span>
                    <span>💰 <strong>{d.salary}</strong></span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      In-Demand Occupations
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                      {d.roles.map((r) => (
                        <li key={r} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="rounded-md bg-paper p-2.5 border border-border/80 text-[11px] text-muted-foreground">
                    <span className="font-semibold text-brand-deep">Assessment Body: </span>
                    {d.assessmentBody}
                  </div>
                  <div className="rounded-md bg-brand/5 p-2.5 border border-brand/15 text-[11px] text-brand-deep">
                    <span className="font-bold text-ember">Residency Route: </span>
                    {d.pathway}
                  </div>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <CtaBanner />
    </>
  );
}
