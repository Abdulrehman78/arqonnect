import type { BannerTheme } from "@/components/ui/InteractiveBackdrop";

export type NavAccent = {
  linkBg: string;
  linkText: string;
  underline: string;
  ctaActive: string;
  ctaDefault: string;
  ctaHover: string;
};

export const navAccents: Record<BannerTheme, NavAccent> = {
  home: {
    linkBg: "bg-accent/10",
    linkText: "text-accent",
    underline: "bg-accent/70",
    ctaActive: "bg-accent-dim text-bg ring-2 ring-accent/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  services: {
    linkBg: "bg-orange-500/10",
    linkText: "text-orange-300",
    underline: "bg-orange-400/70",
    ctaActive: "bg-orange-600 text-bg ring-2 ring-orange-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  crm: {
    linkBg: "bg-indigo-500/10",
    linkText: "text-indigo-300",
    underline: "bg-indigo-400/70",
    ctaActive: "bg-indigo-600 text-bg ring-2 ring-indigo-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  cases: {
    linkBg: "bg-cyan/10",
    linkText: "text-cyan",
    underline: "bg-cyan/70",
    ctaActive: "bg-cyan-600 text-bg ring-2 ring-cyan/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  pricing: {
    linkBg: "bg-emerald-500/10",
    linkText: "text-emerald-300",
    underline: "bg-emerald-400/70",
    ctaActive: "bg-emerald-600 text-bg ring-2 ring-emerald-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  enterprise: {
    linkBg: "bg-sky-500/10",
    linkText: "text-sky-300",
    underline: "bg-sky-400/70",
    ctaActive: "bg-sky-600 text-bg ring-2 ring-sky-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  resources: {
    linkBg: "bg-amber-500/10",
    linkText: "text-amber-300",
    underline: "bg-amber-400/70",
    ctaActive: "bg-amber-600 text-bg ring-2 ring-amber-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
  contact: {
    linkBg: "bg-sky-500/10",
    linkText: "text-sky-300",
    underline: "bg-sky-400/70",
    ctaActive: "bg-sky-600 text-bg ring-2 ring-sky-400/40",
    ctaDefault: "bg-accent text-bg",
    ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]",
  },
};

export function themeFromPath(pathname: string): BannerTheme {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/crm")) return "crm";
  if (pathname.startsWith("/case-studies")) return "cases";
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/enterprise")) return "enterprise";
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}
