module.exports = {
  content: [
    "./src/**/**/*.js"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
        "160": "40rem",
        "192": "48rem"
      },
      gridTemplateRows: {
        "7": "repeat(7, minmax(0, 1fr))"
      },
      gridTemplateColumns: {
        "7": "repeat(7, minmax(0, 1fr))"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
