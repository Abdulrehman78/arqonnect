import type { Metadata } from "next";
import Demo from "@/components/sections/Demo";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Try ArQonnect's AI chat and voice agents live — the same agents that answer real client calls and conversations.",
};

export default function DemoPage() {
  return <Demo />;
}
