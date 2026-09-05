"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

const pillars: Array<{
  num: string;
  title: string;
  description: string;
  mark: "agents" | "stack" | "metrics";
  tags: string[];
}> = [
  {
    num: "01",
    title: "Build agents that sound human",
    description:
      "Humanoid chat and voice agents that win the conversation, take the call, and book the appointment — on every channel.",
    mark: "agents",
    tags: ["Voice", "Chat", "SMS"],
  },
  {
    num: "02",
    title: "Deploy across the full stack",
    description:
      "Twenty AI-run services: agents, websites and funnels, CRM automation, SEO/AEO/GEO — built to run themselves.",
    mark: "stack",
    tags: ["CRM", "Funnels", "SEO"],
  },
  {
    num: "03",
    title: "Measure what converts",
    description:
      "Every lead updates itself in HubSpot, Salesforce, or your CRM. One record across chat, voice, SMS, and social.",
    mark: "metrics",
    tags: ["Analytics", "Attribution", "Live KPIs"],
  },
];

function PillarIcon({ mark }: { mark: "agents" | "stack" | "metrics" }): ReactElement {
  if (mark === "agents") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-7-3v2c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5v-2h-2v2c0 1.65-1.35 3-3 3h-4c-1.65 0-3-1.35-3-3v-2H5z"
        />
      </svg>
    );
  }
  if (mark === "stack") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2 2 7v2h20V7L12 2zm0 2.5L18 8H6l6-3.5zM4 11v2h16v-2H4zm0 4v2h16v-2H4zm0 4v2h10v-2H4z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7z"
      />
    </svg>
  );
}

export default function FeaturesBento(): ReactElement {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <ZoomBackdrop
        src="/images/features-banner.jpg"
        position="60% center"
        delaySec={18}
        quiet
        veil={ROOM_VEIL}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Unified platform" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            <GiggleText as="span" text="One platform for" tone="rise" />
            <br />
            <GiggleText
              as="span"
              text="all your agents."
              tone="rise"
              startDelay={0.2}
              className="banner-heading-muted"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
          <GiggleText
            as="p"
            text="Orchestration, CRM sync, and growth visibility — so you go from prompt to production without a tool pile."
            tone="blur"
            startDelay={0.35}
            className="room-body mx-auto mt-4 max-w-xl text-base leading-relaxed"
          />
        </header>

        <FadeUp className="mt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {pillars.map((p) => (
              <article
                key={p.num}
                className="glass group flex h-full flex-col rounded-2xl p-5 transition-colors hover:border-accent/45 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent backdrop-blur-sm">
                    <PillarIcon mark={p.mark} />
                  </div>
                  <span className="ai-num-glow font-mono text-[11px] tracking-[0.14em] text-accent/80">
                    {p.num}
                  </span>
                </div>
                <h3 className="room-heading mt-5 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="room-body mt-2 flex-1 text-sm leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-glass bg-glass-inner px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-stat-ink"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </FadeUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stat-ink">
          <span>
            <span className="text-accent">20+</span> AI-run services
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">1</span> unified stack
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">0</span> tool sprawl
          </span>
        </div>

        <FadeUp className="mt-8 text-center" delay={0.1}>
          <Link
            href="/services"
            className="ai-link-arrow room-label inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium no-underline backdrop-blur-sm transition-colors hover:border-accent/55 hover:bg-accent/15 hover:text-gold"
          >
            Explore all services <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
