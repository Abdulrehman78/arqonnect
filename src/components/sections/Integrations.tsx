"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ROOM_VEIL } from "@/lib/brand";

const channels = [
  {
    title: "Voice",
    body: "Human-like AI agents that handle conversations, qualify leads, answer questions, and book appointments.",
    tags: [
      "Inbound & Outbound",
      "Smart IVR",
      "Lead Qualification",
      "Appointment Booking",
      "Automated Follow-ups",
      "Multilingual Support",
    ],
  },
  {
    title: "Chat",
    body: "Intelligent, context-aware conversations that engage customers and turn interactions into opportunities.",
    tags: [
      "Web & In-App Chat",
      "WhatsApp, Instagram & Messenger",
      "Intent Detection",
      "7-Language Support",
      "Image Understanding",
      "Typing Indicators",
      "Instant Human Handoff",
    ],
  },
  {
    title: "CRM & Leads",
    body: "Capture, qualify, and manage every lead with seamless CRM connectivity and automated workflows.",
    tags: [
      "Two-Way CRM Integration",
      "Embeddable Lead Forms",
      "Guest-to-Lead Conversion",
      "Pipeline & Contact Tracking",
      "Appointment Confirmations",
      "Sales-Team Notifications",
      "Email Automation",
    ],
  },
  {
    title: "Automation & Control",
    body: "Give your AI Twin the tools to continuously improve, adapt, and operate without constant intervention.",
    tags: [
      "Prompt Management",
      "Versioning & Rollbacks",
      "Knowledge-Based AI (RAG)",
      "Real-Time Calendar Sync",
      "Automated Follow-ups",
      "Confidence-Based Escalation",
      "Multi-Tenant Architecture",
    ],
  },
  {
    title: "Social & Messaging",
    body: "One AI. Every customer conversation — WhatsApp, Instagram, Messenger, SMS, and social DMs.",
    tags: ["WhatsApp", "Instagram", "Messenger", "SMS", "Social DMs", "Automated · 24/7"],
  },
  {
    title: "Documentation & Security",
    body: "Built for reliable deployment with clear architecture, security, and technical documentation.",
    tags: [
      "Architecture Overview",
      "ERD & API Documentation",
      "AI & Security Summary",
      "Decision Log",
      "Production-Ready Delivery",
    ],
  },
];

/** Channels — capability grid for the AI Twin stack. */
export default function Integrations(): ReactElement {
  return (
    <section className="story-room story-channels relative overflow-hidden border-b border-line bg-bg-alt">
      <ZoomBackdrop
        src="/images/markets-banner.jpg"
        position="55% center"
        delaySec={24}
        quiet
        veil={ROOM_VEIL}
      />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            Channels
          </p>
          <h2 className="story-heading">
            True omni-channel
            <span>communication.</span>
          </h2>
          <p className="story-lead">
            Voice, chat, CRM, automation and messaging — all pointed at one job: don&apos;t let the
            lead go quiet.
          </p>
        </header>

        <div className="story-channel-rail">
          {channels.map((c, i) => (
            <article
              key={c.title}
              className="story-channel"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <span className="story-channel-index">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="story-channel-tags">
                {c.tags.map((tag) => (
                  <span key={tag} className="story-channel-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="story-foot" data-reveal>
          <span>
            <em>6</em> capability rooms · <em>1</em> AI twin
          </span>
          <Link href="/crm">See CRM integrations →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
