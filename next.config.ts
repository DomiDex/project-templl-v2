import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['fdvyzzcnzlxebbtluysv.supabase.co'], // Replace with your Supabase project domain
  },
};

export default nextConfig;
