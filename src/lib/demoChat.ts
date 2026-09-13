/** Shared knowledge + reply helpers for the hero demo chat — aligned to unified-agent-ai.lovable.app */

export const DEMO_SYSTEM_PROMPT = `You are Ava, ArQonnect's friendly demo AI assistant on the marketing site.
Answer helpfully, clearly, and briefly (2–4 sentences unless the user asks for detail).
Stay in character as a product specialist for ArQonnect.

About ArQonnect:
- AI Twin Platform for customer conversations: one shared inbox for WhatsApp, Instagram, Facebook Messenger and website chat.
- AI answers using business-approved knowledge only — no invented facts. Human handoff when confidence is low or the customer asks for a person.
- Business Twin: tone, services, hours, pricing rules, and do-not-reply topics controlled by staff.
- CRM for contacts, deals, tasks and appointments; booking via Google Calendar or Cal.com in Phase 1.
- Languages: Phase 0 English, Urdu, Roman Urdu; Phase 1 adds Arabic, French, Spanish.
- SaaS plans: Starter $499–$599/mo, Growth $699–$899/mo (most popular), Scale $1,500–$2,500/mo. Setup fee $500–$2,000 one-time, waived/discounted annually.
- CTA: offer to book a demo at /contact or compare plans at /pricing when relevant.

If asked something unrelated, answer briefly then steer back to how ArQonnect can help.
Never invent private customer data. Do not claim you already booked a meeting — invite them to schedule.`;

type KnowledgeHit = { keys: string[]; answer: string };

const KNOWLEDGE: KnowledgeHit[] = [
  {
    keys: ["price", "pricing", "cost", "how much", "$", "fee", "plan", "subscription", "starter", "growth", "scale"],
    answer:
      "SaaS plans are Starter ($499–$599/mo, web widget), Growth ($699–$899/mo, web + WhatsApp — most popular), and Scale ($1,500–$2,500/mo, all four channels). Setup is $500–$2,000 one-time, often waived or discounted with annual commitment. Want the pricing page?",
  },
  {
    keys: ["book", "demo", "meeting", "schedule", "calendar", "call me", "talk to"],
    answer:
      "You can book a live demo tailored to your channels, tone and booking flow from the Book a demo page. We'll show grounded replies and human handoff on your use case.",
  },
  {
    keys: ["human", "handoff", "person", "agent", "transfer", "unsure", "confident"],
    answer:
      "When confidence is low, the topic is sensitive, or the customer asks for a person, the conversation routes to staff and AI replies stop. Your team can also take over any chat at any time.",
  },
  {
    keys: ["chat", "chatbot", "message", "whatsapp", "instagram", "messenger", "inbox", "channel"],
    answer:
      "WhatsApp, Instagram, Facebook Messenger and website chat land in one shared inbox. The AI replies from your approved knowledge; nothing invents facts outside what you upload.",
  },
  {
    keys: ["crm", "hubspot", "salesforce", "pipeline", "lead", "contact"],
    answer:
      "Conversations create or update contacts with history. Phase 1 adds full CRM (deals, tasks, pipelines) and optional two-way sync with HubSpot or Salesforce using your own subscription.",
  },
  {
    keys: ["language", "languages", "urdu", "arabic", "hindi", "spanish", "french"],
    answer:
      "Phase 0: English, Urdu and Roman Urdu with auto-detection. Phase 1 expands to six languages including Arabic (RTL), French and Spanish — same-language replies.",
  },
  {
    keys: ["who", "what is arq", "what do you", "company", "about", "twin"],
    answer:
      "ArQonnect is an AI Twin Platform for customer conversations — one inbox, approved knowledge only, human control always. Your Business Twin mirrors your services, tone, hours and off-limits topics.",
  },
  {
    keys: ["how long", "timeline", "setup", "launch", "go live", "implement", "start"],
    answer:
      "Connect channels, add business information and upload approved knowledge. Updated content reaches the AI within minutes — no code deploy for day-to-day changes.",
  },
  {
    keys: ["booking", "appointment", "calendar", "cal.com"],
    answer:
      "Phase 1 offers live calendar slots from Google Calendar or Cal.com inside the chat — confirm, reschedule or cancel without leaving the conversation.",
  },
  {
    keys: ["invent", "hallucin", "approved", "knowledge", "faq", "truth"],
    answer:
      "Replies are grounded in FAQs and documents you upload and approve. When the AI isn't confident, it hands off to a human instead of guessing.",
  },
  {
    keys: ["hello", "hi ", "hey", "good morning", "good afternoon"],
    answer:
      "Hey! I'm Ava. Ask me about the unified inbox, Business Twin, pricing, languages, or handoff — I'll keep it straight.",
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
export function localDemoReply(
  userText: string,
  history: Array<{ role: string; content: string }> = []
): string {
  const t = userText.toLowerCase().trim();
  if (!t) {
    return "Go ahead and type a question — pricing, inbox, languages, handoff, whatever you need.";
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
      return `${base} If you share your channels (WhatsApp, web, Instagram, Messenger), I can tailor that further.`;
    }
    return base;
  }

  const priorUser = history.filter((m) => m.role === "user").length;
  const opener = priorUser > 2 ? "Got it." : "Good question.";

  return `${opener} From what you asked — “${userText.slice(0, 120)}${userText.length > 120 ? "…" : ""}” — ArQonnect keeps those customer messages in one inbox with grounded AI replies and human handoff. Tell me whether you care more about channels, pricing, or Business Twin control — or book a live demo and we'll map it to your business.`;
}
