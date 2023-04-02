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
            },
        },
        plugins: [],
    },
}
