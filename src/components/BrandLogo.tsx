/**
 * Brand lockup (stacked AR mark + QONNECT).
 * Intrinsic aspect matches public/logo.png (~1.63:1 after crop).
 * Heights are capped so the nav stays compact; width follows automatically.
 */
import Image from "next/image";

/** Source pixel size of /logo.png (keep in sync when the asset is replaced). */
const INTRINSIC = { w: 2661, h: 1636 } as const;

const SIZES = {
  /** Compact header — readable but does not inflate bar height */
  nav: {
    className:
      "h-10 w-auto max-w-[7.5rem] object-contain object-left sm:h-11 sm:max-w-[9rem] lg:h-12 lg:max-w-[10.5rem]",
  },
  footer: {
    className:
      "h-12 w-auto max-w-[10rem] object-contain object-left sm:h-14 sm:max-w-[12rem]",
  },
  /** Splash — large, still constrained on narrow viewports */
  preloader: {
    className:
      "h-[5.5rem] w-auto max-w-[min(16rem,78vw)] object-contain sm:h-28 sm:max-w-[18rem]",
  },
  mark: {
    className: "h-10 w-10 object-contain",
  },
} as const;

export type BrandLogoSize = keyof typeof SIZES;

export default function BrandLogo({
  size = "nav",
  priority = false,
  className = "",
  showWordmark = false,
  wordmarkClassName = "",
}: {
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
  /** Extra CSS wordmark — usually unnecessary; lockup already includes QONNECT */
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2.5 sm:gap-3 ${className}`.trim()}
    >
      <Image
        src="/logo.png"
        alt={showWordmark ? "" : "ArQonnect"}
        width={INTRINSIC.w}
        height={INTRINSIC.h}
        priority={priority}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
        className={s.className}
      />
      {showWordmark ? (
        <span
          className={`truncate font-semibold tracking-tight text-[1.05rem] sm:text-[1.2rem] ${wordmarkClassName}`.trim()}
        >
          ArQonnect
        </span>
      ) : null}
    </span>
  );
}
