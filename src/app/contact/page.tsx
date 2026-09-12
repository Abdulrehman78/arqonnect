import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a live ArQonnect demo — see grounded AI replies, human handoff and booking on your channels.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
