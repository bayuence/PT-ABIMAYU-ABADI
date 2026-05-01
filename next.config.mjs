/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Mengizinkan akses HMR dari HP (WiFi yang sama)
  allowedDevOrigins: ['192.168.1.22'],
}

export default nextConfig
