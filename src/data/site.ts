export const company = {
  name: "Dhamodaran Immigration",
  legalName: "Dhamodaran Immigration & Overseas Manpower Consultancy",
  employerPhone: "+91 98765 43210",
  candidatePhone: "+91 98765 43211",
  attestationPhone: "+91 98765 43213",
  email: "info@dhamodaranimmigration.com",
  compliance: "compliance@dhamodaranimmigration.com",
  partnerships: "partnerships@dhamodaranimmigration.com",
  jobs: "jobs@dhamodaranimmigration.com",
  attestation: "attestation@dhamodaranimmigration.com",
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
        label: "Employer Manpower & Trade Testing",
        to: "/employer-services",
        hint: "Turnkey hiring, technical trade testing & mobilization",
      },
      {
        label: "Visa Stamping & Work Permits",
        to: "/visa-attestation-services",
        hint: "Fast-track legal intake & embassy processing",
      },
      {
        label: "Document Attestation & MEA Apostille",
        to: "/visa-attestation-services",
        hint: "HRD, MEA, Apostille & Embassy legalisation",
      },
      {
        label: "GAMCA Medical & Emigration Clearance",
        to: "/destinations/gulf-gcc",
        hint: "Full eMigrate and pre-departure compliance",
      },
    ],
  },
  {
    label: "Destinations",
    children: [
      {
        label: "Schengen & Europe",
        to: "/destinations/schengen-europe",
        hint: "Poland, Germany, Malta, Croatia, Romania",
      },
      {
        label: "Gulf / GCC Countries",
        to: "/destinations/gulf-gcc",
        hint: "Saudi Arabia, UAE, Qatar, Kuwait, Oman",
      },
      {
        label: "United States",
        to: "/destinations/usa-visa",
        hint: "EB-3, H-1B, J-1, L-1 employer pathways",
      },
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Contact Us", to: "/contact-us" },
];
