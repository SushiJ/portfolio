import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { zinc } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {
      colors: {
        base: "#030303",
        text: "#EDEDED",
        accent: "#ffdb89",
        gray: zinc,
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
