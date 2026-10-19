import type { Metadata } from "next";
import DemoPageClient from "@/components/DemoPageClient";

export const metadata: Metadata = {
  title: "Live demo",
  description:
    "See what an ArQonnect demo covers: unified inbox, grounded AI replies, human handoff, CRM contacts and appointment booking.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return <DemoPageClient />;
}
