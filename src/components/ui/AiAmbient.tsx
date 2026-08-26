"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AiAmbientProps = {
  /** denser particles for hero, lighter for other rooms */
  intensity?: "hero" | "room" | "site";
  className?: string;
};

const HERO_NODES = [
  { x: 12, y: 22, s: 3, d: 0 },
  { x: 28, y: 68, s: 2, d: 0.4 },
  { x: 48, y: 18, s: 2.5, d: 0.8 },
  { x: 62, y: 42, s: 3, d: 1.1 },
  { x: 78, y: 28, s: 2, d: 0.2 },
  { x: 88, y: 62, s: 2.5, d: 0.6 },
  { x: 18, y: 48, s: 2, d: 1.4 },
  { x: 72, y: 78, s: 3, d: 0.9 },
  { x: 40, y: 82, s: 2, d: 1.6 },
  { x: 55, y: 58, s: 2, d: 0.3 },
];

export default function AiAmbient({
  intensity = "room",
  className = "",
}: AiAmbientProps): React.ReactElement | null {
  const reduce = useReducedMotion();
  const count = intensity === "hero" ? 18 : intensity === "site" ? 10 : 12;

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 11) % 97}%`,
        top: `${(i * 53 + 7) % 93}%`,
        size: 1.5 + (i % 3),
        dur: 4 + (i % 5) * 1.2,
        delay: (i % 8) * 0.35,
      })),
    [count]
  );

  if (reduce) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Soft breathing orbs */}
      <motion.div
        className="absolute -left-[15%] top-[10%] h-[42vmin] w-[42vmin] rounded-full bg-sky-500/10 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -15, 0],
          scale: [1, 1.12, 0.96, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[10%] bottom-[5%] h-[48vmin] w-[48vmin] rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, -25, 20, 0],
          scale: [1, 0.94, 1.1, 1],
          opacity: [0.3, 0.5, 0.35, 0.3],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Neural nodes */}
      {(intensity === "hero" ? HERO_NODES : HERO_NODES.slice(0, 6)).map((n, i) => (
        <motion.span
          key={`n-${i}`}
          className="absolute rounded-full bg-sky-300/80"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: n.s,
            height: n.s,
            boxShadow: "0 0 10px rgba(56,189,248,0.65)",
          }}
          animate={{
            opacity: [0.25, 0.95, 0.35, 0.25],
            scale: [1, 1.6, 1, 1],
          }}
          transition={{
            duration: 3.2 + (i % 3) * 0.6,
            repeat: Infinity,
            delay: n.d,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating signal particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, (p.id % 2 === 0 ? 12 : -12), 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Slow scan / signal sweep */}
      {intensity !== "site" && (
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
          animate={{ top: ["8%", "88%", "8%"], opacity: [0, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Data stream ticks (hero only) */}
      {intensity === "hero" && (
        <div className="absolute bottom-8 left-6 hidden font-mono text-[10px] tracking-widest text-sky-300/35 sm:block">
          <motion.span
            animate={{ opacity: [0.25, 0.85, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            AGENT_LIVE
          </motion.span>
          <motion.span
            className="ml-3 inline-block"
            animate={{ opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 }}
          >
            ● LAT &lt;500ms
          </motion.span>
        </div>
      )}
    </div>
  );
}
