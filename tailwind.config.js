/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // STRICT CLIENT REQUIREMENT: ASBURY PARK must be used everywhere
        sans: ['ASBURY PARK', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['ASBURY PARK', 'Georgia', 'serif'],
        // Set ASBURY PARK as default for all font families
        default: ['ASBURY PARK', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#F5F2ED',
        'cream-dark': '#E8E4DD',
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}

