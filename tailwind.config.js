/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4D3E", // English Green
        secondary: "#2D6A4F", // Darker shade
        neutral: "#4a4a4a", // Medium Gray
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
