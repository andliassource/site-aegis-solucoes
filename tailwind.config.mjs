/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'aegis-dark': '#111827',
        'aegis-gray': {
          100: '#F9FAFB',
          500: '#6B7280',
          700: '#374151',
        },
        'aegis-blue': {
          500: '#3B82F6',
          600: '#2563EB',
        }
      }
    },
  },
  plugins: [],
}