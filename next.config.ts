import type { NextConfig } from "next";
const config:NextConfig={output:"export",turbopack:{rules:{"*.css":{loaders:["@tailwindcss/turbopack"],as:"*.css"}}}};
export default config;
