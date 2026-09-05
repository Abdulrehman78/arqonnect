"use client";

import Link from "next/link";
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

const pulseItems = [
  "GEO / AEO guides",
  "Voice AI playbooks",
  "Missed-call recovery",
  "CRM sync notes",
  "AI search visibility",
  "Agency ops",
];

const posts = [
  {
    tag: "Voice AI",
    title: "Why humanoid voice agents convert better than IVR ever did",
    read: "6 min read",
    blurb: "Natural tone, live intent, and why callers stay on the line.",
  },
  {
    tag: "Cold Outreach",
    title: "The appointment-setting playbook we run for healthcare clients",
    read: "8 min read",
    blurb: "Scripts, timing, and the handoff that books the visit.",
  },
  {
    tag: "Automation",
    title: "Missed-call text-back: the $0 feature that saves six figures",
    read: "4 min read",
    blurb: "Seconds matter — how auto-SMS recovers leads overnight.",
  },
  {
    tag: "CRM",
    title: "One inbox for chat, SMS, DMs and voice — a build log",
    read: "7 min read",
    blurb: "What broke when channels stayed siloed, and how we fixed it.",
  },
  {
    tag: "AI Search",
    title: "SEO isn't dead — but AEO and GEO just moved in next door",
    read: "9 min read",
    blurb: "Getting cited by ChatGPT, Perplexity, and AI Overviews.",
  },
  {
    tag: "Consultancy",
    title: "What we tell every client in week one, before touching a tool",
    read: "5 min read",
    blurb: "Scope first, software second — the intake that prevents rework.",
  },
];

const topics = [
  {
    label: "GEO / AEO",
    desc: "Show up when AI answers, not just classic search.",
  },
  {
    label: "Voice & chat",
    desc: "Playbooks from agents that actually book.",
  },
  {
    label: "Ops & CRM",
    desc: "One record across every inbound channel.",
  },
];

const library = [
  "Guides on AI search visibility (GEO/AEO)",
  "Straight answers to common objections",
  "Updated as the industry moves",
];

export default function Blog() {
  return (
    <>
      <PageBanner
        id="resources"
        banner="resources"
        minHeight="min-h-[88vh]"
        eyebrow="Insights & News"
        title="Guides, insight,"
        titleMuted="and straight answers."
        description="Industry breakdowns and the FAQ we actually get asked — no gated whitepapers, just the answers. What we're learning building AI agents that book appointments — and what's moving in AI search."
        aside={
          <PageBannerPanel>
            <div className="flex items-center justify-between border-b border-glass px-5 py-4">
              <div>
                <div className="room-heading text-sm font-semibold">
                  Resource library
                </div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-accent/90">
                  What you&apos;ll find here
                </div>
              </div>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Free
              </span>
            </div>
            <div className="divide-y divide-glass">
              {topics.map((t, i) => (
                <div
                  key={t.label}
                  className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-glass-hover"
                >
                  <span className="mt-0.5 font-mono text-xs text-accent/70">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="room-heading text-sm font-semibold">
                      {t.label}
                    </div>
                    <p className="room-caption mt-1 text-xs leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-glass bg-accent/5 px-5 py-4">
              <p className="room-caption text-xs leading-relaxed">
                New pieces as the industry moves — voice, CRM, and AI search
                visibility in one place.
              </p>
            </div>
          </PageBannerPanel>
        }
      >
        <PageBannerChecks items={library} className="max-w-xl" />
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <BtnPrimary href="#insights">Browse insights →</BtnPrimary>
          <BtnGhost href="#faq">Jump to FAQ</BtnGhost>
        </div>
      </PageBanner>

      {/* Pulse ticker */}
      <div className="border-y border-gold/15 bg-bg-alt py-4">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 px-6">
            {[...pulseItems, ...pulseItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-gold/55"
              >
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Insights grid */}
      <Section id="insights">
        <SectionHeader
          accent="amber"
          eyebrow="From The Build Log"
          title={
            <>
              What breaks first, and how
              <br />
              we fixed it
            </>
          }
          description="What we're learning building AI agents that actually book appointments — and what's moving in AI search."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <a
              href="#faq"
              className="group relative block h-full overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 via-panel/50 to-panel/30 p-8 no-underline transition-all hover:border-gold/45 md:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-opacity group-hover:opacity-80" />
              <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                Featured
              </span>
              <h3 className="relative mt-5 text-2xl font-bold tracking-tight text-text md:text-3xl">
                We stopped selling software. Here&apos;s why that changed
                everything.
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-text-dim md:text-base">
                The moment we reframed the product from &ldquo;a CRM you
                configure&rdquo; to &ldquo;an agent that works the lead,&rdquo;
                close rates on our own demos doubled — the story of the pivot,
                and what it means for how you should be evaluating any AI vendor.
              </p>
              <div className="relative mt-8 flex items-center justify-between text-sm text-gold">
                <span>10 min read</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          </FadeUp>

          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {posts.slice(0, 3).map((p) => (
              <MotionItem key={p.title}>
                <a
                  href="#faq"
                  className="group block rounded-2xl border border-line bg-panel/40 p-5 no-underline transition-all hover:border-gold/30 hover:bg-panel/70"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-gold/80">
                    {p.tag}
                  </span>
                  <h4 className="mt-2 font-semibold leading-snug text-text">
                    {p.title}
                  </h4>
                  <div className="mt-4 flex items-center justify-between text-xs text-text-dimmer">
                    <span>{p.read}</span>
                    <span className="text-gold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </MotionItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(3).map((p) => (
            <MotionItem key={p.title}>
              <Card className="group h-full border-line bg-panel/40 transition-all hover:border-gold/30 hover:bg-panel/70">
                <a href="#faq" className="block h-full no-underline">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-gold/80">
                    {p.tag}
                  </span>
                  <h4 className="mt-3 text-base font-semibold leading-snug text-text">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-text-dimmer">
                    <span>{p.read}</span>
                    <span className="text-gold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </Section>

      {/* Topic lanes */}
      <Section alt border id="topics">
        <SectionHeader
          center
          accent="amber"
          eyebrow="Browse By Lane"
          title="Pick a thread. Skip the noise."
          description="Short paths into the topics teams ask about most — voice, search visibility, and the ops layer underneath."
        />

        <Stagger className="grid gap-4 md:grid-cols-3">
          {topics.map((t, i) => (
            <MotionItem key={t.label}>
              <a
                href="#insights"
                className="group block h-full rounded-2xl border border-gold/15 bg-panel/40 p-6 no-underline transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                <span className="font-mono text-xs text-gold/60">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {t.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {t.desc}
                </p>
                <span className="mt-5 inline-block text-sm text-gold transition-transform group-hover:translate-x-1">
                  Explore →
                </span>
              </a>
            </MotionItem>
          ))}
        </Stagger>
      </Section>

      {/* Newsletter */}
      <Section id="newsletter">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-panel/80 via-panel/50 to-gold/5 p-8 shadow-[0_0_80px_rgba(234,164,107,0.08)] md:p-12">
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  Stay In The Loop
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl">
                  Most agency emails aren&apos;t
                  <br />
                  worth opening. This one is.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">
                  One email a month — what we&apos;re building, what&apos;s
                  converting, and what to skip. No spam, ever.
                </p>
              </div>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="flex-1 rounded-full border border-line bg-bg px-5 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-gold/50"
                />
                <button
                  type="submit"
                  className="ai-cta-shine inline-flex shrink-0 items-center justify-center rounded-full bg-[#EAA46B] px-6 py-3 text-sm font-semibold text-[#0B0F12] transition-all hover:bg-[#C87D46]"
                >
                  Subscribe →
                </button>
              </form>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* CTA */}
      <Section alt border>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="ai-title text-3xl font-bold tracking-tight text-text md:text-4xl">
              Prefer a conversation over a post?
              <span className="ai-title-line mx-auto" />
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-text-dim">
              Bring your stack questions — we&apos;ll map voice, CRM, and AI
              search to what you actually need next.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BtnPrimary href="/contact">Book a Demo →</BtnPrimary>
              <BtnGhost href="/pricing">See pricing</BtnGhost>
            </div>
            <p className="mt-6 text-sm text-text-dimmer">
              Or skim the{" "}
              <Link
                href="#faq"
                className="text-gold no-underline hover:underline"
              >
                FAQ
              </Link>{" "}
              first.
            </p>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
