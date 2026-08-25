import type { Metadata } from "next";
import Enterprise from "@/components/sections/Enterprise";
import Guard from "@/components/sections/Guard";
import Analytics from "@/components/sections/Analytics";

export const metadata: Metadata = {
  title: "Enterprise AI",
  description:
    "Enterprise-grade AI deployment, security guardrails and analytics from ArQonnect — built for organizations that need scale and control.",
};

export default function EnterprisePage() {
  return (
    <>
      <Enterprise />
      <Guard />
      <Analytics />
    </>
  );
}
