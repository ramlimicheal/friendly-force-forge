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
      { title: "Schengen & European Work Visas | Poland, Germany, Malta, Croatia" },
      {
        name: "description",
        content:
          "Official European work permits and employment visas for Indian workers in Poland, Germany, Malta, Croatia, Romania, and Hungary. Legal contracts & residency pathways.",
      },
      { property: "og:title", content: "European Work Permits & Recruitment | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Compliant European work-permit routes with direct employer sponsorship, in-house MEA apostille, and EU residency pathways.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/destinations/schengen-europe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/destinations/schengen-europe" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "European Labour Mobility Corridor",
          "description": "Official work permit corridors across Poland, Germany, Malta, Croatia, Romania, and Hungary.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": ["PL", "DE", "MT", "HR", "RO", "HU"]
          }
        })
      }
    ]
  }),
  component: EuropePage,
});

const europeMetrics = [
  {
    value: "2,500+",
    label: "European Deployments",
    detail: "Skilled technicians and healthcare specialists placed in EU",
  },
  {
    value: "6",
    label: "Active European Nations",
    detail: "Poland, Germany, Malta, Croatia, Romania & Hungary",
  },
  {
    value: "1–3",
    suffix: "Years",
    label: "Renewable Work Permits",
    detail: "National Type-D employment visas with residency extensions",
  },
  {
    value: "100%",
    label: "Legal EU Residency Path",
    detail: "Eligible for Karta Pobytu / EU Blue Card / TRC after arrival",
  },
];

const europeanDestinations = [
  {
    code: "pl",
    flagUrl: "https://flagcdn.com/w160/pl.webp",
    country: "Poland",
    capital: "Warsaw",
    currency: "PLN (zł)",
    permit: "Type-A Work Permit (Zezwolenie na pracę) + National D-Visa",
    lead: "4 – 6 Months",
    desc: "The primary manufacturing and logistics engine of Central Europe. Employers provide furnished accommodation, social security (ZUS), and long-term residency (Karta Pobytu) pathways.",
    roles: [
      "Structural Welders (MIG/MAG/TIG) & CNC Operators",
      "Warehouse Forklift Drivers & Logistics Handlers",
      "Meat & Food Processing Technicians",
      "Heavy Equipment & Commercial Truck Drivers",
    ],
    pathway: "Karta Pobytu (Temporary Residence Card) renewable up to 3 years.",
  },
  {
    code: "de",
    flagUrl: "https://flagcdn.com/w160/de.webp",
    country: "Germany",
    capital: "Berlin & Frankfurt",
    currency: "EUR (€)",
    permit: "EU Blue Card / Skilled Worker Visa (Fachkräfteeinwanderungsgesetz)",
    lead: "4 – 8 Months",
    desc: "High-demand opportunities under the modern German Skilled Immigration Act. Offering competitive European wage scales, public healthcare, and permanent settlement options.",
    roles: [
      "Registered Nurses (ICU / General Ward with B1/B2 German)",
      "Software Engineers, DevOps & Cloud Architects",
      "Electrical Switchgear & Mechanical Design Engineers",
      "Hospitality Specialists & Chef de Partie",
    ],
    pathway: "EU Blue Card leading to Permanent Settlement (Niederlassungserlaubnis) in 21–27 months.",
  },
  {
    code: "mt",
    flagUrl: "https://flagcdn.com/w160/mt.webp",
    country: "Malta",
    capital: "Valletta",
    currency: "EUR (€)",
    permit: "Single Work Permit (Identità Malta Authorization)",
    lead: "4 – 6 Months",
    desc: "English-speaking Mediterranean destination with rapid job growth in luxury tourism, civil construction, and healthcare. All permits include full Schengen Area travel mobility.",
    roles: [
      "Hotel Commis Chefs, Sous Chefs & F&B Captains",
      "Hospitality Housekeeping & Barista Professionals",
      "Building Construction Craftsmen & Plumbers",
      "Delivery Drivers & Commercial Transport Operators",
    ],
    pathway: "1-Year Single Work Permit renewable annually with employer sponsorship.",
  },
  {
    code: "hr",
    flagUrl: "https://flagcdn.com/w160/hr.webp",
    country: "Croatia",
    capital: "Zagreb",
    currency: "EUR (€)",
    permit: "Stay and Work Permit (Dozvola za boravak i rad)",
    lead: "3 – 5 Months",
    desc: "Dynamic Adriatic EU economy with high demand for tourism infrastructure and industrial craftsmen. Fast permit issuance through the Croatian Ministry of Interior (MUP).",
    roles: [
      "Resort Chefs, Waiters & Housekeeping Crews",
      "Shuttering Carpenters, Steel Fixers & Masons",
      "Shipyard Welders & Pipe Fabricators",
      "Forklift Operators & Warehouse Associates",
    ],
    pathway: "1-Year Croatian Work & Stay Permit with European health insurance.",
  },
  {
    code: "ro",
    flagUrl: "https://flagcdn.com/w160/ro.webp",
    country: "Romania",
    capital: "Bucharest",
    currency: "RON (lei)",
    permit: "Work Authorization (Aviz de Muncă) + Long-Stay D/AM Visa",
    lead: "4 – 6 Months",
    desc: "Fast-growing industrial market with substantial quotas for non-EU workers in automotive assembly, civil infrastructure, and food logistics.",
    roles: [
      "Civil Construction Labor & Equipment Operators",
      "Automotive Assembly Line Technicians",
      "Agricultural & Food Processing Workers",
      "Heavy Transport & Long-Haul Drivers",
    ],
    pathway: "National Employment Visa extendable into a Temporary Residence Permit.",
  },
  {
    code: "hu",
    flagUrl: "https://flagcdn.com/w160/hu.webp",
    country: "Hungary",
    capital: "Budapest",
    currency: "HUF (Ft)",
    permit: "National D-Visa & Guest Worker Residence Permit",
    lead: "3 – 5 Months",
    desc: "Central European manufacturing hub with simplified work permit procedures for qualified Indian industrial workers in electronics, automotive, and battery manufacturing.",
    roles: [
      "Electronics & Automotive Assembly Technicians",
      "Warehouse Logistics & Reach Truck Drivers",
      "Metal Fabricators & Industrial Maintenance Techs",
      "Hospitality & Hotel Service Staff",
    ],
    pathway: "2-Year Guest Worker Residence Card with employer housing.",
  },
];

const europeProcessSteps = [
  {
    num: "01",
    title: "Labor Market Test & Employer Filing",
    desc: "European employer verifies local workforce unavailability and files the official Work Permit petition with the regional government labor office (e.g. Voivodeship / Jobcenter).",
  },
  {
    num: "02",
    title: "Work Permit Approval Letter Issued",
    desc: "Government authorities issue the original stamped Work Permit approval document, sent securely to our Hyderabad documentation desk.",
  },
  {
    num: "03",
    title: "MEA Apostille & VFS Visa Submission",
    desc: "We Apostille all candidate certificates with MEA stickers, book VFS Global consular appointments, and submit biometric national D-type visa applications.",
  },
  {
    num: "04",
    title: "Visa Stamping & Flight Mobilisation",
    desc: "Upon passport return with the stamped national visa, we arrange pre-departure briefings, flight ticketing, and employer airport pickup in Europe.",
  },
  {
    num: "05",
    title: "On-Site TRC / Karta Pobytu Registration",
    desc: "Employer registers the worker with local social security (e.g. ZUS) and assists in filing for the multi-year Temporary Residence Card (TRC).",
  },
];

const eligibilityRequirements = [
  { title: "Passport Validity", desc: "Minimum 18–24 months passport validity with clear travel history." },
  { title: "Apostilled Qualifications", desc: "Trade certificates, diplomas, or degrees authenticated with MEA Apostille." },
  { title: "Police Clearance Certificate (PCC)", desc: "Valid PCC issued by Regional Passport Office (RPO) within 6 months." },
  { title: "Medical Fitness & Vaccinations", desc: "European standard medical fitness report and vaccination records." },
  { title: "English / German Language Screening", desc: "Basic functional English communication (or B1/B2 German for Germany)." },
  { title: "Direct Written Contract", desc: "Employer-funded job contract with defined salary, housing, and social security." },
];

function EuropePage() {
  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="European Labour Mobility Specialists · MEA Lic. B-0824/TN/PER/1000+/5/9821/2021"
        title="Legal European Work Permits & Residency Pathways for Indian Talent"
        subtitle="Direct employer sponsorship and official government work permits across Poland, Germany, Malta, Croatia, Romania, and Hungary. 100% legal contracts, in-house MEA Apostille, and social security integration."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Apply for European Jobs
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/employer-services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Hire for European Projects
          </Link>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {europeMetrics.map((m) => (
              <div key={m.label} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <div className="font-display text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
                  {m.value}
                  {m.suffix ? <span className="text-xl sm:text-2xl font-semibold text-ember ml-1">{m.suffix}</span> : null}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{m.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Official Country Flag Logos Marquee Ribbon */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Official European Corridors:
            </span>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {europeanDestinations.map((d) => (
                <div key={d.code} className="flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-1.5 shadow-2xs hover:border-brand/40 transition-colors">
                  <span className="flex size-6 shrink-0 overflow-hidden rounded-full border border-border shadow-2xs">
                    <img src={d.flagUrl} alt={d.country} className="size-full object-cover" />
                  </span>
                  <span className="text-xs font-bold text-brand-deep">{d.country}</span>
                  <span className="text-[10px] text-muted-foreground">({d.capital.split(' ')[0]})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Six European Country Breakdown Cards with Official Logos */}
      <Section
        eyebrow="European Corridors"
        title="Six active European employment destinations"
        intro="We handle country-specific immigration authorities, consular visa submissions, and local residency applications for each destination country."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {europeanDestinations.map((d) => (
            <StaggerItem key={d.country}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
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
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      EU Member
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-brand-deep bg-paper p-2 rounded-md border border-border/80">
                    {d.permit}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-brand">
                    ⏱️ Consular Lead Time: {d.lead}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>

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

                <div className="mt-6 rounded-md bg-paper p-3 border border-border/80 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Residency Route: </span>
                  {d.pathway}
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 5. The 5-Step European Work Permit Lifecycle */}
      <Section
        tone="muted"
        eyebrow="Permit Lifecycle"
        title="5-Step European work permit & relocation roadmap"
        intro="A transparent, legally audited process from employer quota authorization to European touchdown and resident card collection."
      >
        <div className="grid gap-5 md:grid-cols-5">
          {europeProcessSteps.map((step, idx) => (
            <MotionCard key={step.num} className="rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-ember">{step.num}</span>
                <h4 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-muted-foreground">
                Phase {idx + 1} of 5
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 6. Candidate Pre-Requisites & Badges */}
      <Section
        eyebrow="Mandatory Criteria"
        title="Candidate eligibility & documentation standards for EU visas"
        intro="All applications submitted to European consulates must satisfy strict documentation and authenticity criteria."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eligibilityRequirements.map((req) => (
            <div key={req.title} className="rounded-lg border border-border bg-card p-5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-deep">
                <CheckCircle2 className="size-4 text-brand shrink-0" />
                <span>{req.title}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{req.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
