/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { missingSuspenseWithCSRBailout: false },
  images: {
    domains: ["images.unsplash.com"],
  },
  output: "standalone",
};

export default nextConfig;
