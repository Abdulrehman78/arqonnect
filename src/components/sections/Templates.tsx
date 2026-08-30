"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  Card,
  Chip,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const tabs = [
  { id: "support", label: "Support" },
  { id: "sales", label: "Sales" },
  { id: "ops", label: "Operations" },
  { id: "marketing", label: "Marketing" },
];

const panels: Record<
  string,
  Array<{ title: string; desc: string; tag: string }>
> = {
  support: [
    {
      title: "Chat Widget / Conversation AI",
      desc: "Never leaves a visitor on read — answers, qualifies, hands off.",
      tag: "Chat",
    },
    {
      title: "Missed Call Text-Back",
      desc: "Miss the call, still keep the lead — a text goes out in seconds.",
      tag: "SMS",
    },
    {
      title: "Call Tracking",
      desc: "Every ring recorded, tagged and traced back to its source.",
      tag: "Voice",
    },
  ],
  sales: [
    {
      title: "Voice AI",
      desc: "Answers, qualifies, books the appointment — first ring, every time.",
      tag: "Voice",
    },
    {
      title: "Ad Manager",
      desc: "Google, Meta and Instagram campaigns reported next to the leads they made.",
      tag: "Ads",
    },
    {
      title: "Webinar Funnels",
      desc: "The pitch that plays itself, live or on replay.",
      tag: "Funnels",
    },
  ],
  ops: [
    {
      title: "CRM",
      desc: "Every lead, one home — tracked from hello to signed deal.",
      tag: "CRM",
    },
    {
      title: "Business Process Automation",
      desc: "Manual steps, removed for good.",
      tag: "Ops",
    },
    {
      title: "HubSpot / Salesforce Integration",
      desc: "Every lead synced, no manual entry.",
      tag: "Sync",
    },
  ],
  marketing: [
    {
      title: "Social Media Marketing",
      desc: "Content that shows up, on schedule, across every platform.",
      tag: "Social",
    },
    {
      title: "SEO / AEO / GEO",
      desc: "Found first, ranked right — cited in AI answers, not just Google.",
      tag: "Search",
    },
    {
      title: "Email Marketing Automation",
      desc: "Sequences and newsletters that actually get opened.",
      tag: "Email",
    },
  ],
};

export default function Templates() {
  const [active, setActive] = useState("support");

  return (
    <>
      <Section border id="templates">
        <SectionHeader
          accent="accent"
          eyebrow="Templates"
          title={
            <>
              An agent for whatever&apos;s
              <br />
              on fire this week.
            </>
          }
          description="Pick the function that's bottlenecked — every template below is a live agent, not a mockup."
        />

        <FadeUp>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Chip
                key={t.id}
                active={active === t.id}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </Chip>
            ))}
          </div>

          <Stagger className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {panels[active].map((card) => (
              <MotionItem key={card.title}>
                <Card className="group h-full border-line bg-panel/40 transition-colors hover:border-white/15">
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-dimmer">
                    {card.tag}
                  </span>
                  <h4 className="mt-4 font-semibold text-text">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {card.desc}
                  </p>
                  <span className="mt-5 inline-block text-sm text-accent transition-transform group-hover:translate-x-1">
                    Deploy →
                  </span>
                </Card>
              </MotionItem>
            ))}
          </Stagger>
        </FadeUp>
      </Section>

      <section className="relative overflow-hidden border-t border-line px-4 py-24 sm:px-6 md:py-28">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-2xl text-center">
          <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-4xl">
            Ready to open a room?
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-dim">
            Tell us which bottleneck is loudest — we&apos;ll map the stack and
            get the first agent live.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46]"
            >
              Book a Demo →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline transition-all hover:border-white/20"
            >
              See pricing
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
