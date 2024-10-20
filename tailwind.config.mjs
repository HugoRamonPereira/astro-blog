/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Play", "sans-serif"],
      },
      colors: {
        "main-purple": "#5f47fc",
        "darker-purple": "#553fe2",
      },
    },
  },
  plugins: [],
};
