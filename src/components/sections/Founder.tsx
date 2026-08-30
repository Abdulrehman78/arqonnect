"use client";

import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

export default function Founder() {
  return (
    <Section first id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <div
            className="founder-video-frame relative overflow-hidden rounded-2xl border border-line bg-panel/60 aspect-video cursor-pointer group"
            id="founderPlay"
          >
            <div className="founder-poster absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-violet/10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-bg/80 text-2xl font-bold text-accent">
                AA
              </div>
            </div>
            <button
              type="button"
              className="play-btn ai-play-pulse absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAA46B] text-[#0B0F12] shadow-lg transition-transform group-hover:scale-110"
              aria-label="Play founder video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <video className="founder-video-el absolute inset-0 h-full w-full object-cover" playsInline controls style={{ display: "none" }} />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="ai-live-dot" />
            A Word From The Founder
          </span>
          <h2 className="ai-title mt-4 text-3xl font-bold text-text md:text-4xl">
            Why we built ArQonnect
            <span className="ai-title-line" />
          </h2>
          <span className="ai-quote-mark" aria-hidden>
            “
          </span>
          <p className="mt-2 text-base leading-relaxed text-text-dim">
            &ldquo;We started ArQonnect because most agencies were selling businesses software they had to babysit. We wanted to sell them a workforce instead — one that answers the phone, replies to the DM, and books the appointment, at the standard we&apos;d want for our own business.&rdquo;
          </p>
          <div className="mt-8 border-t border-line pt-6">
            <b className="text-text">Abdul</b>
            <span className="block text-sm text-text-dimmer">CEO & Co-Founder, ArQonnect</span>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
