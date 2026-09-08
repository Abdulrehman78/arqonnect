"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { HOME_PANEL_META, type HomePanelMeta } from "@/lib/homePanels";
import { ScrollTrigger } from "@/components/ui/GsapProvider";

export type HomePanel = {
  meta: HomePanelMeta;
  node: ReactNode;
};

type Props = {
  panels: HomePanel[];
  runwayPerPanel?: number;
};

function clamp(n: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, n));
}

type TitleState = {
  eyebrow: string;
  title: string;
  sub: string;
  tone: "dark" | "light";
};

/**
 * Full homepage Design Ade scroll with morphing section titles.
 * Vertical scroll → horizontal filmstrip; title stage crossfades
 * from the previous section heading into the next.
 */
export default function HomeHorizontalScroll({
  panels,
  runwayPerPanel = 0.95,
}: Props): ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);
  const outLayerRef = useRef<HTMLDivElement>(null);
  const inLayerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const pairRef = useRef({ a: 0, b: 0, out: "", in: "" });
  const activeRef = useRef(0);
  const [desktop, setDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const [outTitle, setOutTitle] = useState<TitleState>(() =>
    titleFrom(panels[0]?.meta)
  );
  const [inTitle, setInTitle] = useState<TitleState>(() =>
    titleFrom(panels[Math.min(1, panels.length - 1)]?.meta)
  );

  const count = panels.length;
  const metas = useMemo(() => panels.map((p) => p.meta), [panels]);

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
    track.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`;

    const centerX = viewW * 0.5;
    const falloff = viewW * 0.7;

    let weightSum = 0;
    let floatIndex = 0;
    let bestI = 0;
    let bestFocus = -1;

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      const panelCenter = rect.left + rect.width * 0.5;
      const drift = (panelCenter - centerX) / falloff;
      const focus = clamp(1 - Math.abs(drift));
      const enter = clamp((focus - 0.02) / 0.98);
      const fromLeft = drift < 0 ? 1 : 0;

      panel.style.setProperty("--focus", focus.toFixed(4));
      panel.style.setProperty("--enter", enter.toFixed(4));
      panel.style.setProperty("--drift", drift.toFixed(4));
      panel.style.setProperty("--from-left", String(fromLeft));
      panel.dataset.focus = focus > 0.52 ? "1" : "0";

      const w = focus * focus;
      floatIndex += i * w;
      weightSum += w;

      if (focus > bestFocus) {
        bestFocus = focus;
        bestI = i;
      }
    });

    if (weightSum > 0.001) floatIndex /= weightSum;
    else floatIndex = bestI;

    const i0 = Math.min(count - 1, Math.max(0, Math.floor(floatIndex)));
    const i1 = Math.min(count - 1, i0 + 1);
    const morphT = i0 === i1 ? 1 : clamp(floatIndex - i0);
    const outT = i0 === i1 ? 0 : clamp(1 - morphT / 0.4);
    const inT = i0 === i1 ? 1 : clamp((morphT - 0.2) / 0.45);

    if (outLayerRef.current) {
      outLayerRef.current.style.setProperty("--t", outT.toFixed(4));
      outLayerRef.current.style.visibility = outT < 0.03 ? "hidden" : "visible";
    }
    if (inLayerRef.current) {
      inLayerRef.current.style.setProperty("--t", inT.toFixed(4));
      inLayerRef.current.style.visibility = inT < 0.03 ? "hidden" : "visible";
    }
    if (stageRef.current) {
      const toneMeta = morphT > 0.5 ? metas[i1] : metas[i0];
      stageRef.current.dataset.tone = toneMeta?.tone ?? "dark";
      stageRef.current.style.setProperty("--morph", morphT.toFixed(4));
      stageRef.current.classList.remove("hscroll-title-stage--hidden");
    }

    if (pairRef.current.a !== i0 || pairRef.current.b !== i1) {
      pairRef.current = { a: i0, b: i1, out: "", in: "" };
      setOutTitle(titleFrom(metas[i0]));
      setInTitle(titleFrom(metas[i1]));
    }

    if (bestI !== activeRef.current) {
      activeRef.current = bestI;
      setActive(bestI);
    }
  }, [desktop, metas, count]);

  useEffect(() => {
    if (!desktop) return;

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(() => {
      onScroll();
      ScrollTrigger.refresh();
    });
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
    };
  }, [desktop, sync, count]);

  if (!desktop) {
    const [hero, ...workPanels] = panels;
    return (
      <div className="hscroll-page hscroll-page--stack" id="home-hscroll">
        {hero ? (
          <div className="hscroll-panel hscroll-panel--stack hscroll-panel--stack-hero">
            {hero.node}
          </div>
        ) : null}
        {workPanels.length ? (
          <section className="home-work-mobile" aria-label="The work">
            <div className="home-work-mobile-wash" aria-hidden />
            <div className="home-work-mobile-inner">
              {workPanels.map((panel) => (
                <div
                  key={panel.meta.id}
                  className={`hscroll-panel hscroll-panel--stack home-work-mobile-item home-work-mobile-item--${panel.meta.size ?? "card"}`}
                  data-panel={panel.meta.id}
                >
                  {panel.node}
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    );
  }

  const heightVh = Math.max(240, count * Math.max(runwayPerPanel, 1.15) * 100);

  return (
    <section
      ref={sectionRef}
      id="home-hscroll"
      className="hscroll-page"
      style={{ height: `${heightVh}vh` }}
      aria-label="Homepage"
    >
      <div ref={stickyRef} className="hscroll-sticky">
        <div
          ref={stageRef}
          className="hscroll-title-stage"
          data-tone={outTitle.tone}
          aria-live="polite"
        >
          <div
            ref={outLayerRef}
            className="hscroll-title hscroll-title--out"
            style={{ "--t": 1 } as CSSProperties}
          >
            <p className="hscroll-title-eye">{outTitle.eyebrow}</p>
            <p className="hscroll-title-main">{outTitle.title}</p>
            {outTitle.sub ? (
              <p className="hscroll-title-sub">{outTitle.sub}</p>
            ) : null}
          </div>
          <div
            ref={inLayerRef}
            className="hscroll-title hscroll-title--in"
            style={{ "--t": 0 } as CSSProperties}
            aria-hidden={active === pairRef.current.a}
          >
            <p className="hscroll-title-eye">{inTitle.eyebrow}</p>
            <p className="hscroll-title-main">{inTitle.title}</p>
            {inTitle.sub ? (
              <p className="hscroll-title-sub">{inTitle.sub}</p>
            ) : null}
          </div>
        </div>

        <div ref={trackRef} className="hscroll-track">
          {panels.map((panel, i) => (
            <div
              key={panel.meta.id}
              ref={(node) => {
                panelRefs.current[i] = node;
              }}
              className={`hscroll-panel hscroll-panel--${panel.meta.size ?? "full"}`}
              data-tone={panel.meta.tone ?? "dark"}
              data-panel={panel.meta.id}
              style={
                {
                  "--focus": i === 0 ? 1 : 0,
                  "--enter": i === 0 ? 1 : 0,
                  "--drift": 0,
                } as CSSProperties
              }
            >
              <div className="hscroll-panel-inner">
                <div className="hscroll-anim">{panel.node}</div>
              </div>
            </div>
          ))}
          {/* Lets the last card (CRM) center before the sticky runway ends */}
          <div className="hscroll-track-end" aria-hidden />
        </div>

        <div className="hscroll-dots" aria-hidden>
          {panels.map((panel, i) => (
            <span
              key={panel.meta.id}
              className={`hscroll-dot ${i === active ? "hscroll-dot--on" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function titleFrom(meta?: HomePanelMeta): TitleState {
  return {
    eyebrow: meta?.eyebrow ?? "",
    title: meta?.title ?? "",
    sub: meta?.sub ?? "",
    tone: meta?.tone ?? "dark",
  };
}
