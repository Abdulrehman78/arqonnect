import type { Metadata } from "next";
import IndustriesPageClient from "@/components/IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "ArQonnect for clinics, real estate, retail, professional services, hospitality and home services — one Twin, industry-tuned rules.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
