import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  FileCheck2,
  Landmark,
  Stamp,
  FileSignature,
  ShieldCheck,
  GraduationCap,
  FileText,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Globe2,
  Award,
  Search,
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

export const Route = createFileRoute("/visa-attestation-services")({
  head: () => ({
    meta: [
      { title: "Visa Attestation, MEA Apostille & Embassy Stamping Services" },
      {
        name: "description",
        content:
          "Official certificate attestation, MEA apostille stickers, State HRD verification, and embassy legalisation for Saudi Arabia, UAE, Qatar, Poland, Germany & USA.",
      },
      { property: "og:title", content: "MEA Apostille & Embassy Attestation | Dhamodaran Immigration" },
      {
        property: "og:description",
        content:
          "Notary to Embassy: Complete legalisation chain for educational, personal and commercial documents with fast-track 5-7 day processing.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/visa-attestation-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/visa-attestation-services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "4-Tier Document Legalisation & MEA Apostille Protocol",
          "description": "Step-by-step statutory process for authenticating Indian certificates for overseas employment and immigration.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "State Level Authentication", "text": "HRD or Home Department verification of originating document." },
            { "@type": "HowToStep", "position": 2, "name": "MEA Attestation & Hague Apostille", "text": "Ministry of External Affairs QR-code verified Apostille sticker." },
            { "@type": "HowToStep", "position": 3, "name": "Destination Embassy Legalisation", "text": "Consular stamping for non-Hague member destinations." },
            { "@type": "HowToStep", "position": 4, "name": "Destination MOFA Endorsement", "text": "Final on-ground endorsement upon arrival in host nation." }
          ]
        })
      }
    ]
  }),
  component: AttestationPage,
});

const attestationMetrics = [
  {
    value: "4-Stage",
    label: "End-to-End Authentication",
    detail: "Notary, State HRD, MEA Apostille & Embassy Consular",
  },
  {
    value: "24+",
    label: "Embassy Consulates",
    detail: "Direct submission liaisons across New Delhi & Mumbai",
  },
  {
    value: "5–7",
    suffix: "Days",
    label: "Fast-Track Turnaround",
    detail: "Expedited MEA Apostille for Hague member states",
  },
  {
    value: "100%",
    label: "Zero-Rejection Guarantee",
    detail: "Pre-audit of seals, stamps, and format compliance",
  },
];

const legalisationChain = [
  {
    step: "01",
    title: "State Level Authentication (HRD / Home / GAD)",
    agency: "State Government Depts",
    desc: "Educational certificates verified by State HRD (Higher Education Dept). Personal documents authenticated by State Home Department / General Administration Department (GAD).",
    time: "2 – 4 Days",
  },
  {
    step: "02",
    title: "MEA Attestation & Hague Apostille",
    agency: "Ministry of External Affairs (Govt. of India)",
    desc: "Official MEA sticker affixed with unique serial number and QR-code verification. Hague Apostille issued for 120+ member nations (Europe, USA, etc.).",
    time: "2 – 3 Days",
  },
  {
    step: "03",
    title: "Destination Embassy Legalisation",
    agency: "Foreign Embassy Consulates",
    desc: "Mandatory consular stamping for non-Hague nations (Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain). We handle biometric slips, Enjaz/MOHRE slips, and cultural attache approvals.",
    time: "3 – 6 Days",
  },
  {
    step: "04",
    title: "Destination MOFA Endorsement",
    agency: "Ministry of Foreign Affairs (Host Country)",
    desc: "Final on-ground endorsement upon arrival in the host nation (e.g. MOFA Saudi Arabia, MOFA UAE), completed smoothly via pre-verified dossier files.",
    time: "On Touchdown",
  },
];

const documentSuites = [
  {
    icon: GraduationCap,
    title: "Educational Document Attestation",
    badge: "Degree & Diploma",
    desc: "Mandatory for employment visas, university admissions, and professional licensing exams (e.g., DataFlow, Prometric, Mumaris+ for Healthcare).",
    items: [
      "Degree Certificates (B.E., B.Tech, B.Sc, B.Com, MBA)",
      "Nursing (GNM / B.Sc / Post B.Sc) & Medical Degrees",
      "Diploma Certificates (Polytechnic, ITI & Vocational)",
      "University Mark Sheets, Consolidated Transcripts & Transfer Records",
    ],
  },
  {
    icon: FileText,
    title: "Personal & Vital Records Attestation",
    badge: "Family & Residency",
    desc: "Required for family residence visas, spousal permits, birth registration abroad, and overseas employment clearances.",
    items: [
      "Birth Certificates & Marriage Certificates",
      "Police Clearance Certificates (PCC issued by Passport Seva Kendra)",
      "Medical Fitness Certificates (GAMCA / Wafid / European)",
      "Experience Certificates & Salary Slip Affidavits",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & Corporate Legal Documents",
    badge: "B2B & Trade",
    desc: "Required for foreign company branch registration, international joint ventures, trade tenders, and overseas power of attorney.",
    items: [
      "Power of Attorney (POA) & Commercial Agency Agreements",
      "Memorandum & Articles of Association (MOA / AOA)",
      "Board Resolutions & Certificate of Incorporation",
      "Commercial Invoices, Packing Lists & Chamber of Commerce Filings",
    ],
  },
];

const visaPermitServices = [
  {
    icon: FileSignature,
    title: "European Work Permit Filing",
    desc: "Filing and tracking of National Work Permit Type-A for Poland, Single Permits for Malta, and Labor Market Authorizations for Croatia & Germany.",
  },
  {
    icon: Stamp,
    title: "Gulf Visa Stamping (Enjaz / QVC / MOHRE)",
    desc: "Appointment scheduling, biometric enrollment at VFS/QVC centers, embassy submission, and visa stamping on passports.",
  },
  {
    icon: Landmark,
    title: "eMigrate Emigration Clearance (POE)",
    desc: "Emigration Check Required (ECR) passport holder clearances filed directly on the MEA eMigrate system for all 18 notified ECR countries.",
  },
  {
    icon: Globe2,
    title: "Certified Legal Translation",
    desc: "Sworn legal translations of Indian certificates into Arabic, Polish, German, French, and Italian by authorized embassy translators.",
  },
];

function AttestationPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="Statutory Documentation Division · MEA Registered B-0824/TN/PER/1000+/5/9821/2021"
        title="MEA Apostille, Embassy Attestation & Visa Stamping Services"
        subtitle="Complete legalisation chain under one roof: State HRD/Home Department, Ministry of External Affairs (MEA), Hague Convention Apostille, and Embassy Consular stamping across 24+ destination nations."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#attestation-quote"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Get Attestation Quote
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#chain"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Process Chain
          </a>
        </div>
      </PageHero>

      {/* 2. Metrics Ribbon */}
      <section className="border-b border-border bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {attestationMetrics.map((m) => (
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

      {/* 3. The Complete 4-Tier Legalisation Protocol */}
      <Section
        id="chain"
        eyebrow="The Authentication Chain"
        title="4-Tier official document legalisation protocol"
        intro="Depending on your target destination country (Hague Convention member vs. Non-Apostille country), documents follow an audited statutory path."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {legalisationChain.map((step) => (
            <StaggerItem key={step.step}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-ember">{step.step}</span>
                    <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-brand-deep leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-ember">{step.agency}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>Statutory Seal Affixed</span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 4. Three Dedicated Document Classification Suites */}
      <Section
        tone="muted"
        eyebrow="Document Categories"
        title="Comprehensive document suites we authenticate"
        intro="We handle State HRD, MEA, and Embassy legalisation for all classes of academic, civil, and corporate paperwork."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {documentSuites.map((suite) => (
            <MotionCard key={suite.title} className="rounded-lg border border-border bg-card p-8 h-full shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <suite.icon className="size-6" />
                </div>
                <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                  {suite.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                {suite.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {suite.desc}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Covered Certificates
                </p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {suite.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      {/* 5. Comprehensive Visa Stamping & Emigration Support */}
      <Section
        eyebrow="Integrated Services"
        title="Work permit, visa stamping & translation division"
        intro="Beyond basic certificate attestation, our dedicated visa desk handles embassy biometrics, eMigrate POE clearances, and authorized translations."
      >
        <StaggerContainer staggerDelay={0.06} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visaPermitServices.map((v) => (
            <StaggerItem key={v.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-6 h-full shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-brand-deep">{v.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 6. Direct Attestation Quote & Document Drop Intake Form */}
      <Section
        id="attestation-quote"
        tone="muted"
        eyebrow="Quick Service Desk"
        title="Request Attestation Quote & Processing Timeline"
        intro="Enter your certificate details below. Our documentation officer will review your documents and provide the exact timeline and fee breakdown within 4 hours."
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
                  toast.success("Attestation query submitted", {
                    description: "Our documentation division will contact you with fee breakdown & pickup instructions.",
                  });
                }, 600);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="applicantName" className="font-semibold text-brand-deep">
                  Applicant Name *
                </Label>
                <Input id="applicantName" name="applicantName" placeholder="e.g. Anandha Krishnan" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicantPhone" className="font-semibold text-brand-deep">
                  Mobile / WhatsApp Number *
                </Label>
                <Input id="applicantPhone" name="applicantPhone" placeholder="+91 94440 12345" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicantEmail" className="font-semibold text-brand-deep">
                  Email Address *
                </Label>
                <Input id="applicantEmail" name="applicantEmail" type="email" placeholder="anand@gmail.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetCountry" className="font-semibold text-brand-deep">
                  Destination Country *
                </Label>
                <select
                  id="targetCountry"
                  name="targetCountry"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select destination country...</option>
                  <option value="Saudi Arabia">Saudi Arabia (Embassy + Cultural Attache)</option>
                  <option value="United Arab Emirates">United Arab Emirates (UAE Embassy + MOFA)</option>
                  <option value="Qatar">Qatar (Embassy Legalisation)</option>
                  <option value="Kuwait">Kuwait (Embassy Legalisation)</option>
                  <option value="Oman">Oman (Apostille / Embassy)</option>
                  <option value="Bahrain">Bahrain (Apostille / Embassy)</option>
                  <option value="Poland">Poland (Hague Apostille)</option>
                  <option value="Germany">Germany (Hague Apostille)</option>
                  <option value="Malta">Malta (Hague Apostille)</option>
                  <option value="Croatia">Croatia (Hague Apostille)</option>
                  <option value="United States">United States (Hague Apostille)</option>
                  <option value="Other">Other Country</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="docType" className="font-semibold text-brand-deep">
                  Document Type *
                </Label>
                <select
                  id="docType"
                  name="docType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select document type...</option>
                  <option value="Educational (Degree / Diploma / Nursing)">Educational (Degree / Diploma / Nursing)</option>
                  <option value="Personal (Marriage / Birth / PCC)">Personal (Marriage / Birth / PCC)</option>
                  <option value="Commercial (POA / Invoices / Board Resolution)">Commercial (POA / Invoices / Board Resolution)</option>
                  <option value="Multiple Mixed Certificates">Multiple Mixed Certificates</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="docCount" className="font-semibold text-brand-deep">
                  Number of Original Certificates *
                </Label>
                <select
                  id="docCount"
                  name="docCount"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="1">1 Certificate</option>
                  <option value="2">2 Certificates</option>
                  <option value="3–5">3 – 5 Certificates</option>
                  <option value="5+">5+ Bulk Document Set</option>
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="details" className="font-semibold text-brand-deep">
                  Specific Requirements or Target Deadlines
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={3}
                  placeholder="e.g. Need urgent MEA Apostille for Poland work permit submission within 7 days, or require State HRD + Saudi Embassy stamping for Nursing DataFlow exam."
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>Safe Document Custody: Secure door-step courier tracking available across India.</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto rounded-lg font-semibold bg-brand hover:bg-brand-deep text-white px-8"
                >
                  {submitting ? "Calculating Quote..." : "Get Attestation Fee & Timeline"}
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
