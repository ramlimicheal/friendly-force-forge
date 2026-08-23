import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HardHat,
  Stethoscope,
  UtensilsCrossed,
  Flame,
  Truck,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  Award,
  Zap,
  Layers,
  Sparkles,
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
      { title: "Industry Verticals | Overseas Manpower Supply & Trade Benchmark" },
      {
        name: "description",
        content:
          "Specialized overseas staffing for Civil Infrastructure, Oil & Gas EPC, Healthcare, Hospitality, Logistics, and Engineering sectors across Europe, Gulf, and USA.",
      },
      { property: "og:title", content: "Industries We Staff | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Trade-tested manpower supply across 6 core industry verticals with rigorous compliance and certification audits.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/industries" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Industrial Sector Overseas Recruitment",
          "serviceType": "Sector-Specific Overseas Workforce Mobilization",
          "provider": {
            "@type": "EmploymentAgency",
            "name": "Damoder Immigration Services"
          }
        })
      }
    ]
  }),
  component: IndustriesPage,
});

const industryMetrics = [
  {
    value: "6",
    label: "Dedicated Sector Desks",
    detail: "Specialized recruitment divisions led by technical domain experts",
  },
  {
    value: "150+",
    label: "Certified Trade Roles",
    detail: "From specialized craftsmen to chartered project engineers",
  },
  {
    value: "18,000+",
    label: "Global Deployments",
    detail: "Mobilized across Gulf, Schengen Europe, and North America",
  },
  {
    value: "100%",
    label: "Practical Trade Audit",
    detail: "Zero on-site skill mismatch via certified workshop testing",
  },
];

const sectors = [
  {
    icon: HardHat,
    title: "Civil & Mega Infrastructure",
    badge: "EPC & Contracting",
    accent: "text-amber-600 bg-amber-500/10",
    desc: "Supplying high-volume trade crews for major infrastructure, highway bridges, commercial high-rises, and industrial townships across the GCC and Europe.",
    roles: [
      "Shuttering Carpenters & Formwork Erectors",
      "Steel Fixers & Rebar Fabricators",
      "Block / Plaster Masons & Tile Setters",
      "Certified Scaffolders (CITB / CISRS Standard)",
      "Civil Site Engineers & General Foreman",
    ],
    standards: "Tested on structural alignment, formwork load tolerances, and blueprint reading.",
  },
  {
    icon: Flame,
    title: "Oil, Gas & Petrochemical EPC",
    badge: "High Precision",
    accent: "text-red-600 bg-red-500/10",
    desc: "Rigorous vetting for refinery expansions, LNG pipelines, offshore platforms, and petrochemical shutdown maintenance mandates.",
    roles: [
      "6G SMAW / TIG / FCAW High-Pressure Welders",
      "Pipe Fabricators & Spool Fitters",
      "Certified Heavy Riggers & Banksmen",
      "Instrument Technicians & Calibration Specialists",
      "NEBOSH / OSHA Certified Safety Officers (HSE)",
    ],
    standards: "100% radiographic X-ray inspection & third-party metallurgy testing.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Nursing Services",
    badge: "Clinical Talent",
    accent: "text-emerald-600 bg-emerald-500/10",
    desc: "Placing registered clinical talent in government hospital groups, private medical cities, and long-term geriatric care centers in Germany, Gulf, and Europe.",
    roles: [
      "Registered Nurses (ICU, OT, CCU, Emergency, Dialysis)",
      "General Ward Staff Nurses (B.Sc / GNM)",
      "Medical Laboratory Technologists (MLT)",
      "Radiographers, Ultrasound & MRI Technicians",
      "Certified Caregivers & Physiotherapists",
    ],
    standards: "Complete handholding for DataFlow, Prometric, Saudi Mumaris+, and German B1/B2 track.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality, Tourism & Catering",
    badge: "5-Star & Resorts",
    accent: "text-orange-600 bg-orange-500/10",
    desc: "Supplying culinary talent and guest service teams to luxury hotels, international cruise liners, restaurant chains, and mega banquet catering facilities.",
    roles: [
      "Executive Chefs, Sous Chefs & Chef de Partie",
      "Commis I, II, III (Continental, Arabic, Asian, Indian)",
      "F&B Captains, Waiters & Professional Baristas",
      "Executive Housekeepers & Room Attendants",
      "Front Office Executives & Guest Relation Officers",
    ],
    standards: "Tested in live commercial kitchens on HACCP standards, prep speed, and English grooming.",
  },
  {
    icon: Truck,
    title: "Logistics, Warehousing & Fleet",
    badge: "Supply Chain",
    accent: "text-blue-600 bg-blue-500/10",
    desc: "Powering modern automated fulfillment centers, cross-border freight operations, and heavy logistics yards with vetted drivers and material handlers.",
    roles: [
      "Heavy Articulated Trailer & HGV Drivers",
      "Counterbalance Forklift & Reach Truck Operators",
      "Warehouse Inventory Controllers & Order Pickers",
      "Fleet Dispatchers & Transportation Coordinators",
      "Automotive Diesel Mechanics & Hydraulic Specialists",
    ],
    standards: "Screened on closed-circuit test tracks with GCC and European license conversion support.",
  },
  {
    icon: Cpu,
    title: "Engineering, MEP & Advanced Tech",
    badge: "Technical Leadership",
    accent: "text-indigo-600 bg-indigo-500/10",
    desc: "Targeted recruitment for engineering consultancies, smart building installations, MEP contracting, and manufacturing automation divisions.",
    roles: [
      "BIM Modellers & AutoCAD MEP Draftsmen",
      "HVAC Project Engineers & Chiller Specialists",
      "Industrial PLC Automation & Switchgear Engineers",
      "QA/QC Mechanical & Electrical Inspectors",
      "Full-Stack Software Engineers & Cloud Architects",
    ],
    standards: "Screened on computerized CAD test stations and technical domain panels.",
  },
];

const sectorMatrix = [
  {
    sector: "Civil Construction",
    qualifications: "ITI / National Trade Certificate / 3+ Yrs Site Exp",
    testing: "On-site Formwork, Rebar Bending & Plumb-Line Rig",
    destinations: "Saudi Arabia (NEOM/Red Sea), UAE, Poland, Croatia",
  },
  {
    sector: "Oil, Gas & EPC",
    qualifications: "AWS 6G Certified / CSWIP / NEBOSH IGC",
    testing: "Radiographic Coupon Welding & Pressure Test Bench",
    destinations: "Saudi Aramco, Qatar Energy, Kuwait KNPC, USA",
  },
  {
    sector: "Healthcare",
    qualifications: "B.Sc Nursing / GNM + State Nursing Council Reg.",
    testing: "Clinical Vetting + DataFlow Primary Source Verification",
    destinations: "Germany (Blue Card), Saudi MoH, UAE DHA, Malta",
  },
  {
    sector: "Hospitality",
    qualifications: "Hotel Management Degree / Diploma + 3+ Yrs Exp",
    testing: "Live Commercial Cooking Range & Service Audits",
    destinations: "Malta Resorts, Poland, Dubai 5-Star Chains, USA J-1",
  },
  {
    sector: "Logistics",
    qualifications: "Valid Heavy Driving License + Clean Driving Record",
    testing: "Heavy Trailer Maneuvering & Simulator Track Test",
    destinations: "Poland Logistics Hubs, UAE, Saudi Arabia, Germany",
  },
  {
    sector: "Engineering & Tech",
    qualifications: "B.E. / B.Tech / M.Tech in Respective Domain",
    testing: "Computerized CAD/BIM Speed Test & Technical Board",
    destinations: "Germany, Poland, USA H-1B, Gulf Contracting",
  },
];

function IndustriesPage() {
  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="Industry Verticals · Specialized Overseas Deployment"
        title="Engineered Workforce Deployment Across 6 Core Global Sectors"
        subtitle="Each industrial vertical operates with dedicated trade-testing workshops, sector-specific credential audits (AWS, ASME, DataFlow, Prometric, NEBOSH), and tailored mobilization pipelines."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/employer-services"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Hire Industry Manpower
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="#sector-matrix"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Sector Qualification Matrix
          </a>
        </div>
      </PageHero>

      {/* 2. Industry Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {industryMetrics.map((m) => (
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

      {/* 3. Deep Sector Architectural Cards */}
      <Section
        eyebrow="Sector Depth"
        title="Six specialized recruitment divisions"
        intro="We do not maintain a generic labor pool. Each division is staffed by recruitment leads with deep technical domain knowledge and dedicated testing infrastructure."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <StaggerItem key={s.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex size-12 items-center justify-center rounded-lg ${s.accent}`}>
                      <s.icon className="size-6" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-brand-deep">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      In-Demand Positions
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      {s.roles.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-md bg-paper p-3.5 border border-border/80 text-xs text-muted-foreground">
                  <span className="font-semibold text-brand-deep">Audit Protocol: </span>
                  {s.standards}
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. Sector Compliance & Certification Matrix */}
      <Section
        id="sector-matrix"
        tone="muted"
        eyebrow="Verification Standards"
        title="Sector qualification & trade testing matrix"
        intro="Every candidate deployed across these verticals must satisfy mandatory statutory credentials and practical trade benchmark scores."
      >
        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-xs">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-paper text-xs uppercase tracking-wider text-brand-deep">
              <tr>
                <th className="px-6 py-4 font-bold">Industry Sector</th>
                <th className="px-6 py-4 font-bold">Mandatory Qualifications</th>
                <th className="px-6 py-4 font-bold">Practical Testing Rig</th>
                <th className="px-6 py-4 font-bold">Primary Corridors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {sectorMatrix.map((row) => (
                <tr key={row.sector} className="hover:bg-paper/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-deep">{row.sector}</td>
                  <td className="px-6 py-4 text-xs leading-relaxed text-muted-foreground">{row.qualifications}</td>
                  <td className="px-6 py-4 text-xs font-medium text-foreground">{row.testing}</td>
                  <td className="px-6 py-4 text-xs text-brand font-semibold">{row.destinations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 5. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
