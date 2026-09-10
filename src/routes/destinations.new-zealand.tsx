import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Briefcase,
  Users,
  Globe2,
  GraduationCap,
  HeartPulse,
  Cpu,
  Building2,
  Clock,
  FileCheck2,
  Target,
  Compass,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";
import { company } from "@/data/site";

export const Route = createFileRoute("/destinations/new-zealand")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Visa Consultants in Hyderabad | AEWV Manpower & SMC | Damoder Immigration",
      },
      {
        name: "description",
        content:
          "Top New Zealand visa consultants & overseas manpower agency in Hyderabad. 30-45 day mobilization for Accredited Employer Work Visas (AEWV), Skilled Migrant Category (SMC 6-point), and Green List Straight-to-Residence.",
      },
      {
        name: "keywords",
        content:
          "new zealand visa consultants hyderabad, new zealand aewv manpower, new zealand accredited employer work visa, indian manpower for new zealand, smc 6 point assessment hyderabad, new zealand green list straight to pr, telangana new zealand jobs, andhra pradesh new zealand recruitment",
      },
      {
        property: "og:title",
        content:
          "New Zealand Visa Consultants & Overseas Manpower Agency | Damoder Immigration",
      },
      {
        property: "og:description",
        content:
          "Flagship New Zealand immigration pathway: 30-45 day AEWV manpower mobilization, SMC 6-point assessment, and Green List Tier 1 Straight-to-Residence from Hyderabad.",
      },
      { property: "og:url", content: "https://dis.ind.in/destinations/new-zealand" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/destinations/new-zealand" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "New Zealand Accredited Employer Work Visa (AEWV) & Skilled Migration",
          provider: {
            "@type": "EmploymentAgency",
            name: "Damoder Immigration Services",
            url: "https://dis.ind.in",
            telephone: ["+91-8639516954", "+91-9502051954"]
          },
          serviceType: "Overseas Manpower Mobilization & Visa Processing",
          areaServed: ["Telangana", "Andhra Pradesh", "India"],
          description: "Turnkey recruitment, NZQA credential evaluation, and 30-45 day mobilization of technical and professional talent from South India for New Zealand accredited employers.",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "New Zealand Visa Pathways",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Accredited Employer Work Visa (AEWV)",
                  description: "30-45 day mobilization for trade-tested technical and professional manpower."
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Skilled Migrant Category (SMC 6-Point)",
                  description: "Full NZQA credential evaluation, points matrix mapping, and residence filing."
                }
              }
            ]
          }
        })
      }
    ],
  }),
  component: NewZealandPage,
});

const heroMetrics = [
  {
    value: "#1",
    label: "Flagship Destination",
    detail: "Top-priority corridor with end-to-end Hyderabad filing",
  },
  {
    value: "30–45d",
    label: "Mobilization SLA",
    detail: "Rapid deployment for trade-tested talent from South India",
  },
  {
    value: "Tier 1",
    label: "Green List Straight-to-PR",
    detail: "Healthcare & ICT roles qualify for direct residence",
  },
  {
    value: "100%",
    label: "MEA & INZ Compliant",
    detail: "Verified employer accreditation & eMigrate alignment",
  },
];

const pathways = [
  {
    icon: Target,
    badge: "Permanent Residency",
    title: "Skilled Migrant Category (SMC — 6-Point System)",
    summary:
      "The updated SMC uses a simplified 6-point framework. Points are awarded for NZ occupational registration, recognised qualifications, skilled employment, and NZ work experience. We map your profile to the minimum 6 points and structure the Expression of Interest (EOI) and Residence Application.",
    points: [
      "NZ occupational registration (e.g. teaching, nursing, trades) — up to 3 points",
      "Recognised NZ qualification (Level 7–10) or recognised overseas equivalent",
      "Skilled employment offer or current skilled employment in NZ",
      "NZ work experience at or above the median wage",
    ],
    lead: "EOI selection → Residence Application → Decision: 3–6 months",
  },
  {
    icon: HeartPulse,
    badge: "Straight to Residence",
    title: "Green List Tier 1 — Straight-to-Residence",
    summary:
      "Tier 1 Green List roles — Registered Nurses, Medical Practitioners, and several ICT and engineering professionals — qualify for a Straight-to-Residence visa when employed by an NZ Accredited Employer. No work-to-residence wait period; permanent residence is granted directly on meeting the criteria.",
    points: [
      "Registered Nurses, GPs, and Radiologists (Tier 1 Straight-to-PR)",
      "Software Engineers, ICT Architects, and Multimedia Specialists",
      "Civil, Structural, and Geotechnical Engineers",
      "Construction Project Managers and Quantity Surveyors",
    ],
    lead: "Straight-to-Residence application: 3–6 months",
  },
  {
    icon: Building2,
    badge: "Work-to-Residence",
    title: "Green List Tier 2 — Work-to-Residence",
    summary:
      "Tier 2 roles require a 24-month period of work in New Zealand on an Accredited Employer Work Visa (AEWV) before applying for residence. We coordinate employer accreditation, the AEWV job check, and the staged transition to permanent residency.",
    points: [
      "Trades and allied health roles on the Tier 2 Green List",
      "AEWV with an NZ Accredited Employer at the required wage threshold",
      "24-month qualifying period before residence application",
      "Seamless transition planning from work visa to PR",
    ],
    lead: "AEWV → 24 months work → Residence: 24–30 months total",
  },
  {
    icon: Briefcase,
    badge: "Employer-Sponsored Work Visa",
    title: "Accredited Employer Work Visa (AEWV)",
    summary:
      "The AEWV is New Zealand's main employer-sponsored work visa. The employer must hold Accredited Employer status and pass a job check. We verify employer accreditation, confirm the role meets the median-wage or sector-wage threshold, and file the complete AEWV application.",
    points: [
      "Employer Accreditation verification and Job Check coordination",
      "Median-wage and sector-wage threshold validation",
      "AEWV granted for up to 3 years, renewable",
      "Pathway to SMC or Green List residence from AEWV status",
    ],
    lead: "Job Check + AEWV filing: 2–4 months",
  },
];

const processSteps = [
  {
    step: "01",
    title: "SMC 6-Point Eligibility Assessment",
    detail:
      "We score your NZ occupational registration, qualifications, skilled employment, and NZ work experience against the 6-point SMC framework and confirm the optimal pathway.",
  },
  {
    step: "02",
    title: "NZQA Qualification Assessment",
    detail:
      "Overseas qualifications are assessed by NZQA for recognition in New Zealand. We compile academic transcripts, syllabi, and verification packets for the NZQA International Qualifications Assessment.",
  },
  {
    step: "03",
    title: "Employer Accreditation & Job Check",
    detail:
      "For AEWV and Green List pathways, we verify that your NZ employer holds Accredited Employer status and that the role passes the Immigration NZ Job Check at the required wage.",
  },
  {
    step: "04",
    title: "EOI / Residence Application Filing",
    detail:
      "We prepare and file the Expression of Interest (SMC) or Straight-to-Residence / Work-to-Residence application with Immigration New Zealand, including all supporting evidence.",
  },
  {
    step: "05",
    title: "Medical, Police & Visa Decision",
    detail:
      "We coordinate the NZ medical examination, police clearance from India and any prior countries, and track the application through to the final visa decision.",
  },
  {
    step: "06",
    title: "Pre-Departure & Relocation Support",
    detail:
      "From IRD number setup and bank account guidance to accommodation orientation, our Hyderabad desk supports your full relocation to New Zealand.",
  },
];

const roles = [
  {
    icon: HeartPulse,
    sector: "Healthcare & Medical",
    list: [
      "Registered Nurses (Tier 1 Straight-to-PR)",
      "General Practitioners & Medical Officers",
      "Aged Care & Mental Health Nurses",
      "Medical Radiation Technologists & Sonographers",
    ],
  },
  {
    icon: Cpu,
    sector: "ICT & Technology",
    list: [
      "Software Engineers & Full-Stack Developers",
      "Cloud Architects & DevOps Engineers",
      "Cybersecurity Specialists",
      "Data Engineers & Multimedia Specialists (Tier 1)",
    ],
  },
  {
    icon: Building2,
    sector: "Engineering & Construction",
    list: [
      "Civil, Structural & Geotechnical Engineers",
      "Construction Project Managers (Tier 1)",
      "Quantity Surveyors (Tier 1)",
      "Certified Trades — Electricians, Plumbers, Carpenters",
    ],
  },
];

const faqs = [
  {
    q: "How do I check my eligibility for the New Zealand Skilled Migrant Category?",
    a: "The updated SMC uses a 6-point system. Points come from NZ occupational registration, recognised qualifications, skilled employment in NZ, and NZ work experience. We run a free 6-point assessment at our Hyderabad office and confirm the minimum 6 points before filing.",
  },
  {
    q: "What is the Green List Tier 1 Straight-to-Residence visa?",
    a: "Green List Tier 1 roles — including Registered Nurses, Medical Practitioners, and specific ICT and engineering professionals — qualify for permanent residence directly, with no 24-month work requirement, when employed by an NZ Accredited Employer.",
  },
  {
    q: "Do I need a job offer to apply for a New Zealand visa?",
    a: "For the AEWV and Green List pathways, yes — you need a job offer from an NZ Accredited Employer at the required wage threshold. The SMC pathway also requires skilled employment in New Zealand. We coordinate employer accreditation and job-check documentation.",
  },
  {
    q: "How long does the New Zealand visa process take from Hyderabad?",
    a: "From NZQA qualification assessment to visa decision, the SMC and Green List pathways typically take 3–6 months. The AEWV employer-sponsored work visa is usually decided in 2–4 months. Green List Tier 2 Work-to-Residence requires a 24-month qualifying work period before applying for residence.",
  },
  {
    q: "Where do I submit my New Zealand visa application from Hyderabad?",
    a: "Damoder Immigration Services files your application electronically with Immigration New Zealand from our Hyderabad headquarters. Biometrics and medical examinations are completed at designated Indian collection centres, and police clearance is coordinated through the relevant authorities.",
  },
];

function NewZealandPage() {
  return (
    <>
      <PageHero
        eyebrow="New Zealand #1 Priority Corridor · Damoder Immigration Services (Hyderabad)"
        title="New Zealand Visa Consultants in Hyderabad"
        subtitle="Flagship New Zealand immigration pathway: Skilled Migrant Category (SMC 6-point), Green List Tier 1 Straight-to-Residence, and Accredited Employer Work Visas — filed from our Hyderabad headquarters."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Book New Zealand Eligibility Assessment
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

      {/* Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {heroMetrics.map((m) => (
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

      {/* Why NZ */}
      <Section
        eyebrow="Why New Zealand"
        title="New Zealand is Damoder's Flagship Destination"
        intro="New Zealand offers exceptional quality of life, universal public healthcare, a strong job market for skilled migrants, and one of the clearest fast-track permanent residency routes in the world through the Green List."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Straight-to-Residence for Green List Roles",
              text: "Registered Nurses, Medical Practitioners, and key ICT and engineering professionals receive permanent residence directly — no multi-year wait.",
            },
            {
              icon: Award,
              title: "Clear SMC 6-Point Framework",
              text: "The updated Skilled Migrant Category uses a transparent 6-point system based on registration, qualifications, and skilled employment.",
            },
            {
              icon: Globe2,
              title: "Universal Healthcare & Citizenship Path",
              text: "Public healthcare, free education, and eligibility to apply for New Zealand citizenship after 5 years of permanent residence.",
            },
          ].map((c) => (
            <MotionCard
              key={c.title}
              className="rounded-lg border border-border bg-card p-8 shadow-xs hover:shadow-md transition-shadow"
            >
              <c.icon className="size-8 text-ember" />
              <h3 className="mt-4 font-display text-lg font-bold text-brand-deep">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* Visa Pathways */}
      <Section
        eyebrow="Visa Pathways"
        title="New Zealand Immigration Pathways We Handle"
        intro="From the Skilled Migrant Category to the Green List and Accredited Employer Work Visa, we match your profile to the optimal route and file end-to-end."
        tone="muted"
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {pathways.map((p) => (
            <StaggerItem key={p.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-ember/10 border border-ember/20">
                    <p.icon className="size-6 text-ember" />
                  </span>
                  <span className="rounded-md px-2.5 py-0.5 text-[11px] font-semibold border border-brand/20 bg-brand/5 text-brand">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-brand-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-1.5">
                      <CheckCircle2 className="size-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <div className="rounded-md bg-brand/5 p-2.5 border border-brand/15 text-[11px] text-brand-deep">
                    <span className="font-bold text-ember">Lead Time: </span>
                    {p.lead}
                  </div>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* In-Demand Roles */}
      <Section
        eyebrow="In-Demand Occupations"
        title="Green List & Skilled Roles We Deploy to New Zealand"
        intro="New Zealand's Green List prioritises healthcare, ICT, engineering, and construction professionals. We match your trade or profession to the correct tier and file accordingly."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((r) => (
            <div key={r.sector} className="rounded-lg border border-border bg-card p-8 shadow-xs">
              <r.icon className="size-8 text-brand" />
              <h3 className="mt-4 font-display text-lg font-bold text-brand-deep">{r.sector}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                {r.list.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Process Timeline"
        title="New Zealand Visa Process — From Hyderabad to Auckland"
        intro="A clear, staged process from eligibility assessment to relocation, handled entirely from our Hyderabad headquarters."
        tone="muted"
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <StaggerItem key={s.step}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full shadow-xs hover:shadow-md transition-shadow">
                <span className="font-mono text-3xl font-bold text-ember/80">{s.step}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="New Zealand Visa FAQ"
        title="Frequently Asked Questions"
        intro="Common questions from Hyderabad candidates planning a New Zealand skilled, Green List, or employer-sponsored visa."
      >
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-border bg-card p-6 shadow-xs open:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-brand-deep list-none">
                {f.q}
                <ArrowRight className="size-4 shrink-0 text-ember transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact strip */}
      <Section tone="muted" className="!py-14">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-card p-8 md:p-12 shadow-xs">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-1 text-xs font-semibold tracking-wider uppercase text-ember">
                <MapPin className="size-3.5" /> Hyderabad HQ
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-brand-deep sm:text-3xl">
                Start your New Zealand visa assessment today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Speak with our New Zealand desk in Hyderabad for a personalised SMC 6-point or Green List assessment. We coordinate NZQA evaluation, employer accreditation checks, and Immigration NZ filing end-to-end.
              </p>
              <div className="mt-4 text-sm text-foreground">
                <span className="font-semibold text-brand-deep">Call: </span>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-ember">
                  {company.phone}
                </a>
                {" · "}
                <a href={`tel:${company.consultantPhone.replace(/\s/g, "")}`} className="hover:text-ember">
                  {company.consultantPhone}
                </a>
              </div>
              <div className="mt-1 text-sm text-foreground">
                <span className="font-semibold text-brand-deep">Email: </span>
                <a href={`mailto:${company.email}`} className="hover:text-ember">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ember px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Book Assessment <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/918639516954?text=Hi%20Damoder%20Immigration,%20I%20am%20interested%20in%20New%20Zealand%20Work%20Visa%20and%20Manpower%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="size-4" />
                WhatsApp Consultation (+91 86395 16954)
              </a>
              <Link
                to="/candidate-portal"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-paper px-5 py-3 text-sm font-semibold text-brand-deep transition-all hover:border-brand hover:bg-brand/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Visa Categories
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
