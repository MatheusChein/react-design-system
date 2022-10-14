/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Como não colocamos dentro do extend, isso substitui todos os fontSizes padrões do figma
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      black: '#000',
      white: '#fff',

      transparent: 'transparent',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-600': '#3BC3F3',
      'cyan-900': '#234A58',

      'blue-500': '#3b82f6',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      dropShadow: {
        '3xl': '0 0 10px rgba(128, 216, 246, 0.8)',
      },
    },
  },
  plugins: [],
};
