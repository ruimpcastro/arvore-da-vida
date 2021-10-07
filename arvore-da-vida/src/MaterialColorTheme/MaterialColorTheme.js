import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    primary: {
      light: "#565451",
      main: "#2d2b29",
      dark: "#020000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#fff28b",
      main: "#d2c05b",
      dark: "#9e902c",
      contrastText: "#000000",
    },
  },
});

theme = responsiveFontSizes(theme);
