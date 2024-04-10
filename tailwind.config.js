/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--Color-Primary-50)",
          100: "var(--Color-Primary-100)",
          200: "var(--Color-Primary-200)",
          300: "var(--Color-Primary-300)",
          400: "var(--Color-Primary-400)",
          500: "var(--Color-Primary-500)",
          600: "var(--Color-Primary-600)",
          700: "var(--Color-Primary-700)",
          800: "var(--Color-Primary-800)",
          900: "var(--Color-Primary-900)",
          950: "var(--Color-Primary-950)",
        },
        cmain: "var(--Background--main)",
        cmain_dark: "var(--Background--main_dark)",
        sha_dark: "var(--Shadow-dark-Color)",
        shadow_color: "var(--Shadow-Color)",

        success: "var(--Color-success-1)",
        warning: "var(--Color-warning-1)",
        danger: "var(--Color-danger--1)",
      },
      textColor: {
        base: "var(--Text--base)",
        gray: "var(--Text--gray)",
        primary: "var(--Text--primary)",
        secundary: "var(--Text--secundary)",
        base_dark: "var(--Text--base)",

        success: "var(--Color-success-1)",
        warning: "var(--Color-warning-1)",
        danger: "var(--Color-danger--1)",
      },

      fontSize: {
        h1: "1.8rem",
        h2: "1.4rem",
        h3: "0.87rem",
        h4: "0.8rem",
        h5: "0.77rem",
        h6: "0.7rem",
        h7: "0.6rem",

        G13: "1.3rem",
        G12: "1.2rem",
        G11: "1.1rem",
        G10: "1rem",
        G09: "0.9rem",
        G08: "0.8rem",
        G75: "0.75rem",
        G70: "0.7rem",
        G06: "0.6rem",
      },

      backgroundColor: {
        primary_: "var(--Background--base)",
        main: "var(--Background--main)",
        main_dark: "var(--Background--main_dark)",
        secondary_dark: "var(--Background--secondary_dark)",
        half_transparent: "var(--Background--half_transparent)",
        half_transparent_secundary: "rgba(0,0,0,0.1)",
        half_transparent_secundary_dark: "rgba(0,0,0,0.5)",
      },

      width: {
        70: "70px",
        250: "250px",
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },

      height: {
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
      },

      minHeight: {
        590: "590px",
      },

      boxShadow: {
        bar_top: "15px 15px 0 var(--Background--main)",
        bar_bottom: "15px -15px 0 var(--Background--main)",

        circle: "0 0 15px var(--Shadow-Color)",

        xl3: "0 2rem 3rem var(--Shadow-Color)",
        input: "0px 0px 8px 1px var(--Shadow-Color)",

        focus: "0 0 0 0.2rem var(--Shadow-Color)",

        focus_offset:
          "0 0 0 2px var(--Background--base), 0 0 0 4px var(--Color-Primary-500), 0 1px 2px 0 rgba(0, 0, 0, 0);",
        focus_offset_dark:
          "0 0 0 2px var(--Background--secondary_dark), 0 0 0 4px var(--Color-Primary-500), 0 1px 2px 0 rgba(0, 0, 0, 0);",

        focus_offset_success:
          "0 0 0 2px var(--Background--base), 0 0 0 4px var(--Color-Primary-500), 0 1px 2px 0 rgba(0, 0, 0, 0);",
        focus_offset_dark_success:
          "0 0 0 2px var(--Background--secondary_dark), 0 0 0 4px var(--Color-Primary-500), 0 1px 2px 0 rgba(0, 0, 0, 0);",

        focus_offset_warning:
          "0 0 0 2px var(--Background--base), 0 0 0 4px var(--Color-warning-1), 0 1px 2px 0 rgba(0, 0, 0, 0);",
        focus_offset_dark_warning:
          "0 0 0 2px var(--Background--secondary_dark), 0 0 0 4px var(--Color-warning-1), 0 1px 2px 0 rgba(0, 0, 0, 0);",

        focus_offset_danger:
          "0 0 0 2px var(--Background--base), 0 0 0 4px var(--Color-danger--1), 0 1px 2px 0 rgba(0, 0, 0, 0);",
        focus_offset_dark_danger:
          "0 0 0 2px var(--Background--secondary_dark), 0 0 0 4px var(--Color-danger--1), 0 1px 2px 0 rgba(0, 0, 0, 0);",
      },

      gridTemplateColumns: {
        rmin: "repeat(auto-fit, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
};
