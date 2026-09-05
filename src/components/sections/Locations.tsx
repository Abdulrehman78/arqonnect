"use client";

import Image from "next/image";
import {
  Section,
  SectionHeader,
  Card,
  BtnPrimary,
  BtnGhost,
} from "@/components/ui/PageSection";
import { Stagger, MotionItem } from "@/components/ui/Motion";
import PageBanner from "@/components/ui/PageBanner";

type Location = {
  name: string;
  desc: string;
  flag: string;
  code: string;
  hq?: boolean;
};

const locations: Location[] = [
  {
    name: "Lahore, Pakistan",
    desc: "Headquarters — where every agent gets built and trained",
    flag: "https://flagcdn.com/w160/pk.png",
    code: "PK",
    hq: true,
  },
  {
    name: "United States",
    desc: "Service businesses & agencies, coast to coast",
    flag: "https://flagcdn.com/w160/us.png",
    code: "US",
  },
  {
    name: "United Kingdom",
    desc: "London to Manchester, tuned to the local tone",
    flag: "https://flagcdn.com/w160/gb.png",
    code: "GB",
  },
  {
    name: "Canada",
    desc: "Toronto to Vancouver, same 24/7 agent",
    flag: "https://flagcdn.com/w160/ca.png",
    code: "CA",
  },
  {
    name: "Australia",
    desc: "Sydney to Melbourne, always-on coverage",
    flag: "https://flagcdn.com/w160/au.png",
    code: "AU",
  },
  {
    name: "Europe",
    desc: "Across the EU — same stack, local language and tone",
    flag: "https://flagcdn.com/w160/eu.png",
    code: "EU",
  },
];

const highlights = [
  "Live in five markets",
  "Same-week demo scheduling",
  "Real specialists, not a ticket queue",
];

export default function Locations() {
  return (
    <>
      <PageBanner
        id="locations"
        banner="contact"
        center
        minHeight="min-h-[70vh]"
        eyebrow="Where We Work"
        title="Book a demo,"
        titleMuted="talk to a human."
        description="Built in Lahore, running for clients across the US, UK, Canada, Australia and Europe. Find where we work — and get on the calendar this week."
      >
        <ul className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-center justify-center gap-2 text-sm room-muted"
            >
              <span className="text-accent">✓</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <BtnPrimary href="#contact">Book a Demo →</BtnPrimary>
          <BtnGhost href="#markets">See markets</BtnGhost>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {locations.map((loc) => (
            <span
              key={loc.code}
              className="inline-flex items-center gap-2 rounded-full border border-glass bg-glass-inner px-3 py-1.5"
              title={loc.name}
            >
              <Image
                src={loc.flag}
                alt={`${loc.name} flag`}
                width={24}
                height={16}
                className="h-4 w-6 rounded-[2px] object-cover"
                unoptimized
              />
              <span className="font-mono text-[11px] tracking-wide text-stat-ink">
                {loc.code}
              </span>
            </span>
          ))}
        </div>
      </PageBanner>

      <Section border alt id="markets">
        <SectionHeader
          center
          accent="accent"
          eyebrow="One Headquarters · Five Markets"
          title={
            <>
              One headquarters.
              <br />
              Five markets we run in.
            </>
          }
          description="Built in Lahore, running for clients across the US, UK, Canada, Australia and Europe."
        />

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <MotionItem key={loc.name}>
              <Card
                className={`h-full overflow-hidden p-0 ${
                  loc.hq ? "border-accent/35" : ""
                }`}
              >
                <div className="relative flex h-28 items-center justify-center bg-bg-alt">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,164,107,0.12),transparent_70%)]" />
                  <Image
                    src={loc.flag}
                    alt={`${loc.name} flag`}
                    width={96}
                    height={64}
                    className="relative z-10 h-14 w-auto rounded-md border border-line object-cover shadow-lg shadow-[0_20px_40px_rgb(var(--shadow-rgb)/0.12)]"
                    unoptimized
                  />
                  {loc.hq && (
                    <span className="ai-chip-breathe absolute right-3 top-3 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      HQ
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <b className="block text-lg text-text">{loc.name}</b>
                  <span className="mt-1.5 block text-sm leading-relaxed text-text-dim">
                    {loc.desc}
                  </span>
                </div>
              </Card>
            </MotionItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
