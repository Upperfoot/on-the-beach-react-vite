import js from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin"; // ✅ Import ESLint Plugin
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jest from "eslint-plugin-jest";
import jsxA11Y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"], // ✅ Ignore build folders
  },
  {
    files: ["**/*.{ts,tsx}"], // ✅ Apply ESLint to TypeScript & React files
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tsParser, // ✅ Corrected TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // ✅ Explicitly register the TypeScript plugin
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11Y,
      jest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules, // ✅ Apply recommended TypeScript rules
      "react/react-in-jsx-scope": "off", // ✅ No need in Next.js/Vite
      "react/jsx-pascal-case": "off", // ✅ Ignore naming warnings
      "no-unused-vars": "off", // ✅ Avoid duplicate rule
      "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
    },
  }
);
