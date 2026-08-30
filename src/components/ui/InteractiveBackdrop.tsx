"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

export type BannerTheme =
  | "home"
  | "services"
  | "crm"
  | "cases"
  | "pricing"
  | "enterprise"
  | "resources"
  | "contact";

type ThemeConfig = {
  videoSrc?: string;
  videoOpacity: number;
  spotA: string;
  spotB: string;
  orbA: string;
  orbB: string;
  orbAPos: string;
  orbBPos: string;
  wash: string;
  pattern: "grid" | "dots" | "diagonal" | "scan" | "rings" | "none";
  patternColor: string;
  base: string;
};

const themes: Record<BannerTheme, ThemeConfig> = {
  home: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.2)",
    spotB: "rgba(0,0,0,0.12)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "-left-24 top-[12%]",
    orbBPos: "-right-16 bottom-[8%]",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "grid",
    patternColor: "rgba(234,164,107,0.35)",
    base: "bg-bg-alt",
  },
  services: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.18)",
    spotB: "rgba(0,0,0,0.1)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "left-[20%] -top-24",
    orbBPos: "right-[10%] bottom-0",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "rings",
    patternColor: "rgba(234,164,107,0.32)",
    base: "bg-bg-alt",
  },
  crm: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.2)",
    spotB: "rgba(0,0,0,0.1)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "-left-32 top-[30%]",
    orbBPos: "right-0 top-0",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "scan",
    patternColor: "rgba(234,164,107,0.4)",
    base: "bg-bg-alt",
  },
  cases: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.18)",
    spotB: "rgba(0,0,0,0.1)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "left-1/2 top-0 -translate-x-1/2",
    orbBPos: "-right-20 bottom-[20%]",
    wash: "from-black/75 via-[#0B0F12]/82 to-black/90",
    pattern: "dots",
    patternColor: "rgba(234,164,107,0.45)",
    base: "bg-bg-alt",
  },
  pricing: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.16)",
    spotB: "rgba(0,0,0,0.1)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "-right-24 top-[20%]",
    orbBPos: "-left-16 bottom-[10%]",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "diagonal",
    patternColor: "rgba(234,164,107,0.22)",
    base: "bg-bg-alt",
  },
  enterprise: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.16)",
    spotB: "rgba(0,0,0,0.08)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "left-0 bottom-0",
    orbBPos: "right-[15%] top-[10%]",
    wash: "from-black/75 via-[#0B0F12]/85 to-black/92",
    pattern: "scan",
    patternColor: "rgba(234,164,107,0.32)",
    base: "bg-bg-alt",
  },
  resources: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.16)",
    spotB: "rgba(0,0,0,0.08)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "-left-20 top-[25%]",
    orbBPos: "right-[5%] -bottom-10",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "dots",
    patternColor: "rgba(234,164,107,0.32)",
    base: "bg-bg-alt",
  },
  contact: {
    videoOpacity: 0,
    spotA: "rgba(0,0,0,0.16)",
    spotB: "rgba(0,0,0,0.1)",
    orbA: "bg-black/40",
    orbB: "bg-black/30",
    orbAPos: "left-[10%] top-[15%]",
    orbBPos: "right-[8%] bottom-[15%]",
    wash: "from-black/70 via-[#0B0F12]/80 to-black/90",
    pattern: "rings",
    patternColor: "rgba(234,164,107,0.3)",
    base: "bg-bg-alt",
  },
};

type InteractiveBackdropProps = {
  theme?: BannerTheme;
  videoSrc?: string;
  videoOpacity?: number;
};

export default function InteractiveBackdrop({
  theme = "home",
  videoSrc,
  videoOpacity,
}: InteractiveBackdropProps): React.ReactElement {
  const cfg = themes[theme];
  const rootRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 40 });
  const [videoReady, setVideoReady] = useState(false);

  const src = videoSrc ?? cfg.videoSrc;
  const opacity = videoOpacity ?? cfg.videoOpacity;

  const onMove = useCallback((e: MouseEvent) => {
    const el = rootRef.current?.parentElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return (
    <div
      ref={rootRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${cfg.base}`}
    >
      {src && opacity > 0 && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: videoReady ? opacity : 0 }}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className={`absolute inset-0 bg-gradient-to-b ${cfg.wash}`} />

      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(680px circle at ${spot.x}% ${spot.y}%, ${cfg.spotA}, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-500 ease-out"
        style={{
          background: `radial-gradient(480px circle at ${100 - spot.x * 0.35}% ${100 - spot.y * 0.25}%, ${cfg.spotB}, transparent 50%)`,
        }}
      />

      <div
        className={`absolute h-[420px] w-[420px] animate-pulse-glow rounded-full blur-[110px] ${cfg.orbA} ${cfg.orbAPos}`}
      />
      <div
        className={`absolute h-[340px] w-[340px] animate-pulse-glow rounded-full blur-[100px] ${cfg.orbB} ${cfg.orbBPos}`}
        style={{ animationDelay: "1.1s" }}
      />

      {cfg.pattern === "grid" && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_25%,transparent_100%)]" />
      )}
      {cfg.pattern === "dots" && (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(${cfg.patternColor} 1.2px, transparent 1.5px)`,
            backgroundSize: "36px 36px",
            animation: "backdropDrift 28s linear infinite",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
      )}
      {cfg.pattern === "diagonal" && (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(-32deg, ${cfg.patternColor} 0 1px, transparent 1px 18px)`,
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 100%)",
          }}
        />
      )}
      {cfg.pattern === "scan" && (
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${cfg.patternColor} 3px, ${cfg.patternColor} 4px)`,
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 40%, #000 15%, transparent 100%)",
          }}
        />
      )}
      {cfg.pattern === "rings" && (
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            background: `repeating-radial-gradient(circle, transparent 0 28px, ${cfg.patternColor} 28px 29px)`,
            maskImage:
              "radial-gradient(circle, #000 10%, transparent 70%)",
          }}
        />
      )}
      <SchemeOverlay />
    </div>
  );
}
