import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse,
  ShieldCheck,
  Stamp,
  Building2,
  CheckCircle2,
  ArrowRight,
  Plane,
  FileCheck2,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/destinations/gulf-gcc")({
  head: () => ({
    meta: [
      { title: "Gulf & GCC Manpower Recruitment | Saudi Arabia, UAE, Qatar, Kuwait" },
      {
        name: "description",
        content:
          "High-capacity manpower deployment to Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. GAMCA/Wafid medicals, eMigrate clearance, and Enjaz stamping.",
      },
      { property: "og:title", content: "Gulf & GCC Manpower Recruitment | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Trade-tested Indian workforce deployed across 6 GCC nations with 100% MEA compliance and guaranteed 30-45 day mobilization cycles.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/destinations/gulf-gcc" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/destinations/gulf-gcc" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "Gulf Cooperation Council (GCC) Deployment Corridor",
          "description": "Recruitment corridors across Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": ["SA", "AE", "QA", "KW", "OM", "BH"]
          }
        })
      }
    ]
  }),
  component: GulfPage,
});

const gulfMetrics = [
  {
    value: "14,000+",
    label: "GCC Deployments",
    detail: "Certified craftsmen and supervisors deployed since 2004",
  },
  {
    value: "6",
    label: "GCC Nations Active",
    detail: "Saudi Arabia, UAE, Qatar, Kuwait, Oman & Bahrain",
  },
  {
    value: "30–40",
    suffix: "Days",
    label: "Selection to Touchdown",
    detail: "Fast-track processing for bulk construction & industrial orders",
  },
  {
    value: "100%",
    label: "eMigrate & PBBY Insurance",
    detail: "Full statutory legal indemnity for employers and workers",
  },
];

const countries = [
  {
    code: "sa",
    flagUrl: "https://flagcdn.com/w160/sa.webp",
    name: "Saudi Arabia (KSA)",
    capital: "Riyadh & Dammam",
    currency: "SAR (﷼)",
    focus: "Vision 2030, NEOM, Aramco EPC & Industrial Expansion",
    desc: "Our largest deployment corridor. We execute end-to-end Enjaz visa stamping, Qiwa digital contract authentication, Musaned clearances, and Wafid medical schedules for Tier-1 contractors.",
    roles: ["6G Pipe Welders & Fabricators", "Heavy Equipment Operators", "Civil Foremen & Site Engineers", "HVAC / MEP Technicians"],
    permits: "Qiwa Digital Contract · Enjaz Embassy Stamping · Muqeem ID",
  },
  {
    code: "ae",
    flagUrl: "https://flagcdn.com/w160/ae.webp",
    name: "United Arab Emirates (UAE)",
    capital: "Dubai & Abu Dhabi",
    currency: "AED (د.إ)",
    focus: "Commercial High-Rises, Infrastructure, Logistics & 5-Star Hospitality",
    desc: "Rapid mobilization for Dubai and Abu Dhabi mainland and free-zone enterprises. Managing MOHRE work permit quotas, electronic visa stamping, and Emirates ID pre-enrollment.",
    roles: ["Scaffolders & Formwork Carpenters", "Heavy Trailer / HGV Drivers", "Hospitality F&B & Culinary Staff", "BIM & CAD Draftsmen"],
    permits: "MOHRE Electronic Quota · Entry Permit · Emirates ID Medicals",
  },
  {
    code: "qa",
    flagUrl: "https://flagcdn.com/w160/qa.webp",
    name: "Qatar",
    capital: "Doha",
    currency: "QAR (﷼)",
    focus: "Qatar Energy LNG Expansion, Infrastructure Maintenance & Services",
    desc: "Complete handling of Qatar Visa Center (QVC) appointments in India, managing biometric capture, medical examinations, and direct Ministry of Interior work visa stamping.",
    roles: ["Industrial Electricians & Instrument Techs", "Steel Fixers & Masons", "Riggers & Safety Officers", "Facility Maintenance Crews"],
    permits: "QVC Biometrics in India · MOI Work Visa · QID Issuance",
  },
  {
    code: "kw",
    flagUrl: "https://flagcdn.com/w160/kw.webp",
    name: "Kuwait",
    capital: "Kuwait City",
    currency: "KWD (د.ك)",
    focus: "Refinery Modernization, Civil Works & Private Sector Mandates",
    desc: "Filing and tracking Article 18 private-sector work visas with verified chamber attestation and Public Authority for Manpower (PAM) quota allocations.",
    roles: ["Structural Welders & Fitters", "Heavy Diesel Mechanics", "Shuttering Carpenters", "General Construction Helpers"],
    permits: "PAM Work Permit · Article 18 Visa · Kuwait Embassy Stamping",
  },
  {
    code: "om",
    flagUrl: "https://flagcdn.com/w160/om.webp",
    name: "Oman",
    capital: "Muscat & Duqm",
    currency: "OMR (﷼)",
    focus: "Duqm Port & SEZ Development, Oilfields & Construction",
    desc: "Handling Ministry of Labour clearances, Royal Oman Police (ROP) employment visa processing, and GAMCA medical verification for skilled technicians.",
    roles: ["Pipe Fitters & Millwrights", "Excavator & Crane Drivers", "Duct Fabricators", "Commercial Drivers"],
    permits: "Ministry of Labour Approval · ROP Visa Stamping · Resident Card",
  },
  {
    code: "bh",
    flagUrl: "https://flagcdn.com/w160/bh.webp",
    name: "Bahrain",
    capital: "Manama",
    currency: "BHD (.د.ب)",
    focus: "BAPCO Refinery Expansion, Commercial Contracting & Facilities",
    desc: "Processing through the Labour Market Regulatory Authority (LMRA) for fast-track recruitment of trade-tested technical and facility management personnel.",
    roles: ["MEP Plumbers & Electricians", "Tile Masons & Painters", "Cleaners & Hospitality Staff", "Warehouse Storekeepers"],
    permits: "LMRA Work Permit · Bahrain Embassy Clearance · CPR Identity",
  },
];

const clearanceProtocols = [
  {
    icon: HeartPulse,
    title: "GAMCA / Wafid Medical Certification",
    badge: "Medical Clearance",
    desc: "Online appointment booking at GCC-approved diagnostic clinics across India, comprehensive physical and laboratory testing, and fitness certificate verification on the Wafid portal.",
  },
  {
    icon: ShieldCheck,
    title: "MEA eMigrate & PBBY Insurance",
    badge: "Statutory Protection",
    desc: "Mandatory Emigration Clearance for all ECR passport holders backed by Pravasi Bharatiya Bima Yojana (PBBY) insurance covering life, accident, and repatriation contingencies.",
  },
  {
    icon: Stamp,
    title: "Consular Submission & Visa Stamping",
    badge: "Embassy Liaison",
    desc: "Direct submission to the Royal Embassy of Saudi Arabia, UAE Consulates, and Gulf diplomatic missions in New Delhi and Mumbai for verified visa endorsement on physical passports.",
  },
];

const candidateChecklist = [
  { title: "Passport Validity", desc: "Original passport with minimum 24 months validity and 4 blank visa pages." },
  { title: "Attested Certificates", desc: "Trade / technical diploma authenticated by State HRD and destination embassy." },
  { title: "Prior Experience Records", desc: "Service letters and GCC exit visa stamps (for Ex-Gulf experienced candidates)." },
  { title: "GAMCA Fitness Report", desc: "Fit-to-work certificate issued by Wafid/GAMCA authorized medical laboratory." },
  { title: "Dual-Language Contract", desc: "Signed employment contract in English and Arabic specifying wages and perks." },
  { title: "Police Clearance (PCC)", desc: "PCC issued by Regional Passport Office (where required by destination country)." },
];

function GulfPage() {
  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="Primary Global Corridor · MEA Registered B-0824/TN/PER/1000+/5/9821/2021"
        title="High-Capacity Manpower Deployment Across the Gulf & GCC"
        subtitle="End-to-end recruitment for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain: eMigrate demand processing, GAMCA/Wafid medical fitness, embassy stamping, and staged site mobilization."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/employer-services"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Hire Gulf Manpower
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Browse Gulf Vacancies
          </Link>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {gulfMetrics.map((m) => (
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

      {/* 3. Official Country Flag Logos Marquee Ribbon */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Official GCC Member States:
            </span>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {countries.map((c) => (
                <div key={c.code} className="flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-1.5 shadow-2xs hover:border-brand/40 transition-colors">
                  <span className="flex size-6 shrink-0 overflow-hidden rounded-full border border-border shadow-2xs">
                    <img src={c.flagUrl} alt={c.name} className="size-full object-cover" />
                  </span>
                  <span className="text-xs font-bold text-brand-deep">{c.name.split(' ')[0]}</span>
                  <span className="text-[10px] text-muted-foreground">({c.capital.split(' ')[0]})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Six GCC Country Breakdown */}
      <Section
        eyebrow="Corridor Coverage"
        title="Six active Gulf deployment destinations"
        intro="We manage country-specific compliance portals, embassy visa regulations, and medical channels for each member nation of the Gulf Cooperation Council."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <StaggerItem key={c.name}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-border/80 bg-paper">
                        <img
                          src={c.flagUrl}
                          alt={`${c.name} flag logo`}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ember">
                          {c.code.toUpperCase()} · {c.currency}
                        </span>
                        <h3 className="font-display text-xl font-bold text-brand-deep leading-tight">
                          {c.name}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      GCC Member
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-ember bg-paper p-2 rounded-md border border-border/80">
                    {c.focus}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Primary Trades
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

                <div className="mt-6 rounded-md bg-paper p-3 border border-border/80 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Permit Flow: </span>
                  {c.permits}
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 5. Statutory Clearance Protocols */}
      <Section
        tone="muted"
        eyebrow="Statutory Compliance"
        title="GAMCA medicals, eMigrate & embassy stamping"
        intro="Every deployment adheres strictly to the Emigration Act 1983, ensuring complete legal indemnity for employers and social security protection for workers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {clearanceProtocols.map((p) => (
            <MotionCard key={p.title} className="rounded-lg border border-border bg-card p-8 h-full shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <p.icon className="size-6" />
                </div>
                <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 6. Document Checklist */}
      <Section
        eyebrow="Mobilisation Readiness"
        title="Candidate documentation checklist for GCC visas"
        intro="Ensure all documents meet strict embassy and eMigrate formatting standards prior to visa submission."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {candidateChecklist.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-deep">
                <CheckCircle2 className="size-4 text-brand shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
