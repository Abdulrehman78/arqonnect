"use client";

import { Stagger, MotionItem } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

const channels = [
  {
    num: "01",
    title: "Voice",
    description:
      "Humanoid voice agents that take the call and book the appointment.",
  },
  {
    num: "02",
    title: "Chat",
    description: "AI conversation that wins before your competitor picks up.",
  },
  {
    num: "03",
    title: "CRM",
    description: "HubSpot, Salesforce, or yours — every lead, one record.",
  },
  {
    num: "04",
    title: "SMS & Social",
    description: "Missed-call text-back and DMs handled automatically.",
  },
];

export default function Integrations() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-28">
      <ZoomBackdrop
        src="/images/markets-banner.jpg"
        delaySec={24}
        veil={ROOM_VEIL}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-60" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Channels" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl">
            <GiggleText
              as="span"
              text="True omni-channel communication."
              tone="slide"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
          <GiggleText
            as="p"
            text="Chat, voice, CRM and growth — all pointed at one job: don't let the lead go quiet."
            tone="slide"
            startDelay={0.35}
            className="room-body mt-4 text-base"
          />
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {channels.map((c) => (
            <MotionItem key={c.title}>
              <div className="motion-card h-full border-t border-text/20 pt-6">
                <span className="ai-num-glow room-label font-mono text-xs">{c.num}</span>
                <h3 className="room-heading mt-3 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="room-body mt-3 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
