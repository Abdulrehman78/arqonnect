"use client";

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import HomeFinalCta from "@/components/HomeFinalCta";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { InboxFlowDiagram, VALUE_ICONS } from "@/components/ui/ProductIcons";
import { BookDemoLink } from "@/components/BookDemoLink";
import { COMPARISON, ADDITIONAL_SERVICES_TEASER } from "@/lib/siteContent";
import { CASE_STUDIES, HOME_OFFER, INDUSTRIES } from "@/lib/marketingPages";

function ChannelsSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <RevealOnScroll className="relative mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {HOME_OFFER.channelsEyebrow}
          </p>
          <h2 className="story-heading mt-3">
            {HOME_OFFER.channelsTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim">
            {HOME_OFFER.channelsBody}
          </p>
        </header>
        <div className="mt-10" data-reveal>
          <InboxFlowDiagram />
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {["WhatsApp Business", "Instagram Direct", "Facebook Messenger", "Website chat"].map(
            (c) => (
              <li
                key={c}
                className="rounded-[14px] border border-line bg-panel/50 px-4 py-3 text-sm font-medium text-text"
              >
                {c}
              </li>
            )
          )}
        </ul>
      </RevealOnScroll>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {HOME_OFFER.trustEyebrow}
          </p>
          <h2 className="story-heading mt-3 max-w-2xl">{HOME_OFFER.trustTitle}</h2>
        </FadeUp>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {HOME_OFFER.trustItems.map((item, i) => {
            const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
            return (
              <MotionItem key={item.title}>
                <article className="h-full rounded-[18px] border border-line bg-panel/50 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg/40 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{item.body}</p>
                </article>
              </MotionItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <RevealOnScroll className="relative mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {COMPARISON.eyebrow}
          </p>
          <h2 className="story-heading mt-3">{COMPARISON.title}</h2>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-2" data-reveal>
          <div className="rounded-[18px] border border-line bg-panel/40 p-6">
            <h3 className="font-display text-lg font-semibold text-text">
              {COMPARISON.withoutTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-dim">
              {COMPARISON.without.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-[#c45c5c]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[18px] border border-accent/35 bg-panel/60 p-6">
            <h3 className="font-display text-lg font-semibold text-text">
              {COMPARISON.withTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-dim">
              {COMPARISON.with.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {HOME_OFFER.stepsEyebrow}
          </p>
          <h2 className="story-heading mt-3 max-w-2xl">{HOME_OFFER.stepsTitle}</h2>
        </FadeUp>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {HOME_OFFER.steps.map((s) => (
            <MotionItem key={s.num}>
              <article className="h-full rounded-[18px] border border-line bg-panel/50 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {s.num}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.body}</p>
              </article>
            </MotionItem>
          ))}
        </Stagger>
        <FadeUp className="mt-8">
          <Link
            href="/process"
            className="text-sm font-semibold text-accent no-underline hover:underline"
          >
            Full process →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function IndustriesTeaser() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {INDUSTRIES.eyebrow}
            </p>
            <h2 className="story-heading mt-3">{INDUSTRIES.title}</h2>
          </div>
          <Link
            href="/industries"
            className="shrink-0 text-sm font-semibold text-accent no-underline hover:underline"
          >
            All industries →
          </Link>
        </FadeUp>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.items.slice(0, 6).map((ind) => (
            <MotionItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                className="block h-full rounded-[18px] border border-line bg-panel/50 p-5 no-underline transition-colors hover:border-accent/40"
              >
                <h3 className="font-display text-base font-semibold text-text">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {ind.summary}
                </p>
              </Link>
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function GrowthTeaser() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {HOME_OFFER.growthEyebrow}
          </p>
          <h2 className="story-heading mt-3 max-w-2xl">{HOME_OFFER.growthTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dim">
            {HOME_OFFER.growthBody}
          </p>
        </FadeUp>
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ADDITIONAL_SERVICES_TEASER.map((s) => (
            <MotionItem key={s}>
              <div className="rounded-[14px] border border-line bg-panel/50 px-4 py-3 text-sm font-medium text-text">
                {s}
              </div>
            </MotionItem>
          ))}
        </Stagger>
        <FadeUp className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services#additional-services"
            className="text-sm font-semibold text-accent no-underline hover:underline"
          >
            Additional services →
          </Link>
          <Link
            href="/roi"
            className="text-sm font-semibold text-accent no-underline hover:underline"
          >
            ROI calculator →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function CasesTeaser() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {CASE_STUDIES.eyebrow}
            </p>
            <h2 className="story-heading mt-3">{CASE_STUDIES.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-dim">
              {CASE_STUDIES.lead}
            </p>
          </div>
          <Link
            href="/case-studies"
            className="shrink-0 text-sm font-semibold text-accent no-underline hover:underline"
          >
            View scenarios →
          </Link>
        </FadeUp>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.items.map((c) => (
            <MotionItem key={c.id}>
              <article className="h-full rounded-[18px] border border-line bg-panel/50 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-dimmer">
                  {c.industry}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-text">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{c.summary}</p>
              </article>
            </MotionItem>
          ))}
        </Stagger>
        <FadeUp className="mt-10">
          <BookDemoLink
            source="home_cases_cta"
            className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
          >
            Book a demo →
          </BookDemoLink>
        </FadeUp>
      </div>
    </section>
  );
}

export default function HomePageClient() {
  return (
    <main aria-label="ArQonnect home">
      <Hero />
      <ChannelsSection />
      <TrustSection />
      <ComparisonSection />
      <StepsSection />
      <IndustriesTeaser />
      <GrowthTeaser />
      <CasesTeaser />
      <HomeFinalCta />
    </main>
  );
}
