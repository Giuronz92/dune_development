/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/".*liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
    './layout/*.json',
    './templates/*.json',
    './snippets/*.json',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
