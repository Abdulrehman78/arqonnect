"use client";

import Link from "next/link";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO, MARKETS_VIDEO } from "@/lib/brand";
import { PRICING, SHOW_PRICING_PLANS, SITE } from "@/lib/siteContent";

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
              Custom quotes
              <span>no public plan cards</span>
            </h1>
            <p className="story-lead">
              We scope every engagement on a demo. Reach{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent underline">
                {SITE.email}
              </a>{" "}
              or book below — no credit card required.
            </p>
          </header>

          {!SHOW_PRICING_PLANS ? (
            <div className="mt-10 max-w-xl" data-reveal>
              <Link href="/contact" className="story-cta-primary">
                Book a demo →
              </Link>
            </div>
          ) : (
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
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex text-sm font-semibold text-accent no-underline hover:underline"
                  >
                    Choose {plan.name} →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </RevealOnScroll>
      </section>

      <section className="story-room relative overflow-hidden border-b border-line bg-bg-alt">
        <RoomVideoBackdrop src={MARKETS_VIDEO} />
        <SchemeOverlay className="z-[1]" intensity="room" quiet />
        <RevealOnScroll className="story-chapter-inner relative z-10">
          <header className="story-chapter-header">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              Next step
            </p>
            <h2 className="story-heading">
              Tell us your channels
              <span>we will scope the build</span>
            </h2>
            <p className="story-lead">{PRICING.lead}</p>
          </header>
          <div className="mt-8" data-reveal>
            <Link href="/contact" className="story-cta-primary">
              Book a demo →
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
