import type { MetadataRoute } from "next";

const SITE = "https://www.arqonnect.io";

/** Public marketing + legal URLs for Google Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/process", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/demo", changeFrequency: "monthly", priority: 0.85 },
    { path: "/industries", changeFrequency: "monthly", priority: 0.88 },
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.86 },
    { path: "/roi", changeFrequency: "monthly", priority: 0.84 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.95 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/cookies", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/security", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/refund", changeFrequency: "yearly", priority: 0.25 },
    { path: "/legal/acceptable-use", changeFrequency: "yearly", priority: 0.25 },
    { path: "/legal/dpa", changeFrequency: "yearly", priority: 0.25 },
    { path: "/legal/data-deletion", changeFrequency: "yearly", priority: 0.25 },
  ];

  return pages.map((p) => ({
    url: `${SITE}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
