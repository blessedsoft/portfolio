/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-app',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co'
      }
    ]
  }
};

export default nextConfig;
