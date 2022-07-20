/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headers: `'Sora', sans-serif`,
        body: `'Inter', sans-serif`,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
