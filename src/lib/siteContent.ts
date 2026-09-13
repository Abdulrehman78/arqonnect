/**
 * Canonical site copy from https://unified-agent-ai.lovable.app/
 * Nothing more, nothing less.
 */

export const SITE = {
  name: "ArQonnect",
  tagline: "AI Twin Platform for customer conversations",
  email: "hello@arqonnect.com",
  location: "Lahore, Pakistan",
  footerBlurb:
    "ArQonnect helps businesses respond consistently, organize customer relationships and keep people in control.",
} as const;

export const NAV_LINKS = [
  { href: "/process", label: "How it works" },
  { href: "/services", label: "Services" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export const HERO = {
  kicker: "AI Twin Platform for customer conversations",
  title: "Every customer message, one inbox",
  sub: "answered by AI you control.",
  body: "ArQonnect helps a business manage customer messages from WhatsApp, Instagram, Facebook Messenger and its website in one shared inbox. The AI answers using business-approved information, follows your tone and rules, and transfers to a person whenever confidence is low or the customer requests human help.",
  primaryCta: { href: "/pricing", label: "See plans & pricing" },
  secondaryCta: { href: "/process", label: "How it works" },
} as const;

export const PITCH = {
  eyebrow: "30-second pitch",
  quote:
    "ArQonnect gives your business one place to manage customer conversations across WhatsApp, Instagram, Messenger and web chat. It answers common questions using your approved knowledge, captures customer details, supports appointment booking and brings in a human whenever needed. Your team stays in control of the information, the rules and the final customer experience.",
  pills: [
    "Instant replies, 24/7",
    "No invented facts",
    "Human handoff built in",
    "Booked appointments from chat",
    "Six languages",
    "One audit-ready history",
  ],
} as const;

export const PILLARS = [
  {
    title: "Converse",
    body: "The AI answers FAQs, captures details and routes conversations using your approved business knowledge.",
  },
  {
    title: "Coordinate",
    body: "Contacts, deals, tasks and appointments stay connected in one CRM — across every channel.",
  },
  {
    title: "Control",
    body: "Staff set the tone, services, hours and off-limits topics, and take over any conversation at will.",
  },
] as const;

export const STATS = [
  { value: "4", label: "Channels in one inbox" },
  { value: "7", label: "Languages supported" },
  { value: "24/7", label: "Instant AI coverage" },
  { value: "1", label: "Source of approved truth" },
] as const;

export const COMPARISON = {
  eyebrow: "The real cost of scattered inboxes",
  title: "Every unanswered message is a customer choosing someone else.",
  withoutTitle: "Without ArQonnect",
  withTitle: "With ArQonnect",
  without: [
    "Messages scattered across four apps — some never get answered.",
    "After-hours inquiries wait until morning, then go cold.",
    "Staff repeat the same answers dozens of times a day.",
    "No record of who asked what — leads slip through the cracks.",
    "Booking a customer means a long back-and-forth by chat or phone.",
    "Every new channel means one more tool for the team to check.",
  ],
  with: [
    "One shared inbox — every channel, every message, nothing lost.",
    "Instant, on-brand replies at 2 a.m. — in the customer's language.",
    "AI handles the FAQs; your team handles the conversations that matter.",
    "Every contact, conversation, deal and booking logged automatically.",
    "Live calendar slots offered and confirmed inside the chat.",
    "Add channels, languages and locations as you grow — no rebuild.",
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: "How a business uses ArQonnect",
  lead: "From connecting channels to managing the customer relationship — seven steps.",
  steps: [
    {
      num: "01",
      title: "Connect channels",
      body: "Connect WhatsApp Business, Instagram, Facebook Messenger and the website chat widget.",
    },
    {
      num: "02",
      title: "Add business information",
      body: "Enter services, operating hours, pricing rules, tone and topics the AI should not answer.",
    },
    {
      num: "03",
      title: "Upload knowledge",
      body: "Upload approved FAQs and PDF/DOCX documents. Updated content reaches the AI within minutes.",
    },
    {
      num: "04",
      title: "Receive customer messages",
      body: "Messages from all four channels appear in the unified operator inbox.",
    },
    {
      num: "05",
      title: "Let AI assist",
      body: "The AI detects language, uses relevant business information and prepares a grounded reply.",
    },
    {
      num: "06",
      title: "Hand over when needed",
      body: "Low-confidence, sensitive or human-requested conversations route to staff and AI replies stop.",
    },
    {
      num: "07",
      title: "Manage the relationship",
      body: "Contacts, conversations, leads, deals and appointments are recorded in the CRM.",
    },
  ],
} as const;

export const FEATURES = {
  eyebrow: "Services",
  title: "What the product includes",
  lead: "Phase 0 creates the branded communication platform. Phase 1 adds the complete Business Twin, CRM and booking experience.",
  phases: [
    {
      id: "phase-0",
      label: "Phase 0",
      title: "Branded communication platform",
      items: [
        {
          title: "White-label platform",
          body: "ArQonnect branding, private repository, chosen domain and deployment on ArQonnect's AWS environment.",
        },
        {
          title: "Unified inbox",
          body: "WhatsApp, Instagram Direct, Facebook Messenger and web chat in one operator inbox.",
        },
        {
          title: "Grounded AI replies",
          body: "Answers are created from uploaded business knowledge; source citations are visible to operators.",
        },
        {
          title: "Human handoff",
          body: "Low-confidence conversations or direct human requests route to an available agent.",
        },
        {
          title: "Contact CRM",
          body: "Conversations create or update contact records with tags, notes, history, search and filters.",
        },
        {
          title: "Broadcasts",
          body: "Send approved WhatsApp templates to selected audiences following Meta's messaging-window rules.",
        },
        {
          title: "Voice notes",
          body: "Transcribe inbound WhatsApp voice notes and reply with audio in English or Urdu; voice cloning uses the client's provider key.",
        },
        {
          title: "Languages",
          body: "English, Urdu and Roman Urdu text conversations, with automatic detection and same-language replies.",
        },
        {
          title: "Security baseline",
          body: "Organization-level data separation, encrypted credentials, verified webhooks and admin audit history.",
        },
      ],
    },
    {
      id: "phase-1",
      label: "Phase 1",
      title: "AI Business Twin & operating tools",
      items: [
        {
          title: "AI Business Twin",
          body: "Business-controlled tone, services, pricing rules, operating hours and do-not-reply topics.",
        },
        {
          title: "Full CRM",
          body: "Contacts, companies, deals, activities, tasks, notes, files, meetings, pipelines, owners and full timelines.",
        },
        {
          title: "Appointment booking",
          body: "Live availability from Google Calendar or Cal.com, with confirmation, cancellation and rescheduling.",
        },
        {
          title: "Intent detection",
          body: "Routes FAQs, bookings, complaints, contact details and human requests to the correct workflow.",
        },
        {
          title: "Roles & MFA",
          body: "Platform Admin, Tenant Admin, Supervisor, Agent and Read-Only Auditor roles, with multi-factor authentication.",
        },
        {
          title: "Six languages",
          body: "English, Urdu, Roman Urdu, Arabic, French and Spanish, including Arabic right-to-left display.",
        },
        {
          title: "Widget features",
          body: "Floating, embedded, full-screen and mobile modes with typing indicators, cards, buttons, quick replies and image understanding.",
        },
        {
          title: "Lead capture",
          body: "Website forms create CRM leads; confirmed appointments can send email confirmations and sales notifications.",
        },
        {
          title: "Prompt manager",
          body: "Admins edit, test, version, roll back and restore Business Twin instructions without a code deployment.",
        },
        {
          title: "Optional CRM sync",
          body: "Two-way contact and deal sync with HubSpot or Salesforce using the client's own subscription.",
        },
        {
          title: "Channel polish",
          body: "WhatsApp buttons/templates/catalog, Instagram story/comment replies and Messenger cards/menus where Meta allows.",
        },
        {
          title: "Workflow rules",
          body: "Per-business rules can assign agents, send messages, update CRM fields or trigger a webhook.",
        },
      ],
    },
  ],
} as const;

export const DEMO_FLOW = {
  eyebrow: "Demo",
  title: "Recommended demonstration flow",
  lead: "Lead with the customer experience and business control. Do not describe ArQonnect as an uncontrolled chatbot.",
  steps: [
    "Show all channels in one inbox.",
    "Open a customer question and show the AI reply with its supporting source.",
    "Ask for a human and show the conversation being transferred to an agent.",
    "Open the automatically created contact and its conversation history.",
    "Show Business Twin settings: services, tone, hours and reply restrictions.",
    "Show how an admin uploads or updates approved knowledge.",
    "In Phase 1, demonstrate a real calendar slot being offered and confirmed.",
  ],
} as const;

export const VALUE = {
  eyebrow: "The value to explain",
  title: "What prospective clients get — in plain language.",
  items: [
    {
      title: "One inbox",
      body: "WhatsApp, Instagram, Messenger and web chat — managed from a single shared inbox, no tab-switching.",
    },
    {
      title: "Approved knowledge only",
      body: "Replies are built from information you upload and approve. The AI will not invent facts.",
    },
    {
      title: "Human control, always",
      body: "Staff can take over any conversation, change settings and update knowledge at any time.",
    },
    {
      title: "Never miss a message",
      body: "Inbound messages across all channels land in the inbox — the AI replies instantly, around the clock.",
    },
    {
      title: "Speak their language",
      body: "Detects the customer's language and replies in the same one — up to six languages after Phase 1.",
    },
    {
      title: "Chats into booked appointments",
      body: "Offer live calendar slots, confirm, reschedule and cancel — without leaving the conversation.",
    },
    {
      title: "Leads, organized",
      body: "Contacts, conversations, deals and bookings stay connected in the CRM with full timelines.",
    },
    {
      title: "Your brand, your tone",
      body: "The Business Twin mirrors your services, pricing rules, hours and do-not-reply topics — not a generic chatbot.",
    },
    {
      title: "Audit-ready history",
      body: "Every conversation, setting change and AI reply is logged for admins and auditors.",
    },
    {
      title: "Less repetition for your team",
      body: "Common FAQs are handled automatically, so staff focus on the conversations that need a human.",
    },
    {
      title: "Self-service updates",
      body: "Business admins maintain content and prompts without a developer or code deployment.",
    },
    {
      title: "Grows with you",
      body: "Add channels, languages, locations and CRM sync as the business expands — no rebuild.",
    },
  ],
} as const;

export const PRICING = {
  eyebrow: "SaaS pricing",
  title: "Direct-to-client monthly plans",
  lead: "Setup fee for all tiers: $500–$2,000 one-time, waived or discounted for annual commitment.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "$499–$599/mo",
      audience: "Solo-ish practices testing the water",
      popular: false,
      channels: "Web widget only",
      languages: "1 language (client's choice)",
      included: "1 location, ~500 conversations/mo, standard booking integration",
    },
    {
      id: "growth",
      name: "Growth",
      price: "$699–$899/mo",
      audience: "Core ICP — 5–50 employee clinics/brokerages",
      popular: true,
      channels: "Web widget + WhatsApp",
      languages: "3 languages",
      included:
        "Up to 3 locations, ~2,000 conversations/mo, CRM sync (1 CRM), basic reporting dashboard",
    },
    {
      id: "scale",
      name: "Scale",
      price: "$1,500–$2,500/mo",
      audience: "Multi-location chains, larger brokerages",
      popular: false,
      channels: "All 4 channels (Web + WhatsApp + Instagram + Messenger)",
      languages: "All 6 languages",
      included:
        "Up to 10 locations, unlimited conversations, multi-CRM, custom workflows, priority support, quarterly strategy review",
    },
  ],
  addons: [
    { label: "Additional channel beyond tier's set", price: "+$100–$200/mo each" },
    { label: "Additional language beyond tier's set", price: "+$50–$100/mo each" },
    { label: "CRM automation build-out", price: "+$400–$800/mo" },
    { label: "Additional locations", price: "+$100–$150/mo each" },
  ],
  activation: {
    title: "One-time activation",
    lead: "Project-based, no recurring SaaS fee. Optional maintenance retainer after the support window ends: $200–$500/mo.",
    tiers: [
      {
        name: "Basic activation",
        price: "$2,000–$3,500",
        channels: "Web widget only",
        languages: "1 language",
        includes: "Bot build + training + integration, 30-day support",
      },
      {
        name: "Full activation",
        price: "$5,000–$8,000",
        channels: "Web widget + WhatsApp",
        languages: "3 languages",
        includes: "Bot + CRM integration, 60-day support",
      },
      {
        name: "Enterprise activation",
        price: "$10,000–$15,000+",
        channels: "All 4 channels",
        languages: "All 6 languages",
        includes: "Multi-location rollout, custom workflows, dedicated onboarding, 90-day support",
      },
    ],
  },
} as const;

export const FAQ = {
  eyebrow: "Questions, answered",
  title: "Frequently asked questions",
  items: [
    {
      q: "Will the AI say things we haven't approved?",
      a: "No. Replies are grounded in the knowledge you upload and approve — FAQs, documents, services, pricing rules. When the AI isn't confident, it hands the conversation to a human instead of guessing.",
    },
    {
      q: "What happens when a customer asks for a person?",
      a: "The conversation routes to an available team member and AI replies stop. Staff can also take over any conversation at any time, and hand it back when they're done.",
    },
    {
      q: "How long does it take to get started?",
      a: "Connect your channels, add your business information and upload your approved knowledge. Updated content reaches the AI within minutes — no developer or code deployment needed for day-to-day changes.",
    },
    {
      q: "Which languages does it support?",
      a: "Phase 0 supports English, Urdu and Roman Urdu. Phase 1 expands to six languages — English, Urdu, Roman Urdu, Arabic, French and Spanish — with automatic detection and same-language replies, including Arabic right-to-left display.",
    },
    {
      q: "Do our customers need to install anything?",
      a: "No. They keep using WhatsApp, Instagram, Messenger or your website chat exactly as they do today. ArQonnect works behind the scenes in one inbox for your team.",
    },
    {
      q: "What do we need to provide?",
      a: "Your Meta accounts and WhatsApp number, domain/DNS, calendar (Google Calendar or Cal.com), selected LLM accounts, and your approved business content. Third-party usage charges are separate from the product implementation.",
    },
  ],
} as const;

export const FINAL_CTA = {
  title: "Stop losing customers to unanswered messages.",
  body: "See your own business knowledge answering real customer questions — in a live demo tailored to your channels, your tone and your booking flow.",
  note: "Setup fee waived or discounted with an annual commitment.",
  primary: { href: "/contact", label: "Book a demo" },
  secondary: { href: "/pricing", label: "Compare plans" },
} as const;

export const PROVIDE = {
  title: "What the business must provide",
  body: "The business provides and pays for its Meta accounts and WhatsApp number, domain/DNS and AWS, Google Calendar or Cal.com, selected LLM accounts, Clerk subscription where required, and its own approved FAQs, services, pricing, policies and operating information. Third-party usage charges are separate from the product implementation.",
} as const;

export const AVA_WELCOME =
  "Hi — I'm Ava, ArQonnect's AI assistant. I can help you explore our unified inbox, Business Twin, pricing, and how we'd fit your channels. What would you like to know?";
