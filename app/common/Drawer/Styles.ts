'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  margin: theme.spacing(3, 0)
}));
