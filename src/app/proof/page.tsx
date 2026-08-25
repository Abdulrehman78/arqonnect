import type { Metadata } from "next";
import Proof from "@/components/sections/Proof";
import StatsStrip from "@/components/sections/StatsStrip";

export const metadata: Metadata = {
  title: "Proof & Live Stats",
  description: "Real usage numbers and social proof from ArQonnect's AI deployments.",
};

export default function ProofPage() {
  return (
    <>
      <Proof />
      <StatsStrip />
    </>
  );
}
