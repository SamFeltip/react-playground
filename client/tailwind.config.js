/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/Desktop.js"

  ],
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['nunito', 'sans-serif']
        }
    },
  },
  plugins: [],
}

