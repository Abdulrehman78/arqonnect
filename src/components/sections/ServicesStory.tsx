"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { FEATURES } from "@/lib/siteContent";

const MEDIA = [
  "/media/img_1.webp",
  "/media/img_2.webp",
  "/media/img_3.webp",
  "/media/img_4.webp",
  "/media/img_5.webp",
  "/media/img_6.webp",
  "/media/img_7.webp",
];

const ROOM_NAMES: Record<string, string> = {
  "White-label platform": "The Brand Room",
  "Unified inbox": "Mission Control",
  "Grounded AI replies": "The Truth Room",
  "Human handoff": "The Handoff Desk",
  "Contact CRM": "The Contact Desk",
  Broadcasts: "The Broadcast Room",
  "Voice notes": "The Voice Room",
  Languages: "The Language Lab",
  "Security baseline": "The Vault",
  "AI Business Twin": "The Twin Studio",
  "Full CRM": "The Pipeline Floor",
  "Appointment booking": "The Calendar Room",
  "Intent detection": "The Router",
  "Roles & MFA": "Access Control",
  "Seven languages": "The Language Hall",
  "Widget features": "The Front Door",
  "Lead capture": "The Capture Desk",
  "Prompt manager": "The Prompt Lab",
  "Optional CRM sync": "The Sync Room",
  "Channel polish": "Channel Polish",
  "Workflow rules": "The Rules Engine",
};

type CatalogItem = {
  key: string;
  index: string;
  room: string;
  phase: string;
  title: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

function buildCatalog(): CatalogItem[] {
  const items: CatalogItem[] = [];
  let n = 0;
  for (const phase of FEATURES.phases) {
    for (const item of phase.items) {
      n += 1;
      items.push({
        key: `${phase.id}-${item.title}`,
        index: String(n).padStart(2, "0"),
        room: ROOM_NAMES[item.title] ?? item.title,
        phase: phase.label,
        title: item.title,
        body: item.body,
        tags: [phase.label, item.title.split(" ")[0]],
        image: MEDIA[(n - 1) % MEDIA.length],
        imageAlt: `${item.title} preview`,
      });
    }
  }
  return items;
}

const catalog = buildCatalog();

export default function ServicesStory() {
  return (
    <section id="catalog" className="relative overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="ai-live-dot" />
            Product catalog
          </span>
          <h2 className="ai-title mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {FEATURES.title}.
            <span className="ai-title-line" />
          </h2>
          <p className="mt-3 text-base text-text-dim">{FEATURES.lead}</p>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {catalog.map((s) => (
            <MotionItem key={s.key}>
              <article className="motion-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/40 transition-colors hover:border-glass hover:bg-panel/70">
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
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-dimmer">
                      {s.phase}
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
  );
}
