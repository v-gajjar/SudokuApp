import { createTheme } from "@mui/material/styles";

const brand = {
  50: "#EBFAFA",
  100: "#D7F4F4",
  200: "#B2EBEB",
  300: "#8AE0E0",
  400: "#66D6D6",
  500: "#3ECCCC",
  600: "#2DA9A9",
  700: "#217D7D",
  800: "#165555",
  900: "#0B2828",
  950: "#051414",
};

export function createAppTheme(mode = "light") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: brand[600],
        light: brand[400],
        dark: brand[800],
      },
      background: {
        default: mode === "dark" ? brand[900] : "#FFFFFF",
        paper: mode === "dark" ? brand[800] : brand[50],
      },
      text: {
        primary: mode === "dark" ? brand[300] : brand[950],
      },
      error: {
        main: "#FF8749",
      },
    },
    typography: {
      fontFamily: '"Nunito", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
}
