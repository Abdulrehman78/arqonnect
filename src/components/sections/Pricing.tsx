"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import PageBanner, { PageBannerPanel } from "@/components/ui/PageBanner";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const tiers = [
  { id: "starter", label: "Starter Voice", rate: 0.09, hint: "Best for early volume" },
  { id: "premium", label: "Premium Voice", rate: 0.14, hint: "Natural, high-convert tone" },
  { id: "multilingual", label: "Multilingual Voice", rate: 0.22, hint: "Multi-market coverage" },
];

const callouts = [
  { lead: "Setup in", bold: "days", rest: ", not months" },
  { lead: "One", bold: "login", rest: ", one bill" },
  { lead: "Built & managed", bold: "for you", rest: "" },
];

const included = [
  "CRM, funnels, forms & email",
  "SMS, automations & courses",
  "Call tracking & reputation",
  "Analytics, communities & e-signatures",
  "Branded mobile app",
  "Chat + voice agents on every channel",
];

const replaceStack = [
  { name: "CRM seat licenses", old: "$400" },
  { name: "Funnel / form tools", old: "$250" },
  { name: "SMS + email platform", old: "$320" },
  { name: "Call tracking", old: "$180" },
  { name: "Reputation + analytics", old: "$220" },
  { name: "App / misc stack", old: "$230" },
];

const trust = [
  {
    title: "One flat rate",
    desc: "No hidden per-seat fees. Cancel anytime, no lock-in contracts.",
  },
  {
    title: "Live cost calculator",
    desc: "See your exact monthly estimate before you talk to anyone.",
  },
  {
    title: "$97/month mindset",
    desc: "Transparent pricing for the full stack — built to replace $1,600+ of tools.",
  },
];

export default function Pricing() {
  const [minutes, setMinutes] = useState(500);
  const [rate, setRate] = useState(0.09);

  const voice = rate * 0.5;
  const crm = rate * 0.33;
  const tele = rate * 0.17;
  const total = Math.round(rate * minutes);
  const oldStack = 1600;
  const savings = Math.max(0, oldStack - total);

  const bars = [
    { label: "Voice Engine", value: voice, color: "#EAA46B", pct: 50 },
    { label: "CRM & Automation", value: crm, color: "#C87D46", pct: 33 },
    { label: "Telephony", value: tele, color: "#EAA46B", pct: 17 },
  ];

  return (
    <>
      <PageBanner
        id="pricing"
        banner="pricing"
        minHeight="min-h-[88vh]"
        eyebrow="Why Switch"
        title="Everything you pay $1,600+ for."
        titleMuted="One price."
        description="CRM, funnels, forms, email, SMS, automations, courses, call tracking, reputation, analytics, communities, e-signatures and a branded mobile app — replaced by one ArQonnect stack."
        aside={
          <PageBannerPanel>
            <div className="flex items-center justify-between border-b border-glass px-5 py-4">
              <div>
                <div className="room-heading text-sm font-semibold">
                  Monthly stack cost
                </div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-accent/90">
                  Old tools vs ArQonnect
                </div>
              </div>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Save ~${savings.toLocaleString()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-glass-divider">
              <div className="bg-glass-inner p-5">
                <span className="room-caption text-xs uppercase tracking-wider">
                  Fragmented stack
                </span>
                <b className="banner-heading-muted mt-2 block text-3xl line-through decoration-red-400/60">
                  $1,600+
                </b>
                <p className="room-caption mt-2 text-xs">
                  Seats, SMS, CRM, tracking, apps
                </p>
              </div>
              <div className="bg-accent/10 p-5">
                <span className="room-caption text-xs uppercase tracking-wider text-accent">
                  ArQonnect
                </span>
                <b className="banner-heading mt-2 block text-3xl">from $97</b>
                <p className="room-body mt-2 text-xs">
                  One bill. Full stack. Cancel anytime.
                </p>
              </div>
            </div>
            <div className="space-y-2.5 p-4 sm:p-5">
              {replaceStack.slice(0, 4).map((row) => (
                <div
                  key={row.name}
                  className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                >
                  <span className="room-body min-w-0">{row.name}</span>
                  <span className="shrink-0 font-mono text-xs room-caption">
                    {row.old}
                    <span className="ml-2 text-accent">→ covered</span>
                  </span>
                </div>
              ))}
            </div>
          </PageBannerPanel>
        }
      >
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <BtnPrimary href="#calculator">Estimate your cost →</BtnPrimary>
          <BtnGhost href="/contact">Book a Demo</BtnGhost>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          {callouts.map((c) => (
            <span
              key={c.lead + c.bold}
              className="rounded-full border border-glass bg-glass-inner px-4 py-2 text-sm room-muted"
            >
              {c.lead}{" "}
              <b className="font-semibold text-accent">{c.bold}</b>
              {c.rest}
            </span>
          ))}
        </div>
      </PageBanner>

      {/* Comparison visual */}
      <Section border alt id="compare">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeUp>
            <SectionHeader
              accent="accent"
              eyebrow="The Swap"
              title="One login replaces the tool pile."
              description="Stop paying for five products that never talk to each other. ArQonnect is the stack — chat, voice, CRM and growth under one bill."
            />
            <Stagger className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {included.map((item) => (
                <MotionItem key={item}>
                  <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-panel/40 px-4 py-3 text-sm text-text-dim">
                    <span className="text-gold">✓</span>
                    {item}
                  </div>
                </MotionItem>
              ))}
            </Stagger>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line bg-panel/40 shadow-2xl shadow-[0_20px_40px_rgb(var(--shadow-rgb)/0.08)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/media/img_2.webp"
                  alt="ArQonnect vs the old stack pricing comparison"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/50 to-transparent p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-gold">
                    Side-by-side · Old stack vs ArQonnect
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* Calculator */}
      <Section id="calculator">
        <SectionHeader
          center
          accent="accent"
          eyebrow="Estimate Your Cost"
          title="No surprise invoices."
          description="Slide to your expected monthly call volume — the breakdown updates live."
        />

        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-panel/80 via-panel/50 to-accent/5 shadow-[0_0_80px_rgba(234,164,107,0.08)]">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-line p-6 md:border-b-0 md:border-r md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <label
                      htmlFor="calcMinutes"
                      className="text-sm text-text-dim"
                    >
                      Monthly voice minutes
                    </label>
                    <div className="mt-2 text-3xl font-bold tracking-tight text-text">
                      {minutes.toLocaleString()}
                      <span className="ml-2 text-base font-medium text-text-dimmer">
                        min
                      </span>
                    </div>
                  </div>
                  <span
                    id="calcMinutesValue"
                    className="rounded-full border border-gold/25 bg-accent/10 px-3 py-1 text-xs font-medium text-gold"
                  >
                    Live estimate
                  </span>
                </div>

                <input
                  type="range"
                  id="calcMinutes"
                  min={50}
                  max={5000}
                  step={50}
                  value={minutes}
                  onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                  className="mt-6 w-full accent-[#EAA46B]"
                />
                <div className="mt-2 flex justify-between font-mono text-[11px] text-text-dimmer">
                  <span>50</span>
                  <span>5,000</span>
                </div>

                <div className="mt-8 space-y-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-text-dimmer">
                    Voice tier
                  </span>
                  <div className="grid gap-2">
                    {tiers.map((t) => {
                      const active = rate === t.rate;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          className={`calc-tier flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                            active
                              ? "active border-gold/40 bg-accent/15"
                              : "border-line bg-bg/40 hover:border-gold/20"
                          }`}
                          data-rate={t.rate}
                          onClick={() => setRate(t.rate)}
                        >
                          <div>
                            <div
                              className={`text-sm font-semibold ${
                                active ? "text-gold" : "text-text"
                              }`}
                            >
                              {t.label}
                            </div>
                            <div className="mt-0.5 text-xs text-text-dimmer">
                              {t.hint}
  </div>
    </div>
                          <span
                            className={`font-mono text-sm ${
                              active ? "text-gold" : "text-text-dim"
                            }`}
                          >
                            ${t.rate.toFixed(2)}/min
                          </span>
                        </button>
                      );
                    })}
    </div>
  </div>

                <p className="mt-6 text-xs leading-relaxed text-text-dimmer">
                  Rates shown are illustrative estimates for planning. Final
                  pricing is confirmed on your demo call.
                </p>
              </div>

              <div className="relative p-6 md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,164,107,0.12),transparent_55%)]" />
                <div className="relative">
                  <span className="text-xs uppercase tracking-[0.16em] text-text-dimmer">
                    Estimated Cost Per Minute
                  </span>
                  <div className="calc-cpm mt-3 flex items-baseline gap-1">
                    <span className="text-xl text-text-dim">$</span>
                    <b
                      id="calcCPM"
                      className="ai-num-glow text-5xl font-bold tracking-tight text-text md:text-6xl"
                    >
                      {rate.toFixed(3)}
                    </b>
                  </div>

                  <div className="calc-breakdown mt-8 space-y-4 border-t border-line pt-5">
                    {bars.map((bar) => (
                      <div key={bar.label} className="calc-line">
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="text-text-dim">{bar.label}</span>
                          <em
                            id={
                              bar.label === "Voice Engine"
                                ? "calcVoiceCost"
                                : bar.label === "CRM & Automation"
                                  ? "calcCrmCost"
                                  : "calcTeleCost"
                            }
                            className="not-italic text-text"
                          >
                            ${bar.value.toFixed(3)}/min
                          </em>
      </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-bg">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${bar.pct}%`,
                              background: bar.color,
                            }}
                          />
      </div>
    </div>
                    ))}
                  </div>

                  <div className="calc-total-row mt-8 rounded-2xl border border-gold/25 bg-accent/10 p-5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-text-dim">
                        Total{" "}
                        <em className="not-italic text-text-dimmer">
                          per month
                        </em>
                      </span>
                      <b
                        id="calcTotal"
                        className="ai-num-glow text-3xl font-bold text-gold md:text-4xl"
                      >
                        ${total.toLocaleString()}
                      </b>
                    </div>
                    <p className="mt-2 text-xs text-text-dimmer">
                      vs ~$1,600 fragmented stack · save ~$
                      {savings.toLocaleString()}/mo at this volume
                    </p>
                  </div>

                  <BtnPrimary
                    href="/contact"
                    className="calc-cta mt-6 w-full justify-center"
                  >
                    Lock In This Rate →
                  </BtnPrimary>
      </div>
      </div>
    </div>
  </div>
        </FadeUp>
      </Section>

      {/* Trust */}
      <Section border alt id="pricing-trust">
        <SectionHeader
          center
          accent="accent"
          eyebrow="Transparent Pricing"
          title="$97/month replaces $1,600 of tools."
          description="Transparent, flat pricing for the full stack. Use the calculator to see your exact monthly cost before you talk to anyone."
        />
        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {trust.map((item, i) => (
            <MotionItem key={item.title}>
              <Card className="h-full border-gold/10 bg-gradient-to-b from-panel/70 to-panel/30">
                <span className="font-mono text-xs text-gold">
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

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-28">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-5xl">
            One stack. One bill. No surprises.
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
            Lock in a rate that replaces the tool pile — and put chat, voice and
            CRM on autopilot.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] transition-all hover:bg-[#C87D46] hover:shadow-[0_0_32px_rgba(234,164,107,0.4)] no-underline"
            >
              Book a Demo →
            </Link>
            <Link
              href="/enterprise"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-gold/40 no-underline"
            >
              Enterprise options
            </Link>
          </div>
        </FadeUp>
</section>
    </>
  );
}
