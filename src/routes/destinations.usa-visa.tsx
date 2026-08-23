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
  Scale,
  Building2,
  AlertTriangle,
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
      { title: "USA Work Visas & Permanent Residency | EB-3, H-1B, J-1, L-1" },
      {
        name: "description",
        content:
          "Official US employment visa guidance: EB-3 Green Card sponsorship, H-1B specialty occupations, J-1 hospitality exchange, and PERM labor certification support.",
      },
      { property: "og:title", content: "USA Employment Visas & Green Card | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Sponsorship-based US work routes explained with documentation, credential evaluation, and US consular scheduling support from India.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/destinations/usa-visa" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/destinations/usa-visa" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "United States Employment Corridors",
          "description": "EB-3 Permanent Residency, H-1B specialty occupations, and J-1 training pathways to the United States.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        })
      }
    ]
  }),
  component: UsaPage,
});

const usaMetrics = [
  {
    value: "4",
    label: "Core Legal Pathways",
    detail: "EB-3 Permanent Residency, H-1B, J-1 Hospitality & L-1 Transfer",
  },
  {
    value: "100%",
    label: "Employer-Sponsored",
    detail: "All routes backed by verified US corporate petitioner petitions",
  },
  {
    value: "PERM",
    label: "Labor Certification",
    detail: "Audited filings through the US Department of Labor (DOL)",
  },
  {
    value: "Green Card",
    label: "Permanent Settlement",
    detail: "EB-3 route confers US Permanent Residency for candidate & family",
  },
];

const categories = [
  {
    code: "EB-3",
    badge: "Permanent Residency (Green Card)",
    name: "Employment-Based 3rd Preference Immigrant Visa",
    desc: "Employer-sponsored immigrant pathway for skilled craftsmen, healthcare professionals, and essential workers. Grants permanent residency (Green Card) for the applicant, spouse, and unmarried children under 21 upon entry.",
    keyPoints: [
      "Requires DOL PERM Labor Certification (ETA Form 9089)",
      "USCIS Form I-140 Immigrant Petition for Alien Workers",
      "National Visa Center (NVC) & US Consulate Mumbai Interview",
      "Full work authorization for spouse upon US arrival",
    ],
    timeline: "18 – 36 Months",
  },
  {
    code: "H-1B",
    badge: "Specialty Occupation",
    name: "Non-Immigrant Professional Specialty Visa",
    desc: "Designed for degree-qualified professionals in Software Engineering, Cloud Architecture, Mechanical & Civil Engineering, Finance, and Clinical Healthcare.",
    keyPoints: [
      "Requires US Bachelor's Degree or authenticated foreign equivalent",
      "US Dept of Labor certified Labor Condition Application (LCA)",
      "USCIS Annual Electronic Registration & Quota Lottery",
      "Valid for up to 6 years with dual-intent green card transition",
    ],
    timeline: "6 – 12 Months",
  },
  {
    code: "J-1",
    badge: "Hospitality & Training",
    name: "Exchange Visitor Training & Internship Program",
    desc: "12 to 18-month structured training programs in luxury US hotel chains, culinary establishments, and commercial hospitality resorts with designated sponsor DS-2019 forms.",
    keyPoints: [
      "DS-2019 Certificate of Eligibility issued by US sponsor",
      "Form DS-7002 Training / Internship Placement Plan",
      "Paid stipend matching US state minimum wage regulations",
      "Fast-track SEVIS registration and consular appointment",
    ],
    timeline: "3 – 6 Months",
  },
  {
    code: "L-1",
    badge: "Corporate Transfer",
    name: "Intra-Company Transferee (Executive & Specialist)",
    desc: "For executives, managers (L-1A), and specialized-knowledge engineers (L-1B) transferring from an Indian parent/subsidiary company to affiliated US operations.",
    keyPoints: [
      "Requires at least 1 continuous year of employment in India",
      "No annual congressional quota cap or lottery delay",
      "L-1A offers expedited route to EB-1C Permanent Residency",
      "Spouse eligible for immediate unrestricted work authorization",
    ],
    timeline: "4 – 8 Months",
  },
];

const usaProcessSteps = [
  {
    num: "01",
    title: "Prevailing Wage & PERM Labor Certification",
    desc: "US employer requests Prevailing Wage Determination (PWD) and conducts mandatory US recruitment ads under Department of Labor (DOL) oversight.",
  },
  {
    num: "02",
    title: "USCIS Form I-140 / Petition Filing",
    desc: "Upon PERM approval, the employer files Form I-140 Immigrant Petition (or I-129 for H-1B/L-1) with United States Citizenship and Immigration Services.",
  },
  {
    num: "03",
    title: "NVC Document Review & Fee Invoices",
    desc: "The National Visa Center (NVC) issues case numbers, processes DS-260 immigrant visa applications, and reviews police certificates and civil records.",
  },
  {
    num: "04",
    title: "US Consulate Interview & Stamping (Mumbai)",
    desc: "Candidate attends biometric appointment and formal immigrant visa interview at the US Consulate General in Mumbai with stamped visa in passport.",
  },
];

function UsaPage() {
  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="United States Employment Pathways · Legal Employer Sponsorship"
        title="Legal US Employment Visas & Permanent Residency (EB-3 / H-1B / J-1)"
        subtitle="Genuine employer-sponsored pathways: EB-3 Permanent Residency (Green Card), H-1B Specialty Occupations, J-1 Hospitality Exchanges, and L-1 Intra-Company Transfers with certified PERM labor approvals."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Check US Eligibility
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Visa Categories
          </a>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {usaMetrics.map((m) => (
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

      {/* 3. Four Core US Visa Classification Cards */}
      <Section
        id="categories"
        eyebrow="Visa Pathways"
        title="Four structured US employment categories"
        intro="Every US visa category requires a verified, licensed American employer petition. We prepare documentation and coordinate with US immigration attorneys."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <StaggerItem key={c.code}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-ember">{c.code}</span>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-brand-deep">{c.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Mandatory Criteria &amp; Filings
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-foreground">
                      {c.keyPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-md bg-paper p-3 border border-border/80 text-xs text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Processing Timeline: </span>
                  {c.timeline}
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. The 4-Stage US Immigration & Consular Process */}
      <Section
        tone="muted"
        eyebrow="Consular Workflow"
        title="4-Stage PERM, USCIS & NVC consular workflow"
        intro="All legal filings are adjudicated solely by the US Department of Labor, USCIS, and the Department of State."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usaProcessSteps.map((step) => (
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
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-semibold text-brand">
                US Government Stage
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 5. Statutory Compliance & Anti-Fraud Disclaimer */}
      <Section
        eyebrow="Strict Compliance"
        title="Statutory disclaimer on US immigration services"
        intro="Protecting candidates from fraudulent promises and unauthorized visa guarantees."
      >
        <div className="rounded-lg border border-border bg-card p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <AlertTriangle className="size-6" />
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold text-brand-deep">
                Damoder Immigration Services acts strictly as a recruitment consultancy and credential evaluator.
              </p>
              <p>
                We do NOT sell visas, guarantee lottery outcomes, or arrange visitor (B1/B2) visas for work purposes. Every placement is sponsored by an authentic, verified US corporate employer and adjudicated exclusively by USCIS and the US Department of State.
              </p>
              <p>
                All legal immigration petitions are drafted and submitted by licensed American immigration attorneys admitted to state bar associations. Our role is candidate sourcing, technical trade verification, certified educational evaluations, and consular interview scheduling from India.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
