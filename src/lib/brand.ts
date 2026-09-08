/** Original site banner. */
export const HERO_BANNER = "/images/hero-banner.jpg";
export const HERO_VIDEO = "/videos/hero-banner.mp4";
export const LOADER_VIDEO = "/videos/loader.mp4";
export const MARKETS_VIDEO = "/videos/markets-bg.mp4";
/** Reuses loader orb clip — same asset, one download via cache. */
export const STATS_VIDEO = LOADER_VIDEO;

export type PageBannerKey =
  | "crm"
  | "pricing"
  | "cases"
  | "resources"
  | "enterprise"
  | "contact"
  | "why"
  | "values"
  | "process"
  | "proof"
  | "demo"
  | "reel"
  | "about"
  | "services";

export const PAGE_BANNERS: Record<
  PageBannerKey,
  { src: string; video: string; position: string }
> = {
  crm: { src: "/images/markets-banner.jpg", video: MARKETS_VIDEO, position: "55% center" },
  pricing: { src: "/images/hero-banner.jpg", video: HERO_VIDEO, position: "center" },
  cases: { src: "/images/testimonials-banner.jpg", video: MARKETS_VIDEO, position: "50% center" },
  resources: { src: "/images/features-banner.jpg", video: HERO_VIDEO, position: "60% center" },
  enterprise: { src: "/images/horizon-banner.jpg", video: LOADER_VIDEO, position: "50% 40%" },
  contact: { src: "/images/testimonials-banner.jpg", video: MARKETS_VIDEO, position: "50% center" },
  why: { src: "/images/features-banner.jpg", video: HERO_VIDEO, position: "60% center" },
  values: { src: "/images/markets-banner.jpg", video: MARKETS_VIDEO, position: "55% center" },
  process: { src: "/images/markets-banner.jpg", video: MARKETS_VIDEO, position: "50% center" },
  proof: { src: "/images/features-banner.jpg", video: LOADER_VIDEO, position: "60% center" },
  demo: { src: "/images/hero-banner.jpg", video: HERO_VIDEO, position: "center" },
  reel: { src: "/images/markets-banner.jpg", video: MARKETS_VIDEO, position: "55% center" },
  about: { src: "/images/hero-banner.jpg", video: HERO_VIDEO, position: "center" },
  services: { src: "/images/horizon-banner.jpg", video: LOADER_VIDEO, position: "50% 35%" },
};

export const palette = {
  bg: "#0B0F12",
  panel: "#161E23",
  text: "#F4F7F8",
  muted: "#8A99A8",
  glow: "#EAA46B",
  orange: "#C87D46",
} as const;

/** Recolors the banner photo (keeps lights/darks, drops the native blue). */
export const BANNER_TINT =
  "linear-gradient(105deg, #C87D46 0%, #EAA46B 38%, #EAA46B 62%, #161E23 100%)";

/** Charcoal wash — theme CSS veil is primary; this is a fallback string. */
export const BANNER_VEIL = "var(--hero-veil)";

/** Room wash — prefer theme CSS so light/dark both kill backdrop type. */
export const ROOM_VEIL = "var(--room-veil)";
