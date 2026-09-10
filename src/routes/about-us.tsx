import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck,
  Globe2,
  HeartHandshake,
  ScrollText,
  ShieldCheck,
  Target,
  Users2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

import aboutHeroImg from "@/assets/about-us-hero.jpg";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import { StaggerContainer, StaggerItem, MotionCard } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Damoder Immigration Services (Hyderabad HQ)" },
      {
        name: "description",
        content:
          "Learn about Damoder Immigration Services based in Hyderabad, India. Over two decades of ethical overseas recruitment, trade testing, and global visa mobilization.",
      },
      { property: "og:title", content: "About Us | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Two decades of landmark growth in overseas recruitment, accredited trade testing, and statutory MEA compliance from Hyderabad, India.",
      },
      { property: "og:url", content: "https://dis.ind.in/about-us" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dis.ind.in/about-us" },
    ],
  }),
  component: AboutPage,
});

const quickStats = [
  { value: "20+", label: "Years of Heritage", sub: "Founded in Hyderabad, Telangana" },
  { value: "12,000+", label: "Successful Visa Grants", sub: "100% verified documentation" },
  { value: "6 Flagship", label: "Global Corridors", sub: "New Zealand, Germany & English Markets" },
  { value: "7 Pillars", label: "Client Promise", sub: "Dedicated counseling & transparency" },
];

const pillars = [
  {
    icon: ScrollText,
    title: "1. Dedicated Visa Consultant",
    body: "Every candidate and employer is assigned a single accountable point of contact managing the case from assessment to visa grant.",
  },
  {
    icon: HeartHandshake,
    title: "2. Visa-Specific Counseling",
    body: "Objective evaluation of career goals and profile strengths mapped directly against destination country immigration quotas.",
  },
  {
    icon: Target,
    title: "3. Relevant Eligibility Check",
    body: "Rigorous points scoring (6-point NZ SMC, German Chancenkarte, Canadian CRS, Australian GSM) to avoid costly filing errors.",
  },
  {
    icon: FileCheck,
    title: "4. Systematic Documentation Filing",
    body: "Flawless dossier preparation, State HRD authentication, MEA Hague Apostille, and embassy consular submissions.",
  },
  {
    icon: BookOpen,
    title: "5. IELTS Inputs & Test Prep",
    body: "Comprehensive study materials, practice mock tests, and exam slot booking assistance to secure target band scores.",
  },
  {
    icon: ShieldCheck,
    title: "6. Process Transparency",
    body: "Zero hidden charges, direct receipt tracking, and regular milestone updates at every procedural stage.",
  },
  {
    icon: Globe2,
    title: "7. Job Tips & Market Updates",
    body: "Continuous intelligence on destination labor shortage lists (Green Lists, Blue Card thresholds, Regional shortages).",
  },
  {
    icon: Award,
    title: "8. End-to-End Concierge Care",
    body: "University transcripts, education bank loans, sworn translations, banking forex, international SIM, and insurance support.",
  },
];

const corridors = [
  {
    region: "New Zealand Flagship Corridor (Priority #1)",
    destinations: "Auckland · Wellington · Christchurch",
    focus: "Skilled Migrant Category (SMC), Green List Tier 1/2 Fast-Track PR & Accredited Employer Work Visas",
    timeframe: "3 – 6 Months Structured Processing",
  },
  {
    region: "Germany & European Corridor (Priority #1 in Europe)",
    destinations: "Germany · Poland · Malta · Croatia · Romania",
    focus: "Chancenkarte Opportunity Card, EU Blue Card, Type-A Work Permits & Schengen Mobility",
    timeframe: "3 – 6 Months Consular Processing",
  },
  {
    region: "Canada, Australia, UK & North America",
    destinations: "Canada · Australia · United Kingdom · United States",
    focus: "Express Entry (FSWP/PNP), GSM (189/190/491), UK Skilled Worker & US EB-3 Green Card",
    timeframe: "Points Optimization & Consular Filing",
  },
];

function AboutPage() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="About Us · Damoder Immigration Services (Hyderabad HQ)"
        title="Two Decades of Moving Skilled Indian Talent, the Transparent Way"
        subtitle="We are an ethical overseas immigration and recruitment consultancy built on documentation discipline, verified skills, and worker protection."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Visit Our Hyderabad Headquarters
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/destinations/schengen-europe"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Flagship Corridors
          </Link>
        </div>
      </PageHero>

      {/* 2. Global Footprint Flag Ribbon */}
      <section className="border-b border-border/80 bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Global Destination Corridors:
            </span>
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              {[
                { name: "New Zealand", code: "nz", flag: "https://flagcdn.com/w160/nz.webp", tag: "Priority #1" },
                { name: "Germany", code: "de", flag: "https://flagcdn.com/w160/de.webp", tag: "Priority #1 Europe" },
                { name: "Canada", code: "ca", flag: "https://flagcdn.com/w160/ca.webp", tag: "Express Entry" },
                { name: "Australia", code: "au", flag: "https://flagcdn.com/w160/au.webp", tag: "GSM 189/190" },
                { name: "United Kingdom", code: "gb", flag: "https://flagcdn.com/w160/gb.webp", tag: "Skilled Worker" },
                { name: "Poland & EU", code: "pl", flag: "https://flagcdn.com/w160/pl.webp", tag: "Schengen" },
                { name: "United States", code: "us", flag: "https://flagcdn.com/w160/us.webp", tag: "EB-3 / H-1B" },
              ].map((c) => (
                <div key={c.code} className="flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-1.5 shadow-2xs hover:border-brand/40 transition-colors">
                  <span className="flex size-5 shrink-0 overflow-hidden rounded-full border border-border shadow-2xs">
                    <img src={c.flag} alt={c.name} className="size-full object-cover" />
                  </span>
                  <span className="text-xs font-bold text-brand-deep">{c.name}</span>
                  <span className="text-[10px] text-ember font-semibold">{c.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Trust Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {quickStats.map((s, i) => (
              <div key={i} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <p className="font-display text-2xl font-bold tracking-tight text-brand-deep sm:text-3xl lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Heritage & Operating Principles */}
      <Section
        eyebrow="Our Foundation"
        title="Built on accountability, verified credentials and total transparency"
        intro="Founded with a singular mission: to eliminate deceptive immigration practices and provide Indian professionals and students with genuine, legally secured pathways abroad."
      >
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              At <strong className="text-brand-deep">Damoder Immigration Services</strong>, based in Hyderabad, we believe every visa candidate deserves complete honesty regarding eligibility, timelines, and statutory costs.
            </p>
            <p>
              We operate strictly through verified overseas corporate employers and accredited academic institutions. Every document submitted through our office undergoes multi-stage verification before embassy lodgement.
            </p>
            <div className="pt-2">
              <Link
                to="/candidate-portal"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-ember transition-colors"
              >
                <span>Check Your Profile Eligibility</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm overflow-hidden">
              <img
                src={aboutHeroImg}
                alt="Damoder Immigration Services Hyderabad Headquarters"
                className="w-full h-[260px] object-cover rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>📍 Registered Office: Tukkuguda, Hyderabad</span>
                <span className="font-semibold text-brand">Telangana 501359</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. The 7-Pillar Client Framework */}
      <Section
        tone="muted"
        eyebrow="Our Service Pillars"
        title="The 7 Pillars of the Damoder Immigration Experience"
        intro="How our structured methodology ensures seamless, zero-friction immigration for candidates and corporate partners."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <MotionCard className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-brand-deep">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 6. Corridor Specialization */}
      <Section
        eyebrow="Global Mobility Desks"
        title="Dedicated Regional Immigration & Placement Desks"
        intro="Specialized country desks with deep expertise in regional labor laws, points systems, and visa criteria."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {corridors.map((c) => (
            <MotionCard key={c.region} className="rounded-lg border border-border bg-card p-7 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-deep leading-snug">
                  {c.region}
                </h3>
                <p className="mt-2 text-xs font-semibold text-ember">{c.destinations}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.focus}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/80 text-[11px] font-semibold text-brand">
                ⏱️ {c.timeframe}
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
