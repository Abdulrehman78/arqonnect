"use client";

import Link from "next/link";
import React from "react";
import { FadeUp } from "@/components/ui/Motion";

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
      <div className="mx-auto max-w-6xl">{children}</div>
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
  amber: "text-amber-300",
  indigo: "text-indigo-300",
  orange: "text-orange-300",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  accent = "accent",
  compact = false,
}: SectionHeaderProps): React.ReactElement {
  return (
    <FadeUp className={`max-w-3xl ${compact ? "mb-6" : "mb-14"} ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`text-xs font-medium uppercase tracking-[0.2em] ${accentColors[accent]}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-bold tracking-tight text-text leading-tight ${
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 leading-relaxed text-text-dim ${compact ? "text-sm" : "text-base"}`}>
          {description}
        </p>
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
  return (
    <div
      className={`rounded-2xl border border-line bg-panel/40 p-6 transition-all hover:border-accent/20 hover:bg-panel/70 ${className}`}
    >
      {children}
    </div>
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
    <div
      id={id}
      className="overflow-hidden rounded-2xl border border-line bg-panel/60 shadow-2xl shadow-black/30"
    >
      <div className="flex gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      {children}
    </div>
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
    <Link
      href={href}
      className={`inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)] no-underline ${className}`}
    >
      {children}
    </Link>
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
    <Link
      href={href}
      className={`inline-flex items-center rounded-full border border-line bg-panel/60 px-6 py-3 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-accent/40 no-underline ${className}`}
    >
      {children}
    </Link>
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
          ? "bg-accent text-bg"
          : "border border-line bg-panel/60 text-text-dim hover:text-text"
      }`}
    >
      {children}
    </button>
  );
}
