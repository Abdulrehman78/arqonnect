"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ROOM_VEIL } from "@/lib/brand";

const steps = [
  {
    num: "01",
    title: "Build agents that sound human",
    body: "Voice and chat that win the conversation, take the call, and book the appointment.",
  },
  {
    num: "02",
    title: "Deploy across the full stack",
    body: "Twenty AI-run services — agents, funnels, CRM, SEO — built to run themselves.",
  },
  {
    num: "03",
    title: "Measure what converts",
    body: "Every lead updates HubSpot, Salesforce, or your CRM. One record, every channel.",
  },
];

/** Platform — numbered horizontal steps, not a card grid clone. */
export default function FeaturesBento(): ReactElement {
  return (
    <section className="story-platform relative min-h-[100dvh] overflow-hidden border-b border-line bg-bg">
      <ZoomBackdrop
        src="/images/features-banner.jpg"
        position="60% center"
        delaySec={18}
        quiet
        veil={ROOM_VEIL}
      />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Platform
          </p>
          <h2 className="story-heading">
            One platform for
            <span>all your agents.</span>
          </h2>
          <p className="story-lead">
            Orchestration, CRM sync, and growth visibility — prompt to production without a tool pile.
          </p>
        </header>

        <div className="story-steps">
          {steps.map((s, i) => (
            <article
              key={s.num}
              className="story-step"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <span className="story-step-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="story-foot" data-reveal>
          <span>
            <em>20+</em> services · <em>1</em> stack · <em>0</em> sprawl
          </span>
          <Link href="/services">Explore all services →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
