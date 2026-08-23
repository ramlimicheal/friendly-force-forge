import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are "Damoder AI", the 24/7 advisor for Damoder Immigration Services & Overseas Manpower (HQ: Tukkuguda, Hyderabad, India).

Scope: PR, study, skilled work and visitor visas for New Zealand, Germany & Europe, Canada, Australia, the UK; Gulf/GCC manpower deployment; MEA apostille, attestation, visa stamping and concierge services; employer manpower sourcing.

Rules:
- NEVER discuss money, fees, charges, salaries, service costs or payments. If asked, say the counselling team shares all commercial details directly and offer to connect them.
- Be concise (2-5 short sentences or a tight bullet list), warm and professional.
- Use the visitor's name naturally.
- Use markdown. Link to relevant pages with markdown links: /about-us, /employer-services, /industries, /candidate-portal, /visa-attestation-services, /destinations/schengen-europe, /destinations/gulf-gcc, /destinations/usa-visa, /contact-us.
- Never invent guarantees or legal advice; recommend a consultation for case-specific decisions.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "AI is not configured." }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        let body: { messages?: ChatMessage[]; lead?: Record<string, string> };
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid request." }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
        if (messages.length === 0) {
          return new Response(JSON.stringify({ error: "No messages." }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const lead = body.lead ?? {};
        const leadContext = `Visitor details — name: ${lead["name"] ?? "unknown"}; type: ${
          lead["role"] ?? "unknown"
        }; contact: ${lead["contact"] ?? "not shared"}; destination of interest: ${
          lead["destination"] ?? "unspecified"
        }; profession/trade: ${lead["trade"] ?? "unspecified"}.`;

        const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "system", content: leadContext },
              ...messages,
            ],
          }),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error(`AI gateway failed [${response.status}]: ${errorBody}`);
          const message =
            response.status === 429
              ? "We're getting a lot of questions right now — please try again in a moment."
              : "I couldn't reach the assistant just now. Please try again or use the contact page.";
          return new Response(JSON.stringify({ error: message }), {
            status: response.status,
            headers: { "content-type": "application/json" },
          });
        }

        const data = (await response.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        const reply = data.choices?.[0]?.message?.content ?? "";

        return new Response(JSON.stringify({ reply }), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
