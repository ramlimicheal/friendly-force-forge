import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logoMark from "@/assets/logo-mark-white.png";
import { company, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm ring-1 ring-white/25 transition-transform group-hover:scale-105">
        <img
          src={logoMark}
          alt="Damoder Immigration Services Logo"
          className="size-full object-contain"
        />
      </span>
      <div className="flex flex-col justify-center">
        <span className="font-display text-[15px] font-bold uppercase leading-none text-white transition-colors group-hover:text-ember sm:text-base">
          Damoder
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-ember sm:text-[10px]">
          Immigration Services
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 350);
  };

  const toggleMobileCategory = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header ref={containerRef} className="sticky top-0 z-50 bg-brand-deep/95 backdrop-blur-md px-3 pt-2.5 pb-2 sm:px-5 sm:pt-3 sm:pb-2.5 transition-colors">
      <div className="mx-auto max-w-7xl">
        {/* Top Info Ribbon */}
        <div className="hidden items-center justify-between gap-4 px-5 pb-2 text-xs sm:text-[13px] font-medium text-white/80 lg:flex">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-ember" />
            Head Office: Hyderabad, Telangana
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-ember" />
            Licensed Immigration &amp; Manpower Services
          </span>
          <span className="inline-flex items-center gap-4">
            <a href={`tel:${company.employerPhone}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3.5 text-ember" />
              {company.employerPhone}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="size-3.5 text-ember" />
              {company.email}
            </a>
          </span>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2.5 backdrop-blur-md sm:px-6 shadow-sm">
          <Brand />

          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={cn(
                      "inline-flex items-center gap-1.5 py-2 text-sm sm:text-[15px] font-medium transition-colors cursor-pointer outline-none",
                      openDropdown === item.label
                        ? "text-ember font-semibold"
                        : "text-white/90 hover:text-ember"
                    )}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex"
                    >
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-colors",
                          openDropdown === item.label ? "text-ember" : "text-white/70"
                        )}
                      />
                    </motion.span>
                  </button>

                  {/* Smooth Framer Motion Dropdown Container with Hover Bridge */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 pointer-events-auto before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          variants={{
                            hidden: { opacity: 0 },
                            show: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.03,
                                delayChildren: 0.02,
                              },
                            },
                          }}
                          initial="hidden"
                          animate="show"
                          className="w-92 rounded-xl border border-border bg-white p-2.5 shadow-2xl ring-1 ring-black/10 backdrop-blur-md"
                        >
                          {item.children.map((child) => (
                            <motion.div
                              key={child.label}
                              variants={{
                                hidden: { opacity: 0, x: -6 },
                                show: { opacity: 1, x: 0 },
                              }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                            >
                              <Link
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className="group/item flex items-start gap-3 rounded-lg px-3.5 py-2.5 transition-all duration-150 hover:bg-paper hover:translate-x-0.5"
                              >
                                {/* Optional Flag Badges Stack */}
                                {child.flags && child.flags.length > 0 ? (
                                  <div className="flex -space-x-1.5 shrink-0 mt-0.5">
                                    {child.flags.map((code) => (
                                      <img
                                        key={code}
                                        src={`https://flagcdn.com/w40/${code}.webp`}
                                        alt={code}
                                        className="size-5 rounded-full object-cover ring-1 ring-white shadow-xs"
                                        loading="lazy"
                                      />
                                    ))}
                                  </div>
                                ) : null}

                                <div className="flex flex-1 flex-col">
                                  <span className="text-sm font-semibold text-brand-deep group-hover/item:text-ember transition-colors flex items-center justify-between">
                                    <span>{child.label}</span>
                                    <ArrowRight className="size-3.5 opacity-0 -translate-x-1.5 transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-ember" />
                                  </span>
                                  {child.hint ? (
                                    <span className="mt-0.5 text-xs leading-relaxed text-muted-foreground group-hover/item:text-brand-deep/80 transition-colors">
                                      {child.hint}
                                    </span>
                                  ) : null}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  className="text-sm sm:text-[15px] font-medium text-white/90 transition-colors hover:text-ember"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/candidate-portal"
              className="inline-flex items-center gap-2 rounded-lg bg-ember px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-ember/90 hover:scale-105 active:scale-95"
            >
              <Sparkles className="size-3.5 text-white" />
              <span>Free Visa Assessment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="rounded-lg p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 rounded-lg border border-white/15 bg-brand-deep/95 p-4 backdrop-blur-md shadow-xl text-white">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) =>
                    item.children ? (
                      <div key={item.label} className="border-b border-white/10 pb-2 mb-1">
                        <button
                          type="button"
                          onClick={() => toggleMobileCategory(item.label)}
                          className="flex w-full items-center justify-between py-2 text-sm font-bold text-white hover:text-ember"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200",
                              mobileExpanded === item.label ? "rotate-180 text-ember" : "text-white/60"
                            )}
                          />
                        </button>
                        {mobileExpanded === item.label && (
                          <div className="pl-3 space-y-1.5 pt-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 text-xs text-white/80 hover:text-ember"
                              >
                                {child.flags && child.flags.length > 0 ? (
                                  <div className="flex -space-x-1 shrink-0">
                                    {child.flags.map((code) => (
                                      <img
                                        key={code}
                                        src={`https://flagcdn.com/w40/${code}.webp`}
                                        alt={code}
                                        className="size-4 rounded-full object-cover ring-1 ring-white/50"
                                        loading="lazy"
                                      />
                                    ))}
                                  </div>
                                ) : null}
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.to ?? "/"}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2 text-sm font-semibold text-white/90 hover:text-ember border-b border-white/10"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-4 pt-3 border-t border-white/15">
                  <Link
                    to="/candidate-portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-ember py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ember/90"
                  >
                    <span>Start Free Visa Assessment</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
