'use client';

import React, {ReactNode} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {NextAppDirEmotionCacheProvider} from './EmotionCache';
import {lightTheme} from './themes/themes';

const ThemeRegistry = ({children}: {children: ReactNode}) => {
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
