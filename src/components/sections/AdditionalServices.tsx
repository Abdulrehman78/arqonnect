"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { BookDemoLink } from "@/components/BookDemoLink";
import { ADDITIONAL_SERVICES } from "@/lib/servicesPageContent";

/** SEO, AEO, development, and related growth services under /services. */
export default function AdditionalServices() {
  return (
    <section
      id="additional-services"
      className="relative overflow-hidden border-t border-line bg-bg-alt px-4 py-20 sm:px-6 md:py-28"
    >
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
            <span className="ai-live-dot" /> Additional services
          </p>
          <h2 className="ai-title mt-3 max-w-2xl text-3xl font-bold tracking-tight text-text md:text-4xl">
            SEO, AEO, development, and growth
            <span className="ai-title-line" />
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dim">
            Beyond the AI Twin inbox, we help you get found and convert — classic
            search, answer engines, AI overviews, web and mobile development, CRM,
            and ads.
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADDITIONAL_SERVICES.map((s) => (
            <MotionItem key={s.title}>
              <article className="h-full rounded-[18px] border border-line bg-panel/60 p-5 transition-colors hover:border-accent/40">
                <h3 className="font-display text-base font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.body}</p>
              </article>
            </MotionItem>
          ))}
        </Stagger>

        <FadeUp className="mt-10">
          <BookDemoLink
            source="services_additional"
            className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46]"
          >
            Book a meeting about growth services →
          </BookDemoLink>
        </FadeUp>
      </div>
    </section>
  );
}
