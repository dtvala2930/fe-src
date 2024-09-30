import withBundleAnalyzer from "@next/bundle-analyzer";
import withNextIntl from "next-intl/plugin";

const withNextIntlConfig = withNextIntl("./src/shared/libs/i18n.ts");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    compiler: {
      styledComponents: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ["@electric-sql/pglite"],
    },
    images: {
      domains: [
        "s3-ap-northeast-1.amazonaws.com",
        "ecbo-production.s3-ap-northeast-1.amazonaws.com",
        "cloak.ecbo.io",
        "ecbo-cloak-production.s3.ap-northeast-1.amazonaws.com",
      ],
    },
  })
);
