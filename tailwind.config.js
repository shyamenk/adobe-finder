/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: {
          50: '#F7F8FA',
          100: '#EEF1F5',
          200: '#D4DCE5',
          300: '#BBC5D5',
          400: '#8691B5',
          500: '#516C95',
          600: '#496288',
          700: '#31425A',
          800: '#252F46',
          900: '#191C2C',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in':
          'opacity: 0; animation: fadeIn ease-in 1; animation-fill-mode: forwards; animation-duration: 0.5s;',
        'slide-up':
          'transition: transform 0.5s ease-out; transform: translate(0, 20px); opacity: 0; animation: slideUp 0.5s ease-in-out;',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translate(0, 20px)', opacity: 0 },
          '100%': { transform: 'translate(0, 0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
