import redirects from "./redirects.mjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "accelerometer=(), autoplay=(self), bluetooth=(), camera=(), clipboard-read=(), clipboard-write=(self), display-capture=(), fullscreen=(self), geolocation=(), gyroscope=(), hid=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(self), publickey-credentials-get=(), screen-wake-lock=(), serial=(), usb=()",
          },
        ],
      },
    ];
  },
  compress: false,
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
  env: {
    NEXT_SPACE_ID: process.env.NEXT_SPACE_ID,
    NEXT_ENV_ID: process.env.NEXT_ENV_ID,
    NEXT_ACCESS_TOKEN: process.env.NEXT_ACCESS_TOKEN,
    NEXT_REQ_URL: process.env.NEXT_REQ_URL,
    NEXT_USERWAY_CDN: process.env.NEXT_USERWAY_CDN,
    NEXT_USERWAY_ID: process.env.NEXT_USERWAY_ID,
    NEXT_PUBLIC_CONTACT_US_SIDBAR_ID: process.env.NEXT_PUBLIC_CONTACT_US_SIDBAR_ID,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_BASE_URL_CAREER: process.env.NEXT_PUBLIC_BASE_URL_CAREER,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_CMA_TOKEN: process.env.NEXT_CMA_TOKEN,
    NEXT_ALGOLIA_APP_ID: process.env.NEXT_ALGOLIA_APP_ID,
    NEXT_ALGOLIA_API_KEY: process.env.NEXT_ALGOLIA_API_KEY,
    NEXT_ALGOLIA_INDEX_NAME: process.env.NEXT_ALGOLIA_INDEX_NAME,
    NEXT_ALGOLIA_FE_APP_ID: process.env.NEXT_ALGOLIA_FE_APP_ID,
    NEXT_ALGOLIA_FE_API_KEY: process.env.NEXT_ALGOLIA_FE_API_KEY,
    NEXT_ALGOLIA_FE_INDEX_NAME: process.env.NEXT_ALGOLIA_FE_INDEX_NAME,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_DIRECTION_ACTION_AUTH_LIVING: process.env.NEXT_DIRECTION_ACTION_AUTH_LIVING,
    NEXT_DIRECTION_OID_AUTH_LIVING: process.env.NEXT_DIRECTION_OID_AUTH_LIVING,
    NEXT_DIRECTION_RETURNURL_AUTH_LIVING: process.env.NEXT_DIRECTION_RETURNURL_AUTH_LIVING,
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
