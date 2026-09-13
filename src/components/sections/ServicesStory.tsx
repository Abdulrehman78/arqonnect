"use client";

import Image from "next/image";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import {
  PHASE_0_ROOMS,
  PHASE_1_ROOMS,
  PRODUCT_SHOT,
  type RoomCard,
} from "@/lib/servicesPageContent";

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
  "Six languages": "The Language Hall",
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
};

function mapRooms(rooms: RoomCard[], phase: string, start: number): CatalogItem[] {
  return rooms.map((room, i) => ({
    key: `${phase}-${room.title}`,
    index: String(start + i).padStart(2, "0"),
    room: ROOM_NAMES[room.title] ?? room.title,
    phase,
    title: room.title,
    body: room.body,
    tags: room.tags,
    image: PRODUCT_SHOT[room.shot],
  }));
}

const catalog = [
  ...mapRooms(PHASE_0_ROOMS, "Phase 0", 1),
  ...mapRooms(PHASE_1_ROOMS, "Phase 1", PHASE_0_ROOMS.length + 1),
];

export default function ServicesStory() {
  return (
    <section id="catalog" className="relative overflow-hidden border-b border-line bg-bg px-4 py-16 sm:px-6 md:py-24">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="ai-live-dot" />
            Service catalog
          </span>
          <h2 className="ai-title mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Everything in the platform.
            <span className="ai-title-line" />
          </h2>
          <p className="mt-3 text-base text-text-dim">
            Phase 0 sets up the branded communication platform. Phase 1 adds the full
            Business Twin, CRM and booking experience on top of it.
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {catalog.map((s) => (
            <MotionItem key={s.key}>
              <article className="motion-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/40 transition-colors hover:border-glass hover:bg-panel/70">
                <div className="relative h-48 overflow-hidden border-b border-line bg-bg/60">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:var(--panel)] to-transparent" />
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
