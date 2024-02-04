/** @type {import('next').NextConfig} */
const nextConfig = {
  // if I want external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com"
      }
    ]
  }
}

module.exports = nextConfig
