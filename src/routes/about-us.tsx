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
} from "lucide-react";
import { motion } from "framer-motion";

import aboutHeroImg from "@/assets/about-us-hero.jpg";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import { StaggerContainer, StaggerItem, MotionCard } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | 20+ Years MEA-Licensed Overseas Recruitment Heritage" },
      {
        name: "description",
        content:
          "Learn about Damoder Immigration Services (MEA Lic. B-0824/TN/PER/1000+/5/9821/2021). Over two decades of ethical overseas recruitment, trade testing, and global mobilization across 24+ countries.",
      },
      { property: "og:title", content: "About Us | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Two decades of landmark growth in overseas recruitment, accredited trade testing, and statutory MEA compliance from Hyderabad, India.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/about-us" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/about-us" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Damoder Immigration Services",
          "url": "https://damoderimmigration.com/about-us",
          "description": "Comprehensive history, licensing credentials, and operational standards of Damoder Immigration Services.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://damoderimmigration.com" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://damoderimmigration.com/about-us" }
            ]
          }
        })
      }
    ]
  }),
  component: AboutPage,
});

const quickStats = [
  { value: "20+", label: "Years of Heritage", sub: "Founded in 2004 in Telangana" },
  { value: "18,000+", label: "Workers Deployed", sub: "100% verified documentation" },
  { value: "24", label: "Destination Nations", sub: "GCC, Schengen Europe & USA" },
  { value: "100%", label: "Direct Mandates", sub: "No middlemen or false promises" },
];

const pillars = [
  {
    icon: ScrollText,
    title: "1. Licensed & Audited",
    body: "MEA recruiting agent licence, eMigrate digital filings for every deployment, and regular statutory audits.",
  },
  {
    icon: HeartHandshake,
    title: "2. Ethical Employer-Paid Sourcing",
    body: "Zero cash collection from candidates, written bilingual contracts before departure, and zero salary substitution.",
  },
  {
    icon: Target,
    title: "3. Accredited Skill Validation",
    body: "In-house & third-party trade testing centers with employer-witnessed practical test panels and certified scoring.",
  },
  {
    icon: Users2,
    title: "4. 365-Day Worker Welfare",
    body: "Pre-departure cultural orientation, dedicated grievance officer, and post-arrival welfare check-ins at 30, 90, and 365 days.",
  },
];

const corridors = [
  {
    region: "Gulf & GCC Corridor",
    destinations: "UAE · Saudi Arabia · Qatar · Kuwait · Oman · Bahrain",
    focus: "Civil EPC, Oil & Gas, MEP, Heavy Equipment, Hospitality & Healthcare",
    timeframe: "30 – 45 Days Mobilisation",
  },
  {
    region: "Schengen & European Corridor",
    destinations: "Poland · Romania · Malta · Croatia · Germany · Hungary",
    focus: "Logistics, CNC Machining, Factory Automation, Construction & Agriculture",
    timeframe: "60 – 90 Days Work Permit Processing",
  },
  {
    region: "USA & North America Desk",
    destinations: "United States of America",
    focus: "EB-3 Permanent Labour, H-1B Specialty Occupations & Technical Trades",
    timeframe: "USCIS & DOL Statutory Filings",
  },
];

function AboutPage() {
  return (
    <>
      {/* Standard Compact Small Banner */}
      <PageHero
        eyebrow="About us · 20+ Years of Ethical Deployment"
        title="Two decades of moving skilled Indian talent, the right way"
        subtitle="We are a government-licensed overseas manpower consultancy built on documentation discipline, verified skills and worker protection."
      />

      {/* Quick Trust Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {quickStats.map((s, i) => (
              <div key={i} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <p className="font-display text-2xl font-bold tracking-tight text-brand-deep sm:text-3xl lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Heritage & Authentic Documentation Showcase */}
      <Section eyebrow="Heritage & Authority" title="From a regional trade desk to a 24-country bridge">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Damoder Immigration Services & Overseas Manpower Consultancy began in 2004 with a singular principle:
              <span className="font-semibold text-brand-deep"> every worker leaves India with a signed bilingual contract, an official receipt, and a verified employer.</span>
            </p>
            <p>
              Over the last two decades, that documentation discipline has scaled into an institutional recruitment
              powerhouse. Today, we manage dedicated country desks, state-of-the-art trade testing facilities, and an
              in-house attestation unit handling MEA Apostille, Embassy Legalisation, and eMigrate clearances under one roof.
            </p>
            <p>
              For international employers, we offer predictable mobilisation schedules and pre-screened talent. For Indian
              jobseekers, we offer legitimate career transformation with zero financial exploitation.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button asChild className="rounded-lg bg-brand hover:bg-brand/90 font-medium">
                <Link to="/employer-services">Hire Indian Talent</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg border-border font-medium">
                <Link to="/contact-us">Verify Licence Credentials</Link>
              </Button>
            </div>
          </div>

          {/* Authentic Stamped Mandate Showcase Card */}
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xs">
            <img
              src={aboutHeroImg}
              alt="Damoder Immigration Services official legalisation dossier and executive terminal"
              className="w-full aspect-[16/10] object-cover object-[center_35%]"
            />
          </div>
        </div>
      </Section>

      {/* Leadership & Direction: Vision, Mission & Ethical Creed */}
      <Section tone="muted" eyebrow="Direction" title="Our foundational vision & ethical creed">
        <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-3">
          <StaggerItem>
            <MotionCard className="rounded-lg border border-border bg-card p-7 h-full shadow-2xs">
              <div className="size-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                <Compass className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-deep">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To make India the world's most trusted, disciplined source of skilled manpower — where zero workers pay
                for employment and zero international employers face documentation delays.
              </p>
            </MotionCard>
          </StaggerItem>

          <StaggerItem>
            <MotionCard className="rounded-lg border border-border bg-card p-7 h-full shadow-2xs">
              <div className="size-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                <Building2 className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-deep">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Deliver trade-tested, embassy-attested workforce contingents on guaranteed deployment timelines while
                safeguarding candidate dignity, fair statutory wages, and safe overseas working conditions.
              </p>
            </MotionCard>
          </StaggerItem>

          <StaggerItem>
            <MotionCard className="rounded-lg border border-border bg-card p-7 h-full shadow-2xs">
              <div className="size-11 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-deep">Our Ethical Creed</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Zero cash collection, 100% written contracts prior to departure, no salary or role substitution, and
                unwavering compliance with Ministry of External Affairs regulations.
              </p>
            </MotionCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* The 4 Pillars of Our Practice */}
      <Section eyebrow="Foundations" title="The four pillars of compliant recruitment">
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-2xs">
                <div className="size-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-brand-deep">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Global Deployment Corridors */}
      <Section tone="muted" eyebrow="Global Operations" title="Operating corridors across 24 countries">
        <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-3">
          {corridors.map((c) => (
            <StaggerItem key={c.region}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-brand font-semibold text-xs tracking-wide">
                    <Globe2 className="size-4" />
                    <span>Active Corridor</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-deep">{c.region}</h3>
                  <p className="mt-2 text-xs font-semibold text-brand">{c.destinations}</p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.focus}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="size-3.5 text-emerald-600" />
                    {c.timeframe}
                  </span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Licence & Compliance Verification Box */}
      <section className="bg-paper py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Award className="size-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 className="size-3.5" />
                  Govt. of India Authorised
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-deep">
                  Ministry of External Affairs Recruiting Agent Licence
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Licence No: B-0824/TN/PER/1000+/5/9821/2021 · eMigrate Portal Integrated
                </p>
              </div>
            </div>
            <Button asChild className="rounded-lg bg-brand hover:bg-brand/90 font-medium shrink-0">
              <Link to="/contact-us">Contact Grievance Officer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </>
  );
}
