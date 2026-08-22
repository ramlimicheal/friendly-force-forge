import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
  Briefcase,
  Users,
  FileCheck2,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import { company } from "@/data/site";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MotionCard,
} from "@/components/motion-primitives";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Employer, Candidate & MEA Compliance Desks" },
      {
        name: "description",
        content:
          "Contact Dhamodaran Immigration directly. Department routing for B2B employer mandates, job seekers, MEA apostille attestation, and statutory grievance reporting.",
      },
      { property: "og:title", content: "Contact Dhamodaran Immigration | Chennai Headquarters" },
      {
        property: "og:description",
        content:
          "Reach the right department directly — employer recruitment desk, candidate registration, document attestation, and MEA compliance.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com/contact-us" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://dhamodaranimmigration.com/contact-us" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Dhamodaran Immigration",
          "url": "https://dhamodaranimmigration.com/contact-us",
          "mainEntity": {
            "@type": "EmploymentAgency",
            "name": "Dhamodaran Immigration & Overseas Manpower Consultancy",
            "telephone": "+91-94440-12345",
            "email": "contact@dhamodaranimmigration.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mount Road / Anna Salai",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600002",
              "addressCountry": "IN"
            }
          }
        })
      }
    ]
  }),
  component: ContactPage,
});

const desks = [
  {
    icon: Briefcase,
    title: "Employer Partnerships & Bulk Mandates",
    badge: "B2B Clients",
    phone: company.employerPhone,
    email: company.partnerships,
    desc: "Job orders, technical trade test scheduling, client interview delegation hosting, and SLA contracts.",
    timing: "Mon – Sat: 9:00 AM – 7:00 PM IST",
  },
  {
    icon: Users,
    title: "Candidate Career Desk & Interviews",
    badge: "Job Seekers",
    phone: company.candidatePhone,
    email: company.jobs,
    desc: "Open vacancy inquiries, free profile assessment, trade pre-testing schedules, and pre-departure briefings.",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
  {
    icon: FileCheck2,
    title: "MEA Apostille & Visa Stamping Division",
    badge: "Documentation",
    phone: company.attestationPhone,
    email: company.attestation,
    desc: "State HRD, Hague Apostille stickers, Gulf embassy consular legalisation, and safe passport dispatch.",
    timing: "Mon – Sat: 9:30 AM – 6:00 PM IST",
  },
  {
    icon: ShieldCheck,
    title: "Statutory Compliance & Grievance Desk",
    badge: "24/7 Ombudsman",
    phone: company.employerPhone,
    email: company.compliance,
    desc: "Report unauthorized sub-agents, cash demands, or contract discrepancies directly to our compliance director.",
    timing: "24/7 Urgent Ombudsman Line",
  },
];

const officeLocations = [
  {
    city: "Chennai (Headquarters)",
    state: "Tamil Nadu, India",
    address: "Dhamodaran Immigration & Overseas Manpower Consultancy, Mount Road / Anna Salai Business District, Chennai – 600002",
    contact: "+91 94440 12345 / contact@dhamodaranimmigration.com",
    role: "Registered MEA Headquarters & Central Executive Operations",
  },
  {
    city: "Regional Mobilisation Centers",
    state: "South & North India Network",
    address: "Authorized Trade Testing & Skill Auditing Workshop Alliances in Madurai, Trichy, Kochi, Hyderabad, and New Delhi",
    contact: "partnerships@dhamodaranimmigration.com",
    role: "Candidate Screening, Welding Rigs, MEP Labs & Trade Testing Yards",
  },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* 1. PageHero with PixelBlast */}
      <PageHero
        eyebrow="Direct Liaison · MEA Licence B-0824/TN/PER/1000+/5/9821/2021"
        title="Direct Department Routing & Statutory Liaison Desks"
        subtitle="Department-level direct access so your inquiry connects immediately with a domain specialist—whether submitting corporate job orders, verifying certificates, or accessing grievance support."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Send Direct Message
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#desks"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Department Contacts
          </a>
        </div>
      </PageHero>

      {/* 2. Direct Department Routing Cards */}
      <Section
        id="desks"
        eyebrow="Specialist Desks"
        title="Connect directly with our operational divisions"
        intro="Skip the generic switchboard. Contact the exact division handling your project or application."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {desks.map((d) => (
            <StaggerItem key={d.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <d.icon className="size-5" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                      {d.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-brand-deep leading-snug">
                    {d.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4 space-y-2">
                  <a
                    href={`tel:${d.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-brand transition-colors"
                  >
                    <Phone className="size-3.5 text-brand shrink-0" />
                    <span>{d.phone}</span>
                  </a>
                  <a
                    href={`mailto:${d.email}`}
                    className="flex items-center gap-2 break-all text-xs font-medium text-muted-foreground hover:text-brand transition-colors"
                  >
                    <Mail className="size-3.5 text-ember shrink-0" />
                    <span>{d.email}</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-1">
                    <Clock className="size-3 text-muted-foreground shrink-0" />
                    <span>{d.timing}</span>
                  </div>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 3. Direct Interactive Communication Terminal & Office Showcase */}
      <Section
        id="inquiry-form"
        tone="muted"
        eyebrow="Direct Message"
        title="Submit an inquiry to our central operations"
        intro="Fill out the form below. Inquiries are automatically routed to the designated desk head and answered within one business day."
      >
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <FadeIn direction="up">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-sm">
              <form
                className="grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setTimeout(() => {
                    setSubmitting(false);
                    (e.target as HTMLFormElement).reset();
                    toast.success("Message received by Department Desk", {
                      description: "Our designated officer will review your request and contact you within 24 hours.",
                    });
                  }, 600);
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="cname" className="font-semibold text-brand-deep">
                    Your Full Name *
                  </Label>
                  <Input id="cname" name="cname" placeholder="e.g. Senthil Nathan" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cphone" className="font-semibold text-brand-deep">
                    Mobile / WhatsApp Number *
                  </Label>
                  <Input id="cphone" name="cphone" placeholder="+91 98765 43210" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cemail" className="font-semibold text-brand-deep">
                    Email Address *
                  </Label>
                  <Input id="cemail" name="cemail" type="email" placeholder="name@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cdesk" className="font-semibold text-brand-deep">
                    Routing Department *
                  </Label>
                  <select
                    id="cdesk"
                    name="cdesk"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select department...</option>
                    <option value="Employer Partnerships (B2B Hiring)">Employer Partnerships (B2B Hiring)</option>
                    <option value="Candidate Job Application">Candidate Job Application</option>
                    <option value="Document Attestation & MEA Apostille">Document Attestation &amp; MEA Apostille</option>
                    <option value="Compliance & Grievance Reporting">Compliance &amp; Grievance Reporting</option>
                    <option value="General Administration">General Administration</option>
                  </select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cmessage" className="font-semibold text-brand-deep">
                    Message / Requirement Details *
                  </Label>
                  <Textarea
                    id="cmessage"
                    name="cmessage"
                    rows={5}
                    placeholder="Provide details about your project, candidate background, or document attestation requirement..."
                    required
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                    <span>Privacy Assured. Guaranteed response within 1 business day.</span>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full sm:w-auto rounded-lg font-semibold bg-brand hover:bg-brand-deep text-white px-8"
                  >
                    {submitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-6">
              {officeLocations.map((loc) => (
                <div key={loc.city} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-brand-deep">{loc.city}</h4>
                      <p className="text-xs font-semibold text-ember mt-0.5">{loc.state}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{loc.address}</p>
                      <div className="mt-3 border-t border-border/80 pt-2.5 text-xs font-medium text-foreground">
                        {loc.contact}
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">{loc.role}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-brand/20 bg-brand-deep p-6 text-white shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                  <ShieldCheck className="size-3.5 text-ember" />
                  Statutory Registration
                </span>
                <h4 className="mt-3 font-display text-base font-bold text-white">
                  MEA Registration No.
                </h4>
                <div className="mt-1 font-mono text-sm font-bold text-amber-400">
                  B-0824/TN/PER/1000+/5/9821/2021
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  Issued by the Protector General of Emigrants, Ministry of External Affairs, Government of India.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 4. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
