/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#664efe",
      },
      borderColor: {
        primary: "#664efe",
      },
    },
  },
  plugins: [],
};
