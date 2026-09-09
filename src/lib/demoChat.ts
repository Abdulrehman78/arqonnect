/** Shared knowledge + reply helpers for the hero demo chat */

export const DEMO_SYSTEM_PROMPT = `You are Ava, ArQonnect's friendly demo AI assistant on the marketing site.
Answer helpfully, clearly, and briefly (2–4 sentences unless the user asks for detail).
Stay in character as a product specialist for ArQonnect.

About ArQonnect:
- Builds humanoid AI chatbots and voice agents that answer calls/chats, qualify leads, and book appointments 24/7.
- Full stack: chat, voice, CRM sync (HubSpot, Salesforce, or built-in), automation, SEO/AEO/GEO/AIO growth.
- Serves healthcare, real estate, law, education, ecommerce, finance, SaaS — US, UK, Canada, Australia, Europe.
- Typical go-live for first agent: about two weeks.
- Pricing is tailored to your stack and volume — confirmed on a short demo call (no one-size public rate card).
- CTA: offer to book a demo at /contact or /demo when relevant.

If asked something unrelated, answer briefly then steer back to how ArQonnect can help.
Never invent private customer data. Do not claim you already booked a meeting — invite them to schedule.`;

type KnowledgeHit = { keys: string[]; answer: string };

const KNOWLEDGE: KnowledgeHit[] = [
  {
    keys: ["price", "pricing", "cost", "how much", "$", "fee", "plan", "subscription"],
    answer:
      "Pricing is set around your channels, volume, and how much of the AI Twin stack you need — we confirm a clear package on a short demo call. Want me to point you to Book a Demo?",
  },
  {
    keys: ["book", "demo", "meeting", "schedule", "calendar", "call me", "talk to"],
    answer:
      "Happy to help you get on the calendar. You can book a same-week demo from the Book a Demo page — mornings and afternoons usually have openings. Want me to point you there?",
  },
  {
    keys: ["voice", "phone", "call", "receptionist", "ivr"],
    answer:
      "Our voice agents sound natural on live calls — not scripted IVR. They listen, answer questions, qualify, and book appointments 24/7. You can try the voice flow on the full demo page.",
  },
  {
    keys: ["chat", "chatbot", "message", "whatsapp", "sms", "dm"],
    answer:
      "Website chat (and WhatsApp, SMS, social DMs) run on the same agent memory — so a lead gets an instant human-like reply, gets qualified, and can book without waiting for your team.",
  },
  {
    keys: ["crm", "hubspot", "salesforce", "pipeline", "lead"],
    answer:
      "Every call, chat, and booking can write straight into HubSpot, Salesforce, or ArQonnect's CRM — one record across channels, no spreadsheet handoffs.",
  },
  {
    keys: ["seo", "aeo", "geo", "aio", "rank", "search", "google"],
    answer:
      "We combine SEO, AEO, GEO, and AIO so you show up in classic Google results and in AI answer surfaces like Perplexity and AI Overviews — not just one channel.",
  },
  {
    keys: ["who", "what is arq", "what do you", "company", "about"],
    answer:
      "ArQonnect builds AI employees — humanoid chat and voice agents plus CRM and growth — so every inbound lead gets answered and moved to a next step, any hour.",
  },
  {
    keys: ["how long", "timeline", "setup", "launch", "go live", "implement"],
    answer:
      "Most clients go live with their first voice or chat agent in about two weeks. CRM and the rest of the stack roll out module by module after that.",
  },
  {
    keys: ["industry", "healthcare", "real estate", "dental", "law", "ecommerce"],
    answer:
      "We work with service businesses and growing teams — healthcare, real estate, law, education, ecommerce, finance, SaaS — with tone and flows tuned to each market.",
  },
  {
    keys: ["hello", "hi ", "hey", "good morning", "good afternoon"],
    answer:
      "Hey! I'm Ava, ArQonnect's demo assistant. Ask me anything about our agents, pricing, CRM, or how we'd fit your business — I'll answer straight.",
  },
];

function scoreHit(text: string, hit: KnowledgeHit): number {
  let score = 0;
  for (const key of hit.keys) {
    if (text.includes(key)) score += key.length > 4 ? 2 : 1;
  }
  return score;
}

/** Knowledge-grounded fallback when no LLM API key is configured */
export function localDemoReply(userText: string, history: Array<{ role: string; content: string }> = []): string {
  const t = userText.toLowerCase().trim();
  if (!t) {
    return "Go ahead and type a question — pricing, voice agents, CRM, timelines, whatever you need.";
  }

  const scored = KNOWLEDGE.map((hit) => ({ hit, score: scoreHit(t, hit) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length >= 2 && scored[0].score > 0 && scored[1].score > 0) {
    return `${scored[0].hit.answer} ${scored[1].hit.answer}`;
  }

  if (scored.length >= 1 && scored[0].score > 0) {
    const base = scored[0].hit.answer;
    const askingHow = /\b(how|why|can you|could you|would you|explain)\b/.test(t);
    if (askingHow) {
      return `${base} If you share a bit about your industry or channels (phone, web chat, WhatsApp), I can tailor that further.`;
    }
    return base;
  }

  // Conversational fallback — still answers, not a dead "flagged for the team" only
  const priorUser = history.filter((m) => m.role === "user").length;
  const opener =
    priorUser > 2
      ? "Got it."
      : "Good question.";

  return `${opener} From what you asked — “${userText.slice(0, 120)}${userText.length > 120 ? "…" : ""}” — here's the short take: ArQonnect's agents can handle that kind of customer conversation on chat or voice, qualify the lead, and book a next step automatically. Tell me whether you care more about phone, website chat, or CRM sync and I'll go deeper — or book a live demo and we'll map it to your stack.`;
}
