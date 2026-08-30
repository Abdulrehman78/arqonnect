"use client";

import AiAmbient from "@/components/ui/AiAmbient";
import AiPointer from "@/components/ui/AiPointer";

export default function SiteChrome() {
  return (
    <>
      <div className="progress" id="progress" />
      <div className="bg-grid-modern ai-grid-drift" />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <AiAmbient intensity="site" />
      </div>
      <AiPointer />
    </>
  );
}
