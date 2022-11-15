module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "reddish":"#F0386B",
        "color-wh": "#FFFEFD",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        vidaloka: ["Vidaloka", "serif"],
      },
    },
    plugins: [],
  },
};
