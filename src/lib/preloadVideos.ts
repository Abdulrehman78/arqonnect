import { HERO_VIDEO, LOADER_VIDEO, MARKETS_VIDEO } from "@/lib/brand";

/** Shared video assets — preload during boot so banners play instantly after the loader. */
export const BOOT_VIDEOS = [LOADER_VIDEO, HERO_VIDEO, MARKETS_VIDEO] as const;

/** Warm browser cache for banner clips (safe to call multiple times). */
export function preloadVideos(
  sources: readonly string[] = BOOT_VIDEOS,
  timeoutMs = 5000,
): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  const jobs = sources.map(
    (src) =>
      new Promise<void>((resolve) => {
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
      }),
  );

  return Promise.all(jobs).then(() => undefined);
}
