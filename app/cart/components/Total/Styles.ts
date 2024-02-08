'use client';

import {styled, Box} from '@mui/material';
import Link from 'next/link';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.secondary.main}`
}));

export const TextBlock = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.secondary.main}`
}));

export const LinkStyled = styled(Link)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.secondary.main,
}));
