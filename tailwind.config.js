// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// const { fontFamily } = require('tailwindcss/defaultTheme');
// module.exports = {
//   mode: 'jit',
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',

//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     screens: {
//       xs: '10px',
//       sm: '765px',
//       md: '960px',
//       lg: '1024px',
//       xl: '1440px',
//     },
//     container: {
//       padding: {
//         DEFAULT: '1rem',
//         sm: '1.5rem',
//         lg: '2rem',
//         xl: '3rem',
//         '2xl': '3.5rem',
//       },
//     },
//     extend: {
//       zIndex: {
//         200: '200',
//         1000: '1000',
//       },
//       colors: {
//         primary: {
//           main: '#283655',
//           600: 'rgba(29, 43, 74, 1)',
//         },
//         secondary: '#2CA1CA',
//         'fair-money': '#37A477',
//         error: '#C70028',
//         brand: '#283655',
//         grey: '#535E77',
//         'light-grey': '#F6F6F9',
//         'grey-100': '#D7DAE1',
//         'light-blue': '#6F788D',
//         payforce: '#283655',
//         fairMoneyBlue: '#434F75',
//         fairGreen: '#5FB692',
//         fairLightGreen: '#EBF6F1',
//         fairYellow: '#F9AF21',
//         fairLightYellow: '#FEF6E6',
//         fairRed: '#FF4569',
//         fairLightRed: '#FFE8EC',
//       },
//       fontFamily: {
//         primary: ["'DM sans'", ...fontFamily.sans],
//       },
//       fontSize: {
//         xs: '.725rem',
//         sm: '.875rem',
//         md: '.975rem',
//         tiny: '.875rem',
//         base: '1rem',
//         lg: '1.125rem',
//         xl: '1.25rem',
//         '2xl': '1.5rem',
//         '3xl': '1.875rem',
//         '4xl': '2.25rem',
//         '5xl': '3rem',
//         '6xl': '4rem',
//         '7xl': '5rem',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
// const withMT = require("@material-tailwind/react/utils/withMT");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jubalViolet: "#262262",
        jubalYellow: "#F3A218",
        jubalBlue: "#00798F",
        jubalDark: "#0D0C22",
        jubalNav: "#4E4E4E",
        jubalLightBlue: "#B0D5DC",
        jubalFormText: "#4E4E4E",
        jubalFormBorder: "#DFE2E7",
        jubalPreSignUp: "#98A2B3",
        jubalFooterText: "#98a2b3",
      },
    },
  },
  plugins: [],
});
