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
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm ring-1 ring-white/25 transition-transform group-hover:scale-105">
        <img
          src={logoMark}
          alt="Damoder Immigration Services Logo"
          className="size-full object-contain"
        />
      </span>
      <div className="flex flex-col justify-center">
        <span className="font-display text-[14px] sm:text-[15px] font-bold tracking-tight text-white group-hover:text-ember transition-colors leading-tight">
          Damoder Immigration Services
        </span>
        <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-ember">
          Hyderabad, India
        </span>
      </div>
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
    }, 350);
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
            Head Office: India | Network: Europe, Gulf &amp; USA
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-ember" />
            Government Registered &amp; MEA / eMigrate Compliant
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

                  {/* Smooth Framer Motion Dropdown Container */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 pointer-events-auto before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
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
                              transition={{ duration: 0.18, ease: "easeOut" }}
                            >
                              <Link
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className="group/item flex flex-col rounded-md px-3.5 py-2.5 transition-all duration-150 hover:bg-paper hover:translate-x-0.5"
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
                  to={item.to!}
                  activeProps={{ className: "text-ember font-semibold" }}
                  className="whitespace-nowrap py-2 text-sm sm:text-[15px] font-medium text-white/90 transition-colors hover:text-ember"
                >
                  {item.label}
                </Link>
              ),
            )}

            {/* Single Action Button integrated inside navigation menu */}
            <Link
              to="/candidate-portal"
              className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-ember/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for Jobs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-white hover:bg-white/10 hover:text-white lg:hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto bg-brand-deep text-white border-white/10">
              <SheetTitle className="flex items-center gap-3 px-2 pt-2 font-display text-white">
                <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm">
                  <img src={logoMark} alt="Logo" className="size-full object-contain" />
                </span>
                <span className="text-base font-bold text-white">Damoder</span>
              </SheetTitle>

              <nav className="mt-6 flex flex-col gap-2.5 p-2">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleMobileCategory(item.label)}
                        className="flex w-full items-center justify-between p-3.5 text-left text-xs font-bold uppercase tracking-wider text-ember hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <ChevronDown className="size-4 text-white/70" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 px-3 pb-3 pt-1 border-t border-white/5">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  onClick={() => setOpen(false)}
                                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to!}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-2.5 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4">
                  <Link
                    to="/candidate-portal"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-ember px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-ember/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Apply for Jobs</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
