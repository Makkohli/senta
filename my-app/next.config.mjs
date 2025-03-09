/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false, // Fix issues with missing slashes in routes
  output: 'standalone', // Ensures the app works on Render
}

export default nextConfig
