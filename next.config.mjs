/** @type {import('next').NextConfig} */
const nextConfig = {
  // basepath '/stock'. If you want to deploy under a subpath, set the basePath here.
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
