'use client';

import {styled, Box} from '@mui/material';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)(({theme}) => ({
  '& .slick-dots': {
    bottom: -30,
  },

  '& .slick-dots li button:before': {
    background: theme.palette.secondary.main,
    opacity: 1,
    height: '2px',
    width: '20px',
    content: '""',
  },

  '& .slick-dots li.slick-active button:before': {
    background: theme.palette.primary.main,
  },
}));

export const BoxStyled = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(9),
}));
