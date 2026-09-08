"use client";

import Link from "next/link";
import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";
import MultiStepLeadForm from "@/components/forms/MultiStepLeadForm";

export default function CtaContact() {
  return (
    <Section border id="contact" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 media-scrim-gradient" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <FadeUp>
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="ai-live-dot" />
            Last Call
          </span>
          <h2 className="ai-title mt-4 text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            Somewhere, right now,
            <br />
            your phone is ringing.
            <span className="ai-title-line" />
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dim">
            Every minute it goes unanswered, that lead is calling someone else. Book a 20-minute
            walkthrough — we&apos;ll map your stack and show exactly what ArQonnect replaces, no
            obligation.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-text-dim">
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Same-week demo scheduling
            </li>
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Real specialists, not a ticket queue
            </li>
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Live across US · UK · Canada · Australia · Europe
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-5 py-2.5 text-sm font-semibold text-text no-underline transition-all hover:border-accent/40"
            >
              Try the Live Demo
            </Link>
            <a
              href="mailto:hello@arqonnect.com"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-5 py-2.5 text-sm font-semibold text-text no-underline transition-all hover:border-accent/40"
            >
              hello@arqonnect.com
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <MultiStepLeadForm />
        </FadeUp>
      </div>
    </Section>
  );
}
