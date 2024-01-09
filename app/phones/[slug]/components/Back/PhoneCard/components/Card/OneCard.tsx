'use client';

import {Box} from '@mui/material';
import React from 'react';
import Color from '../Color/Color';
import Description from '../Description/Description';

const OneCard = () => {
  return (
    <Box>
      <Description title={'Available colors'} block={<Color />} />
    </Box>
  );
};
export default OneCard;
