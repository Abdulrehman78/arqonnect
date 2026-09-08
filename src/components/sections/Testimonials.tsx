"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import AiAmbient from "@/components/ui/AiAmbient";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MARKETS_VIDEO } from "@/lib/brand";

/** Social proof — typography-led quote, not a card gallery. */
export default function Testimonials(): ReactElement {
  return (
    <section className="story-proof relative min-h-[100dvh] overflow-hidden border-b border-line bg-bg">
      <RoomVideoBackdrop src={MARKETS_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" />
      <AiAmbient intensity="room" className="z-[2] opacity-60" />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Social proof
          </p>
          <h2 className="story-heading">
            Real conversations.
            <span>Real outcomes.</span>
          </h2>
        </header>

        <blockquote className="story-quote" data-reveal>
          <p>
            This is where your story goes. Once the first engagement wraps, we&apos;ll swap this for a
            real quote, a real name, and a real result.
          </p>
          <footer>
            <strong>Reserved for you</strong>
            <span>Founding client · ArQonnect</span>
          </footer>
        </blockquote>

        <div className="story-proof-metrics" data-reveal>
          <div>
            <strong>&lt;500ms</strong>
            <span>Target latency</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Every channel</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Founding slot</span>
          </div>
        </div>

        <div className="story-foot" data-reveal>
          <span>
            <em>100%</em> documented
          </span>
          <Link href="/case-studies">See case studies →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
