"use client";

import { FadeUp } from "@/components/ui/Motion";

const metrics = [
  { label: "Total calls handled", value: "1,125", delta: "↑ 15% since last month", color: "#6366F1", up: true },
  { label: "Average latency", value: "340ms", delta: "↓ 10% since last month", color: "#22C55E", up: false },
  { label: "Average cost per minute", value: "$0.0043", delta: "↓ 7% since last month", color: "#8B5CF6", up: false },
  { label: "Average CSAT score", value: "90%", delta: "↑ 4% since last month", color: "#06B6D4", up: true },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-line bg-bg-alt px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-panel/40 p-5"
              >
                <span className="text-xs font-medium text-text-dimmer">{m.label}</span>
                <b className="mt-2 block text-3xl font-bold text-text">{m.value}</b>
                <span className={`mt-1 block text-xs font-medium ${m.up ? "text-accent" : "text-cyan"}`}>
                  {m.delta}
                </span>
                <svg className="mt-3 h-8 w-full opacity-60" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path
                    d={m.up ? "M0 20 Q 15 8, 30 15 T 60 10 T 100 5" : "M0 8 Q 20 5, 35 12 T 70 26 T 100 24"}
                    fill="none"
                    stroke={m.color}
                    strokeWidth="2"
                  />
                </svg>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
