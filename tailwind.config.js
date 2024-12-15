/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F8F8F2',
        'dark-gray': '#282A36',
        'charcoal-gray': '#2F313F',
        'steel-gray': '#44475A',
        'purple-blue': '#6272A4',
        'lavender-purple': '#BD93F9',
        'aqua-blue': '#8BE9FD',
        'neon-green': '#50FA7B',
        'pale-yellow': '#F1FA8C',
        'warm-orange': '#FFB86C',
        'bright-pink': '#FF79C6',
        'vivid-red': '#FF5555'
      },
    },
  },
  plugins: [],
}
