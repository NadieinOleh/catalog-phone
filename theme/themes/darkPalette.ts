import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  export interface TypeBackground {
    black: string;
    grey: string;
    border: string;
    white: string;
  }
}

const darkPalette = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#FFE48D',
      main: '#313237',
      dark: '#FFCD2B',
    },
    secondary: {
      main: '#89939A',
      light: '#0079FF',
      dark: '#004694',
    },
    error: {
      main: '#FA886F',
      light: '#FB5D3A',
      dark: '#F24822',
    },
    warning: {
      main: '#F5903B',
      light: '#F6A766',
      dark: '#EC6C01',
    },
    success: {
      main: '#3BA93E',
      light: '#75D878',
      dark: '#2F7D31',
    },
    info: {
      main: '#8C8C90',
      light: '#BDBDBF',
      dark: '#727272',
      contrastText: '#555555',
    },
    background: {
      default: '#FBFAFA',
      black: '#2C2C2D',
      grey: '#E0E0E0',
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

export default darkPalette;
