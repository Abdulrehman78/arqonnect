"use client";

import Link from "next/link";
import { Section, SectionHeader, Card } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

export default function Analytics() {
  return (
    <>
      <Section border id="analytics">
        <SectionHeader
          eyebrow="Measure What Matters"
          title={
            <>
              If you can&apos;t see it,
              <br />
              you can&apos;t improve it.
            </>
          }
          description="Every conversation feeds the same dashboard — resolution rate, satisfaction, and where customers actually reach you."
          accent="cyan"
        />
        <FadeUp>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card>
              <span className="text-xs font-medium text-text-dimmer">
                Resolution Rate — Last 30 Days
              </span>
              <div className="mt-4 h-24">
                <svg
                  viewBox="0 0 300 90"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="resGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EAA46B" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#EAA46B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 60 L25 55 L50 58 L75 42 L100 45 L125 30 L150 35 L175 22 L200 26 L225 15 L250 18 L275 8 L300 10 L300 90 L0 90 Z"
                    fill="url(#resGrad)"
                  />
                  <path
                    d="M0 60 L25 55 L50 58 L75 42 L100 45 L125 30 L150 35 L175 22 L200 26 L225 15 L250 18 L275 8 L300 10"
                    fill="none"
                    stroke="#EAA46B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <b className="ai-num-glow text-2xl font-bold text-text">92%</b>
                <span className="text-sm text-text-dim">
                  resolved without a human
                </span>
              </div>
            </Card>
            <Card>
              <span className="text-xs font-medium text-text-dimmer">
                CSAT Trend — Last 30 Days
              </span>
              <div className="mt-4 h-24">
                <svg
                  viewBox="0 0 300 90"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="csatGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EAA46B" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#EAA46B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 50 L25 48 L50 52 L75 40 L100 44 L125 32 L150 36 L175 24 L200 28 L225 20 L250 22 L275 14 L300 16 L300 90 L0 90 Z"
                    fill="url(#csatGrad)"
                  />
                  <path
                    d="M0 50 L25 48 L50 52 L75 40 L100 44 L125 32 L150 36 L175 24 L200 28 L225 20 L250 22 L275 14 L300 16"
                    fill="none"
                    stroke="#EAA46B"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <b className="ai-num-glow text-2xl font-bold text-text">4.6/5</b>
                <span className="text-sm text-text-dim">
                  average satisfaction score
                </span>
              </div>
            </Card>
            <Card>
              <span className="text-xs font-medium text-text-dimmer">
                Where Conversations Happen
              </span>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Voice", pct: 38, color: "#EAA46B" },
                  { label: "Web Chat", pct: 29, color: "#EAA46B" },
                  { label: "WhatsApp", pct: 18, color: "#25D366" },
                  { label: "SMS & Social DM", pct: 15, color: "#C87D46" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-24 text-text-dim">{row.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-panel-2">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${row.pct}%`,
                          background: row.color,
                        }}
                      />
                    </div>
                    <em className="w-8 text-right text-text-dimmer not-italic">
                      {row.pct}%
                    </em>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <b className="ai-num-glow text-2xl font-bold text-text">4</b>
                <span className="text-sm text-text-dim">
                  channels, one dashboard
                </span>
              </div>
            </Card>
          </div>
          <p className="mt-8 text-center text-sm text-text-dimmer">
            Illustrative dashboard — your real numbers populate here from day
            one live.
          </p>
        </FadeUp>
      </Section>

      <section className="relative overflow-hidden border-t border-line px-6 py-20 md:py-24">
        <SchemeOverlay />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <h2 className="ai-title text-2xl font-bold tracking-tight text-text md:text-4xl">
            Ready when your security team is.
            <span className="ai-title-line mx-auto" />
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-dim md:text-base">
            Walk through guardrails, analytics and deployment support on a
            dedicated enterprise call.
          </p>
          <Link
            href="/contact"
            className="ai-cta-shine mt-8 inline-flex items-center rounded-full bg-[#EAA46B] px-7 py-3.5 text-sm font-semibold text-[#0B0F12] transition-all hover:bg-[#C87D46] hover:shadow-[0_0_32px_rgba(234,164,107,0.4)] no-underline"
          >
            Book an Enterprise Demo →
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
