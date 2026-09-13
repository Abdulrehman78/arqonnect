"use client";

import { useEffect } from "react";
import { preloadSecondaryVideos } from "@/lib/preloadVideos";

/** Quietly warm banner videos after first paint — no overlay. */
export default function VideoWarm(): null {
  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const run = () => {
      if (!cancelled) void preloadSecondaryVideos(2500);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(run, 120);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
