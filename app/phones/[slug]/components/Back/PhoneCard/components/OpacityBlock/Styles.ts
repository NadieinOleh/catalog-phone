'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const BoxItemStyled = styled(Box)(({theme}) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(1),
}));
