'use client';

import {Box, styled} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(8),
  padding: theme.spacing(3),
  borderTop: '1px',
  borderTopColor: theme.palette.info.main,
  borderTopStyle: 'solid',
}));
