export type HomePanelMeta = {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  size?: "full" | "intro" | "card";
  tone?: "dark" | "light";
};

/** Horizontal filmstrip — hero + pitch + pillars + stats. */
export const HOME_PANEL_META: HomePanelMeta[] = [
  {
    id: "hero",
    eyebrow: "ArQonnect",
    title: "One inbox",
    sub: "AI you control",
    size: "full",
    tone: "dark",
  },
  {
    id: "pitch",
    eyebrow: "30-second pitch",
    title: "One place",
    sub: "Every customer message",
    size: "intro",
    tone: "dark",
  },
  {
    id: "converse",
    eyebrow: "Platform",
    title: "Converse",
    sub: "Approved knowledge replies",
    size: "card",
    tone: "dark",
  },
  {
    id: "coordinate",
    eyebrow: "Platform",
    title: "Coordinate",
    sub: "CRM across every channel",
    size: "card",
    tone: "dark",
  },
  {
    id: "control",
    eyebrow: "Platform",
    title: "Control",
    sub: "Tone, hours, handoff",
    size: "card",
    tone: "dark",
  },
  {
    id: "stat-channels",
    eyebrow: "At a glance",
    title: "4 channels",
    sub: "One shared inbox",
    size: "card",
    tone: "dark",
  },
  {
    id: "stat-languages",
    eyebrow: "At a glance",
    title: "7 languages",
    sub: "Same-language replies",
    size: "card",
    tone: "dark",
  },
  {
    id: "stat-coverage",
    eyebrow: "At a glance",
    title: "24/7",
    sub: "Instant AI coverage",
    size: "card",
    tone: "dark",
  },
  {
    id: "stat-truth",
    eyebrow: "At a glance",
    title: "1 source",
    sub: "Approved truth only",
    size: "card",
    tone: "dark",
  },
];

/** Vertical story chapters after the filmstrip. */
export const HOME_STORY_META: HomePanelMeta[] = [
  {
    id: "comparison",
    eyebrow: "Scattered inboxes",
    title: "The real cost",
    sub: "Unanswered messages leave",
    tone: "dark",
  },
  {
    id: "value",
    eyebrow: "The value",
    title: "In plain language",
    sub: "What clients get",
    tone: "dark",
  },
  {
    id: "cta",
    eyebrow: "Next step",
    title: "Book a demo",
    sub: "See it on your channels",
    tone: "dark",
  },
];
