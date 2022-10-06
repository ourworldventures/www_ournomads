/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.html'],
    safelist: [
      {
          pattern: /(-|)(ml|mr)-(4|8|12|16|20|24|28)/,
          variants: ['sm', 'md', 'lg', 'first', 'first:sm', 'first:md', 'first:lg', 'last', 'last:sm', 'last:md', 'last:lg'],
      }
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}
  