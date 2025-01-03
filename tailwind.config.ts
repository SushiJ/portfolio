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
        vesper: {
          bg: '#101010',
          bg1: "#1c1c1c",
          fg: "#fafafa",
          fg1: '#505050',
          grey: "#666666",

          cyan: "#99FFE4",
          red: '#FF8080',
          yellow: '#FFC799',
          orange: '#FF7300',

          blue: '#38a89d'
        }
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
