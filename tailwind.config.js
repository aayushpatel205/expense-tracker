/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#E5E7EB",
        lightGreen: "#4CBB17",
        darkGray: "#A9A9A9",
        redColor: "#EF4444"
      },
    },
  },
  plugins: [],
}
