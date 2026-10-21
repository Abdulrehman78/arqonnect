import type { Metadata } from "next";
import RoiCalculatorClient from "@/components/RoiCalculatorClient";

export const metadata: Metadata = {
  title: "ROI calculator",
  description:
    "Estimate what missed chats and repetitive FAQ work may cost your business, then compare against ArQonnect plans.",
  alternates: { canonical: "/roi" },
};

export default function RoiPage() {
  return <RoiCalculatorClient />;
}
