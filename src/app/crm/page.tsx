import type { Metadata } from "next";
import Crm from "@/components/sections/Crm";

export const metadata: Metadata = {
  title: "CRM & Automation",
  description:
    "See how ArQonnect wires AI agents directly into your CRM — HubSpot, Salesforce and more — so every call, chat and lead updates your records automatically.",
};

export default function CrmPage() {
  return <Crm />;
}
