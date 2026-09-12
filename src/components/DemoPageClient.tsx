"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO } from "@/lib/brand";
import { DEMO_FLOW } from "@/lib/siteContent";

export default function DemoPageClient() {
  return (
    <main aria-label="Demo">
      <section className="story-room story-platform relative overflow-hidden border-b border-line bg-bg pt-[clamp(5rem,12dvh,8rem)]">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {DEMO_FLOW.eyebrow}
            </p>
            <h1 className="story-heading">
              Recommended
              <span>demonstration flow</span>
            </h1>
            <p className="story-lead">{DEMO_FLOW.lead}</p>
          </header>

          <ol className="mt-12 space-y-5">
            {DEMO_FLOW.steps.map((step, i) => (
              <li
                key={step}
                className="story-channel flex gap-5"
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                <span className="story-channel-index shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-text">{step}</p>
              </li>
            ))}
          </ol>

          <div className="story-cta-actions mt-12" data-reveal>
            <Link href="/contact" className="story-cta-primary">
              Book a live demo →
            </Link>
            <Link href="/process" className="story-cta-ghost">
              How it works
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
