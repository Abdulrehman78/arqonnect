import type { Metadata } from "next";
import PricingPageClient from "@/components/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Direct-to-client monthly plans — Starter, Growth and Scale — plus add-ons and one-time activation.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
