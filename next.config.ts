/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["145.223.118.140"], // Add your backend's hostname here
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "http://145.223.118.140/api/:path*", 
      },
    ];
  },
};

module.exports = nextConfig;
