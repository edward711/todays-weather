module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1162px',
    },
    colors: {
      'primary': '#2057D5',
      'secondary': '#ABABAB',
      'success': '#1FC90B',
      'danger': '#EC0007',
      'warning': '#D9E610',
      'light': '#FFFFFF',
      'dark': '#000000',
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")],
};
