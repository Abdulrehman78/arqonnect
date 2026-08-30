"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { HERO_BANNER, BANNER_TINT, BANNER_VEIL } from "@/lib/brand";

export default function HomeFinalCta() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden border-t border-line bg-bg px-4 py-24 sm:px-6 md:py-32">
      <ZoomBackdrop
        src={HERO_BANNER}
        fit="cover"
        zoom
        position="center"
        delaySec={8}
        overlay="hero"
        tint={BANNER_TINT}
        veil={BANNER_VEIL}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-70" />
      </ZoomBackdrop>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.span
          className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="ai-live-dot" />
          <GiggleText text="Next step" tone="wave" />
        </motion.span>
        <h2 className="ai-title banner-heading mt-4 text-3xl md:text-5xl">
          <GiggleText
            as="span"
            text="Revolutionize your call operation"
            tone="glow"
          />
          <span className="ai-title-line mx-auto" />
        </h2>
        <GiggleText
          as="p"
          tone="blur"
          startDelay={0.4}
          className="room-body mx-auto mt-5 max-w-lg text-base"
          text="Put an AI workforce on it — chat, voice, CRM and growth, running 24/7 across every channel your leads use."
        />
        <FadeUp delay={0.55}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <motion.div
            className="ai-cta-breath"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-magnetic
          >
            <Link
              href="/contact"
              className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] no-underline shadow-[0_8px_32px_rgb(var(--shadow-rgb)/0.45),0_0_28px_rgba(234,164,107,0.5)] transition-all hover:bg-[#C87D46]"
            >
              Book a Demo →
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} data-magnetic>
            <Link
              href="/demo"
              className="room-heading inline-flex items-center rounded-full border border-text/30 bg-bg/50 px-7 py-3.5 text-sm font-semibold no-underline shadow-[0_8px_28px_rgb(var(--shadow-rgb)/0.45)] backdrop-blur-sm transition-all hover:border-text/45 hover:bg-bg/65"
            >
              Try the Live Demo
            </Link>
          </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
