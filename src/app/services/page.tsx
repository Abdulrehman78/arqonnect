import type { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "AI Services — Chatbots, Voice Agents, CRM & Growth",
  description:
    "Explore ArQonnect's full AI service stack: chat and voice agents, CRM automation, SEO/AEO/GEO growth capabilities and ready-made agent templates.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
