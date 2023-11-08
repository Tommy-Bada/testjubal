
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
      gradientColorStops: {
        customgradient: {
          '0': '#3F2883',
          '100': '#2DA5A4',
        },
      },
      colors: {
        jubalViolet: "#262262",
        jubalYellow: "#F3A218",
        jubalGreen: "#0F973D",
        jubalRed: "#D42620",
        jubalBlue: "#00798F",
        jubalDark: "#0D0C22",
        jubalNav: "#4E4E4E",
        jubalLightBlue: "#B0D5DC",
        jubalGrey: "#4E4E4E",
        jubalFormBorder: "#DFE2E7",
        jubalFooterGrey: "#98a2b3",
        jubalDashboardBackground: "#F5F6F7",
        gradient: '#3F2883',
        jubalModalBackgroundColor: "#D9D9D9",
        jubalGradientBlue: "#3F2883",
        jubalGradientGreen: "#2DA5A4",
        jubalGradientBlueFaded: "#3F288339",
        jubalGradientGreenFaded: "#2DA5A439",
        jubalDashboardGreen: "#0F973D",
        jubalDashboardYellow: "#F3A218",
        jubalDashboardBlue: "#65387F",
        jubalDashboardRed: "#D42620",
        jubalFAQGrey: "#727A86",
      },
    },
  },
  plugins: [],
});
