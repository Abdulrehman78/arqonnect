"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import AiAmbient from "@/components/ui/AiAmbient";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO } from "@/lib/brand";

/** Final CTA — full-bleed centered, fills the viewport. */
export default function HomeFinalCta() {
  return (
    <section className="story-room story-cta relative flex flex-col items-center justify-center overflow-hidden border-t border-line bg-bg">
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="hero" />
      <AiAmbient intensity="hero" className="z-[2] opacity-65" />

      <RevealOnScroll className="story-cta-inner relative z-10">
        <header className="story-chapter-header story-chapter-header--center" data-reveal>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Next step
          </p>
          <h2 className="story-heading story-heading--xl">
            Revolutionize your
            <span>call operation.</span>
          </h2>
          <p className="story-lead story-lead--center">
            Put an AI workforce on chat, voice, CRM and growth — running 24/7 across every channel your
            leads use.
          </p>
        </header>

        <div className="story-cta-actions" data-reveal>
          <Link
            href="/contact"
            className="story-cta-primary"
            data-cursor="book"
            data-cursor-label="Book"
            data-magnetic
          >
            Book a Demo →
          </Link>
          <Link href="/demo" className="story-cta-ghost" data-cursor="view">
            Try the Live Demo
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
