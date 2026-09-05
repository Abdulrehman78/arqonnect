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
    <div className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] overflow-hidden isolate bg-backdrop-base">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={cheap ? undefined : src}
        playsInline
        loop
        muted
        autoPlay={!cheap}
        preload={cheap ? "none" : "auto"}
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-video-veil" />
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
