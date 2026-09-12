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
import { FEATURES } from "@/lib/siteContent";

const tabs = FEATURES.phases.map((phase) => ({
  id: phase.id,
  label: phase.label,
  title: phase.title,
}));

export default function Capabilities() {
  const [active, setActive] = useState(tabs[0]?.id ?? "phase-0");
  const phase = FEATURES.phases.find((p) => p.id === active) ?? FEATURES.phases[0];
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

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
        description={FEATURES.lead}
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
            {activeTab.label} · {phase.items.length}
          </span>
        </div>

        <p className="mb-6 text-sm text-text-dim">{phase.title}</p>

        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {phase.items.map((card, i) => (
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
