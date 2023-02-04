/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          orange: "hsl(26,100%,55%)",
          "pale-orange": "hsl(25,100%,94%)",
        },
        neutral: {
          "very-dark-blue": "hsl(220,13%,13%)",
          "dark-grayish-blue": "hsl(219,9%,45%)",
          "grayish-blue": "hsl(220,14%,75%)",
          "light-grayish-blue": "hsl(223,64%,98%)",
        },
      },
      fontSize: {
        "company-title": "0.8125rem",
        "product-title": "2.75rem",
        "product-title-mobile": "1.75rem",
        "product-price": "1.75rem",
      },
    },
  },
  plugins: [],
};
