"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import AiAmbient from "@/components/ui/AiAmbient";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MultiStepLeadForm from "@/components/forms/MultiStepLeadForm";
import { HERO_VIDEO, MARKETS_VIDEO } from "@/lib/brand";

const regions = [
  { name: "Lahore", region: "HQ · Pakistan", flag: "https://flagcdn.com/w80/pk.png", hq: true },
  { name: "United States", region: "North America", flag: "https://flagcdn.com/w80/us.png" },
  { name: "United Kingdom", region: "Europe", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Canada", region: "North America", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Australia", region: "APAC", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Europe", region: "EU & UK", flag: "https://flagcdn.com/w80/eu.png" },
];

function ContactHook(): ReactElement {
  return (
    <section className="story-room story-cta relative flex flex-col items-center justify-center overflow-hidden border-b border-line bg-bg">
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="hero" quiet />
      <AiAmbient intensity="room" className="z-[2] opacity-55" />
      <RevealOnScroll className="story-cta-inner relative z-10">
        <header className="story-chapter-header story-chapter-header--center" data-reveal>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Book a demo
          </p>
          <h2 className="story-heading story-heading--xl">
            Talk to a human.
            <span>Map your stack in 20 minutes.</span>
          </h2>
          <p className="story-lead story-lead--center">
            Every unanswered call is a lead calling someone else. We&apos;ll show exactly what ArQonnect
            replaces — no ticket queue, no pitch-deck theater.
          </p>
        </header>
        <div className="story-cta-actions" data-reveal>
          <a href="#book" className="story-cta-primary" data-magnetic>
            Start booking →
          </a>
          <Link href="/demo" className="story-cta-ghost" data-cursor="view">
            Try the Live Demo
          </Link>
        </div>
        <ul
          className="mx-auto mt-10 flex max-w-xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6"
          data-reveal
        >
          {["Same-week scheduling", "Real specialists", "US · UK · CA · AU · EU"].map((item) => (
            <li key={item} className="flex items-center justify-center gap-2 text-sm text-text-dim">
              <span className="text-accent">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}

function ContactPresence(): ReactElement {
  return (
    <section className="story-room story-markets relative overflow-hidden border-b border-line bg-bg-alt">
      <RoomVideoBackdrop src={MARKETS_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" quiet />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Presence
          </p>
          <h2 className="story-heading">
            One headquarters.
            <span>Five markets we run in.</span>
          </h2>
          <p className="story-lead">
            Built in Lahore, live for clients across the US, UK, Canada, Australia and Europe — same
            stack, local tone.
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
              <Image
                src={r.flag}
                alt=""
                width={40}
                height={40}
                className="rounded-full object-cover"
                unoptimized
              />
              <div>
                <strong>
                  {r.name}
                  {r.hq ? " · HQ" : ""}
                </strong>
                <span>{r.region}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="story-foot" data-reveal>
          <span>
            <em>1</em> HQ · <em>5</em> markets · <em>24/7</em> coverage
          </span>
          <a href="#book">Book this week →</a>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ContactBook(): ReactElement {
  return (
    <section
      id="book"
      className="story-room story-book relative overflow-hidden border-t border-line bg-bg"
    >
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="hero" />
      <AiAmbient intensity="hero" className="z-[2] opacity-50" />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Next step
          </p>
          <h2 className="story-heading">
            Somewhere, right now,
            <span>your phone is ringing.</span>
          </h2>
          <p className="story-lead">
            Book a 20-minute walkthrough — we&apos;ll map your stack and show what ArQonnect replaces.
          </p>
        </header>

        <div
          className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
          data-reveal
        >
          <div>
            <ul className="space-y-3 text-sm text-text-dim">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Same-week demo scheduling
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Real specialists, not a ticket queue
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Live across US · UK · Canada · Australia · Europe
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="story-cta-ghost">
                Try the Live Demo
              </Link>
              <a href="mailto:hello@arqonnect.com" className="story-cta-ghost">
                hello@arqonnect.com
              </a>
            </div>
          </div>
          <MultiStepLeadForm className="lead-form--room" />
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default function ContactPageClient(): ReactElement {
  return (
    <main aria-label="Book a demo">
      <ContactHook />
      <ContactPresence />
      <ContactBook />
    </main>
  );
}
