"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

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
        delaySec={12}
        veil={[
          `linear-gradient(90deg, ${scrim(0.62)} 0%, ${scrim(0.38)} 42%, ${scrim(0.12)} 100%)`,
          `linear-gradient(180deg, ${scrim(0.42)} 0%, ${scrim(0.22)} 40%, ${scrim(0.55)} 100%)`,
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-65" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeUp className="max-w-xl text-left sm:max-w-2xl">
          <h2 className="banner-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Everyday calls.
            <br />
            <span className="banner-heading-muted">Extraordinary outcomes.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="text-center"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.2 + i * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <div className="banner-heading text-3xl sm:text-4xl md:text-5xl">
                  {m.value}
                </div>
                <div className="room-caption mt-2 text-xs font-medium uppercase tracking-[0.14em] sm:text-sm sm:normal-case sm:tracking-normal">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
