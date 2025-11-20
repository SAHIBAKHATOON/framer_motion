/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'carousel-bg': '#0f0e0e',
      },
      fontFamily: {
        mono: ['"forma-djr-mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        card: '4px',
      },
    },
  },
  plugins: [],
};

