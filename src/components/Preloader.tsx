"use client";

import Image from "next/image";
import { LOADER_VIDEO } from "@/lib/brand";
import { preloadHeroVideo, preloadSecondaryVideos } from "@/lib/preloadVideos";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 420;
const EXIT_MS = 320;
const ASSET_TIMEOUT_MS = 900;

export default function Preloader(): React.ReactElement | null {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let finished = false;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const started = Date.now();

    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});

    void preloadHeroVideo(ASSET_TIMEOUT_MS);

    const reveal = () => {
      if (finished) return;
      finished = true;

      const wait = Math.max(0, MIN_MS - (Date.now() - started));
      fadeTimer = setTimeout(() => {
        videoRef.current?.pause();
        setExiting(true);
        hideTimer = setTimeout(() => {
          setMounted(false);
          document.body.style.overflow = "";
          document.documentElement.classList.remove("preloader-active");
          void preloadSecondaryVideos(2500);
        }, EXIT_MS);
      }, wait);
    };

    void preloadHeroVideo(ASSET_TIMEOUT_MS).finally(reveal);

    // Absolute ceiling so a slow network never holds the page long
    const safety = window.setTimeout(reveal, MIN_MS + ASSET_TIMEOUT_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(safety);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`preloader-root fixed inset-0 z-[9999] ${exiting ? "preloader-root--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading ArQonnect"
    >
      <div className="preloader-video" aria-hidden>
        <video
          ref={videoRef}
          src={LOADER_VIDEO}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
        />
      </div>
      <div className="preloader-tint" aria-hidden />
      <div className="preloader-veil" aria-hidden />
      <div className="preloader-theme" aria-hidden>
        <span className="section-idle-orb section-idle-orb--a" />
        <span className="section-idle-orb section-idle-orb--b" />
        <span className="section-idle-scan" />
      </div>
      <div className="preloader-glow" aria-hidden />

      <div className={`preloader-core ${exiting ? "preloader-core--exit" : ""}`}>
        <div className="preloader-mark" aria-hidden>
          <span className="preloader-ring" />
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="relative z-[1] h-11 w-11"
            priority
          />
        </div>

        <p className="preloader-brand">ArQonnect</p>
        <span className="preloader-rule" aria-hidden />
        <p className="preloader-meta">
          <span className="preloader-stage">
            <span className="ai-live-dot" />
            Loading
          </span>
        </p>
      </div>
    </div>
  );
}
