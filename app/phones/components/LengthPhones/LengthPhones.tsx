'use client';

import React from 'react';
import {Typography, useTheme} from '@mui/material';

const LengthPhones = () => {
  const length = localStorage.getItem('length');
  const theme = useTheme();

  return (
    <Typography color={'secondary.main'} sx={{margin: theme.spacing(1, 0, 5)}}>
      {length} models
    </Typography>
  );
};

export default LengthPhones;
