"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";

const story = [
  {
    href: "/why",
    icon: "why",
    label: "Why ArQonnect",
    highlight: "Why businesses hire an agent instead of babysitting more software.",
  },
  {
    href: "/values",
    icon: "values",
    label: "Our Values",
    highlight: "The principles every build runs on, no matter the client.",
  },
  {
    href: "/demo",
    icon: "demo",
    label: "Live Demo",
    highlight: "Try the exact chat and voice agent that answers real client calls.",
  },
  {
    href: "/see-it-work",
    icon: "see-it-work",
    label: "See It Work",
    highlight: "A look at the AI workforce running across real deployments.",
  },
  {
    href: "/proof",
    icon: "proof",
    label: "Proof & Live Stats",
    highlight: "Live numbers — calls handled, latency, cost per minute, CSAT.",
  },
  {
    href: "/process",
    icon: "process",
    label: "Our Process",
    highlight: "How we scope, build and deploy your AI workforce, step by step.",
  },
  {
    href: "/about",
    icon: "about",
    label: "About Us",
    highlight: "The story behind ArQonnect, straight from our founder.",
  },
];

export default function StoryPreviews() {
  return (
    <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-32">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-dimmer">
            Our Story
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text md:text-4xl">
            The people and the process behind it.
          </h2>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {story.map((c) => (
            <MotionItem key={c.href}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-panel/40 p-6 transition-all hover:border-accent/30 hover:bg-panel/70">
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-panel-2 text-accent">
                    <Icon name={c.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{c.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">
                    {c.highlight}
                  </p>
                </div>
                <Link
                  href={c.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-transform group-hover:translate-x-1"
                >
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
