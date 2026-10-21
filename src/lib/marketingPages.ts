/**
 * Industries, case studies, and ROI calculator copy.
 * Keep facts consistent with siteContent (6 languages, 4 channels).
 */

export const INDUSTRIES = {
  eyebrow: "Who we serve",
  title: "Built for service businesses that live in WhatsApp and DMs",
  lead: "Same Twin platform. Content, tone, hours and booking rules tuned to how your industry actually talks to customers.",
  items: [
    {
      slug: "healthcare",
      name: "Clinics & healthcare",
      summary:
        "Appointment booking, FAQs, after-hours triage, and family multi-booking under one contact.",
      outcomes: [
        "Book and reschedule from chat",
        "Approved medical/admin FAQs only",
        "Human handoff for clinical questions",
      ],
    },
    {
      slug: "real-estate",
      name: "Real estate & property",
      summary:
        "Qualify buyers and renters, share listings from approved knowledge, and book viewings on the calendar.",
      outcomes: [
        "Capture intent and budget in chat",
        "Route hot leads to agents",
        "Keep listing facts grounded",
      ],
    },
    {
      slug: "ecommerce",
      name: "Retail & ecommerce",
      summary:
        "Order status, returns, and product FAQs from your docs, with handoff when inventory is unclear.",
      outcomes: [
        "Cite return and shipping policies",
        "Escalate stock questions",
        "Keep brand tone consistent",
      ],
    },
    {
      slug: "professional-services",
      name: "Professional services",
      summary:
        "Law, consulting, and agencies that need qualified inquiries and booked discovery calls.",
      outcomes: [
        "Qualify before the calendar",
        "Do-not-answer legal/medical advice",
        "CRM-ready contact history",
      ],
    },
    {
      slug: "hospitality",
      name: "Hospitality & events",
      summary:
        "Reservations, event packages, and multi-guest bookings without losing context mid-chat.",
      outcomes: [
        "Draft-state booking resume",
        "Family and group intake loops",
        "Hours and package rules in Twin",
      ],
    },
    {
      slug: "home-services",
      name: "Home & field services",
      summary:
        "Quotes, scheduling, and service-area FAQs for teams that cannot miss an evening lead.",
      outcomes: [
        "After-hours capture",
        "Job-type routing",
        "Calendar slot confirmation",
      ],
    },
  ],
} as const;

export const CASE_STUDIES = {
  eyebrow: "Proof in progress",
  title: "How teams use ArQonnect",
  lead: "Representative scenarios based on scoped Twin deployments. Named public case studies publish here as clients approve disclosure.",
  items: [
    {
      id: "clinic-booking",
      industry: "Healthcare",
      title: "Clinic cut after-hours booking friction",
      summary:
        "WhatsApp and web chat share one inbox. The Twin offers live calendar slots from approved services and hours, then hands off clinical questions.",
      metrics: [
        { label: "Channels", value: "WhatsApp + web" },
        { label: "Focus", value: "Bookings + FAQ" },
        { label: "Control", value: "Human for clinical" },
      ],
    },
    {
      id: "broker-leads",
      industry: "Real estate",
      title: "Brokerage qualifies evening inquiries",
      summary:
        "Instagram and Messenger leads land with history attached. AI captures intent from listing FAQs; agents take over when a viewing is hot.",
      metrics: [
        { label: "Channels", value: "IG + Messenger" },
        { label: "Focus", value: "Qualify + book" },
        { label: "Control", value: "Agent takeover" },
      ],
    },
    {
      id: "retail-returns",
      industry: "Retail",
      title: "Retailer grounds returns answers",
      summary:
        "Returns and shipping replies cite uploaded policy docs. Unclear inventory questions escalate instead of guessing.",
      metrics: [
        { label: "Channels", value: "WhatsApp + web" },
        { label: "Focus", value: "Policy FAQs" },
        { label: "Control", value: "Escalate gaps" },
      ],
    },
  ],
} as const;

/** Defaults for the interactive ROI calculator (illustrative, not a guarantee). */
export const ROI_DEFAULTS = {
  missedLeadsPerMonth: 40,
  avgDealValue: 150,
  closeRatePercent: 25,
  hoursOnRepetitiveChat: 30,
  staffHourlyCost: 12,
  planMonthly: 899,
} as const;

export const ROI_COPY = {
  eyebrow: "ROI calculator",
  title: "Estimate what unanswered chats may be costing you",
  lead: "Illustrative only. Adjust the inputs to your business. A demo scopes the real plan, channels and setup for your stack.",
  disclaimer:
    "Results are estimates for planning conversations, not financial advice or a performance guarantee. Close rates and deal values vary by industry.",
} as const;

export const HOME_OFFER = {
  channelsEyebrow: "Meet customers where they already are",
  channelsTitle: "Four channels. One inbox.",
  channelsBody:
    "WhatsApp Business, Instagram Direct, Facebook Messenger and website chat land as one conversation, with profile and history attached.",
  trustEyebrow: "Why operators trust it",
  trustTitle: "Replies from your docs. Handoff when unsure.",
  trustItems: [
    {
      title: "Approved knowledge",
      body: "Answers use FAQs and documents you upload. Low confidence or sensitive topics go to a human.",
    },
    {
      title: "Human in control",
      body: "Take over any chat, pause AI, and hand it back. Staff set tone, hours and do-not-reply rules.",
    },
    {
      title: "CRM and booking",
      body: "Contacts, deals and appointments stay connected. Offer live calendar slots inside the chat.",
    },
  ],
  growthEyebrow: "Beyond the inbox",
  growthTitle: "Growth services when you also need to get found",
  growthBody:
    "SEO, AEO, GEO, AIO, web and mobile development, CRM funnels and ads. Same team, optional add-ons beside the Twin.",
  stepsEyebrow: "Live in clear steps",
  stepsTitle: "From first call to first grounded reply",
  steps: [
    {
      num: "01",
      title: "Scope the Twin",
      body: "Channels, languages, booking rules and knowledge sources on a short demo.",
    },
    {
      num: "02",
      title: "Connect and train",
      body: "Meta channels and web widget, upload approved docs, set persona and handoff.",
    },
    {
      num: "03",
      title: "Go live and refine",
      body: "Watch real chats, tune answers, add growth services if visibility is the leak.",
    },
  ],
} as const;
