/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        background: "hsl(216, 12%, 8%)",
        "card-bg": "hsl(213, 19%, 18%)",
        "circle-focus": "hsl(217, 12%, 63%)",
        "small-text": "hsl(217, 12%, 63%)",
      },
      fontFamily: {
        body: ["Overpass, sans-serif"],
      },
    },
    plugins: [],
  },
};
