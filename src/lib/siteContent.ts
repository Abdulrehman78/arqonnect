/**
 * Canonical ArQonnect marketing-site copy.
 * Product domain (arqonnect.io) = SaaS software only. Agency work = arqonnect.cloud.
 */

import { PADDLE, PRODUCT_CATEGORY, SERVICES_CLOUD_URL } from "@/lib/compliance";

export { PADDLE, PRODUCT_CATEGORY, SERVICES_CLOUD_URL };

export const APP_URL = "https://app.arqonnect.io";

/**
 * Company Cal.com booking link. Override via Amplify env without a code change.
 */
export const CAL_BOOKING_URL =
  process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
  "https://cal.com/abdulrehman-qureshi-5z2o21";

/** Public SaaS plans on /pricing (required for MoR / Paddle domain review). */
export const SHOW_PRICING_PLANS = true;

export const SITE = {
  name: "ArQonnect",
  tagline: "Unified inbox software for customer messaging",
  /** Primary general inquiry (forms, partnerships). */
  email: "info@arqonnect.io",
  emails: {
    demo: "demo@arqonnect.io",
    support: "support@arqonnect.io",
    info: "info@arqonnect.io",
    compliance: "Compliance@arqonnect.io",
  },
  phone: "+923222599852",
  phoneDisplay: "0322-2599852",
  whatsappUrl: "https://wa.me/923222599852",
  address: "4A, R Block Johar Town, Lahore",
  location: "4A, R Block Johar Town, Lahore",
  footerBlurb:
    "Cloud software that unifies WhatsApp, Instagram, Messenger and web chat into one operator inbox. Knowledge-grounded replies, source citations, and human handoff. Subscription billed by Paddle as Merchant of Record.",
  servicesCloudUrl: SERVICES_CLOUD_URL,
  servicesCloudLabel: "Implementation & digital services",
} as const;

/**
 * Top-level nav. Mega menus (Product / Developers / Resources) are in NAV_MENUS.
 * Keep Industries, Case studies, ROI visible per client request.
 */
export const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/roi", label: "ROI calculator" },
  { href: "/pricing", label: "Pricing" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" },
] as const;

/** Flat header links alongside mega menus (Product / Developers / Resources). */
export const TOP_LINKS = [
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/roi", label: "ROI calculator" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export type NavStatus = "live" | "beta" | "soon";

export type NavMenu = {
  id: "product" | "developers" | "resources";
  label: string;
  featured?: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
  };
  columns: {
    heading: string;
    items: {
      label: string;
      href: string;
      blurb?: string;
      status?: NavStatus;
    }[];
  }[];
};

/** Clonvo-style mega-nav, ArQonnect routes and copper-theme chrome. */
export const NAV_MENUS: NavMenu[] = [
  {
    id: "product",
    label: "Product",
    featured: {
      eyebrow: "Software subscription",
      title: "One inbox. Controlled replies.",
      body: "Connect Meta channels, load approved knowledge, and run the operator inbox in app.arqonnect.io.",
      href: "/product",
      cta: "Product overview",
    },
    columns: [
      {
        heading: "Platform",
        items: [
          {
            label: "How it works",
            href: "/process",
            blurb: "Connect channels, load knowledge, go live.",
          },
          {
            label: "Unified inbox",
            href: "/product#inbox",
            blurb: "WhatsApp, Instagram, Messenger, web chat.",
          },
          {
            label: "Knowledge & citations",
            href: "/product#knowledge",
            blurb: "Replies grounded in your approved docs.",
          },
          {
            label: "Human handoff",
            href: "/product#handoff",
            blurb: "Staff take over when confidence is low.",
          },
        ],
      },
      {
        heading: "Outcomes",
        items: [
          {
            label: "Industries",
            href: "/industries",
            blurb: "Clinics, property, retail, and more.",
          },
          {
            label: "Case studies",
            href: "/case-studies",
            blurb: "How teams use the software.",
          },
          {
            label: "ROI calculator",
            href: "/roi",
            blurb: "Model inbox coverage vs staff time.",
          },
          {
            label: "Live demo",
            href: "/demo",
            blurb: "Try the product walkthrough.",
          },
        ],
      },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    featured: {
      eyebrow: "Docs",
      title: "Integrate on your terms",
      body: "Webhooks, web chat embed, and API notes for teams wiring ArQonnect into existing stacks.",
      href: "/developers",
      cta: "Developer hub",
    },
    columns: [
      {
        heading: "Build",
        items: [
          {
            label: "Overview",
            href: "/developers",
            blurb: "Architecture and auth model.",
          },
          {
            label: "Webhooks",
            href: "/developers/webhooks",
            blurb: "Inbound channel events.",
          },
          {
            label: "Web chat",
            href: "/developers/web-chat",
            blurb: "Embed the site widget.",
          },
          {
            label: "Security",
            href: "/legal/security",
            blurb: "Controls and disclosure.",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    featured: {
      eyebrow: "Separate company",
      title: "Need web, SEO, or AI delivery?",
      body: "Project-based digital services are sold by ArQonnect Cloud, not as part of this SaaS subscription.",
      href: SERVICES_CLOUD_URL,
      cta: "Visit arqonnect.cloud",
    },
    columns: [
      {
        heading: "Company",
        items: [
          { label: "About", href: "/about", blurb: "Who builds the product." },
          { label: "Contact", href: "/contact", blurb: "Talk to us." },
          { label: "FAQ", href: "/faq", blurb: "Product questions." },
          {
            label: "Security",
            href: "/legal/security",
            blurb: "Trust overview.",
          },
        ],
      },
    ],
  },
] as const;

export const HERO = {
  kicker: "B2B SaaS · WhatsApp · Instagram · Messenger · Web chat",
  title: "Every conversation, handled.",
  sub: "One inbox. Software you control. Humans when it matters.",
  body: "ArQonnect is cloud software for customer messaging. Unify channels, reply from approved knowledge with citations, and hand off to your team the moment the product should not speak.",
  primaryCta: { href: CAL_BOOKING_URL, label: "Book a demo", external: true },
  secondaryCta: { href: "/product", label: "See the product", external: false },
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
          body: "Transcribe inbound WhatsApp voice notes and reply with text or approved text-to-speech audio. ArQonnect does not offer voice cloning of real people.",
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
      body: "Inbound messages across channels land in one inbox. Configured AI can reply when enabled, with human handoff available.",
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
      body: "The Business Twin mirrors your services, pricing rules, hours and do-not-reply topics — configuration you control inside the software.",
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
    "3-day SaaS trial available. Monthly plans, cancel anytime. Enterprise and custom: unlimited workspaces and channel numbers (contact sales). Prices exclude tax and third-party usage costs (Meta messaging, model APIs, calendar providers).",
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
        "1 workspace",
        "Up to 2 channel numbers",
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
        "3 branch subworkspaces",
        "Up to 5 channel numbers",
        "2,000 AI conversations / month",
        "Web chat + WhatsApp",
        "Business twins per branch",
        "Email automation (guardrailed)",
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
        "10 branch subworkspaces",
        "Up to 15 channel numbers",
        "6,000 AI conversations / month",
        "All 4 messaging channels",
        "Email automation (guardrailed)",
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
      { label: "Workspaces", starter: "1", growth: "1 + 3 branches", scale: "1 + 10 branches" },
      {
        label: "Channel numbers (max)",
        starter: "2",
        growth: "5",
        scale: "15",
      },
      {
        label: "Email automation (guardrailed)",
        starter: "Not included",
        growth: "Included",
        scale: "Included",
      },
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
        starter: "Not included",
        growth: "5 rules",
        scale: "Unlimited",
      },
      {
        label: "Dedicated instance & branding",
        starter: "Not included",
        growth: "Not included",
        scale: "Quoted (white-label)",
      },
      {
        label: "Enterprise / custom limits",
        starter: "Contact sales",
        growth: "Contact sales",
        scale: "Contact sales",
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
      title: "Configured on your knowledge",
      body: "Your approved documents and rules. Replies that stay inside what you allow.",
    },
    {
      title: "Every conversation, connected",
      body: "One software inbox for the channels you enable. Nothing lost between apps.",
    },
    {
      title: "Self-serve after activation",
      body: "Admins update knowledge and settings in the dashboard. No agency retainer required to run the product.",
    },
  ],
  whiteLabel: {
    eyebrow: "White-label software",
    title: "Want ArQonnect under your own brand?",
    body: "White-label is a software deployment option (your domain, branding, dedicated instance), quoted as a SaaS configuration. It is not a custom software build project.",
  },
  faqs: [
    {
      q: "What is the one-time setup fee?",
      a: "It is a one-time software activation charge: connect channels, load your knowledge pack, configure plan limits, and walk your admins through the dashboard. It is not a consulting engagement, website build, or SEO project. Ongoing use is the monthly/yearly subscription.",
    },
    {
      q: "Are there any additional costs?",
      a: "Plan prices cover the ArQonnect software. You pay separately for third-party usage you choose (Meta messaging fees, model APIs where required, calendar providers, optional HubSpot/Salesforce seats). Taxes are calculated at checkout by Paddle.",
    },
    {
      q: "What happens if I reach my conversation limit?",
      a: "Automated assisted replies pause until the next month or you upgrade. Your inbox, history, and data stay available, and your team can keep replying manually. We do not bill silent overages.",
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
      q: "Do you sell SEO, websites, or custom development here?",
      a: "No. arqonnect.io sells the SaaS subscription only. Project-based web, SEO, AEO, and related delivery are offered by ArQonnect Cloud at arqonnect.cloud under a separate statement of work.",
    },
    {
      q: "Who processes payments?",
      a: `${PADDLE.processorBlurb} Billing questions: Compliance@arqonnect.io.`,
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
  title: "Bring your channels. Leave with a live workspace.",
  body: "On a short product demo we map your inbox, knowledge, and booking rules inside the software. You see grounded replies before you subscribe.",
  note: "Opens Cal.com in a new tab. Prefer email? Write demo@arqonnect.io.",
  primary: { href: CAL_BOOKING_URL, label: "Book a demo", external: true },
  secondary: { href: "/roi", label: "Try ROI calculator", external: false },
} as const;

export const PROVIDE = {
  title: "What the business must provide",
  body: "The business provides and pays for its Meta accounts and WhatsApp number, domain/DNS and cloud hosting where required, calendar (Google Calendar or Cal.com), selected AI model accounts where required, and its own approved FAQs, services, pricing, policies and operating information. Third-party usage charges are separate from the product implementation.",
} as const;

export const AVA_WELCOME =
  "Hi, I am Ava on the ArQonnect marketing site. I can help you explore the SaaS product: unified inbox, Business Twin, Starter/Growth/Scale pricing, industries, and docs. For web/SEO/project work see arqonnect.cloud. Book a product demo on Cal.com anytime.";

/** Homepage CTA toward the separate services company (not sold on this domain). */
export const CLOUD_SERVICES_CTA = {
  eyebrow: "Need delivery beyond the software?",
  title: "Project work lives on ArQonnect Cloud",
  body: "Web development, AI transformation, SEO, AEO, GEO, mobile apps, CRM automation, and implementation training are sold by our services company under a statement of work. They are not part of the ArQonnect SaaS subscription billed on this site.",
  href: SERVICES_CLOUD_URL,
  label: "Explore arqonnect.cloud",
} as const;
