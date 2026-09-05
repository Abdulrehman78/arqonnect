"use client";

import type { ReactElement } from "react";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import { MARKETS_VIDEO } from "@/lib/brand";

const markets = [
  { name: "United States", region: "North America", src: "https://flagcdn.com/w160/us.png" },
  { name: "United Kingdom", src: "https://flagcdn.com/w160/gb.png", region: "Europe" },
  { name: "Canada", src: "https://flagcdn.com/w160/ca.png", region: "North America" },
  { name: "Australia", src: "https://flagcdn.com/w160/au.png", region: "APAC" },
  { name: "Europe", src: "https://flagcdn.com/w160/eu.png", region: "EU & UK" },
  { name: "Pakistan", src: "https://flagcdn.com/w160/pk.png", region: "APAC" },
];

const industries: Array<{
  name: string;
  mark: "health" | "home" | "cart";
  line: string;
}> = [
  {
    name: "Healthcare",
    mark: "health",
    line: "After-hours intake, appointment booking, and insurance FAQs — without a queue.",
  },
  {
    name: "Real Estate",
    mark: "home",
    line: "Qualify the lead, book the showing, and follow up while the listing is still hot.",
  },
  {
    name: "E-Commerce",
    mark: "cart",
    line: "Order status, returns, and cart recovery on chat and voice, around the clock.",
  },
];

function MarkIcon({
  mark,
}: {
  mark: "health" | "home" | "cart";
}): ReactElement {
  if (mark === "health") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path fill="currentColor" d="M11 3h2v6h6v2h-6v6h-2v-6H5V9h6V3z" />
      </svg>
    );
  }
  if (mark === "home") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path fill="currentColor" d="M12 3 3 11h2v9h5v-5h4v5h5v-9h2L12 3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M7 6h14l-1.4 8H8.2L7 6zm0 0L6 3H2v2h3l3.6 12h10.2v-2H9.4L9 11h9.7L20.5 4H7.5L7 6zM9 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z"
      />
    </svg>
  );
}

export default function LogoCloud(): ReactElement {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-y border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <RoomVideoBackdrop src={MARKETS_VIDEO} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Presence" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            <GiggleText as="span" text="Trusted across markets" tone="rise" />
            <br />
            <GiggleText
              as="span"
              text="and industries."
              tone="rise"
              startDelay={0.2}
              className="banner-heading-muted"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
          <GiggleText
            as="p"
            text="Agents that answer in the same time zones and verticals your customers already live in — live, not queued."
            tone="blur"
            startDelay={0.35}
            className="room-body mx-auto mt-4 max-w-xl text-base leading-relaxed"
          />
        </header>

        <FadeUp className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {markets.map((m) => (
              <article
                key={m.name}
                className="glass group flex flex-col items-center rounded-2xl px-3 py-5 text-center transition-colors hover:border-accent/45"
              >
                <span className="relative inline-flex h-14 w-14 overflow-hidden rounded-full ring-1 ring-accent/35 shadow-[0_0_24px_rgba(234,164,107,0.18)]">
                  <img
                    src={m.src}
                    alt=""
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
                <h3 className="room-heading mt-3 text-sm font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent/90">
                  {m.region}
                </p>
              </article>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {industries.map((item) => (
              <article
                key={item.name}
                className="glass rounded-2xl p-5 transition-colors hover:border-accent/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent backdrop-blur-sm">
                  <MarkIcon mark={item.mark} />
                </div>
                <h3 className="room-heading mt-4 text-lg font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="room-body mt-2 text-sm leading-relaxed">{item.line}</p>
              </article>
            ))}
          </div>
        </FadeUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stat-ink">
          <span>
            <span className="text-accent">5</span> regions
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">3</span> core verticals
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">24/7</span> coverage
          </span>
        </div>
      </div>
    </section>
  );
}
