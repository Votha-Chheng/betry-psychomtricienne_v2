/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zupimages.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
