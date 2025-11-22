/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E91E63',
          orange: '#FF9800',
          cream: '#FFF3E0',
          brown: '#3E2723',
        }
      }
    },
  },
  plugins: [],
}
