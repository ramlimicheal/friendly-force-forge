import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoMark from "@/assets/logo-mark.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Lead {
  name: string;
  role: string;
  contact: string;
  destination: string;
  trade: string;
}

const VISITOR_TYPES = ["Job Seeker", "Student", "Employer", "Other"];
const DESTINATIONS = [
  "New Zealand (Priority #1)",
  "Germany & Europe (Priority)",
  "Canada (Express Entry/PNP)",
  "Australia (GSM 189/190)",
  "United Kingdom",
  "United States",
  "Gulf / GCC",
  "Not sure yet",
];

const SUGGESTIONS = [
  "What visa suits my profile?",
  "How does the New Zealand SMC work?",
  "German Opportunity Card eligibility?",
  "Documents & MEA apostille needed?",
  "Hiring manpower for our projects",
];

/** Clean markdown renderer: **bold**, `code`, [label](/path) and line breaks. */
function renderRich(text: string) {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={key++} className="font-semibold text-brand-deep">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith("`")) {
      nodes.push(
        <code key={key++} className="rounded bg-paper px-1 py-0.5 font-mono text-[11px]">
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      const label = linkMatch?.[1] ?? token;
      const href = linkMatch?.[2] ?? "#";
      nodes.push(
        <a key={key++} href={href} className="font-semibold text-brand underline underline-offset-2 hover:text-ember">
          {label}
        </a>,
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLead] = useState<Lead | null>(null);
  const [form, setForm] = useState<Lead>({
    name: "",
    role: "Job Seeker",
    contact: "",
    destination: "New Zealand (Priority #1)",
    trade: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, lead]);

  async function send(text: string, currentLead: Lead, history: Message[]) {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const next = [...history, userMsg];
    setMessages(next);
    setInput("");
    setIsTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lead: currentLead,
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages([
        ...next,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "I couldn't answer that right now — please reach us via our [contact page](/contact-us) or visit our Hyderabad headquarters.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Connection issue. Please try again or reach our team directly at the [contact page](/contact-us).",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  function startChat(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setLead(form);
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `Hello **${form.name.trim()}** 👋 I'm **Damoder AI**. I have your interest in **${form.destination}** noted. Ask me anything about visas, documents, points evaluation, or our deployment process!`,
      },
    ]);
  }

  function reset() {
    setLead(null);
    setMessages([]);
    setInput("");
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Chat with Damoder AI"}
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-border transition-shadow hover:shadow-xl"
      >
        {isOpen ? (
          <X className="size-6 text-brand-deep" />
        ) : (
          <>
            <img src={logoMark} alt="Damoder AI" className="size-8 object-contain" />
            {!lead && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex size-4 items-center justify-center rounded-full bg-ember text-[9px] font-bold text-white">
                  1
                </span>
              </span>
            )}
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[560px] max-h-[calc(100vh-8rem)] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-brand-deep px-4 py-3">
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src={logoMark} alt="" className="size-7 object-contain" />
                <span className="absolute -bottom-0 -right-0 size-3 rounded-full border-2 border-white bg-emerald-500" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-white">Damoder AI</p>
                <p className="inline-flex items-center gap-1 text-[11px] text-white/70">
                  <ShieldCheck className="size-3" /> Hyderabad HQ · 24/7 Guidance
                </p>
              </div>
              {lead ? (
                <button
                  type="button"
                  onClick={reset}
                  title="New conversation"
                  className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RefreshCw className="size-4" />
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content: Lead form or Chat */}
            {!lead ? (
              <form onSubmit={startChat} className="flex flex-1 flex-col justify-between p-4">
                <div className="space-y-3">
                  <div className="rounded-lg bg-paper p-3 text-xs leading-relaxed text-muted-foreground">
                    👋 Welcome to <strong>Damoder Immigration Services</strong>. Tell us a bit about your goals to start an AI-guided visa consultation.
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1 h-9 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      I am a...
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-1.5">
                      {VISITOR_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, role: t })}
                          className={`rounded-md border py-1.5 text-xs font-medium transition-colors ${
                            form.role === t
                              ? "border-brand bg-brand/10 text-brand"
                              : "border-border bg-card text-muted-foreground hover:bg-paper"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Target Destination
                    </label>
                    <select
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="mt-1 h-9 w-full rounded-md border border-input bg-card px-2 text-xs text-foreground"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Mobile / WhatsApp
                    </label>
                    <Input
                      placeholder="+91 8639516954"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="mt-1 h-9 text-sm"
                    />
                  </div>
                </div>

                <Button type="submit" className="mt-4 w-full bg-ember hover:bg-ember/90 text-white font-semibold">
                  Start Consultation
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-1 flex-col overflow-hidden">
                {/* Message stream */}
                <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          m.role === "user"
                            ? "bg-brand text-white"
                            : "bg-paper text-foreground border border-border"
                        }`}
                      >
                        {m.role === "assistant" ? renderRich(m.content) : m.content}
                      </div>
                    </div>
                  ))}
                  {isTyping ? (
                    <div className="flex items-center gap-1.5 rounded-2xl bg-paper px-3.5 py-2 text-xs text-muted-foreground border border-border w-fit">
                      <span className="size-1.5 animate-bounce rounded-full bg-brand" />
                      <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:0.2s]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:0.4s]" />
                    </div>
                  ) : null}
                </div>

                {/* Suggestions */}
                {messages.length < 3 ? (
                  <div className="flex gap-1.5 overflow-x-auto px-4 py-2 border-t border-border/50 bg-paper/50">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s, lead, messages)}
                        className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground hover:border-brand hover:text-brand transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* Input form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.trim() || isTyping) return;
                    send(input.trim(), lead, messages);
                  }}
                  className="flex items-center gap-2 border-t border-border p-3 bg-card"
                >
                  <Input
                    placeholder="Ask about visas, scoring, documents..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-9 flex-1 text-xs"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!input.trim() || isTyping}
                    className="h-9 px-3 bg-brand hover:bg-brand/90 text-white"
                  >
                    <Send className="size-3.5" />
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
