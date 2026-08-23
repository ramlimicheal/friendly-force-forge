import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileCheck,
  CreditCard,
  FileSignature,
  Lock,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/motion-primitives";
import { Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

const securityPillars = [
  {
    icon: CreditCard,
    title: "100% Zero-Cash Policy",
    subtitle: "Official GST Bank Invoices",
    description:
      "All statutory processing and attestation fees are paid directly into official corporate bank accounts. We never accept cash in hand or informal UPI requests.",
  },
  {
    icon: FileSignature,
    title: "Written Legal Contracts",
    subtitle: "Bilingual Terms Before Departure",
    description:
      "Role responsibilities, working hours, accommodation, and medical insurance are committed in written employment contracts prior to visa stamping.",
  },
  {
    icon: FileCheck,
    title: "Direct Principal Mandates",
    subtitle: "Zero Unauthorised Sub-Agents",
    description:
      "Every vacancy is backed by an authenticated Demand Letter and Power of Attorney from verified overseas corporate employers.",
  },
  {
    icon: Lock,
    title: "Merit-Based Processing",
    subtitle: "No False Visa Promises",
    description:
      "We prepare trade-tested candidates and compliant legal files; visas are issued strictly by foreign embassies and government immigration departments.",
  },
];

export function AntiFraudVault() {
  return (
    <Section
      tone="muted"
      eyebrow="Integrity"
      title="Anti-fraud commitment & compliance verification"
      intro="Overseas employment demands total transparency. We protect candidates and employers with audited government compliance and zero unauthorised intermediaries."
    >
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        {/* Left: 4 Clear Security Pillar Cards (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          <StaggerContainer staggerDelay={0.08} className="grid gap-4 sm:grid-cols-2">
            {securityPillars.map((p) => (
              <StaggerItem key={p.title}>
                <MotionCard className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:border-brand/40 hover:shadow-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-brand-deep/5 text-brand ring-1 ring-brand/15">
                        <p.icon className="size-5 text-brand" />
                      </span>
                      <span className="text-[11px] font-semibold text-ember uppercase tracking-wider">
                        {p.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-brand-deep">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 border-t border-border/80 pt-3 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>MEA Audited Standard</span>
                  </div>
                </MotionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Clean Fraud Warning Capsule */}
          <FadeIn direction="up" delay={0.15}>
            <div className="rounded-lg border border-destructive/25 bg-card p-4 shadow-2xs flex items-start gap-3.5 text-xs sm:text-sm text-foreground">
              <AlertTriangle className="size-5 shrink-0 text-destructive mt-0.5" />
              <div>
                <span className="font-bold text-destructive">Impersonation Notice:</span> We never recruit through Telegram or personal WhatsApp accounts demanding advance cash deposits. Always verify mandates with our central compliance desk.
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Clean White Govt. Licence & Verification Card (4 cols) */}
        <div className="lg:col-span-4">
          <FadeIn direction="up" delay={0.12} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 sm:p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2 text-brand-deep">
                    <BadgeCheck className="size-5 text-brand" />
                    <span className="font-display text-sm font-bold">Government Licence</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-border bg-paper p-3">
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      MEA Licence No.
                    </p>
                    <p className="mt-0.5 font-mono text-sm font-bold text-brand-deep">
                      B-0824/TN/PER/1000+/5/9821/2021
                    </p>
                  </div>

                  <div className="rounded-md border border-border bg-paper p-3">
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      Issuing Authority
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-brand-deep">
                      Ministry of External Affairs (Govt. of India)
                    </p>
                  </div>

                  <div className="rounded-md border border-border bg-paper p-3">
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      eMigrate Portal
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-emerald-700">
                      100% Direct Corporate Filing
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-border pt-4">
                <a
                  href="https://emigrate.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-paper hover:bg-secondary/60 px-4 py-2.5 text-xs sm:text-sm font-semibold text-brand-deep transition-all duration-200"
                >
                  <span>Verify on eMigrate</span>
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                </a>

                <Button asChild variant="default" className="rounded-lg font-semibold text-xs sm:text-sm w-full">
                  <Link to="/contact-us">Contact Compliance Desk</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
