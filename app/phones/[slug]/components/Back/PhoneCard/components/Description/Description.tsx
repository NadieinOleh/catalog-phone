'use client';

import React, {ReactNode} from 'react';
import {Box, Typography} from '@mui/material';

const Description = ({title, block}: {title: string; block: ReactNode}) => {
  return (
    <Box>
      <Typography variant="body2" color={'secondary.main'} sx={{marginBottom: '8px'}}>
        {title}
      </Typography>

      <Box>{block}</Box>
    </Box>
  );
};

export default Description;
