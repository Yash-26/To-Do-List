/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textCol: "#0c180f",
        backgroundCol: "#e4f1e8",
        primaryCol: "#aad4b6",
        secondaryCol: "#cce5d3",
        accentCol: "#4d9962",
      }
    },
  },
  plugins: [],
}

