/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050505", // Deep black
        "dark-secondary": "#111111",
        primary: "#8B5CF6", // Purple
        "neon-green": "#CCFF00", // The specific Lime/Neon Green from the image
        "neon-purple": "#6D28D9", // Deep Purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'sans-serif'], // For the big bold text "LANDING"
        marker: ['Permanent Marker', 'cursive'], // For the "PAGE" / "PROJECT" text
      },
      backgroundImage: {
        'urban-overlay': "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
      }
    },
  },
  plugins: [],
}
