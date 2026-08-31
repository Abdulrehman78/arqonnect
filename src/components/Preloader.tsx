"use client";

import Image from "next/image";
import { LOADER_VIDEO } from "@/lib/brand";
import { preloadVideos } from "@/lib/preloadVideos";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 1100;
const EXIT_MS = 680;
const ASSET_TIMEOUT_MS = 6000;

const STAGES = [
  { until: 34, label: "Connecting" },
  { until: 68, label: "Loading workspace" },
  { until: 99, label: "Syncing agents" },
  { until: 101, label: "Ready" },
];

function stageLabel(pct: number): string {
  return STAGES.find((s) => pct < s.until)?.label ?? "Ready";
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

export default function Preloader(): React.ReactElement | null {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(10);
  const displayRef = useRef(0);
  const rafRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let finished = false;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let safetyTimer: ReturnType<typeof setTimeout> | undefined;
    let bumpTimer: ReturnType<typeof setInterval> | undefined;
    const started = Date.now();

    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});

    // Warm banner clips while the loader is visible.
    void preloadVideos(undefined, ASSET_TIMEOUT_MS);

    const tick = () => {
      const next = displayRef.current + (targetRef.current - displayRef.current) * 0.12;
      displayRef.current = next;
      setProgress(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    bumpTimer = setInterval(() => {
      if (targetRef.current >= 92) return;
      targetRef.current = Math.min(92, targetRef.current + 4 + Math.random() * 3);
    }, 140);

    const reveal = () => {
      if (finished) return;
      finished = true;
      clearInterval(bumpTimer);
      targetRef.current = 100;

      const wait = Math.max(280, MIN_MS - (Date.now() - started));
      fadeTimer = setTimeout(() => {
        videoRef.current?.pause();
        setExiting(true);
        hideTimer = setTimeout(() => {
          setMounted(false);
          document.body.style.overflow = "";
          document.documentElement.classList.remove("preloader-active");
        }, EXIT_MS);
      }, wait);
    };

    const ready = Promise.all([
      waitForWindowLoad(),
      preloadVideos(undefined, ASSET_TIMEOUT_MS),
      new Promise<void>((resolve) => {
        safetyTimer = setTimeout(resolve, ASSET_TIMEOUT_MS + MIN_MS);
      }),
    ]).then(reveal);

    void ready;

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(safetyTimer);
      clearInterval(bumpTimer);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (!mounted) return null;

  const pct = Math.min(100, Math.round(progress));

  return (
    <div
      className={`preloader-root fixed inset-0 z-[9999] ${exiting ? "preloader-root--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ArQonnect, ${pct} percent`}
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
        <span className="section-idle-node" style={{ left: "12%", top: "22%" }} />
        <span className="section-idle-node" style={{ left: "86%", top: "28%", animationDelay: "0.8s" }} />
        <span className="section-idle-node" style={{ left: "18%", top: "74%", animationDelay: "1.4s" }} />
        <span className="section-idle-node" style={{ left: "82%", top: "78%", animationDelay: "2s" }} />
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

        <div
          className="preloader-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <div className="preloader-progress" style={{ width: `${Math.min(100, progress)}%` }} />
        </div>

        <p className="preloader-meta">
          <span className="preloader-stage">
            <span className="ai-live-dot" />
            {stageLabel(pct)}
          </span>
          <span className="preloader-pct">{String(pct).padStart(2, "0")}%</span>
        </p>
      </div>
    </div>
  );
}
