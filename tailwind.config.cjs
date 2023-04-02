/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nightOwl: {
          primary: "#c792ea",
          muted: "#03243e",
          border: "#494f59",
          backdrop: "rgba(3, 36, 62, 0.5)",
          transparent: "rgba(3, 36, 62, 0)",
          background: "#011627",
          text: "#abb2bf",
          variable: "#82AAFF",
          accent: "#F78C6C",
          property: "#fff",
          string: "#ecc48d",
          comment: "#717a8a",
          pink: "#FF9CBE",
        },
        rosePine: {
          base: "#191724",
          surface: "#1f1d2e",
          overlay: "#26233a",
          muted: "#6e6a86",
          subtle: "#908caa",
          text: "#e0def4",
          love: "#eb6f92",
          gold: "#f6c177",
          rose: "#ebbcba",
          pine: "#31748f",
          foam: "#9ccfd8",
          iris: "#c4a7e7",
          highlightLow: "#21202e",
          highlightMed: "#403d52",
          highlightHigh: "#524f67",
        },
      },
    },
    plugins: [],
  },
};
