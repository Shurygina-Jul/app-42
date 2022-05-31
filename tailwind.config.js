const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      lg: { max: "1311px" }, // $laptop
      md: { max: "1023px" }, // $tablet
      sm: { max: "767px" }, // $mobile
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#111812",
      yellow: "#F9ED69",
      pink: "#F19CBB",
    },
    fontSize: {
      base: ["18px", "28px"],
      xs: ["14px", "24px"],
      lg: ["28px", "36px"],
    },
    fontFamily: {
      decima: ['"Decima"', "serif"],
    },

    extend: {
      backgroundImage: {
        dark: "url('./bg-dark.jpg')",
        light: "url('./bg-light.jpg')",
        neitral: "url('./bg-neitral.jpg')",
      },
    },
  },
  plugins: [],
};
