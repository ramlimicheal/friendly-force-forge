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
      { title: "Gulf & GCC Manpower Recruitment | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "High-capacity manpower deployment to Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. Structured mobilization cycles and direct client mandates.",
      },
      { property: "og:title", content: "Gulf & GCC Manpower Recruitment | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Trade-tested workforce deployed across GCC nations with complete compliance and structured mobilization cycles.",
      },
      { property: "og:url", content: "https://dis.ind.in/destinations/gulf-gcc" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/destinations/gulf-gcc" },
    ],
  }),
  component: GulfPage,
});

const gccCountries = [
  {
    code: "sa",
    flagUrl: "https://flagcdn.com/w160/sa.webp",
    country: "Saudi Arabia (KSA)",
    badge: "Vision 2030 Projects",
    capital: "Riyadh & NEOM",
    currency: "SAR (﷼)",
    focus: "EPC Oil & Gas Turnarounds, NEOM Infrastructure & Plant Engineering",
    desc: "Massive infrastructure investments across NEOM, Red Sea Project, Aramco EPC shutdown turnarounds, and civil mega-structures under direct employer sponsorship.",
    roles: ["6G Pipe Welders & Fabricators", "Civil Project Engineers", "Heavy Crane Operators", "Electrical MEP Techs"],
  },
  {
    code: "ae",
    flagUrl: "https://flagcdn.com/w160/ae.webp",
    country: "United Arab Emirates",
    badge: "Commercial & Hospitality",
    capital: "Dubai & Abu Dhabi",
    currency: "AED (د.إ)",
    focus: "Luxury 5-Star Hospitality, Commercial Skyscrapers & Aviation Logistics",
    desc: "High-spec commercial skyscrapers, luxury hotel chains, aviation cargo logistics, and facility management services with transparent employment terms.",
    roles: ["Hotel Chefs & Baristas", "Facility MEP Supervisors", "Logistics & Transport Drivers", "QA/QC Technicians"],
  },
  {
    code: "qa",
    flagUrl: "https://flagcdn.com/w160/qa.webp",
    country: "Qatar",
    badge: "Energy & Infrastructure",
    capital: "Doha & Ras Laffan",
    currency: "QAR (﷼)",
    focus: "LNG Terminal Expansion & Urban Transport Networks",
    desc: "Major LNG gas expansion projects, industrial energy plants, urban transport networks, and municipal facilities maintenance under corporate mandates.",
    roles: ["Instrument Technicians", "Scaffolding Supervisors", "Mechanical Fitters", "Safety Officers"],
  },
  {
    code: "kw",
    flagUrl: "https://flagcdn.com/w160/kw.webp",
    country: "Kuwait",
    badge: "Refinery & Marine",
    capital: "Kuwait City",
    currency: "KWD (د.ك)",
    focus: "Oil Refinery Modernization & Marine Port Operations",
    desc: "Refinery plant maintenance, power generation facility modernization, and marine port logistics with complete statutory compliance.",
    roles: ["Refinery Pipe Fitters", "Industrial Electricians", "Diesel Mechanics", "Civil Foremen"],
  },
  {
    code: "om",
    flagUrl: "https://flagcdn.com/w160/om.webp",
    country: "Oman",
    badge: "EPC & Logistics",
    capital: "Muscat & Duqm",
    currency: "OMR (﷼)",
    focus: "Duqm Special Economic Zone & Petrochemical Refining",
    desc: "Duqm Special Economic Zone, port logistics, petrochemical processing, and renewable energy pilot projects with verified working conditions.",
    roles: ["Structural Welders", "Warehouse Operators", "MEP Supervisors", "Laboratory Analysts"],
  },
  {
    code: "bh",
    flagUrl: "https://flagcdn.com/w160/bh.webp",
    country: "Bahrain",
    badge: "Industrial & Manufacturing",
    capital: "Manama",
    currency: "BHD (.د.ب)",
    focus: "Aluminum Manufacturing & Financial Hub Infrastructure",
    desc: "Aluminum smelting facilities, commercial banking infrastructure, logistics centers, and residential developments.",
    roles: ["Foundry Technicians", "Maintenance Electricians", "Civil Masons", "Transport Drivers"],
  },
];

function GulfPage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Gulf Cooperation Council Corridors · Damoder Immigration Services (Hyderabad)"
        title="Gulf & GCC Overseas Manpower Recruitment & Placement"
        subtitle="Trade-tested Indian workforce deployed across Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain under structured mobilization schedules."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Inquire for GCC Placement
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Openings
          </Link>
        </div>
      </PageHero>

      {/* 2. Flag Marquee */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              GCC Member States:
            </span>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {gccCountries.map((d) => (
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

      {/* 3. GCC Country Cards */}
      <Section
        eyebrow="Corridor Breakdown"
        title="Gulf deployment destinations and live project corridors"
        intro="Direct client mandates with verified accommodation, statutory insurance, and structured contracts."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gccCountries.map((d) => (
            <StaggerItem key={d.country}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-border/80 bg-paper">
                        <img
                          src={d.flagUrl}
                          alt={`${d.country} flag logo`}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ember">
                          {d.code.toUpperCase()} · {d.currency}
                        </span>
                        <h3 className="font-display text-xl font-bold text-brand-deep leading-tight">
                          {d.country}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {d.badge}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-brand-deep bg-paper p-2 rounded-md border border-border/80">
                    📍 {d.focus}
                  </p>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      In-Demand Positions
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                      {d.roles.map((r) => (
                        <li key={r} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                          <span>{r}</span>
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
                    <span>Request Placement Details</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
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
