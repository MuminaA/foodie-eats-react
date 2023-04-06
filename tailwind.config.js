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
      },
      flex: {
        '2': '2 2 0%'
      },
      boxShadow: {
        '3xl': '0 -2px 0 inset rgb(226, 226, 226)',
        '4xl': '0px 0px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.04)'
      },
      overflow: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
