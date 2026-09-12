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
import { FINAL_CTA } from "@/lib/siteContent";

const tabs = [
  { id: "inbox", label: "Inbox" },
  { id: "twin", label: "Business Twin" },
  { id: "crm", label: "CRM & booking" },
  { id: "control", label: "Control" },
];

const panels: Record<
  string,
  Array<{ title: string; desc: string; tag: string }>
> = {
  inbox: [
    {
      title: "Unified inbox",
      desc: "WhatsApp, Instagram, Messenger and web chat in one operator inbox.",
      tag: "Phase 0",
    },
    {
      title: "Grounded AI replies",
      desc: "Answers from uploaded business knowledge — source citations for operators.",
      tag: "Phase 0",
    },
    {
      title: "Channel polish",
      desc: "WhatsApp buttons/templates, Instagram story replies and Messenger cards where Meta allows.",
      tag: "Phase 1",
    },
  ],
  twin: [
    {
      title: "AI Business Twin",
      desc: "Tone, services, pricing rules, hours and do-not-reply topics — controlled by your team.",
      tag: "Phase 1",
    },
    {
      title: "Prompt manager",
      desc: "Edit, test, version, roll back and restore Twin instructions without a code deploy.",
      tag: "Phase 1",
    },
    {
      title: "Intent detection",
      desc: "Routes FAQs, bookings, complaints, contact details and human requests correctly.",
      tag: "Phase 1",
    },
  ],
  crm: [
    {
      title: "Contact CRM",
      desc: "Conversations create or update contacts with tags, notes, history and filters.",
      tag: "Phase 0",
    },
    {
      title: "Full CRM",
      desc: "Deals, tasks, pipelines, owners and full timelines across every channel.",
      tag: "Phase 1",
    },
    {
      title: "Appointment booking",
      desc: "Live slots from Google Calendar or Cal.com — confirm, cancel, reschedule in chat.",
      tag: "Phase 1",
    },
  ],
  control: [
    {
      title: "Human handoff",
      desc: "Low confidence or a request for a person routes to staff — AI replies stop.",
      tag: "Phase 0",
    },
    {
      title: "Roles & MFA",
      desc: "Admin, supervisor, agent and auditor roles with multi-factor authentication.",
      tag: "Phase 1",
    },
    {
      title: "Workflow rules",
      desc: "Assign agents, send messages, update CRM fields or trigger a webhook.",
      tag: "Phase 1",
    },
  ],
};

export default function Templates() {
  const [active, setActive] = useState("inbox");

  return (
    <>
      <Section border id="templates">
        <SectionHeader
          accent="accent"
          eyebrow="Workflows"
          title={
            <>
              Start from the job
              <br />
              that matters most.
            </>
          }
          description="Same product — grouped by what your team needs running first."
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
                <Card className="group h-full border-line bg-panel/40 transition-colors hover:border-glass">
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-dimmer">
                    {card.tag}
                  </span>
                  <h4 className="mt-4 font-semibold text-text">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {card.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block text-sm text-accent no-underline transition-transform group-hover:translate-x-1"
                  >
                    Book a demo →
                  </Link>
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
            {FINAL_CTA.title}
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-dim">
            {FINAL_CTA.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={FINAL_CTA.primary.href}
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46]"
            >
              {FINAL_CTA.primary.label} →
            </Link>
            <Link
              href={FINAL_CTA.secondary.href}
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline transition-all hover:border-glass"
            >
              {FINAL_CTA.secondary.label}
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
