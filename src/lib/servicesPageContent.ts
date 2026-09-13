/** Services page content aligned to arqonnect-ai-twin-services.html */

export const SERVICES_HERO = {
  kicker: "ArQonnect product guide",
  title: "One Twin. Every channel.",
  body: "Keep scrolling — two phases, twenty-one pieces, one inbox that never drops a customer across WhatsApp, Instagram, Messenger and web chat. Answers come from your approved knowledge. A human is one tap away.",
  primary: { href: "/contact", label: "Book a Demo" },
  secondary: { href: "#how-it-works", label: "See how it works" },
} as const;

export const SERVICES_EXPLAIN = {
  eyebrow: "The simple explanation",
  title: "What ArQonnect actually does",
  body: "ArQonnect helps a business manage customer messages from WhatsApp, Instagram, Facebook Messenger and its website in one shared inbox. The AI answers using business-approved information, follows your tone and rules, and transfers to a person whenever confidence is low or the customer asks for a human.",
  pitchLabel: "30-second pitch",
  pitch:
    "ArQonnect gives your business one place to manage customer conversations across WhatsApp, Instagram, Messenger and web chat. It answers common questions using your approved knowledge, captures customer details, supports appointment booking and brings in a human whenever needed. Your team stays in control of the information, the rules and the final customer experience.",
} as const;

export const SERVICES_STEPS = [
  {
    num: "1",
    title: "Connect channels",
    body: "Connect WhatsApp Business, Instagram, Facebook Messenger and the website chat widget.",
  },
  {
    num: "2",
    title: "Add business information",
    body: "Enter services, operating hours, pricing rules, tone and topics the AI should not answer.",
  },
  {
    num: "3",
    title: "Upload knowledge",
    body: "Upload approved FAQs and PDF/DOCX documents. Updated content reaches the AI within minutes.",
  },
  {
    num: "4",
    title: "Receive customer messages",
    body: "Messages from all four channels appear in the unified operator inbox.",
  },
  {
    num: "5",
    title: "Let AI assist",
    body: "The AI detects language, uses relevant business information and prepares a grounded reply.",
  },
  {
    num: "6",
    title: "Hand over when needed",
    body: "Low-confidence, sensitive or human-requested conversations route to staff, and AI replies stop.",
  },
  {
    num: "7",
    title: "Manage the relationship",
    body: "Contacts, conversations, leads, deals and appointments are all recorded in the CRM.",
  },
] as const;

export type ProductShot = "dashboard" | "inbox" | "crm" | "analytics";

export const PRODUCT_SHOT: Record<ProductShot, string> = {
  dashboard: "/images/product/dashboard.jpg",
  inbox: "/images/product/inbox.jpg",
  crm: "/images/product/crm.jpg",
  analytics: "/images/product/analytics.jpg",
};

export type RoomCard = {
  title: string;
  body: string;
  tags: string[];
  shot: ProductShot;
};

export const PHASE_0_BLURB =
  "The branded, working inbox: your channels, your domain, grounded AI replies and a first CRM layer.";

export const PHASE_0_ROOMS: RoomCard[] = [
  {
    title: "White-label platform",
    body: "ArQonnect branding, a private repository, your chosen domain and deployment on ArQonnect's AWS environment.",
    tags: ["Your branding", "Custom domain", "AWS hosted"],
    shot: "dashboard",
  },
  {
    title: "Unified inbox",
    body: "WhatsApp, Instagram Direct, Facebook Messenger and web chat conversations in one operator inbox.",
    tags: ["WhatsApp", "Instagram", "Web chat"],
    shot: "inbox",
  },
  {
    title: "Grounded AI replies",
    body: "Answers are built from your uploaded business knowledge, with source citations visible to operators.",
    tags: ["Cited sources", "Approved knowledge"],
    shot: "inbox",
  },
  {
    title: "Human handoff",
    body: "Low-confidence conversations, or a direct request for a human, route to an available agent.",
    tags: ["Live routing", "Confidence-based"],
    shot: "inbox",
  },
  {
    title: "Contact CRM",
    body: "Conversations create or update contact records, with tags, notes, history, search and filters.",
    tags: ["Tags & notes", "Search & filters"],
    shot: "crm",
  },
  {
    title: "Broadcasts",
    body: "Send approved WhatsApp templates to selected audiences following Meta's messaging-window rules.",
    tags: ["Templates", "Meta-compliant"],
    shot: "analytics",
  },
  {
    title: "Voice notes",
    body: "Transcribe inbound WhatsApp voice notes and reply with audio in English or Urdu; voice cloning uses the client's provider key.",
    tags: ["Transcribe", "Audio reply"],
    shot: "inbox",
  },
  {
    title: "Languages",
    body: "English, Urdu and Roman Urdu text conversations, with automatic detection and same-language replies.",
    tags: ["Auto-detect", "Same-language"],
    shot: "analytics",
  },
  {
    title: "Security baseline",
    body: "Organization-level data separation, encrypted credentials, verified webhooks and admin audit history.",
    tags: ["Encryption", "Audit history"],
    shot: "dashboard",
  },
];

export const PHASE_1_BLURB =
  "The full Business Twin: pricing rules, booking, deeper CRM, roles and the tools an admin needs to run it day to day.";

export const PHASE_1_ROOMS: RoomCard[] = [
  {
    title: "AI Business Twin",
    body: "Business-controlled tone, services, pricing rules, operating hours and do-not-reply topics.",
    tags: ["Tone", "Rules", "Hours"],
    shot: "dashboard",
  },
  {
    title: "Full CRM",
    body: "Contacts, companies, deals, activities, tasks, notes, files, meetings, pipelines, owners and full timelines.",
    tags: ["Pipelines", "Timelines"],
    shot: "crm",
  },
  {
    title: "Appointment booking",
    body: "Live availability from Google Calendar or Cal.com, with confirmation, cancellation and rescheduling.",
    tags: ["Google Calendar", "Cal.com"],
    shot: "crm",
  },
  {
    title: "Intent detection",
    body: "Routes FAQs, bookings, complaints, contact details and human requests to the correct workflow.",
    tags: ["Routing", "Workflows"],
    shot: "analytics",
  },
  {
    title: "Roles & MFA",
    body: "Platform Admin, Tenant Admin, Supervisor, Agent and Read-Only Auditor roles, with multi-factor authentication.",
    tags: ["Roles", "MFA"],
    shot: "dashboard",
  },
  {
    title: "Six languages",
    body: "English, Urdu, Roman Urdu, Arabic, French and Spanish, including Arabic right-to-left display.",
    tags: ["6 languages", "RTL"],
    shot: "analytics",
  },
  {
    title: "Widget features",
    body: "Floating, embedded, full-screen and mobile modes with typing indicators, cards, buttons, quick replies and image understanding.",
    tags: ["Widget", "Quick replies"],
    shot: "inbox",
  },
  {
    title: "Lead capture",
    body: "Website forms create CRM leads; confirmed appointments can send email confirmations and sales notifications.",
    tags: ["Forms", "Notifications"],
    shot: "crm",
  },
  {
    title: "Prompt manager",
    body: "Admins edit, test, version, roll back and restore Business Twin instructions without a code deployment.",
    tags: ["Versioning", "No deploy"],
    shot: "dashboard",
  },
  {
    title: "Optional CRM sync",
    body: "Two-way contact and deal sync with HubSpot or Salesforce using the client's own subscription.",
    tags: ["HubSpot", "Salesforce"],
    shot: "crm",
  },
  {
    title: "Channel polish",
    body: "WhatsApp buttons/templates/catalog, Instagram story/comment replies and Messenger cards/menus where Meta allows.",
    tags: ["WhatsApp", "Instagram", "Messenger"],
    shot: "analytics",
  },
  {
    title: "Workflow rules",
    body: "Per-business rules can assign agents, send messages, update CRM fields or trigger a webhook.",
    tags: ["Automations", "Webhooks"],
    shot: "analytics",
  },
];

export const CAPABILITY_GROUPS = [
  {
    id: "conversations",
    label: "Conversations",
    items: [
      "Unified inbox",
      "Grounded AI replies",
      "Human handoff",
      "Intent detection",
      "Voice notes",
      "Languages",
      "Six languages",
      "Widget features",
      "Broadcasts",
      "Channel polish",
    ],
  },
  {
    id: "crm",
    label: "CRM & bookings",
    items: [
      "Contact CRM",
      "Full CRM",
      "Appointment booking",
      "Lead capture",
      "Optional CRM sync",
      "Workflow rules",
    ],
  },
  {
    id: "control",
    label: "Setup & control",
    items: [
      "White-label platform",
      "AI Business Twin",
      "Prompt manager",
      "Roles & MFA",
      "Security baseline",
    ],
  },
] as const;

export const DEMO_FLOW = [
  "Show all four channels landing in one inbox.",
  "Open a customer question and show the AI reply with its supporting source.",
  "Ask for a human and show the conversation transferring to an agent.",
  "Open the automatically created contact and its conversation history.",
  "Show Business Twin settings: services, tone, hours and reply restrictions.",
  "Show how an admin uploads or updates approved knowledge.",
  "In Phase 1, demonstrate a real calendar slot being offered and confirmed.",
] as const;

export const VALUE_CARDS = [
  {
    title: "One inbox",
    body: "WhatsApp, Instagram, Messenger and web chat — managed from a single shared inbox.",
  },
  {
    title: "Approved knowledge",
    body: "Replies are built from information you upload and approve. The AI will not invent facts.",
  },
  {
    title: "Human control",
    body: "Staff can take over any conversation, change settings and update knowledge at any time.",
  },
  {
    title: "Organized leads",
    body: "Contacts, conversations, deals and bookings stay connected in the CRM with full timelines.",
  },
  {
    title: "Multilingual",
    body: "Detects the customer's language and replies in the same one — up to six languages in Phase 1.",
  },
  {
    title: "Self-service updates",
    body: "Business admins maintain content and prompts without a developer or code deployment.",
  },
] as const;

export const GUARDRAILS = [
  "Live AI phone calls",
  "Reminder / no-show automation chains",
  "Lead scoring models",
  "Telegram, Slack, Discord or SMS as channels",
  "Automatic website or document crawling",
  "Full analytics export to CSV / Excel / PDF",
  "On-prem or air-gapped deployment",
  "SOC 2 or ISO 27001 certification claims",
  "Enterprise SSO / SAML or deep custom Salesforce automation",
] as const;

export const PROVIDES = [
  "Meta accounts and WhatsApp number",
  "Domain / DNS and AWS",
  "Google Calendar or Cal.com",
  "Selected LLM accounts",
  "Clerk subscription where required",
  "Approved FAQs, services, pricing, policies and operating information",
] as const;

export const PROVIDES_NOTE =
  "Third-party usage charges are separate from the ArQonnect product implementation.";
