'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
}));
