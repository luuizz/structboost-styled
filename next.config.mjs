/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
          minify: true,
          ssr: true,
          displayName: false,
          fileName: false,
        },
      },
};

export default nextConfig;
