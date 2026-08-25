"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
};

export function FadeUp({
  children,
  className,
  delay = 0,
}: MotionProps): React.ReactElement {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...(fadeUp.visible as { transition: object }).transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: MotionProps): React.ReactElement {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
}: MotionProps): React.ReactElement {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
