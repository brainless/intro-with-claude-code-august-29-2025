/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Earthy pastel colors
        sage: {
          50: '#f6f7f4',
          100: '#e9ede3',
          200: '#d4dcc9',
          300: '#b8c5a7',
          400: '#9caf88',
          500: '#7e9463',
          600: '#64774e',
          700: '#4f5e3f',
          800: '#424f35',
          900: '#39442e',
        },
        terracotta: {
          50: '#fdf8f4',
          100: '#faf0e4',
          200: '#f4ddc4',
          300: '#ecc59f',
          400: '#e2a578',
          500: '#d4a574',
          600: '#c4a484',
          700: '#a67c5a',
          800: '#88644a',
          900: '#6f533d',
        },
        clay: {
          50: '#fdf8f3',
          100: '#faefe2',
          200: '#f3dcc0',
          300: '#eac394',
          400: '#dfa367',
          500: '#d4a574',
          600: '#b8884a',
          700: '#996d3e',
          800: '#7d5936',
          900: '#67492f',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}