"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type RevealStyle = {
  clipPath: string;
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function getRevealStyle(
  index: number,
  progress: number,
  total: number
): RevealStyle {
  const baseZ = total - index;
  const isLast = index === total - 1;

  if (progress < index) {
    const rise = index === 0 ? 1 : clamp(progress - (index - 1), 0, 1);
    return {
      clipPath: "inset(0 0 0 0)",
      transform: `scale(${0.96 + rise * 0.04})`,
      opacity: 1,
      zIndex: baseZ,
      pointerEvents: "none",
    };
  }

  if (isLast) {
    return {
      clipPath: "inset(0 0 0 0)",
      transform: "scale(1)",
      opacity: 1,
      zIndex: baseZ + total,
      pointerEvents: "auto",
    };
  }

  const peel = progress - index;

  if (peel < 1) {
    return {
      clipPath: `inset(0 0 ${peel * 100}% 0)`,
      transform: "scale(1)",
      opacity: 1,
      zIndex: total + 20,
      pointerEvents: peel < 0.85 ? "auto" : "none",
    };
  }

  return {
    clipPath: "inset(0 0 100% 0)",
    transform: "scale(1)",
    opacity: 0,
    zIndex: baseZ,
    pointerEvents: "none",
  };
}

type ScrollFadeSectionsProps = {
  children: React.ReactNode;
  id?: string;
};

function isFullScreenSlide(child: React.ReactNode): boolean {
  if (!React.isValidElement(child)) return false;
  const props = child.props as {
    className?: string;
    fullscreenSlide?: boolean;
  };
  if (props.fullscreenSlide) return true;
  return (
    typeof props.className === "string" &&
    props.className.includes("scene-slide")
  );
}

export default function ScrollFadeSections({
  children,
  id,
}: ScrollFadeSectionsProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el || !isDesktop) return;
    const vh = window.innerHeight || 1;
    const rect = el.getBoundingClientRect();
    const scrolled = Math.max(0, -rect.top);
    const scrollVH = scrolled / vh;
    setProgress(scrollVH);
    setActive(Math.min(count - 1, Math.max(0, Math.floor(scrollVH + 0.001))));
  }, [count, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    update();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [update, isDesktop]);

  // Mobile / tablet portrait: normal document flow — no sticky clipping
  if (!isDesktop) {
    return (
      <div id={id} className="scroll-fade-stack scroll-fade-stack--flow relative bg-[#020203]">
        {slides.map((child, i) => {
          const fullScreen = isFullScreenSlide(child);
          return (
            <div
              key={i}
              className={
                fullScreen
                  ? "relative min-h-[100svh] w-full overflow-hidden"
                  : "relative w-full overflow-hidden"
              }
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  const scrollHeight = Math.max(1, count) * 100;

  return (
    <div
      id={id}
      ref={containerRef}
      className="scroll-fade-stack relative"
      style={{ height: `${scrollHeight}vh`, background: "#020203" }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none"
        style={{ background: "#020203" }}
      >
        {slides.map((child, i) => {
          const style = getRevealStyle(i, progress, count);
          const fullScreen = isFullScreenSlide(child);

          return (
            <div
              key={i}
              className="absolute inset-0 overflow-hidden will-change-[clip-path,transform,opacity]"
              style={{
                clipPath: style.clipPath,
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                pointerEvents: "none",
                background: "#020203",
              }}
            >
              <div
                className={
                  fullScreen
                    ? "relative h-full w-full overflow-hidden"
                    : "flex h-full w-full items-center justify-center overflow-hidden px-0 py-16 md:py-20"
                }
                style={{ pointerEvents: style.pointerEvents }}
              >
                {fullScreen ? (
                  child
                ) : (
                  <div className="w-full max-h-full overflow-hidden [&>section]:bg-bg [&>section]:overflow-hidden">
                    {child}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="pointer-events-auto fixed right-4 top-1/2 z-[200] hidden -translate-y-1/2 flex-col gap-2 md:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to section ${i + 1}`}
              onClick={() => {
                const el = containerRef.current;
                if (!el) return;
                const top = el.offsetTop + i * window.innerHeight;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-accent"
                  : "w-2 bg-text-dimmer/40 hover:bg-text-dimmer"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
