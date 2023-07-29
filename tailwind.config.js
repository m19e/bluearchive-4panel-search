module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kivotos: "#00AEE1",
        schale: "#00AEE1",
        angel_24: "#00AEE1",
        general_student_council: "#00AEE1",
        etc: "#00aee1",
        abydos: "#2a928f",
        gehenna: "#a6465c",
        millennium: "#3c93bf",
        trinity: "#c39650",
        hyakkiyako: "#d65b8b",
        shanhaijing: "#4b8f60",
        red_winter: "#8b415a",
        valkyrie: "#a1a9e1",
        arius: "#6D6E6C",
        srt: "#90abc9",
        kronos: "#f5eb75",
        other_student: "#000",
      },
      fontFamily: {
        latego: ["GenEiLateGo"],
        koburi: ["GenEiKoburiMin"],
        rounded: ["RoundedMPlus"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
