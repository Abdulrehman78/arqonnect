"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";

function Waveform({ bars = 24 }: { bars?: number }) {
  return (
    <div className="flex h-5 items-center gap-[2px] sm:h-6 sm:gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-[2px] origin-bottom rounded-full bg-accent sm:w-[3px]"
          style={{
            height: "100%",
            animation: "waveBar 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero({
  embedded = false,
  fullscreenSlide = false,
}: {
  embedded?: boolean;
  fullscreenSlide?: boolean;
}): React.ReactElement {
  const fullBleed = embedded || fullscreenSlide;

  return (
    <section
      className={`relative w-full overflow-hidden bg-bg ${
        fullBleed
          ? "flex min-h-[100svh] items-center py-20 md:h-full md:min-h-full md:py-0"
          : "min-h-screen pt-28 pb-20"
      }`}
    >
      <InteractiveBackdrop theme="home" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent sm:px-4 sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="truncate">AI Agency · Every Lead. Every Time.</span>
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-text sm:mt-6 sm:text-5xl lg:text-6xl">
              The AI agency built to{" "}
              <span className="bg-gradient-to-r from-accent via-emerald-300 to-violet bg-clip-text text-transparent">
                never lose a lead
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-dim sm:mt-6 sm:text-base lg:text-lg">
              ArQonnect is an AI agency — our product is the bot and the agent.
              Somewhere right now, a customer is messaging a business that won&apos;t
              reply until Monday. We build the agent that answers instead — a
              humanoid chatbot and voice agent that wins the chat, takes the call,
              and books the appointment before your competitor even picks up the
              phone.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-bg no-underline transition-all hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(34,197,94,0.4)] sm:px-7 sm:py-3.5"
              >
                Book a Demo →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-line bg-panel/60 px-5 py-3 text-sm font-semibold text-text no-underline backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-panel sm:px-7 sm:py-3.5"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-violet/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3 sm:items-center sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-text">
                    ArQonnect AI Voice Assistant
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] text-accent sm:text-xs">
                    RECORDING LIVE · &lt;500ms
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-accent">
                  ● REC
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 overflow-hidden border-b border-line bg-bg/50 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                <Waveform bars={16} />
                <span className="shrink-0 font-mono text-[10px] text-text-dimmer sm:text-xs">
                  Live feed
                </span>
                <div className="hidden sm:block">
                  <Waveform bars={16} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-line p-px">
                {[
                  { value: "20+", label: "AI-Run Services" },
                  { value: "$1,600+", label: "Stack Replaced" },
                  { value: "24/7", label: "Agent Uptime" },
                  { value: "3", label: "US · UK · AU", accent: true },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center bg-panel/90 px-3 py-4 text-center sm:px-4 sm:py-6"
                  >
                    <b
                      className={`text-xl font-extrabold tracking-tight sm:text-2xl ${
                        stat.accent ? "text-accent" : "text-text"
                      }`}
                    >
                      {stat.value}
                    </b>
                    <span className="mt-1 text-[11px] leading-snug text-text-dim sm:text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[10px] text-text-dimmer sm:px-6 sm:text-xs">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
                  ARQ · 01 — THE ARRIVAL
                </span>
                <span className="hidden sm:inline">Scroll ↓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
