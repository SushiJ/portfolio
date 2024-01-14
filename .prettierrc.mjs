// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: false,
  tailwindConfig: "./tailwind.config.ts",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
