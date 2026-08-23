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
    region?: "europe" | "gulf" | "usa" | "nz" | "hub";
    side?: "right" | "left";
    dx?: number;
    dy?: number;
  };
};

const markers: MapMarker[] = [
  // New Zealand (Flagship Priority)
  {
    lat: -40.9006,
    lng: 174.886,
    size: 0.85,
    overlay: { countryCode: "nz", label: "New Zealand (Top Priority)", region: "nz", side: "right", dy: 0 },
  },

  // Europe Corridor
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.75,
    overlay: { countryCode: "de", label: "Germany (Priority)", region: "europe", side: "left", dy: -2.5 },
  },
  {
    lat: 52.2297,
    lng: 21.0122,
    size: 0.7,
    overlay: { countryCode: "pl", label: "Poland & EU", region: "europe", side: "right", dy: -2.5 },
  },

  // Canada & UK
  {
    lat: 56.1304,
    lng: -106.3468,
    size: 0.75,
    overlay: { countryCode: "ca", label: "Canada", region: "usa", side: "left", dy: 0 },
  },
  {
    lat: 55.3781,
    lng: -3.436,
    size: 0.7,
    overlay: { countryCode: "gb", label: "United Kingdom", region: "europe", side: "left", dy: -2 },
  },

  // Australia
  {
    lat: -25.2744,
    lng: 133.7751,
    size: 0.75,
    overlay: { countryCode: "au", label: "Australia", region: "nz", side: "left", dy: 0 },
  },

  // Hyderabad HQ Hub
  {
    lat: 17.2403,
    lng: 78.4983,
    size: 0.95,
    overlay: { countryCode: "in", label: "Hyderabad HQ (Damoder)", region: "hub", side: "right", dy: 0 },
  },
];

const corridors = [
  {
    region: "🇳🇿 New Zealand (Flagship)",
    key: "nz",
    countries: "Skilled Migrant (SMC) · AEWV · Green List · Study PR",
    to: "/destinations/schengen-europe",
  },
  {
    region: "🇩🇪 Germany & Europe",
    key: "europe",
    countries: "Opportunity Card · EU Blue Card · Poland · Malta",
    to: "/destinations/schengen-europe",
  },
  {
    region: "🇨🇦 Canada, 🇦🇺 Australia & 🇬🇧 UK",
    key: "usa",
    countries: "Express Entry · Subclass 189/190 · UK Skilled Worker",
    to: "/destinations/usa-visa",
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
    badge: "🇳🇿 Flagship Priority",
    title: "Auckland & Wellington",
    description: "Skilled Migrant Category (SMC 6-Point), Accredited Employer Work Visa (AEWV), Green List Tier 1/2 Fast-Track & Study-to-PR.",
    rating: "5.0",
    reviewCount: "4,800+",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/schengen-europe",
  },
  {
    country: "Germany",
    badge: "🇩🇪 Europe Priority",
    title: "Berlin, Frankfurt & Munich",
    description: "Opportunity Card (Chancenkarte Jobseeker), EU Blue Card, Skilled Immigration Act & Healthcare / IT Fast Settlement.",
    rating: "4.9",
    reviewCount: "3,900+",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/schengen-europe",
  },
  {
    country: "Canada",
    badge: "🇨🇦 Express Entry & PNP",
    title: "Toronto & Vancouver",
    description: "Federal Skilled Worker (FSWP), Provincial Nominee Programs (OINP/BC PNP), Study Visas with PGWP & Family Sponsorship.",
    rating: "4.9",
    reviewCount: "5,200+",
    image: "https://images.unsplash.com/photo-1517935703635-2719074b1793?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "Australia",
    badge: "🇦🇺 General Skilled Migration",
    title: "Sydney & Melbourne",
    description: "Subclass 189 (Independent), Subclass 190 (State Nominated), Subclass 491 (Regional) & University Admissions.",
    rating: "4.9",
    reviewCount: "3,600+",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "United Kingdom",
    badge: "🇬🇧 UK Skilled Worker",
    title: "London & Manchester",
    description: "UK Skilled Worker Visa, Health & Care Worker Sponsorship, Student Visa with Graduate Route & Global Talent.",
    rating: "4.9",
    reviewCount: "2,950+",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "Poland & Schengen",
    badge: "🇪🇺 European Union",
    title: "Warsaw & Schengen Zone",
    description: "Type-A Work Permits, Malta Single Permit, Croatian MUP clearances & Karta Pobytu Temporary Residence Cards.",
    rating: "4.8",
    reviewCount: "3,100+",
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
                Work Permit &amp; Mobilization Pathways
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-deep sm:text-4xl lg:text-[44px]">
                Work, Study &amp; Settle in Top Global Nations
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                We make sure your visa process is seamless and stress-free for New Zealand, Germany, Canada,
                Australia, the United Kingdom, and Europe.
              </p>
            </div>

            <Link
              to="/destinations/schengen-europe"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-muted-foreground transition-colors hover:text-brand"
            >
              <span>View all destinations</span>
              <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </FadeIn>

        {/* TIER 1: Interactive Dotted World Map with Radar Beacons */}
        <FadeIn direction="up" distance={24} duration={0.6} delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-white p-4 sm:p-8 shadow-sm">
            <DottedMap
              width={150}
              height={75}
              mapSamples={4400}
              dotRadius={0.25}
              markers={markers}
              className="text-brand/60"
              markerColor="transparent"
              renderMarkerOverlay={({ marker, x, y, r, index }) => {
                const { countryCode, label, side = "right", dx, dy = 0, region } = marker.overlay;
                const isHub = region === "hub";
                const isNZ = region === "nz";
                const isHovered = activeRegion && activeRegion === region;

                return (
                  <g
                    key={`map-pin-${countryCode}-${index}`}
                    className="transition-transform duration-300"
                    style={{
                      transform: isHovered ? "scale(1.2)" : "scale(1)",
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  >
                    {/* Animated Radar Pulse Rings */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHub ? r * 2.6 : isNZ ? r * 2.2 : r * 1.8}
                      className={
                        isHub
                          ? "fill-ember/25 stroke-ember/80 animate-ping opacity-60"
                          : isNZ
                          ? "fill-emerald-500/25 stroke-emerald-500/80 animate-ping opacity-70"
                          : "fill-brand/20 stroke-brand/60 animate-ping opacity-50"
                      }
                      style={{ animationDuration: isHub ? "2s" : "3s" }}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={isHub ? r * 1.8 : isNZ ? r * 1.5 : r * 1.2}
                      className={isHub ? "fill-ember/40" : isNZ ? "fill-emerald-500/30" : "fill-brand/30"}
                    />

                    {/* Central Core Pin */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHub ? r * 1.1 : r * 0.8}
                      className={isHub ? "fill-ember stroke-white stroke-2" : isNZ ? "fill-emerald-600 stroke-white stroke-2" : "fill-brand-deep stroke-white stroke-2"}
                    />

                    {/* Crisp Embedded Text Badge */}
                    <g transform={`translate(${side === "right" ? x + (dx ?? 8) : x - (dx ?? 8)}, ${y + dy})`}>
                      <rect
                        x={side === "right" ? 0 : -((label.length * 6) + 12)}
                        y={-9}
                        width={(label.length * 6) + 12}
                        height={18}
                        rx={4}
                        className={
                          isHub
                            ? "fill-[#1A2C53] stroke-ember stroke-1.5 shadow-md"
                            : isNZ
                            ? "fill-emerald-900 stroke-emerald-400 stroke-1 shadow-md"
                            : "fill-white/95 stroke-border stroke-1 shadow-sm"
                        }
                      />
                      <text
                        x={side === "right" ? 6 : -((label.length * 6) + 6)}
                        y={3.5}
                        className={`text-[9.5px] font-bold font-sans ${
                          isHub ? "fill-white" : isNZ ? "fill-emerald-200" : "fill-brand-deep"
                        }`}
                      >
                        {label}
                      </text>
                    </g>
                  </g>
                );
              }}
            />

            {/* Region Filtering Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
                  Highlight Corridors:
                </span>
                {corridors.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onMouseEnter={() => setActiveRegion(c.key)}
                    onMouseLeave={() => setActiveRegion(null)}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-all ${
                      activeRegion === c.key
                        ? "border-ember bg-ember text-white shadow-xs"
                        : "border-border bg-paper text-brand-deep hover:border-brand/40"
                    }`}
                  >
                    {c.region}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-ember animate-pulse" />
                  Hyderabad HQ
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  New Zealand (Priority)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-brand-deep" />
                  Global Consulates
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* TIER 2: 6 Destination Dossier Cards */}
        <div className="mt-12">
          <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinationCards.map((card) => (
              <StaggerItem key={card.country}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={card.image}
                      alt={`${card.country} - ${card.title}`}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3 left-3 rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-brand-deep shadow-xs">
                      {card.badge}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-display text-lg font-bold leading-snug">{card.title}</h3>
                      <p className="text-xs font-semibold text-white/90">{card.country}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <span>{card.rating}</span>
                        <span className="text-[11px] text-muted-foreground font-normal">
                          ({card.reviewCount})
                        </span>
                      </div>

                      <Link
                        to={card.to}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-ember transition-colors"
                      >
                        <span>View Pathways</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* TIER 3: Direct Employer Sponsorship Banner with Aerobridge Photo */}
        <FadeIn direction="up" distance={20} duration={0.5} delay={0.2}>
          <div className="mt-14 overflow-hidden rounded-xl border border-brand/20 bg-brand-deep shadow-xl text-white">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-ember">
                    <ShieldCheck className="size-3.5 text-ember" />
                    Transparent &amp; Direct Visa Processing
                  </div>

                  <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    Direct Employer Sponsorship with Zero Middleman Fees
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
                    At Damoder Immigration Services, we eliminate third-party sub-agents and hidden charges. 
                    From profile assessment to visa submission, you get direct, transparent immigration counseling 
                    from our Hyderabad headquarters.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-white/95">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-ember" />
                      <span>Dedicated Visa Consultant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-ember" />
                      <span>100% Process Transparency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-ember" />
                      <span>IELTS Inputs &amp; Study Prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-ember" />
                      <span>Full Concierge &amp; Loan Support</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ember/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                  >
                    Book Consultation in Hyderabad
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/candidate-portal"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Check Eligibility
                  </Link>
                </div>
              </div>

              {/* Real Photograph of Aerobridge Boarding */}
              <div className="relative min-h-[280px] lg:min-h-full lg:col-span-5 overflow-hidden">
                <img
                  src={directSponsorshipImg}
                  alt="Damoder Immigration candidates boarding international flight"
                  className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-deep/90 lg:via-transparent lg:to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/60 backdrop-blur-md p-3 border border-white/15 text-xs text-white">
                  <span className="font-bold text-ember block">Verified Mobilisation &amp; Departure</span>
                  <span className="text-white/80 text-[11px]">Direct embassy visa endorsements &amp; international flight assistance from Hyderabad.</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
