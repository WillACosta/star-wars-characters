import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/presentation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002B53',
        'app-gray-100': '#E6E6E6',
        'app-gray-200': '#C8C8C8',
        'app-gray-300': '#969696',
        'app-gray-400': '#666666',
        'app-gray-500': '#333333',
        'muted': '#757575',
      },
    },
  },
  plugins: [],
}
export default config
