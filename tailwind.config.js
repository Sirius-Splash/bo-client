module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCFCFB",
        secondary: "#030303",
        accent: "#CA0000",
        neutral: "#3F4242",
      },
    },
  },
  daisyui: {
    themes: [
      {
        gymbuddy: {
          primary: "#FCFCFB",
          secondary: "#030303",
          accent: "#CA0000",
          neutral: "#3F4242",
        }
      },
      "dark"
    ],
  },
  plugins: [require("daisyui")],
}

