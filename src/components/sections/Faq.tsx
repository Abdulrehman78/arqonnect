"use client";

import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

type FaqItem = { q: string; a: string };
type FaqGroup = { label: string; items: FaqItem[] };

const faqGroups: FaqGroup[] = [
  {
    label: "About ArQonnect",
    items: [
      {
        q: "What is ArQonnect?",
        a: "ArQonnect doesn't sell software — we build AI employees. Humanoid AI chatbots and voice agents that answer every call, win every chat, and book the appointment on the spot, backed by CRM, growth marketing and AI search visibility (SEO/AEO/GEO/AIO). If a lead reaches you, it doesn't leave without a next step.",
      },
      {
        q: "What industries and markets does ArQonnect work with?",
        a: "We work primarily with service businesses, agencies and growing enterprises — healthcare, real estate, law firms, education, ecommerce, finance and SaaS — across the US, UK, Canada, Australia and Europe, with voice and chat tuned to each market's tone.",
      },
      {
        q: "How is ArQonnect different from a regular software vendor?",
        a: "Most vendors hand you a login and leave you to configure it. ArQonnect designs, trains and manages the AI agent for you, so it's working from day one instead of sitting half set up in a dashboard nobody has time for.",
      },
    ],
  },
  {
    label: "Agentic AI",
    items: [
      {
        q: "What is an AI agent?",
        a: "An AI agent is software that can hold a real conversation, make decisions and complete a task — like booking an appointment or answering a support question — without a human directing every step. ArQonnect's agents handle calls, chats, texts and DMs this way.",
      },
      {
        q: "What is agentic AI, and how is it different from a chatbot?",
        a: "A traditional chatbot follows a fixed script. Agentic AI understands intent, asks clarifying questions, checks your calendar or CRM, and takes action — like booking a slot or updating a record — on its own, within the rules you set.",
      },
      {
        q: "Does ArQonnect's voice AI actually sound human?",
        a: "Yes — it's a humanoid AI voice agent built to sound natural in a live phone conversation, not scripted IVR. It listens, responds and adapts in real time. Try it yourself in the live demo above the fold.",
      },
      {
        q: "Can the AI agent make mistakes?",
        a: "Like any system, it can — which is why every agent is scoped to a clear set of tasks (booking, qualifying, answering FAQs) and hands off to a human for anything outside that scope, logged in your CRM either way.",
      },
    ],
  },
  {
    label: "Business Leads & Conversion",
    items: [
      {
        q: "How does ArQonnect help generate business leads?",
        a: "Voice and chat agents capture every inbound call, message and form fill the moment it happens, qualify the lead, and either book them directly or route them to your team — so fewer leads go cold waiting on a callback.",
      },
      {
        q: "What happens when my business misses a call?",
        a: "A missed call automatically triggers a text back within seconds, keeping the conversation open instead of losing the lead to voicemail — this alone recovers leads most businesses are currently losing.",
      },
      {
        q: "How fast do leads actually get a response?",
        a: "Immediately. Chat and voice agents respond in real time, 24/7, so a lead who messages at 11pm gets answered at 11pm — not the next business morning.",
      },
      {
        q: "Can ArQonnect help my business show up in AI search results like ChatGPT, Perplexity or Google AI Overviews?",
        a: "Yes — that's what AEO, GEO and AIO cover. We structure your content and site so AI answer engines can find, understand and cite your business directly, not just rank you in classic search.",
      },
    ],
  },
  {
    label: "Pricing & Getting Started",
    items: [
      {
        q: "How much does ArQonnect cost?",
        a: "Plans start with a one-time setup and a flat monthly fee that typically replaces $1,600+ of separate CRM, funnel, SMS and reporting tools with one connected system — see the full side-by-side breakdown in the pricing section above.",
      },
      {
        q: "How fast can we actually launch?",
        a: "Most clients are live with their first voice agent or chatbot inside two weeks — CRM and the rest of the stack follow in the weeks after, module by module.",
      },
      {
        q: "Do we have to rip out our current CRM?",
        a: "No. We can run alongside what you have, or migrate you over fully — most agencies end up consolidating once they see everything in one place.",
      },
      {
        q: "What happens after the demo?",
        a: "We map your current stack, show exactly what ArQonnect replaces, and give you a fixed setup timeline before anything is signed.",
      },
    ],
  },
  {
    label: "AI Automation & Search Visibility",
    items: [
      {
        q: "What is an AI voice agent, and how is it different from a human receptionist?",
        a: "An AI voice agent answers every call instantly, works 24/7, and never takes a break — a human receptionist covers business hours and one call at a time. Most clients use AI voice agents for overflow and after-hours coverage, then route complex calls to a human.",
      },
      {
        q: "Does ArQonnect offer business process and workflow automation, not just chatbots?",
        a: "Yes. Beyond chatbots and voice agents, ArQonnect builds business process automation and workflow automation that connects your CRM, calendar, email and forms — so data moves between tools without manual entry.",
      },
      {
        q: "Can ArQonnect integrate with HubSpot or Salesforce?",
        a: "Yes — ArQonnect offers dedicated HubSpot CRM integration and Salesforce CRM integration, syncing every call, chat and lead directly into the CRM you already run, or migrating you to ArQonnect's built-in CRM.",
      },
      {
        q: "What's the difference between SEO, GEO and AEO?",
        a: "SEO ranks your site in classic search results. AEO (Answer Engine Optimization) structures content so voice assistants and answer engines can read it aloud or extract it directly. GEO (Generative Engine Optimization) gets your business cited inside AI-generated answers from tools like ChatGPT, Gemini and Perplexity. ArQonnect runs all three together.",
      },
      {
        q: "Does ArQonnect build websites and mobile apps, or only AI agents?",
        a: "Both. ArQonnect builds business websites, landing pages, and native iOS and Android apps — engineered with AI from spec to release, and wired into the same CRM and automation stack as your chatbot and voice agent.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <Section border id="faq" alt>
        <SectionHeader
          center
          accent="violet"
          eyebrow="Before You Ask"
          title={
            <>
              The objection you haven&apos;t
              <br />
              said out loud yet
            </>
          }
          description="Straight answers on ArQonnect, agentic AI, and how it turns into leads."
        />
        <FadeUp>
          <div className="mx-auto max-w-3xl space-y-10">
            {faqGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
                  {group.label}
                </div>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl border border-line bg-panel/40 open:border-violet/25 open:bg-panel/70"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-text marker:content-none [&::-webkit-details-marker]:hidden">
                        <span>{item.q}</span>
                        <span className="shrink-0 font-mono text-sm text-text-dimmer transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-text-dim">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan/10 via-transparent to-accent/5" />
        <FadeUp className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-dim">
            Book a demo and ask a specialist — same-week scheduling, real answers,
            no ticket queue.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-[0_0_32px_rgba(34,197,94,0.4)] no-underline"
            >
              Book a Demo →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-text backdrop-blur-sm transition-all hover:border-cyan/40 no-underline"
            >
              See pricing
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
