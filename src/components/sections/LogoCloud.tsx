"use client";

import { FadeUp } from "@/components/ui/Motion";

const markets = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Europe",
  "Healthcare",
  "Real Estate",
  "E-Commerce",
];

export default function LogoCloud() {
  const doubled = [...markets, ...markets];

  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-alt py-14">
      <FadeUp className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-dimmer">
          Running that job across five markets
        </p>
      </FadeUp>

      <div className="relative mt-8">
        <div className="flex w-max animate-marquee items-center gap-16">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-text-dimmer/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
