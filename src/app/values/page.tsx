import type { Metadata } from "next";
import Values from "@/components/sections/Values";

export const metadata: Metadata = {
  title: "Our Values",
  description: "The principles ArQonnect builds AI agents and automation around.",
};

export default function ValuesPage() {
  return <Values />;
}
