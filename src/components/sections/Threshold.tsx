"use client";

import React, { useEffect, useRef } from "react";
import { FEATURES } from "@/lib/siteContent";

/**
 * Door threshold — sticky stage + door scales ~1→10 as you scroll.
 */
export default function Threshold(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const doorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const door = doorRef.current;
    const glow = glowRef.current;
    const text = textRef.current;
    if (!section || !door || !glow || !text) return;

    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const p = Math.max(0, Math.min(1, -rect.top / total));
      const scale = 1 + p * 9;
      const rotate = (1 - p) * 10;
      door.style.transform = `scale(${scale}) rotateY(${rotate}deg)`;
      glow.style.opacity = String(Math.min(1, p * 1.6));
      text.style.opacity = String(1 - Math.min(1, p * 2.2));
      text.style.transform = `translateY(${-p * 60}px) scale(${1 - p * 0.15})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const totalItems = FEATURES.phases.reduce((n, p) => n + p.items.length, 0);

  return (
    <section ref={sectionRef} className="threshold" id="threshold">
      <div className="threshold-stage">
        <div className="threshold-content" id="thresholdText" ref={textRef}>
          <span className="room-label inline-flex w-full items-center justify-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            {FEATURES.eyebrow}
          </span>
          <h2 className="banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            {totalItems} capabilities.
            <br />
            <span className="banner-heading-muted">One product.</span>
          </h2>
          <p className="room-body mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            {FEATURES.lead} Keep scrolling — every door opens into what ships in
            Phase 0 and Phase 1.
          </p>
        </div>

        <div className="door" id="door" ref={doorRef}>
          <div className="door-glow" id="doorGlow" ref={glowRef} />
          <div className="door-handle" />
        </div>
      </div>
    </section>
  );
}
