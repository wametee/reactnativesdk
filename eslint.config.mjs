import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply to all JavaScript, TypeScript, JSX, and TSX files
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      globals: globals.browser, // Browser environment globals
      ecmaVersion: "latest", // Latest ECMAScript standard
      sourceType: "module", // Use ES modules
    },
  },

  // Base JavaScript rules
  pluginJs.configs.recommended,

  // TypeScript-specific rules
  {
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with '_'
      "@typescript-eslint/explicit-function-return-type": "off", // Let TypeScript infer return types
    },
  },

  // React and React Native-specific rules
  {
    plugins: {
      react: pluginReact,
      "react-native": pluginReactNative,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactNative.configs.all.rules,
      "react/jsx-uses-react": "off", // No need to import React in modern JSX
      "react/react-in-jsx-scope": "off", // React 17+ JSX transformation
      "react/prop-types": "off", // Use TypeScript for prop validation
    },
  },

  // Prettier integration for consistent formatting
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Mark formatting issues as errors
    },
  },
];
