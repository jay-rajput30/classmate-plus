/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Josefin Sans, sans-serif',
        body: 'Fira Mono, monospace',
      },
      colors: {
        background: '#f2f7f5',
        headingText: '#00473e',
        bodyText: '#475d5b',
        primary: '#faae2b',
        secondary: '#ffa8ba',
        tertiary: '#fa5246',
      },
    },
  },
  plugins: [],
};
