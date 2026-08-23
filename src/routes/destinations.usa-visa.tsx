import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  Sparkles,
  AlertTriangle,
  Building2,
  GraduationCap,
  Globe2,
  Landmark,
  Scale,
  Award,
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
      { property: "og:title", content: "Canada, Australia, UK & USA Visas | Damoder Immigration" },
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "Canada, Australia, UK & USA Immigration Corridors",
          "description": "Permanent residency, skilled work permits, and study visa programs.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": ["CA", "AU", "GB", "US"]
          }
        })
      }
    ]
  }),
  component: UsaPage,
});

const fourCountries = [
  {
    country: "Canada",
    badge: "🇨🇦 Direct PR & PNP",
    focus: "Express Entry (FSWP / CEC), Provincial Nominee Programs & Study-to-PR",
    desc: "Canada remains one of the world's most welcoming nations for skilled professionals. We assist with ECA credential verification (WES), CRS score optimization, French bonus points, and Provincial Nominee streams across Ontario, BC, Alberta, and Saskatchewan.",
    roles: [
      "Software Engineers, DevOps & Cloud Developers",
      "Financial Analysts, Chartered Accountants & CPAs",
      "Healthcare Professionals, B.Sc Nurses & Medical Techs",
      "Marketing Specialists, HR Managers & Business Consultants",
    ],
    pathway: "Direct Permanent Residency (PR) with citizenship eligibility after 3 years.",
  },
  {
    country: "Australia",
    badge: "🇦🇺 General Skilled Migration",
    focus: "Subclass 189, Subclass 190 & Subclass 491 Regional Visas",
    desc: "Australia offers exceptional wages and public healthcare for qualified professionals. We handle skills assessments through ACS, Engineers Australia, VETASSESS, and ANMAC, followed by Expression of Interest (EOI) and state nomination filings.",
    roles: [
      "Civil, Mechanical, Structural & Electrical Engineers",
      "IT Project Managers, Full-Stack & Cyber Security Specialists",
      "Registered Nurses, Aged Care & Diagnostic Staff",
      "STEM Teachers, Accountants & Quantity Surveyors",
    ],
    pathway: "Subclass 189 / 190 Permanent Residency or Subclass 491 to PR transition.",
  },
  {
    country: "United Kingdom",
    badge: "🇬🇧 UK Skilled Worker",
    focus: "UK Skilled Worker Visa, Health & Care Worker & Student Visas",
    desc: "Direct employment sponsorship in the UK with fast-track processing for healthcare and tech personnel. All permits include NHS healthcare access, spousal work rights, and a 5-year route to Indefinite Leave to Remain (ILR).",
    roles: [
      "NHS & Private Clinic Nurses (B.Sc with CBT & OSCE preparation)",
      "Software Developers, Cloud Engineers & Data Analysts",
      "Chefs, Hospitality Managers & F&B Directors",
      "Financial Auditors, Compliance Officers & Business Analysts",
    ],
    pathway: "5-Year Skilled Worker Visa leading to Indefinite Leave to Remain (ILR).",
  },
  {
    country: "United States of America",
    badge: "🇺🇸 Employment & Exchange",
    focus: "EB-3 Permanent Residency, H-1B Specialty & J-1 Exchange",
    desc: "Employer-sponsored permanent residency and specialized non-immigrant work classifications. We provide comprehensive PERM labor certification guidance, credential evaluations, and consular scheduling in India.",
    roles: [
      "IT Software Architects & Senior Developers (H-1B / EB-2)",
      "Registered Nurses & Physical Therapists (Schedule A Green Card)",
      "Culinary & Luxury Hospitality Trainees (J-1 Intern/Trainee)",
      "Executive & Managerial Intra-Company Transfers (L-1)",
    ],
    pathway: "US Permanent Resident Card (Green Card) through employer sponsorship.",
  },
];

function UsaPage() {
  return (
    <>
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

      {/* 4 Flagship Corridors */}
      <Section
        eyebrow="Country Pathways"
        title="Permanent settlement and skilled employment programs"
        intro="Our Hyderabad team guides you through skills assessments, points optimization, provincial nominations, and consular filings."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {fourCountries.map((c) => (
            <StaggerItem key={c.country}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-brand-deep">{c.country}</h3>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {c.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-ember">{c.focus}</p>
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

                <div className="mt-6 rounded-md bg-paper p-3.5 border border-border text-xs text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Settlement Pathway: </span>
                  {c.pathway}
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
