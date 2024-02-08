'use client';

import {styled, Box} from '@mui/material';

export const BoxStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));
