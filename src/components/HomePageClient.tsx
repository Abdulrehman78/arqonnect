"use client";

import LanguageRail from "@/components/ui/LanguageRail";
import HomeHorizontalScroll, {
  type HomePanel,
} from "@/components/ui/HomeHorizontalScroll";
import HomeStoryScroll from "@/components/ui/HomeStoryScroll";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import Hero from "@/components/sections/Hero";
import { HomeWorkIntro, HomeWorkSlide } from "@/components/sections/HomeWork";
import { WORK_CARDS } from "@/lib/workCards";
import { HOME_PANEL_META, HOME_STORY_META } from "@/lib/homePanels";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsStrip from "@/components/sections/StatsStrip";
import FeaturesBento from "@/components/sections/FeaturesBento";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import HomeFinalCta from "@/components/HomeFinalCta";

const SERVICE_TICKER = [
  "Voice AI",
  "Chat Agents",
  "CRM Sync",
  "SMS & Social",
  "Funnels",
  "SEO / AEO",
  "24/7 Coverage",
];

const MARKET_TICKER = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Europe",
  "Pakistan",
  "Healthcare",
  "Real Estate",
  "E-Commerce",
];

function buildWorkPanels(): HomePanel[] {
  const meta = Object.fromEntries(HOME_PANEL_META.map((m) => [m.id, m]));
  const workSlides = WORK_CARDS.map((card, i) => ({
    meta: meta[card.id],
    node: <HomeWorkSlide key={card.id} card={card} low={i % 2 === 1} />,
  }));

  return [
    { meta: meta.hero, node: <Hero /> },
    { meta: meta["work-intro"], node: <HomeWorkIntro /> },
    ...workSlides,
  ];
}

function buildStoryChapters() {
  const meta = Object.fromEntries(HOME_STORY_META.map((m) => [m.id, m]));
  return [
    { meta: meta.markets, node: <LogoCloud /> },
    { meta: meta.stats, node: <StatsStrip /> },
    { meta: meta.platform, node: <FeaturesBento /> },
    { meta: meta.channels, node: <Integrations /> },
    { meta: meta.proof, node: <Testimonials /> },
    { meta: meta.cta, node: <HomeFinalCta /> },
  ];
}

export default function HomePageClient() {
  return (
    <>
      <LanguageRail />
      <HomeHorizontalScroll panels={buildWorkPanels()} runwayPerPanel={1.2} />
      <InfiniteMarquee items={SERVICE_TICKER} speedSec={28} />
      <HomeStoryScroll chapters={buildStoryChapters()} />
      <InfiniteMarquee items={MARKET_TICKER} speedSec={36} />
    </>
  );
}
