import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//       {
//         protocol: 'http',
//         hostname: '**',
//       },
//     ],
//   },


// };


// export default nextConfig;

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },

  outputFileTracingIncludes: {
    // Ensure the .prisma folder and binaries are traced
    './node_modules/@prisma/client': ['./.prisma'],
    './prisma': ['./'],
  },

  webpack: (config, { isServer }) => {
    // ✅ Remove this line entirely:
    // config.externals.push('@prisma/client');

    return config;
  },
};


export default nextConfig
