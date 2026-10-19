import type { Metadata } from "next";
import FaqPageClient from "@/components/FaqPageClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about grounded AI replies, human handoff, languages, setup and what your business provides.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <FaqPageClient />
    </>
  );
}
