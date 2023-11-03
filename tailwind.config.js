/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgb(217 249 157)"
      }
    },
  },
  plugins: [],
}

