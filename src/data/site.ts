export const company = {
  name: "Damoder Immigration Services",
  legalName: "Damoder Immigration Services Pvt. Ltd.",
  address: "6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India",
  mapsUrl:
    "https://www.google.com/maps/place/DAMODER+IMMIGRATION+SERVICES/@17.2106556,78.4727627,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbbbaffe9a0d21:0x519a81456d60a73d!8m2!3d17.2106556!4d78.4727627!16s%2Fg%2F11z4xfl3lw",
  phone: "+91 8639516954",
  consultantPhone: "+91 950205194",
  employerPhone: "+91 8639516954",
  candidatePhone: "+91 950205194",
  attestationPhone: "+91 8639516954",
  conciergePhone: "+91 950205194",
  email: "mail2damoder@gmail.com",
  compliance: "mail2damoder@gmail.com",
  partnerships: "mail2damoder@gmail.com",
  jobs: "mail2damoder@gmail.com",
  attestation: "mail2damoder@gmail.com",
  admissions: "mail2damoder@gmail.com",
  careers: "mail2damoder@gmail.com",
  support: "mail2damoder@gmail.com",
};

export type NavChild = {
  label: string;
  to: string;
  hint?: string;
  flags?: string[];
};

export type NavItem = {
  label: string;
  to?: string;
  children?: NavChild[];
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
        label: "New Zealand (Top Priority)",
        to: "/destinations/schengen-europe",
        hint: "Skilled Migrant SMC 6-Pt, AEWV & Green List Fast-Track",
        flags: ["nz"],
      },
      {
        label: "Germany & Schengen Europe",
        to: "/destinations/schengen-europe",
        hint: "Opportunity Card, EU Blue Card, Poland & Malta",
        flags: ["de", "pl", "mt"],
      },
      {
        label: "Canada, Australia & UK",
        to: "/destinations/usa-visa",
        hint: "Express Entry, GSM Subclass 189/190 & Skilled Worker",
        flags: ["ca", "au", "gb"],
      },
      {
        label: "United States",
        to: "/destinations/usa-visa",
        hint: "EB-3 Permanent Residency & H-1B Specialty Occupations",
        flags: ["us"],
      },
      {
        label: "Gulf / GCC Member States",
        to: "/destinations/gulf-gcc",
        hint: "Saudi Arabia, UAE, Qatar, Kuwait & Oman",
        flags: ["sa", "ae", "qa"],
      },
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Visa Assessment", to: "/candidate-portal" },
  { label: "Contact Us", to: "/contact-us" },
];
