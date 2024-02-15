'use client';

import React from 'react';

import Color from '../Color/Color';
import Description from '../Description/Description';
import Opacity from '../OpacityBlock/Opacity';
import Price from '../Price/Price';

import { BoxStyled} from './Styles';

const OneCard = () => {
  return (
    <BoxStyled>
      <Description title={'Available colors'} block={<Color />} />

      <Description title={'Select capacity'} block={<Opacity />} />

      <Price />
    </BoxStyled>
  );
};
export default OneCard;
