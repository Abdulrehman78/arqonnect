"use client";

import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { BookDemoLink } from "@/components/BookDemoLink";
import GlobalPresence from "@/components/sections/GlobalPresence";
import { SITE } from "@/lib/siteContent";

const LEADERSHIP = [
  { name: "Abdulrehman Qureshi", title: "CEO / Founder" },
  { name: "Mubashar Irshad", title: "Core Director" },
  { name: "Mr Sheharyar", title: "Chief Heart Officer" },
  { name: "Mr Ali", title: "Director Sales" },
  { name: "Mr Usman", title: "Director HR" },
  { name: "Ms Shaza Azam", title: "Head of HR · Clinical Psychologist" },
] as const;

const CONTACTS = [
  {
    role: "Support & demo",
    email: SITE.emails.support,
    note: "Primary public contact for product questions and demo booking.",
  },
  {
    role: "General",
    email: SITE.emails.hello,
    note: "Partnerships and general inquiries.",
  },
  {
    role: "Compliance & privacy",
    email: SITE.emails.compliance,
    note: "Data protection, security disclosures, refunds and legal requests.",
  },
] as const;

export default function AboutPageClient() {
  return (
    <main aria-label="About ArQonnect">
      <section className="relative overflow-hidden border-b border-line bg-bg px-4 pb-16 pt-[clamp(5rem,12dvh,8rem)] sm:px-6">
        <SchemeOverlay />
        <RevealOnScroll className="relative z-10 mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              About ArQonnect
            </p>
            <h1 className="story-heading mt-3">
              Built in Lahore.
              <span>Used wherever customers message.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-dim md:text-lg">
              ArQonnect builds AI Twin platforms so businesses can answer WhatsApp,
              Instagram, Messenger and website chat from one inbox, using approved
              knowledge and human handoff when it matters. Growth services (SEO, AEO,
              development) are available as add-ons when visibility is part of the leak.
            </p>
          </header>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
            <div className="rounded-[18px] border border-line bg-panel/50 p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dimmer">
                Legal entity
              </dt>
              <dd className="mt-2 text-sm text-text">ArQonnect (Lahore, Pakistan)</dd>
            </div>
            <div className="rounded-[18px] border border-line bg-panel/50 p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dimmer">
                Address
              </dt>
              <dd className="mt-2 text-sm text-text">{SITE.address}</dd>
            </div>
            <div className="rounded-[18px] border border-line bg-panel/50 p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dimmer">
                Product app
              </dt>
              <dd className="mt-2 text-sm text-text">
                <a
                  href="https://app.arqonnect.io"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  app.arqonnect.io
                </a>
              </dd>
            </div>
            <div className="rounded-[18px] border border-line bg-panel/50 p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dimmer">
                Marketing site
              </dt>
              <dd className="mt-2 text-sm text-text">https://www.arqonnect.io</dd>
            </div>
          </dl>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg-alt px-4 py-20 sm:px-6">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
              Leadership
            </p>
            <h2 className="ai-title mt-3 font-display text-3xl font-bold text-text md:text-4xl">
              The people behind the Twin
              <span className="ai-title-line" />
            </h2>
          </FadeUp>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((p) => (
              <MotionItem key={p.name}>
                <article className="rounded-[18px] border border-line bg-panel/50 p-5">
                  <h3 className="font-display text-base font-semibold text-text">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-dim">{p.title}</p>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-bg px-4 py-20 sm:px-6">
        <SchemeOverlay />
        <div className="relative mx-auto max-w-3xl">
          <FadeUp>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-dimmer">
              Contact roles
            </p>
            <h2 className="ai-title mt-3 font-display text-3xl font-bold text-text md:text-4xl">
              Who to email
              <span className="ai-title-line" />
            </h2>
          </FadeUp>
          <ul className="mt-8 space-y-4">
            {CONTACTS.map((c) => (
              <li
                key={c.email}
                className="rounded-[18px] border border-line bg-panel/40 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {c.role}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-1 block text-base font-semibold text-text no-underline hover:text-accent"
                >
                  {c.email}
                </a>
                <p className="mt-1 text-sm text-text-dim">{c.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookDemoLink
              source="about_cta"
              className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
            >
              Book a demo →
            </BookDemoLink>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-text no-underline hover:border-accent/40"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <GlobalPresence />
    </main>
  );
}
