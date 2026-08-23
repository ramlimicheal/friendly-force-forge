export const company = {
  name: "Damoder Immigration Services",
  legalName: "Damoder Immigration Services Pvt. Ltd.",
  address: "6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India",
  phone: "+91 98765 43210",
  consultantPhone: "+91 98765 43211",
  employerPhone: "+91 98765 43210",
  candidatePhone: "+91 98765 43211",
  attestationPhone: "+91 98765 43213",
  conciergePhone: "+91 98765 43214",
  email: "info@damoderimmigration.com",
  compliance: "compliance@damoderimmigration.com",
  partnerships: "partnerships@damoderimmigration.com",
  jobs: "jobs@damoderimmigration.com",
  attestation: "attestation@damoderimmigration.com",
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
    label: "Services",
    children: [
      {
        label: "1. PR, Study & Skilled Migration",
        to: "/candidate-portal",
        hint: "New Zealand (#1 Priority), Germany, Canada, Australia & UK",
      },
      {
        label: "2. Employer Manpower & Trade Testing",
        to: "/employer-services",
        hint: "22–26 weeks 4-stage structured global mobilization SLA",
      },
      {
        label: "3. Document Legalisation & MEA Apostille",
        to: "/visa-attestation-services",
        hint: "State HRD, Hague Apostille & Embassy consular attestation",
      },
      {
        label: "4. Full-Suite Relocation Concierge",
        to: "/visa-attestation-services",
        hint: "Notary, Translations, Transcripts, Bank Loans & Forex",
      },
    ],
  },
  {
    label: "Destinations",
    children: [
      {
        label: "🇳🇿 New Zealand (Top Priority)",
        to: "/destinations/schengen-europe",
        hint: "Skilled Migrant SMC 6-Pt, AEWV & Green List Fast-Track",
      },
      {
        label: "🇩🇪 Germany & Europe (Priority)",
        to: "/destinations/schengen-europe",
        hint: "Opportunity Card, EU Blue Card, Poland & Malta",
      },
      {
        label: "🇨🇦 Canada, 🇦🇺 Australia & 🇬🇧 UK",
        to: "/destinations/usa-visa",
        hint: "Express Entry, GSM Subclass 189/190 & Skilled Worker",
      },
      {
        label: "Gulf / GCC Countries",
        to: "/destinations/gulf-gcc",
        hint: "Saudi Arabia, UAE, Qatar, Kuwait",
      },
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Visa Assessment", to: "/candidate-portal" },
  { label: "Contact Us", to: "/contact-us" },
];
