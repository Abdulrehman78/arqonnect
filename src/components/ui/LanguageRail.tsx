"use client";

import { useCallback, useEffect, useState, type ReactElement } from "react";
import LangFlag from "@/components/ui/LangFlag";
import { LANGUAGES } from "@/lib/languages";

const STORAGE_KEY = "arq-lang-rail";

function LangChip({ code, name }: { code: string; name: string }): ReactElement {
  return (
    <span className="lang-chip lang-chip--rail">
      <span className="flag">
        <LangFlag code={code} name={name} size="sm" />
      </span>
      <span className="lang-chip-name">{name}</span>
    </span>
  );
}

/** Fixed left-edge vertical marquee — toggleable, never shifts page layout. */
export default function LanguageRail(): ReactElement {
  const [open, setOpen] = useState(false);
  const loop = [...LANGUAGES, ...LANGUAGES];

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setOpen(true);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <div className="lang-rail-root">
      <div className="lang-rail-inner">
        <button
          type="button"
          className={`lang-rail-tab ${open ? "lang-rail-tab--open" : ""}`}
          onClick={toggle}
          aria-expanded={open}
          aria-controls="lang-rail-panel"
          aria-label={open ? "Hide languages" : "Show languages"}
        >
          <span className="lang-rail-tab-glow" aria-hidden />
          <span className="lang-rail-tab-shine" aria-hidden />
          <span className="lang-rail-tab-accent" aria-hidden />

          <span className="lang-rail-tab-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.8 4 6.2 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6.2-4 9s1.5 6.2 4 9" />
            </svg>
          </span>

          <span className="lang-rail-tab-body">
            <span className="lang-rail-tab-dot" aria-hidden />
            <span className="lang-rail-tab-label">Languages</span>
            <span className="lang-rail-tab-count">{LANGUAGES.length}</span>
          </span>

          <span className={`lang-rail-tab-chevron ${open ? "lang-rail-tab-chevron--open" : ""}`} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </button>

        <aside
          id="lang-rail-panel"
          className={`lang-rail-panel ${open ? "lang-rail-panel--open" : ""}`}
          aria-hidden={!open}
        >
          <div className="lang-rail-fade lang-rail-fade--top" />
          <div className="lang-rail-fade lang-rail-fade--bottom" />

          <div className={`lang-rail-track lang-rail-track--up ${open ? "" : "lang-rail-track--paused"}`}>
            {loop.map(({ code, name }, i) => (
              <LangChip key={`${name}-${i}`} code={code} name={name} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
