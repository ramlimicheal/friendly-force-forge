import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Briefcase,
  Video,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Building2,
  FileCheck2,
  GraduationCap,
  HardHat,
  Cpu,
  Stethoscope,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/employer-services")({
  head: () => ({
    meta: [
      { title: "Employer Manpower & Skilled Recruitment Services | Damoder Immigration" },
      {
        name: "description",
        content:
          "Overseas manpower deployment and skilled workforce sourcing for global employers across New Zealand, Germany, Europe, Canada, and Australia. 22-26 weeks mobilization cycle.",
      },
      { property: "og:title", content: "Employer Manpower & Skilled Recruitment | Damoder Immigration" },
      {
        property: "og:description",
        content:
          "4-Stage precision mobilization SLA timeline, accredited skill auditing, and ethical international talent sourcing.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/employer-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/employer-services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Overseas Manpower Recruitment & Skilled Workforce Solutions",
          "provider": {
            "@type": "EmploymentAgency",
            "name": "Damoder Immigration Services",
            "address": "6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India"
          },
          "serviceType": "International Skilled Workforce Mobilization",
          "areaServed": ["NZ", "DE", "CA", "AU", "GB", "PL", "MT", "US"]
        })
      }
    ]
  }),
  component: EmployerPage,
});

const metrics = [
  {
    value: "350+",
    label: "Active Corporate Partners",
    detail: "International employers, EPC contractors & healthcare groups",
  },
  {
    value: "12,000+",
    label: "Skilled Deployments",
    detail: "Certified professionals and technicians mobilized globally",
  },
  {
    value: "22–26",
    suffix: "Weeks",
    label: "Average Mobilisation Cycle",
    detail: "Structured 5 to 6 months end-to-end recruitment & visa timeline",
  },
  {
    value: "100%",
    label: "Skill Verification Protocol",
    detail: "Rigorous technical assessments eliminating worksite mismatches",
  },
];

const enterpriseSolutions = [
  {
    icon: Users,
    badge: "Technical & Crafts",
    title: "Skilled Workforce Mobilisation",
    desc: "Deployment of qualified technicians, industrial craftsmen, automation operators, and logistics specialists for international engineering and construction projects.",
    highlights: [
      "Certified 6G Welders, Pipe Fabricators & CNC Machinists",
      "Industrial Electricians, MEP Engineers & Switchgear Techs",
      "Heavy Machinery, Crane & Commercial Transport Drivers",
      "Construction Supervisors, Site Foremen & Safety Officers",
    ],
  },
  {
    icon: Briefcase,
    badge: "Executive & Tech",
    title: "Specialized Technical & White-Collar Search",
    desc: "Targeted recruitment for mission-critical project supervision, IT & software architecture, healthcare practitioners, and corporate specialists.",
    highlights: [
      "Software Engineers, Cloud Architects & DevOps Leads",
      "Registered Nurses (B.Sc / GNM) & Clinical Specialists",
      "Financial Analysts, Chartered Accountants & HR Managers",
      "Project Managers (Civil, Mechanical & Electrical)",
    ],
  },
  {
    icon: Video,
    badge: "Interview Suite",
    title: "Client Delegation Drives & Live Video Testing",
    desc: "Seamless hosting for overseas employer recruitment delegations visiting India, or high-definition multi-angle remote video interviews from your headquarters.",
    highlights: [
      "Executive Interview Rooms & Hospitality in Hyderabad",
      "Live Practical Assessment & Tool Evaluation Streams",
      "Biometric & Identity Authentication Verification",
      "Digital Scoring & Real-Time Dossier Transmission",
    ],
  },
  {
    icon: ShieldCheck,
    badge: "Statutory",
    title: "Document Legalisation & Work Permit Filings",
    desc: "Complete management of consular submissions, MEA apostille stickers, national work permit petitions, and employer compliance filings.",
    highlights: [
      "State HRD & Hague MEA Apostille Authentication",
      "Host Nation Labor Department Quota Approvals",
      "Consular National D-Type Visa Stamping",
      "Pre-Departure Briefings & Relocation Coordination",
    ],
  },
];

const tradeTestingFacilities = [
  {
    icon: HardHat,
    title: "Welding & Metallurgy Testing Facility",
    specs: "ASME Sec IX · AWS D1.1 · ISO 9606-1 Standards",
    desc: "Comprehensive testing for 1G through 6G SMAW, GTAW (TIG), GMAW (MIG), and FCAW welding across carbon, alloy, and stainless steel pipe assemblies.",
  },
  {
    icon: Cpu,
    title: "Electrical, MEP & Instrumentation Lab",
    specs: "3-Phase Power Rigs · PLC & SCADA Simulator Panels",
    desc: "Practical testing on 415V/11kV electrical switchboards, industrial cable jointing, PLC panel troubleshooting, and conduit threading.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing Clinical Evaluation",
    specs: "OSCE Clinical Scenarios · Nursing Board Benchmarks",
    desc: "Clinical skills validation for Registered Nurses (GNM/B.Sc) covering patient care protocols, emergency response, and medical terminology.",
  },
];

const evaluationCriteria = [
  {
    num: "01",
    title: "Practical Skill Precision",
    desc: "Hands-on execution of industry blueprints, tolerances, weld root penetration, and circuitry wiring within strict timed parameters.",
  },
  {
    num: "02",
    title: "Safety & PPE Compliance",
    desc: "Strict adherence to international safety standards (OSHA/HSE), hazard identification, and emergency protocol handling.",
  },
  {
    num: "03",
    title: "Technical Knowledge & Blueprint Reading",
    desc: "Written and oral comprehension of engineering schematics, wiring diagrams, piping P&IDs, and clinical protocols.",
  },
  {
    num: "04",
    title: "Language & Worksite Communication",
    desc: "Functional English and basic host-country language screening ensuring seamless workplace integration.",
  },
];

// 4-Stage Mobilisation Timeline (5-6 Months Total)
const fourStageTimeline = [
  {
    stage: "STAGE 01",
    duration: "Month 1 (Weeks 1–4)",
    title: "Requirement Scoping & Talent Sourcing",
    tag: "Talent Acquisition",
    desc: "Detailed employer job specification analysis, database search across skilled talent pools, and initial technical screening.",
  },
  {
    stage: "STAGE 02",
    duration: "Month 2 (Weeks 5–8)",
    title: "Trade Testing & Client Selection",
    tag: "Skill Verification",
    desc: "Practical workshop testing, client interview drives (in-person or remote video), and formal employment offer letter issuance.",
  },
  {
    stage: "STAGE 03",
    duration: "Months 3–4 (Weeks 9–17)",
    title: "Work Permit Filing & MEA Legalisation",
    tag: "Visa & Statutory",
    desc: "Filing work authorizations with host-country immigration authorities, HRD verification, MEA Apostille, and consular submission.",
  },
  {
    stage: "STAGE 04",
    duration: "Months 5–6 (Weeks 18–26)",
    title: "Visa Stamping, Orientation & Mobilisation",
    tag: "Touchdown & Onboarding",
    desc: "Passport return with stamped work visa, pre-departure briefing, flight booking, airport assistance, and worksite handover.",
  },
];

const covenants = [
  {
    icon: ShieldCheck,
    title: "100% Statutory Compliance Guarantee",
    desc: "Every deployment strictly satisfies Indian and destination country immigration laws with legally verified employment contracts.",
  },
  {
    icon: Award,
    title: "Skill Verification & Competency Assurance",
    desc: "Rigorous 4-point practical testing ensures candidates possess the exact verified technical competencies requested by the employer.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Recruitment Process",
    desc: "Direct employer interaction with zero unauthorized middleman fees, guaranteeing motivated and unburdened personnel on site.",
  },
];

function EmployerPage() {
  return (
    <>
      <PageHero
        eyebrow="For Global Employers & International Enterprise · HQ: Hyderabad, India"
        title="Skilled Indian Workforce Mobilised on a Predictable Schedule"
        subtitle="From specialized technical crews to large-scale project talent across New Zealand, Germany, Europe, Canada, and Australia. Sourced, evaluated, documented, and deployed under transparent, accountable timelines."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Inquire for Manpower Sourcing
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#four-stage-sla"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            View 4-Stage Mobilisation SLA
          </a>
        </div>
      </PageHero>

      {/* Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {metrics.map((m) => (
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

      {/* Enterprise Solutions */}
      <Section
        eyebrow="Employer Solutions"
        title="End-to-end recruitment capabilities for global projects"
        intro="Whether hiring specialized engineering talent or bulk technical personnel, our infrastructure handles the complete lifecycle smoothly."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {enterpriseSolutions.map((sol) => (
            <StaggerItem key={sol.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <sol.icon className="size-6" />
                  </div>
                  <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                    {sol.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                  {sol.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sol.desc}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Core Roles &amp; Capabilities
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    {sol.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Trade Testing & Skill Auditing Center */}
      <Section
        tone="muted"
        eyebrow="Skill Verification"
        title="Accredited technical trade testing & skill audit facilities"
        intro="Practical workshops ensuring candidates perform real-world trade tasks before final employer selection."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-3">
          {tradeTestingFacilities.map((fac) => (
            <StaggerItem key={fac.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-lg bg-ember/10 text-ember">
                  <fac.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-brand-deep">
                  {fac.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand">{fac.specs}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{fac.desc}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 4-Point Trade Audit Protocol */}
        <div className="mt-12 rounded-lg border border-border bg-card p-8 shadow-xs">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
              <Sparkles className="size-3.5 text-ember" />
              Standardized Quality Control
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-deep">
              The 4-Point Trade Audit Protocol
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every candidate evaluated in our partner workshops is scored across 4 core benchmarks before a formal competency scorecard is issued.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evaluationCriteria.map((c) => (
              <div key={c.num} className="rounded-lg border border-border/80 bg-paper/60 p-5">
                <span className="font-display text-2xl font-bold text-ember">{c.num}</span>
                <h4 className="mt-2 font-display text-base font-bold text-brand-deep">{c.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4-Stage Mobilisation SLA Timeline (5-6 Months Total) */}
      <Section
        id="four-stage-sla"
        eyebrow="Execution Rigor"
        title="4-Stage Precision Mobilisation SLA Timeline (5–6 Months)"
        intro="A structured 22 to 26 weeks deployment cycle engineered to eliminate recruitment bottlenecks and meet international project timelines."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fourStageTimeline.map((step, idx) => (
            <StaggerItem key={step.stage}>
              <MotionCard className="relative rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {step.stage}
                    </span>
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {step.tag}
                    </span>
                  </div>
                  <div className="mt-2 font-display text-base font-bold text-ember">
                    {step.duration}
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-muted-foreground">
                  Phase {idx + 1} of 4 · Total: 22–26 Weeks
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* The Employer Protection Covenant */}
      <Section
        tone="muted"
        eyebrow="Accountability & Trust"
        title="The Employer Protection Covenant"
        intro="We provide transparent service standards so global enterprises can recruit with absolute confidence."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {covenants.map((g) => (
            <MotionCard key={g.title} className="rounded-lg border border-border bg-card p-7 shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <g.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-deep">
                {g.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {g.desc}
              </p>
            </MotionCard>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
