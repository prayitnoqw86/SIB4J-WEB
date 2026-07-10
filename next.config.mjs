/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Jangan auto-redirect trailing slash: situs yang diproksi (mis. DPMPTSP)
  // memakai URL ber-trailing-slash (/landing2/). Tanpa ini, normalisasi Next
  // membuang slash tsb dan bentrok dengan redirect upstream → loop tak berujung.
  skipTrailingSlashRedirect: true,
};
export default nextConfig;
