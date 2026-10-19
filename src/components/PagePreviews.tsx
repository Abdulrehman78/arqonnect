"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FadeUp } from "@/components/ui/Motion";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
type Preview = {
  href: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
};

const previews: Preview[] = [
  {
    href: "/services",
    icon: "services",
    eyebrow: "The Platform",
    title: "One stack, twenty AI-run services.",
    description:
      "Chat and voice agents, websites and funnels, CRM automation, SEO/AEO/GEO and ready-made agent templates — built to run themselves.",
    bullets: [
      "Humanoid chat + voice agents on every channel",
      "SEO, AEO, GEO and AIO handled together",
      "Ready-made agent templates by industry",
    ],
    accent: "#EAA46B",
  },
  {
    href: "/services",
    icon: "crm",
    eyebrow: "CRM & Automation",
    title: "Every lead updates itself.",
    description:
      "Conversations create contacts; Growth and Scale add full CRM and optional HubSpot or Salesforce sync.",
    bullets: [
      "Contacts and booking in one place",
      "Optional HubSpot / Salesforce sync",
      "Workflow rules on Scale",
    ],
    accent: "#C87D46",
  },
  {
    href: "/demo",
    icon: "case-studies",
    eyebrow: "Live demo",
    title: "See the Twin on your channels.",
    description:
      "Book a scoped demo and watch grounded replies, handoff and booking with your own knowledge.",
    bullets: [
      "WhatsApp, Instagram, Messenger, web",
      "Approved knowledge only",
      "Human handoff when needed",
    ],
    accent: "#EAA46B",
  },
  {
    href: "/pricing",
    icon: "pricing",
    eyebrow: "Pricing",
    title: "Starter, Growth, and Scale.",
    description:
      "Clear monthly plans and setup fees for your AI business twin. Book a demo when you are ready to go live.",
    bullets: [
      "From $499/mo + setup",
      "Web, WhatsApp, Instagram, Messenger",
      "Billed via Paddle (Merchant of Record)",
    ],
    accent: "#EAA46B",
  },
  {
    href: "/pricing",
    icon: "enterprise",
    eyebrow: "Scale & white-label",
    title: "Built for scale and control.",
    description:
      "Multi-location Scale plan and white-label deployments with your domain and branding.",
    bullets: [
      "Up to 3 locations on Scale",
      "All 4 messaging channels",
      "White-label quoted separately",
    ],
    accent: "#C87D46",
  },
  {
    href: "/faq",
    icon: "resources",
    eyebrow: "FAQ",
    title: "Guides, insight, and straight answers.",
    description:
      "The questions buyers actually ask — handoff, languages, knowledge grounding and setup.",
    bullets: [
      "Grounded AI replies explained",
      "Human handoff and languages",
      "What your business provides",
    ],
    accent: "#EAA46B",
  },
  {
    href: "/contact",
    icon: "contact",
    eyebrow: "Contact",
    title: "Book a demo, talk to a human.",
    description:
      "Find where we work — US, UK, Canada, Australia, Europe — and get on the calendar this week.",
    bullets: [
      "Live in five markets",
      "Same-week demo scheduling",
      "Real specialists, not a ticket queue",
    ],
    accent: "#EAA46B",
  },
];

function MockPanel({ icon, accent }: { icon: string; accent: string }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-panel/60">
      <div className="flex gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accent}18, transparent 60%), radial-gradient(circle at 80% 80%, ${accent}12, transparent 55%)`,
        }}
      >
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl border"
          style={{ borderColor: `${accent}40`, background: `${accent}10`, color: accent }}
        >
          <Icon name={icon} className="h-9 w-9" />
        </div>
      </div>
    </div>
  );
}

export default function PagePreviews() {
  return (
    <section className="relative overflow-hidden border-t border-line px-6 py-24 md:py-32">
      <SchemeOverlay />
      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-dimmer">
            Explore ArQonnect
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text md:text-4xl">
            The platform, page by page.
          </h2>
        </FadeUp>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {previews.map((p, i) => (
            <div
              key={p.href}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeUp delay={i * 0.05}>
                <MockPanel icon={p.icon} accent={p.accent} />
              </FadeUp>
              <FadeUp delay={i * 0.05 + 0.1}>
                <span
                  className="text-xs font-medium uppercase tracking-[0.16em]"
                  style={{ color: p.accent }}
                >
                  {p.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-text md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-text-dim">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-text-dim"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                {/^https?:\/\//i.test(p.href) ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-transform hover:translate-x-1"
                    style={{ color: p.accent }}
                  >
                    Book a meeting <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <Link
                    href={p.href}
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-transform hover:translate-x-1"
                    style={{ color: p.accent }}
                  >
                    Explore {p.eyebrow} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
