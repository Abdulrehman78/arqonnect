"use client";

import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

export default function Moment() {
  return (
    <Section alt border>
      <FadeUp className="mx-auto max-w-3xl text-center py-8">
        <svg className="mx-auto h-12 w-12 opacity-60" viewBox="0 0 64 64" fill="none">
          <path d="M18 20c-8 4-12 12-12 22 0 8 6 14 14 14s14-6 14-14c0-7-5-12-12-13 1-5 5-8 10-9z" fill="#22C55E" opacity="0.85" />
          <path d="M46 20c-8 4-12 12-12 22 0 8 6 14 14 14s14-6 14-14c0-7-5-12-12-13 1-5 5-8 10-9z" fill="#8B5CF6" opacity="0.85" />
        </svg>
        <p className="mt-8 text-3xl font-bold leading-tight text-text md:text-4xl">
          Every missed call is a competitor&apos;s
          <br />
          new customer.
        </p>
        <span className="mt-6 block text-sm text-text-dimmer">
          — the whole reason ArQonnect exists
        </span>
      </FadeUp>
    </Section>
  );
}
