"use client";

import { useContext, useEffect, useRef } from "react";
import { RoomActiveContext, useCheapMotion } from "@/components/ui/Motion";

type RoomVideoBackdropProps = {
  src: string;
  /** Extra scrim on top of the default room veil */
  veil?: string;
};

export default function RoomVideoBackdrop({
  src,
  veil,
}: RoomVideoBackdropProps): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const roomActive = useContext(RoomActiveContext);
  const cheap = useCheapMotion();
  const active = roomActive !== false;
  const shouldLoad = !cheap && active;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || cheap) {
      video?.pause();
      return;
    }

    if (!active) {
      const t = window.setTimeout(() => video.pause(), 240);
      return () => clearTimeout(t);
    }

    video.play().catch(() => {});
  }, [active, cheap]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] overflow-hidden isolate bg-[#0B0F12]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={shouldLoad ? src : undefined}
        playsInline
        loop
        muted
        autoPlay={shouldLoad}
        preload={shouldLoad ? "auto" : "none"}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: veil ?? [
            "linear-gradient(180deg, rgba(11,15,18,0.72) 0%, rgba(11,15,18,0.48) 38%, rgba(11,15,18,0.55) 62%, rgba(11,15,18,0.82) 100%)",
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(11,15,18,0.15), rgba(11,15,18,0.65) 100%)",
          ].join(","),
        }}
      />
      <div
        className="absolute inset-0 z-[2] opacity-50"
        style={{
          background:
            "linear-gradient(105deg, rgba(200,125,70,0.22) 0%, rgba(234,164,107,0.12) 45%, transparent 70%)",
          mixBlendMode: "color",
        }}
      />
    </div>
  );
}
