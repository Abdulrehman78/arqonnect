"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

const channels: Array<{
  num: string;
  title: string;
  description: string;
  mark: "voice" | "chat" | "crm" | "social";
  tags: string[];
}> = [
  {
    num: "01",
    title: "Voice",
    description:
      "Humanoid voice agents that take the call, qualify the lead, and book the appointment.",
    mark: "voice",
    tags: ["Inbound", "Outbound", "IVR"],
  },
  {
    num: "02",
    title: "Chat",
    description:
      "AI conversation that wins before your competitor picks up — on web, app, or widget.",
    mark: "chat",
    tags: ["Web", "In-app", "Live handoff"],
  },
  {
    num: "03",
    title: "CRM",
    description:
      "HubSpot, Salesforce, or yours — every lead, one record, updated in real time.",
    mark: "crm",
    tags: ["HubSpot", "Salesforce", "Custom"],
  },
  {
    num: "04",
    title: "SMS & Social",
    description:
      "Missed-call text-back, DMs, and follow-ups handled automatically, around the clock.",
    mark: "social",
    tags: ["SMS", "WhatsApp", "Social DMs"],
  },
];

function ChannelIcon({
  mark,
}: {
  mark: "voice" | "chat" | "crm" | "social";
}): ReactElement {
  if (mark === "voice") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-7-3v2c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5v-2h-2v2c0 1.65-1.35 3-3 3h-4c-1.65 0-3-1.35-3-3v-2H5z"
        />
      </svg>
    );
  }
  if (mark === "chat") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"
        />
      </svg>
    );
  }
  if (mark === "crm") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2zM18 10v6l5-3-5-3z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
      />
    </svg>
  );
}

export default function Integrations(): ReactElement {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <ZoomBackdrop
        src="/images/markets-banner.jpg"
        position="55% center"
        delaySec={24}
        quiet
        veil={ROOM_VEIL}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Channels" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            <GiggleText as="span" text="True omni-channel" tone="rise" />
            <br />
            <GiggleText
              as="span"
              text="communication."
              tone="rise"
              startDelay={0.2}
              className="banner-heading-muted"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
          <GiggleText
            as="p"
            text="Chat, voice, CRM and growth — all pointed at one job: don't let the lead go quiet."
            tone="blur"
            startDelay={0.35}
            className="room-body mx-auto mt-4 max-w-xl text-base leading-relaxed"
          />
        </header>

        <FadeUp className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {channels.map((c) => (
              <article
                key={c.num}
                className="glass group flex h-full flex-col rounded-2xl p-5 transition-colors hover:border-accent/45"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent backdrop-blur-sm">
                    <ChannelIcon mark={c.mark} />
                  </div>
                  <span className="ai-num-glow font-mono text-[11px] tracking-[0.14em] text-accent/80">
                    {c.num}
                  </span>
                </div>
                <h3 className="room-heading mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="room-body mt-2 flex-1 text-sm leading-relaxed">
                  {c.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
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
            <span className="text-accent">4</span> channels
          </span>
          <span className="hidden h-3 w-px bg-stat-divider sm:block" />
          <span>
            <span className="text-accent">1</span> lead record
          </span>
          <span className="hidden h-3 w-px bg-stat-divider sm:block" />
          <span>
            <span className="text-accent">24/7</span> coverage
          </span>
        </div>

        <FadeUp className="mt-8 text-center" delay={0.1}>
          <Link
            href="/crm"
            className="ai-link-arrow room-label inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium no-underline backdrop-blur-sm transition-colors hover:border-accent/55 hover:bg-accent/15 hover:text-gold"
          >
            See CRM integrations <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
