'use client';

import React from 'react';
import {Grid} from '@mui/material';
import {Phones} from '@/helpers/types';

import {ItemStyled} from './Styles';
import OneCard from './components/Card/OneCard';

const PhoneCard = ({phone}: {phone: Phones}) => {
  return (
    <Grid container columnSpacing={3}>
      <ItemStyled lg={6} xl={6} xs={12} item sx={{backgroundImage: `url(${phone.image})`}}></ItemStyled>
      <Grid lg={6} xl={6} xs={12} item>
        <OneCard />
      </Grid>
    </Grid>
  );
};

export default PhoneCard;
