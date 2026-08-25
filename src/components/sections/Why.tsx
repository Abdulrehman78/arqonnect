"use client";

import { Section, SectionHeader, Card } from "@/components/ui/PageSection";
import { Stagger, MotionItem } from "@/components/ui/Motion";

const stats = [
  { value: "Fewer", label: "leads lost to missed calls and slow first replies" },
  { value: "Lower", label: "monthly software spend once the stack is consolidated" },
  { value: "Hours back", label: "per week, per teammate, no longer spent on manual follow-up" },
  { value: "24/7", label: "coverage — the agent never clocks out, never calls in sick" },
];

export default function Why() {
  return (
    <Section first id="why">
      <SectionHeader
        eyebrow="Why We Built This"
        title={
          <>
            Software doesn&apos;t answer the phone.
            <br />
            We do.
          </>
        }
        description="Every agency we talked to had the same problem — leads went cold while software sat half-configured in a dashboard nobody had time to learn. ArQonnect exists to close that gap: an AI workforce that works the lead, from first ring to signed deal, so growth stops depending on how many hours your team has left in the day."
      />
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <MotionItem key={s.value}>
            <Card className="h-full text-center sm:text-left">
              <b className="block text-2xl font-bold text-accent">{s.value}</b>
              <span className="mt-2 block text-sm leading-relaxed text-text-dim">
                {s.label}
              </span>
            </Card>
          </MotionItem>
        ))}
      </Stagger>
      <p className="mt-10 text-sm text-text-dimmer">
        Directional outcomes based on early client engagements — ask us for the full
        breakdown on your first call. Here&apos;s exactly what that looks like, in
        practice:
      </p>
    </Section>
  );
}
