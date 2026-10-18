import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce consistent non-trailing-slash canonical URLs
  trailingSlash: false,

  async redirects() {
    return [
      // Discontinued voice-agent service redirects to relevant replacement services
      {
        source: "/clinic-ai-agent",
        destination: "/services/whatsapp-automation",
        permanent: true,
      },
      {
        source: "/coaching-institute-ai-agent",
        destination: "/services/whatsapp-automation",
        permanent: true,
      },
      {
        source: "/d2c-ai-agent",
        destination: "/services/whatsapp-automation",
        permanent: true,
      },
      {
        source: "/insurance-ai-agent",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/real-estate-ai-agent",
        destination: "/services/business-automation-crm",
        permanent: true,
      },

      // Retired tools and calculators
      {
        source: "/tools/missed-call-roi-calculator",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/tools",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/tools/:slug*",
        destination: "/services",
        permanent: true,
      },

      // Retired competitor comparison pages
      {
        source: "/compare/boldflow-vs-myoperator",
        destination: "/services/whatsapp-automation",
        permanent: true,
      },
      {
        source: "/compare/boldflow-vs-traditional-call-centers",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/compare/boldflow-vs-air-ai",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/compare/boldflow-vs-bland-ai",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/compare/boldflow-vs-vapi",
        destination: "/services/business-automation-crm",
        permanent: true,
      },
      {
        source: "/compare/:slug*",
        destination: "/services",
        permanent: true,
      },

      // Retired obsolete pricing & deployment roadmap
      {
        source: "/pricing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/what-to-expect",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/use-cases",
        destination: "/work",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
