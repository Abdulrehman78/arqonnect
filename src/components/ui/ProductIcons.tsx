import type { ReactElement } from "react";

/** Small inline SVG icons for product storytelling (stroke, gold-compatible). */
export function IconChannels({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconInbox({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 13h4l2 2h6l2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBot({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="8" width="14" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9.5" cy="13" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1.2" fill="currentColor" />
      <path d="M12 4v4M9 19v2M15 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHandoff({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 18c1-3 3.5-4.5 6-4.5M21 18c-1-3-3.5-4.5-6-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 12h4M14 12l-1.5-1.5M14 12l-1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBook({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 5a2 2 0 012-2h11v16H6a2 2 0 00-2 2V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 7h6M8 11h6M8 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFlow({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 12H14M14 12l4-4.5M14 12l4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlug({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 7V3M15 7V3M8 7h8v5a4 4 0 01-8 0V7zM12 16v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Horizontal flow diagram: channels → AI → inbox → human */
export function InboxFlowDiagram({ className = "" }: { className?: string }): ReactElement {
  const nodes = [
    { label: "Channels", Icon: IconChannels },
    { label: "AI Twin", Icon: IconBot },
    { label: "Inbox", Icon: IconInbox },
    { label: "Human", Icon: IconHandoff },
  ];
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}
      role="img"
      aria-label="Channels flow into AI Twin, shared inbox, then human handoff"
    >
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-[4.5rem] flex-col items-center gap-2 rounded-xl border border-line bg-panel/70 px-3 py-3 text-accent backdrop-blur-sm sm:min-w-[5.5rem]">
            <n.Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-text-dim">
              {n.label}
            </span>
          </div>
          {i < nodes.length - 1 ? (
            <span className="hidden text-gold sm:inline" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export const VALUE_ICONS = [IconBot, IconInbox, IconHandoff, IconCalendar, IconShield] as const;

export const PROCESS_ICONS = [
  IconPlug,
  IconBook,
  IconBook,
  IconInbox,
  IconBot,
  IconHandoff,
  IconFlow,
] as const;

export const PILLAR_ICONS = [IconBot, IconFlow, IconShield] as const;
