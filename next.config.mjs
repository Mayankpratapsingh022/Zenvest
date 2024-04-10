/** @type {import('next').NextConfig} */
const nextConfig = { 
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
    images: {
    domains: ['aceternity.com'],
    domains: ['images.unsplash.com'],
  },
};



export default nextConfig;

