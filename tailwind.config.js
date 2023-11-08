/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        SideBarMobile: "url('assets/bg-sidebar-mobile.svg')",
        SideBarDesktop: "url('assets/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}