"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { RoomActiveContext, useCheapMotion } from "@/components/ui/Motion";
import { HERO_VIDEO } from "@/lib/brand";

type HeroVideoBackdropProps = {
  ready?: boolean;
};

/**
 * Ambient hero video — always muted.
 * Autoplay with sound is blocked by browsers, inaccessible, and poor UX.
 * Background marketing clips stay silent by design.
 */
export default function HeroVideoBackdrop({
  ready = true,
}: HeroVideoBackdropProps): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const roomActive = useContext(RoomActiveContext);
  const cheap = useCheapMotion();
  const inHero = roomActive !== false;
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (!inHero || cheap || !ready) {
      const t = window.setTimeout(() => video.pause(), 240);
      return () => clearTimeout(t);
    }

    void video.play().catch(() => {});
  }, [inHero, cheap, ready]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] overflow-hidden isolate bg-backdrop-base">
      <div
        className="absolute inset-0 bg-bg transition-opacity duration-700"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgb(var(--accent-rgb)/0.1),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgb(var(--accent-rgb)/0.05),transparent_55%)]" />
      </div>

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        src={HERO_VIDEO}
        playsInline
        loop
        autoPlay
        muted
        preload="auto"
        aria-hidden
        onLoadedData={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
          setVideoReady(true);
        }}
        onCanPlay={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
          setVideoReady(true);
        }}
      />
      <div className="absolute inset-0 z-[1] bg-hero-veil" />
    </div>
  );
}
