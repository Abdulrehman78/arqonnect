"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, summary, label, [data-magnetic]";

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Product-site pointer: gold spotlight, delayed ring, magnetic CTAs, card sheen.
 * Fine pointer only — skipped on touch and reduced-motion.
 */
export default function AiPointer(): React.ReactElement | null {
  const spotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const raf = useRef(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!fine || !motionOk) return;
    setOn(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const el = e.target as HTMLElement | null;
      const overUi = Boolean(el?.closest(INTERACTIVE));
      hovering.current = overUi;
      document.documentElement.classList.toggle("ai-pointer-hover", overUi);

      const card = el?.closest<HTMLElement>(".motion-card, [data-ai-sheen]");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = el?.closest<HTMLElement>("[data-ai-tilt]");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 6}deg)`;
      }

      const mag = el?.closest<HTMLElement>("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.28;
        mag.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const onLeaveEl = (e: MouseEvent) => {
      const related = e.relatedTarget as Node | null;
      const mag = (e.target as HTMLElement)?.closest<HTMLElement>("[data-magnetic]");
      if (mag && !mag.contains(related)) mag.style.transform = "";
      const tilt = (e.target as HTMLElement)?.closest<HTMLElement>("[data-ai-tilt]");
      if (tilt && !tilt.contains(related)) tilt.style.transform = "";
    };

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.18);
      current.current.y = lerp(current.current.y, target.current.y, 0.18);
      ring.current.x = lerp(ring.current.x, target.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, target.current.y, 0.1);

      const sx = current.current.x;
      const sy = current.current.y;
      if (spotRef.current) {
        spotRef.current.style.setProperty("--sx", `${sx}px`);
        spotRef.current.style.setProperty("--sy", `${sy}px`);
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (ringRef.current) {
        const scale = hovering.current ? 1.65 : 1;
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = hovering.current ? "0.95" : "0.55";
      }
      raf.current = requestAnimationFrame(tick);
    };

    target.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.35,
    };
    current.current = { ...target.current };
    ring.current = { ...target.current };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeaveEl, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeaveEl);
      document.documentElement.classList.remove("ai-pointer-hover");
    };
  }, []);

  if (!on) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block" aria-hidden>
      <div ref={spotRef} className="ai-spotlight" />
      <div ref={ringRef} className="ai-cursor-ring" />
      <div ref={dotRef} className="ai-cursor-dot" />
    </div>
  );
}
