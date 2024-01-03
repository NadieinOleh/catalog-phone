'use client';

import React, {useEffect} from 'react';
import {Grid, Typography} from '@mui/material';

import Title from '@/app/common/Title/Title';
import ImageBlock from './components/ImageBlock';
import useStore from '@/app/store/store';

import {GridStyled, BoxStyled, LinkStyled} from './Styles';

const ShopByCatalog = ({amount = 0}) => {
  const getLength = useStore(state => state.getLength);

  useEffect(() => {
    getLength(amount);
    localStorage.setItem('length', amount.toString());
  }, [amount, getLength]);

  return (
    <BoxStyled>
      <Title title={'Shop by category'} />

      <Grid container spacing={3}>
        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/phones'} bg={'#FCDBC1'} image={'/image6.png'} />
          <LinkStyled href={'/phones'}>
            <Typography variant="h3">Mobile phones</Typography>
            <Typography color={'secondary.main'} variant="body1">
              {amount} models
            </Typography>
          </LinkStyled>
        </GridStyled>

        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/tablets'} bg={'#8D8D92'} image={'/image5.png'} />
          <LinkStyled href={'/tablets'}>
            <Typography variant="h3">Tablets </Typography>
            <Typography color={'secondary.main'} variant="body1">
              0 models
            </Typography>
          </LinkStyled>
        </GridStyled>

        <GridStyled item xl={4} xs={6}>
          <ImageBlock path={'/accessories'} bg={'#D53C51'} image={'/image7.png'} />
          <LinkStyled href={'/accessories'}>
            <Typography variant="h3">Accessories </Typography>
            <Typography color={'secondary.main'} variant="body1">
              0 models
            </Typography>
          </LinkStyled>
        </GridStyled>
      </Grid>
    </BoxStyled>
  );
};

export default ShopByCatalog;
