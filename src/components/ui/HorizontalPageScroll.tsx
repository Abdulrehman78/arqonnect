"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

type HorizontalPageScrollProps = {
  children: ReactNode;
  /** Viewport-heights of scroll runway per panel (desktop). */
  runwayPerPanel?: number;
};

function clamp(n: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, n));
}

/**
 * Design Ade–style homepage scroll:
 * - Vertical scroll drives a horizontal filmstrip
 * - Each panel is scrubbed (scale / opacity / rise / depth) by how centered it is
 * - Mobile falls back to normal vertical stacking
 */
export default function HorizontalPageScroll({
  children,
  runwayPerPanel = 0.95,
}: HorizontalPageScrollProps): ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);
  const [desktop, setDesktop] = useState(false);

  const panels = Children.toArray(children);
  const count = panels.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setDesktop(mq.matches && !reduce.matches);
    apply();
    mq.addEventListener("change", apply);
    reduce.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      reduce.removeEventListener("change", apply);
    };
  }, []);

  const sync = useCallback(() => {
    rafRef.current = 0;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track || !desktop) return;

    const viewH = window.innerHeight || 1;
    const viewW = sticky.clientWidth || window.innerWidth || 1;
    const scrollable = Math.max(1, section.offsetHeight - viewH);
    const traveled = Math.min(
      scrollable,
      Math.max(0, -section.getBoundingClientRect().top)
    );
    const progress = traveled / scrollable;
    const maxX = Math.max(0, track.scrollWidth - viewW);
    const x = -progress * maxX;
    track.style.transform = `translate3d(${x}px, 0, 0)`;

    const centerX = viewW * 0.5;
    // Soften focus falloff so neighbors stay readable (Design Ade still shows adjacent cards)
    const falloff = viewW * 0.72;

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      const panelCenter = rect.left + rect.width * 0.5;
      const drift = (panelCenter - centerX) / falloff; // -1 … 1-ish
      const focus = clamp(1 - Math.abs(drift));
      const enter = clamp((focus - 0.15) / 0.85);

      panel.style.setProperty("--focus", focus.toFixed(4));
      panel.style.setProperty("--enter", enter.toFixed(4));
      panel.style.setProperty("--drift", drift.toFixed(4));
      panel.dataset.focus = focus > 0.55 ? "1" : "0";
      panel.dataset.index = String(i);
    });
  }, [desktop]);

  useEffect(() => {
    if (!desktop) {
      if (trackRef.current) trackRef.current.style.transform = "";
      panelRefs.current.forEach((panel) => {
        if (!panel) return;
        panel.style.removeProperty("--focus");
        panel.style.removeProperty("--enter");
        panel.style.removeProperty("--drift");
      });
      return;
    }

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const ro = new ResizeObserver(onScroll);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
    };
  }, [desktop, sync, count]);

  if (!desktop) {
    return (
      <div className="hscroll-page hscroll-page--stack" id="home-hscroll">
        {panels.map((child, i) => (
          <div key={i} className="hscroll-panel hscroll-panel--stack">
            {child}
          </div>
        ))}
      </div>
    );
  }

  const heightVh = Math.max(180, count * runwayPerPanel * 100);

  return (
    <section
      ref={sectionRef}
      id="home-hscroll"
      className="hscroll-page"
      style={{ height: `${heightVh}vh` }}
      aria-label="Homepage"
    >
      <div ref={stickyRef} className="hscroll-sticky">
        <div ref={trackRef} className="hscroll-track">
          {panels.map((child, i) => (
            <div
              key={i}
              ref={(node) => {
                panelRefs.current[i] = node;
              }}
              className="hscroll-panel"
              style={
                {
                  "--focus": i === 0 ? 1 : 0,
                  "--enter": i === 0 ? 1 : 0,
                  "--drift": 0,
                } as CSSProperties
              }
            >
              <div className="hscroll-panel-inner">{child}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
