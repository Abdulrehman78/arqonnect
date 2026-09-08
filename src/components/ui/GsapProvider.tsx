"use client";

import {
  useEffect,
  useLayoutEffect,
  type DependencyList,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
import { subscribeLenis } from "@/lib/lenisStore";

let registered = false;

function ensureGsapPlugins(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Syncs GSAP ScrollTrigger with Lenis inertia scrolling.
 * Mount once in the root layout beside SmoothScroll.
 */
export default function GsapProvider(): null {
  useEffect(() => {
    ensureGsapPlugins();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let unsubScroll: (() => void) | undefined;
    let resizeTimer = 0;

    const bindLenis = (lenis: Lenis | null) => {
      unsubScroll?.();
      unsubScroll = undefined;
      if (!lenis) return;

      const onScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onScroll);
      unsubScroll = () => {
        // Lenis 1.x: off(event, handler)
        try {
          lenis.off("scroll", onScroll);
        } catch {
          /* noop */
        }
      };
      ScrollTrigger.refresh();
    };

    const unsubLenis = subscribeLenis(bindLenis);

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    };
    window.addEventListener("resize", onResize);

    const onReduce = () => {
      if (reduce.matches) ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    reduce.addEventListener("change", onReduce);

    ScrollTrigger.refresh();

    return () => {
      unsubLenis();
      unsubScroll?.();
      window.removeEventListener("resize", onResize);
      reduce.removeEventListener("change", onReduce);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  return null;
}

/**
 * Section-scoped GSAP setup that auto-kills on unmount / dep change.
 */
export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  setup: () => void,
  deps: DependencyList = []
): void {
  useLayoutEffect(() => {
    ensureGsapPlugins();
    const el = scope.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = gsap.context(() => {
      setup();
    }, el);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller controls deps
  }, deps);
}

export { gsap, ScrollTrigger };
