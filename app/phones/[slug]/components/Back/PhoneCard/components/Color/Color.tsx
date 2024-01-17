'use client';

import React, {useState} from 'react';

import Black from '@/app/common/icons/Black';
import Primary from '@/app/common/icons/Primary';
import Secondary from '@/app/common/icons/Secondary';
import White from '@/app/common/icons/White';

import {BoxStyled} from './Styles';
import {Box} from '@mui/material';

type ColorType = {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  [key: string]: string;
};

const Color = () => {
  const [color, setColor] = useState<ColorType>({
    primary: '#E2E6E9',
    secondary: '#E2E6E9',
    black: '#E2E6E9',
    white: '#E2E6E9',
  });

  const changeColor = (name: keyof ColorType) => {
    const newColor = color[name] === '#E2E6E9' ? '#313237' : '#E2E6E9';
    setColor({
      primary: '#E2E6E9',
      secondary: '#E2E6E9',
      black: '#E2E6E9',
      white: '#E2E6E9',
      [name]: newColor,
    });
  };

  return (
    <BoxStyled>
      <Box onClick={() => changeColor('primary')}>
        <Primary color={color.primary} />
      </Box>
      <Box onClick={() => changeColor('secondary')}>
        <Secondary color={color.secondary} />
      </Box>
      <Box onClick={() => changeColor('black')}>
        <Black color={color.black} />
      </Box>
      <Box onClick={() => changeColor('white')}>
        <White color={color.white} />
      </Box>
    </BoxStyled>
  );
};

export default Color;
