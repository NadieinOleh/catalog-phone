'use client';

import React from 'react';

import Bin from '@/app/common/icons/Bin';
import Heart from '@/app/common/icons/Heart';
import BasketLinks from './BasketLinks/BasketLinks';

import {BoxStyled} from './Styles';

const Basket = () => {
  return (
    <BoxStyled>
      <BasketLinks icon={<Heart />} />
      <BasketLinks icon={<Bin />} />
    </BoxStyled>
  );
};

export default Basket;
