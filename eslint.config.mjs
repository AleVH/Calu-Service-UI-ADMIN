import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add custom rules here
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // ✅ allow JSX without importing React
    },
  },
];

export default eslintConfig;
