"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
type Card = {
  href: string;
  icon: string;
  label: string;
  highlight: string;
};

const platform: Card[] = [
  {
    href: "/services",
    icon: "services",
    label: "Services",
    highlight:
      "Unified inbox, Business Twin, CRM, booking, and SEO/AEO/GEO growth services in one place.",
  },
  {
    href: "/services#additional-services",
    icon: "crm",
    label: "CRM & growth",
    highlight:
      "Contacts, deals and optional HubSpot or Salesforce sync, plus SEO, AEO and development add-ons.",
  },
  {
    href: "/demo",
    icon: "case-studies",
    label: "Live demo",
    highlight:
      "See grounded AI replies, human handoff and booking on a live demo tailored to your channels.",
  },
  {
    href: "/pricing",
    icon: "pricing",
    label: "Pricing",
    highlight:
      "Starter, Growth, and Scale plans with clear monthly fees and setup. Book a demo when you are ready.",
  },
  {
    href: "/pricing#compare",
    icon: "enterprise",
    label: "Scale & white-label",
    highlight:
      "Multi-location Scale plan and white-label deployments scoped to your brand and domain.",
  },
  {
    href: "/faq",
    icon: "resources",
    label: "FAQ",
    highlight: "Straight answers on handoff, languages, knowledge grounding and what you provide.",
  },
  {
    href: "/contact",
    icon: "contact",
    label: "Contact",
    highlight: "Book a demo, or reach Support@arqonnect.io and our Lahore team.",
  },
];

const story: Card[] = [
  {
    href: "/process",
    icon: "why",
    label: "Why ArQonnect",
    highlight: "One inbox, approved knowledge, human control — how the Twin fits your team.",
  },
  {
    href: "/process",
    icon: "values",
    label: "How it works",
    highlight: "From connecting channels to managing the customer relationship, step by step.",
  },
  {
    href: "/demo",
    icon: "demo",
    label: "Live Demo",
    highlight: "Try the chat agent that answers with your approved knowledge.",
  },
  {
    href: "/services",
    icon: "see-it-work",
    label: "Product guide",
    highlight: "Phase 0 and Phase 1 capabilities across inbox, Twin, CRM and booking.",
  },
  {
    href: "/pricing",
    icon: "proof",
    label: "Plans & setup",
    highlight: "Published SaaS pricing with setup fees and conversation allowances.",
  },
  {
    href: "/process",
    icon: "process",
    label: "Our Process",
    highlight: "How we scope, build and deploy your AI Twin, step by step.",
  },
  {
    href: "/contact",
    icon: "about",
    label: "Contact us",
    highlight: "Talk to the team, book a demo, or email Support@arqonnect.io.",
  },
];

function CardGrid({ items }: { items: Card[] }) {
  return (
    <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((c) => (
        <MotionItem key={`${c.label}-${c.href}`}>
          <div className="motion-card group flex h-full flex-col justify-between rounded-[18px] border border-glass bg-panel/60 p-6 transition-colors hover:border-accent/50 hover:bg-panel-2">
            <div>
              <div className="ai-icon-float mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-glass bg-glass-inner text-electric-2">
                <Icon name={c.icon} />
              </div>
              <h3 className="font-display text-lg text-text">{c.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">
                {c.highlight}
              </p>
            </div>
            {/^https?:\/\//i.test(c.href) ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-link-arrow mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-2 no-underline transition-transform group-hover:translate-x-1"
              >
                Book now <span aria-hidden="true">→</span>
              </a>
            ) : (
              <Link
                href={c.href}
                className="ai-link-arrow mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-2 no-underline transition-transform group-hover:translate-x-1"
              >
                Explore <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </MotionItem>
      ))}
    </Stagger>
  );
}

export default function HomeExplore() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-text-dimmer">
            <span className="ai-live-dot" />
            Explore ArQonnect
          </span>
          <h2 className="ai-title mt-3 max-w-2xl text-3xl md:text-4xl font-display text-text">
            Everything the AI workforce does, one page each.
            <span className="ai-title-line" />
          </h2>
        </FadeUp>

        <div className="mt-12">
          <FadeUp>
            <h3 className="mb-5 text-sm font-mono uppercase tracking-[0.14em] text-text-dimmer">
              The Platform
            </h3>
          </FadeUp>
          <CardGrid items={platform} />
        </div>

        <div className="mt-14">
          <FadeUp>
            <h3 className="mb-5 text-sm font-mono uppercase tracking-[0.14em] text-text-dimmer">
              Our Story
            </h3>
          </FadeUp>
          <CardGrid items={story} />
        </div>
      </div>
    </section>
  );
}
