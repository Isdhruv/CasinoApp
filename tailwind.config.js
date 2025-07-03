/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      fontSize: {
        xl: "40px",
        lg: "26px",
        md: "22px",
      },
      colors: {
        violet: "#710F99",
        purple: "#2E063E",
        bluePurple: "#340858",
        white: "#FFFFFF",
        transparentpurple: "#430B48",
        purpleborder: "#A157C0",
      },
      animation: {
        gradientMotion: "gradientMotion 10s ease infinite",
      },
      keyframes: {
        gradientMotion: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      // backgroundSize: {
      //   "size-200": "200% 200%",
      // },
      backgroundImage: {
        "custom-pattern": "url('/bg-grid-2.png')",
        radial: "url('/radial-bg.png')",
      },
    },
  },
  plugins: [],
};
