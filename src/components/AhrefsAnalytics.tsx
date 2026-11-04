"use client";

import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "@/lib/cookieConsent";

const AHREFS_SRC = "https://analytics.ahrefs.com/analytics.js";
const AHREFS_KEY = "8MHp6nAm6aLpqOxaoLzPjQ";

/**
 * Ahrefs Web Analytics — load only after optional analytics consent
 * (same gate as GA4). Keep out of a static <head> script.
 */
export default function AhrefsAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const sync = () => setLoad(hasAnalyticsConsent());
    sync();
    window.addEventListener("arq-consent-change", sync);
    return () => window.removeEventListener("arq-consent-change", sync);
  }, []);

  useEffect(() => {
    if (!load) return;
    if (document.querySelector(`script[src="${AHREFS_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = AHREFS_SRC;
    script.async = true;
    script.dataset.key = AHREFS_KEY;
    document.head.appendChild(script);
  }, [load]);

  return null;
}
