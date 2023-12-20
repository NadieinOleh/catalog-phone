'use client';

import {Box, styled} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.secondary.main}`,

  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },

  '&:hover path': {
    fill: theme.palette.primary.main,
  }
}));
