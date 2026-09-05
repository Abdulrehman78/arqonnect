"use client";

import type { ReactElement } from "react";
import { useCheapMotion } from "@/components/ui/Motion";

type SchemeOverlayProps = {
  className?: string;
  intensity?: "hero" | "room";
  /** Skip the full-width scan (headings stay still); idle orbs/wave still run. */
  quiet?: boolean;
};

/** Theme-aware wash plus continuous AI idle motion on every section. */
export default function SchemeOverlay({
  className = "",
  intensity = "room",
  quiet = false,
}: SchemeOverlayProps): ReactElement {
  const cheap = useCheapMotion();
  const hero = intensity === "hero";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 media-scrim-base"
        style={{ background: hero ? "var(--media-scrim-hero)" : undefined }}
      />
      <div className="absolute inset-0 media-scrim-gradient" />

      {!cheap && (
        <div className="section-idle">
          <span className="section-idle-orb section-idle-orb--a" />
          <span className="section-idle-orb section-idle-orb--b" />
          {!quiet && <span className="section-idle-scan" />}
          <span className="section-idle-node" style={{ left: "8%", top: "18%" }} />
          <span
            className="section-idle-node"
            style={{ left: "88%", top: "22%", animationDelay: "0.8s" }}
          />
          <span
            className="section-idle-node"
            style={{ left: "14%", top: "78%", animationDelay: "1.4s" }}
          />
          <span
            className="section-idle-node"
            style={{ left: "82%", top: "72%", animationDelay: "2s" }}
          />
          <span className="section-idle-wave" aria-hidden>
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      )}
    </div>
  );
}
