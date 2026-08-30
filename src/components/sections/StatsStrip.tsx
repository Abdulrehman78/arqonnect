"use client";

import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

const metrics = [
  { value: "20+", label: "AI-run services" },
  { value: "<500ms", label: "Target response latency" },
  { value: "24/7", label: "Agent coverage" },
  { value: "$97", label: "Flat stack from" },
];

export default function StatsStrip() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-28">
      <ZoomBackdrop
        src="/images/stats-banner.jpg"
        position="70% center"
        zoom={false}
        quiet
        veil={ROOM_VEIL}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-xl text-left sm:max-w-2xl">
          <h2 className="ai-title banner-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <GiggleText as="span" text="Everyday calls." tone="rise" />
            <br />
            <GiggleText
              as="span"
              text="Extraordinary outcomes."
              tone="rise"
              startDelay={0.4}
              className="banner-heading-muted"
            />
            <span className="ai-title-line" />
          </h2>
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {metrics.map((m, i) => (
              <div key={m.label} className="text-center">
                <GiggleText
                  as="span"
                  text={m.value}
                  tone="rise"
                  startDelay={0.55 + i * 0.1}
                  className="banner-heading text-3xl sm:text-4xl md:text-5xl"
                />
                <span className="ai-stat-bar" />
                <div className="room-caption mt-2 text-xs font-medium uppercase tracking-[0.14em] sm:text-sm sm:normal-case sm:tracking-normal">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
