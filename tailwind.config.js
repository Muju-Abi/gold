/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Important for Storyblok components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using /src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' will now use Inter
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        // 'serif' or a custom name like 'display'
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}

