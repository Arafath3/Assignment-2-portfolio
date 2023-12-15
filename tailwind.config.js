/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'primary': '#4831d4',
        'sec': '#ccf381',
        'white': '#FFFF'
      }
    },
  },
  plugins: [],
}