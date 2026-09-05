"use client";

import Image from "next/image";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { useCheapMotion } from "@/components/ui/Motion";
import { useEffect, useRef, useState } from "react";

type BannerBackdropProps = {
  poster: string;
  video?: string;
  position?: string;
  veil?: boolean;
  overlay?: "hero" | "room";
  quiet?: boolean;
  priority?: boolean;
  /** Stagger Ken Burns when using poster-only fallback */
  delaySec?: number;
};

/**
 * Page banner backdrop — poster shows instantly; video plays muted on top when ready.
 */
export default function BannerBackdrop({
  poster,
  video,
  position = "center",
  veil,
  overlay = "room",
  quiet = false,
  priority = false,
  delaySec = 0,
}: BannerBackdropProps): React.ReactElement {
  const cheap = useCheapMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const useVideo = Boolean(video) && !cheap;

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !useVideo) return;
    el.play().catch(() => {});
  }, [useVideo, video]);

  return (
    <div className="pointer-events-none absolute inset-0 min-h-[100dvh] overflow-hidden isolate bg-backdrop-base">
      <div
        className={useVideo && videoReady ? "absolute inset-0" : "hero-kenburns absolute inset-0"}
        style={!useVideo || !videoReady ? { animationDelay: `${-delaySec}s` } : undefined}
      >
        <Image
          src={poster}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            useVideo && videoReady ? "opacity-0" : "opacity-100"
          }`}
          style={{ objectPosition: position }}
        />
      </div>

      {useVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
          src={video}
          poster={poster}
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          aria-hidden
        />
      ) : null}

      {veil ? (
        <div className="absolute inset-0 z-[1] bg-room-veil" />
      ) : (
        <div className="absolute inset-0 z-[1] media-scrim-base" />
      )}

      <SchemeOverlay className="z-[3]" intensity={overlay} quiet={quiet} />
    </div>
  );
}
