"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Section,
  SectionHeader,
  Card,
  BrowserFrame,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const features = [
  {
    num: "01",
    title: "AI Recap & Sentiment",
    desc: "Every customer interaction summarized automatically, with sentiment scored in real time.",
  },
  {
    num: "02",
    title: "Pipeline & Opportunities",
    desc: "Leads move from first message to closed deal without a spreadsheet in sight.",
  },
  {
    num: "03",
    title: "Reputation Management",
    desc: "Review requests, ratings and listings tracked and nudged automatically.",
  },
  {
    num: "04",
    title: "Unified Reporting",
    desc: "One view across chat, voice, SMS and social — no exporting, no guesswork.",
  },
];

const syncPoints = [
  {
    title: "Two-way sync",
    desc: "Calls, chats and bookings write themselves into HubSpot, Salesforce or your CRM of choice.",
  },
  {
    title: "No manual data entry",
    desc: "Every lead, every channel, one record — updated the moment the conversation ends.",
  },
  {
    title: "Automation triggers",
    desc: "Pipeline stages, tasks and follow-ups fire from the conversation itself.",
  },
];

const pipeline = [
  { stage: "Inbound", detail: "Chat, voice, SMS or DM lands" },
  { stage: "Qualify", detail: "AI scores intent & urgency" },
  { stage: "Update CRM", detail: "Record writes itself in" },
  { stage: "Book / Close", detail: "Appointment or deal advance" },
];

const platforms = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Zoho",
  "Custom CRM API",
];

const liveStats = [
  { label: "Open deals", value: "128" },
  { label: "Avg. response", value: "< 8s" },
  { label: "Channels live", value: "4" },
];

export default function Crm() {
  return (
    <>
      {/* Hero */}
      <section
        id="crm"
        className="relative flex min-h-[88vh] items-center overflow-hidden bg-bg pt-28 pb-20"
      >
        <InteractiveBackdrop theme="crm" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <div className="inline-flex items-center gap-3 border border-cyan/25 bg-accent/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              <span className="ai-live-dot !mr-0" />
              Command Center
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
              One CRM.
              <br />
              <span className="bg-gradient-to-r from-gold via-cyan to-electric-2 bg-clip-text text-transparent">
                Every conversation, tracked.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
              Pipelines, reviews, reputation and reporting live in a single
              dashboard — fed automatically by every chatbot and voice call your
              AI workforce handles.
            </p>

            <ul className="mt-8 flex max-w-xl flex-col gap-2.5">
              {[
                "Auto-logged from chat, voice, SMS & DMs",
                "Sentiment + recap on every touch",
                "Syncs to HubSpot, Salesforce, or yours",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-text-dim"
                >
                  <span className="text-cyan">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <BtnPrimary href="/contact">Book a Demo →</BtnPrimary>
              <BtnGhost href="/demo">See it live</BtnGhost>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-violet/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-text">
                    Pipeline snapshot
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-cyan">
                    Live · All channels
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-cyan">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                  Syncing
                </span>
              </div>

              <div className="grid grid-cols-3 gap-px bg-line">
                {liveStats.map((s) => (
                  <div key={s.label} className="bg-bg/80 px-2 py-3 text-center sm:px-4 sm:py-4">
                    <div className="text-base font-bold text-cyan sm:text-lg md:text-xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[9px] uppercase leading-tight tracking-wider text-text-dimmer sm:text-[10px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[16/10] bg-bg-alt">
                <Image
                  src="/media/img_7.webp"
                  alt="ArQonnect CRM dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/50 to-transparent p-3 sm:p-4">
                  <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider text-text-dimmer sm:flex-row sm:items-center sm:justify-between sm:text-xs">
                    <span className="text-cyan">Deal board preview</span>
                    <span className="truncate">HubSpot · Salesforce · Custom</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature deep-dive */}
      <Section border id="crm-features" alt>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <SectionHeader
              eyebrow="Built Into The Stack"
              accent="cyan"
              title={
                <>
                  What the dashboard
                  <br />
                  actually does.
                </>
              }
              description="Four surfaces. One source of truth. Every agent you deploy feeds this room automatically."
            />
            <div className="mt-2 hidden lg:block">
              <BrowserFrame>
                <div className="relative aspect-[16/10] bg-bg-alt">
                  <Image
                    src="/media/img_7.webp"
                    alt="CRM feature preview"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </BrowserFrame>
            </div>
          </FadeUp>

          <Stagger className="space-y-3">
            {features.map((f) => (
              <MotionItem key={f.num}>
                <div className="group flex gap-4 rounded-2xl border border-line bg-panel/40 p-5 transition-all hover:border-cyan/35 hover:bg-accent/5">
                  <span className="font-mono text-xs font-semibold text-cyan">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-dim">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Sync / platforms */}
      <Section id="crm-sync">
        <SectionHeader
          center
          accent="cyan"
          eyebrow="CRM & Automation"
          title="Every lead updates itself."
          description="ArQonnect wires agents directly into HubSpot, Salesforce or your CRM of choice, so calls, chats and bookings write themselves in."
        />

        <FadeUp>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {platforms.map((name) => (
              <span
                key={name}
                className="rounded-full border border-cyan/20 bg-accent/5 px-5 py-2 text-sm font-medium text-text-dim transition-colors hover:border-cyan/40 hover:text-electric-2"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeUp>

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {syncPoints.map((item, i) => (
            <MotionItem key={item.title}>
              <Card className="h-full border-line bg-panel/40 transition-all hover:border-cyan/30 hover:bg-panel/70">
                <span className="font-mono text-xs text-cyan/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {item.desc}
                </p>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </Section>

      {/* Pipeline flow */}
      <Section border alt id="crm-pipeline">
        <SectionHeader
          center
          accent="cyan"
          eyebrow="From Hello To Closed"
          title="The path every lead takes."
          description="No copy-paste. No forgotten follow-ups. The conversation becomes the record."
        />

        <FadeUp>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan/20 bg-gradient-to-br from-panel/80 via-panel/40 to-accent/5 p-8 shadow-[0_0_80px_rgba(234,164,107,0.08)] md:p-10">
            <div className="absolute left-[12%] right-[12%] top-[3.75rem] hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent md:block" />
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
              {pipeline.map((step, i) => (
                <li key={step.stage} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan/30 bg-bg font-mono text-sm font-semibold text-cyan shadow-[0_0_40px_rgba(234,164,107,0.2)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-text">
                    {step.stage}
                  </h3>
                  <p className="mt-2 text-sm text-text-dim">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-28">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-5xl">
            Stop rebuilding the pipeline by hand.
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
            Put chat, voice and CRM on the same stack — so every lead lands once,
            updates itself, and never goes quiet.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46] hover:shadow-[0_0_32px_rgba(234,164,107,0.4)]"
            >
              Book a Demo →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline backdrop-blur-sm transition-all hover:border-cyan/40"
            >
              Explore Services
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
