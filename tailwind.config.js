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
          light: '#4F46E5',  // azul claro
          DEFAULT: '#3B82F6',  // azul padrão
          dark: '#1E40AF'  // azul escuro
        },
        secondary: {
          light: '#34D399',  // verde claro
          DEFAULT: '#10B981',  // verde padrão
          dark: '#047857'  // verde escuro
        },
        success: {
          light: '#BBF7D0',  // verde claro
          DEFAULT: '#34D399',  // verde padrão
          dark: '#065F46'  // verde escuro
        },
        warning: {
          light: '#FDE68A',  // laranja claro
          DEFAULT: '#F59E0B',  // laranja padrão
          dark: '#B45309'  // laranja escuro
        },
        error: {
          light: '#FCA5A5',  // vermelho claro
          DEFAULT: '#EF4444',  // vermelho padrão
          dark: '#991B1B'  // vermelho escuro
        },
        background: {
          light: '#F3F4F6',  // fundo claro
          dark: '#1F2937'  // fundo escuro
        },
        text: {
          light: '#1F2937',  // texto claro
          dark: '#F9FAFB'  // texto escuro
        }
      }
    },
  },
  plugins: [],
};
