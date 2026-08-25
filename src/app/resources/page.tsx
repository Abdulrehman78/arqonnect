import type { Metadata } from "next";
import Blog from "@/components/sections/Blog";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Resources & FAQ",
  description:
    "Guides, industry insights and frequently asked questions about ArQonnect's AI chatbots, voice agents and automation services.",
};

export default function ResourcesPage() {
  return (
    <>
      <Blog />
      <Faq />
    </>
  );
}
