'use client';

import React from 'react';
import {Typography} from '@mui/material';

import ArrowBlock from '@/app/common/ArrowBlock/ArrowBlock';
import ArrowUp from '@/app/common/icons/ArrowUp';
import {BoxStyled} from './Styles';

const BackToTop = () => {
  return (
    <BoxStyled>
      <Typography variant="body2">Back to top</Typography>
      <ArrowBlock link="#header" icon={<ArrowUp />} />
    </BoxStyled>
  );
};

export default BackToTop;
