"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { RoomActiveContext, useCheapMotion } from "@/components/ui/Motion";
import { HERO_VIDEO } from "@/lib/brand";

type HeroVideoBackdropProps = {
  ready?: boolean;
  /** When false, only the brand gradient shows (clearer, lighter homepage). */
  showVideo?: boolean;
};

/**
 * Ambient hero backdrop — muted video optional.
 * Default is gradient-only so the offer stays readable.
 */
export default function HeroVideoBackdrop({
  ready = true,
  showVideo = false,
}: HeroVideoBackdropProps): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const roomActive = useContext(RoomActiveContext);
  const cheap = useCheapMotion();
  const inHero = roomActive !== false;
  const [videoReady, setVideoReady] = useState(false);
  const playVideo = showVideo && !cheap;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playVideo) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (!inHero || !ready) {
      const t = window.setTimeout(() => video.pause(), 240);
      return () => clearTimeout(t);
    }

    void video.play().catch(() => {});
  }, [inHero, ready, playVideo]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] overflow-hidden isolate bg-backdrop-base">
      <div
        className="absolute inset-0 bg-bg transition-opacity duration-700"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgb(var(--accent-rgb)/0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgb(var(--accent-rgb)/0.06),transparent_55%)]" />
      </div>

      {playVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-40" : "opacity-0"
          }`}
          src={HERO_VIDEO}
          playsInline
          loop
          autoPlay
          muted
          preload="metadata"
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
      ) : null}
      <div className="absolute inset-0 z-[1] bg-hero-veil" />
    </div>
  );
}
