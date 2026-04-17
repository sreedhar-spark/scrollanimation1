/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
          'text-secondary': 'var(--color-text-secondary)',
          'cta-hover': 'var(--color-cta-hover)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(44, 24, 16, 0.08)',
      }
    },
  },
  plugins: [],
}
