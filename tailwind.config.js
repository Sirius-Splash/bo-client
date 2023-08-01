/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        main: {
          primary: "#FCFCFB",

          secondary: "#030303",

          accent: "#CA0000",

          neutral: "#3F4242",

          "base-100": "#4b5563",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
};
