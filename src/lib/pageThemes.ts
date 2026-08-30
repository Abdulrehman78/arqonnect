import type { BannerTheme } from "@/components/ui/InteractiveBackdrop";

export type NavAccent = {
  linkBg: string;
  linkText: string;
  underline: string;
  ctaActive: string;
  ctaDefault: string;
  ctaHover: string;
};

/** Product nav — orange CTA */
const productAccent: NavAccent = {
  linkBg: "bg-gold/10",
  linkText: "text-gold",
  underline: "bg-gold/80",
  ctaActive: "bg-[#C87D46] text-[#0B0F12] ring-2 ring-gold/40",
  ctaDefault: "bg-[#EAA46B] text-[#0B0F12]",
  ctaHover: "hover:bg-[#C87D46] hover:shadow-[0_0_24px_rgba(234,164,107,0.45)]",
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
