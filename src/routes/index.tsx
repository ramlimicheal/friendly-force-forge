import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Globe2,
  Users,
  Building2,
  CheckCircle2,
  FileCheck2,
  Plane,
  ClipboardList,
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Truck,
  Cpu,
  Flame,
  Quote,
  AlertTriangle,
  ArrowUpRight,
  Briefcase,
  Target,
  GraduationCap,
  Landmark,
  FileText,
  CreditCard,
  Languages,
  BookOpen,
  ArrowRight,
  Award,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
  Compass,
  FileSignature,
  Headphones,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-mobilization.jpg";
import { DestinationsWhereWeDeploy } from "@/components/deployment-map";
import { WhoWeAre } from "@/components/who-we-are";
import { Section, CtaBanner, ChipLink } from "@/components/page-shell";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  MotionCard,
} from "@/components/motion-primitives";
import PixelBlast from "@/components/ui/pixel-blast";
import { company } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damoder Immigration Services | Visa & Immigration Consultants Hyderabad" },
      {
        name: "description",
        content:
          "A Complete Roundup of Visa Services at Damoder Immigration Services, Hyderabad. Seamless & stress-free visa process for New Zealand, Germany, Canada, Australia, UK & Europe: PR, Study, Work & Visitor Visas.",
      },
      {
        name: "keywords",
        content:
          "damoder immigration services hyderabad, new zealand visa consultants, germany jobseeker visa, canada pr express entry, australia study visa, hyderabad visa agency, tukkuguda immigration consultants, ielts inputs hyderabad",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Damoder Immigration Services | Hyderabad, India" },
      {
        property: "og:description",
        content:
          "Seamless and stress-free visa process to study, work, or settle in New Zealand, Germany, Canada, Australia, the UK, and Europe.",
      },
      { property: "og:url", content: "https://damoderimmigration.com" },
      { property: "og:image", content: "https://damoderimmigration.com/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Damoder Immigration Services | Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Expert visa counseling, eligibility checks, documentation filing, and IELTS inputs for New Zealand, Germany, Canada, Australia, UK & Europe.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://damoderimmigration.com/#website",
              "url": "https://damoderimmigration.com",
              "name": "Damoder Immigration Services",
              "description": "Premier visa and immigration consultancy based in Hyderabad, India.",
              "publisher": {
                "@id": "https://damoderimmigration.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://damoderimmigration.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which countries does Damoder Immigration Services specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Damoder Immigration Services specializes in New Zealand (Top Priority), Germany (Top European Priority), Canada, Australia, the United Kingdom, and European Schengen countries across PR, Study, Skilled Work, and Visitor visas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What visa categories do you handle?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We handle 6 primary visa categories: PR Visas (Permanent Residency), Study Visas (Higher Education & Post-Study Work), Skilled Work Permits, Visitor & Tourist Visas, Business & Investor Visas, and Dependent Family Visas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide IELTS coaching and language test support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide strategic IELTS / PTE inputs, practice materials, and exam slot booking to help candidates achieve top scores and maximize points for PR and university admissions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What concierge and value-added services are provided?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our concierge suite includes State HRD & MEA Apostille Attestation, Notary Services, Sworn Legal Translations, University Transcript Procurement, Education Bank Loans, Forex Cards, International SIM Cards, and Travel Insurance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is the Damoder Immigration Services headquarters located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our headquarters is located at 6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India. Clients can schedule an in-person or remote video consultation."
                  }
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: HomePage,
});

const counters = [
  {
    target: 12000,
    suffix: "+",
    label: "Successful Visa Grants",
    hint: "PR, Study, Work & Visitor visas granted across top global destinations.",
    tag: "Track Record",
    tagColor: "bg-ember/15 text-ember ring-ember/30",
    icon: Award,
  },
  {
    target: 6,
    suffix: " Flagship",
    label: "Core Destination Corridors",
    hint: "New Zealand, Germany, Canada, Australia, United Kingdom & Europe.",
    tag: "Global Focus",
    tagColor: "bg-[#1A2C53] text-white ring-white/20",
    icon: Globe2,
  },
  {
    target: 99,
    suffix: ".2%",
    label: "Documentation Accuracy",
    hint: "Zero-rejection pre-filing legal and regulatory compliance review.",
    tag: "Precision",
    tagColor: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/30",
    icon: FileCheck2,
  },
  {
    target: 7,
    suffix: " Pillars",
    label: "Dedicated Client Promise",
    hint: "Dedicated consultant, eligibility check, IELTS inputs & transparency.",
    tag: "Client Care",
    tagColor: "bg-brand/15 text-brand ring-brand/30",
    icon: UserCheck,
  },
];

const coreVisas = [
  {
    title: "PR VISA",
    subtitle: "Permanent Residency",
    desc: "Direct permanent settlement pathways for skilled professionals and families in New Zealand (SMC), Canada (Express Entry / PNP), Australia (Subclass 189/190), and Germany (EU Blue Card to Settlement).",
    badge: "Top Demand",
    features: ["Points Optimization", "ECA / Skills Assessment", "Expression of Interest (EOI)", "Post-Landing Assistance"],
    link: "/candidate-portal",
  },
  {
    title: "STUDY VISA",
    subtitle: "Higher Education Abroad",
    desc: "Admission counseling and visa processing for prestigious universities in New Zealand, UK, Germany, Canada, Australia, and Europe with generous post-study work rights and path to PR.",
    badge: "Popular",
    features: ["University Shortlisting", "IELTS / PTE Inputs", "SOP & Offer Letters", "Education Loan Support"],
    link: "/candidate-portal",
  },
  {
    title: "SKILLED WORK VISA",
    subtitle: "Employment Mobility",
    desc: "Accredited Employer Work Visas (New Zealand AEWV), German Opportunity Card (Chancenkarte), UK Skilled Worker, and European national D-visas for trade-tested talent.",
    badge: "Fast Track",
    features: ["Employer Verification", "Work Authorization", "Contract Review", "Embassy Stamping"],
    link: "/employer-services",
  },
  {
    title: "VISITOR VISA",
    subtitle: "Tourism & Business Visits",
    desc: "Stress-free visitor and tourist visa filing for family visits, international conferences, business exploration, and holidays across Schengen Europe, UK, USA, Australia, and New Zealand.",
    badge: "Quick Turnaround",
    features: ["Itinerary Planning", "Financial Proof Drafting", "VFS Appointment Booking", "Cover Letter Preparation"],
    link: "/visa-attestation-services",
  },
  {
    title: "BUSINESS & INVESTOR VISA",
    subtitle: "Entrepreneurs & HNIs",
    desc: "Residency-by-investment, startup visas, and commercial business migration programs for high-net-worth individuals, business owners, and corporate executives.",
    badge: "High Net Worth",
    features: ["Investment Audits", "Business Plan Drafting", "Government Approvals", "Family Settlement"],
    link: "/visa-attestation-services",
  },
  {
    title: "DEPENDENT & SPOUSE VISA",
    subtitle: "Family Reunification",
    desc: "Reunite with your spouse and children abroad. We handle dependent work rights, family sponsorship filings, and child education documentation seamlessly.",
    badge: "Family First",
    features: ["Relationship Proofs", "Spouse Open Work Permits", "Child School Admissions", "Legal Attestation"],
    link: "/visa-attestation-services",
  },
];

const sevenPillars = [
  {
    num: "01",
    title: "Dedicated Consultant",
    desc: "You’ll be assigned a dedicated visa consultant who is experienced in the complete immigration process of the country you choose to go to, be it for study, work, settlement, or tourism.",
    icon: UserCheck,
  },
  {
    num: "02",
    title: "Visa-Specific Counseling",
    desc: "Immigration processes can be complex; our squad of visa experts counsels the right pathway, the requisites surrounding it, and the sequence of events for seamless migration.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Relevant Eligibility Check",
    desc: "Qualifying for a particular visa is the first step. By leveraging our deep expertise at Damoder Immigration Services Hyderabad, we evaluate your profile against strict points matrices.",
    icon: Target,
  },
  {
    num: "04",
    title: "Documentation Filing",
    desc: "Extensive documentation is involved in any visa process. To lift the stress off your shoulders, we compile, streamline, and submit your documents on time without amiss.",
    icon: FileSignature,
  },
  {
    num: "05",
    title: "IELTS Inputs & Coaching",
    desc: "To help you score best with your language proficiency, we provide the right inputs, study materials, and suggestions to ace IELTS/PTE tests and boost your overall PR points.",
    icon: BookOpen,
  },
  {
    num: "06",
    title: "100% Process Transparency",
    desc: "You have every right to know what is happening with your file. We are trusted as the best immigration consultants in Hyderabad for total transparency until the day of the grant.",
    icon: ShieldCheck,
  },
  {
    num: "07",
    title: "Job-Related Tips & Market Updates",
    desc: "We offer all the suggestions, tips, and current job market updates for a smooth transition to your dream country and securing employment in your relevant skill field.",
    icon: Briefcase,
  },
];

const jobSectors = [
  { title: "IT & Software Engineering", roles: "Cloud Architects, DevOps, Full-Stack Developers, Data Engineers", icon: Cpu },
  { title: "Engineering (Civil, Mech, Elec)", roles: "Structural Engineers, MEP Coordinators, Project Managers, Automation", icon: HardHat },
  { title: "Healthcare & Medical", roles: "General Physicians, Medical Officers, Radiologists, Lab Technicians", icon: Stethoscope },
  { title: "Registered Nursing", roles: "ICU Nurses, Critical Care, Geriatric Care, Theatre Nurses (B.Sc / GNM)", icon: Stethoscope },
  { title: "Marketing & Sales", roles: "Digital Marketing Specialists, B2B Account Executives, Growth Leads", icon: Globe2 },
  { title: "Human Resources (HR)", roles: "Talent Acquisition Managers, HRBP, Global Mobility Specialists", icon: Users },
  { title: "Teachers & Academic Faculty", roles: "STEM Educators, Primary & Secondary Teachers, University Lecturers", icon: GraduationCap },
  { title: "Accountants & Finance", roles: "CPA/ACCA Qualified Accountants, Financial Analysts, Tax Auditors", icon: Landmark },
];

const conciergeServices = [
  { title: "Notary Service", desc: "Official notary public authentication and affidavits for immigration dossiers.", icon: Stamp },
  { title: "Translation Service", desc: "Sworn legal translations into German, French, Arabic, and Polish.", icon: Languages },
  { title: "Transcript Service", desc: "Procurement and verification of official university transcripts and mark sheets.", icon: FileText },
  { title: "Bank Loan Assistance", desc: "Collateral & non-collateral education and settlement fund loan sanctioning.", icon: Landmark },
  { title: "Exam Slot Booking", desc: "Priority date and venue booking for IELTS, PTE Academic, and TOEFL tests.", icon: BookOpen },
  { title: "Banking & Forex Services", desc: "Competitive foreign currency exchange and international student forex cards.", icon: CreditCard },
  { title: "International SIM Card", desc: "Pre-activated country-specific SIM cards delivered before international departure.", icon: Globe2 },
  { title: "Travel & Health Insurance", desc: "Comprehensive overseas travel, health, and repatriation medical insurance.", icon: ShieldCheck },
];

function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="absolute inset-0 opacity-15">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#FF6B35"
            patternScale={6.25}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            speed={1.05}
            transparent
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-ember backdrop-blur-sm">
                <MapPin className="size-3.5 text-ember" />
                HQ: Hyderabad, India · Trusted Visa Consultants
              </span>

              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
                A Complete Roundup of Visa Services at{" "}
                <span className="text-ember">Damoder Immigration</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl">
                We make sure your visa process is absolutely seamless and stress-free to study, work, or settle in
                countries like: <strong className="text-white font-bold">New Zealand (Priority), Germany, Canada, Australia, United Kingdom, and Europe.</strong>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-ember px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  Check Your Visa Eligibility
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/candidate-portal"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore PR &amp; Study Visas
                </Link>
              </div>

              {/* Quick Country Highlight Badges */}
              <div className="mt-10 pt-8 border-t border-white/15 flex items-center gap-3 flex-wrap text-xs font-semibold text-white/90">
                <span className="text-white/60">Priority Destinations:</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇳🇿 New Zealand</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇩🇪 Germany</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇨🇦 Canada</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇦🇺 Australia</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇬🇧 United Kingdom</span>
                <span className="rounded-md bg-white/10 px-2.5 py-1 border border-white/15">🇪🇺 Europe</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <span className="font-display text-lg font-bold text-white">Why Choose Damoder?</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                    Verified Desk
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-white/90">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-ember shrink-0 mt-0.5" />
                    <span><strong>Dedicated Consultant</strong> for your chosen destination.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-ember shrink-0 mt-0.5" />
                    <span><strong>Accurate Eligibility Check</strong> and points assessment.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-ember shrink-0 mt-0.5" />
                    <span><strong>IELTS Inputs &amp; Coaching</strong> to maximize score.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-ember shrink-0 mt-0.5" />
                    <span><strong>100% Process Transparency</strong> from intake to grant.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-ember shrink-0 mt-0.5" />
                    <span><strong>Job Market Guidance</strong> &amp; post-landing tips.</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15">
                  <p className="text-xs text-white/70">
                    📍 Office: 6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Counters Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {counters.map((c) => (
              <div key={c.label} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <div className="font-display text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
                  <AnimatedCounter to={c.target} />
                  {c.suffix ? <span className="text-xl sm:text-2xl font-semibold text-ember ml-1">{c.suffix}</span> : null}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{c.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{c.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Visa Services Breakdown */}
      <Section
        eyebrow="Comprehensive Visa Services"
        title="We provide guidance and counselling for all visa categories"
        intro="Whether your ambition is permanent residency, international higher education, skilled overseas careers, or tourist travel, our specialized desks manage every phase."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreVisas.map((v) => (
            <StaggerItem key={v.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-brand-deep">{v.title}</span>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {v.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-ember">{v.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Key Highlights
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                      {v.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70">
                  <Link
                    to={v.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-ember transition-colors"
                  >
                    <span>Learn More &amp; Apply</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. The 7 Pillars of Client Excellence */}
      <Section
        tone="muted"
        eyebrow="Our Client Assurance"
        title="The 7 Pillars of Seamless Migration at Damoder Immigration"
        intro="Trusted as the best immigration consultants in Hyderabad for our rigorous end-to-end support, language coaching, and absolute transparency."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sevenPillars.map((p) => (
            <MotionCard key={p.num} className="rounded-lg border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-ember/10 text-ember">
                    <p.icon className="size-5" />
                  </div>
                  <span className="font-display text-xl font-bold text-muted-foreground/40">{p.num}</span>
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-brand-deep">{p.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 5. Destination Corridors (New Zealand, Germany, Canada, Australia, UK, Europe) */}
      <DestinationsWhereWeDeploy />

      {/* 6. Overseas Careers in 8 In-Demand Sectors */}
      <Section
        eyebrow="Global Employment"
        title="Overseas Jobs Across 8 Core Sectors"
        intro="With our skilled recruitment division, candidates secure high-paying international employment in their specialized disciplines."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobSectors.map((s) => (
            <MotionCard key={s.title} className="rounded-lg border border-border bg-card p-6 shadow-xs">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="size-5" />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-brand-deep">{s.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.roles}</p>
            </MotionCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep/90 transition-colors"
          >
            Explore All Overseas Career Verticals
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* 7. Full-Suite Concierge Services */}
      <Section
        tone="muted"
        eyebrow="Concierge & Value-Added Services"
        title="End-to-End Relocation & Document Support"
        intro="From official notarization and MEA apostille to educational bank loans, IELTS exam slots, forex cards, and travel insurance."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conciergeServices.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-card p-5 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-ember/10 text-ember">
                  <c.icon className="size-4" />
                </span>
                <h4 className="text-sm font-bold text-brand-deep">{c.title}</h4>
              </div>
              <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Who We Are & Hyderabad HQ Office */}
      <WhoWeAre />

      {/* 9. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
