import Link from "next/link";
import Image from "next/image";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { NAV_LINKS, SITE } from "@/lib/siteContent";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <SchemeOverlay />
      <FadeUp className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <MotionItem lift={false} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-base font-semibold text-text">{SITE.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-dim">{SITE.footerBlurb}</p>
          </MotionItem>

          <MotionItem lift={false}>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-gold">
              Product
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
              >
                Book a demo
              </Link>
            </div>
          </MotionItem>

          <MotionItem lift={false}>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <span className="text-sm text-text-dimmer">{SITE.location}</span>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
            </div>
          </MotionItem>
        </Stagger>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <span className="text-xs text-text-dimmer">© 2026 {SITE.name}</span>
          <span className="text-xs text-text-dimmer">{SITE.tagline}</span>
        </div>
      </FadeUp>
    </footer>
  );
}
