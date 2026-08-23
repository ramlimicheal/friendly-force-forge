import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, ShieldCheck } from "lucide-react";

import { DottedMap, type Marker } from "@/components/ui/dotted-map";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-primitives";
import directSponsorshipImg from "@/assets/direct-sponsorship-banner.jpg";

type MapMarker = Marker & {
  overlay: {
    countryCode: string;
    label: string;
    region?: "europe" | "gulf" | "usa" | "hub";
    /** label placement relative to the pin */
    side?: "right" | "left";
    dx?: number;
    dy?: number;
  };
};

const markers: MapMarker[] = [
  // New Zealand (Top Priority)
  {
    lat: -40.9006,
    lng: 174.886,
    size: 0.85,
    overlay: { countryCode: "nz", label: "New Zealand (Top Priority)", region: "europe", side: "right", dy: 0 },
  },

  // Germany (Top Priority in Europe)
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.8,
    overlay: { countryCode: "de", label: "Germany (Europe Priority)", region: "europe", side: "left", dy: -2.5 },
  },

  // Canada
  {
    lat: 56.1304,
    lng: -106.3468,
    size: 0.75,
    overlay: { countryCode: "ca", label: "Canada", region: "usa", side: "left", dy: -2.0 },
  },

  // Australia
  {
    lat: -25.2744,
    lng: 133.7751,
    size: 0.75,
    overlay: { countryCode: "au", label: "Australia", region: "usa", side: "right", dy: 0 },
  },

  // United Kingdom
  {
    lat: 55.3781,
    lng: -3.436,
    size: 0.75,
    overlay: { countryCode: "gb", label: "UK", region: "europe", side: "left", dy: -2.0 },
  },

  // Poland
  {
    lat: 52.2297,
    lng: 21.0122,
    size: 0.7,
    overlay: { countryCode: "pl", label: "Poland", region: "europe", side: "right", dy: -2.5 },
  },

  // USA
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.7,
    overlay: { countryCode: "us", label: "USA", region: "usa", side: "left", dy: 0 },
  },

  // India - Hyderabad HQ Hub
  {
    lat: 17.385,
    lng: 78.4867,
    size: 0.85,
    overlay: { countryCode: "in", label: "Hyderabad (HQ)", region: "hub", side: "right", dy: 0 },
  },
];

const corridors = [
  {
    region: "New Zealand & Europe",
    key: "europe",
    countries: "New Zealand · Germany · Poland · Malta",
    to: "/destinations/schengen-europe",
  },
  {
    region: "Canada & Australia",
    key: "usa",
    countries: "Canada (Express Entry) · Australia (GSM) · UK",
    to: "/destinations/usa-visa",
  },
  {
    region: "Gulf / GCC",
    key: "gulf",
    countries: "Saudi Arabia · UAE · Qatar · Kuwait",
    to: "/destinations/gulf-gcc",
  },
];

interface DestinationCard {
  country: string;
  badge: string;
  title: string;
  description: string;
  rating: string;
  reviewCount: string;
  image: string;
  to: string;
}

const destinationCards: DestinationCard[] = [
  {
    country: "New Zealand",
    badge: "Top Priority Destination",
    title: "Auckland & Wellington",
    description: "Skilled Migrant Category (SMC 6-Point), Green List Tier 1 Straight to Residence & Accredited Employer Work Visas.",
    rating: "5.0",
    reviewCount: "2,400+",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/schengen-europe",
  },
  {
    country: "Germany",
    badge: "Priority European Corridor",
    title: "Berlin, Frankfurt & Munich",
    description: "Opportunity Card (Chancenkarte), EU Blue Card & Skilled Immigration Act for Engineers, IT & Healthcare.",
    rating: "4.9",
    reviewCount: "1,850+",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/schengen-europe",
  },
  {
    country: "Canada",
    badge: "Direct PR & PNP",
    title: "Toronto, Vancouver & Calgary",
    description: "Express Entry (FSWP/CEC), Provincial Nominee Programs (OINP, BC PNP, AAIP) & Study-to-PR Pathways.",
    rating: "4.9",
    reviewCount: "3,100+",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "Australia",
    badge: "General Skilled Migration",
    title: "Sydney, Melbourne & Brisbane",
    description: "General Skilled Migration (Subclass 189/190/491), Skills Assessment & Universal Medicare Healthcare.",
    rating: "4.9",
    reviewCount: "2,200+",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "United Kingdom",
    badge: "Skilled Worker Route",
    title: "London, Manchester & Birmingham",
    description: "UK Skilled Worker Visa, Health & Care Worker Sponsorship & 5-Year Pathway to Indefinite Leave to Remain (ILR).",
    rating: "4.9",
    reviewCount: "1,950+",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "Poland & Europe",
    badge: "European Work Permit",
    title: "Warsaw, Poznań & Malta",
    description: "National Type-A Work Permits, Karta Pobytu Temporary Residence & Single Permits with Schengen Mobility.",
    rating: "4.8",
    reviewCount: "3,200+",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/schengen-europe",
  },
];

export function DestinationsWhereWeDeploy() {
  const id = React.useId();
  const [activeRegion, setActiveRegion] = React.useState<string | null>(null);

  return (
    <section className="bg-background py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Unified Section Header */}
        <FadeIn direction="up" distance={20} duration={0.5}>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-ember">
                Global Mobilization Corridors
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-deep sm:text-4xl lg:text-[44px]">
                Destinations Where We Deploy
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Verified work permits, Permanent Residency, and study pathways across New Zealand, Germany,
                Europe, Canada, Australia, the United Kingdom, and the Americas — documented with total compliance from Hyderabad.
              </p>
            </div>

            <Link
              to="/destinations/schengen-europe"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-muted-foreground transition-colors hover:text-brand"
            >
              <span>View all destinations</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* Corridor Quick-Selector Pills */}
        <FadeIn direction="up" distance={15} duration={0.5} delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActiveRegion(null)}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeRegion === null
                  ? "bg-brand text-white shadow-xs"
                  : "bg-paper border border-border text-brand-deep hover:border-brand/40"
              }`}
            >
              All Destinations
            </button>
            {corridors.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveRegion(activeRegion === c.key ? null : c.key)}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeRegion === c.key
                    ? "bg-brand text-white shadow-xs"
                    : "bg-paper border border-border text-brand-deep hover:border-brand/40"
                }`}
              >
                {c.region}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* World Map Container */}
        <FadeIn direction="up" distance={25} duration={0.6} delay={0.15}>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-xs">
            {/* Map Canvas */}
            <div className="relative w-full overflow-hidden bg-brand-deep/[0.02] p-4 sm:p-8">
              <DottedMap
                width={1200}
                height={520}
                markers={markers}
                dotColor="var(--color-border)"
                dotRadius={0.35}
                className="w-full h-auto max-h-[520px] text-brand-deep"
              />

              {/* Map Overlay Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-lg border border-border/80 bg-background/90 px-3.5 py-2 backdrop-blur-md shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-brand-deep">
                    Live Recruitment &amp; Visa Network
                  </span>
                </div>
              </div>
            </div>

            {/* Region Details Bar below map */}
            <div className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 bg-paper">
              {corridors.map((c) => (
                <Link
                  key={c.key}
                  to={c.to}
                  className="group flex flex-col justify-between p-5 transition-colors hover:bg-card"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider uppercase text-ember">
                        {c.region}
                      </span>
                      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                    </div>
                    <p className="mt-1 font-display text-base font-semibold text-brand-deep">
                      {c.countries}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-medium text-brand">Explore corridor &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 6 Destination Cards Grid */}
        <div className="mt-12 sm:mt-16">
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinationCards.map((card) => (
              <StaggerItem key={card.country}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md">
                  {/* Photo with Country Tag */}
                  <div className="relative h-48 w-full overflow-hidden sm:h-52 bg-slate-100">
                    <img
                      src={card.image}
                      alt={`${card.country} destination`}
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-brand-deep/20 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-deep backdrop-blur-md shadow-xs border border-white/40">
                      {card.badge}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <h3 className="font-display text-lg font-bold text-white drop-shadow-xs">
                        {card.country}
                      </h3>
                      <div className="flex items-center gap-1 rounded-md bg-black/40 px-2 py-0.5 text-xs backdrop-blur-xs">
                        <Star className="size-3 fill-amber-400 text-amber-400" />
                        <span className="font-bold">{card.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h4 className="font-display text-base font-semibold text-brand-deep">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border pt-4">
                      <Link
                        to={card.to}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-ember"
                      >
                        <span>View Visa Pathways</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Direct Sponsorship Banner */}
        <FadeIn direction="up" distance={20} duration={0.5} delay={0.2} className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-lg border border-border shadow-md">
            <img
              src={directSponsorshipImg}
              alt="Direct Employer Sponsorship Banner"
              className="h-48 w-full object-cover object-center sm:h-56 lg:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/60 to-transparent flex items-center p-6 sm:p-10 lg:p-12">
              <div className="max-w-xl text-white">
                <span className="rounded-md bg-ember px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Direct Employer Sponsorship
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold leading-tight">
                  Work Directly with Verified Overseas Employers
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Every application is backed by verified legal channels, structured counseling, and complete documentation discipline.
                </p>
                <div className="mt-5">
                  <Link
                    to="/candidate-portal"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-brand-deep shadow-sm transition-all hover:bg-slate-100 hover:scale-105"
                  >
                    Check Visa Eligibility & Pathways
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
