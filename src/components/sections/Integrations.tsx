"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

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
        veil={[
          `linear-gradient(180deg, ${scrim(0.72)} 0%, ${scrim(0.48)} 40%, ${scrim(0.72)} 100%)`,
          `radial-gradient(ellipse 80% 60% at 50% 40%, ${scrim(0.15)} 0%, ${scrim(0.62)} 100%)`,
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-60" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="room-label text-xs font-medium uppercase tracking-[0.18em]">
            Channels
          </span>
          <h2 className="banner-heading mt-4 text-3xl sm:text-4xl">
            True omni-channel communication.
          </h2>
          <p className="room-body mt-4 text-base">
            Chat, voice, CRM and growth — all pointed at one job: don&apos;t let
            the lead go quiet.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {channels.map((c) => (
            <MotionItem key={c.title}>
              <div className="h-full border-t border-text/20 pt-6">
                <span className="room-label font-mono text-xs">{c.num}</span>
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
