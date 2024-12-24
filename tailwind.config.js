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
        'dracula-light': '#F8F8F2',
        'dracula-dark': '#282A36',
        'dracula-charcoal': '#2F313F',
        'dracula-steel': '#44475A',
        'dracula-blue': '#6272A4',
        'dracula-purple': '#BD93F9',
        'dracula-cyan': '#8BE9FD',
        'dracula-green': '#50FA7B',
        'dracula-yellow': '#F1FA8C',
        'dracula-orange': '#FFB86C',
        'dracula-pink': '#FF79C6',
        'dracula-red': '#FF5555'
      },
    },
  },
  plugins: [],
}
