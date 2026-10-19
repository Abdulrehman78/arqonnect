import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "ArQonnect is based in Lahore, Pakistan. Leadership, contact roles, and how we build AI Twin platforms for customer conversations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
