"use client";

import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { BookDemoLink } from "@/components/BookDemoLink";
import { CASE_STUDIES } from "@/lib/marketingPages";

export default function CaseStudiesPageClient() {
  return (
    <main aria-label="Case studies">
      <section className="relative overflow-hidden border-b border-line bg-bg px-4 pb-16 pt-[clamp(5rem,12dvh,8rem)] sm:px-6">
        <SchemeOverlay />
        <RevealOnScroll className="relative mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {CASE_STUDIES.eyebrow}
            </p>
            <h1 className="story-heading mt-3">{CASE_STUDIES.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-text-dim">
              {CASE_STUDIES.lead}
            </p>
          </header>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-16 sm:px-6 md:py-20">
        <SchemeOverlay />
        <Stagger className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {CASE_STUDIES.items.map((c) => (
            <MotionItem key={c.id}>
              <article className="flex h-full flex-col rounded-[18px] border border-line bg-panel/50 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {c.industry}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold text-text">
                  {c.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">
                  {c.summary}
                </p>
                <dl className="mt-6 grid gap-2 border-t border-line pt-4">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <dt className="text-text-dimmer">{m.label}</dt>
                      <dd className="font-medium text-text">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </MotionItem>
          ))}
        </Stagger>
      </section>

      <section className="relative overflow-hidden bg-bg px-4 py-16 sm:px-6">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <p className="text-base text-text-dim">
            Want a walkthrough on your channels and knowledge? Book a scoped demo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BookDemoLink
              source="cases_cta"
              className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
            >
              Book a demo →
            </BookDemoLink>
            <Link
              href="/industries"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-text no-underline hover:border-accent/40"
            >
              Industries
            </Link>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
