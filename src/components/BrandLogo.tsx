/**
 * Full lockup: AR monogram + QONNECT wordmark (name is in the artwork).
 * Do not pair with separate "ArQonnect" text.
 */
import Image from "next/image";

const SIZES = {
  nav: { w: 160, h: 56, className: "h-12 w-auto sm:h-14" },
  footer: { w: 180, h: 64, className: "h-14 w-auto sm:h-16" },
  preloader: { w: 220, h: 88, className: "h-20 w-auto sm:h-24" },
  mark: { w: 40, h: 40, className: "h-10 w-10" },
} as const;

export type BrandLogoSize = keyof typeof SIZES;

export default function BrandLogo({
  size = "nav",
  priority = false,
  className = "",
}: {
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <Image
      src="/logo.png"
      alt="ArQonnect"
      width={s.w}
      height={s.h}
      priority={priority}
      className={`${s.className} object-contain ${className}`.trim()}
    />
  );
}
