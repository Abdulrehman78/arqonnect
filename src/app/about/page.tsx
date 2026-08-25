import type { Metadata } from "next";
import Founder from "@/components/sections/Founder";
import Moment from "@/components/sections/Moment";

export const metadata: Metadata = {
  title: "About ArQonnect",
  description:
    "The story behind ArQonnect, from our founder — why we build AI agents instead of software you have to babysit.",
};

export default function AboutPage() {
  return (
    <>
      <Founder />
      <Moment />
    </>
  );
}
