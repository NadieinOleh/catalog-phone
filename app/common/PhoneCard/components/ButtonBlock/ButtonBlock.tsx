'use client';

import React from 'react';
import {Button} from '@mui/material';

import ButtonHeart from '@/app/common/ButtonHeart/ButtonHeart';

import {BoxStyled} from './Styles';

const ButtonBlock = () => {
  return (
    <BoxStyled>
      <Button variant="contained">Add to cart</Button>
      <ButtonHeart />
    </BoxStyled>
  );
};

export default ButtonBlock;
