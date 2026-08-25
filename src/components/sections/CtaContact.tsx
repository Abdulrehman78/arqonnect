"use client";

import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

export default function CtaContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section border id="contact" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-violet/5" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <FadeUp>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Last Call
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            Somewhere, right now,
            <br />
            your phone is ringing.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dim">
            Every minute it goes unanswered, that lead is calling someone else.
            Book a 20-minute walkthrough — we&apos;ll map your stack and show
            exactly what ArQonnect replaces, no obligation.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-text-dim">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              Same-week demo scheduling
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              Real specialists, not a ticket queue
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
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
          <div className="rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  ✓
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  Request received
                </h3>
                <p className="mt-2 text-sm text-text-dim">
                  A specialist will follow up shortly — usually same week.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-market"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Primary market
                  </label>
                  <select
                    id="contact-market"
                    name="market"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none focus:border-accent/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a market
                    </option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="eu">Europe</option>
                    <option value="pk">Pakistan / Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Chat agents, voice, CRM sync, enterprise…"
                    className="w-full resize-y rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(34,197,94,0.35)]"
                >
                  Book a Demo →
                </button>
                <p className="text-center text-xs text-text-dimmer">
                  No obligation. We&apos;ll map your stack on the call.
                </p>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
