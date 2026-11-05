/**
 * Paddle MoR / domain-review positioning for arqonnect.io
 *
 * Primary offering on THIS domain: digital B2B SaaS software subscription
 * (unified multi-channel inbox + knowledge-grounded reply features).
 *
 * Explicitly NOT sold on arqonnect.io:
 * - Standalone chatbot agency builds
 * - Web/SEO/AEO/development projects
 * - General consulting, training retainers, or professional services
 *
 * Those live on the separate services company: arqonnect.cloud
 */

export const SERVICES_CLOUD_URL = "https://arqonnect.cloud";

export const PADDLE = {
  processorName: "Paddle",
  processorLegalName: "Paddle.com",
  buyerTermsUrl: "https://www.paddle.com/legal/buyer-terms",
  refundPolicyUrl: "https://www.paddle.com/legal/refund-policy",
  buyerPortalUrl: "https://paddle.net",
  /** Exact MoR disclosure used on pricing and legal. */
  processorBlurb:
    "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides customer service inquiries related to billing and handles returns according to its policies and applicable law.",
} as const;

/** Product category language safe for MoR review (software, not agency). */
export const PRODUCT_CATEGORY = {
  short: "B2B SaaS messaging inbox software",
  long:
    "ArQonnect is a cloud software subscription that unifies WhatsApp, Instagram, Messenger and web chat into one operator inbox, with optional knowledge-grounded reply assistance and human handoff controls.",
} as const;
