import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#2196f3",
    },
    error: red,
    success: {
      main: "#76ff03",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
