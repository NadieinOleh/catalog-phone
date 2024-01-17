'use client';

import React, {ReactNode} from 'react';
import {Box, Typography} from '@mui/material';

import {BoxStyled} from './Styles';

const Description = ({title, block}: {title: string; block: ReactNode}) => {
  return (
    <BoxStyled>
      <Typography variant="body2" color={'secondary.main'} sx={{marginBottom: '8px'}}>
        {title}
      </Typography>

      <Box>{block}</Box>
    </BoxStyled>
  );
};

export default Description;
