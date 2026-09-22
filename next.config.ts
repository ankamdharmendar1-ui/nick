import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", has: [{ type: "query", key: "tab", value: "names-mixer" }], destination: "/names-mixer", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "nickname-to-symbols" }], destination: "/nickname-to-symbols", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "cool-text" }], destination: "/cool-text", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "grouped-by-symbol" }], destination: "/grouped-by-symbol", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "male-names" }], destination: "/male-names", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "female-names" }], destination: "/female-names", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "password-generator" }], destination: "/password-generator", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "domain-names" }], destination: "/domain-names", permanent: true },
      { source: "/", has: [{ type: "query", key: "tab", value: "stylish-text" }], destination: "/stylish-text", permanent: true },
    ];
  },
};

export default nextConfig;
