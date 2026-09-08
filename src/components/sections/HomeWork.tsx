"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { WORK_CARDS, type WorkCard } from "@/lib/workCards";

export type { WorkCard };
export { WORK_CARDS };

/** Sticky-title intro panel for the horizontal homepage track. */
export function HomeWorkIntro(): ReactElement {
  return (
    <aside className="home-work-aside home-work-aside--panel">
      <p className="home-work-aside-kicker">
        <span className="ai-live-dot" />
        Portfolio of outcomes
      </p>
      <h2 className="home-work-aside-title">
        <span className="home-work-aside-line">THE WORK</span>
        <span className="home-work-aside-sub">everyone loves</span>
      </h2>
      <p className="home-work-aside-body">
        Industries and channels ArQonnect agents already run.
      </p>
      <Link href="/case-studies" className="home-work-aside-link">
        See all case studies →
      </Link>
    </aside>
  );
}

export function HomeWorkSlide({
  card,
  low = false,
}: {
  card: WorkCard;
  low?: boolean;
}): ReactElement {
  return (
    <article
      className={`home-work-slide home-work-slide--panel home-work-slide--${card.tone} ${
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
          See how it works →
        </Link>
      </div>
    </article>
  );
}

/** Mobile/fallback vertical work block. */
export default function HomeWork(): ReactElement {
  return (
    <section className="home-work home-work--stack-only" aria-label="The work">
      <HomeWorkIntro />
      <div className="home-work-stack-list">
        {WORK_CARDS.map((card, i) => (
          <HomeWorkSlide key={card.id} card={card} low={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
