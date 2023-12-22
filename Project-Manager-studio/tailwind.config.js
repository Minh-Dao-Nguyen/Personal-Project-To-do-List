/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#1D2125",
        "secondary-gray": "#161A1D",
        "gray-300": "#333B43",
        "red-300": "#912020",
        "aqua-300": "#1A4A57",
        "blue-400": "#161B22",
        "hover-gray-200": "#2D333B",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px", 
      md: "1060px", 
    }
  },
  plugins: [],
}