'use client';

import {styled, Typography} from '@mui/material';
import Link from 'next/link';

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
}));

export const TypographyStyled = styled(Typography)(({theme}) => ({
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
