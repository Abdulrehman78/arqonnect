"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  Card,
  Chip,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { FINAL_CTA } from "@/lib/siteContent";
import { CAPABILITY_GROUPS, PHASE_0_ROOMS, PHASE_1_ROOMS } from "@/lib/servicesPageContent";

const allRooms = [...PHASE_0_ROOMS, ...PHASE_1_ROOMS];
const byTitle = Object.fromEntries(allRooms.map((r) => [r.title, r]));

const panels = Object.fromEntries(
  CAPABILITY_GROUPS.map((g) => [
    g.id,
    g.items.map((title) => {
      const room = byTitle[title];
      return {
        title,
        desc: room?.body ?? "",
        tag: PHASE_0_ROOMS.some((r) => r.title === title) ? "Phase 0" : "Phase 1",
      };
    }),
  ])
) as Record<string, Array<{ title: string; desc: string; tag: string }>>;

export default function Templates() {
  const [active, setActive] = useState<(typeof CAPABILITY_GROUPS)[number]["id"]>(
    CAPABILITY_GROUPS[0].id
  );

  return (
    <>
      <Section border id="templates">
        <SectionHeader
          accent="accent"
          eyebrow="Workflows"
          title={
            <>
              The same 21, sorted by
              <br />
              what you&apos;re solving.
            </>
          }
          description="Start from the job that matters most — inbox, CRM, or control."
        />

        <FadeUp>
          <div className="flex flex-wrap gap-2">
            {CAPABILITY_GROUPS.map((t) => (
              <Chip
                key={t.id}
                active={active === t.id}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </Chip>
            ))}
          </div>

          <Stagger className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {(panels[active] ?? []).map((card) => (
              <MotionItem key={card.title}>
                <Card className="group h-full border-line bg-panel/40 transition-colors hover:border-glass">
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-dimmer">
                    {card.tag}
                  </span>
                  <h4 className="mt-4 font-semibold text-text">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {card.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block text-sm text-accent no-underline transition-transform group-hover:translate-x-1"
                  >
                    Book a demo →
                  </Link>
                </Card>
              </MotionItem>
            ))}
          </Stagger>
        </FadeUp>
      </Section>

      <section className="relative overflow-hidden border-t border-line px-4 py-24 sm:px-6 md:py-28">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-2xl text-center">
          <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-4xl">
            Ready to open the inbox?
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-dim">
            {FINAL_CTA.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={FINAL_CTA.primary.href}
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline transition-all hover:bg-[#C87D46]"
            >
              {FINAL_CTA.primary.label} →
            </Link>
            <Link
              href={FINAL_CTA.secondary.href}
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text no-underline transition-all hover:border-glass"
            >
              {FINAL_CTA.secondary.label}
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
