"use client";

import { motion } from "framer-motion";
import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";

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
      {/* Hero */}
      <section
        id="enterprise"
        className="relative flex min-h-[78vh] items-center overflow-hidden bg-bg pt-28 pb-16"
      >
        <InteractiveBackdrop theme="enterprise" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <span className="inline-flex rounded-sm border border-sky-400/30 bg-sky-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Built For Enterprises
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
              The bigger you get,
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-200 bg-clip-text text-transparent">
                the less it should worry you.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
              Everything a growing team needs to deploy AI agents without a
              security review turning into a six-month delay.
            </p>

            <ul className="mt-6 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-text-dim">
                  <span className="text-sky-300">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <BtnPrimary href="/contact">Talk to Enterprise →</BtnPrimary>
              <BtnGhost href="#compare">Compare plans</BtnGhost>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-sky-400/20 bg-panel/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <div className="text-sm font-semibold text-text">
                    Enterprise control plane
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-sky-300">
                    SSO · RBAC · GUARDRAILS · LIVE
                  </div>
                </div>
                <span className="rounded-sm border border-sky-400/30 bg-sky-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-sky-300">
                  ENT
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Uptime SLA", value: "99.9%" },
                  { label: "First agent live", value: "< 7 days" },
                  { label: "Support", value: "24/7" },
                  { label: "Access", value: "SSO + RBAC" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line bg-bg/50 p-4"
                  >
                    <div className="text-xs text-text-dimmer">{stat.label}</div>
                    <div className="mt-1 text-lg font-bold text-text">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-text-dimmer">
                Built for scale and control — security guardrails, analytics and
                dedicated deployment support for organizations that can&apos;t
                afford surprises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                <span className="font-mono text-xs font-semibold text-violet">
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
