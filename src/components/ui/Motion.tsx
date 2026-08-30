"use client";

import { createContext, useContext, useRef } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import React from "react";

/** True when this home-room is on screen. null = normal page (use whileInView). */
export const RoomActiveContext = createContext<boolean | null>(null);

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  lift?: boolean;
};

function useRevealControl(): {
  reduce: boolean | null;
  roomActive: boolean | null;
} {
  const reduce = useReducedMotion();
  const roomActive = useContext(RoomActiveContext);
  return { reduce: reduce ?? false, roomActive };
}

/** Stay visible after the first enter so iris/scroll lerp cannot flicker content. */
function useRevealLatch(roomActive: boolean): boolean {
  const seen = useRef(roomActive);
  if (roomActive) seen.current = true;
  return seen.current;
}

export function FadeUp({
  children,
  className,
  delay = 0,
}: MotionProps): React.ReactElement {
  const { reduce, roomActive } = useRevealControl();
  const seen = useRevealLatch(roomActive === true);
  const variants = {
    ...fadeUp,
    visible: {
      ...fadeUp.visible,
      transition: {
        duration: 0.7,
        ease: EASE,
        delay,
      },
    },
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (roomActive !== null) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate={seen ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-48px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: MotionProps): React.ReactElement {
  const { reduce, roomActive } = useRevealControl();
  const seen = useRevealLatch(roomActive === true);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (roomActive !== null) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate={seen ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-36px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  lift = true,
}: MotionProps): React.ReactElement {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      whileHover={
        reduce || !lift
          ? undefined
          : { y: -6, transition: { duration: 0.35, ease: EASE } }
      }
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

/** Quiet looping motion for labels, metrics, and accents. */
export function Float({
  children,
  className,
  delay = 0,
}: MotionProps): React.ReactElement {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: MotionProps): React.ReactElement {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={
        reduce
          ? undefined
          : { y: -4, scale: 1.02, transition: { duration: 0.35, ease: EASE } }
      }
      whileTap={reduce ? undefined : { scale: 0.98 }}
      data-magnetic
    >
      {children}
    </motion.div>
  );
}
