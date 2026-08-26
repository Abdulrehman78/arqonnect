"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

export default function Testimonials() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6 md:py-28">
      <ZoomBackdrop
        src="/images/testimonials-banner.jpg"
        delaySec={30}
        veil={[
          `linear-gradient(180deg, ${scrim(0.62)} 0%, ${scrim(0.38)} 35%, ${scrim(0.48)} 65%, ${scrim(0.75)} 100%)`,
          `radial-gradient(ellipse 70% 55% at 50% 40%, ${scrim(0.28)} 0%, ${scrim(0.58)} 100%)`,
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-55" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <FadeUp className="text-center">
          <span className="room-label text-xs font-medium uppercase tracking-[0.18em]">
            Proven impact
          </span>
          <h2 className="banner-heading mt-4 text-3xl sm:text-4xl">
            Real conversations. Real outcomes.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <blockquote className="mt-12 border-l-2 border-sky-400/60 pl-6 md:pl-8">
            <p className="room-body text-lg leading-relaxed md:text-xl">
              &ldquo;This is where your story goes. Once the first engagement wraps,
              we&apos;ll swap this for a real quote, a real name, and a real
              result.&rdquo;
            </p>
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
              className="room-label inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:text-sky-100"
            >
              See case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
