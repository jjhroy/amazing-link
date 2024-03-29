import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        around: '0 2px 16px 0 rgba(0, 0, 0, 0.1);',
      },
      screens: {
        mobile: '640px',
        ipad: '820px',
        tablet: '1024px',
        notebook: '1200px',
        desktop: '1440px',
        '4k': '2560px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
