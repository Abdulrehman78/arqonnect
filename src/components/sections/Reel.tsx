"use client";

import type React from "react";
import Image from "next/image";
import { Section, BtnPrimary } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";
import PageBanner from "@/components/ui/PageBanner";

export default function Reel() {
  return (
    <>
      <PageBanner
        id="reel"
        banner="reel"
        center
        eyebrow="See It Work"
        title="A lead messages your business"
        titleMuted="at 11:41 PM."
        description="Here's exactly what happens next — no one on your team touches a thing."
      />
      <Section id="reel-content" className="overflow-hidden">
        <FadeUp>
          <div className="reel-grid grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="reel-phone-wrap">
              <div className="mb-4 flex gap-2">
                <span className="reel-chip ai-chip-breathe rounded-full border border-line bg-panel/60 px-3 py-1 text-xs">💬 WhatsApp</span>
                <span className="reel-chip ai-chip-breathe rounded-full border border-line bg-panel/60 px-3 py-1 text-xs">📷 Instagram</span>
              </div>
              <div className="reel-phone overflow-hidden rounded-2xl border border-line bg-panel/80">
                <div className="reel-phone-head flex items-center gap-3 border-b border-line px-4 py-3">
                  <span className="reel-ai-dot h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                  <div>
                    <b className="text-sm text-text">Your business</b>
                    <span className="block text-xs text-text-dimmer">online · replies instantly</span>
                  </div>
                </div>
                <div className="reel-phone-body space-y-3 p-4" id="reelChatBody">
                  <div className="reel-bubble in ml-0 max-w-[85%] rounded-2xl rounded-tl-sm bg-panel-2 px-4 py-2.5 text-sm text-text-dim" style={{ "--d": "0.2s" } as React.CSSProperties}>
                    Can you quote a job this week?
                  </div>
                  <div className="reel-bubble out ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-2.5 text-sm text-text" style={{ "--d": "1s" } as React.CSSProperties}>
                    Yes — I can book you at 7:30. Lock it in?
                  </div>
                </div>
              </div>
            </div>

            <div className="reel-side space-y-4">
              <div className="reel-card rounded-2xl border border-line bg-panel/60 p-5">
                <div className="reel-card-head flex items-center gap-3">
                  <span className="reel-card-avatar flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">PS</span>
                  <div>
                    <b className="text-sm text-text">Prime Services</b>
                    <span className="block text-xs text-text-dimmer">profile · what the AI learns</span>
                  </div>
                </div>
                <div className="reel-rows mt-4 space-y-2">
                  {[
                    ["Services", "Plumbing · Electric · AC", "0.1s"],
                    ["Hours", "Mon–Sat · 8 AM–8 PM", "0.25s"],
                    ["Pricing", "from $120/visit", "0.4s"],
                    ["FAQs", "areas · warranty · call-out", "0.55s"],
                    ["Job rules", "2-hr window · deposit", "0.7s"],
                  ].map(([label, val, d]) => (
                    <div key={label as string} className="reel-row flex items-center justify-between rounded-lg border border-line bg-bg/40 px-3 py-2 text-sm" style={{ "--d": d } as React.CSSProperties}>
                      <span className="text-text-dimmer">{label}</span>
                      <em className="text-text-dim not-italic">{val}</em>
                      <i className="text-accent not-italic">✓</i>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reel-checklist space-y-2">
                {[
                  ["Books the job", "0.9s", false],
                  ["Checks your calendar", "1.1s", false],
                  ["Takes the deposit", "1.3s", false],
                  ["Ends no-shows", "1.5s", false],
                  ["Reminder sent · night before", "1.7s", true],
                  ["Job confirmed", "1.9s", true],
                ].map(([text, d, dim]) => (
                  <div key={text as string} className={`reel-check flex items-center gap-2 text-sm ${dim ? "text-text-dimmer" : "text-text-dim"}`} style={{ "--d": d } as React.CSSProperties}>
                    <i className="text-accent not-italic">✓</i> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="reel-closer mt-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Done-For-You · Free</span>
          <h3 className="mt-4 text-2xl font-bold text-text md:text-3xl">We set up the whole infrastructure.</h3>
          <p className="mt-2 text-text-dim">Built for you, free — you just take the bookings.</p>
          <BtnPrimary href="/contact" className="mt-6">Talk To AI →</BtnPrimary>
        </FadeUp>
      </Section>

      <section className="marquee-section border-y border-line bg-bg-alt py-10" id="servicesTicker">
        <div className="marquee-label text-center text-xs font-medium uppercase tracking-[0.2em] text-text-dimmer mb-4">
          Everything we build & run — powered by AI
        </div>
        <div className="chip-track flex w-max gap-3 px-4" id="serviceChipTrack" />
      </section>

      <section className="marquee-section border-b border-line bg-bg-alt py-10">
        <div className="marquee-label text-center text-xs font-medium uppercase tracking-[0.2em] text-text-dimmer mb-4">
          Connected to the tools you already run on
        </div>
        <div className="marquee-track flex w-max items-center gap-12 px-4" id="logoTrack">
          <Image src="/media/img_5.webp" alt="Integrations" width={200} height={70} className="h-14 w-auto opacity-80" />
          <Image src="/media/img_6.webp" alt="Integrations" width={200} height={70} className="h-14 w-auto opacity-80" />
        </div>
        <div className="chip-track mt-4 flex w-max gap-3 px-4" id="chipTrack" />
      </section>
    </>
  );
}
