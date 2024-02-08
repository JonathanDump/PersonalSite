/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "/src/scss/_variables";`,
  },
};

export default nextConfig;
