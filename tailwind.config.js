/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": "calc(100vh - 6rem - 6rem)",
      },
    },
    screens: {
      mb: "413px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
    },
  },

  plugins: [],
};
