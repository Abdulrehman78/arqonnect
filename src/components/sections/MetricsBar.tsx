"use client";

import { FadeUp } from "@/components/ui/Motion";

const metrics = [
  { value: "1,125+", label: "Calls handled", delta: "↑ 15% this month" },
  { value: "340ms", label: "Avg latency", delta: "↓ 10% this month" },
  { value: "$0.0043", label: "Cost per minute", delta: "↓ 7% this month" },
  { value: "90%", label: "CSAT score", delta: "↑ 4% this month" },
];

export default function MetricsBar() {
  return (
    <section className="relative border-y border-line bg-bg-alt px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center md:text-left">
                <div className="text-3xl font-bold tracking-tight text-text md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-text-dim">{m.label}</div>
                <div className="mt-1 text-xs font-medium text-accent">
                  {m.delta}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
