"use client";

import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { PHASE_0_ROOMS, PHASE_1_ROOMS } from "@/lib/servicesPageContent";

const ALL_CAPABILITIES = [...PHASE_0_ROOMS, ...PHASE_1_ROOMS];

export default function Capabilities() {
  return (
    <Section border id="capabilities" className="bg-bg-alt">
      <SectionHeader
        accent="accent"
        eyebrow="Capabilities"
        title={
          <>
            Everything in the platform.
            <br />
            One AI Twin, fully delivered.
          </>
        }
        description="Channels, grounded AI, CRM, booking and operator controls — the complete ArQonnect stack, ready to run."
      />

      <FadeUp>
        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_CAPABILITIES.map((card, i) => (
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
