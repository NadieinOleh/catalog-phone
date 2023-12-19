'use client';

import {Box, styled} from '@mui/material';

export const BoxLinksStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px',
  borderBottomColor: theme.palette.info.main,
  borderBottomStyle: 'solid',
}));
