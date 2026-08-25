"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const channels = [
  {
    title: "Voice AI",
    description: "Humanoid voice agents that take the call and book the appointment.",
  },
  {
    title: "Chat Widget / Conversation AI",
    description: "AI-powered chat that wins the conversation before your competitor picks up.",
  },
  {
    title: "CRM Integration",
    description: "HubSpot, Salesforce or your CRM — every lead, every channel, one record.",
  },
  {
    title: "Inbound SMS & Social DMs",
    description: "Missed call text-back, social planner, and DMs handled automatically.",
  },
];

export default function Integrations() {
  return (
    <section className="relative bg-bg px-6 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan">
            Core AI Services
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-text md:text-4xl">
            Chat, voice, CRM and growth — all pointed at one job
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-text-dim md:text-base">
            Don&apos;t let the lead go quiet. One agent stack across every channel
            your leads use.
          </p>
        </FadeUp>

        <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <MotionItem key={c.title}>
              <div className="group h-full rounded-2xl border border-line bg-panel/40 p-5 transition-all hover:border-cyan/30 hover:bg-panel/70">
                <h3 className="text-base font-semibold text-text">{c.title}</h3>
                <p className="mt-2 text-sm text-text-dim">{c.description}</p>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
