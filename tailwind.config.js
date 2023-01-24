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
      },
    },
  },
  plugins: [],
};
