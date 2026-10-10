"use client";

import { Building2, MapPin } from "lucide-react";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const MARKETS = [
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "UK", flag: "🇬🇧" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Saudi Arabia", code: "KSA", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "UAE", flag: "🇦🇪" },
] as const;

/** Approximate positions on a simplified world map viewBox 0 0 100 50 */
const MAP_DOTS = [
  { x: 18, y: 22, label: null },
  { x: 28, y: 18, label: null },
  { x: 48, y: 16, label: null },
  { x: 52, y: 20, label: null },
  { x: 62, y: 28, label: "PAKISTAN (Headquarters)", primary: true },
  { x: 58, y: 32, label: null },
  { x: 72, y: 30, label: null },
  { x: 82, y: 34, label: null },
] as const;

function DotMap() {
  const points: Array<[number, number]> = [];
  for (let y = 4; y < 48; y += 2.2) {
    for (let x = 4; x < 96; x += 2.2) {
      // Rough continents silhouette
      const inAmericas = x < 32 && y > 10 && y < 42 && Math.sin(x * 0.4) * 6 + 26 > y - 8;
      const inEurope = x > 42 && x < 58 && y > 10 && y < 24;
      const inAfrica = x > 46 && x < 58 && y > 22 && y < 40;
      const inAsia = x > 58 && x < 88 && y > 12 && y < 36;
      const inOceania = x > 78 && x < 92 && y > 34 && y < 44;
      if (inAmericas || inEurope || inAfrica || inAsia || inOceania) {
        points.push([x + ((y * 3) % 1.1), y + ((x * 2) % 0.8)]);
      }
    }
  }

  return (
    <svg
      viewBox="0 0 100 50"
      className="h-full w-full"
      role="img"
      aria-label="World map highlighting Pakistan headquarters"
    >
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.35" fill="rgba(138,153,168,0.35)" />
      ))}
      {MAP_DOTS.map((d, i) => (
        <g key={i}>
          <circle
            cx={d.x}
            cy={d.y}
            r={"primary" in d && d.primary ? 1.4 : 0.7}
            fill="#D48F5B"
            className={"primary" in d && d.primary ? "animate-pulse" : undefined}
          />
          {"label" in d && d.label ? (
            <text
              x={d.x + 2.2}
              y={d.y + 0.6}
              fill="rgba(244,247,248,0.85)"
              fontSize="2.4"
              fontFamily="ui-monospace, monospace"
            >
              {d.label}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

export default function GlobalPresence() {
  return (
    <section
      id="global-presence"
      className="relative overflow-hidden border-b border-line bg-[#0B0D11] px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="presence-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#D48F5B]">
              <span className="inline-block h-px w-6 bg-[#D48F5B]" aria-hidden />
              Our Global Presence
            </p>
            <h2
              id="presence-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              Rooted in Pakistan.
              <br />
              <span className="text-[#D48F5B]">Connected to the world.</span>
            </h2>
            <p className="mt-3 text-sm text-[#8A99A8] sm:text-base">
              Local understanding. International connections.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6B7A88]">
            01 Headquarters / 06 Markets
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <FadeUp>
            <article className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#12151A] transition-colors duration-300 hover:border-[#D48F5B]/40">
              <div className="flex items-start justify-between gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#D48F5B]">
                  <Building2 className="h-3.5 w-3.5" aria-hidden />
                  Headquarters
                </div>
                <span className="text-lg" aria-label="Pakistan">
                  🇵🇰
                </span>
              </div>
              <div className="px-5 pt-4 sm:px-6">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Pakistan
                </h3>
                <p className="mt-1 text-sm text-[#8A99A8]">
                  Our home. The heart of ArQonnect.
                </p>
              </div>
              <div className="relative mt-4 min-h-[180px] flex-1 px-2 sm:min-h-[220px]">
                <DotMap />
              </div>
              <div className="mt-auto flex items-center gap-2 border-t border-white/[0.06] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#D48F5B] sm:px-6">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Pakistan · Global Connections
              </div>
            </article>
          </FadeUp>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {MARKETS.map((m) => (
              <MotionItem key={m.code}>
                <article className="group flex h-full min-h-[112px] flex-col justify-between rounded-xl border border-white/[0.08] bg-[#12151A] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D48F5B] hover:shadow-[0_16px_32px_-20px_rgba(212,143,91,0.5)]">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xl" aria-hidden>
                      {m.flag}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B7A88]">
                      {m.code}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white transition-colors group-hover:text-[#F4F7F8]">
                      {m.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#6B7A88]">
                      Business Representative
                    </p>
                  </div>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
