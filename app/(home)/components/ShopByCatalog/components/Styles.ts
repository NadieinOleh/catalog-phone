'use client';

import {Box, styled} from '@mui/material';
import Image from 'next/image';

export const BoxStyled = styled(Box)(({theme}) => ({
  width: '429px',
  height: '368px',
  marginBottom: theme.spacing(3),
}));

export const ImageStyled = styled(Image)(() => ({
  objectFit: 'contain',
  objectPosition: 'right',
}));
