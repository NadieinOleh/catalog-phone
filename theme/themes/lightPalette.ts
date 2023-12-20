import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  export interface TypeBackground {
    black: string;
    grey: string;
    border: string;
    white: string;
  }
}

const lightPalette = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#FFE48D',
      main: '#313237',
      dark: '#313233',
    },
    secondary: {
      main: '#89939A',
      light: '#0079FF',
      dark: '#004694',
    },
    error: {
      main: '#FA886F',
      light: '#EB5757',
      dark: '#F24822',
    },
    warning: {
      main: '#F5903B',
      light: '#F6A766',
      dark: '#EC6C01',
    },
    success: {
      main: '#27AE60',
      light: '#27AE60',
      dark: '#2F7D31',
    },
    info: {
      main: '#B4BDC3',
      light: '#BDBDBF',
      dark: '#727272',
      contrastText: '#555555',
    },
    background: {
      default: '#FBFAFA',
      black: '#2C2C2D',
      grey: '#FAFBFC',
      border: '#EFF5FE',
      white: '#FFFFFF',
    },
    text: {
      disabled: '#FBFAFA',
      primary: '#E2E6E9',
      secondary: '#000',
    },
  },
});

export default lightPalette;
