/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
          ssr: true,
          minify: true,
        },
      },
      swcMinify: true,
};

export default nextConfig;
