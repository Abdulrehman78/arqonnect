"use client";

import type Lenis from "lenis";

type Listener = (lenis: Lenis | null) => void;

let lenisInstance: Lenis | null = null;
const listeners = new Set<Listener>();

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
  listeners.forEach((fn) => fn(instance));
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

export function subscribeLenis(fn: Listener): () => void {
  listeners.add(fn);
  fn(lenisInstance);
  return () => {
    listeners.delete(fn);
  };
}
