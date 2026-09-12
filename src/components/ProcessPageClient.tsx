"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO, MARKETS_VIDEO } from "@/lib/brand";
import { HOW_IT_WORKS } from "@/lib/siteContent";

export default function ProcessPageClient() {
  return (
    <main aria-label="How it works">
      <section className="story-room story-platform relative overflow-hidden border-b border-line bg-bg pt-[clamp(5rem,12dvh,8rem)]">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {HOW_IT_WORKS.eyebrow}
            </p>
            <h1 className="story-heading">
              How a business
              <span>uses ArQonnect</span>
            </h1>
            <p className="story-lead">{HOW_IT_WORKS.lead}</p>
          </header>

          <ol className="mt-12 space-y-6">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <li
                key={step.num}
                className="story-channel flex gap-5"
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                <span className="story-channel-index shrink-0">{step.num}</span>
                <div>
                  <h2 className="text-xl font-semibold text-text">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="story-foot" data-reveal>
            <span>Seven steps from channels to CRM</span>
            <Link href="/services">See features →</Link>
          </div>
        </RevealOnScroll>
      </section>

      <section className="story-room story-cta relative flex flex-col items-center justify-center overflow-hidden border-t border-line bg-bg-alt">
        <RoomVideoBackdrop src={MARKETS_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="hero" quiet />
        <RevealOnScroll className="story-cta-inner relative z-10">
          <header className="story-chapter-header story-chapter-header--center" data-reveal>
            <h2 className="story-heading">
              Ready to see it
              <span>on your channels?</span>
            </h2>
          </header>
          <div className="story-cta-actions" data-reveal>
            <Link href="/contact" className="story-cta-primary">
              Book a demo →
            </Link>
            <Link href="/demo" className="story-cta-ghost">
              Demo flow
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
