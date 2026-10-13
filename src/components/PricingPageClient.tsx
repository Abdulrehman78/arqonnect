"use client";

import { useEffect } from "react";
import { CAL_BOOKING_URL, SITE } from "@/lib/siteContent";
import { BookDemoLink } from "@/components/BookDemoLink";
import { trackBookDemo } from "@/lib/analytics";

/**
 * Fallback UI if a client navigation lands on /pricing before the
 * server redirect runs. Auto-opens Cal.com and offers a manual link.
 */
export default function PricingPageClient() {
  useEffect(() => {
    trackBookDemo("pricing_redirect");
    window.location.replace(CAL_BOOKING_URL);
  }, []);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm text-text-dim">Opening Cal.com to book your demo…</p>
      <BookDemoLink source="pricing_fallback" className="story-cta-primary">
        Book a demo on Cal.com →
      </BookDemoLink>
      <p className="text-sm text-text-dimmer">
        Or email{" "}
        <a href={`mailto:${SITE.emails.support}`} className="text-accent underline">
          {SITE.emails.support}
        </a>
      </p>
    </main>
  );
}
