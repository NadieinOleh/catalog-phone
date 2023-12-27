'use client';

import {Box, styled, Typography} from '@mui/material';

export const BoxPrice = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(1),
}));

export const BoxDesc = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const SaleText = styled(Typography)(() => ({
  textDecoration: 'line-through',
}));
