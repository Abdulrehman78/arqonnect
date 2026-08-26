"use client";

import React, { useEffect, useRef } from "react";

/**
 * Door threshold from index_21:
 * sticky stage + door scales ~1→10 as you scroll until it fills the view.
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

  return (
    <section ref={sectionRef} className="threshold" id="threshold">
      <div className="threshold-stage">
        <div className="threshold-content" id="thresholdText" ref={textRef}>
          <span
            className="eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#60A5FA",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11.5,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 18,
              justifyContent: "center",
              width: "100%",
            }}
          >
            — The ArQonnect Stack
          </span>
          <h2>
            Fourteen rooms.
            <br />
            One workforce.
          </h2>
          <p>
            Keep scrolling — every door opens into a service built to run
            itself, lit its own way.
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
