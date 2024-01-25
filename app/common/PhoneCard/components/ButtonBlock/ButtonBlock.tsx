'use client';

import React from 'react';
import {Button} from '@mui/material';

import ButtonHeart from '@/app/common/ButtonHeart/ButtonHeart';
import { Phones } from '@/helpers/types';

import {BoxStyled} from './Styles';

const ButtonBlock = ({phone}: {phone: Phones}) => {
  return (
    <BoxStyled>
      <Button variant="contained">Add to cart</Button>
      <ButtonHeart phone={phone}/>
    </BoxStyled>
  );
};

export default ButtonBlock;
