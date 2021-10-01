module.exports = {
  purge: [
    'src/**/*.js',
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      julius: ['Julius Sans One', 'sans-serif'],
      noto: [ 'Noto Sans Display', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
