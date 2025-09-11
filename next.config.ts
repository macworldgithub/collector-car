/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // For local development (e.g., images from localhost)
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',  // Or specify '3000' if needed
        pathname: '/**',  // Matches any path (e.g., /api/images/**)
      },
      // For your S3 bucket (signed URLs)
      {
        protocol: 'https',
        hostname: 'ccdmacworld.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',  // Matches any path like /cars/uuid.webp?X-Amz-...
      },
    ],
  },
};

module.exports = nextConfig;