import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
        fadeIn: 'fadeIn 1s both',
        fadeOut: 'fadeOut 1s both',
        fadeInUp: 'fadeInUp 1s both',
        fadeInDown: 'fadeInDown 1s both',
        fadeInLeft: 'fadeInLeft 1s both',
        fadeInRight: 'fadeInRight 1s both',
        scaleIn: 'scaleIn 1s both',
        'pulse-custom': 'pulse 2s infinite ease-in-out',
        rotate: 'rotate360 2s linear infinite',
        shake: 'shake 0.5s ease-in-out',
        floating: 'floating 3s ease-in-out infinite',
        'floating-gentle': 'floating-gentle 4s ease-in-out infinite',
        'floating-strong': 'floating-strong 2.5s ease-in-out infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeInDown: {
          from: { opacity: 0, transform: 'translateY(-2rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: 'translateX(-2rem)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: 0, transform: 'translateX(2rem)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'scale(0.8)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate360: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'floating-gentle': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'floating-strong': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
