"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import AiAmbient from "@/components/ui/AiAmbient";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MultiStepLeadForm from "@/components/forms/MultiStepLeadForm";
import { HERO_VIDEO } from "@/lib/brand";
import { FINAL_CTA, PROVIDE, SITE } from "@/lib/siteContent";
import { trackBookDemo } from "@/lib/analytics";

function ContactHook(): ReactElement {
  return (
    <section className="story-room story-cta relative flex min-h-[70dvh] flex-col items-center justify-center overflow-hidden border-b border-line bg-bg">
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="hero" quiet />
      <AiAmbient intensity="room" className="z-[2] opacity-55" />
      <RevealOnScroll className="contact-banner-inner relative z-10">
        <header className="story-chapter-header story-chapter-header--center" data-reveal>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Book a demo
          </p>
          <h1 className="story-heading story-heading--xl">
            Stop losing customers
            <span>to unanswered messages.</span>
          </h1>
          <p className="story-lead story-lead--center">{FINAL_CTA.body}</p>
        </header>
        <div className="story-cta-actions" data-reveal>
          <a href="#book" className="story-cta-primary" data-magnetic onClick={() => trackBookDemo("contact_banner")}>
            Book a demo →
          </a>
          <Link href="/pricing" className="story-cta-ghost" data-cursor="view">
            Compare plans
          </Link>
        </div>
        <p className="mt-6 text-center text-sm text-text-dim" data-reveal>
          {FINAL_CTA.note}
        </p>
      </RevealOnScroll>
    </section>
  );
}

function ContactProvide(): ReactElement {
  return (
    <section className="story-room relative overflow-hidden border-b border-line bg-bg-alt">
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" quiet />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Before we start
          </p>
          <h2 className="story-heading">
            What the business
            <span>must provide</span>
          </h2>
          <p className="story-lead">{PROVIDE.body}</p>
        </header>
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
            Book a live demo
            <span>for your channels.</span>
          </h2>
          <p className="story-lead">{FINAL_CTA.body}</p>
        </header>

        <div
          className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
          data-reveal
        >
          <div>
            <p className="text-sm text-text-dim">
              {SITE.location}
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent no-underline hover:underline"
              >
                {SITE.email}
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="story-cta-ghost">
                Demo flow
              </Link>
              <Link href="/faq" className="story-cta-ghost">
                FAQ
              </Link>
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
      <ContactProvide />
      <ContactBook />
    </main>
  );
}
