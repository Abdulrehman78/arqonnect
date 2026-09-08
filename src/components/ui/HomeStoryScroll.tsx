"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { HOME_STORY_META, type HomePanelMeta } from "@/lib/homePanels";

type Chapter = {
  meta: HomePanelMeta;
  node: ReactNode;
};

type Props = {
  chapters: Chapter[];
  /** Accessible name for the story region */
  label?: string;
};

function clamp(n: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, n));
}

type TitleState = {
  eyebrow: string;
  title: string;
  sub: string;
};

/**
 * Vertical chapters after THE WORK filmstrip.
 * Sticky left title morphs between chapters; each chapter keeps its own layout.
 */
export default function HomeStoryScroll({
  chapters,
  label = "After the work",
}: Props): ReactElement {
  const rootRef = useRef<HTMLElement>(null);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const outRef = useRef<HTMLDivElement>(null);
  const inRef = useRef<HTMLDivElement>(null);
  const pairRef = useRef({ a: 0, b: 0 });
  const rafRef = useRef(0);
  const [desktop, setDesktop] = useState(false);
  const [outTitle, setOutTitle] = useState<TitleState>(() =>
    titleFrom(chapters[0]?.meta)
  );
  const [inTitle, setInTitle] = useState<TitleState>(() =>
    titleFrom(chapters[Math.min(1, chapters.length - 1)]?.meta)
  );

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
    if (!desktop) return;

    const root = rootRef.current;
    const stage = root?.querySelector(".home-story-title-stage") as HTMLElement | null;
    if (root && stage) {
      const r = root.getBoundingClientRect();
      const visible = r.bottom > 120 && r.top < window.innerHeight - 80;
      stage.style.opacity = visible ? "1" : "0";
      stage.style.pointerEvents = "none";
    }

    const viewH = window.innerHeight || 1;
    let weightSum = 0;
    let floatIndex = 0;
    let bestI = 0;
    let bestScore = -1;

    chapterRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height * 0.35;
      const dist = (mid - viewH * 0.42) / viewH;
      const focus = clamp(1 - Math.abs(dist) * 1.35);
      const enter = clamp((focus - 0.05) / 0.95);

      el.style.setProperty("--focus", focus.toFixed(4));
      el.style.setProperty("--enter", enter.toFixed(4));
      el.dataset.active = focus > 0.45 ? "1" : "0";

      const w = focus * focus;
      floatIndex += i * w;
      weightSum += w;
      if (focus > bestScore) {
        bestScore = focus;
        bestI = i;
      }
    });

    if (weightSum > 0.001) floatIndex /= weightSum;
    else floatIndex = bestI;

    const i0 = Math.min(chapters.length - 1, Math.max(0, Math.floor(floatIndex)));
    const i1 = Math.min(chapters.length - 1, i0 + 1);
    const morphT = i0 === i1 ? 1 : clamp(floatIndex - i0);
    // Sharper crossfade — avoid two full titles stacked mid-scroll
    const outT = i0 === i1 ? 0 : clamp(1 - morphT / 0.4);
    const inT = i0 === i1 ? 1 : clamp((morphT - 0.2) / 0.45);

    if (outRef.current) {
      outRef.current.style.setProperty("--t", outT.toFixed(4));
      outRef.current.style.visibility = outT < 0.03 ? "hidden" : "visible";
    }
    if (inRef.current) {
      inRef.current.style.setProperty("--t", inT.toFixed(4));
      inRef.current.style.visibility = inT < 0.03 ? "hidden" : "visible";
    }

    if (pairRef.current.a !== i0 || pairRef.current.b !== i1) {
      pairRef.current = { a: i0, b: i1 };
      setOutTitle(titleFrom(chapters[i0]?.meta ?? HOME_STORY_META[0]));
      setInTitle(titleFrom(chapters[i1]?.meta ?? HOME_STORY_META[0]));
    }
  }, [desktop, chapters]);

  useEffect(() => {
    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(sync);
    };
    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sync]);

  return (
    <section ref={rootRef} className="home-story" aria-label={label}>
      {desktop ? (
        <div className="home-story-title-stage" aria-live="polite">
          <div
            ref={outRef}
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
            ref={inRef}
            className="hscroll-title hscroll-title--in"
            style={{ "--t": 0 } as CSSProperties}
          >
            <p className="hscroll-title-eye">{inTitle.eyebrow}</p>
            <p className="hscroll-title-main">{inTitle.title}</p>
            {inTitle.sub ? (
              <p className="hscroll-title-sub">{inTitle.sub}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {chapters.map((chapter, i) => (
        <div
          key={chapter.meta.id}
          ref={(node) => {
            chapterRefs.current[i] = node;
          }}
          className="home-story-chapter"
          data-chapter={chapter.meta.id}
          style={{ "--focus": i === 0 ? 1 : 0, "--enter": i === 0 ? 1 : 0 } as CSSProperties}
        >
          {chapter.node}
        </div>
      ))}
    </section>
  );
}

function titleFrom(meta?: HomePanelMeta): TitleState {
  return {
    eyebrow: meta?.eyebrow ?? "",
    title: meta?.title ?? "",
    sub: meta?.sub ?? "",
  };
}
