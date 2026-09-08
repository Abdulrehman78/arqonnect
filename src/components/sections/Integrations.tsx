"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import ZoomBackdrop from "@/components/ui/ZoomBackdrop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ROOM_VEIL } from "@/lib/brand";

const channels = [
  { title: "Voice", body: "Take the call, qualify, book.", tag: "Inbound · Outbound" },
  { title: "Chat", body: "Win before they hang up.", tag: "Web · In-app" },
  { title: "CRM", body: "One live lead record.", tag: "HubSpot · Salesforce" },
  { title: "SMS & Social", body: "Missed calls become text-backs.", tag: "WhatsApp · DMs" },
];

/** Channels — slim horizontal rail with scrub motion. */
export default function Integrations(): ReactElement {
  return (
    <section className="story-channels relative min-h-[100dvh] overflow-hidden border-b border-line bg-bg-alt">
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
            Chat, voice, CRM and growth — all pointed at one job: don&apos;t let the lead go quiet.
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
              <span className="story-channel-tag">{c.tag}</span>
            </article>
          ))}
        </div>

        <div className="story-foot" data-reveal>
          <span>
            <em>4</em> channels · <em>1</em> lead record
          </span>
          <Link href="/crm">See CRM integrations →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
