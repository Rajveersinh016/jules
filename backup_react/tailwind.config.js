/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#c9a34f", // Gold
        "primary-dark": "#b08d3e",
        "background-light": "#f8f7f6",
        "background-dark": "#1e1b14",
        "text-dark": "#171512",
        "text-light": "#f8f7f6",
        "card-light": "#ffffff",
        "card-dark": "#2a2721",
        // Additional colors observed in other screens
        "surface-light": "#ffffff",
        "surface-dark": "#2c2820",
        "charcoal": "#171512",
      },
      fontFamily: {
        "display": ["Manrope", "Plus Jakarta Sans", "Noto Sans", "sans-serif"],
        "sans": ["Manrope", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
