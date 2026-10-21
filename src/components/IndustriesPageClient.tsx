"use client";

import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { BookDemoLink } from "@/components/BookDemoLink";
import { INDUSTRIES } from "@/lib/marketingPages";

export default function IndustriesPageClient() {
  return (
    <main aria-label="Industries">
      <section className="relative overflow-hidden border-b border-line bg-bg px-4 pb-16 pt-[clamp(5rem,12dvh,8rem)] sm:px-6">
        <SchemeOverlay />
        <RevealOnScroll className="relative mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {INDUSTRIES.eyebrow}
            </p>
            <h1 className="story-heading mt-3">{INDUSTRIES.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-text-dim">
              {INDUSTRIES.lead}
            </p>
          </header>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-16 sm:px-6 md:py-20">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-6xl space-y-8">
          {INDUSTRIES.items.map((ind) => (
            <FadeUp key={ind.slug}>
              <article
                id={ind.slug}
                className="scroll-mt-28 rounded-[18px] border border-line bg-panel/50 p-6 md:p-8"
              >
                <h2 className="font-display text-2xl font-semibold text-text">
                  {ind.name}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-dim">
                  {ind.summary}
                </p>
                <Stagger className="mt-6 grid gap-3 sm:grid-cols-3">
                  {ind.outcomes.map((o) => (
                    <MotionItem key={o}>
                      <p className="rounded-[12px] border border-line bg-bg/40 px-4 py-3 text-sm text-text">
                        {o}
                      </p>
                    </MotionItem>
                  ))}
                </Stagger>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg px-4 py-16 sm:px-6">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto flex max-w-3xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-text-dim">
            Not sure which fit is right? We scope channels and Twin rules on the demo.
          </p>
          <div className="flex flex-wrap gap-3">
            <BookDemoLink
              source="industries_cta"
              className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
            >
              Book a demo →
            </BookDemoLink>
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-text no-underline hover:border-accent/40"
            >
              Case studies
            </Link>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
