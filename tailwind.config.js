/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nstc: ["Noto Serif TC", "sans-serif"],
        nssc: ["Noto Serif SC", "sans-serif"],
      },
      backgroundImage: {
        'exp-page-minimal-geo-bg': "url('/assets/Exp_Background.jpg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}