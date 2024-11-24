/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Sans"],
      },
      colors: {
        brand: {
          light: '#3AB0FF',
          DEFAULT: '#0F52BA',
          dark: '#082567',
        },
      },
    },
  },
  plugins: [],
}
