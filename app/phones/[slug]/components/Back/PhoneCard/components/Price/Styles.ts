'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));
