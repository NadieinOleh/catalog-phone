'use client';

import React, {ReactNode} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {NextAppDirEmotionCacheProvider} from './EmotionCache';
import {lightTheme, darkTheme} from './themes/themes';
import useColorModeStore from '@/app/store/ColorModeStore';

const ThemeRegistry = ({children}: {children: ReactNode}) => {
  const mode = useColorModeStore(state => state.mode)
  const themeMode = mode ? lightTheme : darkTheme

  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
