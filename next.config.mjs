/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/crm", destination: "/services", permanent: true },
      { source: "/enterprise", destination: "/pricing", permanent: true },
      { source: "/resources", destination: "/faq", permanent: true },
      { source: "/why", destination: "/process", permanent: true },
      { source: "/values", destination: "/process", permanent: true },
      { source: "/see-it-work", destination: "/demo", permanent: true },
      { source: "/proof", destination: "/case-studies", permanent: true },
    ];
  },
};

export default nextConfig;
