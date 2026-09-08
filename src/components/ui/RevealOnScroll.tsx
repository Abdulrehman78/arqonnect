"use client";

import { useRef, type ReactElement, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "@/components/ui/GsapProvider";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger children that have [data-reveal] */
  stagger?: number;
};

/**
 * GSAP ScrollTrigger reveal wrapper — fade + rise for [data-reveal] nodes.
 */
export default function RevealOnScroll({
  children,
  className,
  stagger = 0.08,
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(
    ref,
    () => {
      const root = ref.current;
      if (!root) return;
      const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: 36 });

      ScrollTrigger.batch(items, {
        start: "top 88%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger,
            overwrite: true,
            onComplete() {
              batch.forEach((el) => el.classList.add("is-revealed"));
            },
          });
        },
        once: true,
      });
    },
    [stagger]
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
