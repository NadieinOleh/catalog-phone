'use client';

import {Box, styled, colors} from '@mui/material';
import Link from 'next/link';

export const LinkStyled = styled(Link)(({theme}) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '800',
  lineHeight: '11px',
  letterSpacing: '0.48px',
  position: 'relative',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '&:hover::before': {
    position: 'absolute',
    top: '200%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    content: "''",
    width: '50px',
    height: '3px',
    background: theme.palette.primary.main,
  },
}));

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(8),
}));

export const LogoStyled = styled(Link)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
