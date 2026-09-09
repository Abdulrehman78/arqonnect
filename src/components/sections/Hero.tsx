"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroDemoChat from "@/components/HeroDemoChat";
import HeroVideoBackdrop from "@/components/ui/HeroVideoBackdrop";
import { GiggleText, useWelcomeReady } from "@/components/ui/GiggleText";
import { useCheapMotion } from "@/components/ui/Motion";

export default function Hero(): React.ReactElement {
  const ready = useWelcomeReady();
  const cheap = useCheapMotion();

  return (
    <section className="home-hero-dark relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-[clamp(4.75rem,10dvh,8rem)] pb-[clamp(1.25rem,4dvh,6rem)]">
      <HeroVideoBackdrop ready={ready} />

      <div className="home-hero-frame relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="home-hero-copy mx-auto max-w-4xl text-center">
          <motion.div
            className="inline-flex items-center justify-center gap-2"
            animate={
              !cheap && ready ? { opacity: [0.85, 1, 0.85] } : undefined
            }
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="ai-live-dot" />
            <GiggleText
              as="p"
              text="Live voice & chat"
              mode="chars"
              active={ready}
              className="home-hero-kicker font-mono text-[11px] font-medium uppercase tracking-[0.28em]"
            />
          </motion.div>

          <h1 className="home-hero-stack mt-[clamp(0.75rem,2dvh,1.5rem)]" aria-label="The agents ArQonnect speaks to every customer">
            <GiggleText
              as="span"
              text="THE AGENTS"
              mode="chars"
              active={ready}
              startDelay={cheap ? 0 : 0.15}
              className="home-hero-line home-hero-line--muted"
            />
            <GiggleText
              as="span"
              text="ArQonnect"
              mode="chars"
              active={ready}
              startDelay={cheap ? 0 : 0.3}
              className="home-hero-line home-hero-line--brand"
            />
            <GiggleText
              as="span"
              text="speaks to every customer"
              mode="words"
              active={ready}
              startDelay={cheap ? 0 : 0.45}
              className="home-hero-line home-hero-line--sub"
            />
          </h1>

          <span className="ai-title-line mx-auto mt-[clamp(0.75rem,2dvh,1.5rem)]" />

          <GiggleText
            as="p"
            text="Your business's intelligent AI twin for seamless customer engagement and automated operations."
            mode="words"
            active={ready}
            startDelay={cheap ? 0 : 0.55}
            className="home-hero-body mx-auto mt-[clamp(0.65rem,1.8dvh,1.25rem)] max-w-xl text-base leading-relaxed sm:text-lg"
          />

          <motion.div
            className="home-hero-ctas mt-[clamp(1rem,2.5dvh,2rem)] flex flex-wrap items-center justify-center gap-3"
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
                className="ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_28px_rgba(234,164,107,0.5)] transition-all hover:bg-[#C87D46]"
              >
                Try Our Live Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} data-magnetic>
              <Link
                href="/contact"
                className="home-hero-ghost inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold no-underline backdrop-blur-sm transition-all"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <HeroDemoChat ready={ready} enterDelay={cheap ? 0.15 : 0.7} />

        <motion.p
          className="home-hero-scroll mt-12 text-center font-mono text-[11px] uppercase tracking-[0.28em]"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: [0.65, 1, 0.65] } : { opacity: 0 }}
          transition={
            ready
              ? { delay: 2.6, duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : { delay: 2.6, duration: 0.6 }
          }
        >
          Scroll to explore
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
