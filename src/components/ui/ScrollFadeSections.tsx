"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type RoomStyle = {
  clipPath: string;
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const DWELL_VH = 0.12;
/** Room-to-room enter distance (iris open) */
const ENTER_VH = 1.2;
const LAST_HOLD_VH = 1;
const LAST_DWELL_VH = 0.75;
const SMOOTH = 9;

const FULL_CLIP = "inset(0 0 0 0)";

function smootherstep(t: number): number {
  const x = clamp(t, 0, 1);
  return x * x * x * (x * (x * 6 - 15) + 10);
}

/**
 * Sticky rooms: outgoing zooms, incoming opens with a circular iris.
 * Same motion for banner → next and every later room.
 */
function getRoomStyle(
  index: number,
  active: number,
  depth: number,
  total: number
): RoomStyle {
  const baseZ = total - index;
  const raw = clamp(depth, 0, 1);
  const d = smootherstep(raw);
  const entering = raw > 0.02 && active < total - 1;

  if (index < active) {
    return {
      clipPath: FULL_CLIP,
      transform: "scale(1)",
      opacity: 0,
      zIndex: baseZ,
      pointerEvents: "none",
    };
  }

  if (index === active) {
    if (entering) {
      return {
        clipPath: FULL_CLIP,
        transform: `scale(${1 + d * 1.85})`,
        opacity: 1 - d * 0.35,
        zIndex: baseZ + 5,
        pointerEvents: d < 0.08 ? "auto" : "none",
      };
    }
    return {
      clipPath: FULL_CLIP,
      transform: "scale(1)",
      opacity: 1,
      zIndex: total + 20,
      pointerEvents: "auto",
    };
  }

  if (index === active + 1) {
    if (!entering) {
      return {
        clipPath: "circle(0% at 50% 48%)",
        transform: "scale(1)",
        opacity: 0,
        zIndex: baseZ,
        pointerEvents: "none",
      };
    }
    const radius = 4 + d * 146;
    return {
      clipPath: `circle(${radius}% at 50% 48%)`,
      transform: "scale(1)",
      opacity: 1,
      zIndex: total + 40,
      pointerEvents: d > 0.9 ? "auto" : "none",
    };
  }

  return {
    clipPath: FULL_CLIP,
    transform: "scale(1)",
    opacity: 0,
    zIndex: baseZ,
    pointerEvents: "none",
  };
}

type SectionBudget = {
  start: number;
  readScroll: number;
  enterScroll: number;
  contentHeight: number;
};

type ScrollTarget = {
  active: number;
  depth: number;
  offset: number;
};

type ScrollFadeSectionsProps = {
  children: React.ReactNode;
  id?: string;
};

export default function ScrollFadeSections({
  children,
  id,
}: ScrollFadeSectionsProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slides = React.Children.toArray(children);
  const count = slides.length;

  const [isDesktop, setIsDesktop] = useState(false);
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: count }, () => 0)
  );
  const [active, setActive] = useState(0);
  const [depth, setDepth] = useState(0);
  const [contentOffset, setContentOffset] = useState(0);
  const [vh, setVh] = useState(800);
  const [budgets, setBudgets] = useState<SectionBudget[]>([]);
  const [totalHeight, setTotalHeight] = useState(800);

  const budgetsRef = useRef(budgets);
  const targetRef = useRef<ScrollTarget>({ active: 0, depth: 0, offset: 0 });
  const currentRef = useRef<ScrollTarget>({ active: 0, depth: 0, offset: 0 });
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  budgetsRef.current = budgets;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const measure = useCallback(() => {
    const next = measureRefs.current.map((node) => {
      if (!node) return window.innerHeight;
      return Math.max(node.scrollHeight, node.offsetHeight);
    });
    setHeights(next);
    setVh(window.innerHeight || 800);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    measure();
    const observers: ResizeObserver[] = [];
    measureRefs.current.forEach((node) => {
      if (!node) return;
      const ro = new ResizeObserver(() => measure());
      ro.observe(node);
      observers.push(ro);
    });
    window.addEventListener("resize", measure);
    return () => {
      observers.forEach((ro) => ro.disconnect());
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop, count, measure]);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    const view = vh || 1;
    const dwell = DWELL_VH * view;
    const enter = ENTER_VH * view;
    let cursor = 0;
    const next: SectionBudget[] = [];

    for (let i = 0; i < count; i++) {
      const contentHeight = heights[i] > 0 ? heights[i] : view;
      const overflow = Math.max(0, contentHeight - view);
      const sectionDwell =
        i === count - 1 ? Math.max(dwell, LAST_DWELL_VH * view) : dwell;
      const readScroll = overflow + sectionDwell;
      const enterDist = i === count - 1 ? 0 : enter;
      next.push({
        start: cursor,
        readScroll,
        enterScroll: enterDist,
        contentHeight,
      });
      cursor += readScroll + enterDist;
    }

    // Extra pin distance so the final CTA stays on screen
    cursor += LAST_HOLD_VH * view;

    setBudgets(next);
    setTotalHeight(Math.max(view, cursor));
  }, [heights, vh, count, isDesktop]);

  const readScrollTarget = useCallback((): ScrollTarget => {
    const el = containerRef.current;
    const list = budgetsRef.current;
    if (!el || list.length === 0) {
      return { active: 0, depth: 0, offset: 0 };
    }

    const view = window.innerHeight || 1;
    let remaining = Math.max(0, -el.getBoundingClientRect().top);
    let nextActive = count - 1;
    let nextDepth = 0;
    let nextOffset = 0;

    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      const maxOffset = Math.max(0, b.contentHeight - view);

      if (remaining <= b.readScroll) {
        nextActive = i;
        nextOffset = Math.min(remaining, maxOffset);
        nextDepth = 0;
        break;
      }

      remaining -= b.readScroll;

      if (remaining <= b.enterScroll) {
        nextActive = i;
        nextOffset = maxOffset;
        nextDepth =
          b.enterScroll > 0 ? clamp(remaining / b.enterScroll, 0, 1) : 0;
        break;
      }

      remaining -= b.enterScroll;
      nextActive = i;
      nextOffset = maxOffset;
      nextDepth = i === count - 1 ? 0 : 1;
    }

    return { active: nextActive, depth: nextDepth, offset: nextOffset };
  }, [count]);

  useEffect(() => {
    if (!isDesktop) return;

    const syncTarget = () => {
      targetRef.current = readScrollTarget();
    };

    const tick = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      const target = targetRef.current;
      const cur = currentRef.current;
      const alpha = 1 - Math.exp(-SMOOTH * dt);

      if (cur.active !== target.active) {
        cur.active = target.active;
        cur.depth = target.depth;
        cur.offset = target.offset;
      } else {
        cur.depth += (target.depth - cur.depth) * alpha;
        cur.offset += (target.offset - cur.offset) * alpha;

        if (Math.abs(target.depth - cur.depth) < 0.001) cur.depth = target.depth;
        if (Math.abs(target.offset - cur.offset) < 0.25) cur.offset = target.offset;
        // Hard-settle at rest so the banner doesn’t micro-flicker
        if (target.depth < 0.015) cur.depth = 0;
      }

      setActive((prev) => (prev === cur.active ? prev : cur.active));
      setDepth((prev) => (Math.abs(prev - cur.depth) < 0.0005 ? prev : cur.depth));
      setContentOffset((prev) =>
        Math.abs(prev - cur.offset) < 0.2 ? prev : cur.offset
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    syncTarget();
    currentRef.current = { ...targetRef.current };
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => syncTarget();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncTarget);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncTarget);
    };
  }, [isDesktop, readScrollTarget, budgets]);

  if (!isDesktop) {
    return (
      <div
        id={id}
        className="scroll-fade-stack scroll-fade-stack--flow relative bg-bg"
      >
        {slides.map((child, i) => (
          <div key={i} className="relative w-full overflow-hidden">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      id={id}
      ref={containerRef}
      className="scroll-fade-stack relative bg-bg"
      style={{ height: totalHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none bg-bg">
        {slides.map((child, i) => {
          const style = getRoomStyle(i, active, depth, count);
          const contentHeight = heights[i] > 0 ? heights[i] : vh;
          const topPad =
            contentHeight < vh ? Math.max(0, (vh - contentHeight) / 2) : 0;
          const y = i === active ? topPad - contentOffset : topPad;

          return (
            <div
              key={i}
              className="absolute inset-0 overflow-hidden will-change-[clip-path,transform] bg-bg"
              style={{
                clipPath: style.clipPath,
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                pointerEvents: "none",
                transformOrigin: "center center",
                backgroundColor: "#050505",
                // Keep in GPU layer without visibility toggles (those caused banner flicker)
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{ pointerEvents: style.pointerEvents }}
              >
                <div
                  ref={(node) => {
                    measureRefs.current[i] = node;
                  }}
                  className="w-full will-change-transform"
                  style={{
                    transform: `translate3d(0, ${y}px, 0)`,
                  }}
                >
                  {child}
                </div>
              </div>
            </div>
          );
        })}

        {/* Soft inward depth during iris transitions */}
        {depth > 0.01 && (
          (() => {
            const d = smootherstep(clamp(depth, 0, 1));
            const startPulse = Math.sin(Math.PI * Math.min(1, d * 1.35));
            const insetSpread = 24 + d * 72;
            const insetBlur = 40 + d * 64;
            return (
              <div
                className="pointer-events-none absolute inset-0 z-[92]"
                style={{
                  opacity: startPulse * 0.75,
                  boxShadow: [
                    `inset 0 0 ${insetBlur}px ${insetSpread}px rgba(0,0,0,0.72)`,
                    `inset 0 0 ${insetBlur * 0.55}px ${insetSpread * 0.35}px rgba(0,0,0,0.45)`,
                    `inset 0 0 40px 8px rgba(59,130,246,${0.06 + d * 0.08})`,
                  ].join(", "),
                }}
              />
            );
          })()
        )}

        {/* Circular iris ring — same geometry as the reveal clip */}
        {depth > 0.02 && active < count - 1 && (
          (() => {
            const d = smootherstep(clamp(depth, 0, 1));
            const radiusPct = 4 + d * 146;
            const ringFade = Math.min(1, (1 - d) * 1.55 + 0.2);
            const r = `${radiusPct}%`;
            return (
              <div
                className="pointer-events-none absolute inset-0 z-[95]"
                style={{
                  opacity: ringFade,
                  clipPath: `circle(${radiusPct}% at 50% 48%)`,
                }}
              >
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  aria-hidden
                >
                  <circle
                    cx="50%"
                    cy="48%"
                    r={r}
                    fill="none"
                    stroke="rgba(0,0,0,0.85)"
                    strokeWidth={40 + d * 44}
                    style={{ filter: "blur(14px)" }}
                  />
                  <circle
                    cx="50%"
                    cy="48%"
                    r={r}
                    fill="none"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth={18 + d * 22}
                    style={{ filter: "blur(6px)" }}
                  />
                  <circle
                    cx="50%"
                    cy="48%"
                    r={r}
                    fill="none"
                    stroke="rgba(96,165,250,0.9)"
                    strokeWidth={3}
                  />
                  <circle
                    cx="50%"
                    cy="48%"
                    r={r}
                    fill="none"
                    stroke="rgba(186,230,253,0.35)"
                    strokeWidth={1.25}
                  />
                </svg>
              </div>
            );
          })()
        )}

        {/* Soft blue wash while rooms exchange */}
        {depth > 0.01 && (
          <div
            className="pointer-events-none absolute inset-0 z-[90]"
            style={{
              opacity:
                Math.sin(Math.PI * smootherstep(clamp(depth, 0, 1))) * 0.5,
              background: [
                `radial-gradient(circle at 50% 48%, rgba(56,189,248,${0.28 + depth * 0.12}) 0%, transparent 40%)`,
                `radial-gradient(ellipse 90% 70% at 50% 50%, rgba(59,130,246,${0.14 + depth * 0.18}) 0%, rgba(37,99,235,0.08) 45%, rgba(5,5,5,0.4) 75%)`,
              ].join(","),
              mixBlendMode: "screen",
            }}
          />
        )}
      </div>

      {/* Section dots — hide on hero, show once inside */}
      {count > 1 && active > 0 && (
        <div className="pointer-events-auto fixed right-4 top-1/2 z-[200] hidden -translate-y-1/2 flex-col gap-2 md:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to section ${i + 1}`}
              onClick={() => {
                const el = containerRef.current;
                const budget = budgets[i];
                if (!el || !budget) return;
                window.scrollTo({
                  top: el.offsetTop + budget.start,
                  behavior: "smooth",
                });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-accent"
                  : "w-2 bg-text-dimmer/40 hover:bg-text-dimmer"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
