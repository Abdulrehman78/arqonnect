/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Retired / unbuilt marketing URLs → live pages (keeps crawls clean for SEO audits).
    return [
      { source: "/crm", destination: "/services", permanent: true },
      { source: "/case-studies", destination: "/demo", permanent: true },
      { source: "/enterprise", destination: "/pricing", permanent: true },
      { source: "/resources", destination: "/faq", permanent: true },
      { source: "/why", destination: "/process", permanent: true },
      { source: "/values", destination: "/process", permanent: true },
      { source: "/see-it-work", destination: "/demo", permanent: true },
      { source: "/proof", destination: "/demo", permanent: true },
      { source: "/about", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
