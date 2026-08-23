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
  UserCheck,
  HeartHandshake,
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
      { property: "og:title", content: "Visa & Concierge Services | Damoder Immigration Hyderabad" },
      {
        property: "og:description",
        content:
          "End-to-end visa counseling, document legalisation, MEA apostille, education loans, and concierge assistance from Hyderabad, India.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/visa-attestation-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/visa-attestation-services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Visa Application Support & Concierge Services",
          "description": "Comprehensive visa counseling, documentation review, and concierge services at Damoder Immigration Services, Hyderabad.",
          "provider": {
            "@type": "EmploymentAgency",
            "name": "Damoder Immigration Services",
            "address": "6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India"
          }
        })
      }
    ]
  }),
  component: AttestationPage,
});

const visaCategories = [
  {
    title: "PR VISA",
    subtitle: "Permanent Residency",
    desc: "Comprehensive profile points calculation, skills assessment filings, and expression of interest (EOI) submissions for New Zealand, Canada, Australia, and Germany.",
    items: ["Points Optimization Matrix", "Credential Evaluation (ECA / ACS / VETASSESS)", "State Nomination & Invitation Management", "Post-Grant Landing & Settlement Advice"],
    badge: "Settlement",
  },
  {
    title: "STUDY VISA",
    subtitle: "Higher Education Abroad",
    desc: "University application support, statement of purpose (SOP) drafting, IELTS inputs, offer letter procurement, and student visa filing for New Zealand, UK, Germany, Canada, and Australia.",
    items: ["Premier University & Course Selection", "IELTS / PTE Test Prep Inputs", "Education Loan & Financial Documentation", "Post-Study Work Visa Guidance"],
    badge: "Education",
  },
  {
    title: "VISITOR VISA",
    subtitle: "Tourism & Family Visits",
    desc: "Fast-track tourist and family visitor visa filing with verified travel itineraries, sponsorship letters, and consular appointment booking.",
    items: ["Detailed Cover Letter Preparation", "Financial Proof & Fund Verification", "VFS Global Appointment Scheduling", "Zero-Hassle Consular Submission"],
    badge: "Travel",
  },
  {
    title: "BUSINESS VISA",
    subtitle: "Commercial & Corporate Travel",
    desc: "Facilitating business visas for corporate meetings, trade exhibitions, international client negotiations, and commercial exploration.",
    items: ["Corporate Invitation Letter Review", "Chamber of Commerce Endorsements", "Expedited Embassy Filing", "Multi-Entry Schengen & Global Approvals"],
    badge: "Business",
  },
  {
    title: "INVESTOR VISA",
    subtitle: "Residency by Investment",
    desc: "Strategic guidance for high-net-worth individuals and business owners seeking residency through capital investment and startup programs.",
    items: ["Source of Funds Legal Auditing", "Business Plan & Due Diligence", "Government Investment Approvals", "Permanent Residency for Entire Family"],
    badge: "High Net Worth",
  },
  {
    title: "DEPENDENT VISA",
    subtitle: "Spouse & Family Reunification",
    desc: "Reunite with your spouse and dependent children abroad. We manage open work permit filings, relationship proof dossiers, and child schooling documentation.",
    items: ["Spousal Open Work Permit Filings", "Marriage Certificate Legalisation", "Dependent Child Study Authorizations", "Consular Interview Guidance"],
    badge: "Family",
  },
];

const conciergeServices = [
  {
    icon: Stamp,
    title: "Notary Public Service",
    desc: "Official notary attestations, sworn affidavits, name discrepancy affidavits, and identity verifications.",
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
    desc: "Competitive foreign currency exchange rates, multi-currency student forex cards, and international telegraphic transfers.",
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

const legalisationChain = [
  {
    step: "01",
    title: "State Level Authentication (HRD / Home / GAD)",
    agency: "State Government Departments",
    desc: "Educational certificates verified by State HRD (Higher Education Dept). Personal records authenticated by State Home Department.",
    time: "2 – 4 Days",
  },
  {
    step: "02",
    title: "MEA Attestation & Hague Apostille",
    agency: "Ministry of External Affairs (Govt. of India)",
    desc: "Official MEA sticker affixed with unique serial number and QR-code verification for 120+ Hague member nations.",
    time: "2 – 3 Days",
  },
  {
    step: "03",
    title: "Destination Embassy Legalisation",
    agency: "Foreign Embassy Consulates",
    desc: "Consular stamping for non-Hague destinations including verified attestation seals on physical documents.",
    time: "3 – 6 Days",
  },
  {
    step: "04",
    title: "Destination MOFA Endorsement",
    agency: "Ministry of Foreign Affairs (Host Nation)",
    desc: "Final on-ground endorsement upon arrival in the host nation, completed smoothly via pre-verified dossier files.",
    time: "On Touchdown",
  },
];

function AttestationPage() {
  return (
    <>
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

      {/* 6 Core Visa Categories */}
      <Section
        eyebrow="Visa Categories"
        title="We provide guidance and counselling for the following visas"
        intro="Dedicated consultants assigned to your specific destination and visa pathway for complete peace of mind."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visaCategories.map((v) => (
            <StaggerItem key={v.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-brand-deep">{v.title}</span>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {v.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-ember">{v.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Service Scope
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                      {v.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-ember transition-colors"
                  >
                    <span>Request Application Counseling</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Concierge & Value-Added Services */}
      <Section
        id="concierge"
        tone="muted"
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

      {/* 4-Tier Document Legalisation & MEA Apostille Protocol */}
      <Section
        eyebrow="Document Authentication"
        title="4-Tier Document Legalisation & MEA Apostille Protocol"
        intro="Notary, State HRD, MEA Apostille, and Embassy stamping handled with 100% legal accuracy."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {legalisationChain.map((step) => (
            <MotionCard key={step.step} className="rounded-lg border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-ember">{step.step}</span>
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
                    {step.time}
                  </span>
                </div>
                <h4 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs font-semibold text-ember">{step.agency}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
