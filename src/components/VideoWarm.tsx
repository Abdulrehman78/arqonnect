"use client";

import { useEffect } from "react";
import { preloadSecondaryVideos } from "@/lib/preloadVideos";

/** Quietly warm banner videos after first paint — no overlay, no progress bar. */
export default function VideoWarm(): null {
  useEffect(() => {
    const idle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback.bind(window)
        : (cb: IdleRequestCallback) => window.setTimeout(cb, 120);

    const id = idle(() => {
      void preloadSecondaryVideos(2500);
    });

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(id as number);
      } else {
        window.clearTimeout(id as number);
      }
    };
  }, []);

  return null;
}
