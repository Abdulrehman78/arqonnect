/**
 * Brand mark (AR + QONNECT lockup). Optional text wordmark beside it.
 */
import Image from "next/image";

const SIZES = {
  /** Stacked AR + QONNECT lockup — sized for strong nav presence */
  nav: { w: 360, h: 144, className: "h-28 w-auto sm:h-36 lg:h-40" },
  footer: { w: 360, h: 144, className: "h-28 w-auto sm:h-36" },
  preloader: { w: 420, h: 168, className: "h-36 w-auto sm:h-44" },
  mark: { w: 64, h: 64, className: "h-16 w-16" },
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
  /** Show “ArQonnect” text beside the lockup */
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  const s = SIZES[size];
  return (
    <span className={`inline-flex items-center gap-3 sm:gap-3.5 ${className}`.trim()}>
      <Image
        src="/logo.png"
        alt={showWordmark ? "" : "ArQonnect"}
        width={s.w}
        height={s.h}
        priority={priority}
        className={`${s.className} object-contain object-left`}
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
