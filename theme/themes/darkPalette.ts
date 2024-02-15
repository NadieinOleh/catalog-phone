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
    mode: "dark",
    primary: {
      light: "#FFD95B",  
      main: "#fff", 
      dark: "#313233",
    },
    secondary: {
      main: "#7E8D95", 
      light: "#66C1FF", 
      dark: "#004D7F", 
    },
    error: {
      main: "#F06292", 
      light: "#E57373",
      dark: "#D32F2F", 
    },
    warning: {
      main: "#FFB74D",
      light: "#FFD54F", 
      dark: "#FFA000", 
    },
    success: {
      main: "#66BB6A", 
      light: "#81C784", 
      dark: "#388E3C", 
    },
    info: {
      main: "#90A4AE", 
      light: "#B0BEC5", 
      dark: "#607D8B", 
      contrastText: "#FFFFFF", 
    },
    background: {
      default: "#1E1E1E", 
      black: "#000000", 
      grey: "#424242", 
      border: "#757575", 
      white: "#303030", 
    },
    text: {
      disabled: "#757575", 
      primary: "#FFFFFF", 
      secondary: "#E0E0E0", 
    },
  },
});

export default darkPalette;
