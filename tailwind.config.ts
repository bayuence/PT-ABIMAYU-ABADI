import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          '950': '#0D1B3E',
          '900': '#1B2A5E',
          '700': '#2B5BA8',
          '500': '#4A90D9',
          '100': '#E8EEF8',
        },
        'steel': '#8FA3C0',
        'gold': '#C9A84C',
        'gray': {
          '50': '#F7F8FA',
          '100': '#EAECF0',
          '400': '#9AA3B0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['72px', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.03em' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.75', fontWeight: '400' }],
        'caption': ['11px', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0.12em' }],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(74, 144, 217, 0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(74, 144, 217, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(74, 144, 217, 0)',
          },
        },
      },
      spacing: {
        '72': '72px',
      },
    },
  },
  plugins: [],
}

export default config
