import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark-white.png";
import { company } from "@/data/site";

const quickLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Employer Services (22-26 Wk SLA)", to: "/employer-services" },
  { label: "PR & Study Visa Assessment", to: "/candidate-portal" },
  { label: "MEA Apostille & Legalisation", to: "/visa-attestation-services" },
  { label: "Relocation Concierge Services", to: "/visa-attestation-services" },
  { label: "Overseas Careers (8 Sectors)", to: "/industries" },
  { label: "Contact Us (Hyderabad HQ)", to: "/contact-us" },
];

const destinationLinks = [
  { label: "🇳🇿 New Zealand (Top Priority)", to: "/destinations/schengen-europe" },
  { label: "🇩🇪 Germany Chancenkarte & Blue Card", to: "/destinations/schengen-europe" },
  { label: "🇨🇦 Canada Express Entry & PNP", to: "/destinations/usa-visa" },
  { label: "🇦🇺 Australia GSM 189/190", to: "/destinations/usa-visa" },
  { label: "🇬🇧 UK Skilled Worker & ILR", to: "/destinations/usa-visa" },
  { label: "🇵🇱 Poland Type-A Work Permit", to: "/destinations/schengen-europe" },
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
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-md ring-1 ring-white/20">
                <img
                  src={logoMark}
                  alt="Damoder Immigration Services Logo"
                  className="size-full object-contain"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold uppercase leading-none text-white">Damoder</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ember">Immigration Services</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Leading overseas immigration and manpower consultancy based in Hyderabad, India — mobilizing skilled Indian talent across New Zealand, Germany, Europe, Canada, Australia, and the Americas with complete transparency.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                Headquarters: Hyderabad, Telangana
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                ISO 9001:2015 Quality Standards
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                100% Process Transparency
              </li>
            </ul>
          </div>

          <div>
            <ColumnHeading>Core Services</ColumnHeading>
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
            <ColumnHeading>Priority Destinations</ColumnHeading>
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
            <ColumnHeading>Central Desks</ColumnHeading>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/candidate-portal" className="transition-colors hover:text-ember">
                  PR &amp; Study Visa Evaluation
                </Link>
              </li>
              <li>
                <Link to="/employer-services" className="transition-colors hover:text-ember">
                  Employer Manpower Sourcing Desk
                </Link>
              </li>
              <li>
                <Link to="/visa-attestation-services" className="transition-colors hover:text-ember">
                  MEA Apostille &amp; Notary Desk
                </Link>
              </li>
              <li>
                <Link to="/visa-attestation-services" className="transition-colors hover:text-ember">
                  Education Loans &amp; Forex Desk
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="transition-colors hover:text-ember">
                  Grievance &amp; Compliance Officer
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-md border border-white/15 bg-white/[0.06] p-3 text-xs text-white/80">
              <span className="font-bold text-ember">📍 Registered Office:</span>
              <br />
              {company.address}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-6 text-xs text-white/60 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Damoder Immigration Services. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-white/70">
            <span>Powered by</span>
            <a
              href="https://theao.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-ember transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-ember"
            >
              The AO
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about-us" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/about-us" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link to="/contact-us" className="hover:text-white transition-colors">Hyderabad Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
