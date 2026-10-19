"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { BookDemoLink } from "@/components/BookDemoLink";
import { HERO_VIDEO } from "@/lib/brand";
import { PRICING, SITE } from "@/lib/siteContent";

type Billing = "monthly" | "yearly";

function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PricingPageClient() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main aria-label="Pricing">
      <section className="story-room story-platform relative overflow-hidden border-b border-line bg-bg pt-[clamp(5rem,12dvh,8rem)]">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header max-w-3xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {PRICING.eyebrow}
            </p>
            <h1 className="story-heading">
              {PRICING.title}
              <span>{PRICING.titleMuted}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              {PRICING.lead}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PRICING.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-line bg-panel/50 px-3 py-1.5 text-xs font-medium text-text-dim"
                >
                  {b}
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal>
            <div
              className="inline-flex rounded-full border border-line bg-panel/70 p-1"
              role="group"
              aria-label="Billing period"
            >
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  billing === "monthly"
                    ? "bg-accent text-[#0B0F12]"
                    : "text-text-dim hover:text-text"
                }`}
                aria-pressed={billing === "monthly"}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  billing === "yearly"
                    ? "bg-accent text-[#0B0F12]"
                    : "text-text-dim hover:text-text"
                }`}
                aria-pressed={billing === "yearly"}
                onClick={() => setBilling("yearly")}
              >
                Yearly
                <span className="ml-1.5 text-[11px] font-medium opacity-80">
                  1 month free
                </span>
              </button>
            </div>
          </div>

          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {PRICING.plans.map((plan, i) => {
              const displayMonthly =
                billing === "yearly"
                  ? Math.round((plan.monthly * 11) / 12)
                  : plan.monthly;
              const yearlyTotal = plan.monthly * 11;

              return (
                <MotionItem key={plan.id}>
                  <article
                    className={`relative flex h-full flex-col rounded-[18px] border p-6 transition-colors ${
                      plan.popular
                        ? "border-accent/50 bg-panel/80 shadow-[0_0_40px_rgba(234,164,107,0.12)]"
                        : "border-line bg-panel/50 hover:border-accent/30"
                    }`}
                    data-reveal
                    style={{ ["--i" as string]: i }}
                  >
                    {plan.popular ? (
                      <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0B0F12]">
                        Most popular
                      </span>
                    ) : null}
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-text-dimmer">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-text">
                      {plan.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-dim">
                      {plan.blurb}
                    </p>

                    <div className="mt-6">
                      <p className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-bold tracking-tight text-text">
                          {formatUsd(displayMonthly)}
                        </span>
                        <span className="text-sm text-text-dim">/month</span>
                      </p>
                      <p className="mt-1 text-xs text-text-dimmer">
                        {billing === "yearly"
                          ? `Billed annually at ${formatUsd(yearlyTotal)} (1 month free)`
                          : "Billed monthly"}
                      </p>
                      <p className="mt-3 text-sm text-text-dim">
                        One-time setup{" "}
                        <span className="font-semibold text-text">
                          {formatUsd(plan.setup)}
                        </span>
                      </p>
                    </div>

                    <BookDemoLink
                      source={`pricing_${plan.id}`}
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold no-underline transition-all ${
                        plan.popular
                          ? "ai-cta-shine bg-accent text-[#0B0F12] hover:bg-accent-dim"
                          : "border border-line bg-bg/40 text-text hover:border-accent/40 hover:bg-panel-2"
                      }`}
                    >
                      {plan.cta}
                    </BookDemoLink>

                    <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-text-dimmer">
                      {plan.featureEyebrow}
                    </p>
                    <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm leading-snug text-text-dim"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </MotionItem>
              );
            })}
          </Stagger>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text-dimmer" data-reveal>
            {PRICING.footnote}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-dimmer" data-reveal>
            {PRICING.billingNote}{" "}
            <Link href="/legal/terms" className="text-accent underline-offset-2 hover:underline">
              Terms
            </Link>
            {" · "}
            <Link href="/legal/refund" className="text-accent underline-offset-2 hover:underline">
              Refund Policy
            </Link>
            {" · "}
            <Link href="/legal/privacy" className="text-accent underline-offset-2 hover:underline">
              Privacy
            </Link>
          </p>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-24">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
              More than software
            </p>
            <h2 className="ai-title mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
              A business twin.
              <br />
              A team behind it.
              <span className="ai-title-line" />
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {PRICING.pillars.map((p) => (
              <MotionItem key={p.title}>
                <article className="h-full rounded-[18px] border border-line bg-panel/50 p-6">
                  <h3 className="font-display text-lg font-semibold text-text">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{p.body}</p>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id="compare"
        className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24"
      >
        <SchemeOverlay />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
              {PRICING.comparison.eyebrow}
            </p>
            <h2 className="ai-title mt-3 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
              {PRICING.comparison.title}
              <span className="ai-title-line" />
            </h2>
          </FadeUp>

          <div className="mt-10 overflow-x-auto rounded-[18px] border border-line">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-panel/60">
                  <th className="px-4 py-4 font-medium text-text-dim sm:px-5">
                    What&apos;s included
                  </th>
                  <th className="px-4 py-4 font-semibold text-text sm:px-5">Starter</th>
                  <th className="px-4 py-4 font-semibold text-accent sm:px-5">Growth</th>
                  <th className="px-4 py-4 font-semibold text-text sm:px-5">Scale</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line/80 last:border-0">
                    <td className="px-4 py-3.5 text-text-dim sm:px-5">{row.label}</td>
                    <td className="px-4 py-3.5 text-text sm:px-5">{row.starter}</td>
                    <td className="px-4 py-3.5 text-text sm:px-5">{row.growth}</td>
                    <td className="px-4 py-3.5 text-text sm:px-5">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-24">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
            {PRICING.whiteLabel.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            {PRICING.whiteLabel.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-dim">
            {PRICING.whiteLabel.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <BookDemoLink
              source="pricing_whitelabel"
              className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
            >
              Book a demo
            </BookDemoLink>
            <a
              href={`mailto:${SITE.emails.support}`}
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-text no-underline hover:border-accent/40"
            >
              Email {SITE.emails.support}
            </a>
          </div>
        </FadeUp>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-3xl">
          <FadeUp>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
              Good questions. Clear answers.
            </p>
            <h2 className="ai-title mt-3 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
              A little more clarity.
              <span className="ai-title-line" />
            </h2>
          </FadeUp>

          <div className="mt-10 space-y-3">
            {PRICING.faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="rounded-[14px] border border-line bg-panel/40 px-5 py-4"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="text-base font-semibold text-text">{item.q}</span>
                    <span className="shrink-0 font-mono text-accent" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-sm leading-relaxed text-text-dim">{item.a}</p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <FadeUp className="mt-12 text-center">
            <BookDemoLink
              source="pricing_footer_cta"
              className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
            >
              Book your demo →
            </BookDemoLink>
            <p className="mt-4 text-sm text-text-dimmer">
              Or email{" "}
              <a
                href={`mailto:${SITE.emails.support}`}
                className="text-accent underline-offset-2 hover:underline"
              >
                {SITE.emails.support}
              </a>
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
