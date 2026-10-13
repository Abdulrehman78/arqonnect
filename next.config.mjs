/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    const cal =
      process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
      "https://cal.com/abdul-rehman/30min";
    return [
      {
        source: "/pricing",
        destination: cal,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
