"use client";

import { useState } from "react";
import {
  Section,
  SectionHeader,
  Card,
  Chip,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import {
  PHASE_0_BLURB,
  PHASE_0_ROOMS,
  PHASE_1_BLURB,
  PHASE_1_ROOMS,
} from "@/lib/servicesPageContent";

const tabs = [
  { id: "phase-0", label: "Phase 0", blurb: PHASE_0_BLURB, items: PHASE_0_ROOMS },
  { id: "phase-1", label: "Phase 1", blurb: PHASE_1_BLURB, items: PHASE_1_ROOMS },
] as const;

export default function Capabilities() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("phase-0");
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <Section border id="capabilities" className="bg-bg-alt">
      <SectionHeader
        accent="accent"
        eyebrow="Capabilities"
        title={
          <>
            Phase 0 builds the platform.
            <br />
            Phase 1 completes the Twin.
          </>
        }
        description="Pick the phase that matches where you are — every card below is a piece of the AI Twin Platform."
      />

      <FadeUp>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="-mx-1 flex max-w-full gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => (
              <Chip key={t.id} active={active === t.id} onClick={() => setActive(t.id)}>
                {t.label}
              </Chip>
            ))}
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-text-dimmer sm:inline">
            {tab.label} · {tab.items.length}
          </span>
        </div>

        <p className="mb-6 text-sm text-text-dim">{tab.blurb}</p>

        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tab.items.map((card, i) => (
            <MotionItem key={card.title}>
              <Card className="h-full border-line bg-panel/40 transition-colors hover:border-glass">
                <span className="ai-num-glow font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-semibold text-text">{card.title}</h4>
                <p className="mt-1.5 text-sm text-text-dim">{card.body}</p>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </FadeUp>

      <FadeUp className="mt-12 flex flex-wrap items-center gap-4">
        <BtnPrimary href="/contact">Book a demo →</BtnPrimary>
        <BtnGhost href="#templates">See workflows</BtnGhost>
      </FadeUp>
    </Section>
  );
}
