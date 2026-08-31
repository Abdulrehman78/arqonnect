"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

const highlights = [
  {
    label: "Response time",
    value: "<500ms",
    note: "Target latency",
  },
  {
    label: "Coverage",
    value: "24/7",
    note: "Every channel",
  },
  {
    label: "Your outcome",
    value: "—",
    note: "Reserved for you",
  },
];

export default function Testimonials(): ReactElement {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <ZoomBackdrop
        src="/images/testimonials-banner.jpg"
        position="50% center"
        delaySec={30}
        quiet
        veil={ROOM_VEIL}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Proven impact" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            <GiggleText as="span" text="Real conversations." tone="rise" />
            <br />
            <GiggleText
              as="span"
              text="Real outcomes."
              tone="rise"
              startDelay={0.2}
              className="banner-heading-muted"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
          <GiggleText
            as="p"
            text="Every engagement gets documented — latency, conversion, and the story behind the result."
            tone="blur"
            startDelay={0.35}
            className="room-body mx-auto mt-4 max-w-xl text-base leading-relaxed"
          />
        </header>

        <FadeUp className="mt-10" delay={0.2}>
          <blockquote className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10">
            <span
              className="ai-quote-mark pointer-events-none absolute left-5 top-3 select-none text-5xl opacity-40 sm:left-7 sm:top-4 sm:text-6xl"
              aria-hidden
            >
              “
            </span>
            <GiggleText
              as="p"
              tone="blur"
              startDelay={0.15}
              className="room-body relative text-lg leading-relaxed md:text-xl"
              text="This is where your story goes. Once the first engagement wraps, we'll swap this for a real quote, a real name, and a real result."
            />
            <footer className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  You
                </span>
                <div>
                  <div className="room-heading font-semibold">Reserved for you</div>
                  <div className="room-caption mt-0.5 text-sm">
                    Founding client, ArQonnect
                  </div>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 sm:justify-end">
                {["Healthcare", "Real estate", "E‑commerce"].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </footer>
          </blockquote>
        </FadeUp>

        <FadeUp className="mt-5" delay={0.28}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {highlights.map((h) => (
              <article
                key={h.label}
                className="glass rounded-2xl px-4 py-4 text-center transition-colors hover:border-accent/35 sm:py-5"
              >
                <div className="banner-heading text-2xl sm:text-3xl">{h.value}</div>
                <div className="room-heading mt-1 text-sm font-semibold">{h.label}</div>
                <div className="room-caption mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em]">
                  {h.note}
                </div>
              </article>
            ))}
          </div>
        </FadeUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
          <span>
            <span className="text-accent">1</span> founding slot
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">3</span> verticals ready
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>
            <span className="text-accent">100%</span> documented
          </span>
        </div>

        <FadeUp className="mt-8 text-center" delay={0.1}>
          <Link
            href="/case-studies"
            className="ai-link-arrow room-label inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium no-underline backdrop-blur-sm transition-colors hover:border-accent/55 hover:bg-accent/15 hover:text-gold"
          >
            See case studies <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
