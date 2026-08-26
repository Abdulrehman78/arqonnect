"use client";

import Image from "next/image";

type ZoomBackdropProps = {
  src: string;
  /** object-position, e.g. "center" or "70% center" */
  position?: string;
  /** Scrim layers (gradients) drawn over the image */
  veil?: string;
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
  veil,
  delaySec = 0,
  className = "",
  priority = false,
  children,
}: ZoomBackdropProps): React.ReactElement {
  return (
    <div
      className={`pointer-events-none absolute inset-0 min-h-[100dvh] overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="hero-kenburns"
        style={{ animationDelay: `${-delaySec}s` }}
      >
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {veil ? (
        <div className="absolute inset-0 z-[1]" style={{ background: veil }} />
      ) : null}
      {children}
    </div>
  );
}
