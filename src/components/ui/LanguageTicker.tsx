"use client";

import type { ReactElement } from "react";
import LangFlag from "@/components/ui/LangFlag";
import { LANGUAGES_ROW1, LANGUAGES_ROW2, type Language } from "@/lib/languages";

function LangRow({
  items,
  reverse = false,
}: {
  items: Language[];
  reverse?: boolean;
}): ReactElement {
  const loop = [...items, ...items];
  return (
    <div
      className={`lang-ticker flex gap-3 ${reverse ? "lang-ticker--reverse" : ""}`}
      aria-hidden={reverse}
    >
      {loop.map(({ code, name, badge }, i) => (
        <span key={`${name}-${i}`} className="lang-chip">
          <span className="flag">
            <LangFlag code={code} name={name} badge={badge} />
          </span>
          {name}
        </span>
      ))}
    </div>
  );
}

/** Horizontal dual-row ticker — used on inner pages (e.g. Proof card). */
export default function LanguageTicker({
  className = "",
  label = "Speaks the room's language",
}: {
  className?: string;
  label?: string;
}): ReactElement {
  return (
    <div
      className={`lang-ticker-band w-full border-y border-line bg-bg-alt/80 backdrop-blur-sm ${className}`}
      aria-label={label}
    >
      <p className="lang-ticker-label">
        <span className="text-accent" aria-hidden>
          ●
        </span>{" "}
        {label}
      </p>
      <div className="lang-ticker-wrap">
        <LangRow items={LANGUAGES_ROW1} />
        <LangRow items={LANGUAGES_ROW2} reverse />
      </div>
    </div>
  );
}
