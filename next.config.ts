import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/My-React-Website',
  output: 'export',
  reactStrictMode: true,
}

// const withTranspilation = require("next-transpile-modules")([
//   "dotenv",
//   "framer-motion",
//   "howler",
//   "next",
//   "react",
//   "react-audio-visualize",
//   "react-dom",
//   "react-icons",
//   "react-use-measure",
//   "react-usestateref",
//   "tailwind-merge"
// ])

export default nextConfig;
