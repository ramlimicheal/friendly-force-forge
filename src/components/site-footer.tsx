import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark-white.png";
import { company } from "@/data/site";

const quickLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "For Employers", to: "/employer-services" },
  { label: "Trade Testing Labs", to: "/about-us" },
  { label: "Attestation Services", to: "/visa-attestation-services" },
  { label: "Job Portal", to: "/candidate-portal" },
  { label: "Contact Us", to: "/contact-us" },
];

const destinationLinks = [
  { label: "Poland Work Permit", to: "/destinations/schengen-europe" },
  { label: "Germany Chancenkarte", to: "/destinations/schengen-europe" },
  { label: "Malta Single Permit", to: "/destinations/schengen-europe" },
  { label: "Saudi Arabia Vision 2030", to: "/destinations/gulf-gcc" },
  { label: "UAE Jobs", to: "/destinations/gulf-gcc" },
  { label: "USA EB-3", to: "/destinations/usa-visa" },
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
                  alt="Damoder Immigration Logo"
                  className="size-full object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold">Damoder Immigration</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Government-licensed overseas manpower consultancy mobilising trade-tested Indian
              talent to Schengen Europe, the Gulf GCC and the United States.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                MEA Registration No. B-XXXX/XXX/XXXX
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                ISO 9001:2015 Certified Processes
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                eMigrate Verified Recruiting Agent
              </li>
            </ul>
          </div>

          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
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
            <ColumnHeading>Destination Guides</ColumnHeading>
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
            <ColumnHeading>Legal &amp; Candidate Care</ColumnHeading>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/candidate-portal" className="transition-colors hover:text-ember">
                  Anti-Fraud Advisory
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="transition-colors hover:text-ember">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <a
                  href="https://emigrate.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-ember"
                >
                  MEA eMigrate Official Portal
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.compliance}`}
                  className="transition-colors hover:text-ember"
                >
                  {company.compliance}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="px-8 py-6 text-center text-sm font-medium text-white/70 md:px-12">
            © 2026 Damoder Immigration &amp; Overseas Manpower Consultancy. All Rights Reserved. Regulated under Emigration Act 1983.
          </p>
        </div>
      </div>
    </footer>
  );
}
