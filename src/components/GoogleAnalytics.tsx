import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

/** GA4 Measurement ID from env — only loads when set (production / local .env.local). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID.startsWith("G-");
}

/**
 * Official Next.js GA4 snippet. Renders nothing until you add
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX to .env.local (or host env).
 */
export default function GoogleAnalytics() {
  if (!isAnalyticsEnabled()) return null;
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
