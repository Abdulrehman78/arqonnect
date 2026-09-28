"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import {
  GA_MEASUREMENT_ID,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/cookieConsent";

export { GA_MEASUREMENT_ID, isAnalyticsConfigured as isAnalyticsEnabled } from "@/lib/cookieConsent";

/**
 * GA4 loads only after explicit consent (and not when DNT/GPC is set).
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX in production env.
 */
export default function GoogleAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const sync = () => setLoad(hasAnalyticsConsent());
    sync();
    window.addEventListener("arq-consent-change", sync);
    return () => window.removeEventListener("arq-consent-change", sync);
  }, []);

  if (!isAnalyticsConfigured() || !load) return null;
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
