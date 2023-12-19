'use client';

import {Box, styled} from '@mui/material';

export const IconStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: '1px',
  borderLeftColor: theme.palette.info.main,
  borderLeftStyle: 'solid',
  padding: theme.spacing(3),
}));
