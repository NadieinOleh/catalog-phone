'use client';

import {useTheme} from '@emotion/react';
import {Typography} from '@mui/material';
import React, {useState} from 'react';

import {BoxStyled, BoxItemStyled} from './Styles';

const Opacity = () => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const theme = useTheme();

  const handleClick = (box: number) => setSelectedBox(box);

  return (
    <BoxStyled>
      <BoxItemStyled
        style={{backgroundColor: selectedBox === 64 ? theme.palette.primary.main : theme.palette.background.white}}
        onClick={() => handleClick(64)}>
        <Typography variant="body1" color={selectedBox === 64 ? 'background.white' : ' primary.main'}>
          64 GB
        </Typography>
      </BoxItemStyled>
      <BoxItemStyled
        style={{backgroundColor: selectedBox === 256 ? theme.palette.primary.main : theme.palette.background.white}}
        onClick={() => handleClick(256)}>
        <Typography variant="body1" color={selectedBox === 256 ? 'background.white' : ' primary.main'}>
          256 GB
        </Typography>
      </BoxItemStyled>
      <BoxItemStyled
        style={{backgroundColor: selectedBox === 512 ? theme.palette.primary.main : theme.palette.background.white}}
        onClick={() => handleClick(512)}>
        <Typography variant="body1" color={selectedBox === 512 ? 'background.white' : ' primary.main'}>
          512 GB
        </Typography>
      </BoxItemStyled>
    </BoxStyled>
  );
};

export default Opacity;
