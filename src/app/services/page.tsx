import type { Metadata } from "next";
import Threshold from "@/components/sections/Threshold";
import ServicesStory from "@/components/sections/ServicesStory";
import Capabilities from "@/components/sections/Capabilities";
import Templates from "@/components/sections/Templates";

export const metadata: Metadata = {
  title: "AI Services — Chatbots, Voice Agents, CRM & Growth",
  description:
    "Explore ArQonnect's full AI service stack: chat and voice agents, CRM automation, SEO/AEO/GEO growth capabilities and ready-made agent templates.",
};

export default function ServicesPage() {
  return (
    <>
      <Threshold />
      <ServicesStory />
      <Capabilities />
      <Templates />
    </>
  );
}
