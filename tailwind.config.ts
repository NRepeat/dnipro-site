import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
