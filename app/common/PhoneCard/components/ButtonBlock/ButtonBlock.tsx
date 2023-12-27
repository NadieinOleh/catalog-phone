'use client';

import React from 'react';
import {Button} from '@mui/material';

import ButtonHeart from '@/app/common/ButtonHeart/ButtonHeart';

const ButtonBlock = () => {
  return (
    <>
      <Button variant="contained">Add to cart</Button>
      <ButtonHeart />
    </>
  );
};

export default ButtonBlock;
