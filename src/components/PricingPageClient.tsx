"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO, MARKETS_VIDEO } from "@/lib/brand";
import { PRICING } from "@/lib/siteContent";

export default function PricingPageClient() {
  return (
    <main aria-label="Pricing">
      <section className="story-room story-platform relative overflow-hidden border-b border-line bg-bg pt-[clamp(5rem,12dvh,8rem)]">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {PRICING.eyebrow}
            </p>
            <h1 className="story-heading">
              Direct-to-client
              <span>monthly plans</span>
            </h1>
            <p className="story-lead">{PRICING.lead}</p>
          </header>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRICING.plans.map((plan, i) => (
              <article
                key={plan.id}
                className={`story-channel relative ${plan.popular ? "ring-1 ring-accent/50" : ""}`}
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0B0F12]">
                    Most popular
                  </span>
                )}
                <h2 className="text-xl font-semibold text-text">{plan.name}</h2>
                <p className="mt-2 text-2xl font-semibold text-accent">{plan.price}</p>
                <p className="mt-2 text-sm text-text-dim">{plan.audience}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-text">Channels</dt>
                    <dd className="text-text-dim">{plan.channels}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text">Languages</dt>
                    <dd className="text-text-dim">{plan.languages}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text">Included</dt>
                    <dd className="text-text-dim">{plan.included}</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-accent no-underline hover:underline"
                >
                  Choose {plan.name} →
                </Link>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="story-room relative overflow-hidden border-b border-line bg-bg-alt">
        <RoomVideoBackdrop src={MARKETS_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              Add-ons
            </p>
            <h2 className="story-heading">
              Add-ons
              <span>any tier</span>
            </h2>
          </header>
          <ul className="mt-8 space-y-4">
            {PRICING.addons.map((addon, i) => (
              <li
                key={addon.label}
                className="story-channel flex flex-wrap items-baseline justify-between gap-2"
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                <span className="text-text">{addon.label}</span>
                <span className="font-mono text-sm text-accent">{addon.price}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section className="story-room relative overflow-hidden border-b border-line bg-bg">
        <RoomVideoBackdrop src={HERO_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              Activation
            </p>
            <h2 className="story-heading">
              One-time
              <span>activation</span>
            </h2>
            <p className="story-lead">{PRICING.activation.lead}</p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PRICING.activation.tiers.map((tier, i) => (
              <article
                key={tier.name}
                className="story-channel"
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                <h3>{tier.name}</h3>
                <p className="mt-2 text-xl font-semibold text-accent">{tier.price}</p>
                <dl className="mt-4 space-y-2 text-sm text-text-dim">
                  <div>
                    <span className="font-medium text-text">Channels — </span>
                    {tier.channels}
                  </div>
                  <div>
                    <span className="font-medium text-text">Languages — </span>
                    {tier.languages}
                  </div>
                  <div>
                    <span className="font-medium text-text">Includes — </span>
                    {tier.includes}
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="story-cta-actions mt-12" data-reveal>
            <Link href="/contact" className="story-cta-primary">
              Book a demo →
            </Link>
            <Link href="/faq" className="story-cta-ghost">
              FAQ
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
