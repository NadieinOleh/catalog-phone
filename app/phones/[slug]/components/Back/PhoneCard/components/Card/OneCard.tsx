'use client';

import React from 'react';

import Color from '../Color/Color';
import Description from '../Description/Description';
import Opacity from '../OpacityBlock/Opacity';
import ButtonBlock from '@/app/common/PhoneCard/components/ButtonBlock/ButtonBlock';
import Price from '../Price/Price';

import {BoxButton, BoxStyled} from './Styles';

const OneCard = () => {
  return (
    <BoxStyled>
      <Description title={'Available colors'} block={<Color />} />

      <Description title={'Select capacity'} block={<Opacity />} />

      <Price />

      <BoxButton>
        <ButtonBlock />
      </BoxButton>
    </BoxStyled>
  );
};
export default OneCard;
