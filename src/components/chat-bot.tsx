import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  Phone,
  ArrowRight,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Building2,
  Briefcase,
  GraduationCap,
  Globe2,
  FileCheck2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  links?: Array<{ label: string; to: string }>;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "m1",
    sender: "bot",
    text: "👋 Welcome to **Damoder Immigration Services & Overseas Manpower** (MEA Lic. `B-0824/TN/PER/1000+/5/9821/2021`).\n\nI am **Damoder AI**, your 24/7 recruitment & mobility advisor. How can I assist you today?",
    timestamp: "Just now",
  },
];

const SUGGESTIONS = [
  { label: "💼 Hire Overseas Manpower (For Employers)", query: "How do I hire manpower for Gulf or Europe?" },
  { label: "👷 Browse Live Job Vacancies", query: "What overseas job vacancies are available?" },
  { label: "📜 MEA Apostille & Attestation", query: "How do I get my certificates attested or apostilled?" },
  { label: "🇪🇺 European Work Permits", query: "Tell me about Poland, Germany & Malta work permits" },
  { label: "🇸🇦 Saudi Arabia & Gulf GCC Projects", query: "What are the requirements for Saudi Arabia and Gulf jobs?" },
  { label: "🛡️ Verify MEA License & Guarantees", query: "What is your MEA license number and replacement guarantee?" },
];

function getBotResponse(input: string): { text: string; links?: Array<{ label: string; to: string }> } {
  const q = input.toLowerCase();

  // Employer / Bulk hiring / Trade Testing
  if (
    q.includes("hire") ||
    q.includes("employer") ||
    q.includes("manpower") ||
    q.includes("b2b") ||
    q.includes("contractor") ||
    q.includes("demand letter") ||
    q.includes("trade test")
  ) {
    return {
      text: "🏢 **For Global Employers & EPC Contractors:**\n\nWe provide end-to-end overseas recruitment with strict SLA commitments:\n• **Bulk Mobilization**: Sourcing batches of 50 to 1,000+ certified craftsmen across 20+ Indian states.\n• **Accredited Trade Testing**: 6G Welding rigs, Electrical/MEP labs, Civil formwork yards, and commercial hospitality kitchens.\n• **SLA Turnaround**: Average 30–45 days from demand intake to site touchdown.\n• **90-Day Replacement Guarantee**: Free replacement for any skill or conduct probation mismatch.\n• **Interview Hosting**: 5-star executive hospitality for your selection delegation in India or multi-camera HD live workshop streaming.",
      links: [
        { label: "Submit Manpower Demand Letter →", to: "/employer-services" },
        { label: "View Trade Testing Facilities →", to: "/employer-services" },
      ],
    };
  }

  // Candidate / Job Seeker / Vacancies / Apply
  if (
    q.includes("job") ||
    q.includes("vacanc") ||
    q.includes("candidate") ||
    q.includes("apply") ||
    q.includes("salary") ||
    q.includes("openings") ||
    q.includes("work in")
  ) {
    return {
      text: "👷 **For Indian Job Seekers & Craftsmen:**\n\nWe offer 100% verified, legal overseas vacancies with direct employer sponsorship:\n• **100% Free Initial Assessment**: Zero registration charges.\n• **Zero Cash Transactions**: We never charge unauthorized fees; strict anti-fraud policy.\n• **Live Openings**: 6G Welders (Saudi Arabia), Staff Nurses (Germany), CNC Operators (Poland), Hotel Chefs (Malta), Heavy Drivers (UAE), MEP Electricians (Qatar).\n• **Protected Contracts**: Official written employment agreements with defined salary, overtime, housing & insurance.",
      links: [
        { label: "View Live Job Vacancies →", to: "/candidate-portal" },
        { label: "Submit Candidate Profile →", to: "/candidate-portal" },
      ],
    };
  }

  // Attestation / Apostille / Document Legalisation / HRD
  if (
    q.includes("attest") ||
    q.includes("apostille") ||
    q.includes("certificate") ||
    q.includes("degree") ||
    q.includes("notary") ||
    q.includes("hrd") ||
    q.includes("legalis") ||
    q.includes("mea")
  ) {
    return {
      text: "📜 **MEA Apostille & Embassy Attestation Division:**\n\nWe manage the complete 4-tier statutory legalisation chain:\n1. **State Level**: HRD (Educational) & Home Dept / GAD (Personal).\n2. **MEA Legalisation**: Official Ministry of External Affairs Hague Apostille sticker with QR code verification.\n3. **Embassy Consular**: Saudi, UAE, Qatar, Kuwait & European consular stamping.\n4. **MOFA Endorsement**: In-country arrival validation.\n\n• **Fast-Track Turnaround**: 5–7 business days for MEA Apostille.\n• **Document Suites**: Degrees, B.Sc Nursing, Diplomas, Marksheets, Birth/Marriage records, PCC, and Commercial POAs.",
      links: [
        { label: "Get Attestation Fee Quote →", to: "/visa-attestation-services" },
        { label: "View 4-Tier Process Chain →", to: "/visa-attestation-services" },
      ],
    };
  }

  // Europe / Poland / Germany / Malta / Croatia / Schengen / Blue Card
  if (
    q.includes("europe") ||
    q.includes("poland") ||
    q.includes("germany") ||
    q.includes("malta") ||
    q.includes("croatia") ||
    q.includes("romania") ||
    q.includes("schengen") ||
    q.includes("blue card")
  ) {
    return {
      text: "🇪🇺 **Schengen & European Labour Mobility:**\n\nDirect employer work permit pathways with permanent residency (TRC) options:\n• **Poland**: Type-A Work Permits (*Zezwolenie na pracę*) for welders, CNC, warehouses, and transport with Karta Pobytu residency.\n• **Germany**: Skilled Worker Act & EU Blue Card for Registered Nurses (B1/B2 German track) and IT/Engineering specialists.\n• **Malta**: Single Work Permits (*Identità Malta*) for luxury hotel chefs, hospitality, and construction with Schengen mobility.\n• **Croatia & Romania**: Stay and work permits for civil infrastructure and shipyard fabrication.\n• **All permits 100% employer-funded with in-house MEA Apostille.**",
      links: [
        { label: "Explore European Corridors →", to: "/destinations/schengen-europe" },
        { label: "Apply for European Roles →", to: "/candidate-portal" },
      ],
    };
  }

  // Gulf / Saudi / UAE / Qatar / Kuwait / GCC / Oman / Bahrain / GAMCA
  if (
    q.includes("gulf") ||
    q.includes("saudi") ||
    q.includes("uae") ||
    q.includes("dubai") ||
    q.includes("qatar") ||
    q.includes("kuwait") ||
    q.includes("oman") ||
    q.includes("bahrain") ||
    q.includes("gamca") ||
    q.includes("wafid") ||
    q.includes("emigrate")
  ) {
    return {
      text: "🇸🇦 **Gulf & GCC Deployment Corridors:**\n\nOur flagship high-volume corridor across 6 member states:\n• **Saudi Arabia (KSA)**: Mega EPC, NEOM, and Aramco projects with Qiwa digital contracts and Enjaz stamping.\n• **UAE**: MOHRE quotas, Dubai/Abu Dhabi commercial construction & 5-star hospitality.\n• **Qatar**: QVC biometric & medical pre-screening in India.\n• **Kuwait**: Article 18 private-sector visas.\n• **Statutory Compliance**: Full handling of GAMCA/Wafid medical fitness, eMigrate POE clearances, and Pravasi Bharatiya Bima Yojana (PBBY) insurance.",
      links: [
        { label: "Explore Gulf GCC Corridors →", to: "/destinations/gulf-gcc" },
        { label: "Hire Gulf Manpower →", to: "/employer-services" },
      ],
    };
  }

  // USA / America / EB-3 / H-1B / J-1 / Green card
  if (
    q.includes("usa") ||
    q.includes("america") ||
    q.includes("united states") ||
    q.includes("eb-3") ||
    q.includes("eb3") ||
    q.includes("h-1b") ||
    q.includes("h1b") ||
    q.includes("j-1") ||
    q.includes("green card") ||
    q.includes("perm")
  ) {
    return {
      text: "🇺🇸 **United States Employment & Permanent Residency:**\n\nSponsorship-based legal US visa pathways:\n• **EB-3 Immigrant Visa**: Employer-sponsored Permanent Residency (Green Card) for candidate, spouse & children with US Department of Labor PERM Labor Certification and I-140 petition.\n• **H-1B Specialty Occupations**: Degree-qualified IT, Engineering, and Healthcare roles.\n• **J-1 Hospitality Exchange**: 12–18 month paid training in luxury US resort chains.\n• **L-1 Intra-Company Transferees**: Executive and specialist transfers to US branches.\n• *Note: All legal petitions are drafted by licensed US immigration attorneys.*",
      links: [
        { label: "Explore US Visa Pathways →", to: "/destinations/usa-visa" },
        { label: "Check US Eligibility →", to: "/candidate-portal" },
      ],
    };
  }

  // License / Verification / Address / Contact / Phone / Email / Trust
  if (
    q.includes("license") ||
    q.includes("licence") ||
    q.includes("mea") ||
    q.includes("register") ||
    q.includes("address") ||
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("office") ||
    q.includes("hyderabad") ||
    q.includes("grievance") ||
    q.includes("fraud")
  ) {
    return {
      text: "🛡️ **Statutory Licensing & Official Verification:**\n\n• **Government Registration**: MEA Registration No. `B-0824/TN/PER/1000+/5/9821/2021` (Ministry of External Affairs, Govt. of India).\n• **Headquarters**: Damoder Immigration Services & Overseas Manpower, Mount Road / Anna Salai, Hyderabad, Telangana, India.\n• **Phone / WhatsApp**: +91 94440 12345\n• **Corporate Email**: contact@damoderimmigration.com\n• **Statutory Grievance Ombudsman**: complaints@damoderimmigration.com\n• **Working Hours**: Monday – Saturday: 9:30 AM – 6:30 PM IST.",
      links: [
        { label: "View Official Contact Desks →", to: "/contact-us" },
        { label: "About Our 20+ Year Heritage →", to: "/about-us" },
      ],
    };
  }

  // Default response
  return {
    text: "Thank you for reaching out! Damoder Immigration Services is a Government of India MEA-licensed overseas recruitment consultancy (Lic. `B-0824/TN/PER/1000+/5/9821/2021`).\n\nI can assist you with:\n1. **Employer Services**: Bulk manpower supply, trade testing & mobilization SLAs.\n2. **Job Seekers**: Live vacancies in Gulf, Europe & USA with zero registration fees.\n3. **Visa & Attestation**: MEA Apostille, State HRD & Embassy legalisation.\n4. **Destination Desks**: Saudi Arabia, UAE, Poland, Germany, Malta, USA.\n\nPlease click a quick option below or ask any specific question!",
    links: [
      { label: "For Employers (Bulk Hiring) →", to: "/employer-services" },
      { label: "For Job Seekers (Vacancies) →", to: "/candidate-portal" },
      { label: "Document Attestation →", to: "/visa-attestation-services" },
      { label: "Contact Hyderabad Office →", to: "/contact-us" },
    ],
  };
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.text,
        links: response.links,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Trigger Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-card/95 py-2 pl-4 pr-3 text-xs font-semibold text-brand-deep shadow-lg backdrop-blur-md cursor-pointer hover:border-brand/40 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ask Damoder AI · Overseas Advisory</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Damoder AI Chatbot"
          className="relative flex size-14 items-center justify-center rounded-full bg-brand-deep text-white shadow-2xl ring-4 ring-brand/20 transition-all hover:bg-brand"
        >
          {/* Pulsing beacon glow */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand to-ember opacity-60 blur-sm animate-pulse" />
          <span className="relative flex size-full items-center justify-center rounded-full bg-brand-deep text-white">
            {isOpen ? <X className="size-6" /> : <Bot className="size-7 text-amber-300" />}
          </span>
          <span className="absolute top-0 right-0 flex size-4 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500 border-2 border-brand-deep" />
          </span>
        </motion.button>
      </div>

      {/* Floating Executive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-4 z-50 flex h-[580px] w-[calc(100vw-32px)] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-brand-deep px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex size-10 items-center justify-center rounded-xl bg-white/10 text-amber-300 ring-1 ring-white/20">
                  <Bot className="size-6" />
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 border-2 border-brand-deep" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold text-white">Damoder AI Assistant</h3>
                    <span className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                      MEA Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-white/80">Online · Overseas Recruitment Advisory</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-white/80">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="rounded-lg p-1.5 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RefreshCw className="size-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  className="rounded-lg p-1.5 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Quick Department Header Strip */}
            <div className="flex items-center justify-between border-b border-border/60 bg-paper/90 px-4 py-2 text-[11px] text-muted-foreground">
              <span className="font-semibold text-brand-deep">Lic. B-0824/TN/PER/1000+/5/9821/2021</span>
              <a
                href="tel:+919444012345"
                className="flex items-center gap-1 font-semibold text-brand hover:underline"
              >
                <Phone className="size-3" />
                <span>Call Hyderabad HQ</span>
              </a>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background via-paper/30 to-paper/60">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "bot" && (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-deep text-amber-300">
                      <Bot className="size-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                      m.sender === "user"
                        ? "bg-brand text-white rounded-br-none"
                        : "border border-border/80 bg-card text-foreground rounded-bl-none"
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-2">
                      {m.text.split("\n").map((line, i) => {
                        // Bold formatting
                        const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
                        return (
                          <div key={i}>
                            {parts.map((p, pIndex) => {
                              if (p.startsWith("**") && p.endsWith("**")) {
                                return (
                                  <strong key={pIndex} className="font-bold text-brand-deep">
                                    {p.slice(2, -2)}
                                  </strong>
                                );
                              }
                              if (p.startsWith("`") && p.endsWith("`")) {
                                return (
                                  <code
                                    key={pIndex}
                                    className="rounded bg-paper px-1 py-0.5 font-mono text-[11px] text-ember font-semibold"
                                  >
                                    {p.slice(1, -1)}
                                  </code>
                                );
                              }
                              return p;
                            })}
                          </div>
                        );
                      })}
                    </div>

                    {/* Interactive Links in Bot Response */}
                    {m.links && m.links.length > 0 && (
                      <div className="mt-3.5 pt-2.5 border-t border-border/60 space-y-1.5">
                        {m.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-lg border border-brand/20 bg-brand/5 px-2.5 py-1.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-all"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        ))}
                      </div>
                    )}

                    <div
                      className={`mt-1.5 text-[10px] text-right ${
                        m.sender === "user" ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {m.timestamp}
                    </div>
                  </div>

                  {m.sender === "user" && (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                      <User className="size-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-deep text-amber-300">
                    <Bot className="size-4" />
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-card p-3 rounded-bl-none shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-brand animate-bounce" />
                      <span className="size-1.5 rounded-full bg-brand animate-bounce [animation-delay:0.2s]" />
                      <span className="size-1.5 rounded-full bg-brand animate-bounce [animation-delay:0.4s]" />
                      <span className="ml-1 text-[11px] text-muted-foreground">Consulting Knowledge Base...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="border-t border-border/60 bg-paper/60 p-2.5 overflow-x-auto">
              <div className="flex gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => handleSendMessage(s.query)}
                    className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground hover:border-brand hover:text-brand transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about hiring, jobs, visas, apostille..."
                className="h-10 text-xs sm:text-sm bg-background"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isTyping}
                className="h-10 px-3.5 rounded-lg bg-brand hover:bg-brand-deep text-white shrink-0"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
