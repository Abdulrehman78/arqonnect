import type { Metadata } from "next";
import PricingPageClient from "@/components/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "ArQonnect SaaS plans: Starter $499, Growth $899, Scale $1,499 per month plus setup. Web chat, WhatsApp, Instagram, Messenger. Billed via Paddle.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "ArQonnect pricing",
    description:
      "Starter, Growth, and Scale plans for your AI business twin. Clear monthly pricing, done-for-you setup, cancel anytime.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
