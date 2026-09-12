import type { Metadata } from "next";
import FaqPageClient from "@/components/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about grounded AI replies, human handoff, languages, setup and what your business provides.",
};

export default function FaqPage() {
  return <FaqPageClient />;
}
