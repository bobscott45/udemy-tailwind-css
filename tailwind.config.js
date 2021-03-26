module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
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
