'use client';

import {createTheme, ThemeProvider, ThemeOptions} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {NextAppDirEmotionCacheProvider} from './EmotionCache';
import { lightTheme } from './themes/themes';

const ThemeRegistry = ({children}: {children: React.ReactNode}) => {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
