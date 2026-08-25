"use client";

import { Section, SectionHeader, Card } from "@/components/ui/PageSection";
import { Stagger, MotionItem } from "@/components/ui/Motion";

const values = [
  { icon: "⚡", title: "Speed", desc: "Live in days, not quarters. Your first agent is answering calls before most vendors finish onboarding." },
  { icon: "🌙", title: "Always-On", desc: "24/7, 365 days a year. No lunch breaks, no sick days, no time zone your agent can't cover." },
  { icon: "🗣️", title: "Human-Quality", desc: "Conversations that sound like your best hire, not a phone tree — tested until callers can't tell the difference." },
  { icon: "💳", title: "Transparent Pricing", desc: "One flat bill, replacing $1,600+ of scattered tools. No hidden setup fees, no surprise upsells." },
  { icon: "🤝", title: "Real Partnership", desc: "A dedicated team maps your stack and manages the agent — you're never handed a login and left alone." },
  { icon: "📊", title: "Provable ROI", desc: "Every call, chat and lead tracked back to revenue in your CRM — no guessing what's actually working." },
];

export default function Values() {
  return (
    <Section first id="values">
      <SectionHeader
        eyebrow="What You Get"
        title="The ArQonnect Standard"
        description="Every engagement runs on the same six commitments — no exceptions, no fine print."
        accent="violet"
      />
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <MotionItem key={v.title}>
            <Card className="h-full">
              <span className="text-2xl">{v.icon}</span>
              <h4 className="mt-4 text-lg font-semibold text-text">{v.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{v.desc}</p>
            </Card>
          </MotionItem>
        ))}
      </Stagger>
    </Section>
  );
}
