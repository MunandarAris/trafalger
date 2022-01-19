import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Mulish', sans-serif",
  },
  palette: {
    primary: {
      main: "#458FF6",
      mainHover: "#206EA4",
    },
    secondary: {
      main: "#7D7987",
    },
  },
});

export default theme;
