/** @type {import('next').NextConfig} */
// Deploy: index.html and _next/ must be in the same folder. WordPress: if the site
// lives in a sub-URL (e.g. yoursite.com/landing/), the default /_next/ paths hit WP,
// not your files — set NEXT_BASE_PATH=/landing in .env.production, rebuild, re-upload.
// Optional: NEXT_ASSET_PREFIX=https://your-domain.com (must be http(s); rarely needed)
const basePath = process.env.NEXT_BASE_PATH?.replace(/\/$/, '') || ''
const rawAsset = process.env.NEXT_ASSET_PREFIX?.replace(/\/$/, '') || ''
const assetPrefix = /^https?:\/\//.test(rawAsset) ? rawAsset : ''

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
