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
  Stamp,
} from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-mobilization.jpg";
import { AntiFraudVault } from "@/components/anti-fraud-vault";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/logo-marquee";
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
      { property: "og:url", content: "https://dis.ind.in" },
      { property: "og:image", content: "https://dis.ind.in/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Damoder Immigration Services | Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Expert visa counseling, eligibility checks, documentation filing, and IELTS inputs for New Zealand, Germany, Canada, Australia, UK & Europe.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://dis.ind.in/#website",
              "url": "https://dis.ind.in",
              "name": "Damoder Immigration Services",
              "description": "Premier visa and immigration consultancy based in Hyderabad, India.",
              "publisher": {
                "@id": "https://dis.ind.in/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://dis.ind.in/#faq",
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
    target: 150,
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
    tag: "Global Reach",
    tagColor: "bg-[#1A2C53] text-white ring-white/20",
    icon: Globe2,
  },
  {
    target: 100,
    suffix: "%",
    label: "Process Transparency",
    hint: "Direct milestone tracking with zero hidden charges or unlicensed agents.",
    tag: "Direct Mandates",
    tagColor: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
    icon: Building2,
  },
  {
    target: 99,
    suffix: ".2%",
    label: "Visa & Legal Accuracy",
    hint: "Thorough pre-vetting with full regulatory and consular compliance.",
    tag: "Verified Desk",
    tagColor: "bg-emerald-400/15 text-emerald-400 ring-emerald-400/30",
    icon: ShieldCheck,
  },
];

const sevenPillars = [
  {
    icon: UserCheck,
    title: "1. Dedicated Consultant",
    body: "You’ll be assigned a dedicated visa consultant who is experienced in the complete immigration process of the country you choose to go to, be it for study, work, settlement, or tourism.",
  },
  {
    icon: Compass,
    title: "2. Visa-Specific Counseling",
    body: "Immigration processes can be complex; our squad of visa experts counsels the right pathway, the requisites surrounding it, and the sequence of events for seamless migration.",
  },
  {
    icon: Target,
    title: "3. Relevant Eligibility Check",
    body: "Qualifying for a particular visa is the first step. By leveraging our deep expertise at Damoder Immigration Services Hyderabad, we evaluate your profile against strict points matrices.",
  },
  {
    icon: FileSignature,
    title: "4. Documentation Filing",
    body: "Extensive documentation is involved in any visa process. To lift the stress off your shoulders, we compile, streamline, and submit your documents on time without amiss.",
  },
  {
    icon: BookOpen,
    title: "5. IELTS Inputs & Language Prep",
    body: "To help you score best with your language proficiency, we provide the right inputs, study materials, and suggestions to ace IELTS/PTE tests and boost your overall PR points.",
  },
  {
    icon: ShieldCheck,
    title: "6. 100% Process Transparency",
    body: "You have every right to know what is happening with your file. We are trusted as the best immigration consultants in Hyderabad for total transparency until the day of the grant.",
  },
  {
    icon: Briefcase,
    title: "7. Job-Related Tips & Market Updates",
    body: "We offer all the suggestions, tips, and current job market updates for a smooth transition to your dream country and securing employment in your relevant skill field.",
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

const industries = [
  { icon: Cpu, label: "Information Technology (IT)" },
  { icon: HardHat, label: "Engineering (Civil, Mech, Elec)" },
  { icon: Globe2, label: "Marketing & Sales" },
  { icon: Users, label: "Human Resources (HR)" },
  { icon: Stethoscope, label: "Healthcare & Medical Specialists" },
  { icon: Stethoscope, label: "Registered Nursing (B.Sc / GNM)" },
  { icon: GraduationCap, label: "Teachers & Academic Faculty" },
  { icon: Landmark, label: "Accountants & Financial Experts" },
];

const testimonials = [
  {
    quote:
      "Damoder Immigration Services guided me through the New Zealand Green List straight-to-residence pathway. My resident visa was granted in 4 months with zero hassle!",
    name: "Vikram Reddy",
    org: "Software Architect, Auckland (NZ)",
  },
  {
    quote:
      "Their Germany desk helped me prepare my Chancenkarte application and B1 German coaching. The transparency from the Hyderabad team was exceptional.",
    name: "Pooja Sharma",
    org: "Electrical Engineer, Munich (Germany)",
  },
  {
    quote:
      "From IELTS inputs to educational loan sanctioning and Canadian Express Entry filing, every step was seamless. Damoder is truly the best immigration consultancy in Hyderabad.",
    name: "Karthik Varma",
    org: "Financial Analyst, Toronto (Canada)",
  },
];

const faqs = [
  {
    q: "Which countries does Damoder Immigration Services specialize in?",
    a: "Damoder Immigration Services specializes in New Zealand (Top Priority), Germany (Top European Priority), Canada, Australia, the United Kingdom, and European Schengen countries across PR, Study, Skilled Work, and Visitor visas.",
  },
  {
    q: "What are the 7 Pillars of Client Assurance at Damoder Immigration?",
    a: "Our 7 pillars are: (1) Dedicated Visa Consultant, (2) Visa-Specific Counseling, (3) Relevant Eligibility Check, (4) Timely Documentation Filing, (5) IELTS Inputs & Language Coaching, (6) 100% Process Transparency, and (7) Job-Related Tips & Market Updates.",
  },
  {
    q: "Do you assist with IELTS coaching and exam slot booking?",
    a: "Yes! We provide strategic IELTS / PTE study materials, practice tests, score optimization inputs, and priority exam slot booking across authorized test centers.",
  },
  {
    q: "What concierge and value-added relocation services are provided?",
    a: "Our concierge suite includes State HRD & MEA Apostille Attestation, Notary Services, Sworn Legal Translations, University Transcript Procurement, Education Bank Loans, Forex Cards, International SIM Cards, and Travel & Health Insurance.",
  },
  {
    q: "Where is the Damoder Immigration Services headquarters located?",
    a: "Our headquarters is located at 6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India. Clients can schedule an in-person consultation or book a remote video counseling session.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative bg-brand-deep pb-16 pt-10 text-white sm:pb-20 md:pt-14 lg:pb-24 overflow-hidden">
        {/* PixelBlast Animated WebGL Background - Blending in the top */}
        <div className="absolute inset-x-0 top-0 h-[480px] sm:h-[540px] lg:h-[600px] z-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_50%_0%,black_25%,rgba(0,0,0,0.6)_65%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_0%,black_25%,rgba(0,0,0,0.6)_65%,transparent_100%)] opacity-75">
          <PixelBlast
            variant="cross"
            pixelSize={6}
            color="#243864"
            secondaryColor="#13203C"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.2}
            speed={0.4}
            edgeFade={0.3}
            transparent
          />
        </div>

        {/* Top Tier: 2-Column Headline & Copy */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-end gap-8 pb-10 sm:pb-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14 lg:pb-14">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm"
              >
                <span className="size-2 rounded-full bg-ember" />
                HQ: Hyderabad, India · Trusted Visa Consultants
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[58px]"
              >
                A Complete Roundup of Visa Services at{" "}
                <span className="text-ember">Damoder Immigration</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:pb-3"
            >
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/90">
                We make sure your visa process is absolutely seamless and stress-free to study, work, or settle in
                countries like: <strong className="text-white">New Zealand (Priority), Germany, Canada, Australia, United Kingdom, and Europe.</strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/candidate-portal"
                  className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Visa Categories
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower Tier: Extended Full-Width Hero Image (High Definition, Uncut) */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full overflow-hidden bg-brand-deep shadow-2xl"
        >
          <img
            src={heroImage}
            alt="Damoder Immigration Services candidate departures at international airport terminal"
            className="h-[380px] sm:h-[480px] lg:h-[580px] xl:h-[640px] w-full object-cover object-[center_20%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <figcaption className="absolute bottom-6 left-6 sm:left-8 lg:left-12 rounded-lg border border-white/20 bg-brand-deep/90 px-4 py-2.5 backdrop-blur-md text-xs sm:text-sm font-semibold text-white/90 flex items-center gap-2.5 shadow-xl">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Overseas Visa &amp; Relocation Network</span>
            </figcaption>
          </div>
        </motion.figure>
      </section>

      {/* Half Hero / Half Page Flow Overlapping Luxury White Stats Deck */}
      <div className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-lg border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/70 sm:gap-6 lg:gap-0">
            {/* Stat 1 */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Award className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Track Record
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={150} duration={1.6} />
                  <span className="text-ember font-semibold">+</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Successful Visa Grants
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  PR, Study, Work &amp; Visitor visas granted across top nations.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Globe2 className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Global Focus
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={6} duration={1.6} />
                  <span className="text-ember font-semibold"> Flagship</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Destination Corridors
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  New Zealand, Germany, Canada, Australia, UK &amp; Europe.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Building2 className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Transparency
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={100} duration={1.6} />
                  <span className="text-ember font-semibold">%</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Direct Tracking
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Zero hidden charges or unauthorized sub-agents.
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <ShieldCheck className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Client Care
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={7} duration={1.6} />
                  <span className="text-ember font-semibold"> Pillars</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Client Promise
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Dedicated consultant, eligibility check &amp; IELTS inputs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <LogoMarquee className="pt-10 sm:pt-12 lg:pt-14" />

      <WhoWeAre />

      <DestinationsWhereWeDeploy />

      {/* 6 Core Visa Categories Section */}
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

      {/* 7-Pillar Protocol */}
      <Section
        eyebrow="Our Process"
        title="The 7-Pillar Client Protocol"
        intro="Trusted as the best immigration consultants in Hyderabad for our structured, transparent counseling framework."
      >
        <StaggerContainer staggerDelay={0.08} className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sevenPillars.map((s, i) => (
            <StaggerItem key={s.title}>
              <MotionCard className="relative rounded-lg border border-border bg-card p-8 pt-9 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <span className="absolute -top-3.5 left-8 inline-flex size-8 items-center justify-center rounded-lg bg-ember text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <s.icon className="size-8 text-brand" />
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-deep">
                    {s.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Industries We Staff (8 Core Sectors) */}
      <Section tone="muted" eyebrow="Sectors" title="Overseas Jobs Across 8 Core Sectors">
        <StaggerContainer staggerDelay={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <StaggerItem key={i.label}>
              <Link
                to="/industries"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card px-6 py-5 shadow-2xs transition-all duration-200 hover:border-brand hover:shadow-md hover:-translate-y-0.5"
              >
                <i.icon className="size-6 shrink-0 text-brand transition-transform group-hover:scale-110" />
                <span className="text-sm sm:text-base font-semibold text-brand-deep">{i.label}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="Trusted by clients across India & overseas">
        <StaggerContainer staggerDelay={0.12} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name + t.org}>
              <figure className="rounded-lg border border-border bg-card p-8 shadow-xs h-full flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                <div>
                  <Quote className="size-8 text-brand" />
                  <blockquote className="mt-5 text-sm sm:text-[15px] leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-bold text-brand-deep">{t.name}</span>
                  <span className="mt-0.5 block text-xs sm:text-sm text-muted-foreground">{t.org}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <AntiFraudVault />

      {/* Interactive FAQs Accordion */}
      <Section
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Clear answers regarding visa categories, eligibility assessments, IELTS inputs, and relocation concierge."
      >
        <div className="mx-auto max-w-4xl space-y-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-5 sm:px-6 shadow-2xs transition-all duration-200 data-[state=open]:border-brand/40 data-[state=open]:shadow-xs"
              >
                <AccordionTrigger className="py-4 sm:py-5 text-left font-display text-base sm:text-[17px] font-bold text-brand-deep hover:no-underline hover:text-brand transition-colors cursor-pointer">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="border-t border-border/40 pt-3 pb-5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Clean consultation help capsule */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-border bg-paper p-5 sm:p-6 shadow-2xs">
            <div>
              <h3 className="font-display text-base font-bold text-brand-deep">
                Have a specific question about your visa or migration pathway?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Our Hyderabad headquarters desk and dedicated visa consultants respond within 24 hours.
              </p>
            </div>
            <Button asChild variant="secondary" className="rounded-lg font-semibold shrink-0">
              <Link to="/contact-us">Ask our consultants</Link>
            </Button>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
