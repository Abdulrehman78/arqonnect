"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { RoomActiveContext } from "@/components/ui/Motion";

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
  /**
   * `flow` — normal document scroll (trackpad-friendly, default).
   * `rooms` — sticky 3D room transitions (mouse-wheel ok, trackpad often stutters).
   */
  mode?: "flow" | "rooms";
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function sameShown(a: boolean[], b: boolean[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const DWELL_VH = 0.1;
const ENTER_VH = 0.42;
const LAST_HOLD_VH = 0.5;
const LAST_DWELL_VH = 0.7;

function FlowStack({
  id,
  slides,
}: {
  id?: string;
  slides: React.ReactNode[];
}): React.ReactElement {
  return (
    <div
      id={id}
      className="scroll-fade-stack scroll-fade-stack--flow relative bg-bg"
    >
      {slides.map((child, i) => (
          <div
            key={i}
            className="relative w-full"
          >
          <RoomActiveContext.Provider value={true}>{child}</RoomActiveContext.Provider>
        </div>
      ))}
    </div>
  );
}

export default function ScrollFadeSections({
  children,
  id,
  mode = "flow",
}: ScrollFadeSectionsProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heightsRef = useRef<number[]>([]);
  const vhRef = useRef(800);
  const lastFrameRef = useRef<ScrollTarget>({ active: -1, depth: -1, offset: -1 });
  const lastShownRef = useRef<boolean[]>([]);

  const slides = React.Children.toArray(children);
  const count = slides.length;

  const [roomsEnabled, setRoomsEnabled] = useState(false);
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: count }, () => 0)
  );
  const [active, setActive] = useState(0);
  const [roomShown, setRoomShown] = useState<boolean[]>(() =>
    Array.from({ length: count }, (_, i) => i === 0)
  );
  const [vh, setVh] = useState(800);
  const [budgets, setBudgets] = useState<SectionBudget[]>([]);
  const [totalHeight, setTotalHeight] = useState(800);

  const budgetsRef = useRef(budgets);
  budgetsRef.current = budgets;
  heightsRef.current = heights;
  vhRef.current = vh;

  useEffect(() => {
    if (mode !== "rooms") {
      setRoomsEnabled(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setRoomsEnabled(mq.matches && !reduce.matches);
    apply();
    mq.addEventListener("change", apply);
    reduce.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      reduce.removeEventListener("change", apply);
    };
  }, [mode]);

  const measure = useCallback(() => {
    const next = measureRefs.current.map((node) => {
      if (!node) return window.innerHeight;
      return Math.max(node.scrollHeight, node.offsetHeight);
    });
    heightsRef.current = next;
    setHeights(next);
    const nextVh = window.innerHeight || 800;
    vhRef.current = nextVh;
    setVh(nextVh);
  }, []);

  useLayoutEffect(() => {
    if (!roomsEnabled) return;
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
  }, [roomsEnabled, count, measure]);

  useLayoutEffect(() => {
    if (!roomsEnabled) return;
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

    cursor += LAST_HOLD_VH * view;
    setBudgets(next);
    setTotalHeight(Math.max(view, cursor));
  }, [heights, vh, count, roomsEnabled]);

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

  const computeShown = useCallback(
    (target: ScrollTarget): boolean[] =>
      Array.from({ length: count }, (_, i) =>
        i === target.active || (i === target.active + 1 && target.depth > 0.01)
      ),
    [count]
  );

  const applyFrame = useCallback(
    (target: ScrollTarget) => {
      const prev = lastFrameRef.current;
      const depthSame = Math.abs(target.depth - prev.depth) < 0.002;
      const offsetSame = Math.abs(target.offset - prev.offset) < 0.5;
      if (target.active === prev.active && depthSame && offsetSame) return;
      lastFrameRef.current = target;

      const stage = stageRef.current;
      if (stage) {
        stage.style.setProperty("--depth", String(target.depth));
        stage.dataset.scrolling =
          target.depth > 0.02 && target.depth < 0.98 ? "true" : "false";
      }

      if (glowRef.current) {
        glowRef.current.style.opacity =
          target.depth > 0.02 && target.active < count - 1
            ? String(Math.sin(Math.PI * target.depth) * 0.12)
            : "0";
      }

      const view = vhRef.current;
      for (let i = 0; i < count; i++) {
        const shell = shellRefs.current[i];
        if (!shell) continue;

        let state: "current" | "next" | "hidden" = "hidden";
        if (i === target.active) state = "current";
        else if (i === target.active + 1 && target.depth > 0.001) state = "next";

        shell.dataset.roomState = state;
        shell.dataset.heroExit =
          i === 0 && target.active === 0 && target.depth > 0.01 ? "true" : "false";
        shell.dataset.roomReady = target.depth > 0.88 ? "true" : "false";
        shell.dataset.roomShown = state !== "hidden" ? "true" : "false";
        shell.dataset.roomSettled =
          i === target.active && target.depth < 0.08 ? "true" : "false";

        const inner = innerRefs.current[i];
        if (inner && i === target.active) {
          const contentHeight = heightsRef.current[i] || view;
          const topPad =
            contentHeight < view ? Math.max(0, (view - contentHeight) / 2) : 0;
          inner.style.transform = `translate3d(0, ${topPad - target.offset}px, 0)`;
        }
      }
    },
    [count]
  );

  useEffect(() => {
    if (!roomsEnabled) return;

    let raf = 0;
    let lastActive = -1;
    let scrollIdle: ReturnType<typeof setTimeout> | undefined;

    const sync = () => {
      raf = 0;
      const target = readScrollTarget();
      applyFrame(target);

      if (target.active !== lastActive) {
        lastActive = target.active;
        setActive(target.active);
      }

      const nextShown = computeShown(target);
      if (!sameShown(nextShown, lastShownRef.current)) {
        lastShownRef.current = nextShown;
        setRoomShown(nextShown);
      }
    };

    const onScroll = () => {
      if (scrollIdle) clearTimeout(scrollIdle);
      scrollIdle = setTimeout(() => {
        stageRef.current?.setAttribute("data-scrolling", "false");
      }, 180);
      if (!raf) raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      if (scrollIdle) clearTimeout(scrollIdle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [roomsEnabled, readScrollTarget, budgets, applyFrame, computeShown]);

  if (!roomsEnabled) {
    return <FlowStack id={id} slides={slides} />;
  }

  return (
    <div
      id={id}
      ref={containerRef}
      className="scroll-fade-stack relative bg-bg"
      style={{ height: totalHeight }}
    >
      <div
        ref={stageRef}
        className="scroll-fade-stage sticky top-0 h-screen w-full overflow-hidden pointer-events-none bg-bg"
      >
        {slides.map((child, i) => (
          <div
            key={i}
            ref={(node) => {
              shellRefs.current[i] = node;
            }}
            className="scroll-fade-room"
            data-room-state={i === 0 ? "current" : "hidden"}
            data-room-shown={i === 0 ? "true" : "false"}
            data-room-settled={i === 0 ? "true" : "false"}
          >
            <div className="scroll-fade-room-inner relative h-full w-full overflow-hidden">
              <div
                ref={(node) => {
                  innerRefs.current[i] = node;
                  measureRefs.current[i] = node;
                }}
                className="w-full"
              >
                <RoomActiveContext.Provider value={roomShown[i] ?? false}>
                  {child}
                </RoomActiveContext.Provider>
              </div>
            </div>
          </div>
        ))}

        <div
          ref={glowRef}
          className="scroll-fade-room-glow pointer-events-none absolute inset-0 z-[90]"
          style={{
            background:
              "radial-gradient(ellipse 48% 42% at 50% 46%, rgba(234,164,107,0.1), transparent 70%)",
          }}
        />
      </div>

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
