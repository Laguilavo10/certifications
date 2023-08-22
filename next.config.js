/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "laguilavo-certifications.vercel.app"]
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental:{
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true
  }
}

module.exports = nextConfig
