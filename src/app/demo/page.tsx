import type { Metadata } from "next";
import DemoPageClient from "@/components/DemoPageClient";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Recommended demonstration flow — lead with customer experience and business control, not an uncontrolled chatbot.",
};

export default function DemoPage() {
  return <DemoPageClient />;
}
