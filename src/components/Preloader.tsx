"use client";

import Image from "next/image";
import { HERO_BANNER } from "@/lib/brand";
import { useEffect, useState } from "react";

const MIN_MS = 800;
const EXIT_MS = 700;
const SAFETY_MS = 4000;

function MapLayer(): React.ReactElement {
  return (
    <>
      <div className="preloader-map-zoom">
        <Image
          src={HERO_BANNER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="preloader-map-veil" />
    </>
  );
}

export default function Preloader(): React.ReactElement | null {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    let finished = false;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let safetyTimer: ReturnType<typeof setTimeout> | undefined;
    let progressTimer: ReturnType<typeof setInterval> | undefined;
    const started = Date.now();

    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 92) return p;
        return Math.min(92, p + 6 + Math.random() * 10);
      });
    }, 80);

    const reveal = () => {
      if (finished) return;
      finished = true;
      clearInterval(progressTimer);
      setProgress(100);
      const wait = Math.max(80, MIN_MS - (Date.now() - started));
      fadeTimer = setTimeout(() => {
        setExiting(true);
        hideTimer = setTimeout(() => {
          setMounted(false);
          document.body.style.overflow = "";
          document.documentElement.classList.remove("preloader-active");
        }, EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      safetyTimer = setTimeout(reveal, SAFETY_MS);
    }

    return () => {
      window.removeEventListener("load", reveal);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(safetyTimer);
      clearInterval(progressTimer);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`preloader-root fixed inset-0 z-[9999] ${exiting ? "preloader-root--exit" : ""}`}
      aria-hidden={exiting}
      role="status"
      aria-label="Loading ArQonnect"
    >
      <div className="preloader-panel preloader-panel--tl">
        <MapLayer />
      </div>
      <div className="preloader-panel preloader-panel--br">
        <MapLayer />
      </div>

      <div
        className={`preloader-core relative z-10 flex flex-col items-center ${
          exiting ? "preloader-core--exit" : ""
        }`}
      >
        <p className="preloader-brand">ArQonnect</p>
        <div className="preloader-track mt-8">
          <div
            className="preloader-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
