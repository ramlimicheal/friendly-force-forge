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
  GraduationCap,
  Landmark,
  UserCheck,
  Compass,
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
      { title: "Contact Us | Damoder Immigration Services | Hyderabad Headquarters" },
      {
        name: "description",
        content:
          "Contact Damoder Immigration Services at our Hyderabad headquarters: 6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359. Dedicated desks for PR, Study, Work & Visitor Visas.",
      },
      { property: "og:title", content: "Contact Damoder Immigration Services | Hyderabad HQ" },
      {
        property: "og:description",
        content:
          "Schedule an in-person or remote video visa consultation with our dedicated immigration advisors in Hyderabad, India.",
      },
      { property: "og:url", content: "https://damoderimmigration.com/contact-us" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://damoderimmigration.com/contact-us" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Damoder Immigration Services",
          "url": "https://damoderimmigration.com/contact-us",
          "mainEntity": {
            "@type": "EmploymentAgency",
            "name": "Damoder Immigration Services",
            "telephone": "+91-98765-43210",
            "email": "info@damoderimmigration.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6F6F+74G, Tukkuguda",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "501359",
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
    icon: Compass,
    title: "PR & Permanent Settlement Desk",
    badge: "PR & Skilled Migration",
    phone: company.phone,
    email: company.email,
    desc: "Points assessment, EOI submissions, and document filing for New Zealand (SMC), Canada (Express Entry), Australia & Germany.",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
  {
    icon: GraduationCap,
    title: "Study Visas & University Admissions",
    badge: "Higher Education",
    phone: company.consultantPhone,
    email: company.admissions,
    desc: "University shortlisting, SOP reviews, IELTS inputs, education loan support, and student visa filing for New Zealand, UK, Germany, Canada & Australia.",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
  {
    icon: Briefcase,
    title: "Skilled Work Permits & Employer Placements",
    badge: "Overseas Careers",
    phone: company.phone,
    email: company.careers,
    desc: "Direct employer sponsorship, Accredited Employer work visas, German Opportunity Cards, and international career transitions.",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
  {
    icon: Landmark,
    title: "Concierge, Attestation & Forex Desk",
    badge: "Relocation Suite",
    phone: company.conciergePhone,
    email: company.support,
    desc: "Notary public services, State HRD & MEA Apostille, sworn translations, bank loans, IELTS exam slot booking, and forex assistance.",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry received! A dedicated visa counselor from Damoder Immigration Services (Hyderabad) will reach out to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
      <PageHero
        eyebrow="Headquarters: Hyderabad, India · Trusted Visa Consultants"
        title="Get in Touch with Damoder Immigration Services"
        subtitle="Schedule an in-person consultation at our Hyderabad office or speak with a dedicated visa specialist over phone or video call."
      />

      {/* 4 Specialized Department Desks */}
      <Section
        eyebrow="Department Routing"
        title="Connect directly with our specialized visa desks"
        intro="Reach the right department directly for faster response times and dedicated counseling."
      >
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
          {desks.map((d) => (
            <StaggerItem key={d.title}>
              <MotionCard className="rounded-lg border border-border bg-card p-8 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <d.icon className="size-6" />
                    </div>
                    <span className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">
                      {d.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-deep">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Direct Line:</span>
                    <a href={`tel:${d.phone}`} className="font-semibold text-brand hover:text-ember">
                      {d.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <a href={`mailto:${d.email}`} className="font-semibold text-brand hover:text-ember">
                      {d.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Working Hours:</span>
                    <span>{d.timing}</span>
                  </div>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Contact Form & Hyderabad HQ Address */}
      <Section
        tone="muted"
        eyebrow="Direct Inquiry"
        title="Send a Message or Book an In-Person Consultation"
        intro="Our Hyderabad headquarters is open Monday through Saturday. Fill out the form below to schedule a visit."
      >
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember">
                <MapPin className="size-4" />
                <span>Headquarters Location</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-deep">
                Damoder Immigration Services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                6F6F+74G, Tukkuguda, Hyderabad,<br />
                Telangana 501359, India
              </p>

              <div className="mt-6 border-t border-border pt-4 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="size-4 text-ember shrink-0" />
                  <span>{company.phone} / {company.consultantPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 text-ember shrink-0" />
                  <span>{company.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-4 text-ember shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand-deep p-6 sm:p-8 text-white shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember">
                <ShieldCheck className="size-4" />
                <span>7-Pillar Client Assurance</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/85">
                Every client at Damoder Immigration Services is paired with a dedicated consultant, receives complete eligibility points scoring, IELTS language coaching, and 100% process transparency.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Your Full Name *</Label>
                    <Input id="contact-name" required placeholder="e.g. Ananya Rao" className="rounded-lg" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone">Phone / WhatsApp *</Label>
                    <Input id="contact-phone" type="tel" required placeholder="+91 98765 43210" className="rounded-lg" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input id="contact-email" type="email" required placeholder="ananya@example.com" className="rounded-lg" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-target">Preferred Country *</Label>
                    <select
                      id="contact-target"
                      required
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="New Zealand">🇳🇿 New Zealand (Top Priority)</option>
                      <option value="Germany">🇩🇪 Germany (Opportunity Card / Blue Card)</option>
                      <option value="Canada">🇨🇦 Canada (Express Entry / PNP)</option>
                      <option value="Australia">🇦🇺 Australia (Subclass 189/190/491)</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom (Skilled Worker / Study)</option>
                      <option value="Europe">🇪🇺 Europe / Poland / Malta</option>
                      <option value="USA">🇺🇸 USA (EB-3 / H-1B)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-service">Service Required *</Label>
                  <select
                    id="contact-service"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option value="PR Visa">PR Visa (Permanent Settlement)</option>
                    <option value="Study Visa">Study Visa &amp; University Admissions</option>
                    <option value="Skilled Work">Skilled Work Permit &amp; Job Placement</option>
                    <option value="Visitor Visa">Visitor &amp; Tourist Visa</option>
                    <option value="Business / Investor">Business &amp; Investor Visa</option>
                    <option value="Concierge / Attestation">Concierge, Notary &amp; Loan Services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">How Can We Help You? *</Label>
                  <Textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your background, career goals, or specific visa questions..."
                    className="rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-ember hover:bg-ember/90 text-white font-semibold py-3 rounded-lg shadow-sm"
                >
                  {submitting ? "Sending Inquiry..." : "Submit Inquiry to Hyderabad Desk"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
