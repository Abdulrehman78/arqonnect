"use client";

import { useState } from "react";
import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO } from "@/lib/brand";
import { FAQ } from "@/lib/siteContent";

export default function FaqPageClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main aria-label="FAQ">
      <section className="story-room story-platform relative overflow-hidden border-b border-line bg-bg pt-[clamp(5rem,12dvh,8rem)]">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {FAQ.eyebrow}
            </p>
            <h1 className="story-heading">
              Frequently asked
              <span>questions</span>
            </h1>
          </header>

          <div className="mt-10 space-y-3">
            {FAQ.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="story-channel" data-reveal style={{ ["--i" as string]: i }}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-base font-semibold text-text">{item.q}</span>
                    <span className="shrink-0 font-mono text-accent" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-text-dim">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="story-cta-actions mt-12" data-reveal>
            <Link href="/contact" className="story-cta-primary">
              Book a demo →
            </Link>
            <Link href="/pricing" className="story-cta-ghost">
              Compare plans
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
