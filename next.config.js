/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com',
        pathname: '/**',
      },
    ],
    domains: [
      'media.graphassets.com',
      'res.cloudinary.com',
      'media.dev.to',
      'media2.dev.to',
    ],
  },
};

module.exports = nextConfig;
