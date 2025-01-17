import vercelStyleGuide from "@vercel/style-guide/prettier";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  ...vercelStyleGuide,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react$",

    "<THIRD_PARTY_MODULES>",
    "",
    "^@/components/(.*)$",
    "",
    "^@/hooks/(.*)$",
    "",
    "@/store",
    "^@/store/(.*)$",
    "",
    "^@/services/(.*)$",
    "",
    "^@/utils/(.*)$",
    "",
    "^@/assets/(.*)$",
    "",
    "^@/constants/(.*)$",
    "",
    "^[./]",
  ],

  importOrderTypeScriptVersion: "5.5.4",

  tailwindFunctions: ["clsx", "cva", , "tw", "cn", "twMerge"],
};
