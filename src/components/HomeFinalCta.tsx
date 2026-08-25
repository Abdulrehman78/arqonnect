"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";

export default function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 border-t border-line">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-violet/5" />
      <FadeUp className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
          Every missed lead is a competitor&apos;s new customer.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
          Put an AI workforce on it — chat, voice, CRM and growth, running
          24/7 across every channel your leads use.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(34,197,94,0.4)] no-underline"
          >
            Book a Demo →
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-accent/40 no-underline"
          >
            Try the Live Demo
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
