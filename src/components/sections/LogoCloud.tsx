"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MARKETS_VIDEO } from "@/lib/brand";

const regions = [
  { name: "United States", region: "North America", flag: "https://flagcdn.com/w80/us.png" },
  { name: "United Kingdom", region: "Europe", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Canada", region: "North America", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Australia", region: "APAC", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Europe", region: "EU & UK", flag: "https://flagcdn.com/w80/eu.png" },
  { name: "Pakistan", region: "APAC", flag: "https://flagcdn.com/w80/pk.png" },
];

const verticals = [
  {
    name: "Healthcare",
    metric: "24/7",
    line: "After-hours intake and booking without a queue.",
  },
  {
    name: "Real Estate",
    metric: "<60s",
    line: "Qualify, book the showing, follow up while it's hot.",
  },
  {
    name: "E-Commerce",
    metric: "Always on",
    line: "Orders, returns, and cart recovery on chat and voice.",
  },
];

/** Presence chapter — flag strip + vertical bands (not filmstrip cards). */
export default function LogoCloud(): ReactElement {
  return (
    <section className="story-markets relative min-h-[100dvh] overflow-hidden border-y border-line bg-bg">
      <RoomVideoBackdrop src={MARKETS_VIDEO} />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Presence
          </p>
          <h2 className="story-heading">
            Trusted across markets
            <span>and industries.</span>
          </h2>
          <p className="story-lead">
            Agents that answer in the same time zones and verticals your customers already live in.
          </p>
        </header>

        <ul className="story-flags">
          {regions.map((r, i) => (
            <li
              key={r.name}
              className="story-flag"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <img src={r.flag} alt="" width={40} height={40} />
              <div>
                <strong>{r.name}</strong>
                <span>{r.region}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="story-verticals">
          {verticals.map((v, i) => (
            <article
              key={v.name}
              className="story-vertical"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <span className="story-vertical-metric">{v.metric}</span>
              <h3>{v.name}</h3>
              <p>{v.line}</p>
            </article>
          ))}
        </div>

        <div className="story-foot" data-reveal>
          <span>
            <em>5</em> regions · <em>3</em> verticals · <em>24/7</em> coverage
          </span>
          <Link href="/case-studies">See case studies →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
