import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact ArQonnect | Book a Demo",
  description:
    "Get in touch with ArQonnect — book a demo, see where we work, and start your AI automation project.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
