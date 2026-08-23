import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ShieldCheck,
  Globe2,
  FileCheck2,
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[] | undefined;
  link?: { label: string; to: string } | undefined;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Namaste & Welcome to Damoder Immigration Services (HQ: Hyderabad, India)! 🌏\n\nI am your 24/7 Visa & Immigration Advisor. We make your visa journey seamless and stress-free to study, work, or settle in New Zealand, Germany, Canada, Australia, the UK, and Europe.\n\nHow can I assist you today?",
    timestamp: "Just now",
    quickReplies: [
      "🇳🇿 New Zealand Visas (Top Priority)",
      "🇩🇪 Germany Chancenkarte & Blue Card",
      "🇨🇦 Canada & 🇦🇺 Australia PR",
      "🎓 Study Visas & IELTS Assistance",
      "💼 Overseas Jobs (IT / Engg / Healthcare)",
      "🏢 Concierge Services (Loans / Forex)",
    ],
  },
];

const KNOWLEDGE_BASE: { keywords: string[]; answer: string; link?: { label: string; to: string } }[] = [
  {
    keywords: ["new zealand", "nz", "auckland", "wellington", "aewv", "green list", "smc"],
    answer:
      "🇳🇿 **New Zealand is our flagship priority destination!**\n\nWe provide end-to-end guidance for:\n• **Skilled Migrant Category (SMC)** 6-point PR system\n• **Accredited Employer Work Visa (AEWV)** with job matching\n• **Green List Tier 1 & Tier 2** fast-track residency (Engineering, IT, Healthcare & Trades)\n• **Study in New Zealand** with post-study work rights and path to PR.",
    link: { label: "Explore New Zealand Pathways", to: "/destinations/schengen-europe" },
  },
  {
    keywords: ["germany", "chancenkarte", "opportunity card", "blue card", "berlin", "munich", "german"],
    answer:
      "🇩🇪 **Germany is our #1 European Priority Corridor!**\n\n• **Opportunity Card (Chancenkarte)**: Points-based jobseeker permit allowing you to enter Germany to find qualified work.\n• **EU Blue Card**: Fast-track permanent settlement in 21–27 months for IT, Engineers & Healthcare.\n• **Skilled Immigration Act (Fachkräfteeinwanderungsgesetz)**: Direct employer hiring with B1/B2 German support.",
    link: { label: "View German Visa Details", to: "/destinations/schengen-europe" },
  },
  {
    keywords: ["canada", "express entry", "pnp", "toronto", "vancouver"],
    answer:
      "🇨🇦 **Canada Immigration & PR Solutions:**\n\n• **Express Entry (FSWP / CEC / FSTP)**: Comprehensive CRS score optimization, ECA credential evaluation, and ITA filings.\n• **Provincial Nominee Programs (PNP)**: Targeted provincial streams for Ontario, British Columbia, Alberta, and Saskatchewan.\n• **Study-to-PR**: Top Canadian Designated Learning Institutions (DLI) with PGWP work permits.",
    link: { label: "Check Canada Eligibility", to: "/candidate-portal" },
  },
  {
    keywords: ["australia", "subclass 189", "subclass 190", "subclass 491", "melbourne", "sydney"],
    answer:
      "🇦🇺 **Australia General Skilled Migration (GSM):**\n\n• **Subclass 189 (Independent PR)** & **Subclass 190 (State Nominated PR)**\n• **Subclass 491 (Regional Skilled)**\n• **Skills Assessment**: Vetassess, ACS (IT), Engineers Australia & ANMAC (Nursing) support.",
    link: { label: "Explore Australia Visas", to: "/candidate-portal" },
  },
  {
    keywords: ["study", "student", "university", "admission", "ielts", "toefl", "pte"],
    answer:
      "🎓 **Study Visas & Language Proficiency Inputs:**\n\n• **Top Universities & Colleges** in New Zealand, UK, Germany, Canada, Australia, and Europe.\n• **IELTS / PTE / TOEFL Coaching & Slot Booking**: Strategic inputs to ace language tests and maximize PR points.\n• **Education Bank Loans & Forex**: Hassle-free financial sanctioning and tuition transfers.",
    link: { label: "Visit Study & Career Portal", to: "/candidate-portal" },
  },
  {
    keywords: ["jobs", "careers", "it", "engineer", "healthcare", "nurse", "accountant", "teacher", "hr", "sales"],
    answer:
      "💼 **Overseas Careers Across 8 Core Sectors:**\n\nWe assist qualified professionals in:\n1. **IT & Software Engineering**\n2. **Civil, Mechanical & Electrical Engineering**\n3. **Healthcare & Registered Nursing (GNM/B.Sc)**\n4. **Teachers & Academic Faculty**\n5. **Accountants & Financial Analysts**\n6. **Marketing & Sales Specialists**\n7. **Human Resources (HR)**\n8. **Hospitality & Culinary Arts**",
    link: { label: "Browse Overseas Job Verticals", to: "/industries" },
  },
  {
    keywords: ["concierge", "notary", "translation", "transcript", "loan", "forex", "sim", "insurance"],
    answer:
      "🏢 **Full-Suite Concierge & Relocation Services:**\n\n• **State HRD & MEA Apostille Attestation**\n• **Notary & Sworn Legal Translations** (German, French, Arabic)\n• **University Transcript Procurement**\n• **Bank Loan Assistance** (Education & Settlement Funds)\n• **IELTS / PTE Exam Slot Booking**\n• **International SIM Cards & Forex Cards**\n• **Overseas Travel & Health Insurance**",
    link: { label: "View Concierge Services", to: "/visa-attestation-services" },
  },
  {
    keywords: ["hyderabad", "address", "location", "contact", "phone", "office", "tukkuguda"],
    answer:
      "📍 **Damoder Immigration Services — Headquarters:**\n\n• **Address**: 6F6F+74G, Tukkuguda, Hyderabad, Telangana 501359, India\n• **Phone**: +91 98765 43210 / +91 98765 43211\n• **Email**: info@damoderimmigration.com\n• **Working Hours**: Monday – Saturday (9:30 AM – 6:30 PM IST)",
    link: { label: "Open Contact & Location Desk", to: "/contact-us" },
  },
  {
    keywords: ["pr visa", "permanent residency", "settle", "settlement"],
    answer:
      "🏡 **Permanent Residency (PR) Visas:**\n\nWe provide strategic points-based profile evaluation and document filing for:\n• **New Zealand Skilled Migrant Category**\n• **Canada Express Entry & Provincial Nominee Programs**\n• **Australia Subclass 189 / 190 / 491**\n• **Germany EU Blue Card to Settlement**",
    link: { label: "Check PR Eligibility", to: "/candidate-portal" },
  },
];

function getBotReply(userText: string): { text: string; link?: { label: string; to: string } | undefined; quickReplies?: string[] | undefined } {
  const lower = userText.toLowerCase();

  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return {
        text: item.answer,
        link: item.link,
        quickReplies: ["🇳🇿 New Zealand Visas", "🇩🇪 Germany Visas", "🎓 Study Abroad & IELTS", "🏢 Concierge Services", "📍 Hyderabad Office"],
      };
    }
  }

  return {
    text: "Thank you for reaching out to Damoder Immigration Services (Hyderabad). Our team of dedicated visa consultants specializes in New Zealand, Germany, Canada, Australia, the UK, and Europe across PR, Study, Work, and Visitor visas.\n\nWould you like a free eligibility assessment or details about a specific destination?",
    quickReplies: [
      "🇳🇿 New Zealand Pathways",
      "🇩🇪 Germany Chancenkarte",
      "🇨🇦 Canada Express Entry",
      "🎓 Study Visas & IELTS",
      "📍 Contact Hyderabad HQ",
    ],
    link: { label: "Book Free Consultation", to: "/contact-us" },
  };
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend ?? inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        ...(reply.quickReplies ? { quickReplies: reply.quickReplies } : {}),
        ...(reply.link ? { link: reply.link } : {}),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex size-14 items-center justify-center rounded-full bg-ember text-white shadow-2xl ring-4 ring-white/20 transition-colors hover:bg-ember/90 cursor-pointer"
          aria-label={isOpen ? "Close Damoder AI Assistant" : "Open Damoder AI Assistant"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="size-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <MessageSquare className="size-6" />
                <span className="absolute -top-1 -right-1 flex size-3">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[80vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between bg-brand-deep px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex size-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                  <Bot className="size-5 text-ember" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-brand-deep" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold tracking-tight">Damoder AI Assistant</h3>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70">Hyderabad HQ · New Zealand &amp; Global Visas</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  title="Reset conversation"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="size-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white shadow-2xs">
                      <Sparkles className="size-3.5 text-ember" />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2`}>
                    <div
                      className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                        msg.sender === "user"
                          ? "bg-brand text-white rounded-br-xs"
                          : "bg-card border border-border text-foreground rounded-bl-xs"
                      }`}
                    >
                      {msg.text}

                      {msg.link && (
                        <div className="mt-3 pt-2.5 border-t border-border/80">
                          <Link
                            to={msg.link.to}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-ember hover:underline"
                          >
                            <span>{msg.link.label}</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.quickReplies.map((reply) => (
                          <button
                            key={reply}
                            onClick={() => handleSendMessage(reply)}
                            className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-brand-deep hover:border-ember hover:text-ember transition-colors shadow-2xs cursor-pointer"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}

                    <span
                      className={`block text-[10px] text-muted-foreground px-1 ${
                        msg.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-2xs">
                      <User className="size-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white">
                    <Sparkles className="size-3.5 text-ember" />
                  </div>
                  <div className="rounded-2xl rounded-bl-xs border border-border bg-card px-4 py-2.5 shadow-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-ember animate-bounce [animation-delay:-0.3s]" />
                      <span className="size-1.5 rounded-full bg-ember animate-bounce [animation-delay:-0.15s]" />
                      <span className="size-1.5 rounded-full bg-ember animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-border bg-card">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about New Zealand, Germany, Canada, PR or Study..."
                  className="flex-1 rounded-lg border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-ember hover:bg-ember/90 text-white size-10 p-0 rounded-lg shrink-0 shadow-xs cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="size-4" />
                </Button>
              </div>
              <p className="mt-2 text-[10px] text-center text-muted-foreground">
                Damoder Immigration Services · Hyderabad, Telangana 501359
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
