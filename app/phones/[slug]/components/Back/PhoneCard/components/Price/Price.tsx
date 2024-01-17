'use client';

import React from 'react';
import {Typography} from '@mui/material';
import {useDataContext} from '@/app/phones/[slug]/context/useData';

import {BoxStyled} from './Styles';

const Price = () => {
  const {price, isSale, sale} = useDataContext();

  return (
    <>
      {isSale ? (
        <BoxStyled>
          <Typography variant={'h1'}>${price}</Typography>
          <Typography sx={{textDecoration: 'line-through'}} color={'secondary.main'} variant={'h2'}>
            {sale}
          </Typography>
        </BoxStyled>
      ) : (
        <Typography sx={{marginBottom: '16px'}} variant={'h1'}>
          ${price}
        </Typography>
      )}
    </>
  );
};

export default Price;
