'use client';

import {Grid, styled, Typography, Box} from '@mui/material';

export const GridStyled = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TextStyled = styled(Typography)(() => ({
  alignSelf: 'flex-start',
}));

export const BoxStyled = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(10),
}));
