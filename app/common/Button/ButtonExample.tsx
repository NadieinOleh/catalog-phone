'use client ';

import {Box,  Button,} from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';
import React from 'react';

const ButtonExample = () => {
  const {mode, setMode} = useColorScheme();

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}>
        {mode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  );
};

export default ButtonExample;
