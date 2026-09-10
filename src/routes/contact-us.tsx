import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Clock,
  Briefcase,
} from "lucide-react";

import { PageHero, Section, CtaBanner } from "@/components/page-shell";
import { company } from "@/data/site";
import {
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
          "Contact Damoder Immigration Services directly. Department routing for B2B employer mandates, job seekers, MEA apostille attestation, and statutory grievance reporting.",
      },
      { property: "og:title", content: "Contact Damoder Immigration Services | Hyderabad Headquarters" },
      {
        property: "og:description",
        content:
          "Reach the right department directly — employer recruitment desk, candidate registration, document attestation, and MEA compliance.",
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
            "name": "Damoder Immigration Services & Overseas Manpower Consultancy",
            "telephone": "+91-8639516954",
            "email": "mail2damoder@gmail.com",
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
    icon: Briefcase,
    title: "Employer Partnerships & Bulk Mandates",
    badge: "B2B Clients",
    phone: company.employerPhone,
    email: company.partnerships,
    desc: "Job orders, technical trade test scheduling, client interview delegation hosting, and SLA contracts.",
    timing: "Mon – Sat: 9:00 AM – 7:00 PM IST",
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
    city: "Hyderabad (Headquarters)",
    state: "Telangana, India",
    address: "Damoder Immigration Services & Overseas Manpower Consultancy, 6F6F+74G, Tukkuguda Business District, Hyderabad – 501359",
    contact: "+91 8639516954 / +91 950205194 / mail2damoder@gmail.com",
    role: "Registered MEA Headquarters & Central Executive Operations",
  },
  {
    city: "Regional Mobilisation Centers",
    state: "South & North India Network",
    address: "Authorized Trade Testing & Skill Auditing Workshop Alliances in Madurai, Trichy, Kochi, Hyderabad, and New Delhi",
    contact: "mail2damoder@gmail.com",
    role: "Candidate Screening, Welding Rigs, MEP Labs & Trade Testing Yards",
  },
];

function ContactPage() {
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
        <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2">
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

      {/* 3. Office Showcase */}
      <Section
        tone="muted"
        eyebrow="Our locations"
        title="Central operations and mobilisation centres"
        intro="Reach our registered headquarters or regional mobilisation network directly."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </Section>

      {/* 4. Global CTA Banner */}
      <CtaBanner />
    </>
  );
}
