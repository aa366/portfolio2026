import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [100, 75, 50, 25],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
