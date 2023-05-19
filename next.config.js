/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**"
      }
    ],
    domains: [
      "lh3.googleusercontent.com",
      "shelta.se",
      "adaysmarch.centracdn.net"
    ]
  }
};

module.exports = nextConfig;
