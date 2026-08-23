import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Users,
  Wrench,
  ShieldCheck,
  Building2,
  HardHat,
  Flame,
  Zap,
  Truck,
  UtensilsCrossed,
  FileCheck2,
  CheckCircle2,
  Clock,
  ArrowRight,
  PlaneTakeoff,
  Award,
  Video,
  Layers,
  Send,
  CalendarCheck,
  Sparkles,
  Search,
  Scale,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/employer-services")({
  head: () => ({
    meta: [
      { title: "Employer Services | Overseas Manpower Recruitment & Trade Testing" },
      {
        name: "description",
        content:
          "High-capacity overseas manpower deployment and accredited trade testing for global EPC contractors and employers in Gulf, Schengen Europe, and USA.",
      },
      { property: "og:title", content: "Overseas Manpower & Trade Testing | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "SLA-backed bulk hiring, certified trade testing workshops, GAMCA medicals, eMigrate processing and skill & compliance guarantees.",
      },
    ],
  }),
  component: EmployerPage,
});

const metrics = [
  {
    value: "350+",
    label: "Active Corporate Clients",
    detail: "Tier-1 EPC contractors, hospital groups & hospitality chains",
  },
  {
    value: "18,000+",
    label: "Trade-Tested Deployments",
    detail: "Certified craftsmen and professionals mobilized globally",
  },
  {
    value: "22–26",
    suffix: "Weeks",
    label: "Average Mobilisation Cycle",
    detail: "From demand letter receipt to touchdown at client worksite",
  },
  {
    value: "100%",
    label: "Skill Verification Guarantee",
    detail: "Practical workshop grading eliminates on-site mismatches",
  },
];

const enterpriseSolutions = [
  {
    icon: Users,
    badge: "High Volume",
    title: "Bulk Blue-Collar Mobilisation",
    desc: "Rapid deployment of 50 to 1,000+ craftsmen across civil infrastructure, EPC plants, logistics, and facilities management. Sourced from deep talent clusters across 20+ Indian states.",
    highlights: [
      "Masons, Steel Fixers & Shuttering Carpenters",
      "6G SMAW/TIG/FCAW Certified Welders & Pipe Fitters",
      "Industrial Electricians, MEP Plumbers & Riggers",
      "Heavy Equipment, Crane & Trailer Operators",
    ],
  },
  {
    icon: Briefcase,
    badge: "Executive & Tech",
    title: "Specialized Technical & White-Collar Search",
    desc: "Targeted headhunting for mission-critical project supervision, engineering design, safety leadership, and healthcare specialists with authenticated credentials.",
    highlights: [
      "Project Engineers (Civil, Mechanical, Electrical)",
      "NEBOSH & OSHA Certified Safety Officers",
      "QA/QC Inspectors & NDT Level II/III Specialists",
      "Registered Nurses (B.Sc/GNM) & Medical Technicians",
    ],
  },
  {
    icon: Video,
    badge: "Selection Suite",
    title: "Client Delegation Drives & Live Video Testing",
    desc: "Seamless hosting for client recruitment delegations visiting India, or high-definition multi-camera remote streaming for live practical assessments from your headquarters.",
    highlights: [
      "5-Star Executive Hospitality & Private Interview Suites",
      "Multi-Angle HD Live Workshop Video Streams",
      "Customized Skill Matrix & Grading Scorecards",
      "Simultaneous Multi-Panel Candidate Evaluation",
    ],
  },
  {
    icon: FileCheck2,
    badge: "Zero Friction",
    title: "Statutory Emigration, Visa & Flight Logistics",
    desc: "Complete end-to-end statutory compliance managed in-house through government portals, embassy channels, and accredited medical clinics under strict SLAs.",
    highlights: [
      "MEA eMigrate Portal POA & Demand Letter Execution",
      "GAMCA / Wafid Medical Clearance & PCC Verification",
      "Embassy Document Attestation & Visa Stamping",
      "Charter Manifests & Pre-Departure Safety Briefings",
    ],
  },
];

const tradeTestingFacilities = [
  {
    icon: Flame,
    title: "Welding & Metallurgy Rigs",
    specs: "3G, 4G & 6G SMAW, GTAW (TIG), GMAW (MIG) & FCAW",
    desc: "Dedicated welding booths with computerized coupon preparation, root-pass inspection, and on-site radiography / bend-testing machines for structural and high-pressure pipe welders.",
  },
  {
    icon: Zap,
    title: "Electrical & MEP Simulators",
    specs: "Industrial 3-Phase, PLC Panels & HVAC Chillers",
    desc: "Fully equipped electrical panels with circuit breaker wiring, conduit threading, motor control circuits, HVAC compressor troubleshooting, and fire alarm simulation bays.",
  },
  {
    icon: HardHat,
    title: "Civil & Structural Testing Yards",
    specs: "Scaffolding, Formwork & Precision Masonry",
    desc: "Outdoor test yards featuring heavy shoring assembly, column rebar fabrication, level/plumb masonry alignment tracks, and ceramic tile setting grids.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Culinary Suites",
    specs: "Commercial Multi-Cuisine Ranges & Banquet Sets",
    desc: "Commercial stainless steel kitchens with multi-tier ovens, prep stations, live cooking testing for Commis/Sous Chefs, barista coffee stations, and mock hotel guestrooms.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment & Automotive Bays",
    specs: "Hydraulic Excavators, Forklifts & Diesel Engines",
    desc: "Closed-circuit operating tracks for heavy mobile cranes, wheel loaders, and forklifts, alongside mechanical bays for diesel fuel injection and transmission overhaul audits.",
  },
  {
    icon: Building2,
    title: "BIM & Engineering Workstations",
    specs: "AutoCAD, Revit MEP & Computerized Screening",
    desc: "High-spec computer lab for drafters, quantity surveyors, and estimators to verify blueprint interpretation speed, structural modeling, and English technical fluency.",
  },
];

const evaluationCriteria = [
  {
    num: "01",
    title: "Technical Execution & Precision",
    desc: "Dimensional accuracy, weld penetration, wiring neatness, or culinary taste strictly tested against international standards (AWS, ASME, BS, IEEE).",
  },
  {
    num: "02",
    title: "Blueprint & Diagram Reading",
    desc: "Candidate ability to independently interpret complex architectural, piping isometric, or electrical schematics without supervision.",
  },
  {
    num: "03",
    title: "HSE, PPE & Tool Safety Compliance",
    desc: "Mandatory adherence to safety protocols, correct personal protective equipment usage, and proper handling of heavy tools.",
  },
  {
    num: "04",
    title: "Productivity & Speed of Output",
    desc: "Timed task completion to evaluate real-world output capacity and suitability for fast-track project schedules.",
  },
];

const slaTimeline = [
  {
    stage: "Stage 01",
    weeks: "Weeks 1–3",
    title: "Demand Intake & Specification Lock",
    desc: "Review Job Descriptions, wage structure, accommodation terms, and finalize the recruitment agreement and eMigrate demand filing.",
    tag: "Planning",
  },
  {
    stage: "Stage 02",
    weeks: "Weeks 4–10",
    title: "Sourcing & Workshop Pre-Testing",
    desc: "Shortlisting from our 100,000+ candidate database and regional skill centers. Candidates undergo preliminary technical audits and document validation.",
    tag: "Auditing",
  },
  {
    stage: "Stage 03",
    weeks: "Weeks 11–15",
    title: "Client Interviews & Final Selection",
    desc: "Client conducts in-person interviews at our testing centers in India or via live multi-camera HD virtual workshops. Final selection roll finalized.",
    tag: "Selection",
  },
  {
    stage: "Stage 04",
    weeks: "Weeks 16–35",
    title: "Medicals, Visas & MEA Clearance",
    desc: "GAMCA/Wafid medical fitness tests, Police Clearance (PCC), embassy visa stamping, and statutory emigration clearance on the eMigrate portal.",
    tag: "Compliance",
  },
  {
    stage: "Stage 05",
    weeks: "Weeks 36–45",
    title: "Pre-Departure & Staged Mobilisation",
    desc: "Pre-departure cultural and safety orientation, flight ticketing, staged flight manifests, and handoff to the employer's HR team on site.",
    tag: "Deployment",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "100% Statutory Compliance Guarantee",
    desc: "If any deployed candidate fails to meet the agreed skill standard or breaches conduct terms during the 90-day probationary window, we provide a qualified replacement at zero additional service charge.",
  },
  {
    icon: Scale,
    title: "100% MEA Legal Indemnity",
    desc: "Operating strictly under MEA Registration License B-0824/TN/PER/1000+/5/9821/2021. Complete legal immunity for employers through official government emigration workflows.",
  },
  {
    icon: Award,
    title: "Strict Ethical Recruitment Covenant",
    desc: "We adhere strictly to the Dhaka Principles and ILO Fair Recruitment standards. Candidates are never charged unlawful recruitment fees, ensuring motivated, unburdened workers.",
  },
];

function EmployerPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* 1. Standard Compact Top Banner with High-Visibility PixelBlast */}
      <PageHero
        eyebrow="For Global Employers & EPC Contractors · MEA Registered B-0824/TN/PER/1000+/5/9821/2021"
        title="Scalable, Trade-Tested Indian Manpower Mobilised on Schedule"
        subtitle="From 50-person specialized trade crews to 1,000+ bulk infrastructure labor deployments across the Gulf, Schengen Europe, and the Americas. Sourced, trade-tested, documented, and deployed under one accountable contract."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#request-manpower"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Submit Demand Letter
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#trade-testing"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Trade Testing Labs
          </a>
        </div>
      </PageHero>

      {/* 2. Executive Capacity Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {metrics.map((m) => (
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

      {/* 3. Enterprise Manpower Solutions */}
      <Section
        eyebrow="Enterprise Solutions"
        title="End-to-end recruitment capabilities for global projects"
        intro="Whether mobilizing full construction divisions or targeted technical leadership, our infrastructure handles the complete talent lifecycle with zero compliance friction."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {enterpriseSolutions.map((sol) => (
            <StaggerItem key={sol.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <sol.icon className="size-6" />
                  </div>
                  <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                    {sol.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                  {sol.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sol.desc}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Core Roles &amp; Capabilities
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    {sol.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. Trade Testing & Skill Auditing Center Showcase */}
      <Section
        id="trade-testing"
        tone="muted"
        eyebrow="Accredited Infrastructure"
        title="State-of-the-art trade testing & skill audit facilities"
        intro="We operate specialized technical workshops across India where candidates perform real-world trade tasks before selection, ensuring zero on-site skill mismatch."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tradeTestingFacilities.map((fac) => (
            <StaggerItem key={fac.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-lg bg-ember/10 text-ember">
                  <fac.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-brand-deep">
                  {fac.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand">{fac.specs}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{fac.desc}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 5-Point Evaluation Methodology */}
        <div className="mt-12 rounded-lg border border-border bg-card p-8 shadow-xs">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
              <Sparkles className="size-3.5 text-ember" />
              Standardized Quality Control
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-deep">
              The 4-Point Trade Audit Protocol
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every candidate evaluated in our partner workshops is scored across 4 core benchmarks before a formal competency scorecard is issued to the employer.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evaluationCriteria.map((c) => (
              <div key={c.num} className="rounded-lg border border-border/80 bg-paper/60 p-5">
                <span className="font-display text-2xl font-bold text-ember">{c.num}</span>
                <h4 className="mt-2 font-display text-base font-bold text-brand-deep">{c.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. 5-Stage Precision Mobilisation SLA Timeline */}
      <Section
        eyebrow="Execution Rigor"
        title="5-Stage precision mobilisation SLA timeline"
        intro="A transparent, clockwork deployment workflow engineered to eliminate recruitment bottlenecks and meet tight project handover schedules."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-5 md:grid-cols-5">
          {slaTimeline.map((step, idx) => (
            <StaggerItem key={step.stage}>
              <MotionCard className="relative rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {step.stage}
                    </span>
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {step.tag}
                    </span>
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-ember">
                    {step.weeks}
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-muted-foreground">
                  Milestone {idx + 1} of 5
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 6. The Employer Protection Covenant (Guarantees & Compliance) */}
      <Section
        tone="muted"
        eyebrow="Accountability & Trust"
        title="The Employer Protection Covenant"
        intro="We provide ironclad guarantees so global enterprises can recruit at scale with absolute confidence."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {guarantees.map((g) => (
            <MotionCard key={g.title} className="rounded-lg border border-border bg-card p-7 shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <g.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-deep">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.desc}
              </p>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 7. Direct B2B Manpower Demand Letter Intake Terminal */}
      <Section
        id="request-manpower"
        eyebrow="Direct Enterprise Intake"
        title="Submit Manpower Requirement / Demand Letter"
        intro="Submit your hiring specifications below. A designated country recruitment manager will analyze your trade matrix and deliver a candidate mobilization proposal within 24 hours."
      >
        <FadeIn direction="up">
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6 sm:p-10 shadow-sm">
            <form
              className="grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  (e.target as HTMLFormElement).reset();
                  toast.success("Manpower requirement registered", {
                    description:
                      "Our country desk director will contact you with candidate profiles & mobilization timeline within 24 hours.",
                  });
                }, 600);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="company" className="font-semibold text-brand-deep">
                  Company / Contractor Name *
                </Label>
                <Input id="company" name="company" placeholder="e.g. Al-Futtaim Engineering / VINCI Construction" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="font-semibold text-brand-deep">
                  Authorized Contact Person *
                </Label>
                <Input id="contact" name="contact" placeholder="Name &amp; Designation (e.g. HR Director / Project Manager)" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-brand-deep">
                  Corporate Work Email *
                </Label>
                <Input id="email" name="email" type="email" placeholder="hr@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-brand-deep">
                  Phone / WhatsApp Number *
                </Label>
                <Input id="phone" name="phone" placeholder="+966 50 123 4567 / +48 22 123 4567" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="font-semibold text-brand-deep">
                  Destination Country of Deployment *
                </Label>
                <select
                  id="country"
                  name="country"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select country...</option>
                  <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                  <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Oman">Oman</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Poland">Poland</option>
                  <option value="Germany">Germany</option>
                  <option value="Malta">Malta</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Romania">Romania</option>
                  <option value="United States">United States (USA)</option>
                  <option value="Other">Other Global Destination</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry" className="font-semibold text-brand-deep">
                  Industry Sector *
                </Label>
                <select
                  id="industry"
                  name="industry"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select industry...</option>
                  <option value="Civil & Infrastructure Construction">Civil &amp; Infrastructure Construction</option>
                  <option value="Oil, Gas & Petrochemical EPC">Oil, Gas &amp; Petrochemical EPC</option>
                  <option value="Hospitality & Catering">Hospitality, Hotels &amp; Catering</option>
                  <option value="Healthcare & Nursing">Healthcare &amp; Nursing</option>
                  <option value="Logistics, Warehousing & Transport">Logistics, Warehousing &amp; Transport</option>
                  <option value="Manufacturing & Heavy Engineering">Manufacturing &amp; Heavy Engineering</option>
                  <option value="IT, Telecom & Engineering Design">IT, Telecom &amp; Engineering Design</option>
                  <option value="Other">Other Industry</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="headcount" className="font-semibold text-brand-deep">
                  Total Headcount Required *
                </Label>
                <select
                  id="headcount"
                  name="headcount"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select volume...</option>
                  <option value="10–50">10 – 50 Personnel</option>
                  <option value="50–150">50 – 150 Personnel</option>
                  <option value="150–300">150 – 300 Personnel</option>
                  <option value="300–500">300 – 500 Personnel</option>
                  <option value="500+">500+ Bulk Mobilisation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="font-semibold text-brand-deep">
                  Target Worksite Mobilisation Date *
                </Label>
                <Input id="date" name="date" type="date" required />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="details" className="font-semibold text-brand-deep">
                  Required Trades, Skill Levels &amp; Project Specifications *
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Specify trades (e.g. 50 6G Welders, 100 Shuttering Carpenters, 20 Riggers), required experience, salary ranges, food/accommodation provisions, and any specific trade test requirements."
                  required
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>SLA Guarantee: Dedicated Country Desk Manager assigned within 24 hours.</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto rounded-lg font-semibold bg-brand hover:bg-brand-deep text-white px-8"
                >
                  {submitting ? "Processing Requirement..." : "Submit Manpower Demand Letter"}
                </Button>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>

      {/* 8. Global CTA Banner with Departure Terminal Photo & Particle Mesh */}
      <CtaBanner />
    </>
  );
}
