"use client";

import { Stagger, MotionItem, Float } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const metrics = [
  { value: "1,125+", label: "Calls handled", delta: "↑ 15% this month" },
  { value: "340ms", label: "Avg latency", delta: "↓ 10% this month" },
  { value: "$0.0043", label: "Cost per minute", delta: "↓ 7% this month" },
  { value: "90%", label: "CSAT score", delta: "↑ 4% this month" },
];

export default function MetricsBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-alt px-6 py-16">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <MotionItem key={m.label} lift={false}>
                <Float delay={i * 0.2}>
                  <div className="text-center md:text-left">
                    <div className="ai-num-glow text-3xl font-bold tracking-tight text-text md:text-4xl">
                      {m.value}
                    </div>
                    <span className="ai-stat-bar md:mx-0" />
                    <div className="mt-1 text-sm text-text-dim">{m.label}</div>
                    <div className="mt-1 text-xs font-medium text-accent">
                      {m.delta}
                    </div>
                  </div>
                </Float>
              </MotionItem>
            ))}
        </Stagger>
      </div>
    </section>
  );
}
