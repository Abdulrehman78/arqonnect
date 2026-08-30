"use client";

import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp, HoverLift } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  first?: boolean;
  border?: boolean;
  alt?: boolean;
};

export function Section({
  children,
  id,
  className = "",
  first = false,
  border = false,
  alt = false,
}: SectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={`relative px-4 py-16 sm:px-6 md:py-24 lg:py-28 ${first ? "pt-24 md:pt-32" : ""} ${
        border ? "border-t border-line" : ""
      } ${alt ? "bg-bg-alt" : ""} ${className}`}
    >
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  accent?: "accent" | "violet" | "cyan" | "amber" | "indigo" | "orange";
  compact?: boolean;
};

const accentColors = {
  accent: "text-accent",
  violet: "text-violet",
  cyan: "text-cyan",
  amber: "text-gold",
  indigo: "text-gold",
  orange: "text-gold",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  accent = "accent",
  compact = false,
}: SectionHeaderProps): React.ReactElement {
  const reduce = useReducedMotion();
  const titleText = typeof title === "string" ? title : null;
  return (
    <FadeUp className={`max-w-3xl ${compact ? "mb-6" : "mb-14"} ${center ? "mx-auto text-center" : ""}`}>
      <motion.span
        className={`inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] ${accentColors[accent]}`}
        animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="ai-live-dot" />
        <GiggleText text={eyebrow} tone="wave" />
      </motion.span>
      <h2
        className={`ai-title mt-4 font-bold tracking-tight text-text leading-tight ${
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"
        }`}
      >
        {titleText ? (
          <GiggleText as="span" text={titleText} tone="rise" />
        ) : (
          title
        )}
        <span className={`ai-title-line ${center ? "mx-auto" : ""}`} />
      </h2>
      {description && (
        <GiggleText
          as="p"
          text={description}
          tone="blur"
          startDelay={0.2}
          className={`mt-5 leading-relaxed text-text-dim ${compact ? "text-sm" : "text-base"}`}
        />
      )}
    </FadeUp>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`motion-card rounded-2xl border border-line bg-panel/40 p-6 transition-colors hover:border-accent/20 hover:bg-panel/70 ${className}`}
      whileHover={
        reduce
          ? undefined
          : { y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      {children}
    </motion.div>
  );
}

export function BrowserFrame({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}): React.ReactElement {
  return (
    <motion.div
      id={id}
      className="overflow-hidden rounded-2xl border border-line bg-panel/60 shadow-2xl shadow-black/30"
      data-ai-tilt
      data-ai-sheen
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      {children}
    </motion.div>
  );
}

export function BtnPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <HoverLift>
      <Link
        href={href}
        className={`ai-cta-shine inline-flex items-center rounded-full bg-[#EAA46B] px-6 py-3 text-sm font-semibold text-[#0B0F12] transition-all hover:bg-[#C87D46] hover:shadow-[0_0_24px_rgba(234,164,107,0.45)] no-underline ${className}`}
      >
        {children}
      </Link>
    </HoverLift>
  );
}

export function BtnGhost({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <HoverLift>
      <Link
        href={href}
        className={`inline-flex items-center rounded-full border border-line bg-panel/60 px-6 py-3 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-gold/50 hover:text-gold no-underline ${className}`}
      >
        {children}
      </Link>
    </HoverLift>
  );
}

export function Chip({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
          active
            ? "bg-[#EAA46B] text-[#0B0F12]"
            : "ai-chip-breathe border border-line bg-panel/60 text-text-dim hover:text-text"
        }`}
    >
      {children}
    </button>
  );
}
