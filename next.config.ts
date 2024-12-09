/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.getsetcv.com"], // Add your backend's hostname here
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "http://api.getsetcv.com/api/:path*", 
      },
    ];
  },
};

module.exports = nextConfig;
