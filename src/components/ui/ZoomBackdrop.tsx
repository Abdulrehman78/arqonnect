"use client";

import Image from "next/image";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { useCheapMotion } from "@/components/ui/Motion";

type ZoomBackdropProps = {
  src: string;
  /** object-position, e.g. "center" or "70% center" */
  position?: string;
  /** cover fills the banner; contain letterboxes */
  fit?: "cover" | "contain";
  /** Slow Ken Burns zoom. On by default for cover. */
  zoom?: boolean;
  /** Color overlay — mix-blend-color so photo structure stays, hue matches scheme */
  tint?: string;
  /** Scrim layers (gradients) drawn over the image */
  veil?: string;
  overlay?: "hero" | "room";
  /** Static overlay only — no scan line or drifting orbs */
  quiet?: boolean;
  /** Stagger Ken Burns start so rooms don't zoom in sync (seconds) */
  delaySec?: number;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

/**
 * Ken Burns backdrop — image stays visible at all times with a slow zoom pulse.
 */
export default function ZoomBackdrop({
  src,
  position = "center",
  fit = "cover",
  zoom,
  tint,
  veil,
  overlay = "room",
  quiet = false,
  delaySec = 0,
  className = "",
  priority = false,
  children,
}: ZoomBackdropProps): React.ReactElement {
  const cheap = useCheapMotion();
  const cover = fit !== "contain";
  const kenBurns = !cheap && (zoom ?? cover);
  return (
    <div
      className={`pointer-events-none absolute inset-0 min-h-[100dvh] overflow-hidden isolate ${className}`}
      aria-hidden
    >
      <div
        className={kenBurns ? "hero-kenburns" : "absolute inset-0"}
        style={kenBurns ? { animationDelay: `${-delaySec}s` } : undefined}
      >
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={cover ? "object-cover" : "object-contain"}
          style={{
            objectPosition: position,
            ...(tint && !cheap
              ? { filter: "hue-rotate(158deg) saturate(0.88) brightness(0.86)" }
              : {}),
          }}
        />
      </div>
      {tint ? (
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: tint, mixBlendMode: "color" }}
        />
      ) : null}
      {veil ? (
        <div className="absolute inset-0 z-[1] bg-room-veil" />
      ) : (
        <div className="absolute inset-0 z-[1] media-scrim-base" />
      )}
      {children}
      <SchemeOverlay className="z-[3]" intensity={overlay} quiet={quiet} />
    </div>
  );
}
