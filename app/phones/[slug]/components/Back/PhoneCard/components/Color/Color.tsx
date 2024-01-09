'use client';

import React, {useState} from 'react';

import Black from '@/app/common/icons/Black';
import Primary from '@/app/common/icons/Primary';
import Secondary from '@/app/common/icons/Secondary';
import White from '@/app/common/icons/White';

import {BoxStyled} from './Styles';
import {Box} from '@mui/material';

//change logic

const Color = () => {
  const [primary, setPrimary] = useState('#E2E6E9');
  const [secondary, setSecondary] = useState('#E2E6E9');
  const [black, setBlack] = useState('#E2E6E9');
  const [white, setWhite] = useState('#E2E6E9');

  const toggleColorPrimary = () => {
    if (primary === '#E2E6E9') {
      setPrimary('#313237');
    }

    if (primary === '#313237') {
      setPrimary('#E2E6E9');
    }
  };

  const toggleColorSecondary = () => {
    if (secondary === '#E2E6E9') {
      setSecondary('#313237');
    }

    if (secondary === '#313237') {
      setSecondary('#E2E6E9');
    }
  };

  const toggleColorBlack = () => {
    if (black === '#E2E6E9') {
      setBlack('#313237');
    }

    if (black === '#313237') {
      setBlack('#E2E6E9');
    }
  };

  const toggleColorWhite = () => {
    if (white === '#E2E6E9') {
      setWhite('#313237');
    }

    if (white === '#313237') {
      setWhite('#E2E6E9');
    }
  };

  const changeColor = (name: string) => {
    switch (name) {
      case 'primary':
        toggleColorPrimary();
        return;
      case 'secondary':
        toggleColorSecondary();
        return;
      case 'black':
        toggleColorBlack();
        return;
      case 'white':
        toggleColorWhite();
        return;

      default:
        return;
    }
  };

  return (
    <BoxStyled>
      <Box onClick={() => changeColor('primary')}>
        <Primary color={primary} />
      </Box>
      <Box onClick={() => changeColor('secondary')}>
        <Secondary color={secondary} />
      </Box>
      <Box onClick={() => changeColor('black')}>
        <Black color={black} />
      </Box>
      <Box onClick={() => changeColor('white')}>
        <White color={white} />
      </Box>
    </BoxStyled>
  );
};

export default Color;
