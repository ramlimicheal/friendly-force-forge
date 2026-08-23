import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  FileText,
  BadgeCheck,
  AlertTriangle,
  Briefcase,
  Users,
  Plane,
  ArrowRight,
  Sparkles,
  Stethoscope,
  HardHat,
  Cpu,
  GraduationCap,
  Landmark,
  Globe2,
  BookOpen,
  UserCheck,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
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

export const Route = createFileRoute("/candidate-portal")({
  head: () => ({
    meta: [
      { title: "Candidate Career & Visa Portal | Damoder Immigration Services" },
      {
        name: "description",
        content:
          "Apply for PR, Study, and Skilled Work Visas in New Zealand, Germany, Canada, Australia, UK & Europe with Damoder Immigration Services (Hyderabad). 100% free eligibility check.",
      },
      { property: "og:title", content: "Candidate Career & Visa Portal | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Dedicated visa consultants, IELTS inputs, transparent points scoring, and verified overseas job opportunities.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/candidate-portal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/candidate-portal" },
    ],
  }),
  component: CandidatePage,
});

const candidateMetrics = [
  {
    value: "100%",
    label: "Free Profile Assessment",
    detail: "Accurate points evaluation & pathway recommendations",
  },
  {
    value: "12,000+",
    label: "Successful Visa Grants",
    detail: "PR, Study, Skilled Work & Visitor visas across top nations",
  },
  {
    value: "Direct",
    label: "Employer Sourcing",
    detail: "Written contracts defining salary, overtime & accommodations",
  },
  {
    value: "7 Pillars",
    label: "Client Assurance",
    detail: "Dedicated consultant, IELTS coaching & document filing",
  },
];

const vacancies = [
  {
    id: "v1",
    title: "Senior Software Engineer / Cloud Architect",
    country: "New Zealand",
    region: "New Zealand",
    salary: "NZD $110,000 – $140,000 / year",
    inr: "₹55,000 – ₹70,000 / month approx",
    exp: "4+ years AWS / React / Node.js experience",
    tag: "🇳🇿 Green List Tier 1 PR",
    benefits: ["Straight to Residence PR Route", "Partner Open Work Visa", "Free Public Healthcare & Schooling"],
    sector: "IT & Software Engineering",
  },
  {
    id: "v2",
    title: "Registered Staff Nurse (ICU / Theatre)",
    country: "New Zealand",
    region: "New Zealand",
    salary: "NZD $85,000 – $105,000 / year",
    inr: "Direct Hospital Sponsorship",
    exp: "B.Sc Nursing + 2 yrs clinical experience",
    tag: "🇳🇿 Green List Fast-Track",
    benefits: ["Direct Residence Pathway", "Relocation Package", "Overtime Paid at 1.5x"],
    sector: "Healthcare & Nursing",
  },
  {
    id: "v3",
    title: "Mechanical / Automotive Systems Engineer",
    country: "Germany",
    region: "Germany",
    salary: "EUR €55,000 – €75,000 / year",
    inr: "₹48,00,000 – ₹66,00,000 INR",
    exp: "Degree in Mechanical / Mechatronics (German B1 track)",
    tag: "🇩🇪 EU Blue Card / Chancenkarte",
    benefits: ["Permanent Settlement in 21 Months", "EU Wide Mobility", "Family Sponsorship"],
    sector: "Engineering & Technical",
  },
  {
    id: "v4",
    title: "Civil Site Engineer & Structural BIM Drafter",
    country: "Australia",
    region: "Australia",
    salary: "AUD $85,000 – $115,000 / year",
    inr: "Subclass 189 / 190 PR Stream",
    exp: "B.Tech Civil + EA Positive Skills Assessment",
    tag: "🇦🇺 General Skilled Migration",
    benefits: ["Permanent Residency Card", "Medicare Full Coverage", "Citizenship after 4 Years"],
    sector: "Engineering & Construction",
  },
  {
    id: "v5",
    title: "Financial Analyst & Management Accountant",
    country: "Canada",
    region: "Canada",
    salary: "CAD $75,000 – $95,000 / year",
    inr: "Express Entry FSWP / PNP",
    exp: "B.Com / MBA Finance / CPA / ACCA + 3 yrs exp",
    tag: "🇨🇦 Express Entry / Ontario PNP",
    benefits: ["Canadian Permanent Residency", "Universal Healthcare", "Spouse Open Work Permit"],
    sector: "Accountants & Finance",
  },
  {
    id: "v6",
    title: "Structural Steel Fabricator / 6G TIG Welder",
    country: "Poland",
    region: "Europe",
    salary: "PLN 5,500 – 7,200 / month",
    inr: "₹1,15,000 – ₹1,50,000 INR",
    exp: "3+ years pipe welding / fabrication experience",
    tag: "🇪🇺 Type-A Work Permit",
    benefits: ["Furnished Company Housing", "Social Security (ZUS)", "Karta Pobytu Residency"],
    sector: "Manufacturing & Heavy Engineering",
  },
];

const protectionCharter = [
  {
    title: "Zero Middleman Sub-Agent Surcharge",
    desc: "You deal directly with Damoder Immigration Services headquarters in Hyderabad. No informal cash payments or unverified sub-agents.",
  },
  {
    title: "Authentic Written Bilingual Contracts",
    desc: "Every employment or university admission is backed by written documentation specifying role, remuneration, and statutory rights before departure.",
  },
  {
    title: "IELTS & Language Proficiency Coaching",
    desc: "We provide structured language training materials and test prep inputs to maximize your points and secure high band scores.",
  },
  {
    title: "Complete Process Transparency",
    desc: "Direct tracking of every dossier submission from document attestation to embassy appointment and final visa grant.",
  },
];

function CandidatePage() {
  const [submitting, setSubmitting] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredVacancies = selectedRegion === "All"
    ? vacancies
    : vacancies.filter((v) => v.region === selectedRegion);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Profile submitted successfully! A dedicated visa counselor from Damoder Immigration Services (Hyderabad) will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        eyebrow="Candidate Career & Visa Portal · Damoder Immigration Services (Hyderabad)"
        title="Start Your Migration Journey to New Zealand, Germany, Canada & Australia"
        subtitle="Dedicated visa consultants, transparent points scoring, IELTS language inputs, and complete documentation support to study, work, or settle abroad."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#eligibility-form"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Check Free Eligibility
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#vacancies"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Browse Verified Openings
          </a>
        </div>
      </PageHero>

      {/* 2. Candidate Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {candidateMetrics.map((m) => (
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

      {/* 3. Verified Overseas Job Vacancies Board */}
      <Section
        id="vacancies"
        eyebrow="Verified Openings"
        title="Live Overseas Career Openings & PR Corridors"
        intro="Explore verified positions across New Zealand, Germany, Australia, Canada, and Europe with transparent salary structures and legal sponsorship."
      >
        {/* Regional Filter Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {["All", "New Zealand", "Germany", "Australia", "Canada", "Europe"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRegion(r)}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                selectedRegion === r
                  ? "bg-ember text-white shadow-xs"
                  : "bg-paper border border-border text-brand-deep hover:border-brand/40"
              }`}
            >
              {r === "New Zealand" ? "🇳🇿 New Zealand (Priority)" : r === "Germany" ? "🇩🇪 Germany (Priority)" : r}
            </button>
          ))}
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVacancies.map((v) => (
            <StaggerItem key={v.id}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ember">{v.country}</span>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {v.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-brand-deep leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{v.sector}</p>

                  <div className="mt-4 rounded-md bg-paper p-3 border border-border/80 text-xs font-semibold text-brand">
                    💰 {v.salary}
                  </div>

                  <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                    <p><strong>Requirement:</strong> {v.exp}</p>
                  </div>

                  <div className="mt-5 border-t border-border pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Included Benefits &amp; Pathway
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-foreground">
                      {v.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70">
                  <a
                    href="#eligibility-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-ember transition-colors"
                  >
                    <span>Apply for this Mandate</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. Candidate Protection Charter */}
      <Section
        tone="muted"
        eyebrow="Ethical Recruitment"
        title="The Candidate Protection Charter"
        intro="How Damoder Immigration Services protects your legal rights, documents, and future abroad."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {protectionCharter.map((c) => (
            <MotionCard key={c.title} className="rounded-lg border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-brand-deep">{c.title}</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 5. Intake & Eligibility Evaluation Form */}
      <Section
        id="eligibility-form"
        eyebrow="Direct Application"
        title="Submit Your Profile for Free Eligibility Assessment"
        intro="Fill out the form below. A dedicated visa counselor from our Hyderabad headquarters will evaluate your credentials and contact you within 24 hours."
      >
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cand-name">Full Name *</Label>
                <Input id="cand-name" required placeholder="e.g. Ramesh Kumar" className="rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cand-phone">WhatsApp / Mobile Number *</Label>
                <Input id="cand-phone" type="tel" required placeholder="+91 98765 43210" className="rounded-lg" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cand-email">Email Address *</Label>
                <Input id="cand-email" type="email" required placeholder="ramesh@example.com" className="rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cand-city">Current City &amp; State *</Label>
                <Input id="cand-city" required placeholder="e.g. Hyderabad, Telangana" className="rounded-lg" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cand-dest">Target Destination Country *</Label>
                <select
                  id="cand-dest"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="New Zealand">🇳🇿 New Zealand (Top Priority)</option>
                  <option value="Germany">🇩🇪 Germany (Opportunity Card / Blue Card)</option>
                  <option value="Canada">🇨🇦 Canada (Express Entry / PNP / Study)</option>
                  <option value="Australia">🇦🇺 Australia (Subclass 189/190/491)</option>
                  <option value="United Kingdom">🇬🇧 United Kingdom (Skilled Worker / Student)</option>
                  <option value="Europe / Poland">🇪🇺 Schengen Europe / Poland / Malta</option>
                  <option value="United States">🇺🇸 United States (EB-3 / H-1B)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cand-visa-type">Visa Category *</Label>
                <select
                  id="cand-visa-type"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="PR Visa">PR Visa (Permanent Residency)</option>
                  <option value="Study Visa">Study Visa (University Admissions)</option>
                  <option value="Work Permit">Skilled Work Permit &amp; Job Placement</option>
                  <option value="Visitor Visa">Visitor &amp; Tourist Visa</option>
                  <option value="Business / Investor">Business &amp; Investor Visa</option>
                  <option value="Dependent / Spouse">Dependent &amp; Spouse Visa</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cand-experience">Highest Education &amp; Total Years of Experience</Label>
              <Input
                id="cand-experience"
                placeholder="e.g. B.Tech in Mechanical Engineering + 5 Years in HVAC / IT"
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cand-message">Specific Queries or Background Notes</Label>
              <Textarea
                id="cand-message"
                rows={4}
                placeholder="Mention any prior IELTS score, current occupation, or specific questions..."
                className="rounded-lg"
              />
            </div>

            <div className="rounded-lg bg-paper p-4 text-xs text-muted-foreground border border-border">
              🔒 <strong>Confidentiality Guaranteed:</strong> Your profile data is used strictly for eligibility scoring by Damoder Immigration Services Hyderabad. We never share your data with unauthorized third parties.
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-ember hover:bg-ember/90 text-white font-semibold py-3 rounded-lg shadow-sm"
            >
              {submitting ? "Evaluating Profile..." : "Submit for Free Visa Assessment"}
            </Button>
          </form>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
