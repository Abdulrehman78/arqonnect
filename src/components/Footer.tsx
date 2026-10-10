import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import BrandLogo from "@/components/BrandLogo";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";
import { APP_URL, NAV_LINKS, SITE } from "@/lib/siteContent";
import { LEGAL_LINKS } from "@/lib/legalContent";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
              <span className="text-sm text-text-dimmer">{SITE.address}</span>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-text-dim no-underline transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-dim no-underline transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>{SITE.phoneDisplay}</span>
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
