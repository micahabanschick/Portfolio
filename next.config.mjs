/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/CSS/JS export — drops straight into Caddy's file_server.
  // No Node runtime required on the origin box.
  output: "export",
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
  },
  // Emit /about/index.html style URLs so Caddy serves clean paths.
  trailingSlash: true,
};

export default nextConfig;
