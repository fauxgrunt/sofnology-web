import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // `next lint` applied these implicitly; the ESLint CLI needs them spelled out.
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Every image goes through next/image so it gets AVIF/WebP and
      // per-device resizing. This is an error, not a warning, because the
      // codebase previously accumulated 59 inline suppressions of it.
      "@next/next/no-img-element": "error",
    },
  },
];

export default eslintConfig;
