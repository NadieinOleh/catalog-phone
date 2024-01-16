'use client';

import {styled, Typography, Grid} from '@mui/material';
import Link from 'next/link';

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
}));

export const TypographyStyled = styled(Typography)(({theme}) => ({
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export const GridItemStyled = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
