"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  setAnalyticsConsent,
  shouldShowCookieNotice,
} from "@/lib/cookieConsent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(shouldShowCookieNotice());
  }, []);

  if (!visible) return null;

  function accept() {
    setAnalyticsConsent("granted");
    setVisible(false);
  }

  function reject() {
    setAnalyticsConsent("denied");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-line bg-panel/95 p-4 shadow-lg backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-text-dim">
          We use strictly necessary cookies for sign-in and theme preference. With
          your consent, we also load optional analytics cookies to measure
          aggregated traffic on this site. See our{" "}
          <Link
            href="/legal/cookies"
            className="text-gold underline-offset-2 hover:underline"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-line bg-bg/80 px-4 py-2 text-sm font-semibold text-text-dim transition-colors hover:border-gold/40 hover:text-text"
          >
            Reject optional
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/25"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
