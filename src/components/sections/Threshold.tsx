"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";

const rooms = [
  { num: "01", name: "CRM", tone: "Mission Control" },
  { num: "02", name: "Voice AI", tone: "The Voice Room" },
  { num: "05", name: "Chat", tone: "The Chat Room" },
  { num: "14", name: "Reputation", tone: "Hall of Mirrors" },
];

function ThresholdContent(): React.ReactElement {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
      <FadeUp>
        <div className="inline-flex max-w-full items-center gap-3 border border-orange-400/25 bg-orange-500/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-orange-300 sm:px-4 sm:text-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
          </span>
          The ArQonnect Stack
        </div>

        <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-text sm:mt-6 sm:text-5xl lg:text-6xl">
          Fourteen rooms.
          <br />
          <span className="bg-gradient-to-r from-orange-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">
            One workforce.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
          Keep scrolling — every door opens into a service built to run itself,
          lit its own way. Chat, voice, CRM, growth — one stack.
        </p>

        <ul className="mt-8 flex max-w-xl flex-col gap-2.5">
          {[
            "Scroll-driven tour of every service room",
            "Side previews for each reel",
            "Capabilities & templates below the stack",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-text-dim"
            >
              <span className="text-orange-300">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="#capabilities"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg no-underline transition-all hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
          >
            Browse capabilities →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-orange-400/25 bg-orange-500/5 px-6 py-3 text-sm font-semibold text-text no-underline transition-all hover:border-orange-400/45"
          >
            Book a Demo
          </Link>
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-text-dimmer">
          Scroll to enter the rooms
        </p>
      </FadeUp>

      <FadeUp delay={0.08} className="relative hidden lg:block">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-rose-500/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-orange-400/25 bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div>
              <div className="text-sm font-semibold text-text">Stack map</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-orange-300">
                14 rooms · Scroll tour
              </div>
            </div>
            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
              Live
            </span>
          </div>

          <div className="divide-y divide-line">
            {rooms.map((r) => (
              <div
                key={r.num}
                className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-orange-500/5"
              >
                <span className="font-mono text-xs text-orange-300/70">
                  {r.num}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-text">{r.name}</div>
                  <div className="text-xs text-text-dimmer">{r.tone}</div>
                </div>
                <span className="text-orange-300/50">→</span>
              </div>
            ))}
          </div>

          <div className="border-t border-line bg-orange-500/5 px-5 py-4">
            <p className="text-xs leading-relaxed text-text-dim">
              Plus ten more rooms — webinars, SMS, ads, SEO, email and reputation
              — each with its own light.
            </p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

export default function Threshold({
  embedded = false,
  fullscreenSlide = false,
}: {
  embedded?: boolean;
  fullscreenSlide?: boolean;
}): React.ReactElement {
  if (embedded || fullscreenSlide) {
    return (
      <section
        id="threshold"
        className="relative flex h-full min-h-full w-full items-center justify-center overflow-hidden bg-bg"
      >
        <InteractiveBackdrop theme="services" />
        <ThresholdContent />
      </section>
    );
  }

  return (
    <Section first id="threshold" className="relative min-h-screen overflow-hidden !py-0">
      <InteractiveBackdrop theme="services" />
      <div className="relative flex min-h-[85vh] items-center justify-center py-28">
        <ThresholdContent />
      </div>
    </Section>
  );
}
