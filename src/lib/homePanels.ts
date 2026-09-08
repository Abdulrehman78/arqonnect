export type HomePanelMeta = {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  size?: "full" | "intro" | "card";
  tone?: "dark" | "light";
};

/** Filmstrip panels only — hero + THE WORK gallery. */
export const HOME_PANEL_META: HomePanelMeta[] = [
  {
    id: "hero",
    eyebrow: "ArQonnect",
    title: "THE AGENTS",
    sub: "speaks to every customer",
    size: "full",
    tone: "dark",
  },
  {
    id: "work-intro",
    eyebrow: "Portfolio",
    title: "THE WORK",
    sub: "everyone loves",
    size: "intro",
    tone: "dark",
  },
  {
    id: "healthcare",
    eyebrow: "Coverage",
    title: "Healthcare",
    sub: "24/7 booking & intake",
    size: "card",
    tone: "dark",
  },
  {
    id: "real-estate",
    eyebrow: "First reply",
    title: "Real Estate",
    sub: "Under 60 seconds",
    size: "card",
    tone: "dark",
  },
  {
    id: "ecommerce",
    eyebrow: "Missed DMs",
    title: "E-Commerce",
    sub: "Support that never sleeps",
    size: "card",
    tone: "dark",
  },
  {
    id: "voice",
    eyebrow: "Answer rate",
    title: "Voice AI",
    sub: "Every call picked up",
    size: "card",
    tone: "dark",
  },
  {
    id: "chat",
    eyebrow: "Reply",
    title: "Chat Agents",
    sub: "Instant on every inbox",
    size: "card",
    tone: "dark",
  },
  {
    id: "crm",
    eyebrow: "One record",
    title: "CRM Sync",
    sub: "Every channel, synced",
    size: "card",
    tone: "dark",
  },
];

/** Vertical story chapters after the work filmstrip — titles morph on scroll. */
export const HOME_STORY_META: HomePanelMeta[] = [
  {
    id: "markets",
    eyebrow: "Presence",
    title: "Global markets",
    sub: "Where your customers already are",
    tone: "dark",
  },
  {
    id: "stats",
    eyebrow: "Proof",
    title: "Everyday calls",
    sub: "Extraordinary outcomes",
    tone: "dark",
  },
  {
    id: "platform",
    eyebrow: "Platform",
    title: "Build. Deploy.",
    sub: "Measure what converts",
    tone: "dark",
  },
  {
    id: "channels",
    eyebrow: "Channels",
    title: "Omni-channel",
    sub: "One agent. Every inbox",
    tone: "dark",
  },
  {
    id: "proof",
    eyebrow: "Social proof",
    title: "Real outcomes",
    sub: "Documented, not claimed",
    tone: "dark",
  },
  {
    id: "cta",
    eyebrow: "Next step",
    title: "Ready when you are",
    sub: "Book a walkthrough",
    tone: "dark",
  },
];
