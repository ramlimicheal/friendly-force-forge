import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import logoMark from "@/assets/logo-mark-white.png";
import { company } from "@/data/site";

const quickLinks = [
  { label: "About Damoder Immigration", to: "/about-us" },
  { label: "PR & Settlement Visas", to: "/candidate-portal" },
  { label: "Study Visas & Admissions", to: "/candidate-portal" },
  { label: "Skilled Work Permits", to: "/employer-services" },
  { label: "Concierge & Attestation", to: "/visa-attestation-services" },
  { label: "Overseas Careers Board", to: "/industries" },
  { label: "Contact Us (Hyderabad)", to: "/contact-us" },
];

const destinationLinks = [
  { label: "🇳🇿 New Zealand (Top Priority)", to: "/destinations/schengen-europe" },
  { label: "🇩🇪 Germany (Chancenkarte / Blue Card)", to: "/destinations/schengen-europe" },
  { label: "🇨🇦 Canada Express Entry & PNP", to: "/destinations/usa-visa" },
  { label: "🇦🇺 Australia General Skilled Migration", to: "/destinations/usa-visa" },
  { label: "🇬🇧 United Kingdom Skilled Worker", to: "/destinations/usa-visa" },
  { label: "🇪🇺 Schengen Europe & Poland", to: "/destinations/schengen-europe" },
  { label: "🇺🇸 USA Employment Visas (EB-3)", to: "/destinations/usa-visa" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white">
      <span className="size-2 rounded-full bg-ember" />
      {children}
    </h3>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-7xl rounded-lg bg-brand-deep text-white shadow-xl">
        <div className="grid gap-10 px-8 py-16 md:grid-cols-2 md:px-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-md ring-1 ring-white/20">
                <img
                  src={logoMark}
                  alt="Damoder Immigration Services Logo"
                  className="size-full object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold">Damoder Immigration</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              A Complete Roundup of Visa &amp; Immigration Services at Damoder Immigration Services, Hyderabad, India.
              We make sure your visa process is seamless and stress-free to study, work, or settle abroad.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-ember shrink-0 mt-0.5" />
                <span>6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-ember shrink-0" />
                <span>{company.phone} / {company.consultantPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-ember shrink-0" />
                <span>{company.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <ColumnHeading>Visa &amp; Service Suite</ColumnHeading>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-ember">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Key Destinations</ColumnHeading>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {destinationLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-ember">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>7-Pillar Client Promise</ColumnHeading>
            <ul className="mt-4 space-y-2 text-xs text-white/80 leading-relaxed">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Dedicated Visa Consultant</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Visa-Specific Counseling</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Relevant Eligibility Check</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Timely Documentation Filing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>IELTS Inputs &amp; Language Coaching</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>100% Process Transparency</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                <span>Job Market Tips &amp; Guidance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="px-8 py-6 text-center text-sm font-medium text-white/70 md:px-12">
            © 2026 Damoder Immigration Services. All Rights Reserved. HQ – Hyderabad, Telangana, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
