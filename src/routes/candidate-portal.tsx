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
      { property: "og:title", content: "Candidate Career & Visa Portal | Damoder Immigration" },
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Damoder Immigration Candidate & Visa Portal",
          "url": "https://damoderimmigration.com/candidate-portal",
          "description": "Comprehensive visa intake and eligibility evaluation portal for Indian candidates targeting New Zealand, Germany, Canada, Australia, UK, and Europe.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://damoderimmigration.com" },
              { "@type": "ListItem", "position": 2, "name": "Candidate Portal", "item": "https://damoderimmigration.com/candidate-portal" }
            ]
          }
        })
      }
    ]
  }),
  component: CandidatePage,
});

const candidateMetrics = [
  {
    value: "100%",
    label: "Free Eligibility Check",
    detail: "Accurate points evaluation & pathway recommendations",
  },
  {
    value: "🇳🇿 #1",
    label: "New Zealand Priority",
    detail: "Green List, SMC 6-Point PR & Accredited Employer Visas",
  },
  {
    value: "🇩🇪 #1",
    label: "Germany Opportunities",
    detail: "Chancenkarte Opportunity Card & EU Blue Card coaching",
  },
  {
    value: "7 Pillars",
    label: "Client Assurance",
    detail: "Dedicated consultant, IELTS coaching & document filing",
  },
];

const migrationPrograms = [
  {
    title: "New Zealand Skilled Migrant & Green List",
    dest: "🇳🇿 New Zealand",
    badge: "Top Priority",
    desc: "Direct PR pathways for IT professionals, certified engineers, healthcare workers, and construction managers under the 6-point SMC system and Green List Tier 1/2.",
    salary: "NZD $75,000 – $135,000 / year (₹38L – ₹68L)",
    criteria: ["Bachelors / Masters Degree", "Relevant 3+ Years Work Experience", "IELTS General 6.5+ Band", "Job Offer / SMC Point Match"],
    highlight: true,
  },
  {
    title: "Germany Opportunity Card (Chancenkarte)",
    dest: "🇩🇪 Germany",
    badge: "Europe Priority",
    desc: "Points-based jobseeker permit enabling qualified Indian graduates and technicians to enter Germany for up to 1 year to secure employment.",
    salary: "EUR €48,000 – €85,000 / year (₹43L – ₹76L)",
    criteria: ["Recognized Degree / Diploma", "Points Matrix: Age, Experience, Language", "Basic English or A1/B1 German", "Proof of Living Funds (Blocked Account)"],
    highlight: true,
  },
  {
    title: "Canada Express Entry & Provincial PNP",
    dest: "🇨🇦 Canada",
    badge: "Permanent Residency",
    desc: "Federal Skilled Worker program and targeted provincial nominations across Ontario, British Columbia, and Alberta with full family permanent residency.",
    salary: "CAD $70,000 – $120,000 / year (₹42L – ₹73L)",
    criteria: ["ECA Credential Evaluation (WES)", "CLB 7+ / IELTS General Band", "NOC TEER 0, 1, 2, 3 Experience", "Comprehensive CRS Score Optimization"],
  },
  {
    title: "Australia General Skilled Migration (GSM)",
    dest: "🇦🇺 Australia",
    badge: "Subclass 189/190",
    desc: "Independent and State-Nominated PR visas offering full Medicare healthcare, high wage scales, and citizenship pathways.",
    salary: "AUD $80,000 – $140,000 / year (₹44L – ₹77L)",
    criteria: ["Positive Skills Assessment (ACS / EA / VETASSESS)", "65+ Points on Points Test", "Competent English (IELTS / PTE)", "State Nomination EOI Filing"],
  },
  {
    title: "Study in New Zealand, UK & Europe",
    dest: "🎓 Global Universities",
    badge: "Study-to-PR",
    desc: "Premier university admissions with partial scholarships, IELTS coaching, education loan sanctioning, and 2-3 years post-study work visas.",
    salary: "Post-Study Careers: ₹35L – ₹60L / year",
    criteria: ["Academic Transcripts (55%+ GPA)", "IELTS / PTE Academic Score", "Statement of Purpose (SOP)", "Financial Proof & Loan Sanction"],
  },
  {
    title: "UK Skilled Worker & Health Care Visa",
    dest: "🇬🇧 United Kingdom",
    badge: "Direct Sponsorship",
    desc: "Fast-track sponsorship for Registered Nurses, IT architects, and corporate professionals with a direct 5-year pathway to Indefinite Leave to Remain (ILR).",
    salary: "GBP £32,000 – £65,000 / year (₹34L – ₹69L)",
    criteria: ["Certificate of Sponsorship (CoS)", "IELTS UKVI / OET Score", "NMC Registration for Nurses", "Tuberculosis & PCC Clearance"],
  },
];

const sevenPillars = [
  { num: "01", title: "Dedicated Consultant", desc: "One-on-one experienced visa advisor guiding your complete immigration roadmap." },
  { num: "02", title: "Visa-Specific Counseling", desc: "Tailored advice on requirements, scoring thresholds, and realistic timelines." },
  { num: "03", title: "Relevant Eligibility Check", desc: "Thorough pre-assessment to ensure you qualify before committing time and funds." },
  { num: "04", title: "Documentation Filing", desc: "Complete dossier compilation, verification, and timely consular submission." },
  { num: "05", title: "IELTS Inputs & Coaching", desc: "Practice materials and exam strategies to achieve top scores and maximize PR points." },
  { num: "06", title: "Process Transparency", desc: "Real-time tracking of every move from profile assessment to final visa grant." },
  { num: "07", title: "Job-Related Tips & Updates", desc: "Current market trends and job search advice to transition smoothly into your dream country." },
];

function CandidatePage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Profile submitted successfully! A dedicated visa consultant from Damoder Immigration Services (Hyderabad) will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
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
            Check Your Free Eligibility
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Migration Programs
          </a>
        </div>
      </PageHero>

      {/* Metrics Ribbon */}
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

      {/* Flagship Migration Programs */}
      <Section
        id="programs"
        eyebrow="Migration & Job Pathways"
        title="Flagship PR, Study & Work Programs"
        intro="Explore verified immigration streams across New Zealand, Germany, Canada, Australia, and the UK with transparent salary expectations and eligibility criteria."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {migrationPrograms.map((p) => (
            <StaggerItem key={p.title}>
              <MotionCard className={`rounded-lg border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow ${
                p.highlight ? "border-ember/40 ring-1 ring-ember/20" : "border-border"
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ember">{p.dest}</span>
                    <span className={`rounded-md px-2.5 py-0.5 text-[11px] font-semibold ${
                      p.highlight ? "bg-ember/15 text-ember" : "bg-brand/10 text-brand"
                    }`}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-brand-deep leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>

                  <div className="mt-4 rounded-md bg-paper p-2.5 border border-border/80 text-xs font-semibold text-brand">
                    💰 {p.salary}
                  </div>

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Core Prerequisites
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-foreground">
                      {p.criteria.map((c) => (
                        <li key={c} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{c}</span>
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
                    <span>Apply for this Pathway</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 7 Pillars of Client Care */}
      <Section
        tone="muted"
        eyebrow="Our Commitment"
        title="The 7 Pillars of Seamless Migration at Damoder Immigration"
        intro="Why clients trust Damoder Immigration Services Hyderabad as their lifelong migration partner."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sevenPillars.map((p) => (
            <div key={p.num} className="rounded-lg border border-border bg-card p-5 shadow-xs">
              <span className="font-display text-xl font-bold text-ember">{p.num}</span>
              <h4 className="mt-2 font-display text-sm font-bold text-brand-deep">{p.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Intake & Eligibility Evaluation Form */}
      <Section
        id="eligibility-form"
        eyebrow="Direct Application"
        title="Submit Your Profile for Free Eligibility Assessment"
        intro="Fill out the form below. A dedicated visa consultant from our Hyderabad headquarters will evaluate your credentials and contact you within 24 hours."
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
