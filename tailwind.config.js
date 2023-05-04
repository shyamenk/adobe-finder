/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#05112e', // primary color
        },
        secondary: {
          DEFAULT: '#38bdf8', // secondary color
          light: '#39b5ff',
        },
        accent: {
          DEFAULT: '#fbfbfb', // accent color
        },
        mode: {
          light: '#ffff', // light mode background color
          dark: '#111827', // dark mode background color
          text: '#374955',
        },

        error: {
          DEFAULT: '#ff0000', // error color
        },
        link: {
          DEFAULT: '#007aff', // link color
        },
        heading: {
          DEFAULT: '#333', // default text color
          h1: '#444', // color for h1 headings
          h2: '#555', // color for h2 headings
          h3: '#666', // color for h3 headings
          p: '#868686', // color for paragraph
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    // require('prettier-plugin-tailwindcss'),
  ],
};
