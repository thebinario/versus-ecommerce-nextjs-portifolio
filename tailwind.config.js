/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6c63ff',  // roxo claro
          DEFAULT: '#3f3d56',  // roxo padrão
          dark: '#2e2c3a'  // roxo escuro
        },
        secondary: {
          light: '#ff6584',
          DEFAULT: '#ff4561',
          dark: '#cc374d'
        },
        background: {
          light: '#ffffff',
          dark: '#1a202c'
        },
        text: {
          light: '#2d3748',
          dark: '#edf2f7'
        }
      }
    },
  },
  plugins: [],
};
