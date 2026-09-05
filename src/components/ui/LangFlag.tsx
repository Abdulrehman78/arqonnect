import Image from "next/image";
import type { ReactElement } from "react";
import { languageFlagSrc } from "@/lib/languages";

export default function LangFlag({
  code,
  name,
  size = "md",
}: {
  code: string;
  name: string;
  size?: "sm" | "md";
}): ReactElement {
  const sm = size === "sm";

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
