"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const before = [
  "Calls and DMs answered whenever someone had time",
  "Leads followed up with manually, if at all",
  "Five tools, no shared record of the conversation",
  "No visibility into which channel actually converts",
];

const after = [
  "Every call and message answered in seconds, 24/7",
  "Follow-up, reminders and rebooking fully automated",
  "One CRM — every lead, every channel, one record",
  "Full attribution from first contact to closed deal",
];

const industries = [
  {
    name: "Healthcare",
    result: "Booking & after-hours coverage",
    detail: "Missed calls become appointments — not voicemails.",
    metric: "24/7",
    metricLabel: "Coverage",
  },
  {
    name: "Real Estate",
    result: "Lead response under a minute",
    detail: "Every inquiry answered while buyers are still looking.",
    metric: "< 60s",
    metricLabel: "First reply",
  },
  {
    name: "E-Commerce",
    result: "Support that never sleeps",
    detail: "Chat and SMS that qualify, resolve, and hand off cleanly.",
    metric: "0",
    metricLabel: "Missed DMs",
  },
];

const proofPoints = [
  "Before/after breakdowns per client",
  "Industries: healthcare, real estate, ecommerce",
  "Verified outcomes, not projections",
];

const shapeSteps = [
  { num: "01", title: "Baseline", desc: "Map how leads arrive and where they stall today." },
  { num: "02", title: "Deploy", desc: "Voice + chat agents go live on your channels." },
  { num: "03", title: "Measure", desc: "Response time, booking rate, and pipeline fill." },
  { num: "04", title: "Publish", desc: "Document the before/after with real numbers." },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section
        id="case-studies"
        className="relative flex min-h-[88vh] items-center overflow-hidden bg-bg pt-28 pb-20"
      >
        <InteractiveBackdrop theme="cases" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <div className="inline-flex items-center gap-3 border border-cyan/25 bg-cyan/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              <span className="ai-live-dot !mr-0" />
              Before / After
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
              The gap between &ldquo;we&apos;re busy&rdquo;
              <br />
              <span className="bg-gradient-to-r from-gold to-accent-dim bg-clip-text text-transparent">
                and &ldquo;we&apos;re organized.&rdquo;
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
              We&apos;re early — real client case studies are being documented as
              engagements complete. Here&apos;s the shape every one follows,
              illustrated.
            </p>

            <ul className="mt-8 flex max-w-xl flex-col gap-2.5">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-text-dim"
                >
                  <span className="text-cyan">✓</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <BtnPrimary href="/contact">Be the first case study →</BtnPrimary>
              <BtnGhost href="/demo">Try the Live Demo</BtnGhost>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-gold-dim/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-text">
                    Engagement arc
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-cyan">
                    Illustrative · Typical path
                  </div>
                </div>
                <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                  Preview
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">
                    Before
                  </span>
                  <p className="mt-1.5 text-sm text-text-dim">
                    Missed calls. Manual follow-up. No shared record.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                  <span className="h-px w-8 bg-cyan/40" />
                  ArQonnect
                  <span className="h-px w-8 bg-cyan/40" />
                </div>
                <div className="rounded-xl border border-cyan/25 bg-cyan/10 px-4 py-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan">
                    After
                  </span>
                  <p className="mt-1.5 text-sm text-text-dim">
                    Answered in seconds. Automated. One CRM.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px border-t border-line bg-line">
                {[
                  { v: "∞", l: "Channels" },
                  { v: "1", l: "CRM" },
                  { v: "0", l: "Dropped" },
                ].map((s) => (
                  <div key={s.l} className="bg-bg/80 px-2 py-3 text-center sm:px-3 sm:py-3.5">
                    <div className="text-sm font-bold text-cyan sm:text-base">{s.v}</div>
                    <div className="mt-0.5 text-[9px] uppercase leading-tight tracking-wider text-text-dimmer sm:text-[10px]">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before / After comparison */}
      <Section border alt id="before-after">
        <SectionHeader
          center
          accent="cyan"
          eyebrow="The Swap"
          title="Same business. Different operating system."
          description="Illustrative, based on the workflow every ArQonnect client moves through — ask us for real client results on your first call."
        />

        <FadeUp>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/[0.06] to-transparent p-6 md:p-8">
              <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                Before
              </span>
              <ul className="mt-6 space-y-4">
                {before.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-text-dim"
                  >
                    <span className="mt-0.5 shrink-0 text-red-400/80">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-lg text-cyan">
                →
              </span>
            </div>
            <div className="flex items-center justify-center py-2 md:hidden">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                After ArQonnect ↓
              </span>
            </div>

            <div className="rounded-2xl border border-cyan/25 bg-gradient-to-br from-cyan/[0.08] to-transparent p-6 md:p-8">
              <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                After
              </span>
              <ul className="mt-6 space-y-4">
                {after.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-text-dim"
                  >
                    <span className="mt-0.5 shrink-0 text-cyan">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* How a case study is built */}
      <Section id="shape">
        <SectionHeader
          center
          accent="cyan"
          eyebrow="How We Document"
          title="Every spotlight follows the same arc."
          description="We don't invent outcomes — we instrument the engagement, then publish what changed."
        />

        <FadeUp>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan/20 bg-gradient-to-br from-panel/80 via-panel/40 to-cyan/5 p-8 md:p-10">
            <div className="absolute left-[12%] right-[12%] top-[3.75rem] hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent md:block" />
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
              {shapeSteps.map((step) => (
                <li key={step.num} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan/30 bg-bg font-mono text-sm font-semibold text-cyan shadow-[0_0_40px_rgba(234,164,107,0.22)]">
                    {step.num}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-dim">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </Section>

      {/* Industries */}
      <Section border alt id="industries">
        <SectionHeader
          center
          accent="cyan"
          eyebrow="Where It Lands"
          title="Real deployments, real numbers."
          description="See what changed for clients across healthcare, real estate and ecommerce once the AI workforce took over the follow-up."
        />

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {industries.map((ind) => (
            <MotionItem key={ind.name}>
              <Card className="group h-full border-line bg-panel/40 transition-all hover:border-cyan/35 hover:bg-panel/70">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                    {ind.name}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan">{ind.metric}</div>
                    <div className="text-[10px] uppercase tracking-wider text-text-dimmer">
                      {ind.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">
                  {ind.result}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {ind.detail}
                </p>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </Section>

      {/* Founding spotlight */}
      <Section id="spotlight">
        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-cyan/20 bg-gradient-to-br from-panel/80 via-panel/50 to-cyan/5 shadow-[0_0_80px_rgba(234,164,107,0.08)]">
            <div className="grid gap-0 md:grid-cols-[1.4fr_0.8fr]">
              <div className="p-8 md:p-10">
                <span className="inline-block rounded-full border border-line bg-panel-2 px-3 py-1 text-xs text-text-dimmer">
                  Your Logo Here
                </span>
                <span className="mt-4 block font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                  Coming Soon — First Client Spotlight
                </span>
                <blockquote className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                  &ldquo;This is where your story goes. Once the first engagement
                  wraps, we&apos;ll swap this for a real quote, a real name, and a
                  real result.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 text-sm font-bold text-cyan">
                    ?
                  </span>
                  <div>
                    <div className="font-semibold text-text">Reserved for you</div>
                    <div className="text-sm text-text-dimmer">
                      Founding client, ArQonnect
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 border-t border-line bg-cyan/[0.04] p-10 text-center md:border-l md:border-t-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-xl text-cyan">
                  ▶
                </div>
                <span className="text-sm text-text-dim">Be the first case study</span>
                <Link
                  href="/contact"
                  className="ai-cta-shine mt-2 inline-flex items-center rounded-full bg-[#EAA46B] px-5 py-2.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46]"
                >
                  Claim this spot →
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-28">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-5xl">
            Your before-and-after could be next.
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
            Put an AI workforce on the follow-up — then let the numbers speak
            for the engagement.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46] hover:shadow-[0_0_32px_rgba(234,164,107,0.4)]"
            >
              Book a Demo →
            </Link>
            <Link
              href="/crm"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline backdrop-blur-sm transition-all hover:border-cyan/40"
            >
              See the CRM
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
