import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#0C0D0D",
        mainBg: "#F9F9F9",
        secondary: "#DCFF81",
        liteGray: "#9B9C9F",
        strongGray: "#333435",
      },
    },
  },
  plugins: [],
} satisfies Config;
