'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  marginBottom: theme.spacing(3),
  maxWidth: '320px',
}));
