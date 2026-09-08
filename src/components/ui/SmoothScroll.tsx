"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { setLenisInstance } from "@/lib/lenisStore";

/**
 * Design Ade–style inertia scrolling via Lenis.
 * Trackpad/mouse wheel stay native-ish; touch devices keep native scroll
 * (smoothTouch: false) so phones don't feel laggy.
 */
export default function SmoothScroll(): null {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.4,
      syncTouch: false,
      autoRaf: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);
    document.documentElement.classList.add("lenis");

    const onReduceChange = () => {
      if (reduce.matches) {
        lenis.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
        document.documentElement.classList.remove("lenis");
      }
    };
    reduce.addEventListener("change", onReduceChange);

    return () => {
      reduce.removeEventListener("change", onReduceChange);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
