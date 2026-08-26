import type { BannerTheme } from "@/components/ui/InteractiveBackdrop";

export type NavAccent = {
  linkBg: string;
  linkText: string;
  underline: string;
  ctaActive: string;
  ctaDefault: string;
  ctaHover: string;
};

/** Quiet product nav — single blue accent across routes */
const productAccent: NavAccent = {
  linkBg: "bg-accent/10",
  linkText: "text-accent",
  underline: "bg-accent/70",
  ctaActive: "bg-accent-dim text-white ring-2 ring-accent/40",
  ctaDefault: "bg-accent text-white",
  ctaHover: "hover:bg-accent-dim hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]",
};

export const navAccents: Record<BannerTheme, NavAccent> = {
  home: productAccent,
  services: productAccent,
  crm: productAccent,
  cases: productAccent,
  pricing: productAccent,
  enterprise: productAccent,
  resources: productAccent,
  contact: productAccent,
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
