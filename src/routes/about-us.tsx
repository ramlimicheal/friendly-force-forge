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
  MapPin,
  Clock,
  BookOpen,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import aboutHeroImg from "@/assets/about-us-hero.jpg";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import { StaggerContainer, StaggerItem, MotionCard } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Damoder Immigration Services | Hyderabad, India" },
      {
        name: "description",
        content:
          "About Damoder Immigration Services (HQ: Hyderabad, India). Trusted visa and immigration consultants dedicated to seamless PR, Study, Work, and Visitor visa pathways.",
      },
      { property: "og:title", content: "About Us | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Discover our story, client commitments, and dedicated visa counseling from our headquarters in Tukkuguda, Hyderabad.",
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
          "description": "Comprehensive overview of Damoder Immigration Services, Hyderabad.",
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
  { value: "12,000+", label: "Successful Visa Grants", sub: "PR, Study, Work & Visitor visas" },
  { value: "6 Core", label: "Global Corridors", sub: "New Zealand, Germany, Canada, Australia, UK & Europe" },
  { value: "100%", label: "Process Transparency", sub: "Direct tracking with zero hidden charges" },
  { value: "7 Pillars", label: "Client Assurance", sub: "Dedicated consultants & IELTS coaching" },
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
    icon: FileCheck,
    title: "4. Documentation Filing",
    body: "Extensive documentation is involved in any visa process. To lift the stress off your shoulders, we compile, streamline, and submit your documents on time without amiss.",
  },
  {
    icon: BookOpen,
    title: "5. IELTS Inputs & Coaching",
    body: "To help you score best with your language proficiency, we provide the right inputs, study materials, and suggestions to ace IELTS/PTE tests and boost your overall PR points.",
  },
  {
    icon: ShieldCheck,
    title: "6. 100% Process Transparency",
    body: "You have every right to know what is happening with your file. We are trusted as the best immigration consultants in Hyderabad for total transparency until the day of the grant.",
  },
  {
    icon: Award,
    title: "7. Job-Related Tips & Market Updates",
    body: "We offer all the suggestions, tips, and current job market updates for a smooth transition to your dream country and securing employment in your relevant skill field.",
  },
];

const destinations = [
  {
    country: "🇳🇿 New Zealand (Flagship Priority)",
    desc: "Skilled Migrant Category (SMC 6-point system), Accredited Employer Work Visa (AEWV), Green List Fast-Track & University Admissions.",
  },
  {
    country: "🇩🇪 Germany & Europe (Priority)",
    desc: "Opportunity Card (Chancenkarte), EU Blue Card, Skilled Immigration Act & Healthcare / IT settlement.",
  },
  {
    country: "🇨🇦 Canada",
    desc: "Express Entry (FSWP/CEC), Provincial Nominee Programs (PNP), Study Visas with PGWP & Family Sponsorship.",
  },
  {
    country: "🇦🇺 Australia",
    desc: "General Skilled Migration (Subclass 189/190/491), Skills Assessments & Top University Admissions.",
  },
  {
    country: "🇬🇧 United Kingdom",
    desc: "UK Skilled Worker Visa, Health & Care Worker Sponsorship, Student Visa with Graduate Route & Global Talent.",
  },
  {
    country: "🇺🇸 United States & Schengen",
    desc: "Employment visas (EB-3), Visitor visas, Business migration & European Single Work Permits.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="HQ: Tukkuguda, Hyderabad, India · Trusted Visa & Immigration Authority"
        title="A Complete Roundup of Visa Services at Damoder Immigration"
        subtitle="We make sure your visa process is absolutely seamless and stress-free to study, work, or settle in countries like New Zealand, Germany, Canada, Australia, the United Kingdom, and Europe."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Schedule Profile Assessment
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/candidate-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Visa Categories
          </Link>
        </div>
      </PageHero>

      {/* Quick Stats */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {quickStats.map((s) => (
              <div key={s.label} className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                <div className="font-display text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Hyderabad HQ Overview */}
      <Section
        eyebrow="Our Foundation"
        title="Ethical, Transparent & Results-Driven Visa Counseling"
        intro="Founded on principles of integrity and client-first commitment, Damoder Immigration Services has evolved into one of Hyderabad's most reputable immigration advisory firms."
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              Navigating international immigration law, points-based selection systems, and consular 
              documentation can feel overwhelming. At <strong className="text-brand-deep">Damoder Immigration Services</strong>, 
              we simplify every step of your journey.
            </p>
            <p>
              Whether you are an ambitious student targeting premier universities in New Zealand or the UK, 
              a skilled tech professional seeking the German Opportunity Card or Canadian Express Entry, or 
              a family planning permanent settlement in Australia, our expert counselors structure your dossier 
              for flawless submission.
            </p>
            <div className="rounded-lg border border-border bg-paper p-4 text-xs sm:text-sm text-foreground">
              <span className="font-bold text-brand-deep block mb-1">📍 Registered Hyderabad Headquarters</span>
              <span className="text-muted-foreground">{company.address}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <img
                src={aboutHeroImg}
                alt="Damoder Immigration Services executive advisory desk"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 7-Pillar Client Assurance */}
      <Section
        tone="muted"
        eyebrow="Client Assurance"
        title="The 7 Pillars of Seamless Migration at Damoder"
        intro="Our proven 7-stage client framework ensures every application receives dedicated attention, accurate scoring, and zero-defect legal filing."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sevenPillars.map((p) => (
            <MotionCard key={p.title} className="rounded-lg border border-border bg-card p-6 shadow-xs">
              <div className="flex size-11 items-center justify-center rounded-lg bg-ember/10 text-ember">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* Flagship Destination Corridors */}
      <Section
        eyebrow="Global Destinations"
        title="Specialized Country Desks"
        intro="Dedicated immigration specialists assigned to each flagship country corridor."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.country} className="rounded-lg border border-border bg-card p-5 shadow-xs">
              <h4 className="font-display text-base font-bold text-brand-deep">{d.country}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
