"use client";

import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import PageBanner, {
  PageBannerChecks,
  PageBannerPanel,
} from "@/components/ui/PageBanner";

const features = [
  {
    num: "01",
    title: "Support SLA",
    desc: "Contractual uptime and performance guarantees, with reserved capacity sized to your call volume.",
  },
  {
    num: "02",
    title: "Dedicated Deployment Support",
    desc: "A dedicated engineer embedded with your team to get the first agent live inside a week.",
  },
  {
    num: "03",
    title: "SSO, OAuth & RBAC",
    desc: "Enterprise sign-on, OAuth2 for secure integrations, and granular role-based access controls.",
  },
  {
    num: "04",
    title: "Scalable Infrastructure",
    desc: "Scale from ten calls a day to thousands, without a re-architecture or a surprise bill.",
  },
  {
    num: "05",
    title: "AI Guardrails",
    desc: "Built-in conversation guardrails prevent off-script responses and protect data integrity.",
  },
  {
    num: "06",
    title: "Compliance-Ready",
    desc: "Built to meet SOC 2, HIPAA and PCI-adjacent standards — the ones your industry already runs on.",
  },
];

const compareRows = [
  {
    group: "Compliance",
    rows: [
      { label: "Built-in Safety Guardrails", std: true, ent: true },
      { label: "Personal Info Redaction (PII)", std: true, ent: true },
      { label: "Opt-out Recording & Transcription", std: true, ent: true },
      { label: "Custom Data Retention", std: false, ent: true },
      { label: "HIPAA / BAA", std: false, ent: true },
      { label: "SSO", std: false, ent: true },
      { label: "Custom MSA / DPA / BAA", std: false, ent: true },
      { label: "Role-Based Access Control", std: false, ent: true },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Community & Email Support", std: true, ent: true },
      { label: "24/7 Support, Dedicated Portal", std: false, ent: true },
      { label: "Dedicated Implementation Support", std: false, ent: true },
      { label: "Named Account Manager", std: false, ent: true },
    ],
  },
];

const bullets = [
  "Guardrails against hallucination and data leaks",
  "Real-time analytics across every agent",
  "Dedicated deployment support",
];

export default function Enterprise() {
  return (
    <>
      <PageBanner
        id="enterprise"
        banner="enterprise"
        minHeight="min-h-[78vh]"
        eyebrow="Built For Enterprises"
        title="The bigger you get,"
        titleMuted="the less it should worry you."
        description="Everything a growing team needs to deploy AI agents without a security review turning into a six-month delay."
        aside={
          <PageBannerPanel>
            <div className="flex items-center justify-between border-b border-glass px-5 py-4 md:px-6">
              <div>
                <div className="room-heading text-sm font-semibold">
                  Enterprise control plane
                </div>
                <div className="mt-0.5 font-mono text-xs text-accent/90">
                  SSO · RBAC · GUARDRAILS · LIVE
                </div>
              </div>
              <span className="rounded-sm border border-accent/35 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold text-accent">
                ENT
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5 md:p-6">
              {[
                { label: "Uptime SLA", value: "99.9%" },
                { label: "First agent live", value: "< 7 days" },
                { label: "Support", value: "24/7" },
                { label: "Access", value: "SSO + RBAC" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-glass bg-glass-inner p-4"
                >
                  <div className="room-caption text-xs">{stat.label}</div>
                  <div className="banner-heading mt-1 text-lg">{stat.value}</div>
                </div>
              ))}
            </div>
            <p className="room-caption border-t border-glass px-5 py-4 text-xs leading-relaxed md:px-6">
              Built for scale and control — security guardrails, analytics and
              dedicated deployment support for organizations that can&apos;t
              afford surprises.
            </p>
          </PageBannerPanel>
        }
      >
        <PageBannerChecks items={bullets} />
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <BtnPrimary href="/contact">Talk to Enterprise →</BtnPrimary>
          <BtnGhost href="#compare">Compare plans</BtnGhost>
        </div>
      </PageBanner>

      {/* Feature grid */}
      <Section border alt id="enterprise-features">
        <SectionHeader
          center
          accent="violet"
          eyebrow="What Enterprise Unlocks"
          title="Control without the six-month delay."
          description="Security, support and scale — packaged so your legal and ops teams can say yes faster."
        />
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <MotionItem key={f.title}>
              <Card className="h-full">
                <span className="ai-num-glow font-mono text-xs font-semibold text-violet">
                  {f.num}
                </span>
                <h3 className="mt-4 font-semibold text-text">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {f.desc}
                </p>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </Section>

      {/* Compare table */}
      <Section id="compare">
        <SectionHeader
          center
          accent="accent"
          eyebrow="Standard vs Enterprise"
          title="See what changes when you scale."
          description="Keep the same agent stack — add the controls, contracts and support your org already requires."
        />
        <FadeUp>
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[480px] overflow-hidden rounded-2xl border border-line bg-panel/30 sm:min-w-0">
            <div className="grid grid-cols-[1fr_72px_88px] gap-2 border-b border-line bg-panel/60 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-text-dimmer sm:grid-cols-[1fr_90px_100px] sm:gap-4 sm:text-xs">
              <span />
              <span className="text-center">Standard</span>
              <span className="text-center text-accent">Enterprise</span>
            </div>
            {compareRows.map((group) => (
              <div key={group.group}>
                <div className="bg-bg-alt px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-violet">
                  {group.group}
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_72px_88px] gap-2 border-t border-line px-4 py-3 text-sm sm:grid-cols-[1fr_90px_100px] sm:gap-4"
                  >
                    <span className="min-w-0 pr-2 text-text-dim">{row.label}</span>
                    <span
                      className={`text-center ${
                        row.std ? "text-accent" : "text-text-dimmer"
                      }`}
                    >
                      {row.std ? "✓" : "✕"}
                    </span>
                    <span className="text-center text-accent">✓</span>
                  </div>
                ))}
              </div>
            ))}
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
