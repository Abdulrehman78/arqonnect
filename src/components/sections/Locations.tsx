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
import InteractiveBackdrop from "@/components/ui/InteractiveBackdrop";
import { motion } from "framer-motion";

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
      <section
        id="locations"
        className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg pt-28 pb-16"
      >
        <InteractiveBackdrop theme="contact" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Where We Work
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Book a demo,
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan to-accent bg-clip-text text-transparent">
                talk to a human.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg">
              Built in Lahore, running for clients across the US, UK, Canada,
              Australia and Europe. Find where we work — and get on the calendar
              this week.
            </p>

            <ul className="mx-auto mt-6 flex max-w-2xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center justify-center gap-2 text-sm text-text-dim"
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

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {locations.map((loc) => (
                <span
                  key={loc.code}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-3 py-1.5"
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
                  <span className="font-mono text-[11px] tracking-wide text-text-dim">
                    {loc.code}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_70%)]" />
                  <Image
                    src={loc.flag}
                    alt={`${loc.name} flag`}
                    width={96}
                    height={64}
                    className="relative z-10 h-14 w-auto rounded-md border border-line object-cover shadow-lg shadow-black/40"
                    unoptimized
                  />
                  {loc.hq && (
                    <span className="absolute right-3 top-3 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
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
