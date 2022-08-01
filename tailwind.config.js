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
    clipPath: {
      myCard:
        "polygon(0 0, 33% 0, 38% 2%, 100% 2%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
      fancyCard: " polygon(19% 0, 22% 9%, 100% 9%, 100% 100%, 0 100%, 0 0)",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-clip-path"),
  ],
};
