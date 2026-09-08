"use client";

import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { STATS_VIDEO } from "@/lib/brand";

const metrics = [
  { value: "20+", label: "AI-run services" },
  { value: "<500ms", label: "Target latency" },
  { value: "24/7", label: "Agent coverage" },
  { value: "$97", label: "Flat stack from" },
];

/** Proof numbers — giant typography, not cards. */
export default function StatsStrip() {
  return (
    <section className="story-stats relative min-h-[100dvh] overflow-hidden border-b border-line bg-bg-alt">
      <RoomVideoBackdrop src={STATS_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" quiet />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Proof
          </p>
          <h2 className="story-heading">
            Everyday calls.
            <span>Extraordinary outcomes.</span>
          </h2>
          <p className="story-lead">
            Numbers that hold up when the phone never stops ringing.
          </p>
        </header>

        <ol className="story-stat-list">
          {metrics.map((m, i) => (
            <li
              key={m.label}
              className="story-stat"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <span className="story-stat-value">{m.value}</span>
              <span className="story-stat-label">{m.label}</span>
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </section>
  );
}
