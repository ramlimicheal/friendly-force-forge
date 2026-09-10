import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  BadgeCheck,
  AlertTriangle,
  Briefcase,
  Users,
  Plane,
  ArrowRight,
  Sparkles,
  Stethoscope,
  HardHat,
  Cpu,
  GraduationCap,
  Landmark,
  Globe2,
  BookOpen,
  UserCheck,
  Compass,
  HeartHandshake,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/candidate-portal")({
  head: () => ({
    meta: [
      { title: "Visa Assessment & Profile Evaluation Portal | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Submit your profile for free visa eligibility assessment for New Zealand, Germany, Canada, Australia, UK & Europe with Damoder Immigration Services (Hyderabad).",
      },
      { property: "og:title", content: "Visa Assessment Portal | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Dedicated visa consultants, transparent points scoring, IELTS language prep, and complete documentation filing from Hyderabad, India.",
      },
      { property: "og:url", content: "https://dis.ind.in/candidate-portal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/candidate-portal" },
    ],
  }),
  component: CandidatePage,
});

const candidateMetrics = [
  {
    value: "100%",
    label: "Free Profile Assessment",
    detail: "Accurate points evaluation & pathway recommendations",
  },
  {
    value: "12,000+",
    label: "Successful Visa Grants",
    detail: "PR, Study, Skilled Work & Visitor visas across top nations",
  },
  {
    value: "6 Flagship",
    label: "Country Corridors",
    detail: "New Zealand (#1), Germany, Canada, Australia, UK & Europe",
  },
  {
    value: "7 Pillars",
    label: "Client Assurance",
    detail: "Dedicated consultant, IELTS coaching & document filing",
  },
];

const visaCategories = [
  {
    icon: Award,
    title: "1. Permanent Residency (PR) Visas",
    badge: "Direct Settlement",
    desc: "Comprehensive points evaluation and filing for skilled professionals seeking direct permanent residence abroad.",
    highlights: [
      "New Zealand Skilled Migrant Category (SMC 6-Point) & Green List Tier 1",
      "Germany EU Blue Card & Fast-Track Settlement in 21–27 Months",
      "Canada Express Entry (FSWP/CEC) & Provincial Nominee Streams (PNP)",
      "Australia General Skilled Migration (Subclass 189 / 190 / 491)",
    ],
  },
  {
    icon: GraduationCap,
    title: "2. Study Visas & University Admissions",
    badge: "Global Education",
    desc: "End-to-end guidance for undergraduate, master's, and diploma admissions with post-study work rights and education loans.",
    highlights: [
      "Top Universities across New Zealand, Germany (Free Tuition), UK & Canada",
      "Comprehensive IELTS / PTE Exam Slot Booking & Study Materials",
      "Fast-track Education Loan Sanctioning & Financial Documentation",
      "Post-Study Work Visa (PSWV) and transition to Permanent Residency",
    ],
  },
  {
    icon: Briefcase,
    title: "3. Skilled Work Permits & Job Authorizations",
    badge: "Employment Sponsorship",
    desc: "Statutory documentation and visa filing for professionals with employer sponsorship or points-based job seeker permits.",
    highlights: [
      "Germany Opportunity Card (Chancenkarte) Points-Based Job Seeker",
      "New Zealand Accredited Employer Work Visa (AEWV)",
      "Poland National Type-A Work Permits & Karta Pobytu Residence",
      "UK Skilled Worker Visa with Certificate of Sponsorship (CoS)",
    ],
  },
  {
    icon: Globe2,
    title: "4. Visitor & Tourist Visas",
    badge: "Short-Stay Travel",
    desc: "Flawless dossier preparation, travel itinerary planning, and consular appointment management for leisure and family visits.",
    highlights: [
      "Schengen 90-Day Multi-Entry Visitor Visas (Europe-wide travel)",
      "UK Standard Visitor Visa & Fast-Track Priority Appointments",
      "USA B1/B2 Non-Immigrant Tourist & Business Visas",
      "Canada & Australia Multiple-Entry Visitor Visas",
    ],
  },
  {
    icon: Landmark,
    title: "5. Business & Investor Visas",
    badge: "Capital & Enterprise",
    desc: "Advisory for high-net-worth individuals, business owners, and corporate leaders establishing international branches.",
    highlights: [
      "Business Innovation & Investment Streams (Australia Subclass 188)",
      "UK Innovator Founder & Self-Sponsorship Pathways",
      "Canada Start-Up Visa & Intra-Company Transfer (ICT)",
      "European Golden Visa & Commercial Entity Registration",
    ],
  },
  {
    icon: HeartHandshake,
    title: "6. Dependent & Family Visas",
    badge: "Family Reunification",
    desc: "Seamless legal unification for spouses, children, and dependent parents with full local work and study rights.",
    highlights: [
      "New Zealand & Canada Partner Open Work Visas",
      "Germany & Schengen Spousal Reunification Permits",
      "UK Dependent Visa with full unrestricted employment rights",
      "Australian Partner & Child Subclass Applications",
    ],
  },
];

const protectionCharter = [
  {
    title: "Zero Middleman Sub-Agent Surcharge",
    desc: "You deal directly with Damoder Immigration Services headquarters in Hyderabad. No informal cash payments or unverified sub-agents.",
  },
  {
    title: "Authentic Written Documentation",
    desc: "Every application is backed by verified statutory paperwork, institutional offer letters, and transparent fee schedules.",
  },
  {
    title: "IELTS & Language Proficiency Coaching",
    desc: "We provide structured language training materials and test prep inputs to maximize your points and secure high band scores.",
  },
  {
    title: "Complete Process Transparency",
    desc: "Direct tracking of every dossier submission from document attestation to embassy appointment and final visa grant.",
  },
];

function CandidatePage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Visa Assessment & Profile Evaluation Portal · Damoder Immigration Services (Hyderabad)"
        title="Evaluate Your Eligibility for New Zealand, Germany, Canada & Global Visas"
        subtitle="Dedicated visa consultants, transparent points scoring, IELTS language guidance, and complete documentation support to study, work, or settle abroad."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#visa-categories"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore 6 Core Visa Categories
          </a>
        </div>
      </PageHero>

      {/* 2. Candidate Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {candidateMetrics.map((m) => (
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

      {/* 3. The 6 Core Visa Categories Section */}
      <Section
        id="visa-categories"
        eyebrow="Visa Pathways"
        title="Comprehensive Visa Categories Supported"
        intro="Whether you are aiming for permanent residency, university education, skilled employment, or family reunification, we structure your dossier for maximum approval rates."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visaCategories.map((v) => (
            <StaggerItem key={v.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <v.icon className="size-5" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {v.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-brand-deep leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{v.desc}</p>

                  <div className="mt-5 border-t border-border pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Key Corridors &amp; Programs
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-foreground">
                      {v.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-0.5 size-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
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

      {/* 4. Candidate Protection Charter */}
      <Section
        tone="muted"
        eyebrow="Ethical Recruitment"
        title="The Candidate Protection Charter"
        intro="How Damoder Immigration Services protects your legal rights, documents, and future abroad."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {protectionCharter.map((c) => (
            <MotionCard key={c.title} className="rounded-lg border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-brand-deep">{c.title}</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
