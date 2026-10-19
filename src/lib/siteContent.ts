/**
 * Canonical ArQonnect marketing-site copy.
 */

export const APP_URL = "https://app.arqonnect.io";

/**
 * Company Cal.com booking link. "Book a demo / meeting" CTAs open this
 * in a new tab. Override via Netlify env without a code change.
 */
export const CAL_BOOKING_URL =
  process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
  "https://cal.com/abdul-rehman/30min";

/** Public SaaS plans on /pricing (required for MoR / Paddle domain review). */
export const SHOW_PRICING_PLANS = true;

export const SITE = {
  name: "ArQonnect",
  tagline: "AI Twin Platform for customer conversations",
  /** Primary support / demo inbox (case-preserving for display). */
  email: "Support@arqonnect.io",
  emails: {
    support: "Support@arqonnect.io",
    hello: "hello@arqonnect.io",
    compliance: "Compliance@arqonnect.io",
  },
  phone: "+923065101041",
  phoneDisplay: "92306-5101041",
  whatsappUrl: "https://wa.me/923065101041",
  address: "4A, R Block Johar Town, Lahore",
  location: "4A, R Block Johar Town, Lahore",
  footerBlurb:
    "ArQonnect helps businesses respond consistently, organize customer relationships and keep people in control.",
} as const;

export const NAV_LINKS = [
  { href: "/process", label: "How it works" },
  { href: "/services", label: "Services" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const HERO = {
  kicker: "AI Twin Platform for customer conversations",
  title: "Every customer message, one inbox",
  sub: "answered by AI you control.",
  body: "ArQonnect helps a business manage customer messages from WhatsApp, Instagram, Facebook Messenger and its website in one shared inbox. The AI answers using business-approved information, follows your tone and rules, and transfers to a person whenever confidence is low or the customer requests human help.",
  primaryCta: { href: CAL_BOOKING_URL, label: "Book a demo", external: true },
  secondaryCta: { href: "/process", label: "How it works", external: false },
} as const;

export const PITCH = {
  eyebrow: "30-second pitch",
  quote:
    "ArQonnect gives your business one place to manage customer conversations across WhatsApp, Instagram, Messenger and web chat. It answers common questions using your approved knowledge, captures customer details, supports appointment booking and brings in a human whenever needed. Your team stays in control of the information, the rules and the final customer experience.",
  pills: [
    "Instant replies, 24/7",
    "Approved knowledge only",
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
  { value: "6", label: "Languages supported" },
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
  lead: "The complete AI Twin Platform: branded inbox, Business Twin, CRM and booking — delivered as one product.",
  phases: [
    {
      id: "platform",
      label: "Platform",
      title: "Branded communication platform",
      items: [
        {
          title: "White-label platform",
          body: "ArQonnect branding, private repository, chosen domain and deployment on ArQonnect's cloud environment.",
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
      id: "twin",
      label: "Business Twin",
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
  eyebrow: "What you will see",
  title: "A live demo of your AI Twin",
  lead: "In a short call we walk through how ArQonnect answers with your approved knowledge, keeps humans in control, and books appointments from chat. You leave knowing exactly what go-live looks like for your channels.",
  steps: [
    "See WhatsApp, Instagram, Messenger and web chat land in one shared inbox.",
    "Ask a real customer-style question and watch a grounded AI reply with its supporting source.",
    "Request a human and watch the conversation transfer to an agent while AI replies stop.",
    "Open the contact record created from the chat, with history attached.",
    "Review Business Twin controls: services, tone, hours and topics the AI must not answer.",
    "See how your team uploads or updates approved knowledge without a code deploy.",
    "Book a real calendar slot from chat (Google Calendar or Cal.com) and confirm it.",
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
      body: "Replies are built from information you upload and approve, with human handoff when confidence is low.",
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
      body: "Detects the customer's language and replies in the same one — up to six languages.",
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
  eyebrow: "Simple plans. Real connections.",
  title: "ArQonnect pricing",
  titleMuted: "Built for your next stage.",
  lead: "One AI twin. Every customer conversation. Choose the plan that moves your business forward.",
  badges: [
    "Done-for-you setup",
    "Human support, always",
    "No hidden platform fees",
  ],
  footnote:
    "3-day SaaS trial available. Monthly plans, cancel anytime. Prices exclude tax and third-party usage costs (Meta messaging, model APIs, calendar providers).",
  billingNote:
    "Subscriptions are billed by Paddle as Merchant of Record. Card statements may show Paddle / Paddle.com. See Terms and Refund Policy.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      blurb: "A smarter start for your business.",
      monthly: 499,
      setup: 2000,
      popular: false,
      cta: "Get started with Starter",
      featureEyebrow: "Your foundation, connected",
      features: [
        "1 business location",
        "500 AI conversations / month",
        "Web chat channel",
        "1 business twin",
        "Contact management & booking",
        "2 team seats",
        "Email support",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      blurb: "More connections. More possibilities.",
      monthly: 899,
      setup: 4000,
      popular: true,
      cta: "Get started with Growth",
      featureEyebrow: "Everything in Starter, plus",
      features: [
        "Up to 2 business locations",
        "2,000 AI conversations / month",
        "Web chat + WhatsApp",
        "A business twin for each location",
        "Full CRM & appointment booking",
        "5 team seats · 5 workflow rules",
        "Email & chat support",
      ],
    },
    {
      id: "scale",
      name: "Scale",
      blurb: "Power your multi-location business.",
      monthly: 1499,
      setup: 6500,
      popular: false,
      cta: "Get started with Scale",
      featureEyebrow: "Everything in Growth, plus",
      features: [
        "Up to 3 business locations",
        "6,000 AI conversations / month",
        "All 4 messaging channels",
        "Business twins with custom rules",
        "Full CRM + HubSpot or Salesforce",
        "15 team seats · unlimited workflows",
        "Voice notes & priority support",
      ],
    },
  ],
  comparison: {
    eyebrow: "The details, without the guesswork",
    title: "Find your perfect fit.",
    rows: [
      { label: "Business locations", starter: "1", growth: "2", scale: "3" },
      {
        label: "AI conversations / month",
        starter: "500",
        growth: "2,000",
        scale: "6,000",
      },
      { label: "Team seats", starter: "2", growth: "5", scale: "15" },
      {
        label: "Messaging channels",
        starter: "Web chat",
        growth: "Web + WhatsApp",
        scale: "All 4 channels",
      },
      {
        label: "Appointment booking",
        starter: "Included",
        growth: "Included",
        scale: "Included",
      },
      {
        label: "CRM",
        starter: "Contact management",
        growth: "Full CRM",
        scale: "Full CRM + sync",
      },
      {
        label: "Workflow rules",
        starter: "—",
        growth: "5 rules",
        scale: "Unlimited",
      },
      {
        label: "Dedicated instance & branding",
        starter: "—",
        growth: "—",
        scale: "Quoted (white-label)",
      },
      {
        label: "Support response",
        starter: "2 business days",
        growth: "1 business day",
        scale: "4 business hours",
      },
    ],
  },
  pillars: [
    {
      title: "Trained on your business",
      body: "Your knowledge. Your voice. Customer answers that feel like you.",
    },
    {
      title: "Every conversation, connected",
      body: "Bring your channels together. Never miss the next opportunity.",
    },
    {
      title: "Built and managed for you",
      body: "From the first setup to daily support, we stay with you.",
    },
  ],
  whiteLabel: {
    eyebrow: "White-label",
    title: "Want ArQonnect under your own brand?",
    body: "White-label deployments are scoped with your team: your domain, your branding, and a dedicated instance. Tell us what you need and we will put a proposal together.",
  },
  faqs: [
    {
      q: "What is included in the one-time setup?",
      a: "We connect your channels, load your business knowledge, configure your AI business twin, and train your team. White-label also includes your branding, dedicated instance, and the integrations in your plan.",
    },
    {
      q: "Are there any additional costs?",
      a: "Plan prices cover the ArQonnect platform. You pay separately for third-party usage you choose (Meta messaging fees, AI model accounts where required, calendar providers, and optional HubSpot/Salesforce seats). Taxes are calculated at checkout by Paddle.",
    },
    {
      q: "What happens if I reach my conversation limit?",
      a: "Automated AI replies pause until the next month or you upgrade. Your inbox, history, and data stay available, and your team can keep replying manually. We do not bill silent overages.",
    },
    {
      q: "Can I change or cancel my plan?",
      a: "Yes. Upgrade or downgrade with us any time. Cancel from the dashboard; access continues through the end of the paid period. See the Refund Policy for first-invoice refunds.",
    },
    {
      q: "How does annual billing work?",
      a: "Yearly billing gives you one month free (pay for 11 months). Charged in advance through Paddle. Monthly remains available.",
    },
    {
      q: "What is the difference between SaaS and white-label?",
      a: "SaaS plans run on ArQonnect branding at app.arqonnect.io. White-label is a scoped deployment on your domain and brand with a dedicated instance, quoted separately.",
    },
    {
      q: "Who processes payments?",
      a: "Paddle is our Merchant of Record. Paddle handles checkout, tax, invoices, and card chargebacks. Statements may show Paddle. Billing questions: Compliance@arqonnect.io.",
    },
  ],
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
      a: "ArQonnect supports six languages — English, Urdu, Roman Urdu, Arabic, French and Spanish — with automatic detection and same-language replies, including Arabic right-to-left display.",
    },
    {
      q: "Do our customers need to install anything?",
      a: "No. They keep using WhatsApp, Instagram, Messenger or your website chat exactly as they do today. ArQonnect works behind the scenes in one inbox for your team.",
    },
    {
      q: "What do we need to provide?",
      a: "Your Meta accounts and WhatsApp number, domain/DNS, calendar (Google Calendar or Cal.com), selected AI model accounts where required, and your approved business content. Third-party usage charges are separate from the product implementation.",
    },
  ],
} as const;

export const FINAL_CTA = {
  title: "Stop losing customers to unanswered messages.",
  body: "See your own business knowledge answering real customer questions — in a live demo tailored to your channels, your tone and your booking flow.",
  note: "Opens Cal.com in a new tab. Prefer email? Write Support@arqonnect.io.",
  primary: { href: CAL_BOOKING_URL, label: "Book a demo", external: true },
  secondary: { href: "/process", label: "How it works", external: false },
} as const;

export const PROVIDE = {
  title: "What the business must provide",
  body: "The business provides and pays for its Meta accounts and WhatsApp number, domain/DNS and cloud hosting where required, calendar (Google Calendar or Cal.com), selected AI model accounts where required, and its own approved FAQs, services, pricing, policies and operating information. Third-party usage charges are separate from the product implementation.",
} as const;

export const AVA_WELCOME =
  "Hi — I'm Ava, ArQonnect's AI assistant. I can help you explore our unified inbox, Business Twin, Starter/Growth/Scale pricing, and how we'd fit your channels. Ask anything, or book a meeting on Cal.com.";
