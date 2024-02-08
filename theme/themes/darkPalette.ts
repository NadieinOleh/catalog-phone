import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    black: string;
    grey: string;
    border: string;
    white: string;
  }
}

const darkPalette = createTheme({
  palette: {
    mode: "dark", // Set the mode to dark
    primary: {
      light: "#FFD95B", // Adjust light shade of primary color
      main: "#fff", // Change primary main color to a darker shade
      dark: "#313233",
    },
    secondary: {
      main: "#7E8D95", // Adjust secondary main color
      light: "#66C1FF", // Adjust light shade of secondary color
      dark: "#004D7F", // Adjust dark shade of secondary color
    },
    error: {
      main: "#F06292", // Adjust error color
      light: "#E57373", // Adjust light shade of error color
      dark: "#D32F2F", // Adjust dark shade of error color
    },
    warning: {
      main: "#FFB74D", // Adjust warning color
      light: "#FFD54F", // Adjust light shade of warning color
      dark: "#FFA000", // Adjust dark shade of warning color
    },
    success: {
      main: "#66BB6A", // Adjust success color
      light: "#81C784", // Adjust light shade of success color
      dark: "#388E3C", // Adjust dark shade of success color
    },
    info: {
      main: "#90A4AE", // Adjust info color
      light: "#B0BEC5", // Adjust light shade of info color
      dark: "#607D8B", // Adjust dark shade of info color
      contrastText: "#FFFFFF", // Adjust contrast text for better visibility
    },
    background: {
      default: "#1E1E1E", // Change default background color to a darker shade
      black: "#000000", // Adjust black color
      grey: "#424242", // Adjust grey color
      border: "#757575", // Adjust border color
      white: "#303030", // Adjust white color
    },
    text: {
      disabled: "#757575", // Adjust disabled text color
      primary: "#FFFFFF", // Change primary text color to white
      secondary: "#E0E0E0", // Adjust secondary text color
    },
  },
});

export default darkPalette;
