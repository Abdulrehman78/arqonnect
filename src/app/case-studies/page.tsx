import type { Metadata } from "next";
import CaseStudiesPageClient from "@/components/CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "How clinics, brokerages and retailers use ArQonnect for grounded chat, booking and human handoff.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}