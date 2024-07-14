/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#416fcf',     
        secondary: '#f6f6f6', 
        accent: '#F5F8FA',     
        danger: '#E0245E',     
        customGreen: '#00FF00', 
      },
    },
  },
  plugins: [],
}

