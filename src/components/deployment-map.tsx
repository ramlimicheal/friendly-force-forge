import * as React from "react";
import { MapPin, Star, ShieldCheck } from "lucide-react";

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
  // 1. New Zealand (Top Priority)
  {
    lat: -40.9006,
    lng: 174.886,
    size: 0.85,
    overlay: { countryCode: "nz", label: "New Zealand", region: "europe", side: "right", dy: 1.0 },
  },

  // 2. Germany (Top Priority Europe)
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.75,
    overlay: { countryCode: "de", label: "Germany", region: "europe", side: "left", dy: -2.5 },
  },

  // 3. Canada
  {
    lat: 56.1304,
    lng: -106.3468,
    size: 0.75,
    overlay: { countryCode: "ca", label: "Canada", region: "usa", side: "left", dy: -2.0 },
  },

  // 4. Australia
  {
    lat: -25.2744,
    lng: 133.7751,
    size: 0.75,
    overlay: { countryCode: "au", label: "Australia", region: "usa", side: "right", dy: 0 },
  },

  // 5. United Kingdom
  {
    lat: 55.3781,
    lng: -3.436,
    size: 0.75,
    overlay: { countryCode: "gb", label: "UK", region: "europe", side: "left", dy: -2.0 },
  },

  // 6. Poland & Central Europe
  {
    lat: 52.2297,
    lng: 21.0122,
    size: 0.7,
    overlay: { countryCode: "pl", label: "Poland", region: "europe", side: "right", dy: -2.5 },
  },

  // 7. United States
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.7,
    overlay: { countryCode: "us", label: "USA", region: "usa", side: "left", dy: 0 },
  },

  // 8. India Mobilization Hub (Hyderabad HQ)
  {
    lat: 17.385,
    lng: 78.4867,
    size: 0.9,
    overlay: { countryCode: "in", label: "Hyderabad (HQ)", region: "hub", side: "right", dy: 0 },
  },
];

const corridors = [
  {
    region: "New Zealand & Europe",
    key: "europe",
    countries: "New Zealand (Priority #1) · Germany · Poland · Malta",
    to: "/destinations/schengen-europe",
  },
  {
    region: "Canada & Australia",
    key: "usa",
    countries: "Canada (Express Entry) · Australia (GSM 189/190) · UK",
    to: "/destinations/usa-visa",
  },
  {
    region: "Gulf / GCC Corridors",
    key: "gulf",
    countries: "Saudi Arabia · UAE · Qatar · Kuwait · Oman",
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
    badge: "Direct PR & PNP Stream",
    title: "Toronto, Vancouver & Calgary",
    description: "Express Entry (FSWP/CEC), Provincial Nominee Programs (OINP, BC PNP, AAIP) & Study-to-PR Pathways.",
    rating: "4.9",
    reviewCount: "3,100+",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "Australia",
    badge: "General Skilled Migration (GSM)",
    title: "Sydney, Melbourne & Brisbane",
    description: "General Skilled Migration (Subclass 189/190/491), Skills Assessment & Universal Medicare Healthcare.",
    rating: "4.9",
    reviewCount: "2,200+",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    to: "/destinations/usa-visa",
  },
  {
    country: "United Kingdom",
    badge: "UK Skilled Worker & ILR",
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
                const isHub = countryCode === "in";
                const isHighlighted = !activeRegion || activeRegion === region || isHub;
                const href = `https://flagcdn.com/w80/${countryCode}.webp`;
                const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-");
                const imgR = r * (isHub ? 1.6 : 1.35);

                const fontSize = r * 1.75;
                const pillH = r * 2.8;
                const pillW = label.length * (fontSize * 0.6) + r * 2.8;
                const cy = y + dy;
                const shift = dx ?? Math.abs(dy) * 0.35;
                const cx = side === "right" ? x + Math.abs(shift) : x - Math.abs(shift);
                const pillX = side === "right" ? cx + imgR + r * 0.6 : cx - imgR - r * 0.6 - pillW;
                const pillY = cy - pillH / 2;

                const pulseMaxR = imgR * (isHub ? 2.6 : 2.0);

                return (
                  <g
                    key={`${countryCode}-${index}`}
                    className="cursor-pointer transition-opacity duration-300"
                    opacity={isHighlighted ? 1 : 0.2}
                  >
                    <defs>
                      <clipPath id={clipId}>
                        <circle cx={cx} cy={cy} r={imgR} />
                      </clipPath>
                    </defs>

                    {/* Concentric Radar Pulse Rings originating at Flag Center (cx, cy) */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={imgR}
                      fill="none"
                      stroke={isHub ? "#F26E22" : "#1D2F55"}
                      strokeWidth={r * 0.28}
                      opacity="0.75"
                    >
                      <animate
                        attributeName="r"
                        from={`${imgR}`}
                        to={`${pulseMaxR}`}
                        dur="2.4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.215 0.61 0.355 1"
                        keyTimes="0; 1"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.75"
                        to="0"
                        dur="2.4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.215 0.61 0.355 1"
                        keyTimes="0; 1"
                      />
                    </circle>

                    <circle
                      cx={cx}
                      cy={cy}
                      r={imgR}
                      fill="none"
                      stroke={isHub ? "#F26E22" : "#1D2F55"}
                      strokeWidth={r * 0.2}
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from={`${imgR}`}
                        to={`${pulseMaxR * 1.3}`}
                        begin="0.8s"
                        dur="2.4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.215 0.61 0.355 1"
                        keyTimes="0; 1"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.5"
                        to="0"
                        begin="0.8s"
                        dur="2.4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.215 0.61 0.355 1"
                        keyTimes="0; 1"
                      />
                    </circle>

                    {/* Circular Flag Base & Glow */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={imgR + r * 0.22}
                      fill="#ffffff"
                      stroke={isHub ? "#F26E22" : "#1D2F55"}
                      strokeWidth={r * 0.32}
                    />

                    {/* Circular Flag Asset */}
                    <image
                      href={href}
                      x={cx - imgR}
                      y={cy - imgR}
                      width={imgR * 2}
                      height={imgR * 2}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#${clipId})`}
                    />

                    {/* Floating Country Label Badge */}
                    <rect
                      x={pillX}
                      y={pillY}
                      width={pillW}
                      height={pillH}
                      rx={pillH / 2}
                      fill={isHub ? "#F26E22" : "#1D2F55"}
                    />
                    <text
                      x={pillX + pillW / 2}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize}
                      fill="#ffffff"
                      fontWeight="600"
                      className="select-none font-sans"
                    >
                      {label}
                    </text>
                  </g>
                );
              }}
            />
          </div>
        </FadeIn>

        {/* 3 Corridor Quick-Filter Cards */}
        <StaggerContainer staggerDelay={0.08} className="mt-8 grid gap-4 md:grid-cols-3">
          {corridors.map((c) => {
            const isActive = activeRegion === c.key;
            return (
              <StaggerItem key={c.region}>
                <Link
                  to={c.to}
                  onMouseEnter={() => setActiveRegion(c.key)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className={`group block rounded-xl border p-6 transition-all duration-200 h-full ${
                    isActive
                      ? "border-brand bg-brand/5 shadow-md ring-1 ring-brand"
                      : "border-border bg-card hover:border-brand/50 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-lg font-bold text-brand-deep group-hover:text-brand">
                      {c.region}
                    </p>
                    <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground">{c.countries}</p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* TIER 2: Visual Work Permit Opportunity Cards */}
        <div className="mt-16 sm:mt-20">
          <FadeIn direction="up">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-ember">
                  Featured Programs
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-brand-deep sm:text-3xl">
                  Work Permit &amp; Mobilization Pathways
                </h3>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Direct employer sponsorship · Fast-track intake
              </span>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinationCards.map((d) => (
              <StaggerItem key={d.title}>
                <Link
                  to={d.to}
                  className="group relative flex h-[430px] flex-col justify-between overflow-hidden rounded-lg bg-brand-deep shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Background Image with Zoom on Hover */}
                  <img
                    src={d.image}
                    alt={d.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark Navy-Brand Gradient Overlay for perfect typography contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C36]/95 via-[#0F1C36]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0F1C36]" />

                  {/* Floating Location Badge (Top-Left) */}
                  <div className="relative z-10 p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm backdrop-blur-md transition-colors group-hover:bg-white">
                      <MapPin className="size-3.5 text-ember" />
                      {d.badge}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-6 text-white">
                    <h4 className="font-display text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-2xl">
                      {d.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/90">
                      {d.description}
                    </p>

                    {/* Rating & Placements Badge */}
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-amber-300">
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-white">{d.rating}</span>
                      <span className="text-white/75">({d.reviewCount} evaluated)</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* TIER 3: Conversion Action Banner */}
        <FadeIn direction="up" distance={24} duration={0.6}>
          <div className="relative mt-14 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-brand-deep via-[#1A2E56] to-[#121F3D] p-8 text-white shadow-xl sm:p-12 lg:p-14">
            {/* Authentic Departure Aerobridge Photograph Blended in Frame */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <img
                src={directSponsorshipImg}
                alt="Indian professionals deployed via Damoder Immigration Services walking through airport departure aerobridge"
                className="h-full w-full object-cover object-[center_center] opacity-45 brightness-105 contrast-110"
              />
              {/* Multi-Directional Gradient Shields for High Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 via-50% to-brand-deep/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-brand-deep/30" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm">
                <ShieldCheck className="size-4 text-ember" />
                100% Process Transparency &amp; Verified Channels
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Direct Visa Pathways with <span className="text-ember">Zero Middleman Surcharges</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/90">
                Pre-screened overseas opportunities across New Zealand, Germany, Schengen Europe, Canada, Australia, and the United
                States. Every application is backed by verified legal channels and structured documentation.
              </p>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Export alias for backwards compatibility
export const DeploymentMap = DestinationsWhereWeDeploy;
