/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a", // Deep black
        "dark-secondary": "#121212",
        primary: "#FF0055", // The Hot Pink/Red from the reference
        "nft-purple": "#7000FF", // Secondary accent
        "glass": "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'], // Back to clean sans-serif
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': "conic-gradient(from 180deg at 50% 50%, #FF0055 0deg, #7000FF 180deg, #FF0055 360deg)",
      },
      animation: {
        'spin-slow-custom': 'spin 10s linear infinite',
        'twinkle': 'twinkle 2s infinite ease-in-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        }
      }
    },
  },
  plugins: [],
}
