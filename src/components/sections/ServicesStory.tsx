"use client";

import type { ReactNode } from "react";
import ScrollFadeSections from "@/components/ui/ScrollFadeSections";
import Threshold from "@/components/sections/Threshold";

type Scene = {
  key: string;
  accent: string;
  accentRgb: string;
  reel: string;
  title: ReactNode;
  body: string;
  tags: string[];
  live?: string;
  image: string;
  imageAlt: string;
  index: string;
};

const scenes: Scene[] = [
  {
    key: "crm",
    accent: "#5c7fe0",
    accentRgb: "92,127,224",
    reel: "REEL 01 — MISSION CONTROL",
    title: (
      <>
        Every lead,
        <br />
        <i>one home.</i>
      </>
    ),
    body: "Chat, call, text or DM — every conversation lands in the same room, tracked from first hello to signed deal.",
    tags: ["Pipelines", "AI Recap", "Reporting"],
    live: "Live CRM feed",
    image: "/media/img_7.webp",
    imageAlt: "CRM dashboard preview",
    index: "01",
  },
  {
    key: "voice",
    accent: "#d98a3d",
    accentRgb: "217,138,61",
    reel: "REEL 02 — THE VOICE ROOM",
    title: (
      <>
        Pick up on
        <br />
        the <i>first ring.</i>
      </>
    ),
    body: "A voice so human they forget it's AI — qualifying, answering, booking the appointment while you sleep.",
    tags: ["Real-time speech", "Booking", "24/7"],
    live: "Live call",
    image: "/media/img_1.webp",
    imageAlt: "Voice AI preview",
    index: "02",
  },
  {
    key: "web",
    accent: "#2f8fd9",
    accentRgb: "47,143,217",
    reel: "REEL 03 — THE FRONT DOOR",
    title: (
      <>
        First impressions,
        <br />
        <i>engineered.</i>
      </>
    ),
    body: "Landing pages and funnels built to turn a click into a client — live in days, wired straight into your CRM.",
    tags: ["Landing pages", "Funnels", "No-code"],
    live: "Live funnel",
    image: "/media/img_2.webp",
    imageAlt: "Landing page and funnel preview",
    index: "03",
  },
  {
    key: "webinar",
    accent: "#8a4fd9",
    accentRgb: "138,79,217",
    reel: "REEL 04 — CENTER STAGE",
    title: (
      <>
        The pitch that
        <br />
        <i>plays itself.</i>
      </>
    ),
    body: "Live or evergreen replay, registration to reminder to close — sequenced so the room is always full.",
    tags: ["Evergreen", "Live", "Replay"],
    live: "Live webinar",
    image: "/media/img_4.webp",
    imageAlt: "Webinar stage preview",
    index: "04",
  },
  {
    key: "chat",
    accent: "#1fb8a8",
    accentRgb: "31,184,168",
    reel: "REEL 05 — THE CHAT ROOM",
    title: (
      <>
        Never leave them
        <br />
        <i>on read.</i>
      </>
    ),
    body: "A humanoid chatbot on your site answers, qualifies and hands off a booked meeting — any hour, every time.",
    tags: ["Website chat", "Lead capture", "Instant reply"],
    live: "Live chat",
    image: "/media/img_3.webp",
    imageAlt: "Chat widget preview",
    index: "05",
  },
  {
    key: "calltrack",
    accent: "#2f9e6e",
    accentRgb: "47,158,110",
    reel: "REEL 06 — THE RECORD ROOM",
    title: (
      <>
        Know which call
        <br />
        <i>made you money.</i>
      </>
    ),
    body: "Every ring recorded, tagged and traced straight back to the ad, page or campaign that earned it.",
    tags: ["Attribution", "Recording", "Source tags"],
    live: "Call tracking",
    image: "/media/img_5.webp",
    imageAlt: "Call tracking preview",
    index: "06",
  },
  {
    key: "sms",
    accent: "#d94f8a",
    accentRgb: "217,79,138",
    reel: "REEL 07 — THE MAILROOM",
    title: (
      <>
        One inbox.
        <br />
        <i>Every platform.</i>
      </>
    ),
    body: "Texts, Instagram and Facebook DMs land in one place — answered instantly, no app-hopping required.",
    tags: ["2-way SMS", "Instagram", "Facebook"],
    live: "Unified inbox",
    image: "/media/img_6.webp",
    imageAlt: "SMS and social inbox preview",
    index: "07",
  },
  {
    key: "planner",
    accent: "#d97a2f",
    accentRgb: "217,122,47",
    reel: "REEL 08 — THE STUDIO",
    title: (
      <>
        Post once,
        <br />
        <i>show up everywhere.</i>
      </>
    ),
    body: "Plan, approve and publish across every channel from one calendar — the same update, five fewer tabs.",
    tags: ["Scheduling", "Multi-platform", "Approvals"],
    live: "Content calendar",
    image: "/media/img_2.webp",
    imageAlt: "Social planner preview",
    index: "08",
  },
  {
    key: "missedcall",
    accent: "#c23b3b",
    accentRgb: "194,59,59",
    reel: "REEL 09 — THE SAFETY NET",
    title: (
      <>
        The lead you
        <br />
        <i>didn&apos;t lose.</i>
      </>
    ),
    body: "Miss the call, still win the client — a text goes out within seconds, keeping the conversation alive.",
    tags: ["Instant text", "Zero missed leads"],
    live: "Missed-call text-back",
    image: "/media/img_1.webp",
    imageAlt: "Missed call recovery preview",
    index: "09",
  },
  {
    key: "ads",
    accent: "#cda86a",
    accentRgb: "205,168,106",
    reel: "REEL 10 — THE SPOTLIGHT",
    title: (
      <>
        Every dollar,
        <br />
        <i>accounted for.</i>
      </>
    ),
    body: "Google, Meta and Instagram campaigns built, launched and reported next to the leads they actually created.",
    tags: ["Google", "Meta", "Reporting"],
    live: "Ad performance",
    image: "/media/img_7.webp",
    imageAlt: "Ads reporting preview",
    index: "10",
  },
  {
    key: "social",
    accent: "#b34fd9",
    accentRgb: "179,79,217",
    reel: "REEL 11 — THE BROADCAST ROOM",
    title: (
      <>
        Content that shows up,
        <br />
        <i>on schedule.</i>
      </>
    ),
    body: "Posts, captions and creative planned and published across every platform — built to grow the feed, not just fill it.",
    tags: ["Content", "Organic growth", "Multi-channel"],
    live: "Social feed",
    image: "/media/img_4.webp",
    imageAlt: "Social content preview",
    index: "11",
  },
  {
    key: "seo",
    accent: "#3fae7a",
    accentRgb: "63,174,122",
    reel: "REEL 12 — THE MAP ROOM",
    title: (
      <>
        Found first,
        <br />
        <i>ranked right.</i>
      </>
    ),
    body: "On-page fixes, local listings and keyword targeting that move you up the map and the search results both.",
    tags: ["Local SEO", "Keywords", "Google Maps"],
    live: "Local SEO",
    image: "/media/img_5.webp",
    imageAlt: "SEO and maps preview",
    index: "12",
  },
  {
    key: "email",
    accent: "#3f6fd9",
    accentRgb: "63,111,217",
    reel: "REEL 13 — THE LETTER ROOM",
    title: (
      <>
        The inbox,
        <br />
        <i>still open.</i>
      </>
    ),
    body: "Sequences, newsletters and win-back campaigns that land, get opened, and keep the pipeline warm.",
    tags: ["Sequences", "Newsletters", "Automation"],
    live: "Email sequences",
    image: "/media/img_3.webp",
    imageAlt: "Email campaign preview",
    index: "13",
  },
  {
    key: "reputation",
    accent: "#d98f9e",
    accentRgb: "217,143,158",
    reel: "REEL 14 — THE HALL OF MIRRORS",
    title: (
      <>
        What they say,
        <br />
        <i>when you&apos;re not in the room.</i>
      </>
    ),
    body: "Review requests, ratings and listings tracked and nudged automatically — so the reputation matches the work.",
    tags: ["Reviews", "Listings", "Auto-requests"],
    live: "Reputation pulse",
    image: "/media/img_6.webp",
    imageAlt: "Reputation and reviews preview",
    index: "14",
  },
];

function SceneSlide({ scene, reverse }: { scene: Scene; reverse?: boolean }) {
  const { accent, accentRgb, reel, title, body, tags, live, image, imageAlt, index, key } =
    scene;

  return (
    <div className="scene scene-slide" data-key={key}>
      <div className="scene-mask">
        <div
          className="scene-bg"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 30%, rgba(${accentRgb},0.45) 0%, transparent 58%),radial-gradient(ellipse 80% 50% at 80% 75%, rgba(${accentRgb},0.22) 0%, transparent 65%),radial-gradient(ellipse 90% 55% at 15% 90%, rgba(${accentRgb},0.18) 0%, transparent 70%),radial-gradient(ellipse 100% 40% at 50% 100%, rgba(${accentRgb},0.12) 0%, transparent 55%),linear-gradient(180deg,#0a0a0c 0%,#020203 100%)`,
          }}
        />
        <div
          className="scene-particles"
          style={{
            backgroundImage: `radial-gradient(rgba(${accentRgb},0.5) 1px, transparent 1.4px)`,
            backgroundSize: "38px 38px",
          }}
        />
        <div className="scene-scrim" />
      </div>
      <div className={`scene-content${reverse ? " reverse" : ""}`}>
        <div className="scene-copy">
          <div className="scene-index-label" style={{ color: accent }}>
            {reel}
          </div>
          <h3>{title}</h3>
          <p>{body}</p>
          <div className="scene-tags">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  borderColor: `rgba(${accentRgb},0.35)`,
                  color: accent,
                  background: `rgba(${accentRgb},0.08)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="scene-side">
          <div
            className="scene-media-glow"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(${accentRgb},0.45), transparent 70%)`,
            }}
          />
          <div
            className="scene-media"
            style={{
              borderColor: `rgba(${accentRgb},0.35)`,
              boxShadow: `0 40px 90px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(${accentRgb},0.15)`,
            }}
          >
            <div className="scene-media-bar">
              <span />
              <span />
              <span />
            </div>
            {live && (
              <div className="scene-live">
                <span className="dot" />
                {live}
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt} />
            <div
              className="scene-media-fade"
              style={{
                background: `linear-gradient(180deg, transparent 40%, rgba(${accentRgb},0.12) 100%)`,
              }}
            />
          </div>
          <div className="scene-panel-count" style={{ color: `rgba(${accentRgb},0.7)` }}>
            <b style={{ color: "#fdfaf4" }}>{index}</b>/ 14
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesStory() {
  return (
    <ScrollFadeSections id="services">
      <Threshold embedded fullscreenSlide />
      {scenes.map((scene, i) => (
        <SceneSlide key={scene.key} scene={scene} reverse={i % 2 === 1} />
      ))}
    </ScrollFadeSections>
  );
}
