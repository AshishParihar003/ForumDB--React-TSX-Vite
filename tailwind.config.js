// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];
/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' } // Assuming 50% is the correct translation needed for your marquee effect
      },
    },
    animation: {
      marquee: 'marquee 5s linear infinite'
    }
  }
};
export const plugins = [];
