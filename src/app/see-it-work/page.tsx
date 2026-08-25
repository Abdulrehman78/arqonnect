import type { Metadata } from "next";
import Reel from "@/components/sections/Reel";

export const metadata: Metadata = {
  title: "See It Work",
  description: "A look at ArQonnect's AI workforce in action across real deployments.",
};

export default function SeeItWorkPage() {
  return <Reel />;
}
