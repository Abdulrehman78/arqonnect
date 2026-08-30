"use client";

import { Section, SectionHeader, Card } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

const notes = [
  {
    num: "01",
    title: "Scoped by design",
    desc: "Every agent only knows what it's trained on — nothing improvised, nothing off-script.",
  },
  {
    num: "02",
    title: "Graceful redirects",
    desc: "Blocked requests don't dead-end the conversation — they route to what the agent can do.",
  },
  {
    num: "03",
    title: "Logged, every time",
    desc: "Every trigger is recorded in your CRM so you can see exactly what got flagged and why.",
  },
];

export default function Guard() {
  return (
    <Section border alt id="guard">
      <SectionHeader
        eyebrow="Safety, Live"
        title={
          <>
            Agents that know
            <br />
            what they shouldn&apos;t answer.
          </>
        }
        description="Every agent ships with guardrails on day one — watch one catch an out-of-scope request in real time."
        accent="violet"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeUp>
          <Card className="overflow-hidden p-0">
            <div className="flex gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="space-y-4 p-5">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-panel-2 px-4 py-3 text-sm text-text-dim">
                Hey, can you also tell me the best stock to invest in right now?
              </div>
              <div className="flex gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <span className="ai-block-pulse font-mono text-xs font-semibold text-red-400">
                  BLOCK
                </span>
                <div>
                  <b className="text-sm text-text">Guardrail triggered</b>
                  <span className="block text-xs text-text-dim">
                    Out-of-scope request — financial advice
                  </span>
                </div>
              </div>
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-line bg-panel/60 px-4 py-3 text-sm text-text-dim">
                I can&apos;t give investment advice, but I can help you book a
                call with the team, check your account, or answer anything about
                our services. Want me to do one of those?
              </div>
            </div>
          </Card>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="space-y-4">
            {notes.map((n) => (
              <div
                key={n.num}
                className="motion-card flex gap-4 rounded-xl border border-line bg-panel/40 p-5"
              >
                <span className="ai-num-glow font-mono text-xs font-semibold text-violet">
                  {n.num}
                </span>
                <div>
                  <b className="text-text">{n.title}</b>
                  <p className="mt-1 text-sm leading-relaxed text-text-dim">
                    {n.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
