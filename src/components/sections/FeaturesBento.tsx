"use client";

import Link from "next/link";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

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
        veil={ROOM_VEIL}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-60" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Unified platform" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl">
            <GiggleText
              as="span"
              text="One platform for all your agents."
              tone="blur"
            />
            <span className="ai-title-line" />
          </h2>
          <GiggleText
            as="p"
            text="Orchestration, CRM sync, and growth visibility — so you go from prompt to production without a tool pile."
            tone="blur"
            startDelay={0.35}
            className="room-body mt-4 text-base leading-relaxed"
          />
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p) => (
            <MotionItem key={p.num}>
              <div className="motion-card h-full border-t border-text/20 pt-6">
                <span className="ai-num-glow room-label font-mono text-xs">{p.num}</span>
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
            className="ai-link-arrow room-label inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors hover:text-gold"
          >
            Explore all services <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
