import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // Ignore patterns
  {
    ignores: [
      "dist/**/*",
      ".astro/**/*",
      "node_modules/**/*",
      "public/**/*",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".env",
      ".env.production",
    ],
  },
  // TypeScript and Astro configs
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
