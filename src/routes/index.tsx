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


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhamodaran Immigration | Overseas Manpower Recruitment & MEA Apostille" },
      {
        name: "description",
        content:
          "Government-licensed Indian overseas manpower consultancy (MEA Lic. B-0824/TN/PER/1000+/5/9821/2021). Bulk recruitment, accredited trade testing, MEA apostille & work permits for Europe, Gulf GCC and USA.",
      },
      {
        name: "keywords",
        content:
          "overseas manpower recruitment india, MEA registered recruitment agency, gulf recruitment chennai, poland work permit agency, germany blue card recruitment, trade testing center india, damoder immigration, visa attestation chennai",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dhamodaran Immigration | Overseas Manpower Recruitment & MEA Apostille" },
      {
        property: "og:description",
        content:
          "Turnkey international manpower supply: 18,000+ deployments, accredited trade testing workshops, 30-45 day SLA, and 100% MEA statutory compliance.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com" },
      { property: "og:image", content: "https://dhamodaranimmigration.com/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhamodaran Immigration | Overseas Manpower Recruitment" },
      {
        name: "twitter:description",
        content:
          "MEA Lic. B-0824/TN/PER/1000+/5/9821/2021. Sourcing, trade testing, and deployment to Europe, GCC & USA.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://dhamodaranimmigration.com/#website",
              "url": "https://dhamodaranimmigration.com",
              "name": "Dhamodaran Immigration & Overseas Manpower Consultancy",
              "description": "Government of India MEA-licensed overseas recruitment and statutory visa legalisation consultancy.",
              "publisher": {
                "@id": "https://dhamodaranimmigration.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://dhamodaranimmigration.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the typical timeline from employer demand to candidate deployment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gulf (GCC) deployments typically take 4 to 8 weeks from employer interview to departure. European work permits require 3 to 6 months depending on destination country labor market approvals, apostille legalisation, and embassy visa stamping schedules."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you verify trade skills before presenting candidates to employers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates undergo practical skill evaluations at accredited trade-testing workshops in India. Welders are tested to 6G / ASME / AWS standards with radiographic inspection, electricians on live 3-phase switchgear panels, and civil trades on structural formwork and rebar rigs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do candidates pay any recruitment fees for overseas jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We operate in compliance with the Emigration Act 1983 and MEA regulations. Employer-sponsored hiring mandates carry no unauthorized recruitment charges for candidates. Candidate registration and initial skill assessments are 100% free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What guarantees do you offer to employers on candidate retention and skill match?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a 90-day free replacement guarantee. If a deployed worker fails the probationary trade assessment or medical check on arrival, we provide a replacement candidate at no extra recruitment cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can employers and candidates verify your MEA license authenticity?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our MEA Registration Number is B-0824/TN/PER/1000+/5/9821/2021, issued by the Ministry of External Affairs, Government of India. You can verify our active status on the official eMigrate portal (emigrate.gov.in)."
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
    target: 18000,
    suffix: "+",
    label: "Skilled Workers Mobilised",
    hint: "Trade-tested technicians, craftsmen, engineers & support crews.",
    tag: "Track Record",
    tagColor: "bg-ember/15 text-ember ring-ember/30",
    icon: Users,
  },
  {
    target: 24,
    suffix: "",
    label: "Destination Countries",
    hint: "Licensed bilateral deployment corridors in Europe, GCC & USA.",
    tag: "Global Reach",
    tagColor: "bg-[#1A2C53] text-white ring-white/20",
    icon: Globe2,
  },
  {
    target: 600,
    suffix: "+",
    label: "Employer Partners",
    hint: "Direct corporate hiring with zero unauthorised sub-agent fees.",
    tag: "Direct Mandates",
    tagColor: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
    icon: Building2,
  },
  {
    target: 98,
    suffix: "%",
    label: "Visa & Attestation Rate",
    hint: "Thorough pre-vetting with full eMigrate government compliance.",
    tag: "MEA Compliant",
    tagColor: "bg-emerald-400/15 text-emerald-400 ring-emerald-400/30",
    icon: ShieldCheck,
  },
];

const protocol = [
  {
    icon: ClipboardList,
    title: "1. Requirement mapping",
    body: "Job orders, salary structures and headcount validated against destination labour law.",
  },
  {
    icon: Users,
    title: "2. Sourcing & screening",
    body: "Nationwide talent pipeline, document verification and background checks.",
  },
  {
    icon: HardHat,
    title: "3. Trade testing",
    body: "Hands-on skill validation at accredited testing centres for technical trades.",
  },
  {
    icon: Stethoscope,
    title: "4. Medical & visa",
    body: "GAMCA/approved clinic medicals, embassy attestation and visa application.",
  },
  {
    icon: FileCheck2,
    title: "5. Compliance & travel",
    body: "eMigrate registration, emigration clearance and staged flight bookings.",
  },
  {
    icon: Plane,
    title: "6. On-site deployment",
    body: "Airport reception, client handover, settlement check and replacement guarantee.",
  },
];

const industries = [
  { icon: HardHat, label: "Civil & Infrastructure" },
  { icon: Flame, label: "Oil, Gas & Petrochemical" },
  { icon: UtensilsCrossed, label: "Hospitality & Facilities" },
  { icon: Stethoscope, label: "Healthcare & Nursing" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: Cpu, label: "MEP, Heavy Engineering & Marine" },
];

const testimonials = [
  {
    quote:
      "Dhamodaran Immigration mobilised 120 certified scaffolders and pipefitters to our project in Dubai on schedule with zero documentation faults.",
    name: "Operations Director",
    org: "Tier-1 Construction EPC, UAE",
  },
  {
    quote:
      "The trade-testing rigor is what sets them apart. Every MEP technician deployed to Qatar was job-ready on day one.",
    name: "HR Vice President",
    org: "Facility management group, UAE",
  },
  {
    quote:
      "From document attestation to landing in Warsaw, every step was explained before it happened. I always knew what came next.",
    name: "Welder, Tamil Nadu",
    org: "Deployed to Poland",
  },
];

const faqs = [
  {
    q: "How do I verify if a job vacancy or recruiter is genuinely from Dhamodaran Immigration?",
    a: "Every authentic vacancy is registered directly with our central Chennai headquarters under our MEA recruiting licence. All genuine offer letters are issued on official company letterhead and processed through the Govt. of India eMigrate portal. You can verify any mandate by contacting our compliance desk at +91 44 2220 1000 or emailing compliance@damoderimmigration.com.",
  },
  {
    q: "What are the government statutory charges and fee structures?",
    a: "All recruitment and processing fees strictly comply with Ministry of External Affairs (MEA) statutory guidelines. 100% of statutory payments are deposited directly into registered corporate bank accounts with official GST tax invoices. We never accept cash in hand, personal UPI payments, or informal deposits.",
  },
  {
    q: "What is the complete recruitment workflow for job seekers?",
    a: "Candidates register their verified credentials, participate in practical trade testing at accredited centers, complete GAMCA or embassy-approved medical examinations, complete document attestation/apostille, and attend a pre-departure legal and cultural orientation before departure with a confirmed employment contract.",
  },
  {
    q: "What are the typical deployment timelines for Gulf vs. European corridors?",
    a: "Gulf (GCC) deployments typically take 4 to 8 weeks from employer interview to departure. European work permits require 3 to 6 months depending on destination country labor market approvals, apostille legalisation, and embassy visa stamping schedules.",
  },
  {
    q: "Can you handle high-volume bulk manpower deployments for large EPC projects?",
    a: "Yes. We routinely mobilize workforce batches of 100 to 1,000+ certified craftsmen, technicians, and engineering crews. We manage client interview delegations, large-scale trade testing camps, staged flight manifests, and on-site mobilization coordinators.",
  },
  {
    q: "What welfare and contract protections are provided post-deployment?",
    a: "We ensure all employment terms (wages, overtime rates, food, accommodation, and medical insurance) strictly reflect the contract signed in India. We coordinate with the host employer's HR department upon arrival and maintain emergency contact support for our deployed workers.",
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

        {/* Top Tier: 2-Column Headline & Copy (Old Style) */}
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
                MEA-licensed · eMigrate compliant
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[58px]"
              >
                Skilled Manpower,
                <br />
                Mobilised Worldwide
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:pb-3"
            >
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/90">
                Dhamodaran Immigration recruits, trade-tests, documents and deploys workforce teams across
                Europe, the Gulf and the United States — ethically, transparently and on schedule.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ChipLink to="/employer-services" tone="dark">
                  Request Manpower
                </ChipLink>
                <Link
                  to="/candidate-portal"
                  className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Apply for Jobs
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
            alt="Dhamodaran Immigration workforce team mobilised at international airport terminal"
            className="h-[380px] sm:h-[480px] lg:h-[580px] xl:h-[640px] w-full object-cover object-[center_20%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <figcaption className="absolute bottom-6 left-6 sm:left-8 lg:left-12 rounded-lg border border-white/20 bg-brand-deep/90 px-4 py-2.5 backdrop-blur-md text-xs sm:text-sm font-semibold text-white/90 flex items-center gap-2.5 shadow-xl">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Overseas Deployment Network</span>
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
            {/* Stat 1: 18,000+ Skilled Workers */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Users className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Track Record
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={18000} duration={1.6} />
                  <span className="text-ember font-semibold">+</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Skilled Workers Mobilised
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Trade-tested technicians, craftsmen, engineers & support crews.
                </p>
              </div>
            </div>

            {/* Stat 2: 24 Destination Countries */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Globe2 className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Global Reach
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={24} duration={1.6} />
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Destination Countries
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Licensed bilateral deployment corridors in Europe, GCC & USA.
                </p>
              </div>
            </div>

            {/* Stat 3: 600+ Employer Partners */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <Building2 className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Direct Mandates
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={600} duration={1.6} />
                  <span className="text-ember font-semibold">+</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Employer Partners
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Direct corporate hiring with zero unauthorised sub-agent fees.
                </p>
              </div>
            </div>

            {/* Stat 4: 98% Visa Approval */}
            <div className="group lg:px-6 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between pt-6 border-t border-slate-100 sm:border-t-0 lg:pt-0 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-deep/10 text-brand-deep ring-1 ring-brand-deep/15 transition-transform duration-200 group-hover:scale-110">
                  <ShieldCheck className="size-4.5" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  MEA Compliant
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-brand-deep">
                  <AnimatedCounter value={98} duration={1.6} />
                  <span className="text-ember font-semibold">%</span>
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-brand-deep">
                  Visa Approval Rate
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Thorough pre-vetting with full eMigrate government compliance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <LogoMarquee className="pt-10 sm:pt-12 lg:pt-14" />

      <WhoWeAre />

      <DestinationsWhereWeDeploy />

      <Section tone="muted" eyebrow="Who we serve" title="Two audiences, one compliant pipeline">
        <StaggerContainer staggerDelay={0.15} className="grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <MotionCard className="rounded-lg border border-border bg-card p-8 sm:p-10 shadow-xs h-full flex flex-col justify-between">
              <div>
                <Globe2 className="size-10 text-brand" />
                <h3 className="mt-6 font-display text-2xl font-bold text-brand-deep">For Employers</h3>
                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                  Bulk and specialist hiring with in-house trade testing, verified documentation and
                  guaranteed replacement cover. We handle attestation, visa stamping and mobilisation so
                  your project site stays staffed on schedule.
                </p>
              </div>
              <div className="mt-8">
                <ChipLink to="/employer-services">Employer services</ChipLink>
              </div>
            </MotionCard>
          </StaggerItem>

          <StaggerItem>
            <MotionCard className="rounded-lg border border-border bg-card p-8 sm:p-10 shadow-xs h-full flex flex-col justify-between">
              <div>
                <Users className="size-10 text-brand" />
                <h3 className="mt-6 font-display text-2xl font-bold text-brand-deep">
                  For Job Seekers
                </h3>
                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                  Genuine, verified overseas vacancies with written legal contracts, transparent processing and full
                  pre-departure orientation. Register your profile once and our documentation desk matches you to live employer mandates.
                </p>
              </div>
              <div className="mt-8">
                <ChipLink to="/candidate-portal">Register your profile</ChipLink>
              </div>
            </MotionCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      <Section
        eyebrow="Process"
        title="The 6-stage mobilisation protocol"
        intro="Every deployment follows the same audited sequence, with milestone reporting to the employer at each stage."
      >
        <StaggerContainer staggerDelay={0.08} className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {protocol.map((s, i) => (
            <StaggerItem key={s.title}>
              <MotionCard className="relative rounded-lg border border-border bg-card p-8 pt-9 shadow-xs h-full">
                <span className="absolute -top-3.5 left-8 inline-flex size-8 items-center justify-center rounded-lg bg-ember text-sm font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <s.icon className="size-8 text-brand" />
                <h3 className="mt-5 font-display text-lg font-bold text-brand-deep">
                  {s.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section tone="muted" eyebrow="Sectors" title="Industries we staff">
        <StaggerContainer staggerDelay={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section eyebrow="Testimonials" title="Trusted by employers and workers worldwide">
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

      <Section
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Clear answers regarding statutory compliance, candidate documentation, overseas employer mandates, and deployment protocols."
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
                Have a specific question about your deployment or project?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Our country desk managers and documentation consultants respond within one business day.
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
