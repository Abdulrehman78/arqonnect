"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { RoomActiveContext, useCheapMotion } from "@/components/ui/Motion";
import { HERO_BANNER, HERO_VIDEO } from "@/lib/brand";

type HeroVideoBackdropProps = {
  ready?: boolean;
};

export default function HeroVideoBackdrop({
  ready = true,
}: HeroVideoBackdropProps): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const roomActive = useContext(RoomActiveContext);
  const cheap = useCheapMotion();
  const inHero = roomActive !== false;
  const [muted, setMuted] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || cheap) {
      video?.pause();
      return;
    }

    if (!inHero) {
      const t = window.setTimeout(() => video.pause(), 240);
      return () => clearTimeout(t);
    }

    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      setBlocked(true);
      video.play().catch(() => {});
    });
  }, [inHero, cheap]);

  useEffect(() => {
    if (!ready || cheap || !inHero) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().then(() => setMuted(false)).catch(() => {
      video.muted = true;
      setMuted(true);
      setBlocked(true);
    });
  }, [ready, cheap, inHero]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const toggleMute = () => {
    const video = videoRef.current;
    const next = !muted;
    setMuted(next);
    setBlocked(false);
    if (video) {
      video.muted = next;
      if (inHero) video.play().catch(() => {});
    }
  };

  const showUnmute = muted || blocked;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] overflow-hidden isolate bg-[#0B0F12]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={cheap ? undefined : HERO_VIDEO}
          poster={HERO_BANNER}
          playsInline
          loop
          autoPlay={!cheap}
          muted={muted}
          preload={cheap ? "none" : "auto"}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: [
              "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 38%, rgba(0,0,0,0.42) 62%, rgba(0,0,0,0.78) 100%)",
              "radial-gradient(ellipse 70% 50% at 50% 42%, rgba(0,0,0,0.12), rgba(0,0,0,0.4) 100%)",
            ].join(","),
          }}
        />
      </div>

      {!cheap && (
      <button
        type="button"
        onClick={toggleMute}
        aria-label={showUnmute ? "Unmute banner video" : "Mute banner video"}
        title={showUnmute ? "Unmute" : "Mute"}
        className={`pointer-events-auto absolute bottom-5 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:border-[#EAA46B]/70 hover:bg-black/70 hover:text-[#EAA46B] md:bottom-8 md:right-6 ${
          showUnmute ? "ai-play-pulse" : ""
        }`}
      >
        {showUnmute ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
      </button>
      )}
    </>
  );
}

function SpeakerOnIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 10v4h3.2L12 18V6L7.2 10H4z"
        fill="currentColor"
      />
      <path
        d="M15.2 8.5a4.2 4.2 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.6 6.2a7 7 0 0 1 0 11.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerOffIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path d="M4 10v4h3.2L12 18V6L7.2 10H4z" fill="currentColor" />
      <path
        d="M16 9.2 20.8 14M20.8 9.2 16 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
