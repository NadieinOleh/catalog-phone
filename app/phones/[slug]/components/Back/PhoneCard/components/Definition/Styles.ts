'use client';

import {styled, Grid, Box} from '@mui/material';

export const GridStyled = styled(Grid)(({theme}) => ({
  marginBottom: theme.spacing(5),
}));
export const Title = styled(Box)(({theme}) => ({
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  marginBottom: theme.spacing(4),
}));

export const SubTitle = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

export const Article = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(4),
}));

export const TechStyled = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alighText: 'center',
}));
