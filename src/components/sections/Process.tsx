"use client";

import { Section, SectionHeader, Card } from "@/components/ui/PageSection";
import { Stagger, MotionItem } from "@/components/ui/Motion";

const steps = [
  { num: "01", title: "Discover", desc: "We map your current stack, leads and bottlenecks on a single call." },
  { num: "02", title: "Strategy", desc: "A fixed plan — which agents, which channels, which tools get replaced first." },
  { num: "03", title: "Development", desc: "Your chatbot, voice agent and CRM get built and trained on your business." },
  { num: "04", title: "Testing", desc: "Real conversations, real edge cases — refined until it sounds right." },
  { num: "05", title: "Deployment", desc: "Live on your number, your site, your channels — usually inside two weeks." },
  { num: "06", title: "Support", desc: "A dedicated team keeps tuning the agent as your business changes." },
];

export default function Process() {
  return (
    <Section first id="process">
      <SectionHeader
        eyebrow="How It Works"
        title={
          <>
            No black box between
            <br />
            &ldquo;yes&rdquo; and &ldquo;it&apos;s live.&rdquo;
          </>
        }
        description="The same six steps, every engagement — no surprises, no scope creep."
      />
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <MotionItem key={s.num}>
            <Card className="h-full">
              <span className="ai-num-glow font-mono text-xs font-semibold text-accent">{s.num}</span>
              <h4 className="mt-3 text-lg font-semibold text-text">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.desc}</p>
            </Card>
          </MotionItem>
        ))}
      </Stagger>
    </Section>
  );
}
