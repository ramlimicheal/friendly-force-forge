import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion-primitives";
import ctaBgImg from "@/assets/cta-banner-bg.jpg";
import PixelBlast from "@/components/ui/PixelBlast";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-brand-deep px-4 pb-12 pt-10 text-white sm:px-6 md:pb-16 md:pt-14 overflow-hidden">
      {/* High-Visibility Interactive PixelBlast Particle Canvas Inside the Frame */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto opacity-75">
        <PixelBlast
          variant="circle"
          pixelSize={5}
          color="#3B82F6"
          patternScale={3.5}
          patternDensity={1.2}
          pixelSizeJitter={0.4}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.2}
          transparent
        />
      </div>

      <div className="relative z-10 pointer-events-none mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-2 sm:px-4 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
        <div className="pointer-events-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white/90 backdrop-blur-md"
          >
            <span className="size-2 rounded-full bg-ember" />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[58px] drop-shadow-sm"
          >
            {title}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:pb-3 pointer-events-auto"
        >
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/95 drop-shadow-sm">{subtitle}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
  className,
  id,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "muted";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 py-16 sm:py-20 md:py-24 overflow-hidden",
        tone === "muted" ? "bg-paper" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow || title || intro ? (
          <FadeIn direction="up" distance={20} duration={0.5}>
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-ember shadow-xs">
                <span className="size-1.5 rounded-full bg-ember" />
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-deep sm:text-4xl md:text-[38px] lg:text-[44px]">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            ) : null}
          </FadeIn>
        ) : null}
        <FadeIn direction="up" distance={24} duration={0.55} delay={0.1} className={title || eyebrow || intro ? "mt-12" : ""}>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}

export function GoldRule() {
  return <span className="mt-4 block h-1 w-16 rounded-full bg-ember" />;
}

export function ChipLink({
  to,
  children,
  tone = "light",
}: {
  to: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Link
        to={to}
        className={cn(
          "group inline-flex items-center gap-3 rounded-xl py-2.5 pl-5 pr-2.5 text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm",
          tone === "light"
            ? "bg-brand text-white hover:bg-brand-deep hover:shadow-md"
            : "bg-white text-brand-deep hover:bg-white/90 hover:shadow-md",
        )}
      >
        {children}
        <span className="flex size-7 items-center justify-center rounded-lg bg-ember text-white transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="size-3.5" />
        </span>
      </Link>
    </motion.span>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-background px-4 pb-12 sm:px-6 sm:pb-16 overflow-hidden">
      <FadeIn direction="up" distance={24} duration={0.6}>
        <div className="mx-auto max-w-7xl rounded-lg bg-brand-deep px-8 py-14 text-white shadow-xl md:px-14 md:py-16 relative overflow-hidden">
          {/* Seamless Blended Background Image */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src={ctaBgImg}
              alt="Damoder Immigration Services candidate deployment at international departure terminal"
              className="h-full w-full object-cover object-[right_center] md:object-[center_35%] opacity-45 brightness-105 contrast-110"
            />
            {/* Multi-Directional Gradient Shields for High Text Contrast & Seamless Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 via-50% to-brand-deep/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-brand-deep/40" />
          </div>

          {/* Interactive PixelBlast Particle Layer */}
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-25 overflow-hidden">
            <PixelBlast
              variant="circle"
              pixelSize={4}
              color="#F59E0B"
              patternScale={2.8}
              patternDensity={0.9}
              pixelSizeJitter={0.3}
              enableRipples
              rippleSpeed={0.35}
              rippleThickness={0.12}
              rippleIntensityScale={1.3}
              speed={0.45}
              edgeFade={0.35}
              transparent
            />
          </div>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between relative z-10">
            <div>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[42px]">
                Ready to build your workforce or elevate your career?
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/90">
                Partner with India&apos;s most reliable, compliant and transparent overseas
                recruitment firm.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ChipLink to="/employer-services" tone="dark">
                Post a requirement
              </ChipLink>
              <Link
                to="/candidate-portal"
                className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit resume
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
