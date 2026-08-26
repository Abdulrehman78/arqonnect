"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

export default function HomeFinalCta() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden border-t border-line bg-bg px-4 py-24 sm:px-6 md:py-32">
      <ZoomBackdrop
        src="/images/hero-banner.jpg"
        delaySec={8}
        veil={[
          `linear-gradient(180deg, ${scrim(0.68)} 0%, ${scrim(0.48)} 45%, ${scrim(0.78)} 100%)`,
          "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(59,130,246,0.18), transparent 65%)",
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-70" />
      </ZoomBackdrop>

      <FadeUp className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.span
          className="room-label text-xs font-medium uppercase tracking-[0.18em]"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Next step
        </motion.span>
        <h2 className="banner-heading mt-4 text-3xl md:text-5xl">
          Revolutionize your call operation
        </h2>
        <p className="room-body mx-auto mt-5 max-w-lg text-base">
          Put an AI workforce on it — chat, voice, CRM and growth, running 24/7
          across every channel your leads use.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <motion.div
            className="ai-cta-breath"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_8px_32px_rgb(var(--shadow-rgb)/0.45),0_0_28px_rgba(59,130,246,0.4)] transition-all hover:bg-accent-dim"
            >
              Book a Demo →
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/demo"
              className="room-heading inline-flex items-center rounded-full border border-text/30 bg-bg/50 px-7 py-3.5 text-sm font-semibold no-underline shadow-[0_8px_28px_rgb(var(--shadow-rgb)/0.45)] backdrop-blur-sm transition-all hover:border-text/45 hover:bg-bg/65"
            >
              Try the Live Demo
            </Link>
          </motion.div>
        </div>
      </FadeUp>
    </section>
  );
}
