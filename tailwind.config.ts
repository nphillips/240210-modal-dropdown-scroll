import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      extend: {
        backgroundColor: ["active"],
        boxShadow: ["active"],
        opacity: ["active"],
        border: ["active"],
      },
    },
    fontFamily: {
      spezia: ["Spezia", "ui-sans-serif", "system-ui"],
      wellcube: ["WellCube"],
    },
    fontWeight: {
      DEFAULT: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      h0: [
        "4rem",
        {
          lineHeight: "1.15",
          letterSpacing: "-0.01em",
        },
      ],
      h1: [
        "2.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.05em",
        },
      ],
      h2: [
        "2rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.04em",
        },
      ],
      h3: [
        "1.75rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.03em",
        },
      ],
      h4: [
        "1.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.04em",
        },
      ],
      h5: [
        "1.25rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.05em",
        },
      ],
      h6: [
        "1.125rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.03125em",
        },
      ],
      bdy: [
        "1.125rem",
        {
          lineHeight: "1.15",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.15",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25",
        },
      ],
      mini: [
        "0.75rem",
        {
          lineHeight: "1.25",
        },
      ],
      xs: [
        "0.75rem",
        {
          lineHeight: "1.5",
          letterSpacing: "-0.01em",
        },
      ],
      "sm-btn": [
        "0.5rem",
        {
          lineHeight: "1.25",
        },
      ],
    },
    colors: {
      black: {
        DEFAULT: "#171a1f",
        soft: "#272b32",
        "light-soft": "#272b32",
      },
      white: {
        mint: "#eaf1f5",
        background: "#ecf4fa",
        soft: "#fbfdff",
        DEFAULT: "#ffffff",
      },
      grey: {
        900: "#131a29",
        800: "#1D2939",
        700: "#344054",
        600: "#475467",
        500: "#667085",
        400: "#98A2B3",
        300: "#5b5e5f",
        200: "#9da4a5",
        100: "#dcdfe1",
        50: "#f2f5f5",
        light: {
          900: "#101828",
          500: "#667085",
          200: "#DDE2EC",
          50: "#F2F6FA",
        },
      },
      blue: {
        navy: "#0e416b",
        suede: {
          DEFAULT: "#427596",
          light: "#c1dbea",
        },
        web: "#0047ba",
        brilliant: "#0061ff",
        light: "#48bdff",
        lighter: "#7dd0ff",
        lightest: "#9cdbff",
      },
      gold: {
        dark: "#e0b34b",
      },
      chart: {
        coral: {
          dark: "#b94300",
          DEFAULT: "#f36413",
          light: "#ff9979",
        },
        purple: {
          dark: "#9e154f",
          DEFAULT: "#cc76a5",
          light: "#e49abe",
        },
        teal: {
          dark: "#0095b6",
          DEFAULT: "#01c9f1",
          light: "#8fedff",
        },
        green: {
          dark: "#50af81",
          DEFAULT: "#48d6a3",
          light: "#72ffbb",
        },
        blue: {
          dark: "#0071f1",
          DEFAULT: "#31a3ff",
          light: "#76c5ff",
        },
        yellow: {
          dark: "#c78f00",
          DEFAULT: "#f3b413",
          light: "#ffca43",
        },
      },
      alert: {
        "error-light": "#D33F00",
        error: "#dc4200",
        "issue-light": "#FFC045",
        issue: "#ffaa05",
        "ok-light": "#00B047",
        ok: "#008435",
      },
      "card-stroke": "#D4DFEA",
      "com-leftnav-menu": "rgba(251,253,255,.8)",
      transparent: "transparent",
      current: "currentColor",
    },
    boxShadow: {
      none: "none",
      card: "0 0 0 1.5px #CEDCEB inset, -8px 0px 8px rgba(244, 248, 251, 0.50254), 7px 7px 20px rgba(176, 195, 210, 0.45)",
      "com-accordion": "6px 6px 25px 10px rgba(0, 0, 0, 0.05)",
      "com-button-inverse-blue-active-inset":
        "inset -1.5px 1.5px 1.5px rgba(10, 77, 190, 0.55)",
      "com-button-inverse-blue-medium":
        "0 0 0 1px #106BFF,-7.77778px -7.77778px 13.3333px #1F74FF, -5.55556px -5.55556px 32px #2774F1, 2.22222px 5.55556px 22.2222px #043C95",
      "com-button-inverse-large":
        "0 0 0 1.5px rgba(243, 250, 252, 0.75) inset, -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846)",
      "com-button-inverse-medium":
        "-7px -7px 12px rgba(255, 255, 255, 0.1), -13px -7px 15px rgba(236, 247, 255, 0.65), 2px 5px 10px #CEDAE3",
      "com-button-inverse-press":
        "inset 1.5px -1.5px 1.5px #ffffff, inset -1.5px 1.5px 1.5px #a1b7be",
      "com-button-main-active-inset":
        "inset 1.5px -1.5px 1.5px #ebf4ff, inset -1.5px 1.5px 1.5px rgba(10, 77, 190, 0.55)",
      "com-button-main-dark-large":
        "0 0 0 1px rgba(109, 122, 147, 0.75), -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -15px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 9px 11px 50px rgba(176, 195, 210, 0.727846)",
      "com-button-main-dark-medium":
        "0 0 0 1px rgba(109, 122, 147, 0.75), -7px -7px 12px rgba(255, 255, 255, 0.1), -13px -7px 15px rgba(236, 247, 255, 0.65), 2px 5px 10px #C0C9D0",
      "com-button-main-large":
        "0 0 0 1px rgba(74, 151, 248, 0.75), -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -15px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 9px 11px 50px rgba(111, 133, 153, 0.57)",
      "com-button-main-medium":
        "0 0 0 1px rgba(74, 151, 248, 0.75), -7px -7px 12px rgba(255, 255, 255, 0.1), -13px -7px 15px rgba(236, 247, 255, 0.65), 2px 5px 10px #C0C9D0",
      "com-button-navbar-icon-active":
        "inset 0.5px -0.5px 0.5px #FFFFFF, inset -0.5px 0.5px 3px #AEB7BA",
      "com-button-outline": "0 0 0 1.5px theme(colors.blue.navy) inset",
      "com-button-outline-small": "0 0 0 1px theme(colors.grey.500) inset",
      "com-button-outline-dark":
        "0 0 0 1.5px theme(colors.black.DEFAULT) inset",
      "com-button-outline-dark-disabled":
        "0 0 0 1.5px theme(colors.grey.200) inset",
      "com-button-outline-dark-hover":
        "0 0 0 1.5px theme(colors.black.soft) inset",
      "com-button-outline-dark-press":
        "0 0 0 1.5px theme(colors.grey.600) inset",
      "com-button-outline-disabled": "0 0 0 1.5px theme(colors.grey.200) inset",
      "com-button-outline-hover":
        "0 0 0 1.5px theme(colors.blue.brilliant) inset",
      "com-button-outline-press": "0 0 0 1.5px theme(colors.blue.web) inset",
      "com-button-outline-white":
        "0 0 0 1.5px theme(colors.white.DEFAULT) inset",
      "com-button-outline-white-disabled":
        "0 0 0 1.5px theme(colors.grey.200) inset",
      "com-button-outline-white-hover":
        "0 0 0 1.5px theme(colors.white.soft) inset",
      "com-button-outline-white-press":
        "0 0 0 1.5px theme(colors.white.mint) inset",
      "com-dropdown-control":
        "0px 0px 0px 0px rgba(140, 161, 195, 0.10), 0px 2px 5px 0px rgba(140, 161, 195, 0.10), 0px 9px 9px 0px rgba(140, 161, 195, 0.09), 0px 21px 12px 0px rgba(140, 161, 195, 0.05), 0px 37px 15px 0px rgba(140, 161, 195, 0.01), 0px 57px 16px 0px rgba(140, 161, 195, 0.00)",
      "com-dropdown-menu2":
        " 7px 7px 20px 0px rgba(176, 195, 210, 0.45), -8px 0px 8px 0px rgba(244, 248, 251, 0.50)",
      "com-dropdown-menu": "0px 2px 6px rgba(0, 0, 0, 0.3);",
      "com-dropdown-selected":
        "inset 1.5px -1.5px 1.5px #FFFFFF, inset -1.5px 1.5px 1.5px #A1B7BE;",

      "com-leftnav": "12px 12px 33px rgba(176, 195, 210, 0.15)",
      "com-leftnav-menu-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      "com-modal": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      "com-navitem":
        "0 0 0 1px #F3FAFC, -7px -7px 12px rgba(255, 255, 255, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.8), 2px 5px 10px rgba(206, 218, 227, 0.75);",
      "com-navitem-inset":
        "inset 0.5px -0.5px 0.5px #FFFFFF, inset -0.5px 0.5px 3px #AEB7BA;",
      "com-topnav2-shadow":
        "-4.86957px -4.86957px 8.34783px rgba(255, 255, 255, 0.35), -3.47826px -3.47826px 10.4348px rgba(255, 255, 255, 0.8), 1.3913px 3.47826px 6.95652px #CEDAE3",
      "faux-border-alert-issue": "0 0 0 1.5px #E99A00",
      "faux-border-card-stroke": "0 0 0 1.5px #D4DFEA",
      "com-action-bar":
        " 0px 0px 0px 0px rgba(27, 50, 95, 0.25), 0px 10px 23px 0px rgba(27, 50, 95, 0.24), 0px 41px 41px 0px rgba(27, 50, 95, 0.21), 0px 93px 56px 0px rgba(27, 50, 95, 0.12), 0px 165px 66px 0px rgba(27, 50, 95, 0.04), 0px 258px 72px 0px rgba(27, 50, 95, 0) ",
      "com-action-bar-button":
        "0 0 0 1.5px #427596, -8px 0px 8px rgba(244, 248, 251, 0.50254), 7px 7px 20px rgba(176, 195, 210, 0.45)",
      "com-hint":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.25), 0px 10px 23px 0px rgba(27, 50, 95, 0.24), 0px 41px 41px 0px rgba(27, 50, 95, 0.21), 0px 93px 56px 0px rgba(27, 50, 95, 0.12), 0px 165px 66px 0px rgba(27, 50, 95, 0.04), 0px 258px 72px 0px rgba(27, 50, 95, 0.00)",

      /*prettier-ignore*/ 'com-input-focus': '0 0 0 1px theme(colors.blue.brilliant) inset, 0px 0px 0px 0px rgba(140, 161, 195, 0.10), 0px 2px 5px 0px rgba(140, 161, 195, 0.10), 0px 9px 9px 0px rgba(140, 161, 195, 0.09), 0px 21px 12px 0px rgba(140, 161, 195, 0.05), 0px 37px 15px 0px rgba(140, 161, 195, 0.01), 0px 57px 16px 0px rgba(140, 161, 195, 0.00)',
      /*prettier-ignore*/ 'com-input-error': 'inset 0 0 0 1px theme(colors.alert.error)',
      /*prettier-ignore*/ 'com-input-issue': '0 0 0 1px theme(colors.alert.issue) inset',
      /*prettier-ignore*/ 'com-input-confirmed': '0 0 0 1px #00B047 inset',

      /*prettier-ignore*/ 'com-input-default-hover': '0px 0px 0px 0px rgba(140, 161, 195, 0.10), 0px 2px 5px 0px rgba(140, 161, 195, 0.10), 0px 9px 9px 0px rgba(140, 161, 195, 0.09), 0px 21px 12px 0px rgba(140, 161, 195, 0.05), 0px 37px 15px 0px rgba(140, 161, 195, 0.01), 0px 57px 16px 0px rgba(140, 161, 195, 0.00)',
      /*prettier-ignore*/ 'com-input-confirmed-hover': '0px 0px 0px 0px rgba(167, 236, 195, 0.10), 0px 2px 5px 0px rgba(167, 236, 195, 0.10), 0px 9px 9px 0px rgba(167, 236, 195, 0.09), 0px 21px 12px 0px rgba(167, 236, 195, 0.05), 0px 37px 15px 0px rgba(167, 236, 195, 0.01), 0px 57px 16px 0px rgba(167, 236, 195, 0.00) ',
      /*prettier-ignore*/ 'com-input-error-hover': '0px 0px 0px 0px rgba(228, 162, 134, 0.10), 0px 2px 5px 0px rgba(228, 162, 134, 0.10), 0px 9px 9px 0px rgba(228, 162, 134, 0.09), 0px 21px 12px 0px rgba(228, 162, 134, 0.05), 0px 37px 15px 0px rgba(228, 162, 134, 0.01), 0px 57px 16px 0px rgba(228, 162, 134, 0.00)',
      /*prettier-ignore*/ 'com-input-issue-hover': '0px 0px 0px 0px rgba(228, 162, 134, 0.10), 0px 2px 5px 0px rgba(228, 162, 134, 0.10), 0px 9px 9px 0px rgba(228, 162, 134, 0.09), 0px 21px 12px 0px rgba(228, 162, 134, 0.05), 0px 37px 15px 0px rgba(228, 162, 134, 0.01), 0px 57px 16px 0px rgba(228, 162, 134, 0.00)',

      "com-button2-small-inactive":
        "0px 0px 0px 0px rgba(151, 176, 196, 0.12), 0px 2px 5px 0px rgba(151, 176, 196, 0.11), 0px 9px 9px 0px rgba(151, 176, 196, 0.10), 0px 21px 13px 0px rgba(151, 176, 196, 0.06), 0px 37px 15px 0px rgba(151, 176, 196, 0.02), 0px 58px 16px 0px rgba(151, 176, 196, 0.00)",
      "com-button2-medium-inactive":
        "0px 0px 0px 0px rgba(151, 176, 196, 0.12), 0px 2px 5px 0px rgba(151, 176, 196, 0.11), 0px 9px 9px 0px rgba(151, 176, 196, 0.10), 0px 21px 13px 0px rgba(151, 176, 196, 0.06), 0px 37px 15px 0px rgba(151, 176, 196, 0.02), 0px 58px 16px 0px rgba(151, 176, 196, 0.00)",
      "com-button2-large-inactive":
        "0px 0px 0px 0px rgba(151, 176, 196, 0.12), 0px 2px 5px 0px rgba(151, 176, 196, 0.11), 0px 9px 9px 0px rgba(151, 176, 196, 0.10), 0px 21px 13px 0px rgba(151, 176, 196, 0.06), 0px 37px 15px 0px rgba(151, 176, 196, 0.02), 0px 58px 16px 0px rgba(151, 176, 196, 0.00)",
      "com-button2-small-active":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.12), 0px 3px 7px 0px rgba(27, 50, 95, 0.12), 0px 12px 12px 0px rgba(27, 50, 95, 0.10), 0px 28px 17px 0px rgba(27, 50, 95, 0.06), 0px 50px 20px 0px rgba(27, 50, 95, 0.02), 0px 78px 22px 0px rgba(27, 50, 95, 0.00)",
      "com-button2-medium-active":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.12), 0px 3px 7px 0px rgba(27, 50, 95, 0.12), 0px 12px 12px 0px rgba(27, 50, 95, 0.10), 0px 28px 17px 0px rgba(27, 50, 95, 0.06), 0px 50px 20px 0px rgba(27, 50, 95, 0.02), 0px 78px 22px 0px rgba(27, 50, 95, 0.00)",
      "com-button2-large-active":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.12), 0px 3px 7px 0px rgba(27, 50, 95, 0.12), 0px 12px 12px 0px rgba(27, 50, 95, 0.10), 0px 28px 17px 0px rgba(27, 50, 95, 0.06), 0px 50px 20px 0px rgba(27, 50, 95, 0.02), 0px 78px 22px 0px rgba(27, 50, 95, 0.00)",
      "com-wc-tooltip":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.25), 0px 10px 23px 0px rgba(27, 50, 95, 0.24), 0px 41px 41px 0px rgba(27, 50, 95, 0.21), 0px 93px 56px 0px rgba(27, 50, 95, 0.12), 0px 165px 66px 0px rgba(27, 50, 95, 0.04), 0px 258px 72px 0px rgba(27, 50, 95, 0.00)",
      "com-new-active-button-shadow":
        "0px 0px 0px 0px rgba(27, 50, 95, 0.12), 0px 3px 7px 0px rgba(27, 50, 95, 0.12), 0px 12px 12px 0px rgba(27, 50, 95, 0.10), 0px 28px 17px 0px rgba(27, 50, 95, 0.06), 0px 50px 20px 0px rgba(27, 50, 95, 0.02), 0px 78px 22px 0px rgba(27, 50, 95, 0.00)",
      "elevation-medium":
        "7px 7px 20px 0px rgba(176, 195, 210, 0.45), -8px 0px 8px 0px rgba(244, 248, 251, 0.50)",
    },
    dropShadow: {
      "wc-tooltip": "0px 0px 0px rgba(27, 50, 95, 0.25)",
    },
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
      },
      borderRadius: {
        card: "0px 16px 16px 16px",
        dropdown: "0px 0px 16px 16px",
        drawer: "20px 0px 0px 20px",
        "dropdown-selected": "0.5px solid rgba(206, 215, 218, 0.5);",
      },
      backgroundImage: {
        "gradient-grey-200":
          "linear-gradient(320.66deg, theme(colors.grey.200) 14.75%, theme(colors.grey.200) 84.81%)",
        "gradient-black-soft":
          "linear-gradient(320.66deg, #1c1f22 14.75%, #2f353a 84.81%)",
        "gradient-black-card-background":
          "linear-gradient(0.06deg, #2e3138 0.35%, #3d4148 192.77%)",
        "gradient-black-card-stroke":
          "linear-gradient(301.77deg, #25272d 19.48%, #575b65 100%)",
        "gradient-grey-soft":
          "linear-gradient(299.73deg, #38455e 8.06%, #6c7993 90.88%)",
        "gradient-grey-softer":
          "linear-gradient(299.73deg, #4f5f7b 8.06%, #96a2bb 90.88%)",
        "gradient-grey-frost":
          "linear-gradient(107.76deg, #f1f6fa 4%, #ced6e1 94.31%)",
        "gradient-blue-mid":
          "linear-gradient(0deg, #004585 -42.73%, #0295ff 177.27%)",
        "gradient-blue-primary":
          "linear-gradient(156.98deg, #5ba2f5 -6.56%, #0061ff 92.39%)",
        "gradient-blue-soft":
          "linear-gradient(178.09deg, #5d87f3 -27.42%, #0047ba 154.11%)",
        "gradient-blue-light":
          "linear-gradient(180deg, #b1ddff -37.27%, #609ff8 55.37%, #5c9ff4 99.76%)",
        "gradient-blue-inverted":
          "linear-gradient(180deg, #eef7ff 0%, #d5e4f1 100%)",
        "gradient-blue-card-stroke":
          "linear-gradient(270deg, #cedceb -10.79%, #ffffff 109.37%)",
        "gradient-noise":
          "conic-gradient(from 185.14deg at 49.97% 49.9%, #6100ff 0deg, #db00ff 258.75deg, #6100ff 360deg)",
        "gradient-gold-lights":
          "conic-gradient(from 185.14deg at 49.97% 49.9%, #a06f00 0deg, #fffdd2 258.75deg, #a06f00 360deg)",
        "gradient-com-title-on-scroll":
          "linear-gradient(180deg, rgba(66, 69, 71, 0.114) 0%, rgba(66, 69, 71, 0) 100%)",
        "gradient-spcard-btn-completed-collapse":
          "linear-gradient(180deg, rgba(231, 236, 243, 0) 0%, #ACC9DD 100%)",
        "gradient-spcard-btn-selected-expand":
          "linear-gradient(165.98deg, #B1DDFF 6.08%, #609FF8 67.15%, #4696FC 96.41%)",
        "gradient-spcard-btn-selected-collapse":
          "linear-gradient(165.98deg, #B1DDFF 6.08%, #609FF8 67.15%, #4696FC 96.41%)",
        "gradient-temperature-sensor":
          "linear-gradient(to right, #f94a00 0%, #FFC045 25%, white 50%, #7DD0FF 75%, #00a3ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
