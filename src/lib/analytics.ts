/**
 * Lightweight GA4 helpers for custom events.
 * Safe no-ops when analytics is not configured or gtag is not ready.
 */

type GtagFn = (
  command: "event" | "config" | "js" | "set",
  targetOrAction: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  action: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}

/** Primary conversion-style CTAs used across the marketing site. */
export function trackBookDemo(source: string): void {
  trackEvent("book_demo_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackOutbound(url: string, label?: string): void {
  trackEvent("click", {
    event_category: "outbound",
    event_label: label || url,
    link_url: url,
  });
}

export function trackFormStart(formName: string): void {
  trackEvent("form_start", {
    event_category: "lead",
    form_name: formName,
  });
}

export function trackFormSubmit(formName: string): void {
  trackEvent("generate_lead", {
    event_category: "lead",
    form_name: formName,
  });
}
