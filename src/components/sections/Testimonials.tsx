"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { ROOM_VEIL } from "@/lib/brand";

export default function Testimonials() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-28">
      <ZoomBackdrop
        src="/images/testimonials-banner.jpg"
        delaySec={30}
        veil={ROOM_VEIL}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-55" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <div className="text-center">
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text="Proven impact" tone="wave" />
          </span>
          <h2 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl">
            <GiggleText
              as="span"
              text="Real conversations. Real outcomes."
              tone="pop"
            />
            <span className="ai-title-line mx-auto" />
          </h2>
        </div>

        <FadeUp delay={0.35}>
          <blockquote className="motion-card mt-12 border-l-2 border-gold/60 pl-6 md:pl-8">
            <span className="ai-quote-mark" aria-hidden>
              “
            </span>
            <GiggleText
              as="p"
              tone="blur"
              startDelay={0.15}
              className="room-body text-lg leading-relaxed md:text-xl"
              text={"This is where your story goes. Once the first engagement wraps, we'll swap this for a real quote, a real name, and a real result."}
            />
            <footer className="mt-6">
              <div className="room-heading font-semibold">Reserved for you</div>
              <div className="room-caption mt-0.5 text-sm">
                Founding client, ArQonnect
              </div>
            </footer>
          </blockquote>

          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="ai-link-arrow room-label inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:text-gold"
            >
              See case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
