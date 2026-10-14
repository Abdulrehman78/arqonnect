"use client";

import type { ReactElement } from "react";
import Threshold from "@/components/sections/Threshold";
import ServicesStory from "@/components/sections/ServicesStory";
import AdditionalServices from "@/components/sections/AdditionalServices";
import Capabilities from "@/components/sections/Capabilities";
import Templates from "@/components/sections/Templates";

export default function ServicesPageClient(): ReactElement {
  return (
    <main aria-label="Services">
      <Threshold />
      <ServicesStory />
      <AdditionalServices />
      <Capabilities />
      <Templates />
    </main>
  );
}
