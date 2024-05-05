import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { zinc } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: zinc,
        accent: "#FF9CBE",
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
