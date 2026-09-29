import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  FileCheck2,
  Clock,
  ArrowRight,
  ExternalLink,
  Users,
  Wrench,
  Zap,
  Hammer,
  Truck,
  BookOpen,
  Scale,
} from "lucide-react";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";
import { company } from "@/data/site";

const aewvPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accredited Employer Work Visa (AEWV) Recruitment Agency India",
  "serviceType": "AEWV Overseas Recruitment & Trade Deployment",
  "description":
    "MEA licensed overseas recruitment agency in India deploying skilled trades (Welders, Fitters, Electricians) to New Zealand under Immigration New Zealand (INZ) WR1 instructions and ANZSCO standards.",
  "provider": {
    "@type": ["EmploymentAgency", "LocalBusiness"],
    "name": "Damoder Immigration Services",
    "url": "https://dis.ind.in/",
    "telephone": "+91 8639516954",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6F6F+74G, Tukkuguda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "501359",
      "addressCountry": "IN"
    },
    "identifier": "MEA Licence B-0824/TN/PER/1000+/5/9821/2021"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "New Zealand" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Accredited New Zealand Employers and Certified Indian Tradespeople"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ANZSCO Accredited Trade Deployments",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Welder (First Class) - ANZSCO 322311 Deployment",
          "description": "Certified GMAW/FCAW/GTAW welders deployed under INZ WR1 instructions with MEA eMigrate clearance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fitter (General) - ANZSCO 323211 Deployment",
          "description": "Mechanical assembly, hydraulic and maintenance fitters for NZ heavy engineering and infrastructure."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrician (General) - ANZSCO 341111 Deployment",
          "description": "Industrial and commercial electricians pre-screened for NZ EWRB provisional licensing pathways."
        }
      }
    ]
  },
  "termsOfService": "https://www.immigration.govt.nz/opsmanual/#73437.htm",
  "isRelatedTo": [
    {
      "@type": "GovernmentOrganization",
      "name": "Immigration New Zealand (INZ)",
      "url": "https://www.immigration.govt.nz/"
    },
    {
      "@type": "GovernmentOrganization",
      "name": "Ministry of External Affairs (MEA), Government of India",
      "url": "https://emigrate.gov.in/"
    }
  ]
};

export const Route = createFileRoute("/aewv-recruitment-agency-india")({
  head: () => ({
    meta: [
      {
        title:
          "AEWV Recruitment Agency India | New Zealand Accredited Employer Work Visa | Damoder Immigration",
      },
      {
        name: "description",
        content:
          "MEA approved recruitment agency in India for New Zealand Accredited Employer Work Visa (AEWV). Certified trade deployments (Welders, Fitters, Electricians) under INZ WR1 instructions and ANZSCO standards.",
      },
      {
        property: "og:title",
        content:
          "AEWV Recruitment Agency India | New Zealand Work Visa Pathways | Damoder Immigration",
      },
      {
        property: "og:description",
        content:
          "Specialist overseas recruitment agency in India for NZ Accredited Employer Work Visas (AEWV). MEA licensed, statutory INZ WR1 compliance, and ANZSCO skilled trade placement.",
      },
      {
        property: "og:url",
        content: "https://dis.ind.in/aewv-recruitment-agency-india",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dis.ind.in/aewv-recruitment-agency-india",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aewvPageSchema),
      },
    ],
  }),
  component: AewvRecruitmentPage,
});

const heroMetrics = [
  {
    value: "WR1",
    label: "Statutory Manual",
    detail: "Full compliance with INZ Operational Manual WR1 AEWV standards",
  },
  {
    value: "100%",
    label: "eMigrate Compliant",
    detail: "MEA Approved RA for legal non-exploitative Indian deployment",
  },
  {
    value: "ANZSCO 3-5",
    label: "Skilled Trades",
    detail: "Welders, fitters, electricians, carpenters & diesel mechanics",
  },
  {
    value: "30 hrs+",
    label: "Full-Time Standard",
    detail: "Statutory minimum hours at immigration wage thresholds",
  },
];

const compliancePillars = [
  {
    icon: ShieldCheck,
    badge: "Employer Prerequisite",
    title: "INZ Employer Accreditation (Standard / High-Volume)",
    description:
      "Under INZ Operational Manual WR1.5, New Zealand employers must hold active Accreditation before hiring overseas workers. We verify the employer's accreditation tier, settlement support compliance, and direct-employment commitments to ensure candidates are placed in protected, legitimate workplaces.",
    statute: "INZ Operational Manual WR1.5",
  },
  {
    icon: FileCheck2,
    badge: "Labor Market Test",
    title: "Approved Job Check Verification",
    description:
      "Every AEWV candidate filing requires an approved INZ Job Check (WR1.10) confirming the role meets prevailing market remuneration, fulfills advertising requirements, and specifies approved ANZSCO skill requirements before candidate invitation.",
    statute: "INZ Operational Manual WR1.10",
  },
  {
    icon: Scale,
    badge: "Remuneration & Terms",
    title: "Immigration Wage Thresholds & 30-Hour Full-Time Guarantee",
    description:
      "Employment contracts must provide minimum 30 guaranteed hours per week at or above role-specific immigration wage thresholds or applicable sector agreement rates. INZ rules strictly prohibit 90-day trial periods for AEWV hires.",
    statute: "INZ Operational Manual WR1.15",
  },
  {
    icon: Award,
    badge: "Candidate Eligibility",
    title: "Minimum Skill Thresholds (3 Years Experience / NZQF L4+)",
    description:
      "Under updated AEWV regulations, candidates must demonstrate either a minimum of 3 years of verifiable relevant work experience OR a qualification at Level 4+ on the New Zealand Qualifications Framework (NZQA assessed). Roles at ANZSCO Level 4 and 5 must meet the mandatory English standard (IELTS 4.0 or approved equivalent).",
    statute: "INZ Operational Manual WR1.20",
  },
];

const anzscoTrades = [
  {
    code: "322311",
    title: "Welder (First Class)",
    skillLevel: "Level 3",
    qualifications: "3+ yrs heavy fabrication (6G/GMAW/FCAW/GTAW) or NZQA Level 4 equivalent",
    wageGuidance: "Market rate at or above immigration wage threshold",
    stayDuration: "Up to 5 years maximum continuous stay",
  },
  {
    code: "323211",
    title: "Fitter (General)",
    skillLevel: "Level 3",
    qualifications: "3+ yrs industrial maintenance, hydraulic systems, plant assembly",
    wageGuidance: "Market rate at or above immigration wage threshold",
    stayDuration: "Up to 5 years maximum continuous stay",
  },
  {
    code: "341111",
    title: "Electrician (General)",
    skillLevel: "Level 3",
    qualifications: "3+ yrs industrial installation; EWRB provisional pathways",
    wageGuidance: "Market rate at or above immigration wage threshold",
    stayDuration: "Up to 5 years maximum continuous stay",
  },
  {
    code: "331212",
    title: "Carpenter / Joiner",
    skillLevel: "Level 3",
    qualifications: "3+ yrs commercial framing, formwork, or interior joinery",
    wageGuidance: "Market rate at or above immigration wage threshold",
    stayDuration: "Up to 5 years maximum continuous stay",
  },
  {
    code: "321210",
    title: "Diesel Motor Mechanic",
    skillLevel: "Level 3",
    qualifications: "3+ yrs heavy commercial fleet, earthmoving or agricultural plant maintenance",
    wageGuidance: "Market rate at or above immigration wage threshold",
    stayDuration: "Up to 5 years maximum continuous stay",
  },
];

const deploymentSteps = [
  {
    step: "01",
    title: "NZQA & Skill Assessment Audit",
    detail:
      "We verify candidate qualifications against the New Zealand Qualifications Framework (NZQF) and audit 3+ years of verifiable EPF/tax/experience documentation.",
  },
  {
    step: "02",
    title: "Employer Accreditation & Job Check Match",
    detail:
      "Matching verified trade talent against New Zealand accredited employers with pre-approved INZ Job Checks under WR1 instructions.",
  },
  {
    step: "03",
    title: "Trade Testing & Skill Rigor Verification",
    detail:
      "Hands-on welding, fabrication, or electrical testing conducted in certified test bays matching New Zealand health, safety, and operational standards.",
  },
  {
    step: "04",
    title: "MEA eMigrate Clearance & Visa Lodgement",
    detail:
      "Statutory clearance processed under Ministry of External Affairs eMigrate portal, followed by electronic AEWV application submission and deployment onboarding.",
  },
];

function AewvRecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        eyebrow="MEA Approved Overseas Recruitment · New Zealand Corridor"
        title="AEWV Recruitment Agency in India: Certified New Zealand Work Visa Deployments"
        subtitle="Damoder Immigration Services connects accredited New Zealand employers with certified Indian trade professionals under Immigration New Zealand WR1 instructions, ANZSCO standards, and Ministry of External Affairs eMigrate compliance."
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-ember/90"
          >
            Consult AEWV Desk <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            INZ WR1 Policy <ExternalLink className="size-4" />
          </a>
        </div>
      </PageHero>

      {/* Metrics Banner */}
      <section className="border-b border-slate-100 bg-slate-50/80 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {heroMetrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="font-display text-2xl font-bold text-brand-deep sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Compliance Matrix */}
      <Section
        eyebrow="Regulatory Grounding"
        title="Statutory Compliance Framework: INZ WR1 & MEA Alignment"
        intro="Every candidate deployment adheres strictly to the Immigration Act 2009, Immigration New Zealand WR1 instructions, and Indian Emigration Act 1983 standards. Zero shortcuts, zero unaccredited placements."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {compliancePillars.map((p) => {
            const Icon = p.icon;
            return (
              <MotionCard key={p.title} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-brand-primary">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-3 text-xs font-medium text-slate-400">
                  Statute: <code className="text-brand-primary font-mono">{p.statute}</code>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </Section>

      {/* ANZSCO Trade Matrix & Remuneration Table */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
              ANZSCO Trade Classifications
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Approved Trade Corridors & Wage SLA Standards
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Under New Zealand immigration regulations, candidates must align with specific Australian and New Zealand Standard Classification of Occupations (ANZSCO) criteria and immigration wage thresholds.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-100/90 text-xs font-semibold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-4">ANZSCO Code</th>
                    <th className="px-5 py-4">Trade Title</th>
                    <th className="px-5 py-4">Skill Level</th>
                    <th className="px-5 py-4">Experience / NZQA Criteria</th>
                    <th className="px-5 py-4">Remuneration Benchmark</th>
                    <th className="px-5 py-4">Maximum Stay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {anzscoTrades.map((t) => (
                    <tr key={t.code} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-5 py-4 font-mono text-xs font-bold text-brand-primary">
                        {t.code}
                      </td>
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {t.title}
                      </td>
                      <td className="px-5 py-4 text-xs">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700">
                          {t.skillLevel}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-600 max-w-xs">
                        {t.qualifications}
                      </td>
                      <td className="px-5 py-4 text-xs font-medium text-slate-800">
                        {t.wageGuidance}
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-600">
                        {t.stayDuration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 text-xs text-slate-500">
              Note: Remuneration must meet or exceed the relevant immigration wage thresholds or applicable sector agreement rates in effect at the time of Job Check approval. 90-day trial periods are prohibited under WR1 instructions.
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Deployment Protocol */}
      <Section
        eyebrow="Deployment Methodology"
        title="4-Stage End-to-End India-to-NZ Deployment Protocol"
        intro="From initial NZQA eligibility pre-check to post-arrival settlement support in New Zealand, our bilateral protocol ensures total regulatory integrity."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentSteps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-3xl font-black text-brand-primary/20">
                  {s.step}
                </div>
                <h3 className="mt-2 font-display text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {s.detail}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                <CheckCircle2 className="size-4 text-emerald-600" /> Stage Verified
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Primary Regulatory Authorities Verification */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Primary Source Verification
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                  Official Statutory Resources & Verification Portals
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  All AEWV deployments are subject to direct verification on the official Ministry of External Affairs eMigrate registry and the Immigration New Zealand Operational Manual repository.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://emigrate.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:border-brand-primary"
                >
                  <span>MEA eMigrate Portal</span>
                  <ExternalLink className="size-4 text-slate-400" />
                </a>
                <a
                  href="https://www.immigration.govt.nz/opsmanual/#73437.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:border-brand-primary"
                >
                  <span>INZ WR1 Manual</span>
                  <ExternalLink className="size-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        eyebrow="Accredited Employer & Candidate Inquiries"
        title="Partner with a Licensed AEWV Overseas Recruitment Agency"
        subtitle="Whether you are an accredited New Zealand employer seeking certified skilled trades or an Indian professional seeking legitimate overseas placement, our licensed team is ready to assist."
      />
    </div>
  );
}
