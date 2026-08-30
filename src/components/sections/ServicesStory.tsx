"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

type Service = {
  key: string;
  index: string;
  room: string;
  title: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    key: "crm",
    index: "01",
    room: "Mission Control",
    title: "Every lead, one home.",
    body: "Chat, call, text or DM — every conversation lands in the same room, tracked from first hello to signed deal.",
    tags: ["Pipelines", "AI Recap", "Reporting"],
    image: "/media/img_7.webp",
    imageAlt: "CRM dashboard preview",
  },
  {
    key: "voice",
    index: "02",
    room: "The Voice Room",
    title: "Pick up on the first ring.",
    body: "A voice so human they forget it's AI — qualifying, answering, booking the appointment while you sleep.",
    tags: ["Real-time speech", "Booking", "24/7"],
    image: "/media/img_1.webp",
    imageAlt: "Voice AI preview",
  },
  {
    key: "web",
    index: "03",
    room: "The Front Door",
    title: "First impressions, engineered.",
    body: "Landing pages and funnels built to turn a click into a client — live in days, wired straight into your CRM.",
    tags: ["Landing pages", "Funnels", "No-code"],
    image: "/media/img_2.webp",
    imageAlt: "Landing page and funnel preview",
  },
  {
    key: "webinar",
    index: "04",
    room: "Center Stage",
    title: "The pitch that plays itself.",
    body: "Live or evergreen replay, registration to reminder to close — sequenced so the room is always full.",
    tags: ["Evergreen", "Live", "Replay"],
    image: "/media/img_4.webp",
    imageAlt: "Webinar stage preview",
  },
  {
    key: "chat",
    index: "05",
    room: "The Chat Room",
    title: "Never leave them on read.",
    body: "A humanoid chatbot on your site answers, qualifies and hands off a booked meeting — any hour, every time.",
    tags: ["Website chat", "Lead capture", "Instant reply"],
    image: "/media/img_3.webp",
    imageAlt: "Chat widget preview",
  },
  {
    key: "calltrack",
    index: "06",
    room: "The Record Room",
    title: "Know which call made you money.",
    body: "Every ring recorded, tagged and traced straight back to the ad, page or campaign that earned it.",
    tags: ["Attribution", "Recording", "Source tags"],
    image: "/media/img_5.webp",
    imageAlt: "Call tracking preview",
  },
  {
    key: "sms",
    index: "07",
    room: "The Mailroom",
    title: "One inbox. Every platform.",
    body: "Texts, Instagram and Facebook DMs land in one place — answered instantly, no app-hopping required.",
    tags: ["2-way SMS", "Instagram", "Facebook"],
    image: "/media/img_6.webp",
    imageAlt: "SMS and social inbox preview",
  },
  {
    key: "planner",
    index: "08",
    room: "The Studio",
    title: "Post once, show up everywhere.",
    body: "Plan, approve and publish across every channel from one calendar — the same update, five fewer tabs.",
    tags: ["Scheduling", "Multi-platform", "Approvals"],
    image: "/media/img_2.webp",
    imageAlt: "Social planner preview",
  },
  {
    key: "missedcall",
    index: "09",
    room: "The Safety Net",
    title: "The lead you didn't lose.",
    body: "Miss the call, still win the client — a text goes out within seconds, keeping the conversation alive.",
    tags: ["Instant text", "Zero missed leads"],
    image: "/media/img_1.webp",
    imageAlt: "Missed call recovery preview",
  },
  {
    key: "ads",
    index: "10",
    room: "The Spotlight",
    title: "Every dollar, accounted for.",
    body: "Google, Meta and Instagram campaigns built, launched and reported next to the leads they actually created.",
    tags: ["Google", "Meta", "Reporting"],
    image: "/media/img_7.webp",
    imageAlt: "Ads reporting preview",
  },
  {
    key: "social",
    index: "11",
    room: "The Broadcast Room",
    title: "Content that shows up, on schedule.",
    body: "Posts, captions and creative planned and published across every platform — built to grow the feed, not just fill it.",
    tags: ["Content", "Organic growth", "Multi-channel"],
    image: "/media/img_4.webp",
    imageAlt: "Social content preview",
  },
  {
    key: "seo",
    index: "12",
    room: "The Map Room",
    title: "Found first, ranked right.",
    body: "On-page fixes, local listings and keyword targeting that move you up the map and the search results both.",
    tags: ["Local SEO", "Keywords", "Google Maps"],
    image: "/media/img_5.webp",
    imageAlt: "SEO and maps preview",
  },
  {
    key: "email",
    index: "13",
    room: "The Letter Room",
    title: "The inbox, still open.",
    body: "Sequences, newsletters and win-back campaigns that land, get opened, and keep the pipeline warm.",
    tags: ["Sequences", "Newsletters", "Automation"],
    image: "/media/img_3.webp",
    imageAlt: "Email campaign preview",
  },
  {
    key: "reputation",
    index: "14",
    room: "The Hall of Mirrors",
    title: "What they say when you're not in the room.",
    body: "Review requests, ratings and listings tracked and nudged automatically — so the reputation matches the work.",
    tags: ["Reviews", "Listings", "Auto-requests"],
    image: "/media/img_6.webp",
    imageAlt: "Reputation and reviews preview",
  },
];

export default function ServicesStory() {
  return (
    <>
      {/* Catalog */}
      <section id="catalog" className="relative overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp className="max-w-2xl">
            <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="ai-live-dot" />
              Service catalog
            </span>
            <h2 className="ai-title mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Everything in the stack.
              <span className="ai-title-line" />
            </h2>
            <p className="mt-3 text-base text-text-dim">
              Same offerings as before — presented as a quiet product catalog,
              not a carnival of color reels.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((s) => (
              <MotionItem key={s.key}>
                <article className="motion-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/40 transition-colors hover:border-white/15 hover:bg-panel/70">
                  <div className="relative border-b border-line bg-bg/60 p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="mx-auto h-auto max-h-48 w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="ai-num-glow font-mono text-[11px] text-accent">
                        {s.index} · {s.room}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-text">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">
                      {s.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="ai-chip-breathe rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-text-dimmer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
