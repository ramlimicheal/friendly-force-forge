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
  UtensilsCrossed,
  Truck,
  Flame,
  Zap,
  Building2,
  HelpCircle,
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
      { title: "Candidate Career Portal | Live Overseas Job Vacancies & Registration" },
      {
        name: "description",
        content:
          "Browse live overseas job vacancies for Poland, Germany, Saudi Arabia, UAE, and Qatar. 100% free profile evaluation, zero cash fee guarantee, MEA registered.",
      },
      { property: "og:title", content: "Candidate Career Portal | Damoder Immigration Services" },
      {
        property: "og:description",
        content:
          "Verified overseas job mandates, transparent salaries, direct employer sponsorship, and safe recruitment under MEA regulations.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/candidate-portal" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/candidate-portal" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Verified Overseas Job Vacancies",
          "url": "https://dhamodaranimmigration.com/candidate-portal",
          "description": "Live verified employer job vacancies in Europe, Gulf GCC, and North America for Indian professionals and craftsmen.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dhamodaranimmigration.com" },
              { "@type": "ListItem", "position": 2, "name": "Candidate Portal", "item": "https://dhamodaranimmigration.com/candidate-portal" }
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
    label: "Free Profile Assessment",
    detail: "Zero registration fees or hidden evaluation charges",
  },
  {
    value: "18,000+",
    label: "Workers Deployed Legally",
    detail: "Operating under MEA Lic. B-0824/TN/PER/1000+/5/9821/2021",
  },
  {
    value: "Direct",
    label: "Employer Sponsorship",
    detail: "Written contracts defining salary, overtime & accommodations",
  },
  {
    value: "Zero",
    label: "Cash Transactions",
    detail: "Strict anti-fraud policy — all official receipts provided",
  },
];

const vacancies = [
  {
    id: "v1",
    title: "6G SMAW / TIG Pipe Welder",
    country: "Saudi Arabia (KSA)",
    region: "Gulf",
    salary: "SAR 3,500 – 4,500 / month",
    inr: "₹78,000 – ₹1,00,000 INR",
    exp: "4+ years industrial EPC experience",
    tag: "Aramco Approved Project",
    benefits: ["Free Accommodation & Food", "Overtime Paid 1.5x", "Free Medical & Air Ticket"],
    sector: "Oil, Gas & Energy",
  },
  {
    id: "v2",
    title: "Registered Staff Nurse (ICU / General)",
    country: "Germany",
    region: "Europe",
    salary: "EUR 2,800 – 3,400 / month",
    inr: "₹2,50,000 – ₹3,05,000 INR",
    exp: "B.Sc Nursing + 2 yrs exp (B1/B2 German track)",
    tag: "EU Blue Card Route",
    benefits: ["Hospital Sponsorship", "Relocation Allowance", "Path to EU Permanent Residency"],
    sector: "Healthcare & Hospitals",
  },
  {
    id: "v3",
    title: "Structural Steel Fabricator / Fitter",
    country: "Poland",
    region: "Europe",
    salary: "PLN 5,500 – 6,800 / month",
    inr: "₹1,15,000 – ₹1,42,000 INR",
    exp: "3+ years fabrication experience",
    tag: "Type-A Work Permit",
    benefits: ["Furnished Company Housing", "Social Security & Insurance", "Renewable National Permit"],
    sector: "Manufacturing & Heavy Engineering",
  },
  {
    id: "v4",
    title: "Hotel Chef de Partie (Continental / Asian)",
    country: "Malta",
    region: "Europe",
    salary: "EUR 1,500 – 1,850 / month",
    inr: "₹1,35,000 – ₹1,65,000 INR",
    exp: "3+ years in 4/5 star hotel or resort",
    tag: "Single Work Permit",
    benefits: ["Duty Meals Provided", "Yearly Paid Leave & Return Flight", "Schengen Mobility"],
    sector: "Hospitality & Resorts",
  },
  {
    id: "v5",
    title: "Heavy Trailer Driver (Long Haul)",
    country: "United Arab Emirates (UAE)",
    region: "Gulf",
    salary: "AED 2,800 – 3,600 / month",
    inr: "₹63,000 – ₹81,000 INR",
    exp: "Valid GCC Heavy Driving License",
    tag: "MOHRE Approved",
    benefits: ["Company Housing & Medical", "Trip Allowance Bonus", "2-Year Renewable Contract"],
    sector: "Logistics & Transport",
  },
  {
    id: "v6",
    title: "Industrial MEP Electrician",
    country: "Qatar",
    region: "Gulf",
    salary: "QAR 2,400 – 3,200 / month",
    inr: "₹55,000 – ₹73,000 INR",
    exp: "ITI / Diploma + 3 yrs building projects",
    tag: "Infrastructure Mandate",
    benefits: ["Free Bachelor Accommodation", "Free Food / Allowance", "End of Service Gratuity"],
    sector: "Construction & MEP",
  },
  {
    id: "v7",
    title: "Forklift & Reach Truck Operator",
    country: "Croatia",
    region: "Europe",
    salary: "EUR 1,200 – 1,500 / month",
    inr: "₹1,08,000 – ₹1,35,000 INR",
    exp: "2+ years logistics warehouse experience",
    tag: "EU Stay & Work Permit",
    benefits: ["Company Accommodation", "Subsidized Meals", "Overtime Available"],
    sector: "Warehousing & Supply Chain",
  },
  {
    id: "v8",
    title: "Shuttering Carpenter & Steel Fixer",
    country: "Kuwait",
    region: "Gulf",
    salary: "KWD 180 – 230 / month",
    inr: "₹49,000 – ₹62,000 INR",
    exp: "3+ years construction experience",
    tag: "Bulk Intake",
    benefits: ["Camp Accommodation & Mess", "Site Transport Provided", "Overtime Paid"],
    sector: "Civil Infrastructure",
  },
];

const candidateSteps = [
  {
    num: "01",
    title: "Online Profile & Document Review",
    desc: "Submit your basic details, passport copy, and resume. Our country desk evaluates your qualifications against open employer demands at zero cost.",
  },
  {
    num: "02",
    title: "Practical Trade Assessment",
    desc: "Demonstrate your craftsmanship at our partner technical workshops or complete a video interview with the foreign employer's selection board.",
  },
  {
    num: "03",
    title: "Offer Letter & Contract Stamping",
    desc: "Receive your formal written employment contract in dual languages with clearly defined wages, working hours, overtime rates, and housing terms.",
  },
  {
    num: "04",
    title: "GAMCA Medicals & Visa Stamping",
    desc: "Complete your medical screening at GAMCA/Wafid accredited diagnostic centers and police clearance. We handle all embassy and MEA eMigrate approvals.",
  },
  {
    num: "05",
    title: "Flight Deployment & Touchdown Care",
    desc: "Attend our pre-departure cultural and safety orientation in Hyderabad, receive your flight ticket, and get received by your employer's HR team abroad.",
  },
];

const safetyPillars = [
  {
    icon: ShieldCheck,
    title: "Beware of Unlicensed Sub-Agents",
    desc: "Damoder Immigration Services operates strictly from our registered headquarters in Hyderabad. We have NOT authorized any roaming middlemen, WhatsApp brokers, or village agents to collect cash.",
  },
  {
    icon: FileText,
    title: "Inspect Your Written Contract",
    desc: "Never travel on a tourist visa for employment. Every legal job through Damoder comes with a verified work visa and an official MEA eMigrate employment agreement.",
  },
  {
    icon: AlertTriangle,
    title: "Grievance & 24/7 Helpline",
    desc: "If any individual demands unauthorized cash payments claiming to represent us, report immediately to our Statutory Grievance Desk at complaints@dhamodaranimmigration.com.",
  },
];

function CandidatePage() {
  const [submitting, setSubmitting] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState("");

  const handleApplyClick = (tradeTitle: string) => {
    setSelectedTrade(tradeTitle);
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Standard Top Banner with High-Visibility PixelBlast */}
      <PageHero
        eyebrow="For Indian Job Seekers & Craftsmen · Direct Employer Mandates"
        title="Authentic Overseas Careers with Verified Employer Sponsorship"
        subtitle="Zero illegal middleman charges, 100% written contracts, and direct deployment to licensed companies across Schengen Europe, the Gulf GCC, and the United States."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#vacancies"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            View Live Vacancies
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Register Profile
          </a>
        </div>
      </PageHero>

      {/* 2. Candidate Trust Metrics Ribbon */}
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

      {/* 3. Live Verified Vacancies Grid */}
      <Section
        id="vacancies"
        eyebrow="Active Mandates"
        title="Live employer-sponsored job openings"
        intro="Positions are updated in real-time as foreign employer demand letters are validated on the MEA eMigrate portal. Salaries are tax-free or net take-home."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vacancies.map((v) => (
            <StaggerItem key={v.id}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {v.tag}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{v.region}</span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-brand-deep leading-snug">
                    {v.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <MapPin className="size-3.5 text-brand" />
                    <span>{v.country}</span>
                  </p>

                  <div className="mt-4 rounded-md bg-paper p-3 border border-border/60">
                    <div className="text-xs font-medium text-muted-foreground">Offered Salary:</div>
                    <div className="font-display text-sm font-bold text-brand-deep">{v.salary}</div>
                    <div className="text-[11px] font-semibold text-ember mt-0.5">≈ {v.inr}</div>
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Requirement: </span>
                    {v.exp}
                  </div>

                  <ul className="mt-3 space-y-1 text-[11px] text-muted-foreground border-t border-border/60 pt-2.5">
                    {v.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-border">
                  <Button
                    onClick={() => handleApplyClick(v.title)}
                    className="w-full rounded-lg text-xs font-semibold bg-brand hover:bg-brand-deep text-white"
                  >
                    Apply for this Trade
                  </Button>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. Candidate 5-Stage Deployment Journey */}
      <Section
        tone="muted"
        eyebrow="Transparent Roadmap"
        title="Your 5-Stage journey from application to international flight"
        intro="We guide you step-by-step through skill testing, medicals, visa stamping, and pre-departure briefings with zero hidden surprises."
      >
        <div className="grid gap-5 md:grid-cols-5">
          {candidateSteps.map((step, idx) => (
            <MotionCard key={step.num} className="rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-ember">{step.num}</span>
                <h4 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-muted-foreground">
                Step {idx + 1} of 5
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 5. Worker Welfare & Anti-Fraud Safety Charter */}
      <Section
        eyebrow="Candidate Protection"
        title="Our Anti-Fraud & Worker Welfare Charter"
        intro="Damoder Immigration Services is committed to 100% legal, ethical recruitment under the Emigration Act 1983. Protect yourself from fraudulent travel agents."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {safetyPillars.map((p) => (
            <MotionCard key={p.title} className="rounded-lg border border-border bg-card p-7 shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-deep">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 6. Direct Candidate Registration & Skill Submission Terminal */}
      <Section
        id="register"
        tone="muted"
        eyebrow="Free Registration"
        title="Submit your profile for overseas placement"
        intro="Register once in our verified candidate pool. When a matching employer demand opens, our Hyderabad desk contacts you directly with written terms."
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
                  setSelectedTrade("");
                  toast.success("Profile registered successfully", {
                    description: "Our recruitment desk will review your details and contact you for upcoming client interview drives.",
                  });
                }, 600);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold text-brand-deep">
                  Full Name (Exactly as in Passport) *
                </Label>
                <Input id="name" name="name" placeholder="e.g. Ramesh Kumar Soundararajan" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-brand-deep">
                  Mobile &amp; WhatsApp Number *
                </Label>
                <Input id="phone" name="phone" placeholder="+91 98765 43210" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-brand-deep">
                  Email Address *
                </Label>
                <Input id="email" name="email" type="email" placeholder="ramesh@gmail.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passport" className="font-semibold text-brand-deep">
                  Passport Status *
                </Label>
                <select
                  id="passport"
                  name="passport"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select passport status...</option>
                  <option value="ECNR (Emigration Check Not Required)">ECNR (Emigration Check Not Required)</option>
                  <option value="ECR (Emigration Check Required)">ECR (Emigration Check Required)</option>
                  <option value="Applied / Renewal In Progress">Applied / Renewal In Progress</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="trade" className="font-semibold text-brand-deep">
                  Trade / Skill Category *
                </Label>
                <Input
                  id="trade"
                  name="trade"
                  defaultValue={selectedTrade}
                  placeholder="e.g. 6G Welder / ICU Nurse / Electrician / Chef"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expYears" className="font-semibold text-brand-deep">
                  Total Work Experience *
                </Label>
                <select
                  id="expYears"
                  name="expYears"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select experience level...</option>
                  <option value="Fresher (ITI / Certified Course)">Fresher (ITI / Certified Course)</option>
                  <option value="1 – 3 Years Experience">1 – 3 Years Experience</option>
                  <option value="3 – 6 Years Experience">3 – 6 Years Experience</option>
                  <option value="6 – 10 Years Experience">6 – 10 Years Experience</option>
                  <option value="10+ Years Senior Specialist">10+ Years Senior Specialist</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetRegion" className="font-semibold text-brand-deep">
                  Preferred Destination Region *
                </Label>
                <select
                  id="targetRegion"
                  name="targetRegion"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select region...</option>
                  <option value="Gulf / GCC Countries (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain)">Gulf / GCC Countries (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain)</option>
                  <option value="Schengen Europe (Poland, Germany, Malta, Croatia, Romania)">Schengen Europe (Poland, Germany, Malta, Croatia, Romania)</option>
                  <option value="United States (EB-3, H-1B, J-1)">United States (EB-3, H-1B, J-1)</option>
                  <option value="Any Verified Country Mandate">Any Verified Country Mandate</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gccExp" className="font-semibold text-brand-deep">
                  Prior Overseas Experience
                </Label>
                <select
                  id="gccExp"
                  name="gccExp"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="None (First-time overseas applicant)">None (First-time overseas applicant)</option>
                  <option value="Ex-Gulf (Saudi Arabia, UAE, Qatar, etc.)">Ex-Gulf (Saudi Arabia, UAE, Qatar, etc.)</option>
                  <option value="Ex-Europe (Poland, Malta, etc.)">Ex-Europe (Poland, Malta, etc.)</option>
                  <option value="Ex-Southeast Asia (Singapore, Malaysia)">Ex-Southeast Asia (Singapore, Malaysia)</option>
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="qualifications" className="font-semibold text-brand-deep">
                  Educational Qualifications &amp; Technical Certifications
                </Label>
                <Textarea
                  id="qualifications"
                  name="qualifications"
                  rows={3}
                  placeholder="e.g. 10th / 12th Pass, ITI Welder Certification, AWS 6G Card, B.Sc Nursing, Valid Indian Heavy Driving License, etc."
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>100% Confidential. No registration fee is charged at any point.</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto rounded-lg font-semibold bg-brand hover:bg-brand-deep text-white px-8"
                >
                  {submitting ? "Registering Profile..." : "Submit Profile for Free Assessment"}
                </Button>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>

      {/* 7. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
