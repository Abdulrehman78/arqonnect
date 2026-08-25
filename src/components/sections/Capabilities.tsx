"use client";

import { useState } from "react";
import {
  Section,
  SectionHeader,
  Card,
  Chip,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const tabs = [
  { id: "core", label: "Core AI" },
  { id: "growth", label: "Growth & Visibility" },
  { id: "build", label: "Build & Ship" },
  { id: "automation", label: "Automation & CRM" },
  { id: "strategy", label: "Strategy & Content" },
];

const panels: Record<string, Array<{ num: string; title: string; desc: string }>> = {
  core: [
    { num: "01", title: "CRM", desc: "One pipeline for every conversation." },
    { num: "02", title: "Voice AI", desc: "Answers, qualifies, books — by phone." },
    { num: "03", title: "Chat Widget / Conversation AI", desc: "Never leaves a visitor on read." },
    { num: "04", title: "Websites, Funnels & Landing Pages", desc: "Pages engineered to convert." },
    { num: "05", title: "Webinar Funnels", desc: "The pitch that plays itself." },
    { num: "06", title: "Call Tracking", desc: "Know which call made you money." },
    { num: "07", title: "Inbound SMS & Social DMs", desc: "One inbox, every platform." },
    { num: "08", title: "Social Planner", desc: "Post once, show up everywhere." },
    { num: "09", title: "Missed Call Text-Back", desc: "The lead you didn't lose." },
    { num: "10", title: "Ad Manager", desc: "Google, Meta & Instagram, reported." },
  ],
  growth: [
    { num: "①", title: "SMM — Social Media Marketing", desc: "Content that shows up, on schedule." },
    { num: "②", title: "SEO — Search Engine Optimization", desc: "Found first, ranked right." },
    { num: "③", title: "AEO — Answer Engine Optimization", desc: "Show up in Perplexity & AI answers." },
    { num: "④", title: "GEO — Generative Engine Optimization", desc: "Optimized for how AI cites sources." },
    { num: "⑤", title: "AIO — AI Overview Optimization", desc: "Ranked inside Google's AI Overviews." },
    { num: "⑥", title: "Email Marketing Automation", desc: "Sequences and newsletters that get opened." },
    { num: "⑦", title: "Sales Funnel Automation", desc: "Lead nurture that runs while you sleep." },
  ],
  build: [
    { num: "①", title: "AI-Powered Web Development", desc: "Full builds, engineered with AI." },
    { num: "②", title: "iOS App Development", desc: "Native Apple apps, shipped faster." },
    { num: "③", title: "Android App Development", desc: "Native Android apps, built with AI tooling." },
    { num: "④", title: "Business Website Development", desc: "Corporate sites that actually convert." },
    { num: "⑤", title: "Landing Page Development", desc: "High-converting pages for every campaign." },
  ],
  automation: [
    { num: "①", title: "Business Process Automation", desc: "Manual steps, removed for good." },
    { num: "②", title: "Workflow Automation", desc: "Tools that talk to each other automatically." },
    { num: "③", title: "HubSpot CRM Integration", desc: "Every lead synced, no manual entry." },
    { num: "④", title: "Salesforce CRM Integration", desc: "Enterprise CRM, wired into your AI agent." },
  ],
  strategy: [
    { num: "①", title: "AI Business Consulting", desc: "Advisory that knows the business." },
    { num: "②", title: "Enterprise Digital Transformation", desc: "Modernization, mapped and managed." },
    { num: "③", title: "Technical Writing", desc: "Docs and content that sound human." },
    { num: "④", title: "Documentation & Knowledge Bases", desc: "Everything your team needs, written down." },
  ],
};

export default function Capabilities({ embedded = false }: { embedded?: boolean }) {
  const [active, setActive] = useState("core");
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <Section
      border={!embedded}
      id="capabilities"
      className={`bg-bg-alt ${embedded ? "!py-0 h-auto w-full" : ""}`}
    >
      <SectionHeader
        compact={embedded}
        accent="orange"
        eyebrow="Down The Hall"
        title={
          <>
            Whatever&apos;s slowing you down,
            <br />
            there&apos;s a room for that.
          </>
        }
        description="Pick the category that matches the bottleneck — every card below is a problem we've already solved."
      />

      <FadeUp>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="-mx-1 flex max-w-full gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => (
              <Chip key={t.id} active={active === t.id} onClick={() => setActive(t.id)}>
                {t.label}
              </Chip>
            ))}
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300/70 sm:inline">
            {activeTab.label} · {panels[active].length} rooms
          </span>
        </div>

        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {panels[active].map((card) => (
            <MotionItem key={card.title}>
              <Card
                className={`h-full border-line bg-panel/40 transition-all hover:border-orange-400/35 hover:bg-orange-500/[0.04] ${
                  embedded ? "!p-4" : ""
                }`}
              >
                <span className="font-mono text-xs text-orange-300">{card.num}</span>
                <h4
                  className={`font-semibold text-text ${
                    embedded ? "mt-1 text-sm" : "mt-2"
                  }`}
                >
                  {card.title}
                </h4>
                <p
                  className={`text-text-dim ${
                    embedded ? "mt-0.5 text-xs" : "mt-1.5 text-sm"
                  }`}
                >
                  {card.desc}
                </p>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </FadeUp>

      {!embedded && (
        <FadeUp className="mt-12 flex flex-wrap items-center gap-4">
          <BtnPrimary href="/contact">Talk through your stack →</BtnPrimary>
          <BtnGhost href="#templates">See agent templates</BtnGhost>
        </FadeUp>
      )}
    </Section>
  );
}
