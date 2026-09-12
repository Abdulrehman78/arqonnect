"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import AiAmbient from "@/components/ui/AiAmbient";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO } from "@/lib/brand";
import { FINAL_CTA, PROVIDE } from "@/lib/siteContent";

/** Final CTA — full-bleed centered. */
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
            Stop losing customers
            <span>to unanswered messages.</span>
          </h2>
          <p className="story-lead story-lead--center">{FINAL_CTA.body}</p>
        </header>

        <div className="story-cta-actions" data-reveal>
          <Link
            href={FINAL_CTA.primary.href}
            className="story-cta-primary"
            data-cursor="book"
            data-cursor-label="Book"
            data-magnetic
          >
            {FINAL_CTA.primary.label} →
          </Link>
          <Link href={FINAL_CTA.secondary.href} className="story-cta-ghost" data-cursor="view">
            {FINAL_CTA.secondary.label}
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-text-dim" data-reveal>
          {FINAL_CTA.note}
        </p>

        <div className="mx-auto mt-10 max-w-2xl text-center" data-reveal>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
            {PROVIDE.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{PROVIDE.body}</p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
