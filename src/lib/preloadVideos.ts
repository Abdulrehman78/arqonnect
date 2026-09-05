import { HERO_VIDEO, LOADER_VIDEO, MARKETS_VIDEO } from "@/lib/brand";

/** Hero clip — highest priority; must be ready before the homepage reveals. */
export const PRIORITY_VIDEO = HERO_VIDEO;

/** All banner clips warmed during boot (hero first, others in background). */
export const BOOT_VIDEOS = [HERO_VIDEO, LOADER_VIDEO, MARKETS_VIDEO] as const;

const SECONDARY_VIDEOS = [LOADER_VIDEO, MARKETS_VIDEO] as const;

function warmVideo(src: string, timeoutMs: number): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = src;

    const done = () => {
      video.removeEventListener("canplaythrough", done);
      video.removeEventListener("loadeddata", done);
      video.removeEventListener("error", done);
      resolve();
    };

    video.addEventListener("canplaythrough", done, { once: true });
    video.addEventListener("loadeddata", done, { once: true });
    video.addEventListener("error", done, { once: true });
    window.setTimeout(done, timeoutMs);
    video.load();
  });
}

/** Warm the hero banner clip first — blocks until playable or timeout. */
export function preloadHeroVideo(timeoutMs = 4500): Promise<void> {
  return warmVideo(PRIORITY_VIDEO, timeoutMs);
}

/** Warm remaining banner clips without blocking the homepage reveal. */
export function preloadSecondaryVideos(timeoutMs = 5000): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  return Promise.all(SECONDARY_VIDEOS.map((src) => warmVideo(src, timeoutMs))).then(
    () => undefined,
  );
}

/** Warm all banner clips (hero first, then the rest). */
export function preloadVideos(
  sources: readonly string[] = BOOT_VIDEOS,
  timeoutMs = 5000,
): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  const hero = sources.includes(PRIORITY_VIDEO);
  const rest = sources.filter((s) => s !== PRIORITY_VIDEO);

  const chain = hero
    ? preloadHeroVideo(timeoutMs).then(() =>
        Promise.all(rest.map((src) => warmVideo(src, timeoutMs))),
      )
    : Promise.all(sources.map((src) => warmVideo(src, timeoutMs)));

  return chain.then(() => undefined);
}
