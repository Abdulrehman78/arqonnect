"use client";

import type { ReactElement } from "react";

type Props = {
  items: string[];
  /** Prefix each item with an accent mark */
  accent?: boolean;
  className?: string;
  speedSec?: number;
};

/** Seamless CSS infinite horizontal marquee (duplicated track). */
export default function InfiniteMarquee({
  items,
  accent = true,
  className = "",
  speedSec = 32,
}: Props): ReactElement {
  const doubled = [...items, ...items];

  return (
    <div className={`infinite-marquee ${className}`.trim()} aria-hidden>
      <div
        className="infinite-marquee-track"
        style={{ animationDuration: `${speedSec}s` }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="infinite-marquee-item">
            {accent ? <em>✦</em> : null}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
