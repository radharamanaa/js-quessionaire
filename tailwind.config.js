module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-greensh": "#011936",
        "color-yellwsh": "#F9DC5C",
        "color-limish": "#ED254E",
        "color-wh": "#FFFEFD",
      },
      fontFamily: {
        ovo: ["Ovo", "serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    plugins: [],
  },
};
