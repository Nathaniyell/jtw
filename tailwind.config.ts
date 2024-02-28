import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgrounds: "#606060",
        titles: "#AD8330"
      },
      backgroundImage: {
        'schedulePattern': "url('/public/images/pattern_shape.svg')"
      },
      fontFamily: {
        title: "Akaya Kanadaka, system-ui"
      }
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}
export default config
