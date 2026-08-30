"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { RoomActiveContext } from "@/components/ui/Motion";

/** True once the site preloader has finished (or if it never mounted). */
export function useWelcomeReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.documentElement.classList.contains("preloader-active")) {
      setReady(true);
      return;
    }
    const obs = new MutationObserver(() => {
      if (!document.documentElement.classList.contains("preloader-active")) {
        setReady(true);
        obs.disconnect();
      }
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  return ready;
}

export type GiggleTone =
  | "giggle"
  | "rise"
  | "wave"
  | "blur"
  | "slide"
  | "pop"
  | "glow";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tones: Record<
  GiggleTone,
  { unit: "chars" | "words"; variants: Variants }
> = {
  giggle: {
    unit: "chars",
    variants: {
      hidden: { opacity: 0, y: 18, rotate: -8, scale: 0.7 },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        y: [18, -10, 4, -2, 0],
        rotate: [-8, 6, -3, 2, 0],
        scale: [0.7, 1.08, 0.96, 1.02, 1],
        transition: {
          delay: base + index * 0.04,
          duration: 0.55,
          ease: [0.22, 1.2, 0.36, 1],
          times: [0, 0.35, 0.55, 0.75, 1],
        },
      }),
    },
  },
  rise: {
    unit: "chars",
    variants: {
      hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay: base + index * 0.028,
          duration: 0.52,
          ease: EASE,
        },
      }),
    },
  },
  wave: {
    unit: "chars",
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        y: [20, -8, 0],
        transition: {
          delay: base + index * 0.032,
          duration: 0.5,
          ease: [0.22, 1.15, 0.36, 1],
          times: [0, 0.52, 1],
        },
      }),
    },
  },
  blur: {
    unit: "words",
    variants: {
      hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay: base + index * 0.065,
          duration: 0.55,
          ease: EASE,
        },
      }),
    },
  },
  slide: {
    unit: "words",
    variants: {
      hidden: { opacity: 0, x: -28, y: 6 },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: base + index * 0.07,
          duration: 0.5,
          ease: EASE,
        },
      }),
    },
  },
  pop: {
    unit: "words",
    variants: {
      hidden: { opacity: 0, scale: 0.7, y: 12 },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        scale: [0.7, 1.07, 1],
        y: 0,
        transition: {
          delay: base + index * 0.075,
          duration: 0.5,
          ease: [0.22, 1.2, 0.36, 1],
          times: [0, 0.58, 1],
        },
      }),
    },
  },
  glow: {
    unit: "chars",
    variants: {
      hidden: { opacity: 0, y: 16, textShadow: "0 0 0 rgba(234,164,107,0)" },
      visible: ({ index, base }: { index: number; base: number }) => ({
        opacity: 1,
        y: 0,
        textShadow: [
          "0 0 0 rgba(234,164,107,0)",
          "0 0 22px rgba(234,164,107,0.75)",
          "0 0 8px rgba(234,164,107,0.28)",
        ],
        transition: {
          delay: base + index * 0.03,
          duration: 0.55,
          ease: EASE,
          times: [0, 0.55, 1],
        },
      }),
    },
  },
};

const wordGiggle: Variants = {
  hidden: { opacity: 0, y: 16, rotate: -4, scale: 0.85 },
  visible: ({ index, base }: { index: number; base: number }) => ({
    opacity: 1,
    y: [16, -6, 2, 0],
    rotate: [-4, 3, -1, 0],
    scale: [0.85, 1.04, 0.98, 1],
    transition: {
      delay: base + index * 0.07,
      duration: 0.48,
      ease: [0.22, 1.15, 0.36, 1],
      times: [0, 0.4, 0.7, 1],
    },
  }),
};

type GiggleTextProps = {
  text: string;
  mode?: "chars" | "words";
  tone?: GiggleTone;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  startDelay?: number;
  /** When omitted, plays each time the home room comes on screen. */
  active?: boolean;
};

/**
 * Play the entrance when a home room becomes visible.
 * Remounts on each enter so the letters run again; stay put while leaving.
 */
function useRoomReplay(controlled?: boolean): {
  active: boolean;
  gen: number;
  inRoom: boolean;
} {
  const roomActive = useContext(RoomActiveContext);
  const [gen, setGen] = useState(0);

  useEffect(() => {
    if (controlled !== undefined) return;
    if (roomActive !== true) return;
    const t = window.setTimeout(() => setGen((g) => g + 1), 140);
    return () => clearTimeout(t);
  }, [roomActive, controlled]);

  if (controlled !== undefined) {
    return { active: controlled, gen: 0, inRoom: roomActive !== null };
  }
  if (roomActive === null) return { active: true, gen: 0, inRoom: false };
  return { active: gen > 0, gen, inRoom: true };
}

export function GiggleText({
  text,
  mode,
  tone = "giggle",
  className,
  style,
  as: Tag = "span",
  startDelay = 0,
  active: activeProp,
}: GiggleTextProps): React.ReactElement {
  const reduce = useReducedMotion();
  const { active, gen, inRoom } = useRoomReplay(activeProp);
  const preset = tones[tone];
  const unit = mode ?? preset.unit;
  const variants =
    tone === "giggle" && unit === "words" ? wordGiggle : preset.variants;

  const lines = text.split("\n");

  if (reduce) {
    return (
      <Tag className={className} style={style}>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <br /> : null}
            {line}
          </React.Fragment>
        ))}
      </Tag>
    );
  }

  const playProps = inRoom
    ? { animate: active ? "visible" : ("hidden" as const) }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.45, margin: "-40px" },
      };

  let charIndex = 0;
  let wordIndex = 0;

  const renderLine = (line: string, lineKey: number) => {
    const tokens = line.split(/(\s+)/).filter(Boolean);
    if (unit === "words") {
      return tokens.map((unitToken, i) => {
        if (unitToken.trim() === "") {
          return (
            <span key={`s-${lineKey}-${i}`} aria-hidden>
              {unitToken}
            </span>
          );
        }
        const idx = wordIndex++;
        return (
          <motion.span
            key={`${unitToken}-${lineKey}-${i}`}
            className="inline-block whitespace-nowrap"
            aria-hidden
            custom={{ index: idx, base: startDelay }}
            variants={variants}
            initial="hidden"
            style={{ willChange: "transform, opacity, filter" }}
            {...playProps}
          >
            {unitToken}
          </motion.span>
        );
      });
    }

    return tokens.map((token, ti) => {
      if (token.trim() === "") {
        return (
          <span key={`s-${lineKey}-${ti}`} aria-hidden>
            {" "}
          </span>
        );
      }
      return (
        <span
          key={`${token}-${lineKey}-${ti}`}
          className="inline-block whitespace-nowrap"
          aria-hidden
        >
          {Array.from(token).map((ch, ci) => {
            const idx = charIndex++;
            return (
              <motion.span
                key={`${ch}-${ci}`}
                className="inline-block"
                custom={{ index: idx, base: startDelay }}
                variants={variants}
                initial="hidden"
                style={{ willChange: "transform, opacity, filter" }}
                {...playProps}
              >
                {ch}
              </motion.span>
            );
          })}
        </span>
      );
    });
  };

  return (
    <Tag className={className} style={style} aria-label={text.replace(/\n/g, " ")}>
      <span key={gen} className="inline">
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <br /> : null}
            {renderLine(line, i)}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  );
}
