import Link from "next/link";
import { Icon } from "@/components/Icon";

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
      "Chat, voice, websites, funnels, CRM, SEO/AEO/GEO and ready-made agent templates — the full stack in one place.",
  },
  {
    href: "/crm",
    icon: "crm",
    label: "CRM & Automation",
    highlight:
      "Every call, chat and lead writes straight into HubSpot, Salesforce or your CRM of choice — automatically.",
  },
  {
    href: "/case-studies",
    icon: "case-studies",
    label: "Case Studies",
    highlight:
      "Real deployments, real numbers — see what ArQonnect changed for clients across healthcare, real estate and ecommerce.",
  },
  {
    href: "/pricing",
    icon: "pricing",
    label: "Pricing",
    highlight:
      "One flat rate replaces $1,600+ of separate tools. Calculate your exact monthly cost.",
  },
  {
    href: "/enterprise",
    icon: "enterprise",
    label: "Enterprise",
    highlight:
      "Security guardrails, analytics and deployment built for organizations that need scale and control.",
  },
  {
    href: "/resources",
    icon: "resources",
    label: "Resources",
    highlight: "Guides, industry insight and answers to the questions we get asked most.",
  },
  {
    href: "/contact",
    icon: "contact",
    label: "Contact",
    highlight: "Book a demo, or find us across the US, UK, Canada, Australia and Europe.",
  },
];

const story: Card[] = [
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

function CardGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((c) => (
        <div
          key={c.href}
          className="group flex flex-col justify-between rounded-[18px] border border-white/10 bg-panel/60 p-6 transition-colors hover:border-electric/50 hover:bg-panel-2"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-electric-2">
              <Icon name={c.icon} />
            </div>
            <h3 className="font-display text-lg text-text">{c.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-dim">
              {c.highlight}
            </p>
          </div>
          <Link
            href={c.href}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-2 no-underline transition-transform group-hover:translate-x-1"
          >
            Explore <span aria-hidden="true">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function HomeExplore() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dimmer">
          Explore ArQonnect
        </span>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl font-display text-text">
          Everything the AI workforce does, one page each.
        </h2>

        <div className="mt-12">
          <h3 className="mb-5 text-sm font-mono uppercase tracking-[0.14em] text-text-dimmer">
            The Platform
          </h3>
          <CardGrid items={platform} />
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-sm font-mono uppercase tracking-[0.14em] text-text-dimmer">
            Our Story
          </h3>
          <CardGrid items={story} />
        </div>
      </div>
    </section>
  );
}
