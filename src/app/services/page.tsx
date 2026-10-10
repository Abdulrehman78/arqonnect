import type { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ArQonnect's AI Twin Platform — unified inbox, Business Twin, CRM and booking in one product.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
