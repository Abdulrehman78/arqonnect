export type WorkCard = {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  line: string;
  tags: string[];
  tone: "amber" | "ink" | "panel" | "teal" | "sand" | "night";
  href: string;
};

export const WORK_CARDS: WorkCard[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    metric: "24/7",
    metricLabel: "Coverage",
    line: "Missed calls become appointments — after-hours intake without a queue.",
    tags: ["Voice", "Chat", "Booking"],
    tone: "amber",
    href: "/case-studies",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    metric: "< 60s",
    metricLabel: "First reply",
    line: "Qualify the lead, book the showing, follow up while interest is hot.",
    tags: ["Voice", "CRM", "Lead gen"],
    tone: "ink",
    href: "/case-studies",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    metric: "0",
    metricLabel: "Missed DMs",
    line: "Order status, returns, and cart recovery on chat and voice, 24/7.",
    tags: ["Chat", "CRM", "Support"],
    tone: "teal",
    href: "/case-studies",
  },
  {
    id: "voice",
    title: "Voice AI",
    metric: "100%",
    metricLabel: "Answer rate",
    line: "Agents that pick up every call, handle interruptions, and book next steps.",
    tags: ["Voice", "Omnichannel"],
    tone: "night",
    href: "/demo",
  },
  {
    id: "chat",
    title: "Chat Agents",
    metric: "Instant",
    metricLabel: "Reply",
    line: "Website, WhatsApp, social — one memory across every inbox.",
    tags: ["Chat", "CRM"],
    tone: "sand",
    href: "/demo",
  },
  {
    id: "crm",
    title: "CRM Sync",
    metric: "1",
    metricLabel: "Record",
    line: "Every lead, every channel, one shared record — no five-tool chaos.",
    tags: ["CRM", "Analytics"],
    tone: "panel",
    href: "/crm",
  },
];
