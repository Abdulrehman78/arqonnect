"use client";

import { motion, type Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

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

const charGiggle: Variants = {
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
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "p" | "span";
  /** Seconds before the first unit starts */
  startDelay?: number;
  active?: boolean;
};

export function GiggleText({
  text,
  mode = "chars",
  className,
  style,
  as: Tag = "span",
  startDelay = 0,
  active = true,
}: GiggleTextProps): React.ReactElement {
  const tokens = text.split(/(\s+)/).filter(Boolean);
  let charIndex = 0;
  let wordIndex = 0;

  return (
    <Tag className={className} style={style} aria-label={text}>
      <span className="inline">
        {mode === "words"
          ? tokens.map((unit, i) => {
              if (unit.trim() === "") {
                return (
                  <span key={`s-${i}`} aria-hidden>
                    {unit}
                  </span>
                );
              }
              const idx = wordIndex++;
              return (
                <motion.span
                  key={`${unit}-${i}`}
                  className="inline-block whitespace-nowrap"
                  aria-hidden
                  custom={{ index: idx, base: startDelay }}
                  variants={wordGiggle}
                  initial="hidden"
                  animate={active ? "visible" : "hidden"}
                  style={{ willChange: "transform, opacity" }}
                >
                  {unit}
                </motion.span>
              );
            })
          : tokens.map((token, ti) => {
              if (token.trim() === "") {
                return (
                  <span key={`s-${ti}`} aria-hidden>
                    {" "}
                  </span>
                );
              }
              // Unbreakable word shell — letters still animate one-by-one
              return (
                <span
                  key={`${token}-${ti}`}
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
                        variants={charGiggle}
                        initial="hidden"
                        animate={active ? "visible" : "hidden"}
                        style={{ willChange: "transform, opacity" }}
                      >
                        {ch}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
      </span>
    </Tag>
  );
}
