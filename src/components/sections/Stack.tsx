"use client";

import { Section, SectionHeader } from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const badges = [
  { color: "#6366F1", label: "Enterprise-Grade LLMs" },
  { color: "#22C55E", label: "Carrier-Grade Voice" },
  { color: "#25D366", label: "WhatsApp Business API" },
  { color: "#635BFF", label: "Stripe Billing" },
  { color: "#4285F4", label: "Google Workspace" },
  { color: "#4A154B", label: "Slack & Webhooks" },
  { color: "#06B6D4", label: "Cloud-Native Hosting" },
  { color: "#8B5CF6", label: "Encrypted Data Storage" },
];

export default function Stack() {
  return (
    <Section border id="stack" alt>
      <SectionHeader
        center
        eyebrow="Built On"
        title="Real infrastructure, not duct tape"
        description="ArQonnect agents run on enterprise-grade rails — large language models, carrier-grade messaging, and cloud infrastructure built to stay up when it matters."
        accent="cyan"
      />
      <Stagger className="flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <MotionItem key={b.label}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2.5 text-sm text-text-dim">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: b.color }}
              />
              {b.label}
            </span>
          </MotionItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-line bg-bg/50 py-5">
          <div className="flex w-max animate-marquee items-center gap-10 px-6">
            {[...badges, ...badges].map((b, i) => (
              <span
                key={`${b.label}-${i}`}
                className="whitespace-nowrap text-sm font-medium text-text-dimmer"
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
