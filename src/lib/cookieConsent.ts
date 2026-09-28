/** Optional marketing-site analytics consent (localStorage). */

export const ANALYTICS_CONSENT_KEY = "arq-analytics-consent";

export type AnalyticsConsentChoice = "granted" | "denied";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export function isAnalyticsConfigured(): boolean {
  return Boolean(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID.startsWith("G-");
}

export function prefersNoAnalytics(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  if (nav.globalPrivacyControl === true) return true;
  const dnt = nav.doNotTrack ?? (window as Window & { doNotTrack?: string }).doNotTrack;
  return dnt === "1" || dnt === "yes";
}

export function getAnalyticsConsent(): AnalyticsConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (raw === "granted" || raw === "denied") return raw;
  } catch {
    /* private mode */
  }
  return null;
}

export function setAnalyticsConsent(choice: AnalyticsConsentChoice): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new Event("arq-consent-change"));
}

export function hasAnalyticsConsent(): boolean {
  if (!isAnalyticsConfigured()) return false;
  if (prefersNoAnalytics()) return false;
  return getAnalyticsConsent() === "granted";
}

export function shouldShowCookieNotice(): boolean {
  if (!isAnalyticsConfigured()) return false;
  if (prefersNoAnalytics()) return false;
  return getAnalyticsConsent() === null;
}
