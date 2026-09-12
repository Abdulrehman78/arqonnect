import type { Metadata } from "next";
import ProcessPageClient from "@/components/ProcessPageClient";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From connecting channels to managing the customer relationship — seven steps with ArQonnect.",
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
