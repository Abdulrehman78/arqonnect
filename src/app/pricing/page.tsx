import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import Stack from "@/components/sections/Stack";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for ArQonnect's AI chatbot, voice agent and automation stack — see plans and calculate your monthly cost.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <Stack />
    </>
  );
}
