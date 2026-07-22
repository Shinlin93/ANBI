/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0B2545',
          mid: '#14335C',
          line: 'rgba(247,243,235,0.14)',
        },
        gold: {
          DEFAULT: '#B6862C',
          soft: '#E4C77A',
          deep: '#92400E',
        },
        cream: {
          DEFAULT: '#F7F3EB',
          dim: '#EDE6D6',
        },
        ink: '#1B1D22',
        accent: {
          DEFAULT: '#15803D',
        },
        stamp: {
          DEFAULT: '#8C3B32',
          soft: 'rgba(140,59,50,0.08)',
        },
        teal: {
          DEFAULT: '#0E6E77',
        },
        plum: {
          DEFAULT: '#5B4A8A',
        },
        forest: {
          DEFAULT: '#355E45',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 18px 40px rgba(11, 37, 69, 0.10)',
      },
    },
  },
  plugins: [],
}
