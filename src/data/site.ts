export const company = {
  name: "Damoder Immigration Services",
  legalName: "Damoder Immigration Services",
  shortName: "Damoder Immigration",
  tagline: "Trusted Visa & Immigration Consultants in Hyderabad, India",
  hq: "Hyderabad, Telangana, India",
  address: "6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India",
  googlePlusCode: "6F6F+74G, Tukkuguda, Hyderabad",
  phone: "+91 98765 43210",
  consultantPhone: "+91 98765 43211",
  conciergePhone: "+91 98765 43212",
  email: "info@damoderimmigration.com",
  admissions: "admissions@damoderimmigration.com",
  careers: "careers@damoderimmigration.com",
  support: "support@damoderimmigration.com",
};

export type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; hint?: string }[];
};

export const navItems: NavItem[] = [
  { label: "About Us", to: "/about-us" },
  {
    label: "Visa Services",
    children: [
      {
        label: "PR & Permanent Settlement Visas",
        to: "/candidate-portal",
        hint: "New Zealand, Canada, Australia & Germany PR pathways",
      },
      {
        label: "Study Visas & University Admissions",
        to: "/candidate-portal",
        hint: "Top universities in New Zealand, UK, Germany, Canada, Australia",
      },
      {
        label: "Skilled Work Permits & Job Placements",
        to: "/employer-services",
        hint: "Direct employer sponsorship & overseas career transitions",
      },
      {
        label: "Visitor, Tourist & Business Visas",
        to: "/visa-attestation-services",
        hint: "Fast-track consular visa filing & itinerary documentation",
      },
      {
        label: "Investor & Dependent Family Visas",
        to: "/visa-attestation-services",
        hint: "High-net-worth residency & spousal family sponsorship",
      },
      {
        label: "Concierge & Value-Added Services",
        to: "/visa-attestation-services",
        hint: "IELTS input, Notary, Translation, Bank Loans, Forex & SIM",
      },
    ],
  },
  {
    label: "Destinations",
    children: [
      {
        label: "🇳🇿 New Zealand (Top Priority)",
        to: "/destinations/schengen-europe",
        hint: "Skilled Migrant Category, Accredited Employer & Study PR",
      },
      {
        label: "🇩🇪 Germany & Europe (Priority)",
        to: "/destinations/schengen-europe",
        hint: "Opportunity Card (Chancenkarte), EU Blue Card & Poland",
      },
      {
        label: "🇨🇦 Canada, 🇦🇺 Australia & 🇬🇧 UK",
        to: "/destinations/usa-visa",
        hint: "Express Entry, Subclass 189/190, UK Skilled Worker",
      },
      {
        label: "🇺🇸 United States of America",
        to: "/destinations/usa-visa",
        hint: "EB-3 Permanent Residency, H-1B & J-1 Exchange",
      },
      {
        label: "🇸🇦 Gulf & Middle East",
        to: "/destinations/gulf-gcc",
        hint: "Saudi Arabia, UAE, Qatar corporate mobility",
      },
    ],
  },
  { label: "Overseas Careers", to: "/industries" },
  { label: "Contact Us", to: "/contact-us" },
];
