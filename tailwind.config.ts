/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        '0': 'rect(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
}

