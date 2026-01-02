/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1320px",
      },
    },
    fontFamily: {
      public_sans: "var(--public_sans)",
    },
    extend: {
      colors: {
        // ======== grey color ========
        grey_900: "var(--grey_900)",
        grey_800: "var(--grey_800)",
        grey_700: "var(--grey_700)",
        grey_600: "var(--grey_600)",
        grey_500: "var(--grey_500)",
        grey_400: "var(--grey_400)",
        grey_300: "var(--grey_300)",
        grey_200: "var(--grey_200)",
        grey_100: "var(--grey_100)",
        grey_50: "var(--grey_50)",
        grey_00: "var(--grey_00)",

        // ======== primary color ========
        primary_900: "var(--primary_900)",
        primary_800: "var(--primary_800)",
        primary_700: "var(--primary_700)",
        primary_600: "var(--primary_600)",
        primary_500: "var(--primary_500)",
        primary_400: "var(--primary_400)",
        primary_300: "var(--primary_300)",
        primary_200: "var(--primary_200)",
        primary_100: "var(--primary_100)",
        primary_50: "var(--primary_50)",

        // ======== secondary color ========
        secondary_900: "var(--secondary_900)",
        secondary_800: "var(--secondary_800)",
        secondary_700: "var(--secondary_700)",
        secondary_600: "var(--secondary_600)",
        secondary_500: "var(--secondary_500)",
        secondary_400: "var(--secondary_400)",
        secondary_300: "var(--secondary_300)",
        secondary_200: "var(--secondary_200)",
        secondary_100: "var(--secondary_100)",
        secondary_50: "var(--secondary_50)",

        // ======== success color ========
        succes_900: "var(--succes_900)",
        succes_800: "var(--succes_800)",
        succes_700: "var(--succes_700)",
        succes_600: "var(--succes_600)",
        succes_500: "var(--succes_500)",
        succes_400: "var(--succes_400)",
        succes_300: "var(--succes_300)",
        succes_200: "var(--succes_200)",
        succes_100: "var(--succes_100)",
        succes_50: "var(--succes_50)",

        // ======== warning color ========
        warning_900: "var(--warning_900)",
        warning_800: "var(--warning_800)",
        warning_700: "var(--warning_700)",
        warning_600: "var(--warning_600)",
        warning_500: "var(--warning_500)",
        warning_400: "var(--warning_400)",
        warning_300: "var(--warning_300)",
        warning_200: "var(--warning_200)",
        warning_100: "var(--warning_100)",
        warning_50: "var(--warning_50)",

        // ======== danger color ========
        danger_900: "var(--danger_900)",
        danger_800: "var(--danger_800)",
        danger_700: "var(--danger_700)",
        danger_600: "var(--danger_600)",
        danger_500: "var(--danger_500)",
        danger_400: "var(--danger_400)",
        danger_300: "var(--danger_300)",
        danger_200: "var(--danger_200)",
        danger_100: "var(--danger_100)",
        danger_50: "var(--danger_50)",
      },
    },
  },
  plugins: [],
};
