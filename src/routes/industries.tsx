import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cpu,
  HardHat,
  Stethoscope,
  GraduationCap,
  Landmark,
  Globe2,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
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

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Overseas Careers & Job Sectors | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Explore overseas jobs across 8 high-demand sectors: IT, Engineering, Marketing & Sales, HR, Healthcare, Teachers, Accountants, and Nursing in New Zealand, Germany, Canada, Australia & UK.",
      },
      { property: "og:title", content: "Overseas Job Sectors | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Direct overseas employment and immigration pathways for qualified Indian talent across 8 specialized disciplines.",
      },
      { property: "og:url", content: "https://dis.ind.in/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/industries" },
    ],
  }),
  component: IndustriesPage,
});

const eightSectors = [
  {
    icon: Cpu,
    title: "1. Information Technology (IT)",
    badge: "High Demand",
    desc: "Rapidly growing demand across New Zealand, Germany, Canada, Australia, and the UK for experienced software engineers, cloud architects, and data professionals.",
    roles: [
      "Full-Stack, Frontend & Backend Engineers (React, Node, Python, Java)",
      "Cloud Infrastructure & DevOps Architects (AWS / Azure / GCP)",
      "Data Engineers, BI Developers & AI/ML Specialists",
      "Cybersecurity Consultants & SOC Analysts",
    ],
    destinations: "New Zealand (Green List), Germany (EU Blue Card), Canada, Australia",
  },
  {
    icon: HardHat,
    title: "2. Engineering (Civil, Mech, Elec)",
    badge: "Core Infrastructure",
    desc: "Opportunities for accredited engineers in major public infrastructure, energy projects, industrial automation, and construction management.",
    roles: [
      "Civil Site Engineers, Structural Designers & BIM Coordinators",
      "Mechanical Design, HVAC & Pipeline Engineers",
      "Electrical Switchgear, Power Distribution & Automation Techs",
      "QA/QC Engineers & Certified Project Managers (PMP)",
    ],
    destinations: "New Zealand, Germany, Australia (EA Skills Assessment), UK",
  },
  {
    icon: Globe2,
    title: "3. Marketing & Sales",
    badge: "Commercial Growth",
    desc: "Strategic commercial talent needed by global tech, retail, and manufacturing enterprises expanding in international markets.",
    roles: [
      "B2B Enterprise Account Executives & Sales Directors",
      "Digital Marketing, SEO & Performance Growth Specialists",
      "Product Marketing Managers & Brand Strategists",
      "Market Research & International Business Developers",
    ],
    destinations: "United Kingdom, Germany, Canada, Australia, UAE",
  },
  {
    icon: Users,
    title: "4. Human Resources (HR)",
    badge: "People & Talent",
    desc: "Global mobility, talent acquisition, and workforce management roles for experienced HR leaders in multinational organizations.",
    roles: [
      "International Talent Acquisition & Technical Recruiters",
      "HR Business Partners (HRBP) & Employee Relations Managers",
      "Compensation & Benefits (C&B) Analysts",
      "HRIS Specialists (Workday, SAP SuccessFactors)",
    ],
    destinations: "Canada, United Kingdom, Australia, New Zealand",
  },
  {
    icon: Stethoscope,
    title: "5. Healthcare & Medical Specialists",
    badge: "Critical Shortage",
    desc: "Fast-track immigration programs for licensed medical doctors, allied healthcare specialists, and diagnostic professionals.",
    roles: [
      "General Physicians & Emergency Medical Officers",
      "Radiologists, Sonographers & Medical Lab Scientists",
      "Physiotherapists, Occupational Therapists & Radiographers",
      "Clinical Pharmacists & Medical Technologists",
    ],
    destinations: "New Zealand (Green List Tier 1), UK (NHS Health & Care), Australia, Germany",
  },
  {
    icon: Stethoscope,
    title: "6. Registered Nursing (B.Sc / GNM)",
    badge: "Direct PR Route",
    desc: "Unmatched global shortage for qualified nurses with fast-track permanent residency pathways and family sponsorship.",
    roles: [
      "Critical Care & Intensive Care Unit (ICU) Nurses",
      "Operation Theatre (OT) & Surgical Scrub Nurses",
      "Geriatric & Aged Care Nursing Specialists",
      "Emergency Room (ER) & Pediatric Ward Nurses",
    ],
    destinations: "New Zealand (Straight to Residence), Australia (ANMAC), UK (NMC), Germany",
  },
  {
    icon: GraduationCap,
    title: "7. Teachers & Academic Faculty",
    badge: "Education Sector",
    desc: "High demand for certified primary, secondary, and STEM educators in accredited public and private international schools abroad.",
    roles: [
      "Secondary STEM Teachers (Mathematics, Physics, Chemistry)",
      "Early Childhood & Primary School Educators",
      "Special Education Needs (SEN) Teachers",
      "University Lecturers & Vocational Training Instructors",
    ],
    destinations: "Australia, New Zealand, United Kingdom, Canada",
  },
  {
    icon: Landmark,
    title: "8. Accountants & Financial Experts",
    badge: "Corporate Finance",
    desc: "Financial reporting, management accounting, tax auditing, and compliance roles for qualified CA, CPA, ACCA, and CMA professionals.",
    roles: [
      "Chartered Accountants (CA / ACCA / CPA)",
      "Financial Planning & Analysis (FP&A) Managers",
      "Corporate Tax Advisors & Audit Seniors",
      "Cost Accountants & Risk Management Officers",
    ],
    destinations: "United Kingdom, Canada (CPA Ontario/BC), Australia (CPA Australia), New Zealand",
  },
];

function IndustriesPage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Overseas Careers & Job Sectors · Damoder Immigration Services (Hyderabad)"
        title="Find Overseas Jobs Across 8 Core High-Demand Sectors"
        subtitle="We offer all the suggestions, tips, and current job market updates for a smooth transition to your dream country and finding employment in the relevant field of your skills."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Submit Resume for Profile Evaluation
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Visa Categories
          </Link>
        </div>
      </PageHero>

      {/* 2. 8 Core Sectors */}
      <Section
        eyebrow="Sector Coverage"
        title="Eight high-demand employment sectors with direct immigration pathways"
        intro="Our dedicated counselors evaluate your qualifications, map your skills against destination shortages, and structure your visa application for maximum success."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2">
          {eightSectors.map((s) => (
            <StaggerItem key={s.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <s.icon className="size-6" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      In-Demand Positions
                    </p>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground">
                      {s.roles.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-md bg-paper p-3 border border-border/80 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Top Corridors: </span>
                  {s.destinations}
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
