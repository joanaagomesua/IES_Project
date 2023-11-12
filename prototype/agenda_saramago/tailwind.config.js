/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
}
