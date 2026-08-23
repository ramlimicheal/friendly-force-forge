import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoMark from "@/assets/logo-mark-white.png";
import { company, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-3">
      <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105">
        <img
          src={logoMark}
          alt="Damoder Immigration Services Logo"
          className="size-full object-contain"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-white">
          Damoder Immigration
        </span>
        <span className="hidden text-[11px] uppercase tracking-[0.2em] text-white/75 sm:block font-semibold">
          Services · Hyderabad
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    }, 150);
  };

  const toggleMobileCategory = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-deep/95 backdrop-blur-md px-3 pt-2.5 pb-2 sm:px-5 sm:pt-3 sm:pb-2.5 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="hidden items-center justify-between gap-4 px-5 pb-2 text-xs sm:text-[13px] font-medium text-white/80 lg:flex">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-ember" />
            HQ: Tukkuguda, Hyderabad | New Zealand, Germany, Canada, Australia &amp; UK
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-ember" />
            100% Transparent Visa Processing &amp; Dedicated Consultants
          </span>
          <span className="inline-flex items-center gap-4">
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3.5 text-ember" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="size-3.5 text-ember" />
              {company.email}
            </a>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2.5 backdrop-blur-md sm:px-6 shadow-sm">
          <Brand />

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

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                      >
                        <motion.div
                          variants={{
                            hidden: { opacity: 0 },
                            show: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.035,
                                delayChildren: 0.02,
                              },
                            },
                          }}
                          initial="hidden"
                          animate="show"
                          className="w-84 rounded-lg border border-border bg-white p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-md"
                        >
                          {item.children.map((child) => (
                            <motion.div
                              key={child.label}
                              variants={{
                                hidden: { opacity: 0, x: -6 },
                                show: { opacity: 1, x: 0 },
                              }}
                            >
                              <Link
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className="group/item flex flex-col rounded-md px-3.5 py-2.5 text-left transition-colors hover:bg-brand/5"
                              >
                                <span className="text-sm font-semibold text-brand-deep group-hover/item:text-ember transition-colors flex items-center justify-between">
                                  <span>{child.label}</span>
                                  <ArrowRight className="size-3.5 opacity-0 -translate-x-1.5 transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-ember" />
                                </span>
                                {child.hint ? (
                                  <span className="mt-0.5 text-xs leading-relaxed text-muted-foreground group-hover/item:text-brand-deep/80 transition-colors">
                                    {child.hint}
                                  </span>
                                ) : null}
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
                  activeProps={{ className: "text-ember font-semibold" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden bg-ember hover:bg-ember/90 text-white font-semibold shadow-xs rounded-lg px-4 py-2 text-sm sm:inline-flex"
            >
              <Link to="/contact-us">
                Free Eligibility Check
                <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px] bg-brand-deep text-white border-white/10 p-0 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/10">
                    <Brand />
                  </div>
                  <nav className="flex-1 p-6 space-y-4">
                    {navItems.map((item) => (
                      <div key={item.label}>
                        {item.children ? (
                          <div className="space-y-2">
                            <button
                              type="button"
                              onClick={() => toggleMobileCategory(item.label)}
                              className="flex items-center justify-between w-full text-base font-semibold text-white/90 py-1"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  "size-4 text-white/60 transition-transform",
                                  mobileExpanded === item.label && "rotate-180 text-ember"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileExpanded === item.label && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="pl-3 space-y-2 border-l-2 border-white/10 mt-2"
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      to={child.to}
                                      onClick={() => setOpen(false)}
                                      className="block py-1.5 text-sm text-white/70 hover:text-ember transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.to ?? "/"}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-base font-semibold text-white/90 hover:text-ember transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="p-6 border-t border-white/10 bg-white/[0.02]">
                    <Button asChild className="w-full bg-ember hover:bg-ember/90 text-white font-semibold">
                      <Link to="/contact-us" onClick={() => setOpen(false)}>
                        Book Visa Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
