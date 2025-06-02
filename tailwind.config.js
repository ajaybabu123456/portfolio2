/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',  // Slightly lighter than pure black
        secondary: '#3b82f6',
        textPrimary: '#f3f4f6',
        textSecondary: '#9ca3af',
        // Adding new shades for gradients
        'gray': {
          850: '#1e1e1e',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
