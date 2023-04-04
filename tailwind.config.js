/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./assets/Food.png')",
      },
      fontFamily: {
        Mulish: ["Mulish"],
      },
      screens: {
        mobile: "375px",
        desktop: "768px",
      },
      fontWeight: {
        "extra-bolded": "1000",
      },
    },
  },
  plugins: [],
};
