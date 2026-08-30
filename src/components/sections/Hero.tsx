"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroDemoChat from "@/components/HeroDemoChat";
import HeroVideoBackdrop from "@/components/ui/HeroVideoBackdrop";
import { GiggleText, useWelcomeReady } from "@/components/ui/GiggleText";
import { useCheapMotion } from "@/components/ui/Motion";

const textShadowSub = [
  "0 1px 2px rgb(var(--shadow-rgb) / 0.95)",
  "0 4px 24px rgb(var(--shadow-rgb) / 0.85)",
  "0 8px 40px rgb(var(--shadow-rgb) / 0.6)",
].join(", ");

export default function Hero(): React.ReactElement {
  const ready = useWelcomeReady();
  const cheap = useCheapMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <HeroVideoBackdrop ready={ready} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="inline-flex items-center justify-center"
            animate={
              !cheap && ready
                ? { opacity: [0.85, 1, 0.85] }
                : undefined
            }
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="ai-live-dot" />
            <GiggleText
              as="p"
              text="ArQonnect"
              mode="chars"
              active={ready}
              className="ai-shimmer-text text-sm font-medium tracking-tight"
            />
          </motion.div>

          <GiggleText
            as="h1"
            text="Speak human to every customer"
            mode="chars"
            active={ready}
            startDelay={cheap ? 0 : 0.35}
            className="banner-heading mt-4 text-4xl sm:text-5xl lg:text-6xl"
          />
          <span className="ai-title-line mx-auto mt-5" />

          <GiggleText
            as="p"
            text="Build and deploy voice and chat agents that answer every call, win every chat, and book the appointment — before your competitor picks up."
            mode="words"
            active={ready}
            startDelay={cheap ? 0 : 0.55}
            className="room-body mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ textShadow: textShadowSub }}
          />

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={false}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: cheap ? 0.1 : 0.55, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="ai-cta-breath"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-magnetic
            >
              <Link
                href="/demo"
                className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline shadow-[0_8px_32px_rgb(var(--shadow-rgb)/0.55),0_0_28px_rgba(234,164,107,0.5)] transition-all hover:bg-[#C87D46] hover:shadow-[0_10px_40px_rgb(var(--shadow-rgb)/0.6),0_0_36px_rgba(234,164,107,0.6)]"
              >
                Try Our Live Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} data-magnetic>
              <Link
                href="/contact"
                className="room-heading inline-flex items-center rounded-full border border-text/30 bg-bg/50 px-6 py-3 text-sm font-semibold no-underline shadow-[0_8px_28px_rgb(var(--shadow-rgb)/0.55)] backdrop-blur-sm transition-all hover:border-text/45 hover:bg-bg/65"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <HeroDemoChat ready={ready} enterDelay={cheap ? 0.15 : 0.7} />

        <motion.p
          className="room-caption mt-12 text-center font-mono text-[11px] uppercase tracking-[0.28em]"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: [0.65, 1, 0.65] } : { opacity: 0 }}
          transition={
            ready
              ? { delay: 2.6, duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : { delay: 2.6, duration: 0.6 }
          }
        >
          Scroll to enter
        </motion.p>
        <motion.div
          className="ai-scroll-line mx-auto mt-3 flex h-8 w-px justify-center bg-gradient-to-b from-accent/70 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={ready ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ delay: 2.75, duration: 0.5 }}
          style={{ originY: 0 }}
        />
      </div>
    </section>
  );
}
