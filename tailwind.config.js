/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        violet: "#710F99",
        purple: "#2E063E",
        bluePurple: "#340858",
        white: "#FFFFFF",
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
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
};
