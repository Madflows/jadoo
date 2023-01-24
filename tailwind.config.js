/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14183E",
        jellyBean: "#DF6951",
        orange: "#F1A501",
        lightGray: "#5E6282",
      },
      backgroundImage: {
        blueGradient:
          "linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%)",
        conicGradient:
          "conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg)",
      },
    },
  },
  plugins: [],
};
