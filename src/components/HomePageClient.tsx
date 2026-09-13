"use client";

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import HomeFinalCta from "@/components/HomeFinalCta";
import {
  HomeFilmCard,
  HomePitchIntro,
  PILLAR_CARDS,
  STAT_CARDS,
} from "@/components/sections/HomeFilmstrip";
import LanguageRail from "@/components/ui/LanguageRail";
import HomeHorizontalScroll, {
  type HomePanel,
} from "@/components/ui/HomeHorizontalScroll";
import HomeStoryScroll from "@/components/ui/HomeStoryScroll";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import RoomVideoBackdrop from "@/components/ui/RoomVideoBackdrop";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { HERO_VIDEO, MARKETS_VIDEO } from "@/lib/brand";
import { HOME_PANEL_META, HOME_STORY_META } from "@/lib/homePanels";
import { COMPARISON, VALUE } from "@/lib/siteContent";

const CHANNEL_TICKER = [
  "WhatsApp",
  "Instagram",
  "Messenger",
  "Web chat",
  "One inbox",
  "Human handoff",
  "Approved knowledge",
  "Appointment booking",
];

const VALUE_TICKER = [
  "Instant replies, 24/7",
  "No invented facts",
  "Human handoff built in",
  "Booked appointments from chat",
  "Six languages",
  "One audit-ready history",
];

function ComparisonSection() {
  return (
    <section className="story-room story-proof relative overflow-hidden border-b border-line bg-bg-alt">
      <RoomVideoBackdrop src={MARKETS_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" quiet />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {COMPARISON.eyebrow}
          </p>
          <h2 className="story-heading">
            Every unanswered message
            <span>is a customer choosing someone else.</span>
          </h2>
        </header>
        <div className="mt-10 grid gap-8 lg:grid-cols-2" data-reveal>
          <div className="story-channel">
            <h3>{COMPARISON.withoutTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-dim">
              {COMPARISON.without.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-[#c45c5c]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="story-channel">
            <h3>{COMPARISON.withTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-dim">
              {COMPARISON.with.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="story-room story-markets relative overflow-hidden border-b border-line bg-bg">
      <RoomVideoBackdrop src={HERO_VIDEO} />
      <SchemeOverlay className="z-[1]" intensity="room" quiet />
      <RevealOnScroll className="story-chapter-inner relative z-10">
        <header className="story-chapter-header">
          <p className="story-kicker">
            <span className="ai-live-dot" />
            {VALUE.eyebrow}
          </p>
          <h2 className="story-heading">
            What clients get
            <span>in plain language.</span>
          </h2>
        </header>
        <div className="story-channel-rail">
          {VALUE.items.map((item, i) => (
            <article
              key={item.title}
              className="story-channel"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="story-foot" data-reveal>
          <span>
            <em>4</em> channels · <em>7</em> languages · <em>1</em> inbox
          </span>
          <Link href="/services">See services →</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function buildFilmPanels(): HomePanel[] {
  const meta = Object.fromEntries(HOME_PANEL_META.map((m) => [m.id, m]));
  return [
    { meta: meta.hero, node: <Hero /> },
    { meta: meta.pitch, node: <HomePitchIntro /> },
    {
      meta: meta.converse,
      node: <HomeFilmCard card={PILLAR_CARDS[0]} />,
    },
    {
      meta: meta.coordinate,
      node: <HomeFilmCard card={PILLAR_CARDS[1]} low />,
    },
    {
      meta: meta.control,
      node: <HomeFilmCard card={PILLAR_CARDS[2]} />,
    },
    {
      meta: meta["stat-channels"],
      node: <HomeFilmCard card={STAT_CARDS[0]} low />,
    },
    {
      meta: meta["stat-languages"],
      node: <HomeFilmCard card={STAT_CARDS[1]} />,
    },
    {
      meta: meta["stat-coverage"],
      node: <HomeFilmCard card={STAT_CARDS[2]} low />,
    },
    {
      meta: meta["stat-truth"],
      node: <HomeFilmCard card={STAT_CARDS[3]} />,
    },
  ];
}

function buildStoryChapters() {
  const meta = Object.fromEntries(HOME_STORY_META.map((m) => [m.id, m]));
  return [
    { meta: meta.comparison, node: <ComparisonSection /> },
    { meta: meta.value, node: <ValueSection /> },
    { meta: meta.cta, node: <HomeFinalCta /> },
  ];
}

export default function HomePageClient() {
  return (
    <main aria-label="ArQonnect home">
      <LanguageRail />
      <HomeHorizontalScroll panels={buildFilmPanels()} runwayPerPanel={1.15} />
      <InfiniteMarquee items={CHANNEL_TICKER} speedSec={28} />
      <HomeStoryScroll chapters={buildStoryChapters()} label="Product story" />
      <InfiniteMarquee items={VALUE_TICKER} speedSec={36} />
    </main>
  );
}
