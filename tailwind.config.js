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
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
};
