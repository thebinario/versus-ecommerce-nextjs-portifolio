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
          light: '#ff6584',  // rosa claro
          DEFAULT: '#ff4561',  // rosa padrão
          dark: '#cc374d'  // rosa escuro
        },
        success: {
          light: '#48bb78',  // verde claro
          DEFAULT: '#38a169',  // verde padrão
          dark: '#2f855a'  // verde escuro
        },
        warning: {
          light: '#f6ad55',  // laranja claro
          DEFAULT: '#ed8936',  // laranja padrão
          dark: '#dd6b20'  // laranja escuro
        },
        background: {
          light: '#ffffff',  // fundo claro
          dark: '#121212'  // fundo escuro atualizado
        },
        text: {
          light: '#2d3748',  // texto claro
          dark: '#edf2f7'  // texto escuro
        }
      }
    },
  },
  plugins: [],
};
