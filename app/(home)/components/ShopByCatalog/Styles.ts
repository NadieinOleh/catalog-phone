'use client';

import {Grid, styled, Box} from '@mui/material';
import Link from 'next/link';

export const GridStyled = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const BoxStyled = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(10),
}));

export const LinkStyled = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  alignSelf: 'flex-start',
}));
