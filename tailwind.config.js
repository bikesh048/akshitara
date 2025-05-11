// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        amber: {
          600: "#F59E0B",
          700: "#D97706",
        },
      },
    },
  },
  plugins: [],
};
