import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import BrandLogo from "@/components/BrandLogo";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { APP_URL, NAV_LINKS, SITE } from "@/lib/siteContent";
import { LEGAL_LINKS } from "@/lib/legalContent";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <SchemeOverlay />
      <FadeUp className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <MotionItem lift={false} className="lg:col-span-1">
            <Link href="/" className="inline-flex no-underline" aria-label={SITE.name}>
              <BrandLogo size="footer" />
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
              <a
                href={`${APP_URL}/sign-in`}
                className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
              >
                Sign in
              </a>
            </div>
          </MotionItem>

          <MotionItem lift={false}>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-gold">
              Legal
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
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
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {LEGAL_LINKS.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-text-dimmer no-underline transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
