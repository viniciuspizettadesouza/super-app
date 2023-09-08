import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customLightYellow: '#F7F1EA',
        'peach': {
          '50': '#fff9ed',
          '100': '#fff1d5',
          '200': '#ffe6bc',
          '300': '#ffc772',
          '400': '#fda43a',
          '500': '#fc8813',
          '600': '#ed6c09',
          '700': '#c4510a',
          '800': '#9c4010',
          '900': '#7d3611',
          '950': '#441a06',
        },
        'merino': {
          '50': '#f7f1ea',
          '100': '#f3ebe1',
          '200': '#e7d4c1',
          '300': '#d7b89a',
          '400': '#c69671',
          '500': '#ba7c55',
          '600': '#ad6949',
          '700': '#90553e',
          '800': '#744638',
          '900': '#5f3a2f',
          '950': '#321d18',
        },
        'macaroni-and-cheese': {
          '50': '#fff9ed',
          '100': '#fff2d4',
          '200': '#ffe1a9',
          '300': '#ffcb74',
          '400': '#fea939',
          '500': '#fc8d13',
          '600': '#ed7109',
          '700': '#c55609',
          '800': '#9c4310',
          '900': '#7e3910',
          '950': '#441b06',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
