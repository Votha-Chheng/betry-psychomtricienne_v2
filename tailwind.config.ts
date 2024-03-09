import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        beating: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': {transform:'scale(1)'}
        }
      },
      animation:{
        beating: "beating 1.25s ease-in-out infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mountbatten-pink': '#9f7f92',
        'eggplant':'#745869',
        'mauve':"#674ea7",
        'charcoal':'#274060',
        "anti-flash-white": "#f4f4f6",
        "french-gray":"#d2d2da",
        "dartmouth-green": "#12692f"
      }
    },
  },
  plugins: [],
}
export default config
