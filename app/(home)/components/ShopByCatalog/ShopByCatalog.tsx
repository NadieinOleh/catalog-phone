'use client';

import React from 'react';
import {Grid} from '@mui/material';

import Title from '@/app/common/Title/Title';
import ImageBlock from './components/ImageBlock';

import {GridStyled, TextStyled, BoxStyled} from './Styles';

//do amount from data.length

const ShopByCatalog = ({amount = 0}) => {
  return (
    <BoxStyled>
      <Title title={'Hot prices'} />

      <Grid container spacing={3}>
        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/phone'} bg={'#FCDBC1'} image={'/image6.png'} />
          <TextStyled variant="h3">Mobile phones</TextStyled>
          <TextStyled color={'secondary.main'} variant="body1">
            {amount} models
          </TextStyled>
        </GridStyled>

        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/tablets'} bg={'#8D8D92'} image={'/image5.png'} />
          <TextStyled variant="h3">Tablets </TextStyled>
          <TextStyled color={'secondary.main'} variant="body1">
            42 models
          </TextStyled>
        </GridStyled>

        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/accessories'} bg={'#D53C51'} image={'/image7.png'} />
          <TextStyled variant="h3">Accessories </TextStyled>
          <TextStyled color={'secondary.main'} variant="body1">
            100 models
          </TextStyled>
        </GridStyled>
      </Grid>
    </BoxStyled>
  );
};

export default ShopByCatalog;
