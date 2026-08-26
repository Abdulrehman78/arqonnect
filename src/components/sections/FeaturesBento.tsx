"use client";

import Link from "next/link";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

const pillars = [
  {
    num: "01",
    title: "Build agents that sound human",
    description:
      "Humanoid chat and voice agents that win the conversation, take the call, and book the appointment — on every channel.",
  },
  {
    num: "02",
    title: "Deploy across the full stack",
    description:
      "Twenty AI-run services: agents, websites and funnels, CRM automation, SEO/AEO/GEO — built to run themselves.",
  },
  {
    num: "03",
    title: "Measure what converts",
    description:
      "Every lead updates itself in HubSpot, Salesforce, or your CRM. One record across chat, voice, SMS, and social.",
  },
];

export default function FeaturesBento() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-28">
      <ZoomBackdrop
        src="/images/features-banner.jpg"
        position="60% center"
        delaySec={18}
        veil={[
          `linear-gradient(90deg, ${scrim(0.82)} 0%, ${scrim(0.65)} 38%, ${scrim(0.32)} 70%, ${scrim(0.48)} 100%)`,
          `linear-gradient(180deg, ${scrim(0.48)} 0%, ${scrim(0.28)} 40%, ${scrim(0.65)} 100%)`,
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-60" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeUp className="max-w-2xl">
          <span className="room-label text-xs font-medium uppercase tracking-[0.18em]">
            Unified platform
          </span>
          <h2 className="banner-heading mt-4 text-3xl sm:text-4xl">
            One platform for all your agents.
          </h2>
          <p className="room-body mt-4 text-base leading-relaxed">
            Orchestration, CRM sync, and growth visibility — so you go from prompt
            to production without a tool pile.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p) => (
            <MotionItem key={p.num}>
              <div className="h-full border-t border-text/20 pt-6">
                <span className="room-label font-mono text-xs">{p.num}</span>
                <h3 className="room-heading mt-3 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="room-body mt-3 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </Stagger>

        <FadeUp className="mt-12" delay={0.15}>
          <Link
            href="/services"
            className="room-label inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors hover:text-sky-100"
          >
            Explore all services <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
