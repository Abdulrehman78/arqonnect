import Image from "next/image";
import type { ReactElement } from "react";
import { languageFlagSrc } from "@/lib/languages";

export default function LangFlag({
  code,
  name,
  badge,
  size = "md",
}: {
  code: string;
  name: string;
  badge?: string;
  size?: "sm" | "md";
}): ReactElement {
  const sm = size === "sm";

  if (badge) {
    return (
      <span
        className={`lang-flag-badge ${sm ? "lang-flag-badge--sm" : "lang-flag-badge--md"}`}
        aria-label={name}
        title={name}
      >
        {badge}
      </span>
    );
  }

  return (
    <Image
      src={languageFlagSrc(code)}
      alt={`${name} flag`}
      width={sm ? 18 : 22}
      height={sm ? 12 : 15}
      className={`lang-flag ${sm ? "lang-flag--sm" : "lang-flag--md"}`}
      unoptimized
    />
  );
}
