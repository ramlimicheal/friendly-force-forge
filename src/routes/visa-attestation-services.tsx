import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileCheck2,
  Landmark,
  Stamp,
  FileSignature,
  ShieldCheck,
  GraduationCap,
  FileText,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Globe2,
  Award,
  BookOpen,
  CreditCard,
  Languages,
} from "lucide-react";
import { motion } from "framer-motion";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/visa-attestation-services")({
  head: () => ({
    meta: [
      { title: "Visa Services & Concierge Solutions | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Complete roundup of visa services at Damoder Immigration Services, Hyderabad: PR, Study, Work, Visitor, Business & Dependent Visas, plus Notary, MEA Apostille, Loans & Forex Concierge.",
      },
      { property: "og:title", content: "Visa & Concierge Services | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "End-to-end visa counseling, document legalisation, MEA apostille, education loans, and concierge assistance from Hyderabad, India.",
      },
      { property: "og:url", content: "https://dis.ind.in/visa-attestation-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/visa-attestation-services" },
    ],
  }),
  component: AttestationPage,
});

const attestationMetrics = [
  {
    value: "4-Stage",
    label: "End-to-End Authentication",
    detail: "Notary, State HRD, MEA Apostille & Embassy Consular",
  },
  {
    value: "6 Core",
    label: "Visa Categories",
    detail: "PR, Study, Work, Visitor, Business & Dependent Visas",
  },
  {
    value: "5–7",
    suffix: "Days",
    label: "Fast-Track Turnaround",
    detail: "Expedited MEA Apostille for Hague member states",
  },
  {
    value: "100%",
    label: "Zero-Rejection Guarantee",
    detail: "Pre-audit of seals, stamps, and format compliance",
  },
];

const legalisationChain = [
  {
    step: "01",
    title: "State Level Authentication (HRD / Home / GAD)",
    agency: "State Government Depts",
    desc: "Educational certificates verified by State HRD (Higher Education Dept). Personal documents authenticated by State Home Department / General Administration Department (GAD).",
    time: "2 – 4 Days",
  },
  {
    step: "02",
    title: "MEA Attestation & Hague Apostille",
    agency: "Ministry of External Affairs (Govt. of India)",
    desc: "Official MEA sticker affixed with unique serial number and QR-code verification. Hague Apostille issued for 120+ member nations (Europe, New Zealand, USA, etc.).",
    time: "2 – 3 Days",
  },
  {
    step: "03",
    title: "Destination Embassy Legalisation",
    agency: "Foreign Embassy Consulates",
    desc: "Mandatory consular stamping for non-Hague nations. We handle biometric slips, consular fee processing, and cultural attache approvals.",
    time: "3 – 6 Days",
  },
  {
    step: "04",
    title: "Destination MOFA Endorsement",
    agency: "Ministry of Foreign Affairs (Host Country)",
    desc: "Final on-ground endorsement upon arrival in the host nation, completed smoothly via pre-verified dossier files.",
    time: "On Touchdown",
  },
];

const documentSuites = [
  {
    icon: GraduationCap,
    title: "Educational Document Attestation",
    badge: "Degree & Diploma",
    desc: "Mandatory for employment visas, university admissions, and professional licensing evaluations (e.g. WES, ICAS, ACS, Engineers Australia).",
    items: [
      "Degree Certificates (B.E., B.Tech, B.Sc, B.Com, MBA)",
      "Nursing (GNM / B.Sc / Post B.Sc) & Medical Degrees",
      "Diploma Certificates (Polytechnic, ITI & Vocational)",
      "University Mark Sheets, Consolidated Transcripts & Transfer Records",
    ],
  },
  {
    icon: FileText,
    title: "Personal & Vital Records Attestation",
    badge: "Family & Residency",
    desc: "Required for family residence visas, spousal permits, birth registration abroad, and overseas immigration clearances.",
    items: [
      "Birth Certificates & Marriage Certificates",
      "Police Clearance Certificates (PCC issued by Passport Seva Kendra)",
      "Affidavits & Name Change Gazettes",
      "Experience Certificates & Salary Slip Affidavits",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & Corporate Legal Documents",
    badge: "B2B & Trade",
    desc: "Required for foreign company branch registration, international trade tenders, and commercial power of attorney.",
    items: [
      "Power of Attorney (POA) & Commercial Agency Agreements",
      "Memorandum & Articles of Association (MOA / AOA)",
      "Board Resolutions & Certificate of Incorporation",
      "Commercial Invoices, Packing Lists & Chamber of Commerce Filings",
    ],
  },
];

const conciergeServices = [
  {
    icon: Stamp,
    title: "Notary Public Service",
    desc: "Official notary public authentication, sworn affidavits, and legal discrepancy declarations.",
  },
  {
    icon: Languages,
    title: "Sworn Translation Service",
    desc: "Certified legal translations into German, French, Arabic, and Polish by accredited embassy translators.",
  },
  {
    icon: FileText,
    title: "University Transcript Service",
    desc: "Procurement, sealed verification, and courier of official academic transcripts from Indian universities.",
  },
  {
    icon: Landmark,
    title: "Bank Loan Assistance",
    desc: "Hassle-free education and settlement fund loan sanctioning through partner nationalized and private banks.",
  },
  {
    icon: BookOpen,
    title: "Exam Slot Booking",
    desc: "Priority date and venue booking for IELTS, PTE Academic, TOEFL, and GRE exams across test centers.",
  },
  {
    icon: CreditCard,
    title: "Banking & Forex Assistance",
    desc: "Competitive foreign currency exchange rates, multi-currency student forex cards, and telegraphic transfers.",
  },
  {
    icon: Globe2,
    title: "International SIM Card",
    desc: "Pre-activated country-specific SIM cards with data bundles delivered before your international flight.",
  },
  {
    icon: ShieldCheck,
    title: "Travel & Medical Insurance",
    desc: "Comprehensive international travel, emergency medical, and luggage protection policies meeting embassy criteria.",
  },
];

function AttestationPage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Comprehensive Visa & Concierge Services · HQ: Hyderabad, India"
        title="A Complete Roundup of Visa Services & Concierge Solutions"
        subtitle="Guidance, counseling, and documentation support for PR, Study, Work, Visitor, Business, and Dependent visas — combined with end-to-end relocation concierge."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Consult a Visa Specialist
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#concierge"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Concierge Services
          </a>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {attestationMetrics.map((m) => (
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

      {/* 3. Concierge Services */}
      <Section
        id="concierge"
        eyebrow="Concierge Suite"
        title="Full-Suite Relocation & Concierge Services"
        intro="Everything you need before, during, and after your visa grant — managed centrally under one roof in Hyderabad."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {conciergeServices.map((c) => (
            <MotionCard key={c.title} className="rounded-lg border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
                  <c.icon className="size-5" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-brand-deep">{c.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 4. The Complete 4-Tier Legalisation Protocol */}
      <Section
        tone="muted"
        id="chain"
        eyebrow="The Authentication Chain"
        title="4-Tier official document legalisation protocol"
        intro="Depending on your target destination country (Hague Convention member vs. Non-Apostille country), documents follow an audited statutory path."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {legalisationChain.map((step) => (
            <StaggerItem key={step.step}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-ember">{step.step}</span>
                    <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand">{step.agency}</p>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 5. Document Attestation Suites */}
      <Section
        eyebrow="Dossier Categories"
        title="Comprehensive certificate & document attestation suites"
        intro="We process educational, personal vital records, and commercial documents with end-to-end tracking and direct courier dispatch."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-3">
          {documentSuites.map((doc) => (
            <StaggerItem key={doc.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <doc.icon className="size-6" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {doc.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{doc.desc}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Covered Certificates
                    </p>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground">
                      {doc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
