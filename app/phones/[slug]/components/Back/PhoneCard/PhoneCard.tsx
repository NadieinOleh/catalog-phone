'use client';

import React from 'react';
import {Grid} from '@mui/material';
import OneCard from './components/Card/OneCard';
import {useDataContext} from '../../../context/useData';

import {ItemStyled} from './Styles';

const PhoneCard = () => {
  const {image} = useDataContext();

  return (
    <Grid container columnSpacing={3}>
      <ItemStyled lg={6} xl={6} xs={12} item sx={{backgroundImage: `url(${image})`}}></ItemStyled>
      <Grid lg={6} xl={6} xs={12} item>
        <OneCard />
      </Grid>
    </Grid>
  );
};

export default PhoneCard;
