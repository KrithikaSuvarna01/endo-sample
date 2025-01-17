import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { tseslint } from "typescript-eslint"; // Corrected import
import { fileURLToPath } from "url";
import path from "path";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const project = path.resolve(__dirname, "./tsconfig.json");

// Import Vercel style guide configurations as functions
import { browserConfig } from "@vercel/style-guide/eslint/browser";
import { reactConfig } from "@vercel/style-guide/eslint/react";
import { typescriptConfig } from "@vercel/style-guide/eslint/typescript";

export default tseslint.config(
  { ignores: ["dist"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  browserConfig(),
  reactConfig(),
  typescriptConfig(),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project,
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      "jsx-a11y": {
        components: {
          Button: "button",
          Image: "img",
          Input: "input",
          Link: "a",
        },
      },
    },
  },
);
