import type { Metadata } from "next";
import CaseStudies from "@/components/sections/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from ArQonnect AI deployments — case studies from clients across healthcare, real estate, ecommerce and more.",
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
