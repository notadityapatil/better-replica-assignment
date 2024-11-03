import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentPrimary: "#004733",
        successBackground: "#f0f7f1",
        graphTertiary: "#1ee07f",
        interactiveForegroundPrimary: "#ffffff",
        interactiveForegroundInversePrimary: "#000000",
        accentBorderSecondary: "#1ee07f",
        interactivePrimary: "#004733",
        backgroundSecondary: "#ffffff",
        backgroundTertiary: "#ffffff",
        strokeBorder: "#ffffff",
        accentSecondary: "#ffffff",
        backgroundInversePrimary: "#073126",
        backgroundInverseSecondary: "#f6f6f3"

      },
    },
  },
  plugins: [],
};
export default config;
