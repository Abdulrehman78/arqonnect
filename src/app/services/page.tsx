import type { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ArQonnect's AI Twin Platform services — Phase 0 communication platform and Phase 1 Business Twin, CRM and booking.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
