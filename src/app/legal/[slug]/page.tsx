import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocument from "@/components/LegalDocument";
import {
  getAllLegalSlugs,
  getLegalDoc,
} from "@/lib/legalContent";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllLegalSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doc = getLegalDoc(params.slug);
  if (!doc) return { title: "Legal" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default function LegalPage({ params }: Props) {
  const doc = getLegalDoc(params.slug);
  if (!doc) notFound();
  return <LegalDocument doc={doc} />;
}
