/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-app',
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com'
      }
    ]
  }
};

export default nextConfig;
