import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  eslintConfigPrettier,
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
  },
  {
    rules: {
      // "require-await": "error",
    },
  },
);
