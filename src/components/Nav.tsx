"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navAccents, themeFromPath } from "@/lib/pageThemes";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/crm", label: "CRM" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/resources", label: "Resources" },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const contactActive = isActivePath(pathname, "/contact");
  const accent = navAccents[themeFromPath(pathname)];
  const overMedia = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-bg/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-3.5 sm:gap-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 no-underline">
          <Image
            src="/logo.png"
            alt="ArQonnect"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span
            className={`truncate text-[15px] font-semibold tracking-tight ${overMedia ? "text-nav-media" : "text-text"}`}
          >
            ArQonnect
          </span>
        </Link>

        <nav
          className="hidden min-w-0 xl:flex xl:justify-center"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-0.5">
            {links.map((l) => {
              const active = isActivePath(pathname, l.href);
              return (
                <li key={l.href} className="shrink-0">
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium no-underline transition-colors ${
                      active
                        ? overMedia
                          ? "text-nav-media"
                          : "text-text"
                        : overMedia
                          ? "text-nav-media-dim hover:text-nav-media"
                          : "text-text-dim hover:text-text"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent/80" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <ThemeToggle
            className={
              overMedia
                ? "border-nav-media bg-nav-media text-nav-media hover:bg-nav-media-hover"
                : undefined
            }
          />
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={`ai-cta-breath ai-cta-shine hidden md:inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold no-underline transition-all lg:px-5 lg:text-sm ${
              contactActive
                ? accent.ctaActive
                : `${accent.ctaDefault} ${accent.ctaHover}`
            }`}
            data-magnetic
            data-cursor="book"
            data-cursor-label="Book"
          >
            Book a Demo
          </Link>

          <button
            type="button"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${overMedia ? "border-nav-media text-nav-media" : "border-line text-text"} xl:hidden`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Full-screen overlay nav (burger) */}
      <div
        className={`nav-overlay xl:hidden ${menuOpen ? "is-open" : "pointer-events-none invisible"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto w-full max-w-lg" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {links.map((l, i) => {
              const active = isActivePath(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className="nav-overlay-link"
                    style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : "0ms" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="nav-overlay-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo →
          </Link>
        </nav>
      </div>
    </header>
  );
}
