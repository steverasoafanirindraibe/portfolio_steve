import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.5)',
        'inner-custom': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'neon': '0 0 5px theme(colors.teal.500), 0 0 20px theme(colors.teal.300)',
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-stack-sans-notch)', 'sans-serif'],
        'stack-sans': ['var(--font-stack-sans-notch)', 'sans-serif'],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme2: "var(--theme2)",
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        '10000': '10000ms',
      }
    },
  },
  plugins: [],
} satisfies Config;
