/** Original site banner. */
export const HERO_BANNER = "/images/hero-banner.jpg";
export const HERO_VIDEO = "/videos/hero-banner.mp4";
export const LOADER_VIDEO = "/videos/loader.mp4";
export const MARKETS_VIDEO = "/videos/markets-bg.mp4";
/** Reuses loader orb clip — same asset, one download via cache. */
export const STATS_VIDEO = LOADER_VIDEO;

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

/** Charcoal/black wash so banner copy stays readable. */
export const BANNER_VEIL = [
  "linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.58) 58%, rgba(0,0,0,0.88) 100%)",
  "radial-gradient(ellipse 70% 50% at 50% 42%, rgba(0,0,0,0.2), rgba(0,0,0,0.55) 100%)",
].join(",");

/** Blackish overlay for other photo rooms. */
export const ROOM_VEIL = [
  "linear-gradient(180deg, rgba(0,0,0,0.76) 0%, rgba(0,0,0,0.52) 40%, rgba(0,0,0,0.8) 100%)",
].join(",");
