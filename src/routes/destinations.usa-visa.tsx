import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  Sparkles,
  Building2,
  GraduationCap,
  Globe2,
  Landmark,
  Scale,
  Award,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/destinations/usa-visa")({
  head: () => ({
    meta: [
      { title: "Canada, Australia, UK & USA Visas | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Official immigration & visa pathways for Canada (Express Entry), Australia (Subclass 189/190), UK (Skilled Worker), and USA (EB-3) at Damoder Immigration Services, Hyderabad.",
      },
      { property: "og:title", content: "Canada, Australia, UK & USA Visas | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Dedicated points assessment, credential evaluation, and visa filing for Canada, Australia, the United Kingdom, and the United States.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/destinations/usa-visa" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/destinations/usa-visa" },
    ],
  }),
  component: UsaPage,
});

const fourCountries = [
  {
    code: "ca",
    flagUrl: "https://flagcdn.com/w160/ca.webp",
    country: "Canada",
    badge: "🇨🇦 Direct PR & PNP",
    focus: "Express Entry (FSWP / CEC), Provincial Nominee Programs & Study-to-PR",
    currency: "CAD ($)",
    salary: "CAD $70,000 – $130,000 / yr (₹42L – ₹79L INR)",
    lead: "6 – 10 Months",
    desc: "Canada remains one of the world's premier destinations for skilled professionals and students. We assist with ECA credential verification (WES/ICAS), CRS score optimization, French bonus points, and targeted Provincial Nominee streams across Ontario (OINP), British Columbia (BC PNP), Alberta (AAIP), and Saskatchewan (SINP).",
    roles: [
      "Software Engineers, DevOps & Cloud Developers",
      "Financial Analysts, Chartered Accountants & CPAs",
      "Healthcare Professionals, B.Sc Nurses & Medical Techs",
      "Marketing Specialists, HR Managers & Business Consultants",
    ],
    pathway: "Direct Permanent Residency (PR) with Canadian citizenship eligibility after 3 years.",
    assessmentBody: "WES · ICAS · Medical Council of Canada",
  },
  {
    code: "au",
    flagUrl: "https://flagcdn.com/w160/au.webp",
    country: "Australia",
    badge: "🇦🇺 General Skilled Migration",
    focus: "Subclass 189, Subclass 190 & Subclass 491 Regional Visas",
    currency: "AUD ($)",
    salary: "AUD $80,000 – $145,000 / yr (₹44L – ₹80L INR)",
    lead: "6 – 12 Months",
    desc: "Australia offers exceptional wages, sunny lifestyle, and universal Medicare healthcare. We manage skills assessments through ACS (IT), Engineers Australia (EA), VETASSESS, and ANMAC (Nursing), followed by Expression of Interest (EOI) and state nomination filings.",
    roles: [
      "Civil, Mechanical, Structural & Electrical Engineers",
      "IT Project Managers, Full-Stack & Cyber Security Specialists",
      "Registered Nurses, Aged Care & Diagnostic Staff",
      "STEM Teachers, Accountants & Quantity Surveyors",
    ],
    pathway: "Subclass 189 / 190 Permanent Residency or Subclass 491 Regional to PR transition.",
    assessmentBody: "ACS · Engineers Australia · VETASSESS · ANMAC",
  },
  {
    code: "gb",
    flagUrl: "https://flagcdn.com/w160/gb.webp",
    country: "United Kingdom",
    badge: "🇬🇧 UK Skilled Worker",
    focus: "UK Skilled Worker Visa, Health & Care Worker & Student Visas",
    currency: "GBP (£)",
    salary: "GBP £32,000 – £70,000 / yr (₹34L – ₹74L INR)",
    lead: "3 – 6 Months",
    desc: "Direct employment sponsorship in the UK with fast-track processing for healthcare and tech personnel. All permits include NHS healthcare access, spousal work rights, and a 5-year route to Indefinite Leave to Remain (ILR).",
    roles: [
      "NHS & Private Clinic Nurses (B.Sc with CBT & OSCE preparation)",
      "Software Developers, Cloud Engineers & Data Analysts",
      "Chefs, Hospitality Managers & F&B Directors",
      "Financial Auditors, Compliance Officers & Business Analysts",
    ],
    pathway: "5-Year Skilled Worker Visa leading to Indefinite Leave to Remain (ILR) and British Citizenship.",
    assessmentBody: "UK ENIC · NMC (Nursing & Midwifery Council) · GMC",
  },
  {
    code: "us",
    flagUrl: "https://flagcdn.com/w160/us.webp",
    country: "United States of America",
    badge: "🇺🇸 Employment & Exchange",
    focus: "EB-3 Permanent Residency, H-1B Specialty & J-1 Exchange",
    currency: "USD ($)",
    salary: "USD $75,000 – $160,000 / yr (₹62L – ₹1.3Cr INR)",
    lead: "9 – 18 Months",
    desc: "Employer-sponsored permanent residency and specialized non-immigrant work classifications. We provide comprehensive PERM labor certification guidance, credential evaluations, and consular scheduling in India.",
    roles: [
      "IT Software Architects & Senior Developers (H-1B / EB-2)",
      "Registered Nurses & Physical Therapists (Schedule A Green Card)",
      "Culinary & Luxury Hospitality Trainees (J-1 Intern/Trainee)",
      "Executive & Managerial Intra-Company Transfers (L-1)",
    ],
    pathway: "US Permanent Resident Card (Green Card) through direct employer sponsorship.",
    assessmentBody: "USCIS · CGFNS · NACES Credential Evaluation",
  },
];

function UsaPage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Global English Corridors · Damoder Immigration Services (Hyderabad)"
        title="Canada, Australia, UK & USA Permanent Residency, Work & Study Visas"
        subtitle="Comprehensive points scoring, credential evaluations, and transparent consular submissions for the world's most sought-after English-speaking destinations."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Calculate PR Points &amp; Eligibility
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Study &amp; Job Programs
          </Link>
        </div>
      </PageHero>

      {/* 2. Flag Marquee & Badges */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              English Corridors:
            </span>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {fourCountries.map((d) => (
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

      {/* 3. 4 Flagship Corridors */}
      <Section
        eyebrow="Country Pathways"
        title="Permanent settlement, skilled migration and study programs"
        intro="Our Hyderabad team guides you through skills assessments, points optimization, provincial nominations, and consular filings."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {fourCountries.map((c) => (
            <StaggerItem key={c.country}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-border/80 bg-paper">
                        <img
                          src={c.flagUrl}
                          alt={`${c.country} flag logo`}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ember">
                          {c.code.toUpperCase()} · {c.currency}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-brand-deep">{c.country}</h3>
                      </div>
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {c.badge}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-brand-deep bg-paper p-2 rounded-md border border-border/80">
                    {c.focus}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-brand">
                    <span>⏱️ Lead Time: <strong>{c.lead}</strong></span>
                    <span>💰 <strong>{c.salary}</strong></span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      In-Demand Careers
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                      {c.roles.map((r) => (
                        <li key={r} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="rounded-md bg-paper p-2.5 border border-border text-[11px] text-muted-foreground">
                    <span className="font-semibold text-brand-deep">Skills Assessor: </span>
                    {c.assessmentBody}
                  </div>
                  <div className="rounded-md bg-brand/5 p-2.5 border border-brand/15 text-[11px] text-brand-deep">
                    <span className="font-bold text-ember">Settlement Pathway: </span>
                    {c.pathway}
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
