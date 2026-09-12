"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { PILLARS, PITCH } from "@/lib/siteContent";

/** Intro panel for the horizontal filmstrip (pitch). */
export function HomePitchIntro(): ReactElement {
  return (
    <aside className="home-work-aside home-work-aside--panel">
      <p className="home-work-aside-kicker">
        <span className="ai-live-dot" />
        {PITCH.eyebrow}
      </p>
      <h2 className="home-work-aside-title">
        <span className="home-work-aside-line">One place</span>
        <span className="home-work-aside-sub">every customer message</span>
      </h2>
      <p className="home-work-aside-body line-clamp-6">{PITCH.quote}</p>
      <ul className="mt-4 flex flex-col gap-1.5">
        {PITCH.pills.slice(0, 4).map((pill) => (
          <li key={pill} className="text-xs font-medium text-accent-dim">
            · {pill}
          </li>
        ))}
      </ul>
      <Link href="/process" className="home-work-aside-link">
        How it works →
      </Link>
    </aside>
  );
}

type FilmCard = {
  id: string;
  metricLabel: string;
  metric: string;
  title: string;
  line: string;
  tags: string[];
  href: string;
  tone?: "dark" | "light";
};

const PILLAR_CARDS: FilmCard[] = PILLARS.map((p, i) => ({
  id: p.title.toLowerCase(),
  metricLabel: `0${i + 1}`,
  metric: p.title,
  title: p.title,
  line: p.body,
  tags: ["Platform", "AI Twin"],
  href: "/services",
  tone: "dark" as const,
}));

const STAT_CARDS: FilmCard[] = [
  {
    id: "channels",
    metricLabel: "Inbox",
    metric: "4",
    title: "Channels in one inbox",
    line: "WhatsApp, Instagram, Messenger and web chat — nothing lost.",
    tags: ["Unified", "Meta + web"],
    href: "/services",
  },
  {
    id: "languages",
    metricLabel: "Languages",
    metric: "7",
    title: "Languages supported",
    line: "Auto-detect and reply in the customer's language.",
    tags: ["Phase 1", "RTL ready"],
    href: "/faq",
  },
  {
    id: "coverage",
    metricLabel: "Coverage",
    metric: "24/7",
    title: "Instant AI coverage",
    line: "On-brand replies at 2 a.m. — grounded in your knowledge.",
    tags: ["Always on", "Grounded"],
    href: "/process",
  },
  {
    id: "truth",
    metricLabel: "Truth",
    metric: "1",
    title: "Source of approved truth",
    line: "No invented facts — handoff when confidence is low.",
    tags: ["Approved", "Audit-ready"],
    href: "/services",
  },
];

export function HomeFilmCard({
  card,
  low = false,
}: {
  card: FilmCard;
  low?: boolean;
}): ReactElement {
  return (
    <article
      className={`home-work-slide home-work-slide--panel home-work-slide--${card.tone ?? "dark"} ${
        low ? "home-work-slide--low" : ""
      }`}
      data-cursor="view"
      data-cursor-label="View"
    >
      <div className="home-work-slide-media">
        <div className="home-work-slide-media-inner">
          <p className="home-work-slide-label">{card.metricLabel}</p>
          <p className="home-work-slide-metric">{card.metric}</p>
        </div>
      </div>
      <div className="home-work-slide-meta">
        <div className="home-work-slide-tags">
          {card.tags.map((tag) => (
            <span key={tag} className="home-work-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="home-work-slide-title">{card.title}</h3>
        <p className="home-work-slide-line">{card.line}</p>
        <Link href={card.href} className="home-work-link" data-cursor="view">
          See features →
        </Link>
      </div>
    </article>
  );
}

export { PILLAR_CARDS, STAT_CARDS };
export type { FilmCard };
