module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require("tailwindcss-debug-screens")
  ],
}
