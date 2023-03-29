module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        latego: ["GenEiLateGo"],
        koburi: ["GenEiKoburiMin"],
        rounded: ["RoundedMPlus"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
