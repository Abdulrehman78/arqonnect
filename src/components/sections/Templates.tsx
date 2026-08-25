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

function WaveBars() {
  return (
    <div className="mb-4 flex h-6 items-end gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className="w-1 origin-bottom rounded-full bg-orange-400"
          style={{
            height: "100%",
            animation: "waveBar 1.2s ease-in-out infinite",
            animationDelay: `${n * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Templates({ embedded = false }: { embedded?: boolean }) {
  const [active, setActive] = useState("support");

  return (
    <>
      <Section
        border={!embedded}
        id="templates"
        alt
        className={`${embedded ? "!py-0 h-auto w-full" : ""}`}
      >
        <SectionHeader
          compact={embedded}
          accent="orange"
          eyebrow="One Platform, Every Function"
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
                <Card className="group h-full border-line bg-panel/40 transition-all hover:border-orange-400/35 hover:bg-orange-500/[0.04]">
                  <div className="flex items-start justify-between gap-3">
                    <WaveBars />
                    <span className="rounded-full border border-orange-400/25 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orange-300">
                      {card.tag}
                    </span>
                  </div>
                  <h4 className="mt-1 font-semibold text-text">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {card.desc}
                  </p>
                  <span className="mt-5 inline-block text-sm text-orange-300 transition-transform group-hover:translate-x-1">
                    Deploy →
                  </span>
                </Card>
              </MotionItem>
            ))}
          </Stagger>
        </FadeUp>
      </Section>

      {!embedded && (
        <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-rose-500/5" />
          <FadeUp className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
              Ready to open a room?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
              Tell us which bottleneck is loudest — we&apos;ll map the stack and
              get the first agent live.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg no-underline transition-all hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(34,197,94,0.4)]"
              >
                Book a Demo →
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline backdrop-blur-sm transition-all hover:border-orange-400/40"
              >
                See pricing
              </Link>
            </div>
          </FadeUp>
        </section>
      )}
    </>
  );
}
