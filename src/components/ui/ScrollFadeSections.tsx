"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { RoomActiveContext } from "@/components/ui/Motion";

type RoomStyle = {
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
  borderRadius: string;
  boxShadow: string;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const DWELL_VH = 0.1;
/** Cinematic fly — long enough to read, short enough not to hang mid-card */
const ENTER_VH = 0.62;
/** Pin after the last CTA is fully shown, before the footer takes over */
const LAST_HOLD_VH = 0.5;
/** Settled time on the last CTA so it can be read and clicked */
const LAST_DWELL_VH = 0.7;
/** Critically damped camera. Lower = heavier / smoother. */
const SPRING_OMEGA = 8.2;
const SPRING_ZETA = 1.08;

/**
 * ALCHE-style 3D coverflow: current room sits behind; the next room flies
 * in as a rounded card from depth, then fills the viewport.
 */
function getRoomStyle(
  index: number,
  active: number,
  depth: number,
  total: number
): RoomStyle {
  const baseZ = total - index;
  const raw = clamp(depth, 0, 1);
  const d = raw * raw * (3 - 2 * raw);
  const entering = raw > 0.01 && active < total - 1;
  const rest = {
    transform: "translate3d(0,0,0)",
    borderRadius: "0px",
    boxShadow: "none",
  };

  if (index < active) {
    return {
      ...rest,
      opacity: 0,
      zIndex: baseZ,
      pointerEvents: "none",
    };
  }

  if (index === active) {
    if (entering) {
      const fromBanner = index === 0;
      const hide = clamp(raw / (fromBanner ? 0.1 : 0.32), 0, 1);
      return {
        transform: fromBanner
          ? `translate3d(0, 0, ${-24 * hide}px)`
          : `translate3d(0, 0, ${-48 * d}px) scale(${1 - d * 0.04})`,
        opacity: 1 - hide,
        zIndex: baseZ + 5,
        pointerEvents: hide < 0.08 ? "auto" : "none",
        borderRadius: "0px",
        boxShadow: "none",
      };
    }
    return {
      ...rest,
      opacity: 1,
      zIndex: total + 20,
      pointerEvents: "auto",
    };
  }

  if (index === active + 1) {
    if (!entering) {
      return {
        transform: "translate3d(0, 0, -360px) scale(0.48) rotateX(7deg)",
        opacity: 0,
        zIndex: baseZ,
        pointerEvents: "none",
        borderRadius: "24px",
        boxShadow: "none",
      };
    }
    const scale = 0.48 + d * 0.52;
    const z = -360 * (1 - d);
    const tilt = (1 - d) * 7;
    const radius = (1 - d) * 24;
    const gold = (1 - d) * 0.48;
    const far = 1 - d;
    return {
      transform: `translate3d(0, 0, ${z}px) scale(${scale}) rotateX(${tilt}deg)`,
      opacity: clamp(raw / 0.1, 0, 1),
      zIndex: total + 40,
      pointerEvents: d > 0.88 ? "auto" : "none",
      borderRadius: `${radius}px`,
      boxShadow: [
        `0 0 0 1px rgba(234,164,107,${gold})`,
        `0 28px 80px rgba(0,0,0,${0.48 * far})`,
        `0 0 44px rgba(234,164,107,${0.16 * far})`,
      ].join(", "),
    };
  }

  return {
    ...rest,
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
  const velRef = useRef(0);
  const offsetVelRef = useRef(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  budgetsRef.current = budgets;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setIsDesktop(mq.matches && !reduce.matches);
    apply();
    mq.addEventListener("change", apply);
    reduce.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      reduce.removeEventListener("change", apply);
    };
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
      const targetP = target.active + target.depth;
      let curP = cur.active + cur.depth;
      const lastIdx = Math.max(0, count - 1);
      const arrivingAtLast =
        target.active === lastIdx && target.depth === 0 && curP < lastIdx;
      const skip = arrivingAtLast || Math.abs(targetP - curP) > 1.25;

      if (skip) {
        curP = targetP;
        velRef.current = 0;
        offsetVelRef.current = 0;
        cur.offset = target.offset;
      } else {
        const acc =
          SPRING_OMEGA * SPRING_OMEGA * (targetP - curP) -
          2 * SPRING_ZETA * SPRING_OMEGA * velRef.current;
        velRef.current += acc * dt;
        curP += velRef.current * dt;

        const oAcc =
          SPRING_OMEGA * SPRING_OMEGA * (target.offset - cur.offset) -
          2 * SPRING_ZETA * SPRING_OMEGA * offsetVelRef.current;
        offsetVelRef.current += oAcc * dt;
        cur.offset += offsetVelRef.current * dt;
      }

      if (Math.abs(targetP - curP) < 0.0005 && Math.abs(velRef.current) < 0.01) {
        curP = targetP;
        velRef.current = 0;
      }
      if (Math.abs(target.offset - cur.offset) < 0.2 && Math.abs(offsetVelRef.current) < 0.4) {
        cur.offset = target.offset;
        offsetVelRef.current = 0;
      }

      const maxIdx = Math.max(0, count - 1);
      if (curP < 0 || curP > maxIdx) {
        curP = clamp(curP, 0, maxIdx);
        velRef.current = 0;
      }
      const clampedP = curP;
      const nextActive = Math.min(maxIdx, Math.floor(clampedP + 1e-6));
      cur.active = nextActive;
      cur.depth = clamp(clampedP - nextActive, 0, 1);

      setActive((prev) => (prev === cur.active ? prev : cur.active));
      setDepth((prev) => (Math.abs(prev - cur.depth) < 0.0004 ? prev : cur.depth));
      setContentOffset((prev) =>
        Math.abs(prev - cur.offset) < 0.15 ? prev : cur.offset
      );

      const settled =
        curP === targetP &&
        cur.offset === target.offset &&
        velRef.current === 0 &&
        offsetVelRef.current === 0;
      if (settled) {
        rafRef.current = 0;
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const kick = () => {
      syncTarget();
      if (!rafRef.current) {
        lastTsRef.current = 0;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    syncTarget();
    currentRef.current = { ...targetRef.current };
    velRef.current = 0;
    offsetVelRef.current = 0;
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => kick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", kick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", kick);
    };
  }, [isDesktop, readScrollTarget, budgets]);

  if (!isDesktop) {
    return (
      <div
        id={id}
        className="scroll-fade-stack scroll-fade-stack--flow relative bg-bg"
      >
        {slides.map((child, i) => (
          <div key={i} className="relative w-full overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_100vh]">
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
      <div
        className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none bg-bg"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 42%",
        }}
      >
        {slides.map((child, i) => {
          const style = getRoomStyle(i, active, depth, count);
          const contentHeight = heights[i] > 0 ? heights[i] : vh;
          const topPad =
            contentHeight < vh ? Math.max(0, (vh - contentHeight) / 2) : 0;
          const y = i === active ? topPad - contentOffset : topPad;

          const shown = i === active || (i === active + 1 && depth > 0.01);
          const settled = i === active && depth < 0.08;

          return (
            <div
              key={i}
              className="absolute inset-0 overflow-hidden bg-bg"
              data-room-shown={shown ? "true" : "false"}
              data-room-settled={settled ? "true" : "false"}
              style={{
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                pointerEvents: "none",
                transformOrigin: "50% 50%",
                borderRadius: style.borderRadius,
                boxShadow: style.boxShadow,
                backgroundColor: "#0B0F12",
                backfaceVisibility: "hidden",
                visibility: i === active || i === active + 1 ? "visible" : "hidden",
                willChange: shown ? "transform, opacity" : "auto",
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
                  className="w-full"
                  style={{
                    transform: `translate3d(0, ${y}px, 0)`,
                  }}
                >
                  <RoomActiveContext.Provider value={shown}>
                    {child}
                  </RoomActiveContext.Provider>
                </div>
              </div>
            </div>
          );
        })}

        {depth > 0.02 && active < count - 1 && (
          <div
            className="pointer-events-none absolute inset-0 z-[90]"
            style={{
              opacity: Math.sin(Math.PI * clamp(depth, 0, 1)) * 0.22,
              background:
                "radial-gradient(ellipse 48% 42% at 50% 46%, rgba(234,164,107,0.14), transparent 70%)",
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
