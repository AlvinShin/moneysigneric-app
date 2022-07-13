/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "eric": "url('../public/favicon.png')"
      },
      keyframes: {
        scrollUp: {
          "100%": { transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
}
