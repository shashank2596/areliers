import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "gray-accent": "var(--gray-accent)",
      },
      screens: {
        "1560": "1561px",
        "1350": "1350px",
        "1200": "1201px",
        "1100": "1100px",
        "982": "982px",
        "821": "821px",
        "713": "713px",
        "680": "680px",
        "580": "581px",
        "520": "521px",
        "479": "479px",
        "390": "391px",
        "359": "359px",
      },
      keyframes: {
        bounceUpDown: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        "bounce-slow": "bounceUpDown 3s ease-in-out infinite",
      },
      container: {},
    },
  },
  plugins: [],
};
export default config;
