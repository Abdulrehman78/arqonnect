"use client";

import type { ReactElement } from "react";
import Threshold from "@/components/sections/Threshold";
import ServicesStory from "@/components/sections/ServicesStory";
import Capabilities from "@/components/sections/Capabilities";
import Templates from "@/components/sections/Templates";

export default function ServicesPageClient(): ReactElement {
  return (
    <main aria-label="Features">
      <Threshold />
      <ServicesStory />
      <Capabilities />
      <Templates />
    </main>
  );
}
