/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tea: {
          50: "#f2f7f0",
          100: "#e0ecd9",
          200: "#c2dab5",
          300: "#9dc389",
          400: "#77a862",
          500: "#588c44",
          600: "#437034",
          700: "#37592c",
          800: "#2e4826",
          900: "#273c21",
          950: "#122111",
        },
        gold: {
          400: "#d9b25f",
          500: "#c99a3d",
          600: "#ab7c2c",
        },
        // Aged-brass gold + heritage sage, paired with the tea green scale
        // above. No red/burgundy in the palette — green, white, gold only.
        brass: {
          300: "#e8c896",
          400: "#d9a656",
          500: "#c08a3e",
          600: "#a16f2f",
        },
        sage: {
          400: "#93a374",
          500: "#7a8b5c",
          600: "#62703f",
        },
      },
      fontFamily: {
        display: ["Merienda", "cursive"],
        body: ["Inter", "system-ui", "sans-serif"],
        // "Estate Reserve" type pairing, for the new Home/Header identity.
        editorial: ["Newsreader", "serif"],
        modern: ["Archivo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
