/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @TODO: Remove this once react-query updated
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
