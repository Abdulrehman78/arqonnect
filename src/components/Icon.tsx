export function Icon({ name, className }: { name: string; className?: string }) {
  const common = {
    className: className ?? "w-5 h-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "services":
      return (
        <svg {...common}>
          <path d="M12 2 3 7l9 5 9-5-9-5Z" />
          <path d="M3 12l9 5 9-5" />
          <path d="M3 17l9 5 9-5" />
        </svg>
      );
    case "crm":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 14h4" />
        </svg>
      );
    case "case-studies":
      return (
        <svg {...common}>
          <path d="M4 19V6a2 2 0 0 1 2-2h7l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M13 4v5h5" />
        </svg>
      );
    case "pricing":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 15.2c.6.5 1.4.8 2.5.8 1.7 0 3-1 3-2.3 0-1.4-1.2-1.9-3-2.3-1.8-.4-3-.9-3-2.3 0-1.3 1.3-2.3 3-2.3 1.1 0 1.9.3 2.5.8" />
          <path d="M12 6.5v11" />
        </svg>
      );
    case "enterprise":
      return (
        <svg {...common}>
          <path d="M3 21V8l7-4 7 4v13" />
          <path d="M10 21v-6h4v6" />
          <path d="M17 21V11l4 2v8" />
        </svg>
      );
    case "resources":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path d="M4 4h16v14H7l-3 3V4Z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case "why":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "values":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
        </svg>
      );
    case "about":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" />
        </svg>
      );
    case "demo":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "see-it-work":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 18v3" />
        </svg>
      );
    case "proof":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M7 15l3-4 3 2 4-6" />
        </svg>
      );
    case "process":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M8.2 10.8 10 7.6M14 7.6l1.8 3.2M15.8 13.2 14 16.4M10 16.4l-1.8-3.2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
