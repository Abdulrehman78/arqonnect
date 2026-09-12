import type { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Phase 0 branded communication platform and Phase 1 AI Business Twin, CRM and booking — what ArQonnect includes.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
