/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.btn-style': {
          '@apply bg-cyan-300 hover:bg-gray-400 hover:text-white p-3 rounded-lg text-lg font-bold w-32': {},
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

