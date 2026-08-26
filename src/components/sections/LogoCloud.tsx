"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/Motion";
import AiAmbient from "@/components/ui/AiAmbient";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import { scrim } from "@/lib/themeColors";

const flags = [
  { name: "United States", src: "https://flagcdn.com/w160/us.png" },
  { name: "United Kingdom", src: "https://flagcdn.com/w160/gb.png" },
  { name: "Canada", src: "https://flagcdn.com/w160/ca.png" },
  { name: "Australia", src: "https://flagcdn.com/w160/au.png" },
  { name: "Europe", src: "https://flagcdn.com/w160/eu.png" },
  { name: "Pakistan", src: "https://flagcdn.com/w160/pk.png" },
];

const industries: Array<{
  name: string;
  mark: "health" | "home" | "cart";
}> = [
  { name: "Healthcare", mark: "health" },
  { name: "Real Estate", mark: "home" },
  { name: "E-Commerce", mark: "cart" },
];

function MarkIcon({
  mark,
}: {
  mark: "health" | "home" | "cart";
}): React.ReactElement {
  if (mark === "health") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" aria-hidden>
        <path fill="currentColor" d="M11 3h2v6h6v2h-6v6h-2v-6H5V9h6V3z" />
      </svg>
    );
  }
  if (mark === "home") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" aria-hidden>
        <path fill="currentColor" d="M12 3 3 11h2v9h5v-5h4v5h5v-9h2L12 3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" aria-hidden>
      <path
        fill="currentColor"
        d="M7 6h14l-1.4 8H8.2L7 6zm0 0L6 3H2v2h3l3.6 12h10.2v-2H9.4L9 11h9.7L20.5 4H7.5L7 6zM9 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
    </svg>
  );
}

function MarqueeRow({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: React.ReactNode[];
}): React.ReactElement {
  // Two identical halves for a seamless loop (unique keys per half)
  const track = (
    <>
      {children.map((child, i) => (
        <span key={`a-${i}`} className="contents">
          {child}
        </span>
      ))}
      {children.map((child, i) => (
        <span key={`b-${i}`} className="contents">
          {child}
        </span>
      ))}
    </>
  );

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/80 to-transparent" />
      <div
        className={`market-marquee flex w-max items-center gap-10 px-4 ${
          reverse ? "market-marquee--reverse" : ""
        }`}
      >
        {track}
      </div>
    </div>
  );
}

export default function LogoCloud() {
  // Enough repeats so both tracks are wider than the viewport and loop cleanly
  const flagItems = [...flags, ...flags];
  const industryItems = [
    ...industries,
    ...industries,
    ...industries,
    ...industries,
  ];

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-y border-line bg-bg py-16">
      <ZoomBackdrop
        src="/images/markets-banner.jpg"
        delaySec={6}
        veil={[
          `linear-gradient(180deg, ${scrim(0.75)} 0%, ${scrim(0.55)} 40%, ${scrim(0.65)} 100%)`,
          `radial-gradient(ellipse 80% 60% at 50% 50%, ${scrim(0.25)} 0%, ${scrim(0.7)} 100%)`,
        ].join(",")}
      >
        <AiAmbient intensity="room" className="z-[2] opacity-70" />
      </ZoomBackdrop>

      <div className="relative z-10 w-full">
        <FadeUp className="text-center">
          <p className="room-caption text-xs font-medium uppercase tracking-[0.18em]">
            Trusted across markets and industries
          </p>
        </FadeUp>

        <div className="mt-8 flex flex-col gap-6">
          {/* Flags — faster loop, left */}
          <MarqueeRow>
            {flagItems.map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                className="inline-flex h-10 shrink-0 items-center"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  width={52}
                  height={40}
                  className="h-10 w-auto rounded-md object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                  loading="lazy"
                />
              </span>
            ))}
          </MarqueeRow>

          {/* Industries — slower loop, right */}
          <MarqueeRow reverse>
            {industryItems.map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                className="inline-flex h-10 shrink-0 items-center gap-2.5 rounded-md border border-accent/30 bg-panel/90 px-3.5 shadow-[0_0_20px_rgba(59,130,246,0.12)] backdrop-blur-sm"
                title={item.name}
              >
                <MarkIcon mark={item.mark} />
                <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-text">
                  {item.name}
                </span>
              </span>
            ))}
          </MarqueeRow>
        </div>
      </div>
    </section>
  );
}
