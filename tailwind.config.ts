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
        muted: '#666666',
        gray: '#757575',
        outline: '#C8C8C8',
        border: '#E6E6E6',
      },
    },
  },
  plugins: [],
}
export default config
