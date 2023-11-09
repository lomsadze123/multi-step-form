/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Denim:"#022959",
        Grey:"#9699AA"
      },
      backgroundImage: {
        SideBarMobile: "url('assets/bg-sidebar-mobile.svg')",
        SideBarDesktop: "url('assets/bg-sidebar-desktop.svg')",
      },
      boxShadow: {
        custom: "0px 25px 40px -20px rgba(0, 0, 0, 0.10)"
      }
    },
  },
  plugins: [],
}