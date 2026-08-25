"use client";

import Link from "next/link";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const features = [
  {
    title: "Humanoid Chat + Voice Agents",
    description:
      "A humanoid chatbot and voice agent that wins the chat, takes the call, and books the appointment — on every channel.",
    accent: "accent",
  },
  {
    title: "Twenty AI-Run Services",
    description:
      "Chat and voice agents, websites and funnels, CRM automation, SEO/AEO/GEO and ready-made agent templates — built to run themselves.",
    accent: "violet",
  },
  {
    title: "Every Lead Updates Itself",
    description:
      "ArQonnect wires agents directly into HubSpot, Salesforce or your CRM, so calls, chats and bookings write themselves in.",
    accent: "cyan",
  },
  {
    title: "SEO, AEO, GEO & AIO",
    description:
      "AI search visibility handled together — so your business shows up wherever customers are looking, including AI overviews.",
    accent: "accent",
  },
  {
    title: "Enterprise Guardrails",
    description:
      "Security guardrails, analytics and dedicated deployment support for organizations that can't afford surprises.",
    accent: "violet",
  },
  {
    title: "$97/month Replaces $1,600",
    description:
      "Transparent, flat pricing for the full stack. One flat rate, no hidden per-seat fees, cancel anytime.",
    accent: "cyan",
  },
];

const accentMap: Record<string, string> = {
  accent: "text-accent border-accent/30 bg-accent/10",
  violet: "text-violet border-violet/30 bg-violet/10",
  cyan: "text-cyan border-cyan/30 bg-cyan/10",
};

export default function FeaturesBento() {
  return (
    <section className="relative bg-bg px-6 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            The Platform
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-text md:text-4xl">
            One stack, twenty AI-run services.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-dim md:text-base">
            Chat and voice agents, websites and funnels, CRM automation,
            SEO/AEO/GEO and ready-made agent templates — built to run themselves.
          </p>
        </FadeUp>

        <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <MotionItem key={f.title}>
              <div className="group h-full rounded-2xl border border-line bg-panel/40 p-4 transition-all duration-300 hover:border-accent/20 hover:bg-panel/80 md:p-5">
                <div
                  className={`inline-flex rounded-xl border px-3 py-1 text-xs font-medium ${accentMap[f.accent]}`}
                >
                  ArQonnect
                </div>
                <h3 className="mt-3 text-base font-semibold text-text md:text-lg">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-dim md:text-sm">
                  {f.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </Stagger>

        <FadeUp className="mt-8 text-center" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent no-underline transition-colors hover:text-accent-dim"
          >
            Explore all 20+ services <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
