/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "gold":"#FFB800",
        "bgss":"#191C1F",
        "cusblue":"#A1ACB5",
        "bck":"#191C1F",
        "blu":"#F1F5F7",
        "gradf":"#B79B6D",
        "gradt":"#E3D297"
      },
    },
  },
  plugins: [],
};
